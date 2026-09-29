const fs = require('fs');
const path = require('path');

const ROOT_DIR = __dirname;
const MODULE_DIR = '14-sensor_connection';
const MODULE_FILE = path.join(ROOT_DIR, MODULE_DIR, 'sensor_connection.html');
const CANONICAL_SIDEBAR_FILE = path.join(ROOT_DIR, '01-overview', 'key-features.html');
const SECTION_PATTERN = /^\d{2}-/;

const canonicalPage = fs.readFileSync(CANONICAL_SIDEBAR_FILE, 'utf8');
const canonicalSidebar = canonicalPage.match(/<aside id="sidebar"[\s\S]*?<\/aside>/);

if (!canonicalSidebar) {
    throw new Error(`Could not find the canonical sidebar in ${CANONICAL_SIDEBAR_FILE}`);
}

let sidebarHtml = canonicalSidebar[0];
sidebarHtml = sidebarHtml.replace(
    /(<a href="\.\.\/01-overview\/key-features\.html"\s+class=")[^"]*(")/,
    '$1block px-2 py-1.5 text-sm rounded transition-colors text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200$2'
);
sidebarHtml = sidebarHtml.replace(
    /(<a href="\.\.\/14-sensor_connection\/sensor_connection\.html" class=")[^"]*(")/,
    '$1block px-2 py-1.5 text-sm rounded transition-colors bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium$2'
);
sidebarHtml = sidebarHtml.replace(
    /(<details class="mb-1 group") open>/,
    '$1>'
);

const moduleLabelIndex = sidebarHtml.indexOf('Sensor Connection Module');
const moduleDetailsStart = sidebarHtml.lastIndexOf('<details', moduleLabelIndex);
const moduleDetailsEnd = sidebarHtml.indexOf('>', moduleDetailsStart);

if (moduleLabelIndex === -1 || moduleDetailsStart === -1 || moduleDetailsEnd === -1) {
    throw new Error('Could not find the Sensor Connection section in the canonical sidebar');
}

if (!/\bopen\b/.test(sidebarHtml.slice(moduleDetailsStart, moduleDetailsEnd))) {
    sidebarHtml = `${sidebarHtml.slice(0, moduleDetailsEnd)} open${sidebarHtml.slice(moduleDetailsEnd)}`;
}

sidebarHtml = sidebarHtml.replace(
    /<button onclick="toggleSidebar\(\)"(?![^>]*aria-label=)/,
    '<button onclick="toggleSidebar()" aria-label="Close sidebar"'
);

const responsiveDiagramCss = `
        .markdown-body .mermaid {
            max-width: 100%;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
        }
        .markdown-body .mermaid svg {
            display: block;
            max-width: none !important;
            height: auto !important;
        }`;

const sectionDirs = fs.readdirSync(ROOT_DIR, { withFileTypes: true })
    .filter(entry => entry.isDirectory() && SECTION_PATTERN.test(entry.name))
    .map(entry => entry.name);

let updatedFiles = 0;

for (const sectionDir of sectionDirs) {
    const sectionPath = path.join(ROOT_DIR, sectionDir);
    for (const file of fs.readdirSync(sectionPath).filter(name => name.endsWith('.html'))) {
        const filePath = path.join(sectionPath, file);
        const original = fs.readFileSync(filePath, 'utf8');
        let content = original;

        if (filePath === MODULE_FILE) {
            const sidebarPattern = /<aside id="sidebar"[\s\S]*?<\/aside>/;
            if (!sidebarPattern.test(content)) {
                throw new Error(`Could not find the sidebar in ${MODULE_FILE}`);
            }
            content = content.replace(sidebarPattern, sidebarHtml);
            content = content
                .replace('const query = e.target.value.toLowerCase();', "const query = e.target.value.replace(/\\s+/g, ' ').trim().toLowerCase();")
                .replace('title: link.textContent.trim(),', "title: link.textContent.replace(/\\s+/g, ' ').trim(),")
                .replace("section: link.closest('details')?.querySelector('summary')?.textContent.trim() || '',", "section: link.closest('details')?.querySelector('summary')?.textContent.replace(/\\s+/g, ' ').trim() || '',");
        }

        if (content.includes('class="language-mermaid"')) {
            if (content.includes('.mermaid svg { max-width: none !important; }')) {
                content = content.replace(
                    /\.mermaid svg\s*\{\s*max-width:\s*none\s*!important;\s*\}/g,
                    '.mermaid svg { max-width: none !important; height: auto !important; }'
                );
            }

            content = content.replace(
                /\.markdown-body \.mermaid svg\s*\{\s*display:\s*block;\s*max-width:\s*100%\s*!important;\s*height:\s*auto\s*!important;\s*\}/g,
                '.markdown-body .mermaid svg { display: block; max-width: none !important; height: auto !important; }'
            );

            if (!content.includes('.markdown-body .mermaid svg')) {
                content = content.replace('</style>', `${responsiveDiagramCss}\n    </style>`);
            }

            content = content.replace(/startOnLoad:\s*true/g, 'startOnLoad: false');
            if (!content.includes('await mermaid.run();')) {
                const mermaidInitialization = /mermaid\.initialize\(\{[\s\S]*?^\s*\}\);/m;
                if (!mermaidInitialization.test(content)) {
                    throw new Error(`Could not find Mermaid initialization in ${filePath}`);
                }
                const responsiveRenderCode = [
                    '',
                    '        await mermaid.run();',
                    "        document.querySelectorAll('.mermaid svg').forEach(svg => {",
                    '            const width = svg.viewBox.baseVal.width;',
                    "            if (width <= 0) throw new Error('Mermaid rendered an SVG without a usable viewBox.');",
                    "            svg.setAttribute('width', String(width));",
                    '        });'
                ].join('\n');
                content = content.replace(
                    mermaidInitialization,
                    initialization => `${initialization}${responsiveRenderCode}`
                );
            }
        }

        if (content !== original) {
            fs.writeFileSync(filePath, content);
            updatedFiles++;
        }
    }
}

console.log(`Updated Sensor Connection navigation and responsive diagrams in ${updatedFiles} HTML files.`);
