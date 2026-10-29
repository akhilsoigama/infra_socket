import { Link } from 'react-router-dom';
import {
  Clock,
  ArrowRight
} from 'lucide-react';

export default function Page02SystemArchitectureTimeSynchronization() {
  const syncMethods = [
    {
      level: 'Edge Hardware Timestamping',
      accuracy: '±10 microseconds',
      status: 'Implemented in Prototype',
      desc: 'Samples are tagged with monotonic POSIX microsecond timestamps immediately upon reading the 14/16-bit digital pressure bytes from the I²C bus register, preventing downstream OS scheduling jitter.'
    },
    {
      level: 'Network Time Protocol (NTP / Chrony)',
      accuracy: '±1–5 milliseconds',
      status: 'Baseline Network Mode',
      desc: 'The Raspberry Pi 5 runs a local Chrony NTP client disciplined by university/local stratum-1 time servers over Ethernet or Wi-Fi to keep system clock aligned with UTC.'
    },
    {
      level: 'Hardware RTC Backup (DS3231)',
      accuracy: '±2 ppm (~1 min/year)',
      status: 'Offline Resilience',
      desc: 'A battery-backed temperature-compensated real-time clock ensures correct timestamping and cold boot recovery when operating autonomously in remote field locations without network connectivity.'
    },
    {
      level: 'GNSS PPS Disciplining',
      accuracy: '< 1 microsecond',
      status: 'Phase 3 Multi-Node Array',
      desc: 'Dedicated GPS/GNSS receiver providing a hardware Pulse-Per-Second (PPS) interrupt into Raspberry Pi 5 GPIO, enabling sub-microsecond phase alignment required for tripartite array cross-correlation (PMCC).'
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
          <span className="font-semibold text-gray-900 dark:text-gray-200">Time Synchronization</span>
        </nav>

        {/* Hero Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
            <Clock className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            Temporal Fidelity &amp; Phase Alignment
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Time Synchronization &amp; Timestamping
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
            Precise temporal stamping is critical for sub-audible acoustic wave analysis. Timestamping occurs directly at the edge controller during I²C frame ingestion, preventing packet-transmission delays from corrupting spectral phase relationships.
          </p>
        </div>

        {/* Timestamping Pipeline */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            Edge Timestamping Architecture
          </h2>

          <div className="bg-white dark:bg-gray-800/80 rounded-2xl p-6 border border-gray-200 dark:border-gray-700/80 shadow-sm overflow-x-auto">
            <pre><code className="language-mermaid">flowchart LR{"\n"}{"    "}DLVR["Amphenol DLVR Sensor\n(Continuous Pressure)"] --&gt;|I2C Bus Polling| RPI["Raspberry Pi 5\n(CLOCK_MONOTONIC_RAW)"]{"\n"}{"    "}RTC["Hardware RTC / Chrony NTP"] --&gt;|UTC Alignment| RPI{"\n"}{"    "}RPI --&gt;|Framed Sample: timestamp_utc, raw_counts, temp| SD["Local Storage\nand Real-Time Telemetry"]{"\n"}</code></pre>
          </div>
        </section>

        {/* 4 Synchronization Methods Grid */}
        <section className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            Synchronization Hierarchy
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {syncMethods.map((m, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800/80 rounded-2xl p-6 border border-gray-200 dark:border-gray-700/80 shadow-sm space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-gray-900 dark:text-white">
                      {m.level}
                    </h3>
                    <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                      {m.accuracy}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {m.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 dark:border-gray-700/60 text-xs">
                  <span className="font-semibold text-gray-700 dark:text-gray-300">Readiness: </span>
                  <span className="text-sky-600 dark:text-sky-400 font-medium">{m.status}</span>
                </div>
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
            <Link to="/02-system-architecture/deployment-architecture" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
              Deployment Architecture
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}