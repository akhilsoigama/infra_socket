import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Cpu,
  Binary,
  Monitor,
  FlaskConical,
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Layers,
  Activity,
  Zap,
  ShieldCheck,
  Clock,
  Database,
  Terminal,
  Gauge
} from 'lucide-react';

export default function Page01OverviewTechnologyStack() {
  const [activeTier, setActiveTier] = useState<string>('all');

  const stackTiers = [
    {
      id: 'tier-1',
      tierNumber: '01',
      category: 'Hardware & Edge Acquisition',
      title: 'Direct Digital Physical Sensing',
      icon: Cpu,
      accentColor: 'sky',
      badge: 'Edge Core',
      specs: [
        { label: 'Compute Node', val: 'Raspberry Pi 5 (Quad-Core 2.4 GHz Cortex-A76, 4GB RAM)' },
        { label: 'Pressure Transducer', val: 'Amphenol DLVR-F50D-E1ND-C-NI3F (±500 Pa)' },
        { label: 'Digitization', val: 'Integrated 14/16-bit on-die ΔΣ ADC & ASIC front-end' },
        { label: 'Hardware Interface', val: 'I²C Bus (SDA/SCL) @ 3.3V logic level (100–400 kHz)' },
        { label: 'Sampling Rate', val: '100 Hz deterministic hardware polling loop (10 ms period)' },
        { label: 'Power Source', val: '12V LiFePO4 battery pack with ultra-low-noise DC-DC buck' }
      ],
      description:
        'Eliminates fragile external analog front-end (AFE) op-amps and discrete ADC chips by leveraging Amphenol DLVR on-chip piezoresistive micro-machined bridge and internal digitization.',
      tags: ['I²C 3.3V', 'RPi 5', 'Amphenol DLVR', 'LiFePO4 DC']
    },
    {
      id: 'tier-2',
      tierNumber: '02',
      category: 'Scientific Signal Processing',
      title: 'Python Edge DSP & Analytics',
      icon: Binary,
      accentColor: 'indigo',
      badge: 'Scientific Core',
      specs: [
        { label: 'Runtime Core', val: 'Python 3.11+ / C-accelerated scientific runtime' },
        { label: 'Vector Processing', val: 'NumPy vectorized sliding-window ring buffers' },
        { label: 'Digital Filtering', val: 'SciPy signal: 4th-order zero-phase Butterworth (0.01–20 Hz)' },
        { label: 'Spectral Analytics', val: 'SciPy FFT & Welch Power Spectral Density (PSD)' },
        { label: 'Anomaly Screening', val: 'Unsupervised scikit-learn Isolation Forest on spectral features' },
        { label: 'Processing Latency', val: '< 2.4 ms per 256-sample window computation' }
      ],
      description:
        'Executes deterministic digital bandpass filtering, DC baseline tracking, spectral density estimation, and statistical transient anomaly detection on the edge processor in real time.',
      tags: ['NumPy', 'SciPy', 'Butterworth 0.01–20Hz', 'Welch PSD', 'Isolation Forest']
    },
    {
      id: 'tier-3',
      tierNumber: '03',
      category: 'Desktop Telemetry Application',
      title: 'Low-Latency Operator Console',
      icon: Monitor,
      accentColor: 'teal',
      badge: 'Operator UI',
      specs: [
        { label: 'GUI Framework', val: 'Electron + React 19 + TypeScript (Cross-Platform)' },
        { label: 'Visualization Engine', val: 'High-performance Canvas / SVG 60 FPS real-time renderers' },
        { label: 'Telemetry Stream', val: 'Framed USB serial & TCP/WebSocket socket telemetry' },
        { label: 'Display Elements', val: 'Raw time-domain oscilloscope, live Welch PSD, STFT spectrogram' },
        { label: 'Archive Storage', val: 'Timestamped SQLite / CSV continuous ring buffer storage' },
        { label: 'Frame Budget', val: '16.6 ms per frame (60 FPS smooth oscilloscope trace)' }
      ],
      description:
        'Provides research operators with interactive live pressure oscilloscopes, dynamic spectrogram waterfalls, historical export utilities, and audible/visual transient alarms.',
      tags: ['React 19', 'TypeScript', 'Electron', '60 FPS Canvas', 'SQLite']
    },
    {
      id: 'tier-4',
      tierNumber: '04',
      category: 'Characterization & Validation',
      title: 'Laboratory Test Rig & Verification',
      icon: FlaskConical,
      accentColor: 'emerald',
      badge: 'Validation Bench',
      specs: [
        { label: 'Reference Source', val: 'Controlled dynamic pressure chamber with calibrated reference' },
        { label: 'Bandwidth Testing', val: 'Sinusoidal pressure sweeps across 0.01 Hz to 20.0 Hz' },
        { label: 'Noise Spectral Floor', val: 'Band-limited RMS noise floor baseline characterization' },
        { label: 'Thermal Drift Evaluation', val: 'Environmental chamber stability tests (MCP9808 monitoring)' },
        { label: 'Leak Resistor Calibration', val: 'Step pressure decay time-constant verification (τ = R × C)' },
        { label: 'Reproducibility', val: 'Open data schema & automated test bench validation scripts' }
      ],
      description:
        'Empirical verification benches ensure that pneumatic time constants, transducer sensitivity counts, transfer functions, and spectral noise baselines adhere to strict scientific rigor.',
      tags: ['Acoustic Chamber', '0.01–20 Hz Sweep', 'Step Response', 'Thermal Drift']
    }
  ];

  const benchmarks = [
    { label: 'Sampling Rate', value: '100 Hz', sub: 'Deterministic I²C Loop', icon: Activity },
    { label: 'Passband Range', value: '0.01 – 20 Hz', sub: 'Sub-audible infrasonic', icon: Gauge },
    { label: 'Edge DSP Latency', value: '< 2.5 ms', sub: 'SciPy vectorized window', icon: Zap },
    { label: 'GUI Render Speed', value: '60 FPS', sub: 'Canvas / WebGL pipeline', icon: Clock }
  ];

  const feasibilityAssessment = [
    {
      area: 'Transducer & Digitization',
      status: 'High Feasibility',
      icon: CheckCircle2,
      color: 'emerald',
      detail: 'Amphenol DLVR-F50D is a commercial, production-grade MEMS sensor with factory calibration, integrated delta-sigma ADC, and standard I²C bus. No custom ASIC fabrication required.'
    },
    {
      area: 'Edge Processing Compute',
      status: 'High Feasibility',
      icon: CheckCircle2,
      color: 'emerald',
      detail: 'Raspberry Pi 5 offers 2–3× the compute of RPi 4. Filtering a 100 Hz single-channel stream consumes less than 4% of a single CPU core, leaving ample headroom for FFT and telemetry.'
    },
    {
      area: 'Pneumatic Reference Isolation',
      status: 'Engineering Qualified',
      icon: ShieldCheck,
      color: 'sky',
      detail: 'A rigid reference chamber with an engineered capillary restriction acts as an acoustic low-pass filter, passing barometric diurnal cycles while holding steady against 0.01–20 Hz waves.'
    },
    {
      area: 'Empirical Noise Verification',
      status: 'Requires Calibration',
      icon: AlertCircle,
      color: 'amber',
      detail: 'While architectural feasibility is solid, absolute sensor sensitivity, 1/f noise corner, and pneumatic transfer function must be experimentally measured on a physical test bench.'
    }
  ];

  const roadmapSteps = [
    { num: '01', title: 'Hardware Integration', desc: 'Direct I²C sensor wiring, power isolation, and Raspberry Pi GPIO bus validation.' },
    { num: '02', title: 'Deterministic DAQ', desc: '100 Hz polling loop with timestamping and ring buffer serialization.' },
    { num: '03', title: 'Edge DSP & FFT', desc: '4th-order Butterworth bandpass and sliding Welch PSD computation.' },
    { num: '04', title: 'Laboratory Test Bench', desc: 'Frequency response sweeps inside sealed reference pressure chamber.' },
    { num: '05', title: 'Operator Telemetry', desc: '60 FPS cross-platform desktop console with real-time waveform display.' }
  ];

  const filteredTiers =
    activeTier === 'all'
      ? stackTiers
      : stackTiers.filter((t) => t.id === activeTier);

  return (
    <main className="flex-1 min-w-0 overflow-y-auto p-4 sm:p-6 md:p-10 relative">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/01-overview/proposed-solution" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Overview</Link>
          <span>/</span>
          <span className="font-semibold text-gray-900 dark:text-gray-200">Technology Stack &amp; Feasibility</span>
        </nav>

        {/* Hero Section */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
            <Layers className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            Full-Stack Instrumentation Architecture
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Technology Stack &amp; Technical Feasibility
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
            InfraSocket is built upon a modular four-tier technology stack combining precision digital differential MEMS sensing, deterministic Linux edge acquisition, Python scientific DSP, and a 60 FPS operator telemetry interface.
          </p>
        </div>

        {/* Real-Time Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {benchmarks.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/80 shadow-xs flex items-center gap-3.5"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 flex items-center justify-center text-sky-600 dark:text-sky-400 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white tracking-tight">
                    {item.value}
                  </div>
                  <div className="text-[11px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    {item.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technology Tier Filter Tabs */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-gray-200 dark:border-gray-800">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                Modular 4-Tier Architectural Stack
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                Inspect component specifications, hardware buses, and software libraries for each tier
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 self-start sm:self-auto">
              <button
                onClick={() => setActiveTier('all')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeTier === 'all'
                    ? 'bg-white dark:bg-gray-800 text-sky-600 dark:text-sky-400 shadow-xs'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                All 4 Tiers
              </button>
              {stackTiers.map((tier) => (
                <button
                  key={tier.id}
                  onClick={() => setActiveTier(tier.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    activeTier === tier.id
                      ? 'bg-white dark:bg-gray-800 text-sky-600 dark:text-sky-400 shadow-xs'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  Tier {tier.tierNumber}
                </button>
              ))}
            </div>
          </div>

          {/* Tier Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTiers.map((tier) => {
              const Icon = tier.icon;
              return (
                <div
                  key={tier.id}
                  className="bg-white dark:bg-gray-800/80 rounded-2xl p-6 border border-gray-200 dark:border-gray-700/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-5"
                >
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 flex items-center justify-center text-sky-600 dark:text-sky-400">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 block">
                            Tier {tier.tierNumber} • {tier.category}
                          </span>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                            {tier.title}
                          </h3>
                        </div>
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-700/80 text-gray-700 dark:text-gray-300">
                        {tier.badge}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {tier.description}
                    </p>

                    {/* Technical Specs List */}
                    <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-gray-900/60 border border-slate-200 dark:border-gray-700/80 space-y-2">
                      {tier.specs.map((spec, i) => (
                        <div key={i} className="flex items-start justify-between text-xs gap-3">
                          <span className="font-semibold text-gray-500 dark:text-gray-400 shrink-0">
                            {spec.label}:
                          </span>
                          <span className="font-mono text-right text-gray-800 dark:text-gray-200 font-medium">
                            {spec.val}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags & Footer */}
                  <div className="pt-3 border-t border-gray-100 dark:border-gray-700/60 flex flex-wrap gap-1.5">
                    {tier.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-sky-50 dark:bg-sky-950/50 text-sky-700 dark:text-sky-300 border border-sky-200/70 dark:border-sky-800/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technical Feasibility Deep-Dive */}
        <section className="space-y-5">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-sky-600 dark:text-sky-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              Engineering Feasibility Assessment
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {feasibilityAssessment.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/80 shadow-xs space-y-2.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      {item.area}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                        item.color === 'emerald'
                          ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                          : item.color === 'sky'
                          ? 'bg-sky-50 text-sky-700 dark:bg-sky-950/50 dark:text-sky-300 border border-sky-200 dark:border-sky-800'
                          : 'bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300 border border-amber-200 dark:border-amber-800'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {item.status}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Progressive Engineering Roadmap */}
        <section className="space-y-5">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-sky-600 dark:text-sky-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              Implementation &amp; Validation Pipeline
            </h2>
          </div>

          <div className="bg-white dark:bg-gray-800/80 rounded-2xl p-6 border border-gray-200 dark:border-gray-700/80 shadow-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {roadmapSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-gray-900/60 border border-slate-200 dark:border-gray-700/80 flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-1.5">
                    <span className="text-xs font-mono font-bold text-sky-600 dark:text-sky-400 block">
                      Stage {step.num}
                    </span>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-tight">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Validation Notice Banner */}
        <div className="p-4 rounded-xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 text-sky-900 dark:text-sky-200 text-xs flex items-center gap-2.5">
          <AlertCircle className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
          <span>
            <strong>Experimental Qualification Note:</strong> Target passband (0.01–20.0 Hz) and minimum resolvable pressure resolution are subject to ongoing physical laboratory acoustic chamber verification.
          </span>
        </div>

        {/* Footer Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-200 dark:border-gray-800">
          <Link
            to="/02-system-architecture/architecture"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm shadow-sm transition-colors"
          >
            Next: System Architecture
            <ArrowRight className="w-4 h-4" />
          </Link>
          <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
            <span>InfraSocket Documentation</span>
            <span>•</span>
            <Link to="/01-overview/proposed-solution" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
              Return to Solution Overview
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
