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

        // 1. Convert .md links to .html (handling both href="file.md" and href="file.md#anchor")
        content = content.replace(/href="([^"]+)\.md"/g, 'href="$1.html"');
        content = content.replace(/href="([^"]+)\.md#/g, 'href="$1.html#');

        // 2. Inject Premium Terminal UI for ASCII art and code blocks
        const newPreCSS = `
        /* Ultimate Terminal UI for pre blocks */
        .markdown-body pre {
            background-color: #1e293b !important; /* Deep Slate 800 */
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.15) !important;
            border: 1px solid #334155 !important;
            border-radius: 0.75rem !important;
            padding: 1.5rem !important;
            overflow-x: auto;
            color: #cbd5e1 !important; /* Fallback text color */
        }
        .markdown-body pre:hover {
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.15) !important;
        }
        .markdown-body pre code {
            font-family: 'JetBrains Mono', monospace !important;
            line-height: 1.6 !important;
            color: inherit;
        }
        .dark .markdown-body pre {
            background-color: #0f172a !important; /* Deeper Slate 900 */
            border-color: #1e293b !important;
        }
        /* Override Highlight.js colors to look better on dark background in both light/dark modes */
        .markdown-body pre code.hljs {
            background: transparent !important;
            color: #e2e8f0 !important;
        }
        `;

        if (!content.includes('Ultimate Terminal UI for pre blocks')) {
            content = content.replace('</style>', newPreCSS + '\n    </style>');
        }

        if (content !== initialContent) {
            fs.writeFileSync(filePath, content);
            patchedCount++;
        }
    }
}
console.log('Total files patched for .md links and Terminal UI: ' + patchedCount);
