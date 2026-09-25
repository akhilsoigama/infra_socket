const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const cheerio = require('cheerio');

const SECTIONS = [
    { dir: '01-overview', icon: 'fa-book', name: 'Overview' },
    { dir: '02-system-architecture', icon: 'fa-diagram-project', name: 'System Architecture' },
    { dir: '03-hardware', icon: 'fa-microchip', name: 'Hardware' },
    { dir: '04-signal-processing', icon: 'fa-wave-square', name: 'Signal Processing' },
    { dir: '05-ai-ml', icon: 'fa-brain', name: 'AI / ML' },
    { dir: '06-software', icon: 'fa-code', name: 'Software' },
    { dir: '07-data', icon: 'fa-database', name: 'Data' },
    { dir: '08-testing', icon: 'fa-vial', name: 'Testing' },
    { dir: '09-calibration-validation', icon: 'fa-sliders', name: 'Calibration & Validation' },
    { dir: '10-deployment', icon: 'fa-server', name: 'Deployment' },
    { dir: '11-security-reliability', icon: 'fa-shield-halved', name: 'Security & Reliability' },
    { dir: '12-cost-and-feasibility', icon: 'fa-coins', name: 'Cost & Feasibility' },
    { dir: '13-research', icon: 'fa-flask', name: 'Research' },
    { dir: '16-roadmap', icon: 'fa-road', name: 'Roadmap' },
];

const ROOT_DIR = __dirname;
const SITE_DIR = path.join(ROOT_DIR, 'site');

if (!fs.existsSync(SITE_DIR)) {
    fs.mkdirSync(SITE_DIR);
}

const iconMap = {
    '🌍': 'fa:fa-globe', '🌬️': 'fa:fa-wind', '📊': 'fa:fa-microchip', '🔒': 'fa:fa-lock',
    '⚡': 'fa:fa-bolt', '🔢': 'fa:fa-microchip', '🌡️': 'fa:fa-temperature-half', '🤖': 'fa:fa-brain',
    '🚨': 'fa:fa-triangle-exclamation', '✅': 'fa:fa-check', '🔔': 'fa:fa-bell', '📁': 'fa:fa-database',
    '🔌': 'fa:fa-plug', '📈': 'fa:fa-chart-line'
};

function processFile(filePath, sectionDir, file) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/```mermaid([\s\S]*?)```/g, (match, p1) => {
        let newMermaid = p1;
        for (const [emoji, fa] of Object.entries(iconMap)) {
            newMermaid = newMermaid.split(emoji).join(fa + ' ');
        }
        return '```mermaid' + newMermaid + '```';
    });
    const html = marked.parse(content);
    const $ = cheerio.load(html);
    const toc = [];
    $('h2, h3').each((i, el) => {
        const title = $(el).text();
        const id = title.toLowerCase().replace(/[^\w]+/g, '-');
        $(el).attr('id', id);
        toc.push({ level: el.name, title, id });
    });
    const title = $('h1').first().text() || file.replace('.md', '').replace(/-/g, ' ');
    const description = $('p').first().text();
    return { file, html: $.html(), toc, title, description, sectionDir };
}

