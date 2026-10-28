import fs from 'fs';

let content = fs.readFileSync('src/components/Layout.tsx', 'utf8');

const replacements = {
  '<i className="fa-solid fa-bars text-xl" />': '<Menu className="text-xl" />',
  '<i className="fa-solid fa-search" />': '<Search className="w-4 h-4" />',
  '<i className="fa-solid fa-moon dark:hidden" />': '<Moon className="w-5 h-5 dark:hidden" />',
  '<i className="fa-solid fa-sun hidden dark:inline" />': '<Sun className="w-5 h-5 hidden dark:inline" />',
  '<i className="fa-solid fa-xmark text-2xl" />': '<X className="w-6 h-6" />',
  '<i className="fa-solid fa-book w-4 text-center text-gray-500 dark:text-gray-400" />': '<Book className="w-4 h-4 text-gray-500 dark:text-gray-400" />',
  '<i className="fa-solid fa-chevron-right text-[10px] text-gray-400 transition-transform duration-200 group-open:rotate-90" />': '<ChevronRight className="w-3 h-3 text-gray-400 transition-transform duration-200 group-open:rotate-90" />',
  '<i className="fa-solid fa-chevron-right text-[10px] text-gray-400" />': '<ChevronRight className="w-3 h-3 text-gray-400" />',
  '<i className="fa-solid fa-diagram-project w-4 text-center text-gray-500 dark:text-gray-400" />': '<Network className="w-4 h-4 text-gray-500 dark:text-gray-400" />',
  '<i className="fa-solid fa-microchip w-4 text-center text-gray-500 dark:text-gray-400" />': '<Cpu className="w-4 h-4 text-gray-500 dark:text-gray-400" />',
  '<i className="fa-solid fa-wave-square w-4 text-center text-gray-500 dark:text-gray-400" />': '<Activity className="w-4 h-4 text-gray-500 dark:text-gray-400" />',
  '<i className="fa-solid fa-plug w-4 text-center text-gray-500 dark:text-gray-400" />': '<Plug className="w-4 h-4 text-gray-500 dark:text-gray-400" />',
  '<i className="fa-solid fa-brain w-4 text-center text-gray-500 dark:text-gray-400" />': '<Brain className="w-4 h-4 text-gray-500 dark:text-gray-400" />',
  '<i className="fa-solid fa-code w-4 text-center text-gray-500 dark:text-gray-400" />': '<Code className="w-4 h-4 text-gray-500 dark:text-gray-400" />',
  '<i className="fa-solid fa-database w-4 text-center text-gray-500 dark:text-gray-400" />': '<Database className="w-4 h-4 text-gray-500 dark:text-gray-400" />',
  '<i className="fa-solid fa-vial w-4 text-center text-gray-500 dark:text-gray-400" />': '<FlaskConical className="w-4 h-4 text-gray-500 dark:text-gray-400" />',
  '<i className="fa-solid fa-sliders w-4 text-center text-gray-500 dark:text-gray-400" />': '<Sliders className="w-4 h-4 text-gray-500 dark:text-gray-400" />',
  '<i className="fa-solid fa-server w-4 text-center text-gray-500 dark:text-gray-400" />': '<Server className="w-4 h-4 text-gray-500 dark:text-gray-400" />',
  '<i className="fa-solid fa-shield-halved w-4 text-center text-gray-500 dark:text-gray-400" />': '<Shield className="w-4 h-4 text-gray-500 dark:text-gray-400" />',
  '<i className="fa-solid fa-coins w-4 text-center text-gray-500 dark:text-gray-400" />': '<Coins className="w-4 h-4 text-gray-500 dark:text-gray-400" />',
  '<i className="fa-solid fa-flask w-4 text-center text-gray-500 dark:text-gray-400" />': '<FlaskConical className="w-4 h-4 text-gray-500 dark:text-gray-400" />',
  '<i className="fa-solid fa-road w-4 text-center text-gray-500 dark:text-gray-400" />': '<Route className="w-4 h-4 text-gray-500 dark:text-gray-400" />'
};

for (const [key, value] of Object.entries(replacements)) {
  content = content.replaceAll(key, value);
}

// Check if import for lucide-react exists
if (!content.includes('lucide-react')) {
  const importStatement = `import {
  Menu, Search, Moon, Sun, X, Book, ChevronRight, Network, Cpu,
  Activity, Plug, Brain, Code, Database, FlaskConical, Sliders,
  Server, Shield, Coins, Route
} from 'lucide-react';\n`;
  content = content.replace("import { Link } from 'react-router-dom';", "import { Link } from 'react-router-dom';\n" + importStatement);
}

fs.writeFileSync('src/components/Layout.tsx', content);
console.log('Done!');
