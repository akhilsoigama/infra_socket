import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import mermaid from 'mermaid';
import {
  Menu, Search, Moon, Sun, X, Book, ChevronRight, Network, Cpu,
  Activity, Plug, Brain, Code, Database, FlaskConical, Sliders,
  Server, Shield, Coins, Route
} from 'lucide-react';


export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isGroupActive = (pathPrefix: string) => location.pathname.startsWith(pathPrefix);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [toc, setToc] = useState<{ id: string, text: string, level: number }[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<{ title: string, section: string, url: string }[]>([]);
  const [searchIndex, setSearchIndex] = useState<{ title: string, section: string, url: string }[]>([]);

  // Auto-close sidebar on mobile when navigating
  useEffect(() => {
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: 'base',
      securityLevel: 'loose',
      flowchart: { htmlLabels: false, useMaxWidth: false },
      themeVariables: {
        fontFamily: 'Inter, sans-serif',
        fontSize: '16px',
        background: isDark ? '#111827' : '#ffffff',
        primaryColor: isDark ? '#172554' : '#e0f2fe',
        primaryTextColor: isDark ? '#e2e8f0' : '#0f172a',
        primaryBorderColor: isDark ? '#38bdf8' : '#0284c7',
        secondaryColor: isDark ? '#312e81' : '#eef2ff',
        secondaryTextColor: isDark ? '#e0e7ff' : '#1e1b4b',
        secondaryBorderColor: isDark ? '#818cf8' : '#6366f1',
        tertiaryColor: isDark ? '#1f2937' : '#f8fafc',
        tertiaryTextColor: isDark ? '#e2e8f0' : '#1e293b',
        tertiaryBorderColor: isDark ? '#475569' : '#cbd5e1',
        lineColor: isDark ? '#94a3b8' : '#64748b',
        textColor: isDark ? '#e2e8f0' : '#0f172a',
        edgeLabelBackground: isDark ? '#111827' : '#ffffff',
        clusterBkg: isDark ? '#172033' : '#f1f5f9',
        clusterBorder: isDark ? '#475569' : '#cbd5e1'
      }
    });

    setTimeout(() => {
      // Extract headings for TOC
      const headings = Array.from(document.querySelectorAll('main h2, main h3'));
      const items = headings.map((h, i) => {
        if (!h.id) {
          h.id = h.textContent?.toLowerCase().replace(/[^a-z0-9]+/g, '-') || `heading-${i}`;
        }
        return {
          id: h.id,
          text: h.textContent || '',
          level: h.tagName === 'H2' ? 2 : 3
        };
      });
      setToc(items);

      document.querySelectorAll('.language-mermaid').forEach(async (el) => {
        if (el.parentElement?.tagName === 'PRE') {
          const parent = el.parentElement;
          parent.style.display = 'none'; // hide original code block

          let container = parent.nextElementSibling as HTMLElement;
          if (!container || !container.classList.contains('mermaid-wrapper')) {
            container = document.createElement('div');
            container.className = 'mermaid-wrapper';
            parent.after(container);
          }

          try {
            // Use a unique ID for each render to avoid conflicts with existing SVG elements
            const id = `mermaid-chart-${Math.random().toString(36).substr(2, 9)}`;
            const { svg } = await mermaid.render(id, el.textContent || '');
            container.innerHTML = svg;
          } catch (e) {
            console.error('Mermaid render error', e);
            parent.style.display = ''; // Restore original code block if render fails
          }
        }
      });
    }, 100);
  }, [location.pathname, isDark]);


  useEffect(() => {
    // Initial theme check
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }

    // Build search index from sidebar links
    setTimeout(() => {
      const index: typeof searchIndex = [];
      document.querySelectorAll('aside#sidebar details').forEach(details => {
        const section = details.querySelector('summary')?.textContent || 'General';
        details.querySelectorAll('ul li a').forEach(link => {
          index.push({
            title: link.textContent || '',
            section,
            url: link.getAttribute('href') || ''
          });
        });
      });
      document.querySelectorAll('aside#sidebar > nav > a, aside#sidebar > a').forEach(link => {
        if (!index.find(i => i.url === link.getAttribute('href'))) {
          index.push({
            title: link.textContent || '',
            section: 'General',
            url: link.getAttribute('href') || ''
          });
        }
      });
      setSearchIndex(index);
    }, 500);
  }, []);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    if (!query) {
      setSearchResults([]);
      return;
    }
    const results = searchIndex.filter(item =>
      item.title.toLowerCase().includes(query) ||
      item.section.toLowerCase().includes(query)
    );
    setSearchResults(results);
  };

  return (
    <div className="font-sans text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-900 h-screen flex flex-col overflow-hidden transition-colors duration-200">
      <header className="h-14 md:h-16 flex items-center justify-between px-4 md:px-6 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 z-30 transition-colors duration-200 relative">
        <div className="flex w-full items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-bold text-base md:text-lg">
            <button onClick={toggleSidebar} className="md:hidden text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white shrink-0" aria-label="Toggle Sidebar">
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-2 shrink-0">
              <img src="../logo.png" alt="" className="logo h-6 w-auto md:h-8" />
              <span className="whitespace-nowrap">InfraSocket</span>
            </div>
          </div>
          <div id="search-container" className="relative hidden md:flex items-center bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md px-3 py-1.5 w-72 text-gray-500 dark:text-gray-400 focus-within:border-sky-600 focus-within:ring-1 focus-within:ring-sky-600 transition-colors z-50">
            <Search className="w-4 h-4" />
            <input type="text" value={searchQuery} onChange={handleSearch} placeholder="Search modules & features..." className="bg-transparent border-none outline-none ml-2 w-full text-gray-700 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400" />
            {searchQuery && (
              <div id="search-results" className="absolute top-full left-0 mt-1 w-full max-h-96 overflow-y-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-xl z-50 overflow-hidden block">
                {searchResults.length > 0 ? (
                  searchResults.map((res, idx) => (
                    <NavLink
                      key={idx}
                      to={res.url}
                      onClick={() => setSearchQuery('')}
                      className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 border-b border-gray-100 dark:border-gray-700 last:border-0 transition-colors"
                    >
                      <div className="font-semibold text-gray-900 dark:text-gray-100">{res.title}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{res.section}</div>
                    </NavLink>
                  ))
                ) : (
                  <div className="p-4 text-sm text-gray-500 text-center">No results found</div>
                )}
              </div>
            )}
          </div>
          <div className="flex items-center gap-3 md:gap-6 shrink-0">
            <button onClick={toggleTheme} className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors shrink-0" aria-label="Toggle Dark Mode">
              <Moon className="w-5 h-5 dark:hidden" />
              <Sun className="w-5 h-5 hidden dark:inline" />
            </button>
            <span className="text-xs bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-2 py-1 rounded text-gray-500 dark:text-gray-400 transition-colors shrink-0">v1.0</span>
          </div>
        </div>

      </header>

      <div className="flex flex-1 overflow-hidden relative">
        {/* Sidebar Overlay */}
        <div
          onClick={toggleSidebar}
          className={`fixed inset-0 bg-gray-900/50 dark:bg-black/50 z-40 md:hidden transition-opacity ${sidebarOpen ? 'block' : 'hidden'}`}
        ></div>

        {/* Sidebar */}
        <aside
          id="sidebar"
          className={`fixed md:static inset-y-0 left-0 z-50 w-72 bg-gray-50 dark:bg-gray-900 md:dark:bg-gray-900/50 border-r border-gray-200 dark:border-gray-800 overflow-y-auto p-6 transition-transform duration-300 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 h-full md:h-auto shadow-2xl md:shadow-none`}
        >
          <div>
            <div className="flex items-center justify-between md:hidden mb-6">
              <div className="flex items-center gap-2 font-bold text-lg text-gray-900 dark:text-gray-100">
                <img src="../logo.png" alt="" className="w-8 h-8 object-contain" /> InfraSocket
              </div>
              <button onClick={toggleSidebar} className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            <details className="mb-1 group" open={isGroupActive('/01-overview')}>
              <summary className="cursor-pointer select-none text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 flex items-center justify-between px-2 py-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <div className="flex items-center gap-2"><Book className="w-4 h-4 text-gray-500 dark:text-gray-400" /> Overview
                </div><ChevronRight className="w-3 h-3 text-gray-400 transition-transform duration-200 group-open:rotate-90" />
              </summary>
              <ul className="space-y-0.5 mb-3 pl-4 border-l border-gray-200 dark:border-gray-700 ml-4">
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/01-overview/key-features">Key
                  Features</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/01-overview/problem-statement">Problem
                  Statement</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/01-overview/project-objectives">Project
                  Objectives</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/01-overview/proposed-solution">Proposed
                  Solution</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/01-overview/real-world-use-cases">Real-World
                  Use Cases</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/01-overview/scope-and-limitations">Scope
                  and Limitations</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/01-overview/project-status">Project Status</NavLink></li><li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/01-overview/engineering-claims">Engineering Claims &amp; Evidence</NavLink></li><li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/01-overview/glossary">Glossary</NavLink></li></ul>
            </details>
            <details className="mb-1 group" open={isGroupActive('/02-system-architecture')}>
              <summary className="cursor-pointer select-none text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 flex items-center justify-between px-2 py-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <div className="flex items-center gap-2"><Network className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  System Architecture</div><ChevronRight className="w-3 h-3 text-gray-400 transition-transform duration-200 group-open:rotate-90" />
              </summary>
              <ul className="space-y-0.5 mb-3 pl-4 border-l border-gray-200 dark:border-gray-700 ml-4">
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/02-system-architecture/architecture">System
                  Architecture</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/02-system-architecture/component-interaction">Component
                  Interaction</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/02-system-architecture/data-flow">Data
                  Flow</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/02-system-architecture/deployment-architecture">Deployment
                  Architecture</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/02-system-architecture/hardware-architecture">Hardware
                  Architecture</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/02-system-architecture/software-architecture">Software
                  Architecture</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/02-system-architecture/system-overview">System
                  Overview</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/02-system-architecture/time-synchronization">Time Synchronization</NavLink></li></ul>
            </details>
            <details className="mb-1 group" open={isGroupActive('/03-hardware')}>
              <summary className="cursor-pointer select-none text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 flex items-center justify-between px-2 py-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <div className="flex items-center gap-2"><Cpu className="w-4 h-4 text-gray-500 dark:text-gray-400" /> Hardware
                </div><ChevronRight className="w-3 h-3 text-gray-400 transition-transform duration-200 group-open:rotate-90" />
              </summary>
              <ul className="space-y-0.5 mb-3 pl-4 border-l border-gray-200 dark:border-gray-700 ml-4">
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/03-hardware/adc-digitization">ADC
                  / Digitization</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/03-hardware/analog-front-end">Analog
                  Front End</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/03-hardware/calibration">Hardware
                  Calibration</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/03-hardware/diaphragm-design">Diaphragm
                  Design</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/03-hardware/differential-pressure-system">Differential
                  Pressure System</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/03-hardware/environmental-enclosure">Environmental
                  Enclosure</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/03-hardware/hardware-bom">Hardware
                  Bill of Materials (BOM)</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/03-hardware/hardware-overview">Hardware
                  Overview</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/03-hardware/power-system">Power
                  System</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/03-hardware/pressure-sensing">Pressure
                  Sensing</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/03-hardware/reference-chamber">Reference
                  Chamber</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/03-hardware/temperature-sensing">Temperature
                  Sensing</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/03-hardware/wind-noise-reduction">Wind-Noise
                  Reduction</NavLink></li>
              </ul>
            </details>
            <details className="mb-1 group" open={isGroupActive('/04-signal-processing')}>
              <summary className="cursor-pointer select-none text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 flex items-center justify-between px-2 py-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <div className="flex items-center gap-2"><Activity className="w-4 h-4 text-gray-500 dark:text-gray-400" /> Signal
                  Processing</div><ChevronRight className="w-3 h-3 text-gray-400 transition-transform duration-200 group-open:rotate-90" />
              </summary>
              <ul className="space-y-0.5 mb-3 pl-4 border-l border-gray-200 dark:border-gray-700 ml-4">
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/04-signal-processing/feature-extraction">Feature
                  Extraction</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/04-signal-processing/fft-analysis">FFT
                  Analysis</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/04-signal-processing/filtering">Filtering</NavLink>
                </li>
                <li><NavLink className="block px-2 py-1.5 text-sm rounded transition-colors text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200" to="/04-signal-processing/frequency-analysis">Frequency
                  Analysis</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/04-signal-processing/noise-reduction">Noise
                  Reduction</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/04-signal-processing/sampling">Sampling</NavLink>
                </li>
                <li><NavLink className="block px-2 py-1.5 text-sm rounded transition-colors text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200" to="/04-signal-processing/signal-processing-overview">Signal
                  Processing Overview</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/04-signal-processing/signal-quality-checks">Signal
                  Quality Checks</NavLink></li>
              </ul>
            </details>
            <NavLink className="block cursor-pointer select-none text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 flex items-center justify-between px-2 py-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" to="/14-sensor_connection/sensor_connection"><span className="flex items-center gap-2"><Plug className="w-4 h-4 text-gray-500 dark:text-gray-400" /> Sensor Connection</span><ChevronRight className="w-3 h-3 text-gray-400" /></NavLink>
            <details className="mb-1 group" open={isGroupActive('/05-ai-ml')}>
              <summary className="cursor-pointer select-none text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 flex items-center justify-between px-2 py-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <div className="flex items-center gap-2"><Brain className="w-4 h-4 text-gray-500 dark:text-gray-400" /> AI / ML
                </div><ChevronRight className="w-3 h-3 text-gray-400 transition-transform duration-200 group-open:rotate-90" />
              </summary>
              <ul className="space-y-0.5 mb-3 pl-4 border-l border-gray-200 dark:border-gray-700 ml-4">
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/05-ai-ml/ai-overview">AI
                  Overview</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/05-ai-ml/anomaly-detection">Anomaly
                  Detection</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/05-ai-ml/data-preprocessing">Data
                  Preprocessing</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/05-ai-ml/dataset-strategy">Dataset
                  Strategy</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/05-ai-ml/false-positive-handling">False
                  Positive Handling</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/05-ai-ml/feature-engineering">Feature
                  Engineering</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/05-ai-ml/future-event-classification">Future
                  Event Classification</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/05-ai-ml/model-evaluation">Model
                  Evaluation</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/05-ai-ml/model-inference">Model
                  Inference</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/05-ai-ml/model-selection">Model
                  Selection</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/05-ai-ml/model-training">Model
                  Training</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/05-ai-ml/threshold-selection">Threshold
                  Selection</NavLink></li>
              </ul>
            </details>
            <details className="mb-1 group" open={isGroupActive('/06-software')}>
              <summary className="cursor-pointer select-none text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 flex items-center justify-between px-2 py-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <div className="flex items-center gap-2"><Code className="w-4 h-4 text-gray-500 dark:text-gray-400" /> Software
                </div><ChevronRight className="w-3 h-3 text-gray-400 transition-transform duration-200 group-open:rotate-90" />
              </summary>
              <ul className="space-y-0.5 mb-3 pl-4 border-l border-gray-200 dark:border-gray-700 ml-4">
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/06-software/alert-system">Alert
                  System</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/06-software/api-design">API
                  Design</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/06-software/backend">Backend</NavLink>
                </li>
                <li><NavLink className="block px-2 py-1.5 text-sm rounded transition-colors text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200" to="/06-software/dashboard">Dashboard</NavLink>
                </li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/06-software/data-ingestion">Data
                  Ingestion</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/06-software/database">Database</NavLink>
                </li>
                <li><NavLink className="block px-2 py-1.5 text-sm rounded transition-colors text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200" to="/06-software/realtime-processing">Real-Time
                  Processing</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/06-software/software-overview">Software
                  Overview</NavLink></li>
              </ul>
            </details>
            <details className="mb-1 group" open={isGroupActive('/07-data')}>
              <summary className="cursor-pointer select-none text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 flex items-center justify-between px-2 py-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <div className="flex items-center gap-2"><Database className="w-4 h-4 text-gray-500 dark:text-gray-400" /> Data
                </div><ChevronRight className="w-3 h-3 text-gray-400 transition-transform duration-200 group-open:rotate-90" />
              </summary>
              <ul className="space-y-0.5 mb-3 pl-4 border-l border-gray-200 dark:border-gray-700 ml-4">
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/07-data/anomaly-record-format">Anomaly
                  Record Format</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/07-data/data-model">Data
                  Model</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/07-data/data-retention">Data
                  Retention</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/07-data/feature-data-format">Feature
                  Data Format</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/07-data/processed-data-format">Processed
                  Data Format</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/07-data/raw-data-format">Raw
                  Data Format</NavLink></li>
              </ul>
            </details>
            <details className="mb-1 group" open={isGroupActive('/08-testing')}>
              <summary className="cursor-pointer select-none text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 flex items-center justify-between px-2 py-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <div className="flex items-center gap-2"><FlaskConical className="w-4 h-4 text-gray-500 dark:text-gray-400" /> Testing</div>
                <ChevronRight className="w-3 h-3 text-gray-400 transition-transform duration-200 group-open:rotate-90" />
              </summary>
              <ul className="space-y-0.5 mb-3 pl-4 border-l border-gray-200 dark:border-gray-700 ml-4">
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/08-testing/acceptance-criteria">Acceptance
                  Criteria</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/08-testing/ai-testing">AI
                  Testing</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/08-testing/environmental-testing">Environmental
                  Testing</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/08-testing/hardware-testing">Hardware
                  Testing</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/08-testing/integration-testing">Integration
                  Testing</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/08-testing/performance-testing">Performance
                  Testing</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/08-testing/sensor-testing">Sensor
                  Testing</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/08-testing/signal-testing">Signal
                  Testing</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/08-testing/testing-strategy">Testing
                  Strategy</NavLink></li>
              </ul>
            </details>
            <details className="mb-1 group" open={isGroupActive('/09-calibration-validation')}>
              <summary className="cursor-pointer select-none text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 flex items-center justify-between px-2 py-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <div className="flex items-center gap-2"><Sliders className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  Calibration &amp; Validation</div><ChevronRight className="w-3 h-3 text-gray-400 transition-transform duration-200 group-open:rotate-90" />
              </summary>
              <ul className="space-y-0.5 mb-3 pl-4 border-l border-gray-200 dark:border-gray-700 ml-4">
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/09-calibration-validation/calibration-plan">Calibration
                  Plan</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/09-calibration-validation/frequency-response-test">Frequency
                  Response Test</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/09-calibration-validation/noise-floor-test">Noise
                  Floor Test</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/09-calibration-validation/pressure-step-test">Pressure
                  Step Test</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/09-calibration-validation/sensitivity-test">Sensitivity
                  Test</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/09-calibration-validation/validation-methodology">Validation
                  Methodology</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/09-calibration-validation/experimental-results">Experimental Results</NavLink></li></ul>
            </details>
            <details className="mb-1 group" open={isGroupActive('/10-deployment')}>
              <summary className="cursor-pointer select-none text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 flex items-center justify-between px-2 py-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <div className="flex items-center gap-2"><Server className="w-4 h-4 text-gray-500 dark:text-gray-400" /> Deployment
                </div><ChevronRight className="w-3 h-3 text-gray-400 transition-transform duration-200 group-open:rotate-90" />
              </summary>
              <ul className="space-y-0.5 mb-3 pl-4 border-l border-gray-200 dark:border-gray-700 ml-4">
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/10-deployment/deployment-overview">Deployment
                  Overview</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/10-deployment/field-deployment">Field
                  Deployment</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/10-deployment/hardware-deployment">Hardware
                  Deployment</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/10-deployment/maintenance">Maintenance</NavLink>
                </li>
                <li><NavLink className="block px-2 py-1.5 text-sm rounded transition-colors text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200" to="/10-deployment/monitoring">Monitoring</NavLink>
                </li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/10-deployment/software-deployment">Software
                  Deployment</NavLink></li>
              </ul>
            </details>
            <details className="mb-1 group" open={isGroupActive('/11-security-reliability')}>
              <summary className="cursor-pointer select-none text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 flex items-center justify-between px-2 py-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <div className="flex items-center gap-2"><Shield className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  Security &amp; Reliability</div><ChevronRight className="w-3 h-3 text-gray-400 transition-transform duration-200 group-open:rotate-90" />
              </summary>
              <ul className="space-y-0.5 mb-3 pl-4 border-l border-gray-200 dark:border-gray-700 ml-4">
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/11-security-reliability/data-integrity">Data
                  Integrity</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/11-security-reliability/fault-handling">Fault
                  Handling</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/11-security-reliability/recovery">Recovery</NavLink>
                </li>
                <li><NavLink className="block px-2 py-1.5 text-sm rounded transition-colors text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200" to="/11-security-reliability/reliability">Reliability</NavLink>
                </li>
                <li><Link className="block px-2 py-1.5 text-sm rounded transition-colors text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200" to="/11-security-reliability/security">Security</Link>
                </li>
              </ul>
            </details>
            <details className="mb-1 group" open={isGroupActive('/12-cost-and-feasibility')}>
              <summary className="cursor-pointer select-none text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 flex items-center justify-between px-2 py-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <div className="flex items-center gap-2"><Coins className="w-4 h-4 text-gray-500 dark:text-gray-400" /> Cost &amp;
                  Feasibility</div><ChevronRight className="w-3 h-3 text-gray-400 transition-transform duration-200 group-open:rotate-90" />
              </summary>
              <ul className="space-y-0.5 mb-3 pl-4 border-l border-gray-200 dark:border-gray-700 ml-4">
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/12-cost-and-feasibility/bill-of-materials">Bill
                  of Materials</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/12-cost-and-feasibility/cost-optimization">Cost
                  Optimization</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/12-cost-and-feasibility/operational-cost">Operational
                  Cost</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/12-cost-and-feasibility/prototype-cost">Prototype
                  Cost</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/12-cost-and-feasibility/scalability">Scalability</NavLink>
                </li>
              </ul>
            </details>
            <details className="mb-1 group" open={isGroupActive('/13-research')}>
              <summary className="cursor-pointer select-none text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 flex items-center justify-between px-2 py-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <div className="flex items-center gap-2"><FlaskConical className="w-4 h-4 text-gray-500 dark:text-gray-400" /> Research
                </div><ChevronRight className="w-3 h-3 text-gray-400 transition-transform duration-200 group-open:rotate-90" />
              </summary>
              <ul className="space-y-0.5 mb-3 pl-4 border-l border-gray-200 dark:border-gray-700 ml-4">
                <li><NavLink className="block px-2 py-1.5 text-sm rounded transition-colors text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200" to="/13-research/background">Background</NavLink>
                </li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/13-research/existing-solutions">Existing
                  Solutions</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/13-research/proposed-vs-existing">Proposed
                  vs Existing</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/13-research/references">References</NavLink>
                </li>
                <li><NavLink className="block px-2 py-1.5 text-sm rounded transition-colors text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200" to="/13-research/technical-assumptions">Technical
                  Assumptions</NavLink></li>
              </ul>
            </details>
            <details className="mb-1 group" open={isGroupActive('/16-roadmap')}>
              <summary className="cursor-pointer select-none text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 flex items-center justify-between px-2 py-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <div className="flex items-center gap-2"><Route className="w-4 h-4 text-gray-500 dark:text-gray-400" /> Roadmap</div>
                <ChevronRight className="w-3 h-3 text-gray-400 transition-transform duration-200 group-open:rotate-90" />
              </summary>
              <ul className="space-y-0.5 mb-3 pl-4 border-l border-gray-200 dark:border-gray-700 ml-4">
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/16-roadmap/contribution-guide">Contribution
                  Guide</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/16-roadmap/future-scope">Future
                  Scope</NavLink></li>
                <li><NavLink className={({ isActive }) => `block px-2 py-1.5 text-sm rounded transition-colors ${isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`} to="/16-roadmap/phase-plan">Phase
                  Plan</NavLink></li>
              </ul>
            </details>
          </div>

        </aside>

        {children}

        {/* Table of Contents - Right Sidebar */}
        <aside className="hidden xl:block w-64 border-l border-gray-200 dark:border-gray-800 overflow-y-auto bg-white dark:bg-gray-900 p-6 shrink-0 z-10 transition-colors duration-200">
          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4 text-sm uppercase tracking-wider">On this page</h4>
          <nav className="flex flex-col gap-2 text-sm">
            {toc.length === 0 && <span className="text-gray-500">No headings found</span>}
            {toc.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-gray-600 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors ${item.level === 3 ? 'ml-4' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {item.text}
              </a>
            ))}
          </nav>
        </aside>
      </div>
    </div>
  );
}
