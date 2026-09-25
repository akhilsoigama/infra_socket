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
        
        const oldTarget1 = `        /* Thin Scrollbar for Sidebar */
        #sidebar::-webkit-scrollbar { width: 4px; }
        #sidebar::-webkit-scrollbar-track { background: transparent; }
        #sidebar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
        .dark #sidebar::-webkit-scrollbar-thumb { background: #475569; }
        #sidebar { scrollbar-width: thin; scrollbar-color: #cbd5e1 transparent; }
        .dark #sidebar { scrollbar-color: #475569 transparent; }`;

        const newTarget = `        /* Custom Thin Scrollbar for all scrollable elements */
        ::-webkit-scrollbar { width: 4px; height: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
        .dark ::-webkit-scrollbar-thumb { background: #475569; }
        * { scrollbar-width: thin; scrollbar-color: #cbd5e1 transparent; }
        .dark * { scrollbar-color: #475569 transparent; }`;

        if (content.includes(oldTarget1)) {
            content = content.replace(oldTarget1, newTarget);
            changed = true;
        }

        if (changed) {
            fs.writeFileSync(filePath, content);
            console.log('Patched global scrollbar: ' + filePath);
            patchedCount++;
        }
    }
}

console.log('Total patched HTML files: ' + patchedCount);
