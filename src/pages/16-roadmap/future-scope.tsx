import { Link } from 'react-router-dom';
import {
  Compass,
  ArrowRight,
  GitBranch,
  Cpu,
  Radio,
  Server
} from 'lucide-react';

export default function Page16RoadmapFutureScope() {
  const evolutionTable = [
    { capability: 'Sensor Nodes', mvp: '1 Single Node', phase2: '1 Optimized Node', phase3: '3–4 Tripartite Array', phase4: 'Distributed Regional Network' },
    { capability: 'Wind Noise Reduction', mvp: '4-Port Prototype', phase2: '8–12 Inlets + Damping', phase3: 'Porous Star/Hexagonal Manifold', phase4: 'Site-Optimized Arrays' },
    { capability: 'Signal Analysis', mvp: 'Bandpass + FFT + STFT', phase2: 'Continuous PSD + Drift Model', phase3: 'PMCC Cross-Correlation', phase4: 'Automated Event Classifier' },
    { capability: 'Machine Learning', mvp: 'Isolation Forest Anomaly', phase2: 'Ensemble (LOF + One-Class)', phase3: 'Spectrogram 2D CNNs', phase4: 'Distributed Federated ML' },
    { capability: 'Telemetry & UI', mvp: 'PyQtGraph Desktop GUI', phase2: 'Enhanced Web Dashboard', phase3: 'Array Polar Azimuth Map', phase4: 'Global Geo-Mapping Fleet' },
    { capability: 'Storage & Data', mvp: 'Local Ring Buffers / SQLite', phase2: 'Time-Series DB (InfluxDB)', phase3: 'Centralized Lab Hub', phase4: 'Open Science S3 Archive' }
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
          <span className="font-semibold text-gray-900 dark:text-gray-200">Future Scope</span>
        </nav>

        {/* Hero Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
            <Compass className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            Long-Term System Evolution
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Future Scope &amp; Architectural Growth
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
            From single-station laboratory characterization to distributed multi-station array localization and open-access acoustic telemetry.
          </p>
        </div>

        {/* Development Timeline Gantt Chart */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <GitBranch className="w-5 h-5 text-sky-600 dark:text-sky-400" />
            Multi-Phase Development Timeline
          </h2>

          <div className="bg-white dark:bg-gray-800/80 rounded-2xl p-6 border border-gray-200 dark:border-gray-700/80 shadow-sm overflow-x-auto">
            <pre><code className="language-mermaid">gantt{"\n"}{"    "}title InfraSocket Development Roadmap{"\n"}{"    "}dateFormat YYYY-MM{"\n"}{"    "}axisFormat %b %Y{"\n"}{"\n"}{"    "}section Phase 1 (MVP){"\n"}{"        "}Hardware prototype{"        "}:done, p1a, 2025-01, 2025-03{"\n"}{"        "}Signal processing{"         "}:done, p1b, 2025-02, 2025-03{"\n"}{"        "}Isolation Forest{"          "}:done, p1c, 2025-02, 2025-04{"\n"}{"        "}Web dashboard{"             "}:done, p1d, 2025-03, 2025-04{"\n"}{"        "}Calibration &amp; testing{"     "}:active, p1e, 2025-03, 2025-05{"\n"}{"\n"}{"    "}section Phase 2{"\n"}{"        "}Improved manifold{"          "}:p2a, 2025-05, 2025-07{"\n"}{"        "}Multi-model ensemble{"       "}:p2b, 2025-05, 2025-08{"\n"}{"        "}Long-duration validation{"   "}:p2c, 2025-06, 2025-09{"\n"}{"\n"}{"    "}section Phase 3{"\n"}{"        "}Multi-sensor array{"         "}:p3a, 2025-08, 2025-12{"\n"}{"        "}Event classification{"       "}:p3b, 2025-09, 2026-03{"\n"}{"        "}Deep learning{"              "}:p3c, 2025-10, 2026-03{"\n"}{"\n"}{"    "}section Phase 4{"\n"}{"        "}Station network{"            "}:p4a, 2026-01, 2026-06{"\n"}{"        "}Cloud infrastructure{"       "}:p4b, 2026-02, 2026-08{"\n"}{"        "}Community deployment{"       "}:p4c, 2026-06, 2026-12{"\n"}</code></pre>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 italic">
            * Timelines indicate research phases dependent on laboratory validation cycles, field test windows, and hardware iteration milestones.
          </p>
        </section>

        {/* Phased Horizon Cards */}
        <section className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            Architectural Growth Horizons
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white dark:bg-gray-800/80 rounded-2xl p-6 border border-gray-200 dark:border-gray-700/80 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 font-bold text-sm">
                <Cpu className="w-5 h-5" />
                Phase 2: Enhanced Reliability
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-1.5">• <span>8-to-12 inlet symmetric spatial averaging manifold</span></li>
                <li className="flex items-start gap-1.5">• <span>Ensemble anomaly detection (Isolation Forest + LOF)</span></li>
                <li className="flex items-start gap-1.5">• <span>Continuous ambient chamber soak (30-day continuous trial)</span></li>
                <li className="flex items-start gap-1.5">• <span>Dynamic 2nd-order polynomial thermal drift compensation</span></li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800/80 rounded-2xl p-6 border border-gray-200 dark:border-gray-700/80 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 font-bold text-sm">
                <Radio className="w-5 h-5" />
                Phase 3: Array &amp; Direction Finding
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-1.5">• <span>3+ node tripartite array deployment (100–300 m baseline)</span></li>
                <li className="flex items-start gap-1.5">• <span>GPS PPS-disciplined microsecond time synchronization</span></li>
                <li className="flex items-start gap-1.5">• <span>Progressive Multi-Channel Correlation (PMCC) azimuth finding</span></li>
                <li className="flex items-start gap-1.5">• <span>Supervised deep learning (2D spectrogram CNN classification)</span></li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800/80 rounded-2xl p-6 border border-gray-200 dark:border-gray-700/80 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 font-bold text-sm">
                <Server className="w-5 h-5" />
                Phase 4: Open Network &amp; Cloud
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-1.5">• <span>Distributed regional multi-station mesh network</span></li>
                <li className="flex items-start gap-1.5">• <span>Cloud-synchronized real-time alerting &amp; historical queries</span></li>
                <li className="flex items-start gap-1.5">• <span>Open-hardware DIY builder kits for university science labs</span></li>
                <li className="flex items-start gap-1.5">• <span>Public open-science real-time infrasound stream repository</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technology Evolution Table */}
        <section className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            Technology Evolution Comparison
          </h2>

          <div className="bg-white dark:bg-gray-800/80 rounded-2xl border border-gray-200 dark:border-gray-700/80 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-900/60 border-b border-gray-200 dark:border-gray-700 text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    <th className="py-3.5 px-6">Capability Domain</th>
                    <th className="py-3.5 px-6">MVP Baseline</th>
                    <th className="py-3.5 px-6">Phase 2 Target</th>
                    <th className="py-3.5 px-6">Phase 3 Array</th>
                    <th className="py-3.5 px-6">Phase 4 Network</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700/60 text-xs sm:text-sm">
                  {evolutionTable.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors">
                      <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                        {row.capability}
                      </td>
                      <td className="py-4 px-6 text-sky-700 dark:text-sky-300 font-medium">
                        {row.mvp}
                      </td>
                      <td className="py-4 px-6 text-gray-600 dark:text-gray-300">
                        {row.phase2}
                      </td>
                      <td className="py-4 px-6 text-gray-600 dark:text-gray-300">
                        {row.phase3}
                      </td>
                      <td className="py-4 px-6 text-gray-600 dark:text-gray-300">
                        {row.phase4}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Footer Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-200 dark:border-gray-800">
          <Link
            to="/16-roadmap/phase-plan"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm shadow-sm transition-colors"
          >
            Next: Phase Plan
            <ArrowRight className="w-4 h-4" />
          </Link>
          <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
            <span>InfraSocket Documentation</span>
            <span>•</span>
            <Link to="/16-roadmap/contribution-guide" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
              Contribution Guide
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}