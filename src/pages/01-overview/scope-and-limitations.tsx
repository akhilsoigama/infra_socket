import { Link } from 'react-router-dom';
import {
  ShieldAlert,
  CheckCircle2,
  XCircle,
  Cpu,
  Layers,
  Brain,
  Activity,
  ArrowRight,
  Compass
} from 'lucide-react';

export default function Page01OverviewScopeAndLimitations() {
  const inScopeItems = [
    {
      category: 'Sensing & Pneumatics',
      icon: Cpu,
      items: [
        'Single-station microbarometer differential sensing',
        'Sealed thermal reference chamber with calibrated capillary leak',
        '4-port spatial-averaging wind-noise reduction manifold',
        'Digital temperature logging for drift compensation'
      ]
    },
    {
      category: 'Data Acquisition & DSP',
      icon: Activity,
      items: [
        '16-bit+ ΔΣ conversion stage at 100 Hz continuous acquisition',
        'Digital DC baseline detrending and zero-point stabilization',
        '4th-order Butterworth bandpass filtering (0.01 – 20 Hz)',
        'Welch power spectral density (PSD) & real-time STFT waterfall'
      ]
    },
    {
      category: 'Software & Telemetry',
      icon: Layers,
      items: [
        'Real-time Python PyQtGraph desktop console at 60 FPS',
        'Live waveform streaming and threshold alert triggers',
        'CSV/Binary time-series and spectral feature logging',
        'Dual-zone serial UART communication protocol'
      ]
    },
    {
      category: 'Machine Learning Baseline',
      icon: Brain,
      items: [
        'Unsupervised Isolation Forest anomaly scoring model',
        'Time and frequency-domain statistical feature extraction',
        'Configurable 3-sigma anomaly threshold flag',
        'Background noise baseline model calibration'
      ]
    }
  ];

  const outOfScope = [
    { item: 'Supervised Event Classification', reason: 'Requires massive multi-year labeled global event libraries', roadmap: 'Phase 3: Deep Learning' },
    { item: 'Multi-Station Bearing & Azimuth Localization', reason: 'Requires distributed multi-node array with GPS time sync', roadmap: 'Phase 3: Sensor Array' },
    { item: 'Sub-MilliPascal Noise Floor (< 0.001 Pa)', reason: 'Demands specialized research-grade transducers ($10,000+ USD)', roadmap: 'Institutional Custom Build' },
    { item: 'Certified Disaster Early-Warning Deployment', reason: 'Requires statutory civil defense regulatory certification', roadmap: 'Excluded from Scope' },
    { item: 'Full CTBTO IMS Network Integration', reason: 'Requires specialized IMS infrasound station compliance', roadmap: 'Future Interoperability' }
  ];

  const limitations = [
    {
      title: 'Wind Turbulence Interference',
      desc: 'While the 4-port spatial averaging manifold attenuates uncorrelated micro-turbulences, severe atmospheric wind shear (> 25 km/h) can overwhelm sub-Pascal acoustic signals.',
      tag: 'Acoustic / Environment'
    },
    {
      title: 'Diurnal Thermal Equilibrium',
      desc: 'Ambient day-night temperature swings cause slow volumetric expansion inside the reference chamber, mitigated by capillary leakage and digital polynomial compensation.',
      tag: 'Thermodynamics'
    },
    {
      title: 'Single-Node Localization Inability',
      desc: 'A single point microbarometer accurately measures local acoustic pressure arrival and spectral characteristics, but cannot determine source direction or velocity without a multi-node array.',
      tag: 'Array Geometry'
    },
    {
      title: 'Frequency-Time Trade-off',
      desc: 'Resolving ultra-low frequencies near 0.01 Hz requires analysis windows exceeding 100 seconds, setting a theoretical boundary on temporal precision for sub-audible transients.',
      tag: 'Signal Processing'
    }
  ];

  return (
    <main className="flex-1 min-w-0 overflow-y-auto p-4 sm:p-6 md:p-10 relative">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/01-overview/key-features" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Overview</Link>
          <span>/</span>
          <span className="font-semibold text-gray-900 dark:text-gray-200">Scope and Limitations</span>
        </nav>

        {/* Hero Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
            <Compass className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            Engineering Boundaries &amp; Operational Envelope
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Scope &amp; Engineering Limitations
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
            Defining explicit functional boundaries, delivered hardware/software capabilities for the prototype, excluded objectives, and physical operational constraints.
          </p>
        </div>

        {/* In-Scope Capabilities Grid */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              In-Scope Prototype Deliverables
            </h2>
            <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">4 Subsystem Domains</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {inScopeItems.map((group, idx) => {
              const Icon = group.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800/80 rounded-2xl p-6 border border-gray-200 dark:border-gray-700/80 shadow-sm space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-sky-50 dark:bg-sky-950/50 border border-sky-200 dark:border-sky-800 flex items-center justify-center text-sky-600 dark:text-sky-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 dark:text-white">
                      {group.category}
                    </h3>
                  </div>

                  <ul className="space-y-2">
                    {group.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                        <span className="text-emerald-500 font-bold shrink-0 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* Out-of-Scope Capabilities Table */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <XCircle className="w-5 h-5 text-amber-500" />
              Explicitly Out-of-Scope (Prototype MVP)
            </h2>
            <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">Future Roadmap Items</span>
          </div>

          <div className="bg-white dark:bg-gray-800/80 rounded-2xl border border-gray-200 dark:border-gray-700/80 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-900/60 border-b border-gray-200 dark:border-gray-700 text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    <th className="py-3.5 px-6">Capability Item</th>
                    <th className="py-3.5 px-6">Engineering Rationale</th>
                    <th className="py-3.5 px-6">Roadmap Scope</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700/60">
                  {outOfScope.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors">
                      <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                        {row.item}
                      </td>
                      <td className="py-4 px-6 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        {row.reason}
                      </td>
                      <td className="py-4 px-6 whitespace-nowrap">
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                          {row.roadmap}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Known Engineering Limitations */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-sky-600 dark:text-sky-400" />
              Known Physical &amp; Environmental Constraints
            </h2>
            <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">Operational Realities</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {limitations.map((lim, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800/80 rounded-2xl p-6 border border-gray-200 dark:border-gray-700/80 shadow-sm space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white">
                    {lim.title}
                  </h3>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-sky-50 dark:bg-sky-950/50 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                    {lim.tag}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {lim.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-200 dark:border-gray-800">
          <Link
            to="/01-overview/project-status"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm shadow-sm transition-colors"
          >
            Next: Project Status
            <ArrowRight className="w-4 h-4" />
          </Link>
          <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
            <span>InfraSocket Documentation</span>
            <span>•</span>
            <Link to="/01-overview/problem-statement" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
              Return to Problem Statement
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}