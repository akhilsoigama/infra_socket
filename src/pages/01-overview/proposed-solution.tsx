import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Wind,
  Gauge,
  Cpu,
  Monitor,
  Database,
  ShieldCheck,
  Sparkles,
  Layers,
  FlaskConical,
  Activity,
  ArrowRight,
  CheckCircle2,
  GitBranch,
  Sliders,
  Zap,
  Waves,
  Radio,
  FileText
} from 'lucide-react';

export default function Page01OverviewProposedSolution() {
  const [selectedStage, setSelectedStage] = useState(0);

  const pipelineStages = [
    {
      num: 1,
      title: 'Atmospheric Inlet & Wind Filter',
      short: 'Inlet & Filter',
      desc: 'Collects atmospheric infrasound waves while porous sintered bronze collar blocks localized turbulent wind eddies.',
      icon: Wind,
      color: 'teal',
      details: [
        'Single atmospheric intake riser with aerodynamic weather hood',
        'Porous sintered bronze filter collar for acoustic spatial turbulence reduction',
        'Dual output ports (Port A & Port B) mounted at machined filter base'
      ]
    },
    {
      num: 2,
      title: 'Dual Pneumatic Paths (Port A & B)',
      short: 'Dual Ports',
      desc: 'Direct Path (Port A) carries raw acoustic transients; Reference Path (Port B) routes air through an acoustic restriction & compliance chamber.',
      icon: GitBranch,
      color: 'teal',
      details: [
        'Port A (Direct Dynamic): Zero acoustic attenuation for 0.01–20 Hz infrasound',
        'Port B (Reference Branch): High-resistance capillary leak + thermal compliance volume',
        'Acoustic low-pass filter corner frequency set below 0.01 Hz'
      ]
    },
    {
      num: 3,
      title: 'DLVR Differential Pressure Sensor',
      short: 'DLVR Sensor',
      desc: 'Integrated micro-machined silicon diaphragm measures differential pressure [Port A − Port B] with on-chip 14-bit ADC.',
      icon: Gauge,
      color: 'teal',
      details: [
        'Amphenol DLVR-F50D piezoresistive silicon MEMS element',
        'Internal Co-MEMS architecture eliminates external analog trace noise',
        'Continuous 100 Hz calibrated readings over fast 400 kHz I²C interface'
      ]
    },
    {
      num: 4,
      title: 'Raspberry Pi 5 Edge Acquisition',
      short: 'RPi 5 Acquisition',
      desc: 'Hardware interrupt polling, FIFO memory buffering, digital detrending, and 4th-order Butterworth bandpass filtering.',
      icon: Cpu,
      color: 'blue',
      details: [
        'Broadcom BCM2712 quad-core 2.4 GHz processor',
        'Strict 100 SPS deterministic timestamping via hardware I²C driver',
        'Continuous frame streaming to host workstation over high-speed USB'
      ]
    },
    {
      num: 5,
      title: 'Desktop Application & Diagnostics',
      short: 'Desktop GUI',
      desc: 'Scientific real-time waveform streaming, live FFT power spectral density (PSD), and automated STA/LTA anomaly event detection.',
      icon: Monitor,
      color: 'blue',
      details: [
        'Interactive 60 FPS live waveform canvas & waterfall spectrogram',
        'Real-time frequency domain analysis and spectral energy ratio scoring',
        'Exportable CSV / JSON session records with calibrated physical Pascal units'
      ]
    }
  ];

  const validationPillars = [
    { title: 'Frequency Response', spec: '0.01–20 Hz band', desc: 'Magnitude and phase characterization using acoustic test chamber' },
    { title: 'Pressure-Noise Floor', spec: '< 0.05 Pa RMS', desc: 'Evaluating spectral noise density and ambient noise floor' },
    { title: 'Sensitivity Calibration', spec: '±125 Pa / ±500 Pa', desc: 'Benchmarking digital counts against precision transfer standard' },
    { title: 'Temperature Drift', spec: 'MCP9808 (±0.25°C)', desc: 'Quantifying zero-offset stability across diurnal ambient shifts' },
    { title: 'Multi-Hour Repeatability', spec: '> 99.8% sample fidelity', desc: 'Zero dropped frames across continuous 24-hour test runs' }
  ];

  return (
    <main className="flex-1 min-w-0 overflow-y-auto p-4 sm:p-6 md:p-10 relative bg-slate-50/50 dark:bg-gray-950/50">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* BREADCRUMB NAVIGATION */}
        <nav className="text-sm text-gray-500 dark:text-gray-400">
          <Link to="/" className="hover:underline text-sky-600 dark:text-sky-400 font-medium">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link to="/01-overview/key-features" className="hover:underline text-sky-600 dark:text-sky-400 font-medium">Overview</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="font-semibold text-gray-900 dark:text-gray-100">Proposed Solution</span>
        </nav>

        {/* HERO TITLE BLOCK WITH METRIC PILLS */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 text-xs font-bold border border-teal-200 dark:border-teal-800 flex items-center gap-1.5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
              System Architecture &amp; Methodology
            </span>
            <span className="px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 text-xs font-semibold border border-sky-200 dark:border-sky-800">
              End-to-End Pipeline
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-slate-700">
              Calibrated MEMS Sensing
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
            Proposed Solution &amp; Engineering Architecture
          </h1>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl">
            InfraSocket solves the critical challenge of accessible microbarometric infrasound detection. By pairing an acoustic wind-filtering inlet, a tunable pneumatic reference circuit, and on-die digital differential sensing, the system isolates tiny sub-Pascal sound waves from large static atmospheric pressure.
          </p>

          {/* KEY SPECIFICATION PILL COUNTERS */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="p-3.5 rounded-xl bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 shadow-xs flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center text-teal-600 dark:text-teal-400">
                <Waves className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Target Band</div>
                <div className="text-base font-extrabold text-gray-900 dark:text-white">0.01 – 20 Hz</div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 shadow-xs flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-sky-50 dark:bg-sky-950/50 flex items-center justify-center text-sky-600 dark:text-sky-400">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Sample Rate</div>
                <div className="text-base font-extrabold text-gray-900 dark:text-white">100 SPS</div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 shadow-xs flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-950/50 flex items-center justify-center text-amber-600 dark:text-amber-400">
                <Radio className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">ADC Precision</div>
                <div className="text-base font-extrabold text-gray-900 dark:text-white">14-Bit I²C</div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 shadow-xs flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                <Sliders className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Transducer</div>
                <div className="text-base font-extrabold text-gray-900 dark:text-white">DLVR-F50D</div>
              </div>
            </div>
          </div>
        </header>

        {/* CORE SYSTEM SUMMARY BANNER */}
        <div className="relative overflow-hidden p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-sky-50 via-teal-50/40 to-slate-50 dark:from-sky-950/30 dark:via-teal-950/20 dark:to-gray-900 border border-sky-200 dark:border-sky-800/60 shadow-xs">
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest font-bold text-sky-700 dark:text-sky-400 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-500" />
                Integrated Solution Synopsis
              </span>
              <p className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100 leading-snug">
                &ldquo;InfraSocket seamlessly integrates an atmospheric wind filter with dual ports, an acoustic reference chamber, and an edge-connected Raspberry Pi 5 to stream live infrasound data to your desktop screen.&rdquo;
              </p>
            </div>
            <Link
              to="/02-system-architecture/architecture"
              className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs sm:text-sm whitespace-nowrap shadow-xs hover:shadow-md transition-all flex items-center gap-1.5 shrink-0"
            >
              Explore Architecture
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* INTERACTIVE END-TO-END SYSTEM PIPELINE */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Activity className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              5-Stage Interactive Signal Pipeline
            </h2>
            <span className="text-xs font-mono text-gray-400 hidden sm:inline-block">Click stage to inspect</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5">
            {pipelineStages.map((stage, idx) => {
              const IconComp = stage.icon;
              const isSelected = selectedStage === idx;
              return (
                <button
                  key={stage.num}
                  type="button"
                  onClick={() => setSelectedStage(idx)}
                  className={`p-4 rounded-xl border text-left transition-all relative cursor-pointer ${
                    isSelected
                      ? 'bg-white dark:bg-gray-800 border-teal-500 dark:border-teal-400 shadow-md ring-2 ring-teal-500/20'
                      : 'bg-white/80 dark:bg-gray-900/80 border-slate-200 dark:border-gray-800 hover:border-slate-300 dark:hover:border-gray-700 hover:shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`w-6 h-6 rounded-md font-mono text-xs font-bold flex items-center justify-center ${
                      isSelected
                        ? 'bg-teal-600 text-white'
                        : 'bg-slate-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                    }`}>
                      0{stage.num}
                    </span>
                    <IconComp className={`w-4 h-4 ${isSelected ? 'text-teal-600 dark:text-teal-400' : 'text-gray-400'}`} />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-xs leading-snug">
                    {stage.short}
                  </h3>
                  <div className={`mt-2 h-1 rounded-full w-full ${isSelected ? 'bg-teal-500' : 'bg-slate-100 dark:bg-gray-800'}`}></div>
                </button>
              );
            })}
          </div>

          {/* ACTIVE STAGE DETAIL CARD */}
          <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-teal-200/80 dark:border-teal-900/50 shadow-sm transition-all">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-gray-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold">
                  0{pipelineStages[selectedStage].num}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {pipelineStages[selectedStage].title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {pipelineStages[selectedStage].desc}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
              {pipelineStages[selectedStage].details.map((detail, dIdx) => (
                <div key={dIdx} className="p-3 rounded-lg bg-slate-50 dark:bg-gray-800/50 border border-slate-200/80 dark:border-gray-700/60 text-xs text-gray-700 dark:text-gray-300 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DEDICATED ARCHITECTURAL SECTION: 1 INLET WITH PORT A & PORT B BREAKDOWN */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <GitBranch className="w-5 h-5 text-sky-600 dark:text-sky-400" />
              Pneumatic Separation: Wind Filter to Dual Ports (A &amp; B)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* PORT A CARD */}
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border-2 border-teal-500/30 dark:border-teal-500/20 shadow-xs hover:border-teal-500 transition-all space-y-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/5 rounded-full blur-xl pointer-events-none"></div>
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-md bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider">
                  Direct Dynamic Path
                </span>
                <span className="text-sm font-mono font-bold text-teal-600 dark:text-teal-400">PORT A</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Port A: Direct Acoustic Connection
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Connects directly from the Wind Noise Filter base to the DLVR differential sensor. It carries incoming high-speed atmospheric pressure fluctuations (0.01 to 20 Hz) without phase distortion or damping.
              </p>
              <ul className="text-xs text-gray-500 dark:text-gray-400 space-y-1.5 pt-2 border-t border-slate-100 dark:border-gray-800">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-500" />
                  <strong>Signal Band:</strong> 0.01 – 20 Hz target sound waves
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-500" />
                  <strong>Acoustic Resistance:</strong> Minimum pneumatic impedance
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-500" />
                  <strong>DLVR Destination:</strong> Dynamic positive sensing port
                </li>
              </ul>
            </div>

            {/* PORT B CARD */}
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border-2 border-sky-500/30 dark:border-sky-500/20 shadow-xs hover:border-sky-500 transition-all space-y-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/5 rounded-full blur-xl pointer-events-none"></div>
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-md bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300 text-xs font-bold uppercase tracking-wider">
                  Restricted Reference Path
                </span>
                <span className="text-sm font-mono font-bold text-sky-600 dark:text-sky-400">PORT B</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Port B: Filtered Static Reference
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Routes air through an acoustic restriction valve and an insulated compliance chamber. Slow weather changes equalise smoothly while rapid acoustic waves are blocked, providing a stable baseline.
              </p>
              <ul className="text-xs text-gray-500 dark:text-gray-400 space-y-1.5 pt-2 border-t border-slate-100 dark:border-gray-800">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-500" />
                  <strong>Cutoff Frequency:</strong> Low-pass filtered below 0.01 Hz
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-500" />
                  <strong>Pneumatics:</strong> Calibrated capillary leak + acoustic volume
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-500" />
                  <strong>DLVR Destination:</strong> Reference negative sensing port
                </li>
              </ul>
            </div>

          </div>
        </section>

        {/* 3 CORE VALUE & DIFFERENTIATION PILLARS */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            Engineering Differentiation &amp; Platform Value
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Pillar 1 */}
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 shadow-xs hover:shadow-md transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white text-base">
                Tunable Pneumatics
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Combines an adjustable capillary needle valve with calibrated DLVR digital differential sensing. Eliminates noisy analog op-amp gain stages in favor of integrated on-die digitization.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 shadow-xs hover:shadow-md transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white text-base">
                Validation &amp; Repeatability
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Structured test protocols to verify frequency response, noise floor, and thermal drift against calibrated reference standards, supported by rigid CAD baseplate mounting.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 shadow-xs hover:shadow-md transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white text-base">
                Accessible Research Platform
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Engineered with modular, readily accessible components for university laboratories, environmental research stations, and low-frequency acoustic exploration.
              </p>
            </div>

          </div>
        </section>

        {/* 5-DOMAIN LABORATORY VALIDATION MATRIX */}
        <section className="space-y-4">
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-gray-800">
              <div className="flex items-center gap-2">
                <FlaskConical className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                  Laboratory Validation: Five Evaluation Domains
                </h3>
              </div>
              <span className="text-xs font-mono font-bold text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950 px-2.5 py-1 rounded-md">
                Verified Protocol
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {validationPillars.map((p, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-gray-800/60 border border-slate-200 dark:border-gray-700/80 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold text-sky-600 dark:text-sky-400 block mb-1">
                      0{idx + 1}
                    </span>
                    <h4 className="text-xs font-bold text-gray-900 dark:text-gray-100 leading-snug">
                      {p.title}
                    </h4>
                    <span className="inline-block mt-1 text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-sky-100/70 dark:bg-sky-950/70 text-sky-800 dark:text-sky-300">
                      {p.spec}
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DETAILED HARDWARE ARCHITECTURE DETAILS */}
        <section className="space-y-6 pt-4 border-t border-slate-200 dark:border-gray-800">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            Detailed Component Architecture
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div className="p-5 rounded-xl bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 space-y-2">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <Wind className="w-4 h-4 text-teal-600" />
                1. Sintered Porous Wind-Noise Filter
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Atmospheric turbulence generates localized, incoherent pressure eddies. The sintered bronze collar acts as an acoustic spatial damper, suppressing wind turbulence while allowing correlated long-wavelength infrasound waves (&gt;17 m at 20 Hz) to enter coherently.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 space-y-2">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <Gauge className="w-4 h-4 text-teal-600" />
                2. Amphenol DLVR Piezoresistive MEMS
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Utilizes the DLVR-F50D differential sensor with silicon micromachined diaphragm. Direct I²C digital counts eliminate external instrumentation amplifier drift and 50/60 Hz mains power supply interference.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 space-y-2">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <Cpu className="w-4 h-4 text-sky-600" />
                3. Edge Acquisition on Raspberry Pi 5
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Hardware interrupt polling and ring memory buffering on the BCM2712 quad-core SBC ensure strict 100 Hz timing consistency. Regulated 3.3V LDO isolated power prevents battery voltage droop from affecting readings.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 space-y-2">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <Monitor className="w-4 h-4 text-sky-600" />
                4. Scientific Desktop GUI &amp; Diagnostics
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Modern desktop workstation console rendering live time-series microbarometric waveforms, power spectral density (PSD) plots, and automated STA/LTA acoustic transient event detection flags.
              </p>
            </div>

          </div>

          <div className="p-4 rounded-xl bg-slate-100 dark:bg-gray-900 text-xs text-gray-600 dark:text-gray-400 flex flex-wrap items-center justify-between gap-3">
            <span>Related documentation:</span>
            <div className="flex flex-wrap gap-4 font-semibold text-sky-600 dark:text-sky-400">
              <Link to="/02-system-architecture/architecture" className="hover:underline flex items-center gap-1">
                <FileText className="w-3.5 h-3.5" /> Technical Architecture
              </Link>
              <Link to="/01-overview/technology-stack" className="hover:underline flex items-center gap-1">
                <Zap className="w-3.5 h-3.5" /> Technology Stack
              </Link>
              <Link to="/09-calibration-validation/validation-methodology" className="hover:underline flex items-center gap-1">
                <FlaskConical className="w-3.5 h-3.5" /> Validation Methodology
              </Link>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}