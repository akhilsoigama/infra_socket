import { Link } from 'react-router-dom';
import {
  Layers,
  Cpu,
  Activity,
  LayoutDashboard,
  ArrowRight
} from 'lucide-react';

export default function Page02SystemArchitectureSystemOverview() {
  const systemLayers = [
    {
      num: '01',
      title: 'Physical Interface & Pneumatic Assembly',
      icon: Layers,
      items: [
        '4-port spatial averaging manifold for wind-noise attenuation',
        'Thermally isolated pneumatic reference chamber',
        'Calibrated capillary leak resistor for slow barometric diurnal equalization'
      ],
      desc: 'Samples ambient atmosphere while filtering uncorrelated local wind turbulence and maintaining a stable differential pneumatic reference.'
    },
    {
      num: '02',
      title: 'Direct Digital Differential Sensing (I²C)',
      icon: Cpu,
      items: [
        'Amphenol DLVR-F50D digital differential MEMS sensor (±500 Pa)',
        'On-die piezoresistive element with internal calibrated ΔΣ ADC',
        'MCP9808 high-accuracy digital I²C temperature monitor (±0.25°C)',
        '3.3V regulated bus communicating directly to Raspberry Pi 5 GPIO'
      ],
      desc: 'Eliminates external instrumentation amplifiers (INAs) and discrete ADC chips by delivering pre-calibrated, high-resolution digital pressure samples directly over I²C.'
    },
    {
      num: '03',
      title: 'Edge Acquisition & Real-Time DSP',
      icon: Activity,
      items: [
        '100 Hz continuous hardware I²C sample loop on Raspberry Pi 5',
        'DC offset removal and zero-point baseline tracking',
        '4th-order Butterworth band-pass filter (0.01 – 20.0 Hz)',
        'Fast Fourier Transform (FFT) and Welch Power Spectral Density (PSD)',
        'Unsupervised Isolation Forest anomaly screening'
      ],
      desc: 'Executes deterministic digital filtering and mathematical spectral transformations on the edge computer, generating clean time-frequency streams.'
    },
    {
      num: '04',
      title: 'Telemetry, Storage & Desktop Console',
      icon: LayoutDashboard,
      items: [
        'High-performance PyQtGraph desktop application at 60 FPS',
        'Real-time pressure waveform, spectrum, and STFT waterfall display',
        'Local microSD continuous ring buffer storage (SQLite / CSV)',
        'Visual threshold anomaly indicator and event logs'
      ],
      desc: 'Renders high-fidelity scientific visualizations for the operator and archives timestamped research data for post-processing.'
    }
  ];

  const designPrinciples = [
    { principle: 'Direct Digital Architecture', desc: 'Sensing die with on-chip ADC communicates over digital I²C, avoiding analog trace noise coupling.' },
    { principle: 'Edge Autonomy', desc: 'Raspberry Pi 5 runs acquisition and filtering locally; telemetry continues even if external network drops.' },
    { principle: 'Acoustic Cleanliness', desc: 'Zero mechanical cooling fans in the sensor node to eliminate blade vortex acoustic noise in the infrasound band.' },
    { principle: 'Transparent Data Integrity', desc: 'Raw uncalibrated sensor counts are permanently archived alongside filtered waveforms and temperature logs.' }
  ];

  return (
    <main className="flex-1 min-w-0 overflow-y-auto p-4 sm:p-6 md:p-10 relative">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/02-system-architecture/architecture" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">System Architecture</Link>
          <span>/</span>
          <span className="font-semibold text-gray-900 dark:text-gray-200">System Overview</span>
        </nav>

        {/* Hero Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
            <Layers className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            End-to-End Architectural Decomposition
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            System Architecture Overview
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
            InfraSocket is organized into four clean, decoupled operational layers spanning physical pneumatics, direct digital I²C transducer readout, edge DSP filtering, and desktop scientific telemetry.
          </p>
        </div>

        {/* 4-Layer Architecture Diagram */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            4-Tier Layered Architecture
          </h2>

          <div className="bg-white dark:bg-gray-800/80 rounded-2xl p-6 border border-gray-200 dark:border-gray-700/80 shadow-sm overflow-x-auto">
            <pre><code className="language-mermaid">{`flowchart TD
    subgraph L1["Layer 1: Physical Sensing and Pneumatics"]
        WNR["4-Port Spatial Averaging Manifold"] --> SENS["Amphenol DLVR-F50D Sensor"]
        REF["Thermally Insulated Reference Chamber"] -->|Capillary Leak| SENS
    end

    subgraph L2["Layer 2: Direct Digital Sensor Bus - I2C"]
        SENS -->|Digital Pressure Data| I2C_BUS["Hardware I2C Bus - 3.3V"]
        TEMP["MCP9808 Digital Temperature"] -->|Temperature Telemetry| I2C_BUS
    end

    subgraph L3["Layer 3: Edge Processing and DSP - Raspberry Pi 5"]
        I2C_BUS --> DAQ["100 Hz Acquisition Loop"]
        DAQ --> DSP["Butterworth Bandpass 0.01-20 Hz and Welch PSD"]
        DSP --> ML["Unsupervised Isolation Forest Anomaly Scoring"]
        DAQ --> RING["Local microSD Ring Buffer - SQLite / CSV"]
    end

    subgraph L4["Layer 4: Telemetry and Desktop GUI"]
        DSP -->|USB / LAN Telemetry| GUI["InfraSocket Desktop Console - PyQtGraph"]
        ML -->|Anomaly Scores| GUI
        GUI --> PLOTS["60 FPS Waveform + Live PSD + Spectrogram"]
    end`}</code></pre>
          </div>
        </section>

        {/* 4 Detailed Layers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {systemLayers.map((layer, idx) => {
            const Icon = layer.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800/80 rounded-2xl p-6 border border-gray-200 dark:border-gray-700/80 shadow-sm space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-sky-100 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 flex items-center justify-center text-sky-600 dark:text-sky-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-gray-900 dark:text-white">
                        {layer.title}
                      </h3>
                    </div>
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                      Layer {layer.num}
                    </span>
                  </div>

                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                    {layer.desc}
                  </p>

                  <ul className="space-y-1.5 pt-2 border-t border-gray-100 dark:border-gray-700/60">
                    {layer.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300">
                        <span className="text-sky-500 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Architectural Principles Table */}
        <section className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            Engineering Design Principles
          </h2>

          <div className="bg-white dark:bg-gray-800/80 rounded-2xl border border-gray-200 dark:border-gray-700/80 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-900/60 border-b border-gray-200 dark:border-gray-700 text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    <th className="py-3.5 px-6">Architectural Principle</th>
                    <th className="py-3.5 px-6">Engineering Rationale &amp; Implementation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700/60">
                  {designPrinciples.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors">
                      <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white whitespace-nowrap">
                        {row.principle}
                      </td>
                      <td className="py-4 px-6 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        {row.desc}
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
            to="/02-system-architecture/component-interaction"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm shadow-sm transition-colors"
          >
            Next: Component Interaction
            <ArrowRight className="w-4 h-4" />
          </Link>
          <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
            <span>InfraSocket Documentation</span>
            <span>•</span>
            <Link to="/02-system-architecture/hardware-architecture" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
              Hardware Architecture
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}