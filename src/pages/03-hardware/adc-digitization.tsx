import { Link } from 'react-router-dom';
import {
  Cpu,
  CheckCircle2,
  ZapOff,
  ArrowRight
} from 'lucide-react';

export default function Page03HardwareAdcDigitization() {
  const comparison = [
    { factor: 'Signal Routing & Noise Coupling', discrete: 'Analog traces carry weak micro-volt signals across PCB; highly susceptible to RF, ground loops, and EMI.', integrated: 'Digitization occurs directly on-die inside the shielded DLVR sensor package; signals travel as robust digital I²C packets.', advantage: 'Integrated DLVR' },
    { factor: 'Gain Drift & Component Aging', discrete: 'External op-amp resistors and capacitors drift with ambient temperature, introducing offset errors.', integrated: 'On-chip laser-trimmed ASIC provides factory-calibrated temperature compensation across -25°C to 85°C.', advantage: 'Integrated DLVR' },
    { factor: 'Hardware BOM Complexity', discrete: 'Requires discrete INA op-amp, anti-aliasing passive filter network, and separate multi-channel ADC chip.', integrated: 'Single compact SMD sensor module directly connected to Raspberry Pi 5 via 4 wires (VCC, GND, SDA, SCL).', advantage: 'Integrated DLVR' },
    { factor: 'Effective Resolution', discrete: 'Typical 16-bit external ADC degraded by breadboard electrical noise to ~12-13 effective ENOB.', integrated: 'True 14/16-bit ΔΣ internal conversion providing sub-0.1 Pa pressure resolution across the ±500 Pa range.', advantage: 'Integrated DLVR' },
    { factor: 'Cost & Assembly Footprint', discrete: 'Higher component count, larger PCB area, and mandatory precision reference voltage regulator.', integrated: 'Low BOM cost, minimal assembly footprint, and powered directly from the system regulated 3.3V rail.', advantage: 'Integrated DLVR' }
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
          <span className="font-semibold text-gray-900 dark:text-gray-200">Integrated Digitization &amp; ADC</span>
        </nav>

        {/* Hero Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
            <Cpu className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            Transducer On-Die Digitization
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Integrated Digitization Architecture
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
            Why InfraSocket utilizes on-chip sensor digitization rather than a discrete external ADC module. The Amphenol DLVR-F50D incorporates a 14/16-bit Delta-Sigma converter directly on-die, eliminating analog noise coupling and simplifying the hardware architecture.
          </p>
        </div>

        {/* Architectural Decision Banner */}
        <div className="bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800/80 rounded-2xl p-6 space-y-3">
          <div className="flex items-center gap-2 font-bold text-sky-900 dark:text-sky-200 text-base">
            <ZapOff className="w-5 h-5 text-sky-600 dark:text-sky-400" />
            Engineering Design Decision: Elimination of Separate External ADC
          </div>
          <p className="text-xs sm:text-sm text-sky-800 dark:text-sky-300/90 leading-relaxed">
            Conventional microbarometer prototypes built around raw piezoceramic disks or analog strain gauges require external instrumentation amplifiers, op-amp anti-aliasing filters, and standalone ADC modules (such as ADS1115 or MCP3208). In InfraSocket, this entire analog vulnerability zone is eliminated: the <strong>Amphenol DLVR-F50D</strong> performs high-resolution analog-to-digital conversion directly inside the sensor package, streaming calibrated digital counts over <strong>I²C (SDA/SCL)</strong> directly into the Raspberry Pi 5.
          </p>
          <div className="flex flex-wrap gap-4 pt-2 text-xs font-semibold text-sky-700 dark:text-sky-300">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> No External ADC Board Required</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Direct 14/16-bit I²C Digital Bus</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> 100 Hz Continuous Polling</span>
          </div>
        </div>

        {/* Comparison Table: Discrete ADC vs Integrated DLVR Digitization */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              Discrete External ADC vs. Integrated On-Die Digitization
            </h2>
            <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">Architectural Tradeoff</span>
          </div>

          <div className="bg-white dark:bg-gray-800/80 rounded-2xl border border-gray-200 dark:border-gray-700/80 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-900/60 border-b border-gray-200 dark:border-gray-700 text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    <th className="py-3.5 px-6">Evaluation Factor</th>
                    <th className="py-3.5 px-6">Traditional Discrete ADC Approach</th>
                    <th className="py-3.5 px-6">InfraSocket Integrated DLVR Architecture</th>
                    <th className="py-3.5 px-6">Advantage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700/60 text-xs sm:text-sm">
                  {comparison.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors">
                      <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                        {row.factor}
                      </td>
                      <td className="py-4 px-6 text-gray-600 dark:text-gray-300">
                        {row.discrete}
                      </td>
                      <td className="py-4 px-6 text-sky-900 dark:text-sky-200 font-medium">
                        {row.integrated}
                      </td>
                      <td className="py-4 px-6 whitespace-nowrap">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          {row.advantage}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Sampling Parameters & Nyquist Integrity */}
        <section className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            Sampling Cadence &amp; Nyquist Criteria
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white dark:bg-gray-800/80 rounded-2xl p-6 border border-gray-200 dark:border-gray-700/80 shadow-sm space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                Target Infrasound Band
              </div>
              <div className="text-2xl font-extrabold text-gray-900 dark:text-white">0.01 – 20.0 Hz</div>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Covers low-frequency atmospheric pressure waves from severe weather, microbaroms, and industrial acoustic dynamics.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800/80 rounded-2xl p-6 border border-gray-200 dark:border-gray-700/80 shadow-sm space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Acquisition Sampling Rate
              </div>
              <div className="text-2xl font-extrabold text-gray-900 dark:text-white">100 Hz Continuous</div>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Significantly exceeds the 40 Hz Nyquist minimum for 20 Hz signals (2.5× oversampling ratio), facilitating clean digital anti-alias filtering in software.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800/80 rounded-2xl p-6 border border-gray-200 dark:border-gray-700/80 shadow-sm space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                Effective Resolution
              </div>
              <div className="text-2xl font-extrabold text-gray-900 dark:text-white">14-bit (16,384 counts)</div>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Across a ±500 Pa differential pressure span, 14-bit resolution provides ~0.06 Pa per count quantization depth, well within sub-Pascal detection targets.
              </p>
            </div>
          </div>
        </section>

        {/* Footer Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-200 dark:border-gray-800">
          <Link
            to="/03-hardware/analog-front-end"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm shadow-sm transition-colors"
          >
            Next: Analog Front End &amp; ASIC Conditioning
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