import { Link } from 'react-router-dom';
import {
  Cpu,
  Layers,
  BatteryCharging,
  Thermometer,
  Fan,
  CheckCircle2,
  ArrowRight,
  ZapOff
} from 'lucide-react';

export default function Page02SystemArchitectureHardwareArchitecture() {
  const hardwareModules = [
    {
      name: 'Direct Digital Differential Sensor',
      model: 'Amphenol DLVR-F50D-E1ND-C-NI3F',
      role: 'Integrated micro-machined piezoresistive pressure die with on-chip temperature compensation, internal front-end conditioning, and built-in 14/16-bit ΔΣ ADC.',
      interface: 'I²C (SDA / SCL) @ 3.3V',
      eliminated: 'Eliminates external instrumentation op-amps, anti-aliasing filters, and discrete ADC chips.'
    },
    {
      name: 'Edge Single-Board Computer (SBC)',
      model: 'Raspberry Pi 5',
      role: 'High-performance edge controller executing continuous 100 Hz I²C bus polling, real-time NumPy/SciPy digital filtering, local microSD ring buffer, and USB/Ethernet telemetry streaming.',
      interface: 'GPIO I²C Bus + USB 3.0 / Gigabit LAN / Wi-Fi',
      eliminated: 'Replaces complex multi-microcontroller architectures with a unified Linux processing core.'
    },
    {
      name: 'Auxiliary Thermal Reference Sensor',
      model: 'MCP9808 Breakout',
      role: 'High-accuracy digital temperature sensor (±0.25°C typical) mounted on or adjacent to the pneumatic reference chamber to track thermal equilibrium and baseline sensor drift.',
      interface: 'I²C Shared Bus (Address 0x18)',
      eliminated: 'Eliminates analog RTD / thermistor bridge circuits and calibration potentiometers.'
    },
    {
      name: 'Power Subsystem & Regulation',
      model: '12V LiFePO4 Battery + Protected DC-DC',
      role: 'Clean, isolated low-noise DC power delivery. Dual regulated rails: 5.1V / 5A for Raspberry Pi 5 and ultra-low-ripple regulated 3.3V for DLVR sensor and MCP9808.',
      interface: 'Clean DC Bus with Reverse Polarity & Overvoltage Protection',
      eliminated: 'Eliminates noisy AC grid ripple and switching transients near sensitive pressure ports.'
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
          <span className="font-semibold text-gray-900 dark:text-gray-200">Hardware Architecture</span>
        </nav>

        {/* Hero Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
            <Cpu className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            Direct Digital Sensing Architecture
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Hardware Architecture &amp; Subsystems
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
            InfraSocket implements a streamlined, direct digital hardware architecture. By utilizing an Amphenol DLVR digital differential MEMS sensor with internal ADC and on-chip conditioning, the system eliminates fragile external analog front-end (AFE) circuits and discrete ADC modules entirely.
          </p>
        </div>

        {/* Why External ADC & AFE Are Eliminated Banner */}
        <div className="bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800/80 rounded-2xl p-6 space-y-3">
          <div className="flex items-center gap-2 font-bold text-sky-900 dark:text-sky-200 text-base">
            <ZapOff className="w-5 h-5 text-sky-600 dark:text-sky-400" />
            Architectural Clarification: Why External ADC &amp; AFE Are Eliminated
          </div>
          <p className="text-xs sm:text-sm text-sky-800 dark:text-sky-300/90 leading-relaxed">
            Traditional infrasound designs required discrete instrumentation amplifiers (INAs), analog low-pass filtering stages, and external 16/24-bit ADC chips. These analog stages were highly susceptible to thermal gain drift, trace parasitic noise, and component tolerances. In InfraSocket, the <strong>Amphenol DLVR-F50D</strong> sensor incorporates an on-die piezoresistive micro-machined bridge, calibrated signal-conditioning ASIC, and internal high-resolution Delta-Sigma ADC. The sensor outputs calibrated digital pressure values directly over the <strong>I²C bus (SDA/SCL)</strong> to the Raspberry Pi 5.
          </p>
          <div className="flex flex-wrap gap-4 pt-2 text-xs font-semibold text-sky-700 dark:text-sky-300">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Zero External Op-Amp Noise</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> No Discrete ADC Required</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Direct 100 Hz I²C Readout</span>
          </div>
        </div>

        {/* Direct Digital Hardware Block Diagram */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-sky-600 dark:text-sky-400" />
            Integrated Hardware Subsystem Diagram
          </h2>

          <div className="bg-white dark:bg-gray-800/80 rounded-2xl p-6 border border-gray-200 dark:border-gray-700/80 shadow-sm overflow-x-auto">
            <pre><code className="language-mermaid">{`flowchart TD
    subgraph PNEU["Pneumatic Interface"]
        WIND["Wind-Noise Reduction<br/>4-Port Manifold"] -->|Direct Atmosphere| PORT_A["Port A - Atmosphere"]
        REF_CHAM["Reference Chamber<br/>Thermally Insulated"] -->|Controlled Restriction| PORT_B["Port B - Reference"]
    end

    subgraph SENSOR_BLOCK["Direct Digital Sensor - DLVR-F50D"]
        PORT_A --> MEMS["Micromachined Silicon<br/>Diaphragm"]
        PORT_B --> MEMS
        MEMS --> ASIC["On-Chip ASIC<br/>Internal Conditioning and ADC"]
        ASIC --> I2C_PORT["I2C Core Interface<br/>SDA / SCL at 3.3V"]
    end

    subgraph AUX_SENSORS["Auxiliary Environmental"]
        MCP["MCP9808 Temperature<br/>Chamber Drift Tracking"]
    end

    I2C_PORT --> I2C_BUS["Shared I2C Bus - 3.3V"]
    MCP -->|I2C Address 0x18| I2C_BUS

    subgraph COMPUTE["Edge Processing - Raspberry Pi 5"]
        I2C_BUS --> GPIO["RPi 5 I2C Hardware Bus"]
        GPIO --> DAQ["100 Hz Sample Readout<br/>and Sample Timing"]
        DAQ --> SD["microSD Ring Buffer<br/>Local Resilience"]
        DAQ --> DSP["Python DSP Core<br/>Butterworth, FFT, and PSD"]
    end

    subgraph POWER["Isolated DC Power Delivery"]
        BAT["12V LiFePO4 Battery"] --> DCDC["DC-DC Buck Regulators"]
        DCDC -->|5.1V / 5A Rail| GPIO
        DCDC -->|Clean 3.3V Rail| ASIC
        DCDC -->|Clean 3.3V Rail| MCP
    end

    DSP -->|USB / LAN / Wi-Fi| DESKTOP["InfraSocket Desktop Console<br/>PyQtGraph 60 FPS"]`}</code></pre>
          </div>
        </section>

        {/* 4 Hardware Subsystems Cards */}
        <section className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            Core Hardware Modules
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {hardwareModules.map((mod, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800/80 rounded-2xl p-6 border border-gray-200 dark:border-gray-700/80 shadow-sm space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-gray-900 dark:text-white">
                      {mod.name}
                    </h3>
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                      {mod.model}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {mod.role}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 dark:border-gray-700/60 space-y-1 text-xs">
                  <div>
                    <strong className="text-gray-700 dark:text-gray-300">Hardware Interface: </strong>
                    <span className="font-mono text-sky-700 dark:text-sky-300">{mod.interface}</span>
                  </div>
                  <div>
                    <strong className="text-emerald-700 dark:text-emerald-400">Design Advantage: </strong>
                    <span className="text-gray-600 dark:text-gray-400">{mod.eliminated}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Environmental & Thermal Considerations */}
        <section className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            Mechanical &amp; Environmental Protections
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white dark:bg-gray-800/80 rounded-2xl p-6 border border-gray-200 dark:border-gray-700/80 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 font-bold text-sm">
                <Fan className="w-5 h-5 text-amber-500" />
                Zero Cooling Fans (Acoustic Silence)
              </div>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Cooling fans produce significant acoustic blade noise and vortex shedding in the 1–20 Hz band. The enclosure employs passive heat sinks and convective isolation, maintaining complete acoustic silence.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800/80 rounded-2xl p-6 border border-gray-200 dark:border-gray-700/80 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 font-bold text-sm">
                <Thermometer className="w-5 h-5 text-sky-500" />
                Chamber Thermal Isolation
              </div>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                The reference chamber is encased in closed-cell thermal insulation foam, dampening rapid ambient temperature shocks and reducing thermal volumetric expansion errors (PV = nRT).
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800/80 rounded-2xl p-6 border border-gray-200 dark:border-gray-700/80 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 font-bold text-sm">
                <BatteryCharging className="w-5 h-5 text-emerald-500" />
                Isolated 12V LiFePO4 Power
              </div>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Battery power completely isolates the sensitive I²C digital sensor lines from 50/60 Hz power-grid ground loops, switching hum, and voltage spikes.
              </p>
            </div>
          </div>
        </section>

        {/* Footer Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-200 dark:border-gray-800">
          <Link
            to="/02-system-architecture/system-overview"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm shadow-sm transition-colors"
          >
            Next: System Overview
            <ArrowRight className="w-4 h-4" />
          </Link>
          <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
            <span>InfraSocket Documentation</span>
            <span>•</span>
            <Link to="/02-system-architecture/architecture" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
              Return to 3-Zone Architecture
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}