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

        // Find the aside for TOC
        // It currently looks like:
        // <aside class="hidden lg:block w-64 p-8 overflow-y-auto border-l border-gray-200/50 dark:border-gray-800/50 transition-colors duration-200">
        // <div class="text-xs font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600 dark:from-sky-400 dark:to-indigo-400 mb-6 flex items-center gap-2"><i class="fa-solid fa-list-ul text-sky-500"></i> On this page</div>
        // <ul class="text-sm border-l-2 border-gray-100 dark:border-gray-800 ml-1 pl-4 space-y-3 relative">
        
        content = content.replace(
            /<aside class="hidden lg:block w-64 p-8 overflow-y-auto border-l border-gray-200\/50 dark:border-gray-800\/50 transition-colors duration-200">\s*<div class="[^"]*">\s*<i class="[^"]*"><\/i>\s*On this page\s*<\/div>\s*<ul class="text-sm border-l-2 border-gray-100 dark:border-gray-800 ml-1 pl-4 space-y-3 relative">/,
            '<aside class="hidden lg:block w-72 p-8 overflow-y-auto transition-colors duration-200">\n            <div class="border-l-2 border-gray-200 dark:border-gray-700 ml-4">\n                <div class="text-sm text-gray-700 dark:text-gray-300 mb-4 pl-4 pt-1">Table of Contents</div>\n                <ul class="text-sm pl-4 space-y-4">'
        );
        
        // Let's also style the list items to look exactly like the screenshot (darker text, slightly larger line height)
        // Wait, the links already have classes: text-gray-500 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 block transition-all duration-300 hover:translate-x-1
        // We can make them look more like the screenshot by changing the text color to a darker gray, removing the translate-x hover, and keeping it simple.
        content = content.replace(/class="text-gray-500 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 block transition-all duration-300 hover:translate-x-1"/g, 'class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 block transition-colors duration-200 leading-relaxed"');
        
        // Also if any pl-4 is there on li, maybe remove it if it's too indented? The image shows some indentation. We will leave it as is.
        
        if (content !== initialContent) {
            fs.writeFileSync(filePath, content);
            console.log('Patched TOC for: ' + filePath);
            patchedCount++;
        }
    }
}
console.log('Total TOC patched: ' + patchedCount);
