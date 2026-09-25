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

        let changed = false;

        // Fix main tag padding and width
        const oldMain = `<main class="flex-1 overflow-y-auto p-8 md:px-16 lg:px-24 bg-white dark:bg-gray-900 transition-colors duration-200">`;
        const newMain = `<main class="flex-1 overflow-y-auto p-4 md:p-8 md:px-16 lg:px-24 bg-white dark:bg-gray-900 transition-colors duration-200 w-full overflow-x-hidden">`;
        if (content.includes(oldMain)) {
            content = content.replace(oldMain, newMain);
            changed = true;
        }

        // Add overflow to mermaid if not exists
        if (content.includes('.mermaid svg') && !content.includes('.mermaid { max-width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; }')) {
            content = content.replace('/* Mermaid dark mode overrides */', '/* Mermaid dark mode overrides */\n        .mermaid { max-width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; }');
            changed = true;
        }

        // Add max-width 100% to markdown-body pre and overflow scrolling
        if (content.includes('.markdown-body pre { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; padding: 1rem; overflow-x: auto; margin-bottom: 1.5rem; }')) {
            content = content.replace('.markdown-body pre { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; padding: 1rem; overflow-x: auto; margin-bottom: 1.5rem; }', '.markdown-body pre { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; padding: 1rem; overflow-x: auto; margin-bottom: 1.5rem; -webkit-overflow-scrolling: touch; max-width: 100%; }');
            changed = true;
        }

        // Add table overflow handling if it doesn't have display block yet
        if (content.includes('.markdown-body table { width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; }')) {
            content = content.replace('.markdown-body table { width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; }', '.markdown-body table { width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; display: block; overflow-x: auto; white-space: nowrap; -webkit-overflow-scrolling: touch; }');
            changed = true;
        } else if (content.includes('.markdown-body table { width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; display: block; overflow-x: auto; white-space: nowrap; }')) {
            content = content.replace('.markdown-body table { width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; display: block; overflow-x: auto; white-space: nowrap; }', '.markdown-body table { width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; display: block; overflow-x: auto; white-space: nowrap; -webkit-overflow-scrolling: touch; }');
            changed = true;
        }

        if (changed) {
            fs.writeFileSync(filePath, content);
            console.log('Patched: ' + filePath);
            patchedCount++;
        }
    }
}

console.log('Total patched HTML files: ' + patchedCount);
