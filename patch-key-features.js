const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '01-overview', 'key-features.html');
let content = fs.readFileSync(file, 'utf8');

const cheerio = require('cheerio');
const SECTIONS = [
    { dir: '01-overview', name: 'Overview' },
    { dir: '02-system-architecture', name: 'System Architecture' },
    { dir: '03-hardware', name: 'Hardware' },
    { dir: '04-signal-processing', name: 'Signal Processing' },
    { dir: '05-ai-ml', name: 'AI / ML' },
    { dir: '06-software', name: 'Software' },
    { dir: '07-data', name: 'Data' },
    { dir: '08-testing', name: 'Testing' },
    { dir: '09-calibration-validation', name: 'Calibration & Validation' },
    { dir: '10-deployment', name: 'Deployment' },
    { dir: '11-security-reliability', name: 'Security & Reliability' },
    { dir: '12-cost-and-feasibility', name: 'Cost & Feasibility' },
    { dir: '13-research', name: 'Research' },
    { dir: '16-roadmap', name: 'Roadmap' },
];
const searchIndex = [];
for (const section of SECTIONS) {
    const sectionPath = path.join(__dirname, section.dir);
    if (!fs.existsSync(sectionPath)) continue;
    const files = fs.readdirSync(sectionPath).filter(f => f.endsWith('.html'));
    for (const f of files) {
        searchIndex.push({
            title: f.replace('.html', '').replace(/-/g, ' '),
            section: section.name,
            url: "../" + section.dir + "/" + f
        });
    }
}
const searchIndexJson = JSON.stringify(searchIndex);

const oldJS = `        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('sidebar-overlay');
            if (sidebar.classList.contains('-translate-x-full')) {
                sidebar.classList.remove('-translate-x-full');
                sidebar.classList.add('translate-x-0');
                overlay.classList.remove('hidden');
            } else {
                sidebar.classList.add('-translate-x-full');
                sidebar.classList.remove('translate-x-0');
                overlay.classList.add('hidden');
            }
        }`;

const newJS = `        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('sidebar-overlay');
            if (sidebar.classList.contains('-translate-x-full')) {
                sidebar.classList.remove('-translate-x-full');
                sidebar.classList.add('translate-x-0');
                overlay.classList.remove('hidden');
            } else {
                sidebar.classList.add('-translate-x-full');
                sidebar.classList.remove('translate-x-0');
                overlay.classList.add('hidden');
            }
        }

        const searchIndex = \${searchIndexJson};
        
        function handleSearch(e) {
            const query = e.target.value.toLowerCase();
            const resultsContainer = document.getElementById('search-results');
            if (!query) {
                resultsContainer.classList.add('hidden');
                return;
            }
            
            const results = searchIndex.filter(item => 
                item.title.toLowerCase().includes(query) || 
                item.section.toLowerCase().includes(query)
            );
            
            resultsContainer.innerHTML = '';
            if (results.length > 0) {
                results.forEach(item => {
                    const div = document.createElement('a');
                    div.href = item.url;
                    div.className = 'block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-sky-50 dark:hover:bg-sky-900/30 hover:text-sky-700 dark:hover:text-sky-400 transition-colors border-b border-gray-100 dark:border-gray-700 last:border-0';
                    div.innerHTML = \`<div class="font-medium">\${item.title}</div><div class="text-xs text-gray-400">\${item.section}</div>\`;
                    resultsContainer.appendChild(div);
                });
            } else {
                resultsContainer.innerHTML = '<div class="px-4 py-2 text-sm text-gray-500">No matching modules or features found</div>';
            }
            resultsContainer.classList.remove('hidden');
        }

        document.addEventListener('click', (e) => {
            if (!e.target.closest('#search-container')) {
                const res = document.getElementById('search-results');
                if(res) res.classList.add('hidden');
            }
        });`;

content = content.replace(oldJS, newJS);

const oldHTML = `<div
            class="hidden md:flex items-center bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md px-3 py-1.5 w-72 text-gray-500 dark:text-gray-400 focus-within:border-sky-600 focus-within:ring-1 focus-within:ring-sky-600 transition-colors">
            <i class="fa-solid fa-search"></i>
            <input type="text" placeholder="Search Menu..."
                class="bg-transparent border-none outline-none ml-2 w-full text-gray-700 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400">
        </div>`;

const newHTML = `<div id="search-container"
            class="relative hidden md:flex items-center bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md px-3 py-1.5 w-72 text-gray-500 dark:text-gray-400 focus-within:border-sky-600 focus-within:ring-1 focus-within:ring-sky-600 transition-colors z-50">
            <i class="fa-solid fa-search"></i>
            <input type="text" oninput="handleSearch(event)" placeholder="Search modules & features..."
                class="bg-transparent border-none outline-none ml-2 w-full text-gray-700 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400">
            <div id="search-results" class="hidden absolute top-full left-0 mt-1 w-full max-h-96 overflow-y-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-xl z-50 overflow-hidden">
            </div>
        </div>`;

content = content.replace(oldHTML, newHTML);

fs.writeFileSync(file, content);
console.log('Patched key-features.html successfully');
