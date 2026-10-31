import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Layers,
  Cpu,
  BatteryCharging,
  Thermometer,
  Fan,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Activity,
  Gauge,
  Sliders,
  FlaskConical,
  Wind
} from 'lucide-react';

export default function Page02SystemArchitectureArchitecture() {
  const [activeZone, setActiveZone] = useState<string>('all');

  const zone1Steps = [
    {
      num: '01',
      title: 'Atmospheric Infrasound',
      sub: 'Physical Input',
      desc: 'Ambient micro-pressure acoustic fluctuations across 0.01 – 20.0 Hz with sub-Pascal amplitudes.',
      icon: Wind
    },
    {
      num: '02',
      title: '4-Port Noise Manifold',
      sub: 'Spatial Averaging',
      desc: 'Quad-port geometric manifold cancels turbulent local wind eddies via multi-point spatial averaging.',
      icon: Sliders
    },
    {
      num: '03',
      title: 'DLVR-F50D Transducer',
      sub: 'Differential MEMS',
      desc: 'Silicon piezoresistive bridge compares dynamic Port A directly against restricted reference Port B.',
      icon: Gauge
    },
    {
      num: '04',
      title: 'Raspberry Pi 5 SBC',
      sub: 'Deterministic Readout',
      desc: 'Dedicated 100 Hz hardware I²C bus polling loop (SDA/SCL) with microsecond sample timestamping.',
      icon: Cpu
    },
    {
      num: '05',
      title: 'Edge DSP & Anomaly',
      sub: 'SciPy Pipeline',
      desc: '4th-order zero-phase Butterworth bandpass (0.01–20 Hz), Welch PSD, and Isolation Forest scoring.',
      icon: Activity
    },
    {
      num: '06',
      title: 'Desktop Telemetry App',
      sub: 'Operator Console',
      desc: '60 FPS real-time oscilloscope trace, live dynamic FFT waterfall spectrogram, and SQLite ring buffer.',
      icon: Layers
    }
  ];

  const busProtocols = [
    {
      channel: 'Pneumatic Primary',
      type: 'Differential Pressure Port A',
      speed: 'Acoustic Speed of Sound',
      range: '±500 Pa Dynamic Range',
      role: 'Direct coupling to spatial wind-noise averaging inlet'
    },
    {
      channel: 'Pneumatic Reference',
      type: 'Capillary Leak to Port B',
      speed: 'τ > 60 s (Acoustic Low-Pass)',
      range: 'Diurnal Barometric Baseline',
      role: 'Equalizes ambient weather changes; rejects 0.01–20 Hz infrasound'
    },
    {
      channel: 'Digital Sensor Bus',
      type: 'Hardware I²C (SDA / SCL)',
      speed: '100 kHz standard / 400 kHz fast',
      range: '3.3V LVTTL Logic',
      role: 'Pre-calibrated 14/16-bit counts direct from DLVR-F50D on-chip ADC'
    },
    {
      channel: 'Thermal Monitoring',
      type: 'Shared I²C Bus (0x18)',
      speed: 'Periodic 1 Hz Readout',
      range: '±0.25°C High Accuracy',
      role: 'MCP9808 monitoring chamber thermal equilibrium and baseline drift'
    },
    {
      channel: 'Edge Telemetry Link',
      type: 'Framed USB / Gigabit LAN / TCP',
      speed: '100 packets/sec continuous',
      range: 'High-Throughput Socket',
      role: 'Streams filtered time-domain, PSD frames, and anomaly flags to GUI'
    }
  ];

  return (
    <main className="flex-1 min-w-0 overflow-y-auto p-4 sm:p-6 md:p-10 relative">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/02-system-architecture/system-overview" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">System Architecture</Link>
          <span>/</span>
          <span className="font-semibold text-gray-900 dark:text-gray-200">Technical Architecture &amp; Methodology</span>
        </nav>

        {/* Hero Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
            <Layers className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            Three-Zone Scientific Architecture
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Technical Architecture &amp; Methodology
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
            The InfraSocket architecture partitions the physical and digital domains into three well-defined operational zones: the primary direct-digital sensing pipeline, supporting low-noise power and thermal isolation, and the laboratory characterization test bench.
          </p>
        </div>

        {/* Zone Selector Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-gray-200 dark:border-gray-800">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              Operational Zone Breakdown
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-0.5">
              Select an operational zone to focus on its subsystems and signal pathways
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 self-start sm:self-auto">
            <button
              onClick={() => setActiveZone('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeZone === 'all'
                  ? 'bg-white dark:bg-gray-800 text-sky-600 dark:text-sky-400 shadow-xs'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              All 3 Zones
            </button>
            <button
              onClick={() => setActiveZone('zone1')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeZone === 'zone1'
                  ? 'bg-white dark:bg-gray-800 text-sky-600 dark:text-sky-400 shadow-xs'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Zone 1: Sensing
            </button>
            <button
              onClick={() => setActiveZone('zone2')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeZone === 'zone2'
                  ? 'bg-white dark:bg-gray-800 text-sky-600 dark:text-sky-400 shadow-xs'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Zone 2: Subsystems
            </button>
            <button
              onClick={() => setActiveZone('zone3')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeZone === 'zone3'
                  ? 'bg-white dark:bg-gray-800 text-sky-600 dark:text-sky-400 shadow-xs'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Zone 3: Calibration
            </button>
          </div>
        </div>

        {/* ZONE 1: PRIMARY SENSING AND ACQUISITION */}
        {(activeZone === 'all' || activeZone === 'zone1') && (
          <section className="space-y-6">
            <div className="bg-white dark:bg-gray-800/80 rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700/80 shadow-xs space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-gray-100 dark:border-gray-700/60">
                <div className="flex items-center gap-2.5">
                  <span className="px-3 py-1 rounded-xl bg-sky-600 text-white font-bold text-xs uppercase tracking-wider">
                    ZONE 1
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Main Sensing and Acquisition Architecture
                  </h3>
                </div>
                <span className="text-xs font-semibold text-sky-600 dark:text-sky-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Direct Digital Differential Signal Path
                </span>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Zone 1 manages the complete physical-to-digital signal chain. Atmospheric micro-pressure variations are captured by a spatial wind-noise averaging inlet, converted into calibrated 14/16-bit digital values via the Amphenol DLVR sensor, polled at 100 Hz by the Raspberry Pi 5 edge processor, filtered, and streamed to the desktop operator application.
              </p>

              {/* 6 Steps Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {zone1Steps.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50 dark:bg-gray-900/60 border border-slate-200 dark:border-gray-700/80 flex flex-col justify-between space-y-3"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="w-6 h-6 rounded-lg bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 text-xs font-bold flex items-center justify-center">
                            {step.num}
                          </span>
                          <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-sky-600 dark:text-sky-400">
                            {step.sub}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                          <h4 className="text-sm font-bold text-gray-900 dark:text-white">
                            {step.title}
                          </h4>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Pneumatic Inset Callout */}
              <div className="p-5 rounded-xl bg-sky-50/70 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-800 dark:text-sky-300 block">
                  Pneumatic Configuration Detail
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                    <span className="text-xs font-bold text-sky-700 dark:text-sky-400 block mb-1">
                      Direct Pressure Path → Port A
                    </span>
                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                      External atmospheric inlet connected directly to <strong>Port A</strong> of the Amphenol DLVR-F50D transducer for instantaneous dynamic pressure response.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                    <span className="text-xs font-bold text-sky-700 dark:text-sky-400 block mb-1">
                      Restricted Reference Path → Port B
                    </span>
                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                      Inlet connects via <strong>Controlled Restriction (Capillary/Needle Valve)</strong> into a rigid <strong>Reference Chamber</strong>, feeding <strong>Port B</strong> for slow barometric baseline equalization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ZONE 2: SUPPORTING SUBSYSTEMS */}
        {(activeZone === 'all' || activeZone === 'zone2') && (
          <section className="space-y-6">
            <div className="bg-white dark:bg-gray-800/80 rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700/80 shadow-xs space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-gray-100 dark:border-gray-700/60">
                <div className="flex items-center gap-2.5">
                  <span className="px-3 py-1 rounded-xl bg-amber-600 text-white font-bold text-xs uppercase tracking-wider">
                    ZONE 2
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Supporting Subsystems: Power &amp; Thermal
                  </h3>
                </div>
                <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-amber-500" />
                  Isolation &amp; Low-Noise Engineering
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Power */}
                <div className="p-5 rounded-xl bg-slate-50 dark:bg-gray-900/60 border border-slate-200 dark:border-gray-700/80 space-y-3">
                  <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 font-bold text-sm">
                    <BatteryCharging className="w-5 h-5 text-emerald-500" />
                    A. Clean DC Power Delivery
                  </div>
                  <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-2">
                    <li className="flex items-start gap-1.5">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span><strong>12V LiFePO4 Battery:</strong> Eliminates AC 50/60 Hz ground loops</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span><strong>Dual Rails:</strong> 5.1V / 5A for SBC + ultra-low-noise 3.3V for sensor</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span><strong>Input Protection:</strong> Reverse polarity diode + TVS surge clamp</span>
                    </li>
                  </ul>
                </div>

                {/* Temperature */}
                <div className="p-5 rounded-xl bg-slate-50 dark:bg-gray-900/60 border border-slate-200 dark:border-gray-700/80 space-y-3">
                  <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 font-bold text-sm">
                    <Thermometer className="w-5 h-5 text-sky-500" />
                    B. Thermal Monitoring
                  </div>
                  <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-2">
                    <li className="flex items-start gap-1.5">
                      <span className="text-sky-500 font-bold">•</span>
                      <span><strong>MCP9808 Digital Sensor:</strong> ±0.25°C typical accuracy</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-sky-500 font-bold">•</span>
                      <span><strong>Chamber Tracking:</strong> Continuously logs thermal equilibrium</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-sky-500 font-bold">•</span>
                      <span><strong>Drift Characterization:</strong> Disentangles thermal drift from pressure</span>
                    </li>
                  </ul>
                </div>

                {/* Thermal Management */}
                <div className="p-5 rounded-xl bg-slate-50 dark:bg-gray-900/60 border border-slate-200 dark:border-gray-700/80 space-y-3">
                  <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 font-bold text-sm">
                    <Fan className="w-5 h-5 text-amber-500" />
                    C. Zero-Fan Silence Policy
                  </div>
                  <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-2">
                    <li className="flex items-start gap-1.5">
                      <span className="text-amber-500 font-bold">•</span>
                      <span><strong>Zero Cooling Fans:</strong> Prevents 1–20 Hz blade vortex acoustic noise</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-amber-500 font-bold">•</span>
                      <span><strong>Passive Heatsinks:</strong> Natural convection channels for Raspberry Pi</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-amber-500 font-bold">•</span>
                      <span><strong>Thermal Barrier:</strong> Sensor and chamber physically isolated from SBC</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ZONE 3: LABORATORY CHARACTERIZATION */}
        {(activeZone === 'all' || activeZone === 'zone3') && (
          <section className="space-y-6">
            <div className="bg-white dark:bg-gray-800/80 rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700/80 shadow-xs space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-gray-100 dark:border-gray-700/60">
                <div className="flex items-center gap-2.5">
                  <span className="px-3 py-1 rounded-xl bg-teal-600 text-white font-bold text-xs uppercase tracking-wider">
                    ZONE 3
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Laboratory Characterization Test Bench
                  </h3>
                </div>
                <span className="text-xs font-semibold text-teal-600 dark:text-teal-400 flex items-center gap-1.5">
                  <FlaskConical className="w-4 h-4 text-teal-500" />
                  Controlled Pressure &amp; Dynamic Sweeps
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-gray-900/60 border border-slate-200 dark:border-gray-700/80 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                <strong>Calibration Rig Configuration:</strong> A sealed dynamic acoustic test chamber couples a calibrated acoustic actuator with a high-precision reference manometer. Known sinusoidal excitation frequencies (0.01 – 20 Hz) verify transfer function magnitude, phase lag, and minimum resolvable sensitivity.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-gray-900/60 border border-slate-200 dark:border-gray-700/80 space-y-1.5">
                  <span className="text-xs font-bold text-sky-600 dark:text-sky-400 block">
                    Frequency Response
                  </span>
                  <p className="text-xs text-gray-600 dark:text-gray-300">
                    Magnitude and phase transfer function measured versus frequency across 0.01–20 Hz.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-gray-900/60 border border-slate-200 dark:border-gray-700/80 space-y-1.5">
                  <span className="text-xs font-bold text-sky-600 dark:text-sky-400 block">
                    Pressure Sensitivity
                  </span>
                  <p className="text-xs text-gray-600 dark:text-gray-300">
                    Known pressure steps and sinusoidal inputs versus raw digital sensor output counts.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-gray-900/60 border border-slate-200 dark:border-gray-700/80 space-y-1.5">
                  <span className="text-xs font-bold text-sky-600 dark:text-sky-400 block">
                    Noise Spectral Density
                  </span>
                  <p className="text-xs text-gray-600 dark:text-gray-300">
                    Power spectra (PSD) baseline, 1/f noise floor estimation, and band-limited RMS noise.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-gray-900/60 border border-slate-200 dark:border-gray-700/80 space-y-1.5">
                  <span className="text-xs font-bold text-sky-600 dark:text-sky-400 block">
                    Stability &amp; Drift
                  </span>
                  <p className="text-xs text-gray-600 dark:text-gray-300">
                    Multi-hour repeatability, temperature dependence, and cumulative baseline drift over time.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Unified End-to-End System Signal Flowchart */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-sky-600 dark:text-sky-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              System Signal Flowchart
            </h2>
          </div>

          <div className="bg-white dark:bg-gray-800/80 rounded-2xl p-6 border border-gray-200 dark:border-gray-700/80 shadow-xs overflow-x-auto">
            <pre><code className="language-mermaid">{`flowchart LR
    A["Atmospheric Pressure<br/>0.01-20 Hz"] --> B["Wind-Noise Manifold<br/>Spatial Averaging"]
    B -->|Port A Atmosphere| C["DLVR-F50D Sensor"]
    B -->|Port B Capillary| D["Reference Chamber<br/>Controlled Restriction"]
    D -->|Port B Reference| C
    C -->|I2C Digital Stream| E["Raspberry Pi 5<br/>Sample Timing and DSP"]
    E -->|USB / Network Stream| F["Desktop Telemetry App<br/>PyQtGraph 60 FPS"]`}</code></pre>
          </div>
        </section>

        {/* Bus & Interface Protocol Specification */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-sky-600 dark:text-sky-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              Interface &amp; Protocol Specifications
            </h2>
          </div>

          <div className="bg-white dark:bg-gray-800/80 rounded-2xl border border-gray-200 dark:border-gray-700/80 shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-900/60 border-b border-gray-200 dark:border-gray-700 text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    <th className="py-3.5 px-6">Signal Path / Bus</th>
                    <th className="py-3.5 px-6">Physical Medium</th>
                    <th className="py-3.5 px-6">Frequency / Timing</th>
                    <th className="py-3.5 px-6">Engineering Role</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700/60">
                  {busProtocols.map((p, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors">
                      <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white whitespace-nowrap">
                        {p.channel}
                      </td>
                      <td className="py-4 px-6 text-xs text-sky-700 dark:text-sky-300 font-mono">
                        {p.type}
                      </td>
                      <td className="py-4 px-6 text-xs text-gray-600 dark:text-gray-300 whitespace-nowrap">
                        {p.speed}
                      </td>
                      <td className="py-4 px-6 text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                        {p.role}
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
            to="/02-system-architecture/hardware-architecture"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm shadow-sm transition-colors"
          >
            Next: Hardware Architecture
            <ArrowRight className="w-4 h-4" />
          </Link>
          <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
            <span>InfraSocket Documentation</span>
            <span>•</span>
            <Link to="/01-overview/technology-stack" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
              Technology Stack
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}