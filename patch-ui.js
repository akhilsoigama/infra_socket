const fs = require('fs');
const path = require('path');

const SECTIONS = [
    '01-overview', '02-system-architecture', '03-hardware', '04-signal-processing',
    '05-ai-ml', '06-software', '07-data', '08-testing', '09-calibration-validation',
    '10-deployment', '11-security-reliability', '12-cost-and-feasibility',
    '13-research', '16-roadmap'
];

const ROOT_DIR = __dirname;
let patchedCount = 0;

for (const section of SECTIONS) {
    const dirPath = path.join(ROOT_DIR, section);
    if (!fs.existsSync(dirPath)) continue;

    const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.html'));

    for (const file of files) {
        const filePath = path.join(dirPath, file);
        let content = fs.readFileSync(filePath, 'utf8');
        let initialContent = content;

        // 1. Upgrade Header
        content = content.replace(/<header\s+class="([^"]*)"/, (match, classes) => {
            if (classes.includes('sticky top-0')) return match;
            let newClasses = classes.replace('relative', 'sticky top-0 backdrop-blur-md');
            newClasses = newClasses.replace('bg-white dark:bg-gray-900', 'bg-white/80 dark:bg-gray-900/80 border-gray-200/50 dark:border-gray-800/50');
            return `<header class="${newClasses}"`;
        });

        // 2. Upgrade Left Sidebar
        content = content.replace(/<aside\s+id="sidebar"\s+class="([^"]*)"/, (match, classes) => {
            if (classes.includes('backdrop-blur-xl')) return match;
            let newClasses = classes.replace('bg-gray-50 dark:bg-gray-900 md:dark:bg-gray-900/50', 'bg-gray-50/90 dark:bg-gray-900/80 md:dark:bg-gray-900/70 backdrop-blur-xl');
            newClasses = newClasses.replace('border-gray-200 dark:border-gray-800', 'border-gray-200/50 dark:border-gray-800/50');
            return `<aside id="sidebar" class="${newClasses}"`;
        });
        
        // 3. Upgrade Right TOC Area container
        content = content.replace(/<aside\s+class="hidden lg:block w-64 p-8 overflow-y-auto border-l border-gray-200 dark:border-gray-800 transition-colors duration-200"/, 
        '<aside class="hidden lg:block w-64 p-8 overflow-y-auto border-l border-gray-200/50 dark:border-gray-800/50 transition-colors duration-200"');

        // 4. Upgrade TOC title and list
        content = content.replace(
            /<div class="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">\s*On this\s+page\s*<\/div>\s*<ul class="text-sm">/g, 
            '<div class="text-xs font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600 dark:from-sky-400 dark:to-indigo-400 mb-6 flex items-center gap-2"><i class="fa-solid fa-list-ul text-sky-500"></i> On this page</div>\n            <ul class="text-sm border-l-2 border-gray-100 dark:border-gray-800 ml-1 pl-4 space-y-3 relative">'
        );
        
        // 5. Change TOC link hover effects
        const oldTocLink = 'class="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 block transition-colors"';
        const newTocLink = 'class="text-gray-500 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 block transition-all duration-300 hover:translate-x-1"';
        content = content.replaceAll(oldTocLink, newTocLink);

        // 6. Sidebar link hover upgrades (left menu)
        const oldSidebarLink = 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200';
        const newSidebarLink = 'text-gray-600 dark:text-gray-400 hover:bg-sky-50 dark:hover:bg-sky-900/30 hover:text-sky-700 dark:hover:text-sky-300 transition-all duration-200';
        content = content.replaceAll(oldSidebarLink, newSidebarLink);

        // 7. Add Premium CSS
        const extraCSS = `
        /* Premium UI Overrides */
        .markdown-body h1 {
            font-size: 2.75rem;
            font-weight: 800;
            margin-bottom: 2rem;
            line-height: 1.2;
            background: linear-gradient(135deg, #0ea5e9, #6366f1);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            display: inline-block;
        }
        .markdown-body h2 {
            color: #0f172a;
            position: relative;
            padding-bottom: 0.75rem;
            border-bottom: none !important;
        }
        .dark .markdown-body h2 {
            color: #f8fafc;
        }
        .markdown-body h2::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            height: 3px;
            width: 60px;
            background: linear-gradient(to right, #0ea5e9, #6366f1);
            border-radius: 3px;
        }
        .markdown-body pre {
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            border: 1px solid rgba(14, 165, 233, 0.15);
            transition: transform 0.2s, box-shadow 0.2s;
            border-radius: 8px;
        }
        .markdown-body pre:hover {
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        .markdown-body blockquote {
            border-left: 4px solid #6366f1;
            background: linear-gradient(to right, #eef2ff, transparent);
            border-radius: 0 8px 8px 0;
            padding: 1.25rem;
        }
        .dark .markdown-body blockquote {
            background: linear-gradient(to right, rgba(99, 102, 241, 0.1), transparent);
            color: #cbd5e1;
        }
        .markdown-body table th {
            background: #f8fafc;
            color: #334155;
            text-transform: uppercase;
            font-size: 0.75rem;
            letter-spacing: 0.05em;
            padding: 1rem;
        }
        .dark .markdown-body table th {
            background: #1e293b;
            color: #94a3b8;
        }
        .markdown-body table td {
            padding: 1rem;
        }
        .markdown-body table tr {
            transition: background-color 0.2s;
        }
        .markdown-body table tr:hover {
            background-color: #f1f5f9;
        }
        .dark .markdown-body table tr:hover {
            background-color: #0f172a;
        }
        /* Custom scrollbar for webkit */
        ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }
        ::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 8px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #94a3b8;
        }
        .dark ::-webkit-scrollbar-thumb {
            background: #475569;
        }
        .dark ::-webkit-scrollbar-thumb:hover {
            background: #64748b;
        }
        `;
        
        if (!content.includes('Premium UI Overrides')) {
            content = content.replace('</style>', extraCSS + '\n    </style>');
        }

        if (content !== initialContent) {
            fs.writeFileSync(filePath, content);
            console.log('Patched UI for: ' + filePath);
            patchedCount++;
        }
    }
}
console.log('Total UI patched: ' + patchedCount);
