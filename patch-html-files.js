const fs = require('fs');
const path = require('path');

const SECTIONS = [
    '01-overview', '02-system-architecture', '03-hardware', '04-signal-processing',
    '05-ai-ml', '06-software', '07-data', '08-testing', '09-calibration-validation',
    '10-deployment', '11-security-reliability', '12-cost-and-feasibility',
    '13-research', '14-sensor_connection', '16-roadmap'
];

const ROOT_DIR = __dirname;
const sensorConnectionLink = `<a href="../14-sensor_connection/sensor_connection.html" class="block cursor-pointer select-none text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 flex items-center justify-between px-2 py-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"><span class="flex items-center gap-2"><i class="fa-solid fa-plug w-4 text-center text-gray-500 dark:text-gray-400"></i> Sensor Connection</span><i class="fa-solid fa-chevron-right text-[10px] text-gray-400"></i></a>`;
const sensorConnectionSearchEntry = '{"title":"Sensor Connection","section":"Sensor Connection","url":"../14-sensor_connection/sensor_connection.html"},';

const oldHeaderRegex = /<header class="h-auto min-h-\[4rem\] py-2 md:h-16 md:py-0 flex items-center justify-between px-6 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 z-50 transition-colors duration-200">\s*<div class="flex items-center gap-2 font-bold text-lg">\s*<img src="\.\.\/logo-removebg-preview\.png" alt="" class="logo">InfraSocket\s*<\/div>/;

const newHeader = `<header class="h-auto min-h-[4rem] py-2 md:h-16 md:py-0 flex items-center justify-between px-6 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 z-30 transition-colors duration-200 relative">
        <div class="flex items-center gap-2 font-bold text-lg">
            <button onclick="toggleSidebar()" class="md:hidden mr-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" aria-label="Toggle Sidebar">
                <i class="fa-solid fa-bars text-xl"></i>
            </button>
            <img src="../logo-removebg-preview.png" alt="" class="logo">InfraSocket
        </div>`;

const oldSidebarRegex = /<div class="flex flex-1 overflow-hidden">\s*<aside class="hidden md:block w-72 bg-gray-50 dark:bg-gray-900\/50 border-r border-gray-200 dark:border-gray-800 overflow-y-auto p-6 transition-colors duration-200">/;

const newSidebar = `<div class="flex flex-1 overflow-hidden relative">
        <div id="sidebar-overlay" onclick="toggleSidebar()" class="fixed inset-0 bg-gray-900/50 dark:bg-black/50 z-40 hidden md:hidden transition-opacity"></div>
        <aside id="sidebar" class="fixed md:static inset-y-0 left-0 z-50 w-72 bg-gray-50 dark:bg-gray-900 md:dark:bg-gray-900/50 border-r border-gray-200 dark:border-gray-800 overflow-y-auto p-6 transition-transform duration-300 transform -translate-x-full md:translate-x-0 h-full md:h-auto shadow-2xl md:shadow-none">
            <div class="flex items-center justify-between md:hidden mb-6">
                <span class="font-bold text-lg text-gray-900 dark:text-gray-100">Menu</span>
                <button onclick="toggleSidebar()" class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    <i class="fa-solid fa-xmark text-2xl"></i>
                </button>
            </div>`;

const oldScriptRegex = /\s*}\s*<\/script>\s*<style>/;

const newScript = `
        }
        
        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('sidebar-overlay');
            sidebar.classList.toggle('-translate-x-full');
            overlay.classList.toggle('hidden');
        }
    </script>
    <style>`;

let patchedCount = 0;

for (const section of SECTIONS) {
    const dirPath = path.join(ROOT_DIR, section);
    if (!fs.existsSync(dirPath)) continue;

    const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.html'));

    for (const file of files) {
        const filePath = path.join(dirPath, file);
        let content = fs.readFileSync(filePath, 'utf8');

        let changed = false;

        const aiMlIndex = content.indexOf('fa-brain w-4 text-center text-gray-500 dark:text-gray-400');
        const sensorLinkIndex = content.indexOf('href="../14-sensor_connection/sensor_connection.html"');
        if (aiMlIndex !== -1 && (sensorLinkIndex === -1 || sensorLinkIndex > aiMlIndex)) {
            const aiMlDetailsIndex = content.lastIndexOf('<details class="mb-1 group">', aiMlIndex);
            if (aiMlDetailsIndex !== -1) {
                content = content.slice(0, aiMlDetailsIndex) + sensorConnectionLink + '\n            ' + content.slice(aiMlDetailsIndex);
                changed = true;
            }
        }

        if (!content.includes(sensorConnectionSearchEntry.slice(0, -1)) && /const searchIndex = \[\s*\{/.test(content)) {
            const updatedContent = content.replace('const searchIndex = [', 'const searchIndex = [' + sensorConnectionSearchEntry);
            if (updatedContent !== content) {
                content = updatedContent;
                changed = true;
            }
        }

        if (oldHeaderRegex.test(content)) {
            content = content.replace(oldHeaderRegex, newHeader);
            changed = true;
        }

        if (oldSidebarRegex.test(content)) {
            content = content.replace(oldSidebarRegex, newSidebar);
            changed = true;
        }

        if (oldScriptRegex.test(content) && !content.includes('function toggleSidebar()')) {
            content = content.replace(oldScriptRegex, newScript);
            changed = true;
        }

        if (changed) {
            fs.writeFileSync(filePath, content);
            console.log('Patched: ' + filePath);
            patchedCount++;
        }
    }
}

console.log('Total patched: ' + patchedCount);