function buildSite() {
    console.log("Building site...");
    let allData = [];
    for (const section of SECTIONS) {
        const sectionPath = path.join(ROOT_DIR, section.dir);
        if (!fs.existsSync(sectionPath)) continue;
        const files = fs.readdirSync(sectionPath).filter(f => f.endsWith('.md'));
        const sectionData = { ...section, articles: [] };
        for (const file of files) {
            sectionData.articles.push(processFile(path.join(sectionPath, file), section.dir, file));
        }
        allData.push(sectionData);
    }

    for (const section of allData) {
        const sectionOutDir = path.join(SITE_DIR, section.dir);
        if (!fs.existsSync(sectionOutDir)) fs.mkdirSync(sectionOutDir, { recursive: true });

        for (const article of section.articles) {
            const outPath = path.join(sectionOutDir, article.file.replace('.md', '.html'));

            let sidebarHtml = '';
            for (const s of allData) {
                const isActiveSection = s.dir === section.dir;
                const openAttr = isActiveSection ? 'open' : '';
                sidebarHtml += `<details class="mb-1 group" ${openAttr}>`;
                sidebarHtml += `<summary class="cursor-pointer select-none text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 flex items-center justify-between px-2 py-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">`;
                sidebarHtml += `<div class="flex items-center gap-2"><i class="fa-solid ${s.icon} w-4 text-center text-gray-500 dark:text-gray-400"></i> ${s.name}</div>`;
                sidebarHtml += `<i class="fa-solid fa-chevron-right text-[10px] text-gray-400 transition-transform duration-200 group-open:rotate-90"></i>`;
                sidebarHtml += `</summary>`;
                sidebarHtml += `<ul class="space-y-0.5 mb-3 pl-4 border-l border-gray-200 dark:border-gray-700 ml-4">`;
                for (const a of s.articles) {
                    const isActive = a.file === article.file && s.dir === section.dir;
                    const href = `../${s.dir}/${a.file.replace('.md', '.html')}`;
                    sidebarHtml += `<li><a href="${href}" class="block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}">${a.title}</a></li>`;
                }
                sidebarHtml += `</ul></details>`;
            }

            let tocHtml = '';
            for (const item of article.toc) {
                const padding = item.level === 'h3' ? 'pl-4' : '';
                tocHtml += `<li class="mb-2 ${padding}"><a href="#${item.id}" class="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 block transition-colors">${item.title}</a></li>`;
            }

            const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${article.title} - InfraSocket Docs</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/github.min.css" id="hljs-light">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/github-dark.min.css" id="hljs-dark" disabled>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>\n
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        sky: { 50: '#f0f9ff', 100: '#e0f2fe', 400: '#38bdf8', 600: '#0284c7', 700: '#0369a1', 900: '#0c4a6e' }
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        mono: ['JetBrains Mono', 'monospace'],
                    }
                }
            }
        }
        
        // Theme init with URL param support for file:// navigation persistence
        const urlParams = new URLSearchParams(window.location.search);
        const urlTheme = urlParams.get('theme');
        if (urlTheme) {
            try { localStorage.theme = urlTheme; } catch(e){}
        }
        
        let currentTheme = 'light';
        try {
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                currentTheme = 'dark';
            }
        } catch(e) {
            if (urlTheme === 'dark') currentTheme = 'dark';
        }

        if (currentTheme === 'dark') {
            document.documentElement.classList.add('dark');
            if(document.getElementById('hljs-light')) document.getElementById('hljs-light').disabled = true;
            if(document.getElementById('hljs-dark')) document.getElementById('hljs-dark').disabled = false;
        } else {
            document.documentElement.classList.remove('dark');
        }
        
        function toggleTheme() {
            const isDark = document.documentElement.classList.contains('dark');
            if (isDark) {
                document.documentElement.classList.remove('dark');
                try { localStorage.theme = 'light'; } catch(e){}
                if(document.getElementById('hljs-light')) document.getElementById('hljs-light').disabled = false;
                if(document.getElementById('hljs-dark')) document.getElementById('hljs-dark').disabled = true;
                updateUrlTheme('light');
            } else {
                document.documentElement.classList.add('dark');
                try { localStorage.theme = 'dark'; } catch(e){}
                if(document.getElementById('hljs-light')) document.getElementById('hljs-light').disabled = true;
                if(document.getElementById('hljs-dark')) document.getElementById('hljs-dark').disabled = false;
                updateUrlTheme('dark');
            }
        }

        function updateUrlTheme(theme) {
            if (window.history.replaceState) {
                const url = new URL(window.location);
                url.searchParams.set('theme', theme);
                window.history.replaceState({}, '', url);
            }
        }

        // Append theme to all local links to fix file:// protocol theme switching
        document.addEventListener('click', (e) => {
            const a = e.target.closest('a');
            if (a && a.href && !a.href.startsWith('http') && !a.href.startsWith('#')) {
                const isDark = document.documentElement.classList.contains('dark');
                try {
                    const url = new URL(a.href, window.location.href);
                    url.searchParams.set('theme', isDark ? 'dark' : 'light');
                    a.href = url.href;
                } catch(e){}
            }
        });

        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('sidebar-overlay');
            if(sidebar) sidebar.classList.toggle('-translate-x-full');
            if(overlay) overlay.classList.toggle('hidden');
        }

        
        const searchIndex = \${JSON.stringify(allData.flatMap(s => s.articles.map(a => ({ title: a.title, section: s.name, url: '../' + s.dir + '/' + a.file.replace('.md', '.html') }))))};
        
        function handleSearch(e) {
            const query = e.target.value.toLowerCase();
            const resultsContainer = document.getElementById('search-results');
            if (!resultsContainer) return;
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
                    const isDark = document.documentElement.classList.contains('dark');
                    const url = new URL(item.url, window.location.href);
                    url.searchParams.set('theme', isDark ? 'dark' : 'light');
                    div.href = url.href;
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
        });\n    </script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono&display=swap');
        
        details > summary { list-style: none; }
        details > summary::-webkit-details-marker { display: none; }
        
        .markdown-body h1 { font-size: 2.25rem; font-weight: 700; margin-bottom: 1.5rem; line-height: 1.2; }
        .markdown-body h2 { font-size: 1.5rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 1px solid #e5e7eb; }
        .dark .markdown-body h2 { border-bottom-color: #374151; }
        
        .markdown-body h3 { font-size: 1.25rem; font-weight: 600; margin-top: 2rem; margin-bottom: 0.75rem; }
        .markdown-body p, .markdown-body ul, .markdown-body ol { margin-bottom: 1.25rem; line-height: 1.6; }
        .markdown-body ul, .markdown-body ol { padding-left: 1.5rem; list-style-type: disc; }
        .markdown-body li { margin-bottom: 0.5rem; }
        
        .markdown-body a { color: #0284c7; text-decoration: none; }
        .markdown-body a:hover { text-decoration: underline; }
        .dark .markdown-body a { color: #38bdf8; }
        
        .markdown-body code { font-family: 'JetBrains Mono', monospace; font-size: 0.85em; background: #f3f4f6; padding: 0.2em 0.4em; border-radius: 3px; border: 1px solid #e5e7eb; }
        .dark .markdown-body code { background: #374151; border-color: #4b5563; }
        
        .markdown-body pre { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; padding: 1rem; overflow-x: auto; margin-bottom: 1.5rem; }
        .dark .markdown-body pre { background: #1f2937; border-color: #374151; }
        .markdown-body pre code { background: none; padding: 0; border: none; font-size: 0.9em; }
        
        .markdown-body blockquote { border-left: 4px solid #0284c7; background: #e0f2fe; padding: 1rem; margin-bottom: 1.5rem; border-radius: 0 4px 4px 0; color: #111827; }
        .dark .markdown-body blockquote { background: #0c4a6e; border-left-color: #38bdf8; color: #f3f4f6; }
        
        .markdown-body table { width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; display: block; overflow-x: auto; white-space: nowrap; -webkit-overflow-scrolling: touch; }
        .markdown-body pre { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; padding: 1rem; overflow-x: auto; margin-bottom: 1.5rem; -webkit-overflow-scrolling: touch; max-width: 100%; }
        .markdown-body img { max-width: 100%; height: auto; border-radius: 6px; border: 1px solid #e5e7eb; }
        .mermaid { max-width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; }
        .markdown-body th, .markdown-body td { padding: 0.75rem; border: 1px solid #e5e7eb; text-align: left; }
        .dark .markdown-body th, .dark .markdown-body td { border-color: #374151; }
        .markdown-body th { background: #f9fafb; font-weight: 600; }
        .dark .markdown-body th { background: #1f2937; }
        
        .markdown-body img { max-width: 100%; height: auto; border-radius: 6px; border: 1px solid #e5e7eb; }
        .dark .markdown-body img { border-color: #374151; }
        
        /* Mermaid dark mode overrides */
        .dark .mermaid svg { filter: invert(0.9) hue-rotate(180deg); }
        
        /* Custom Thin Scrollbar for all scrollable elements */
        ::-webkit-scrollbar { width: 4px; height: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
        .dark ::-webkit-scrollbar-thumb { background: #475569; }
        * { scrollbar-width: thin; scrollbar-color: #cbd5e1 transparent; }
        .dark * { scrollbar-color: #475569 transparent; }

    .logo {
            height: auto;
            width: auto;
            max-height: 48px;
            max-width: 80px;
            object-fit: contain;
            transition: all 0.3s ease;
        }
        @media (min-width: 640px) {
            .logo {
                max-height: 56px;
                max-width: 90px;
            }
        }
        @media (min-width: 1024px) {
            .logo {
                max-height: 70px;
                max-width: 100px;
            }
        }
    </style>
</head>
<body class="font-sans text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-900 h-screen flex flex-col overflow-hidden transition-colors duration-200">
    <header class="h-auto min-h-[4rem] py-2 md:h-16 md:py-0 flex items-center justify-between px-4 md:px-6 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 z-30 transition-colors duration-200 relative">
        <div class="flex items-center gap-2 font-bold text-lg">
            <img src="../logo-removebg-preview.png" alt="" class="logo">InfraSocket
        </div>
        <div class="hidden md:flex items-center bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md px-3 py-1.5 w-72 text-gray-500 dark:text-gray-400 focus-within:border-sky-600 focus-within:ring-1 focus-within:ring-sky-600 transition-colors">
            <i class="fa-solid fa-search"></i>
            <input type="text" placeholder="Search Menu..." class="bg-transparent border-none outline-none ml-2 w-full text-gray-700 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400">
        </div>
        <div class="flex items-center gap-6">
            <button onclick="toggleTheme()" class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors" aria-label="Toggle Dark Mode">
                <i class="fa-solid fa-moon dark:hidden"></i>
                <i class="fa-solid fa-sun hidden dark:inline"></i>
            </button>
            <span class="text-xs bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-2 py-1 rounded text-gray-500 dark:text-gray-400 transition-colors">v1.0</span>
        </div>
    </header>

    <div class="flex flex-1 overflow-hidden">
        <aside class="hidden md:block w-72 bg-gray-50 dark:bg-gray-900/50 border-r border-gray-200 dark:border-gray-800 overflow-y-auto p-6 transition-colors duration-200">
            ${sidebarHtml}
        </aside>

        <main class="flex-1 overflow-y-auto p-4 md:p-8 md:px-16 lg:px-24 bg-white dark:bg-gray-900 transition-colors duration-200 w-full overflow-x-hidden">
            <nav class="text-sm text-gray-500 dark:text-gray-400 mb-8">
                <a href="#" class="hover:underline">Home</a> / 
                <a href="#" class="hover:underline">${section.name}</a> / 
                <span class="font-medium text-gray-900 dark:text-gray-200">${article.title}</span>
            </nav>

            <article class="markdown-body max-w-3xl">
                ${article.html}
            </article>
        </main>

        <aside class="hidden lg:block w-64 p-8 overflow-y-auto border-l border-gray-200 dark:border-gray-800 transition-colors duration-200">
            <div class="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">On this page</div>
            <ul class="text-sm">
                ${tocHtml}
            </ul>
        </aside>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"></script>
    <script>
        hljs.highlightAll();
        document.querySelectorAll('.language-mermaid').forEach(el => {
            el.parentElement.outerHTML = \`<div class="mermaid">\${el.textContent}</div>\`;
        });
    </script>
    <script type="module">
        import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
        
        // Simple dark mode detection for mermaid theme
        const isDark = document.documentElement.classList.contains('dark');
        
        mermaid.initialize({ 
            startOnLoad: true, 
            theme: 'neutral',
            fontFamily: '"Inter", sans-serif'
        });
    </script>
</body>
</html>`;
            fs.writeFileSync(outPath, htmlContent);
        }
    }

    if (allData.length > 0 && allData[0].articles.length > 0) {
        const first = allData[0];
        const firstArticle = first.articles[0];
        const redirectHtml = `<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="refresh" content="0; url=${first.dir}/${firstArticle.file.replace('.md', '.html')}">
</head>
<body></body>
</html>`;
        fs.writeFileSync(path.join(SITE_DIR, 'index.html'), redirectHtml);
    }
    console.log("Build complete.");
}

buildSite();
