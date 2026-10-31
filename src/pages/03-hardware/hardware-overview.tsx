import { Link } from 'react-router-dom';
import {
  Cpu,
  Layers,
  ArrowRight,
  ZapOff
} from 'lucide-react';

export default function Page03HardwareHardwareOverview() {
  const components = [
    { name: 'Wind-Noise Reduction Manifold', role: 'Attenuates local turbulent pressure fluctuations via spatial acoustic averaging', status: '4-Port Prototype', link: '/03-hardware/wind-noise-reduction' },
    { name: 'Amphenol DLVR-F50D Sensor', role: 'Direct digital differential MEMS sensor (±500 Pa) with on-die 14/16-bit ΔΣ ADC', status: 'Primary Transducer', link: '/03-hardware/pressure-sensing' },
    { name: 'Pneumatic Reference Chamber', role: 'Rigid thermally insulated reference volume paired with calibrated capillary equalization leak', status: 'Pneumatic Reference', link: '/03-hardware/reference-chamber' },
    { name: 'MCP9808 Digital Temperature Sensor', role: 'High-accuracy I²C ambient & chamber thermal tracking (±0.25°C precision)', status: 'Auxiliary Sensor', link: '/03-hardware/temperature-sensing' },
    { name: 'Raspberry Pi 5 (Edge SBC)', role: 'Continuous 100 Hz I²C bus polling, real-time DSP, and local ring buffer storage', status: 'Edge Controller', link: '/03-hardware/hardware-bom' },
    { name: '12V LiFePO4 Power System', role: 'Isolated low-noise DC battery with protected buck regulators (5V SBC & 3.3V Sensor)', status: 'Power Subsystem', link: '/03-hardware/power-system' },
    { name: 'Environmental Enclosure', role: 'IP-rated weatherproofing, passive heat isolation, zero cooling fan operation', status: 'Enclosure', link: '/03-hardware/environmental-enclosure' },
    { name: 'Sensor Connection & Network', role: 'Edge buffering, store-and-forward telemetry, and central database integration', status: 'Telemetry Interface', link: '/14-sensor_connection/sensor_connection' }
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
          <span className="font-semibold text-gray-900 dark:text-gray-200">Hardware Overview</span>
        </nav>

        {/* Hero Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
            <Cpu className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            Physical Instrumentation Stack
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Hardware Subsystem Overview
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
            The InfraSocket hardware platform provides an acoustically quiet, thermally stable interface between atmospheric pressure fluctuations and the digital processing system. It captures sub-audible waves (0.01–20 Hz) using a direct digital differential MEMS transducer.
          </p>
        </div>

        {/* Architectural Highlight: Zero External ADC */}
        <div className="bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800/80 rounded-2xl p-6 space-y-3">
          <div className="flex items-center gap-2 font-bold text-sky-900 dark:text-sky-200 text-base">
            <ZapOff className="w-5 h-5 text-sky-600 dark:text-sky-400" />
            Direct Digital Architecture: Zero External ADC or Analog Front-End
          </div>
          <p className="text-xs sm:text-sm text-sky-800 dark:text-sky-300/90 leading-relaxed">
            InfraSocket bypasses fragile discrete op-amp amplifiers and standalone ADC modules by integrating the <strong>Amphenol DLVR-F50D</strong> digital differential pressure sensor. With on-die piezoresistive sensing, laser-trimmed ASIC conditioning, and an integrated 14/16-bit Delta-Sigma ADC, the sensor sends calibrated digital samples directly to the Raspberry Pi 5 via <strong>I²C (SDA/SCL)</strong>.
          </p>
        </div>

        {/* Concept Exploded View Image */}
        <div className="bg-white dark:bg-gray-800/80 rounded-2xl p-6 border border-gray-200 dark:border-gray-700/80 shadow-sm space-y-4">
          <div className="overflow-hidden rounded-xl bg-slate-50 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-700">
            <img
              src="/assets/hardware/infrasocket-node-concept.jpg"
              alt="Conceptual InfraSocket sensor node exploded view"
              className="w-full max-h-96 object-contain mx-auto py-4"
            />
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
            <strong>Figure:</strong> Conceptual rendering of an integrated InfraSocket station node illustrating the enclosure, Raspberry Pi 5 edge computer, DLVR differential sensor, and manifold ports.
          </div>
        </div>

        {/* Hardware Subsystem Flowchart */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-sky-600 dark:text-sky-400" />
            Direct Digital Hardware Subsystem Map
          </h2>

          <div className="bg-white dark:bg-gray-800/80 rounded-2xl p-6 border border-gray-200 dark:border-gray-700/80 shadow-sm overflow-x-auto">
            <pre><code className="language-mermaid">{`flowchart TD
    subgraph ATMOSPHERE["Atmospheric Interface"]
        WIND["4-Port Wind Manifold<br/>Spatial Averaging"] -->|Direct Atmosphere| PORT_A["Port A - Atmosphere"]
        REF["Reference Chamber<br/>Thermally Insulated"] -->|Capillary Leak| PORT_B["Port B - Reference"]
    end

    subgraph TRANSDUCER["Digital Differential Sensor"]
        PORT_A --> SENSOR["Amphenol DLVR-F50D<br/>Silicon Diaphragm + On-Chip ASIC ADC"]
        PORT_B --> SENSOR
    end

    subgraph AUX["Auxiliary Monitoring"]
        TEMP["MCP9808 Digital Temp<br/>0.25 C Precision Sensor"]
    end

    subgraph EDGE_COMPUTE["Edge SBC - Raspberry Pi 5"]
        SENSOR -->|Digital I2C Data| RPI["Raspberry Pi 5<br/>100 Hz Continuous Readout"]
        TEMP -->|Digital I2C Data| RPI
        RPI --> SD["microSD Ring Buffer<br/>Local Storage"]
        RPI --> DSP["Python Real-Time DSP<br/>0.01-20 Hz Butterworth"]
    end

    subgraph POWER_BLOCK["Power Delivery"]
        BAT["12V LiFePO4 Battery"] --> DCDC["Low-Noise DC-DC Regulators"]
        DCDC -->|5.1V / 5A Rail| RPI
        DCDC -->|Clean 3.3V Rail| SENSOR
        DCDC -->|Clean 3.3V Rail| TEMP
    end

    DSP -->|USB / Ethernet Telemetry| DESKTOP["InfraSocket Desktop Console<br/>PyQtGraph 60 FPS"]`}</code></pre>
          </div>
        </section>

        {/* Hardware Components Table */}
        <section className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            Hardware Component Modules
          </h2>

          <div className="bg-white dark:bg-gray-800/80 rounded-2xl border border-gray-200 dark:border-gray-700/80 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-900/60 border-b border-gray-200 dark:border-gray-700 text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    <th className="py-3.5 px-6">Hardware Subsystem</th>
                    <th className="py-3.5 px-6">Functional Purpose</th>
                    <th className="py-3.5 px-6">Specification State</th>
                    <th className="py-3.5 px-6">Module Spec</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700/60 text-xs sm:text-sm">
                  {components.map((c, i) => (
                    <tr key={i} className="hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors">
                      <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white whitespace-nowrap">
                        {c.name}
                      </td>
                      <td className="py-4 px-6 text-gray-600 dark:text-gray-300">
                        {c.role}
                      </td>
                      <td className="py-4 px-6 font-mono text-sky-700 dark:text-sky-300 whitespace-nowrap">
                        {c.status}
                      </td>
                      <td className="py-4 px-6 whitespace-nowrap">
                        <Link
                          to={c.link}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-sky-600 hover:text-sky-500 dark:text-sky-400"
                        >
                          View Spec <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Sensing Principle & Manifold Images */}
        <section className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            Pneumatic Principles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800/80 rounded-2xl p-6 border border-gray-200 dark:border-gray-700/80 shadow-sm space-y-3">
              <div className="overflow-hidden rounded-xl bg-slate-50 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-700">
                <img
                  src="/assets/hardware/differential-pressure-concept.jpg"
                  alt="Differential pressure sensor concept"
                  className="w-full h-48 object-cover"
                />
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white">
                Differential Pressure Transduction
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Infrasonic pressure waves create rapid differential deflection across the silicon diaphragm between Port A and Port B. Slow barometric weather changes bleed through the capillary leak, equalizing the chamber without saturating the sensor.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800/80 rounded-2xl p-6 border border-gray-200 dark:border-gray-700/80 shadow-sm space-y-3">
              <div className="overflow-hidden rounded-xl bg-slate-50 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-700">
                <img
                  src="/assets/hardware/wind-rosette-concept.jpg"
                  alt="Wind noise reduction rosette concept"
                  className="w-full h-48 object-cover"
                />
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white">
                Spatial Averaging Wind Manifold
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Acoustic infrasound waves have wavelengths of tens to hundreds of meters and sum coherently across manifold ports. Local turbulent wind eddies are small-scale and uncorrelated, canceling out destructively across the manifold volume.
              </p>
            </div>
          </div>
        </section>

        {/* Footer Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-200 dark:border-gray-800">
          <Link
            to="/03-hardware/pressure-sensing"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm shadow-sm transition-colors"
          >
            Next: Pressure Sensing
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