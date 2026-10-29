import { Link } from 'react-router-dom';
import {
  Activity,
  ArrowRight
} from 'lucide-react';

export default function Page02SystemArchitectureDataFlow() {
  const dataStages = [
    { stage: 'Pneumatic Input', domain: 'Physical Pressure', representation: 'Pascals (±500 Pa)', rate: 'Continuous Acoustic Wave' },
    { stage: 'DLVR Transducer', domain: 'Silicon MEMS + On-Die ASIC', representation: '14/16-bit Integer Digital Words', rate: 'On-Demand I²C Readout' },
    { stage: 'Edge Ingestion', domain: 'Raspberry Pi 5 Linux Kernel', representation: 'Hardware Timestamps + Raw Counts', rate: '100 Hz Continuous (10 ms period)' },
    { stage: 'Local Resilience', domain: 'microSD Ring Buffer (SQLite)', representation: 'Binary Raw Structs / Time-Series', rate: 'Continuous Append (Zero Loss)' },
    { stage: 'Signal Conditioning', domain: 'NumPy / SciPy DSP', representation: 'Float64 Zero-Mean Filtered Array', rate: 'Real-Time Sliding Windows' },
    { stage: 'Spectral Transformation', domain: 'FFT & Welch PSD', representation: 'Power Spectrum (0.01 – 20 Hz)', rate: '0.1 Hz Frequency Bins' },
    { stage: 'Anomaly Inference', domain: 'Isolation Forest Model', representation: 'Normalized Anomaly Score (0.0–1.0)', rate: 'Every Analysis Window' },
    { stage: 'Desktop Telemetry', domain: 'PyQtGraph Visualizer', representation: '60 FPS Live Waveform & Waterfall', rate: 'Sub-50ms Latency' }
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
          <span className="font-semibold text-gray-900 dark:text-gray-200">Data Flow</span>
        </nav>

        {/* Hero Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
            <Activity className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            End-to-End Data Transformation Pipeline
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Signal &amp; Telemetry Data Flow
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
            From atmospheric acoustic pressure waves to calibrated digital telemetry. Because the Amphenol DLVR sensor performs internal A/D conversion on-die, raw digital counts enter the processing pipeline directly via I²C with zero intermediary analog degradation.
          </p>
        </div>

        {/* Data Flow Diagram */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            Digital Transformation Pipeline Flowchart
          </h2>

          <div className="bg-white dark:bg-gray-800/80 rounded-2xl p-6 border border-gray-200 dark:border-gray-700/80 shadow-sm overflow-x-auto">
            <pre><code className="language-mermaid">flowchart TD{"\n"}{"    "}A["Atmospheric Pressure Wave\n(0.01 – 20 Hz)"] --&gt;|Spatial Averaging| B["4-Port Wind Manifold"]{"\n"}{"\n"}{"    "}B --&gt;|Differential Pneumatic Paths| C["Amphenol DLVR-F50D\nDigital MEMS Sensor"]{"\n"}{"    "}REF["Reference Chamber\n(Capillary Leak)"] --&gt;|Port B Restriction| C{"\n"}{"\n"}{"    "}C --&gt;|"Digital Pressure (I²C Bus @ 100 Hz)\n14/16-bit Integer Words"| D["Raspberry Pi 5\nEdge DAQ Service"]{"\n"}{"    "}TEMP["MCP9808 Digital Temp (I²C)"] --&gt;|Reference Temp| D{"\n"}{"\n"}{"    "}D --&gt;|Raw Timestamped Records| E["Local microSD\nRing Buffer (SQLite)"]{"\n"}{"    "}D --&gt;|Digital Count Stream| F["DC Baseline Detrending\n&amp; Polynomial Drift Offset"]{"\n"}{"\n"}{"    "}F --&gt;|Zero-Mean Pressure Signal| G["4th-Order Butterworth\nBandpass Filter (0.01–20 Hz)"]{"\n"}{"\n"}{"    "}G --&gt;|Filtered Time-Series| H["Sliding Window Buffer\n(e.g. 10–30s)"]{"\n"}{"\n"}{"    "}H --&gt;|Windowed Frames| I["Fast Fourier Transform\n(FFT &amp; Welch PSD)"]{"\n"}{"    "}H --&gt;|Statistical Extraction| J["Feature Vector Extraction\n(RMS, Centroid, Energy, Peak)"]{"\n"}{"\n"}{"    "}I --&gt;|Spectral Density Array| K["STFT Waterfall Spectrogram"]{"\n"}{"    "}J --&gt;|Normalized Vector| L["Isolation Forest\nAnomaly Scoring Engine"]{"\n"}{"\n"}{"    "}L --&gt;|Score &gt; Threshold?| M{"Alert Decision"}{"\n"}{"    "}M --&gt;|Yes| N["Trigger Anomaly Flag"]{"\n"}{"    "}M --&gt;|No| O["Baseline Normal"]{"\n"}{"\n"}{"    "}G &amp; I &amp; K &amp; N --&gt;|USB / LAN Protocol| P["InfraSocket Desktop Console\n(PyQtGraph 60 FPS Visualizer)"]{"\n"}</code></pre>
          </div>
        </section>

        {/* Data Stages Table */}
        <section className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            Data Representation by Pipeline Stage
          </h2>

          <div className="bg-white dark:bg-gray-800/80 rounded-2xl border border-gray-200 dark:border-gray-700/80 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-900/60 border-b border-gray-200 dark:border-gray-700 text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    <th className="py-3.5 px-6">Pipeline Stage</th>
                    <th className="py-3.5 px-6">Physical / Computing Domain</th>
                    <th className="py-3.5 px-6">Data Format</th>
                    <th className="py-3.5 px-6">Throughput / Cadence</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700/60 text-xs sm:text-sm">
                  {dataStages.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors">
                      <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                        {row.stage}
                      </td>
                      <td className="py-4 px-6 text-gray-600 dark:text-gray-300">
                        {row.domain}
                      </td>
                      <td className="py-4 px-6 font-mono text-sky-700 dark:text-sky-300">
                        {row.representation}
                      </td>
                      <td className="py-4 px-6 font-mono text-emerald-700 dark:text-emerald-400">
                        {row.rate}
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
            to="/02-system-architecture/software-architecture"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm shadow-sm transition-colors"
          >
            Next: Software Architecture
            <ArrowRight className="w-4 h-4" />
          </Link>
          <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
            <span>InfraSocket Documentation</span>
            <span>•</span>
            <Link to="/02-system-architecture/component-interaction" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
              Component Interaction
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}