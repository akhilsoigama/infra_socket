import { Link } from 'react-router-dom';
import {
  Target,
  Cpu,
  Activity,
  Brain,
  LayoutDashboard,
  CheckCircle2,
  FileText,
  Compass,
  ArrowRight,
  Gauge
} from 'lucide-react';

export default function Page01OverviewProjectObjectives() {
  const primaryObjectives = [
    {
      icon: Gauge,
      title: '1. Functional Differential Microbarometer',
      badge: 'Hardware Core',
      desc: 'Design and assemble a functional prototype targeting 0.01 – 20 Hz low-frequency atmospheric pressure fluctuations using an Amphenol DLVR differential sensor, rigid reference chamber, and capillary equalization port.'
    },
    {
      icon: Cpu,
      title: '2. High-Fidelity 100 Hz Digitization',
      badge: 'Signal Acquisition',
      desc: 'Implement a low-noise analog-to-digital acquisition pipeline running at continuous 100 Hz with ≥16-bit effective resolution, ensuring high dynamic range and Nyquist integrity.'
    },
    {
      icon: Activity,
      title: '3. Real-Time Embedded DSP Pipeline',
      badge: 'Signal Processing',
      desc: 'Execute real-time baseline drift cancellation, 4th-order Butterworth bandpass filtering (0.01–20 Hz), Fast Fourier Transform (FFT) power spectral density, and time-frequency spectrogram waterfall.'
    },
    {
      icon: Brain,
      title: '4. Unsupervised Anomaly Screening',
      badge: 'Edge Intelligence',
      desc: 'Extract statistical time and frequency features to train an Isolation Forest model that autonomously flags anomalous transient acoustic bursts exceeding baseline ambient noise.'
    },
    {
      icon: LayoutDashboard,
      title: '5. Real-Time Telemetry & Console',
      badge: 'Visualization',
      desc: 'Develop a 60 FPS PyQtGraph desktop console presenting live pressure waveforms, live FFT spectrum, rolling spectrograms, thermal logs, and visual anomaly alert indicators.'
    }
  ];

  const secondaryObjectives = [
    {
      icon: FileText,
      title: 'Comprehensive Technical Documentation',
      desc: 'Maintain transparent engineering documentation detailing pneumatic transfer functions, electronic schematics, DSP mathematics, and validation procedures.'
    },
    {
      icon: Compass,
      title: 'Open Scientific Reproducibility',
      desc: 'Utilize standard, commercially accessible components so university research labs and geophysics enthusiasts can independently build, calibrate, and extend the instrument.'
    },
    {
      icon: CheckCircle2,
      title: 'Rigorous Calibration Protocol',
      desc: 'Establish reproducible calibration scripts for sensitivity (counts/Pa), frequency response (0.01–20 Hz sweep), electrical noise floor, and thermal drift characterization.'
    }
  ];

  const outcomes = [
    { objective: 'Pressure Response', outcome: 'Sensor outputs linear digital counts proportional to applied differential pressure.', metric: 'R² ≥ 0.98 linearity' },
    { objective: 'Wind Noise Reduction', outcome: 'Spatial averaging manifold attenuates uncorrelated turbulent micro-eddies.', metric: '≥ 10 dB attenuation' },
    { objective: 'Continuous Digitization', outcome: 'Zero buffer overflows or sample dropouts during 24-hour continuous bench telemetry.', metric: '100 Hz ± 0.1% timing' },
    { objective: 'Spectral Accuracy', outcome: 'FFT accurately resolves known synthesized test tones across 0.05 Hz to 15 Hz.', metric: '±0.02 Hz peak fidelity' },
    { objective: 'Anomaly Trigger', outcome: 'Step pressure impulses and synthetic microbarom bursts reliably trigger anomaly flags.', metric: 'True positive rate ≥ 90%' }
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
          <span className="font-semibold text-gray-900 dark:text-gray-200">Project Objectives</span>
        </nav>

        {/* Hero Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
            <Target className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            Engineering Milestones &amp; Deliverables
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Project Objectives &amp; Measurable Outcomes
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
            The development goals for InfraSocket center on building an accessible, verifiable atmospheric infrasound microbarometer prototype. Every primary objective pairs with quantifiable verification criteria.
          </p>
        </div>

        {/* Primary Objectives Grid */}
        <section className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            Primary Engineering Objectives
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {primaryObjectives.map((obj, idx) => {
              const Icon = obj.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800/80 rounded-2xl p-6 border border-gray-200 dark:border-gray-700/80 shadow-sm hover:shadow-md hover:border-sky-300 dark:hover:border-sky-600 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/50 border border-sky-200 dark:border-sky-800 flex items-center justify-center text-sky-600 dark:text-sky-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300">
                        {obj.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-gray-900 dark:text-white">
                      {obj.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {obj.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Secondary Objectives */}
        <section className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            Secondary &amp; Scientific Objectives
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {secondaryObjectives.map((sec, idx) => {
              const Icon = sec.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800/80 rounded-2xl p-6 border border-gray-200 dark:border-gray-700/80 shadow-sm space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/50 border border-sky-200 dark:border-sky-800 flex items-center justify-center text-sky-600 dark:text-sky-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white">
                    {sec.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {sec.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Measurable Outcomes Table */}
        <section className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            Quantifiable Acceptance Criteria
          </h2>

          <div className="bg-white dark:bg-gray-800/80 rounded-2xl border border-gray-200 dark:border-gray-700/80 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-900/60 border-b border-gray-200 dark:border-gray-700 text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    <th className="py-3.5 px-6">Verification Domain</th>
                    <th className="py-3.5 px-6">Measurable Outcome</th>
                    <th className="py-3.5 px-6">Target Threshold</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700/60">
                  {outcomes.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors">
                      <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                        {row.objective}
                      </td>
                      <td className="py-4 px-6 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        {row.outcome}
                      </td>
                      <td className="py-4 px-6 whitespace-nowrap">
                        <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                          {row.metric}
                        </span>
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
            to="/01-overview/proposed-solution"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm shadow-sm transition-colors"
          >
            Next: Proposed Solution
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