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

        content = content.replace(
            /<span class="font-bold text-lg text-gray-900 dark:text-gray-100">Menu<\/span>/g,
            '<span class="font-bold text-lg text-gray-900 dark:text-gray-100">Documentation</span>'
        );

        if (content !== initialContent) {
            fs.writeFileSync(filePath, content);
            console.log('Patched Menu for: ' + filePath);
            patchedCount++;
        }
    }
}
console.log('Total Menu patched: ' + patchedCount);
