import { Link } from 'react-router-dom';
import {
  GitCommit,
  ArrowRight
} from 'lucide-react';

export default function Page02SystemArchitectureComponentInteraction() {
  const interfaces = [
    {
      source: 'Amphenol DLVR-F50D',
      target: 'Raspberry Pi 5 (GPIO)',
      protocol: 'I²C Bus (SDA / SCL @ 3.3V)',
      rate: '100 Hz Continuous Readout',
      desc: 'Transfers 14/16-bit calibrated digital pressure counts directly from the sensor on-die ASIC into the edge controller memory buffer.'
    },
    {
      source: 'MCP9808 Temperature',
      target: 'Raspberry Pi 5 (GPIO)',
      protocol: 'I²C Shared Bus (Addr 0x18)',
      rate: '1 Hz Periodic Polling',
      desc: 'Transfers high-precision (±0.25°C) reference chamber temperature for baseline thermal drift compensation.'
    },
    {
      source: 'Raspberry Pi 5 DAQ',
      target: 'Local microSD Card',
      protocol: 'Linux Block I/O (ext4 / SQLite)',
      rate: 'Continuous Ring Buffer',
      desc: 'Stores raw timestamped pressure and temperature time-series records to prevent data loss during network dropouts.'
    },
    {
      source: 'Python DSP Pipeline',
      target: 'Isolation Forest ML',
      protocol: 'In-Memory NumPy Feature Vector',
      rate: 'Sliding Analysis Window (10–30s)',
      desc: 'Passes extracted RMS amplitude, spectral energy, peak frequency, and centroid vectors to the unsupervised anomaly detector.'
    },
    {
      source: 'Raspberry Pi 5 Edge',
      target: 'InfraSocket Desktop Console',
      protocol: 'USB Serial (UART) / WebSocket',
      rate: '60 FPS Stream (100 Hz Raw + FFT)',
      desc: 'Streams filtered waveforms, power spectral density (PSD), and anomaly event alerts to the PyQtGraph visualization console.'
    }
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
          <span className="font-semibold text-gray-900 dark:text-gray-200">Component Interaction</span>
        </nav>

        {/* Hero Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
            <GitCommit className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            Inter-Module Communication Protocols
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Component Interaction &amp; Telemetry Sequence
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
            Detailed sequence of inter-subsystem data exchanges, from pneumatic pressure arrival and direct I²C sensor bus readout to edge signal processing and desktop operator display.
          </p>
        </div>

        {/* Sequence Diagram */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            End-to-End Interaction Sequence
          </h2>

          <div className="bg-white dark:bg-gray-800/80 rounded-2xl p-6 border border-gray-200 dark:border-gray-700/80 shadow-sm overflow-x-auto">
            <pre><code className="language-mermaid">sequenceDiagram{"\n"}{"    "}participant ATM as Atmosphere (0.01–20 Hz){"\n"}{"    "}participant WNR as 4-Port Manifold{"\n"}{"    "}participant DLVR as DLVR-F50D Sensor (I²C){"\n"}{"    "}participant MCP as MCP9808 Temp (I²C){"\n"}{"    "}participant RPI as Raspberry Pi 5 (Edge SBC){"\n"}{"    "}participant SD as microSD (Ring Buffer){"\n"}{"    "}participant DSP as Python DSP &amp; AI{"\n"}{"    "}participant GUI as Desktop GUI (PyQtGraph){"\n"}{"\n"}{"    "}ATM-&gt;&gt;WNR: Atmospheric pressure fluctuation arrives{"\n"}{"    "}WNR-&gt;&gt;DLVR: Spatially averaged differential pressure{"\n"}{"    "}Note over DLVR: Internal Silicon Diaphragm + On-Die ASIC ADC{"\n"}{"    "}loop Every 10 ms (100 Hz Continuous Loop){"\n"}{"        "}RPI-&gt;&gt;DLVR: I²C Read Command (SDA/SCL){"\n"}{"        "}DLVR--&gt;&gt;RPI: 14/16-bit Calibrated Digital Pressure Counts{"\n"}{"        "}RPI-&gt;&gt;SD: Append raw record (timestamp, raw_counts){"\n"}{"        "}RPI-&gt;&gt;DSP: Push sample to DSP circular buffer{"\n"}{"    "}end{"\n"}{"\n"}{"    "}loop Every 1 Second{"\n"}{"        "}RPI-&gt;&gt;MCP: I²C Read Temperature{"\n"}{"        "}MCP--&gt;&gt;RPI: Temperature (°C, ±0.25°C precision){"\n"}{"        "}RPI-&gt;&gt;SD: Log thermal reference{"\n"}{"    "}end{"\n"}{"\n"}{"    "}loop Every Sliding Window (e.g. 10–30s){"\n"}{"        "}DSP-&gt;&gt;DSP: Detrend + 4th-order Butterworth (0.01–20 Hz){"\n"}{"        "}DSP-&gt;&gt;DSP: Compute FFT + Welch PSD + STFT Spectrogram{"\n"}{"        "}DSP-&gt;&gt;DSP: Extract feature vector &amp; Isolation Forest inference{"\n"}{"        "}DSP-&gt;&gt;GUI: Stream filtered waveform + PSD + anomaly score (60 FPS){"\n"}{"    "}end{"\n"}</code></pre>
          </div>
        </section>

        {/* Inter-Component Interface Matrix */}
        <section className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            Subsystem Interconnect Specifications
          </h2>

          <div className="bg-white dark:bg-gray-800/80 rounded-2xl border border-gray-200 dark:border-gray-700/80 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-900/60 border-b border-gray-200 dark:border-gray-700 text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    <th className="py-3.5 px-6">Source Module</th>
                    <th className="py-3.5 px-6">Target Module</th>
                    <th className="py-3.5 px-6">Physical Protocol</th>
                    <th className="py-3.5 px-6">Sampling Cadence</th>
                    <th className="py-3.5 px-6">Functional Payload</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700/60 text-xs sm:text-sm">
                  {interfaces.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors">
                      <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                        {row.source}
                      </td>
                      <td className="py-4 px-6 text-gray-700 dark:text-gray-300">
                        {row.target}
                      </td>
                      <td className="py-4 px-6 font-mono text-sky-700 dark:text-sky-300">
                        {row.protocol}
                      </td>
                      <td className="py-4 px-6 font-mono text-emerald-700 dark:text-emerald-400">
                        {row.rate}
                      </td>
                      <td className="py-4 px-6 text-xs text-gray-600 dark:text-gray-300 max-w-xs">
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
            to="/02-system-architecture/data-flow"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm shadow-sm transition-colors"
          >
            Next: Data Flow
            <ArrowRight className="w-4 h-4" />
          </Link>
          <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
            <span>InfraSocket Documentation</span>
            <span>•</span>
            <Link to="/02-system-architecture/system-overview" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
              System Overview
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}