import { Link } from 'react-router-dom';
import {
  HardDrive,
  Wifi,
  Server,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers
} from 'lucide-react';

export default function Page14SensorConnectionSensorConnection() {
  const storageEstimates = [
    { format: '32-bit Float (4 bytes/sample)', rate: '400 B/s', daily: '34.6 MB', monthly: '1.04 GB', yearly: '12.6 GB' },
    { format: '16-bit Integer (2 bytes/sample)', rate: '200 B/s', daily: '17.3 MB', monthly: '0.52 GB', yearly: '6.3 GB' }
  ];

  const packetFields = [
    { field: 'Timestamp', desc: 'UTC epoch in milliseconds (NTP or GPS disciplined)' },
    { field: 'Differential Pressure (Pa)', desc: 'Calibrated microbarometric pressure reading' },
    { field: 'Ambient Temperature (°C)', desc: 'Chamber / reference thermal logging via MCP9808' },
    { field: 'Node Identifier', desc: 'Hardware station identifier (e.g. INFRA-NODE-01)' },
    { field: 'Supply Voltage (V)', desc: '12V LiFePO4 battery pack level monitor' },
    { field: 'Health / Signal Quality', desc: 'I²C CRC check, clipping flag, buffer headroom' }
  ];

  return (
    <main className="flex-1 min-w-0 overflow-y-auto p-4 sm:p-6 md:p-10 relative">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/03-hardware/hardware-overview" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Hardware</Link>
          <span>/</span>
          <span className="font-semibold text-gray-900 dark:text-gray-200">Sensor Connection &amp; Storage</span>
        </nav>

        {/* Hero Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
            <Cpu className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            Edge Interface &amp; Telemetry Architecture
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Sensor Connection, Storage &amp; Network
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
            Data bandwidth calculations, local edge buffering, resilient store-and-forward telemetry, and central database ingestion for continuous 100 Hz microbarometric recording.
          </p>
        </div>

        {/* Bandwidth & Storage Calculations */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <HardDrive className="w-5 h-5 text-sky-600 dark:text-sky-400" />
              100 Hz Sampling Storage Calculations
            </h2>
            <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">Per Continuous Channel</span>
          </div>

          <div className="bg-white dark:bg-gray-800/80 rounded-2xl border border-gray-200 dark:border-gray-700/80 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-900/60 border-b border-gray-200 dark:border-gray-700 text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    <th className="py-3.5 px-6">Sample Representation</th>
                    <th className="py-3.5 px-6">Data Rate</th>
                    <th className="py-3.5 px-6">Daily Volume</th>
                    <th className="py-3.5 px-6">Monthly Volume</th>
                    <th className="py-3.5 px-6">Annual Volume</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700/60">
                  {storageEstimates.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors">
                      <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                        {row.format}
                      </td>
                      <td className="py-4 px-6 font-mono text-xs sm:text-sm text-sky-700 dark:text-sky-300 font-medium">
                        {row.rate}
                      </td>
                      <td className="py-4 px-6 font-mono text-xs text-gray-600 dark:text-gray-300">
                        {row.daily}
                      </td>
                      <td className="py-4 px-6 font-mono text-xs text-gray-600 dark:text-gray-300">
                        {row.monthly}
                      </td>
                      <td className="py-4 px-6 font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                        {row.yearly}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            * A standard 32 GB Class 10 microSD card provides over 2.5 to 5 years of continuous local time-series ring buffer storage without compression.
          </p>
        </section>

        {/* Resilient Store-and-Forward Architecture */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-sky-600 dark:text-sky-400" />
              Store-and-Forward Telemetry Architecture
            </h2>
            <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">Edge Buffering</span>
          </div>

          <div className="bg-white dark:bg-gray-800/80 rounded-2xl p-6 border border-gray-200 dark:border-gray-700/80 shadow-sm space-y-4">
            <pre><code className="language-mermaid">graph TD{"\n"}{"    "}Sensor["Pressure Sensor (Amphenol DLVR)"] --&gt;|I2C / SPI| RPi5["Raspberry Pi 5 (Edge SBC)"]{"\n"}{"    "}RPi5 --&gt;|Write Raw Stream| SD["Local microSD (Ring Buffer)"]{"\n"}{"    "}RPi5 --&gt;|WiFi / Ethernet| Server["Central Telemetry Server"]{"\n"}{"    "}Server --&gt; DB[("Time-Series DB / SQLite")]{"\n"}{"    "}Server --&gt; Dashboard["Real-Time Web / Desktop GUI"]{"\n"}</code></pre>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-gray-900/60 border border-slate-200 dark:border-gray-700 space-y-2">
                <h4 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  Network Outage Recovery
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                  If Wi-Fi drops, the local SBC continues uninterrupted 100 Hz logging to the internal SD card. Upon network restoration, an automatic handshake syncs missing timestamp blocks.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-gray-900/60 border border-slate-200 dark:border-gray-700 space-y-2">
                <h4 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <Server className="w-4 h-4 text-sky-500" />
                  Multi-Station Aggregation
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                  The central telemetry server aggregates streams from multiple distributed sensor nodes, enabling cross-station phase alignment and cross-correlation event verification.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Telemetry Packet Structure */}
        <section className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Wifi className="w-5 h-5 text-sky-600 dark:text-sky-400" />
            Standard Telemetry Payload Fields
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {packetFields.map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800/80 rounded-2xl p-5 border border-gray-200 dark:border-gray-700/80 shadow-sm space-y-2"
              >
                <div className="text-xs font-mono font-bold text-sky-700 dark:text-sky-300">
                  {item.field}
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-200 dark:border-gray-800">
          <Link
            to="/03-hardware/hardware-overview"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm shadow-sm transition-colors"
          >
            Hardware Overview
            <ArrowRight className="w-4 h-4" />
          </Link>
          <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
            <span>InfraSocket Documentation</span>
            <span>•</span>
            <Link to="/03-hardware/hardware-bom" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
              Hardware BOM
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}