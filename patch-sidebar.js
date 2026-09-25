const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'build-docs.js');
let content = fs.readFileSync(filePath, 'utf8');

const divLogo = `<div class="flex items-center gap-2 font-bold text-lg">
            <img src="../logo-removebg-preview.png" alt="" class="logo">InfraSocket
        </div>`;

const divLogoNew = `<div class="flex items-center gap-2 font-bold text-lg">
            <button onclick="toggleSidebar()" class="md:hidden mr-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" aria-label="Toggle Sidebar">
                <i class="fa-solid fa-bars text-xl"></i>
            </button>
            <img src="../logo-removebg-preview.png" alt="" class="logo">InfraSocket
        </div>`;

content = content.replace(divLogo, divLogoNew);

const oldSidebar = `<div class="flex flex-1 overflow-hidden">
        <aside class="hidden md:block w-72 bg-gray-50 dark:bg-gray-900/50 border-r border-gray-200 dark:border-gray-800 overflow-y-auto p-6 transition-colors duration-200">
            \${sidebarHtml}
        </aside>`;

const newSidebar = `<div class="flex flex-1 overflow-hidden relative">
        <div id="sidebar-overlay" onclick="toggleSidebar()" class="fixed inset-0 bg-gray-900/50 dark:bg-black/50 z-40 hidden md:hidden transition-opacity"></div>
        <aside id="sidebar" class="fixed md:static inset-y-0 left-0 z-50 w-72 bg-gray-50 dark:bg-gray-900 md:dark:bg-gray-900/50 border-r border-gray-200 dark:border-gray-800 overflow-y-auto p-6 transition-transform duration-300 transform -translate-x-full md:translate-x-0 h-full md:h-auto shadow-2xl md:shadow-none">
            <div class="flex items-center justify-between md:hidden mb-6">
                <span class="font-bold text-lg text-gray-900 dark:text-gray-100">Menu</span>
                <button onclick="toggleSidebar()" class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    <i class="fa-solid fa-xmark text-2xl"></i>
                </button>
            </div>
            \${sidebarHtml}
        </aside>`;

content = content.replace(oldSidebar, newSidebar);

const oldMain = `<main class="flex-1 overflow-y-auto p-8 md:px-16 lg:px-24 bg-white dark:bg-gray-900 transition-colors duration-200">`;
const newMain = `<main class="flex-1 overflow-y-auto p-4 md:p-8 md:px-16 lg:px-24 bg-white dark:bg-gray-900 transition-colors duration-200 w-full overflow-x-hidden">`;

content = content.replace(oldMain, newMain);

const oldTable = `.markdown-body table { width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; display: block; overflow-x: auto; white-space: nowrap; }`;
const newTable = `.markdown-body table { width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; display: block; overflow-x: auto; white-space: nowrap; -webkit-overflow-scrolling: touch; }
        .markdown-body pre { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; padding: 1rem; overflow-x: auto; margin-bottom: 1.5rem; -webkit-overflow-scrolling: touch; max-width: 100%; }
        .markdown-body img { max-width: 100%; height: auto; border-radius: 6px; border: 1px solid #e5e7eb; }
        .mermaid { max-width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; }`;

content = content.replace(oldTable, newTable);

fs.writeFileSync(filePath, content);
console.log('Patched docs.js successfully');
