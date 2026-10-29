import { Link } from 'react-router-dom';
import {
  GitPullRequest,
  CheckCircle2,
  Code2,
  ArrowRight
} from 'lucide-react';

export default function Page16RoadmapContributionGuide() {
  const contributionAreas = [
    { area: 'Sensor Characterization & Bench Calibration', skills: 'Electronics, DAQ, Acoustic Chambers', priority: 'High', phase: 'Phase 2' },
    { area: 'Pneumatic Manifold Geometry Optimization', skills: 'CAD, Fluid Mechanics, 3D Prototyping', priority: 'High', phase: 'Phase 2' },
    { area: 'Digital Filter & Wavelet Signal Processing', skills: 'Python (SciPy, NumPy), C/C++', priority: 'Medium', phase: 'Phase 2' },
    { area: 'Unsupervised & Semi-Supervised Event ML', skills: 'Machine Learning, scikit-learn, PyTorch', priority: 'Medium', phase: 'Phase 3' },
    { area: 'PyQtGraph & Web Dashboard Telemetry', skills: 'Desktop GUI, WebSockets, TypeScript', priority: 'Medium', phase: 'Phase 2' },
    { area: 'Technical Documentation & Testing Guides', skills: 'Technical Writing, Markdown, Diagrams', priority: 'Medium', phase: 'Ongoing' },
    { area: 'Multi-Node Cross-Correlation (PMCC)', skills: 'Distributed Systems, Array DSP', priority: 'Future', phase: 'Phase 3' }
  ];

  const workflowSteps = [
    { step: '1', title: 'Review System Specs', desc: 'Read the Problem Statement and System Architecture to understand technical constraints.' },
    { step: '2', title: 'Open an Issue / Proposal', desc: 'Discuss experimental design or code changes with maintainers before major refactoring.' },
    { step: '3', title: 'Empirical Verification', desc: 'Include test bench data, reproducible scripts, and validation evidence with your pull request.' },
    { step: '4', title: 'Update Documentation', desc: 'Ensure schematics, BOM, formulas, and user guides are updated alongside code changes.' }
  ];

  return (
    <main className="flex-1 min-w-0 overflow-y-auto p-4 sm:p-6 md:p-10 relative">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/16-roadmap/phase-plan" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Roadmap</Link>
          <span>/</span>
          <span className="font-semibold text-gray-900 dark:text-gray-200">Contribution Guide</span>
        </nav>

        {/* Hero Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
            <GitPullRequest className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            Open-Science Collaboration &amp; Engineering Standards
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            InfraSocket Contribution Guide
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
            Guidelines for academic researchers, geophysicists, and embedded software engineers contributing to the InfraSocket hardware, signal processing, and telemetry platform.
          </p>
        </div>

        {/* 4-Step Contribution Workflow */}
        <section className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            Contribution Lifecycle
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {workflowSteps.map((wf, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800/80 rounded-2xl p-6 border border-gray-200 dark:border-gray-700/80 shadow-sm space-y-3"
              >
                <div className="w-8 h-8 rounded-full bg-sky-600 text-white font-bold text-sm flex items-center justify-center">
                  {wf.step}
                </div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white">
                  {wf.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {wf.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Areas Open for Contribution Table */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              Active Focus Areas
            </h2>
            <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">7 Collaborative Domains</span>
          </div>

          <div className="bg-white dark:bg-gray-800/80 rounded-2xl border border-gray-200 dark:border-gray-700/80 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-900/60 border-b border-gray-200 dark:border-gray-700 text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    <th className="py-3.5 px-6">Domain / Focus Area</th>
                    <th className="py-3.5 px-6">Required Skillsets</th>
                    <th className="py-3.5 px-6">Target Milestone</th>
                    <th className="py-3.5 px-6">Priority</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700/60">
                  {contributionAreas.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors">
                      <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                        {row.area}
                      </td>
                      <td className="py-4 px-6 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                        {row.skills}
                      </td>
                      <td className="py-4 px-6 text-xs font-mono text-sky-700 dark:text-sky-300">
                        {row.phase}
                      </td>
                      <td className="py-4 px-6 whitespace-nowrap">
                        <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                          row.priority === 'High'
                            ? 'bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-400 border border-rose-200 dark:border-rose-800'
                            : row.priority === 'Medium'
                            ? 'bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400 border border-amber-200 dark:border-amber-800'
                            : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                        }`}>
                          {row.priority}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Engineering Standards Guidelines */}
        <section className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            Engineering Documentation Guidelines
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white dark:bg-gray-800/80 rounded-2xl p-6 border border-gray-200 dark:border-gray-700/80 shadow-sm space-y-3">
              <div className="flex items-center gap-2 font-bold text-gray-900 dark:text-white text-base">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                Empirical Honesty
              </div>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Do not extrapolate or fabricate measurement parameters. Always explicitly delineate between theoretical target specifications and bench-measured values.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800/80 rounded-2xl p-6 border border-gray-200 dark:border-gray-700/80 shadow-sm space-y-3">
              <div className="flex items-center gap-2 font-bold text-gray-900 dark:text-white text-base">
                <Code2 className="w-5 h-5 text-sky-500" />
                Reproducible Code &amp; Test Datasets
              </div>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Algorithm submissions must be accompanied by offline test scripts with synthetic or bench CSV waveforms to ensure automated test regression coverage.
              </p>
            </div>
          </div>
        </section>

        {/* Footer Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-200 dark:border-gray-800">
          <Link
            to="/16-roadmap/future-scope"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm shadow-sm transition-colors"
          >
            Next: Future Scope
            <ArrowRight className="w-4 h-4" />
          </Link>
          <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
            <span>InfraSocket Documentation</span>
            <span>•</span>
            <Link to="/16-roadmap/phase-plan" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
              Phase Plan
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}