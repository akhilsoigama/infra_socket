import { Link } from 'react-router-dom';
import {
  Cpu,
  CheckCircle2,
  ZapOff,
  ArrowRight,
  Layers,
} from 'lucide-react';

export default function Page03HardwareAnalogFrontEnd() {
  const asicFeatures = [
    {
      title: 'Piezoresistive Strain Gauge Bridge',
      desc: 'Silicon micromachined diaphragm with integrated ion-implanted piezoresistive Wheatstone bridge elements located directly inside the sealed sensor die.'
    },
    {
      title: 'Laser-Trimmed Gain & Offset ASIC',
      desc: 'Factory-calibrated analog conditioning ASIC with on-chip temperature sensor providing real-time polynomial compensation for zero-point baseline thermal drift.'
    },
    {
      title: 'Integrated Internal ΔΣ Conversion',
      desc: 'High-speed internal Sigma-Delta analog-to-digital converter converts conditioned micro-volt bridge deflections into 14/16-bit digital binary values on-chip.'
    },
    {
      title: 'Digital I²C Output Engine',
      desc: 'Internal bus controller formats calibrated pressure and temperature bytes into standard I²C frames with hardware CRC error detection.'
    }
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
          <span className="font-semibold text-gray-900 dark:text-gray-200">Analog Front End &amp; ASIC Conditioning</span>
        </nav>

        {/* Hero Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
            <Cpu className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            Sensor Signal Conditioning Architecture
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Analog Front End (AFE) &amp; ASIC Conditioning
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
            Understanding why InfraSocket replaced discrete operational amplifier circuits with the Amphenol DLVR-F50D on-die signal-conditioning ASIC, shifting analog filtering into high-precision software DSP.
          </p>
        </div>

        {/* Architectural Transition Banner */}
        <div className="bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800/80 rounded-2xl p-6 space-y-3">
          <div className="flex items-center gap-2 font-bold text-sky-900 dark:text-sky-200 text-base">
            <ZapOff className="w-5 h-5 text-sky-600 dark:text-sky-400" />
            Why Discrete External AFE Circuitry Was Replaced
          </div>
          <p className="text-xs sm:text-sm text-sky-800 dark:text-sky-300/90 leading-relaxed">
            In early generation microbarometer experiments, low-level micro-volt signals from raw piezoresistive or capacitive membranes required external multi-stage instrumentation amplifiers (e.g. INA128), discrete DC-bias servos, and 4th-order active Sallen-Key low-pass filter networks. These discrete analog circuits suffered from component aging, gain thermal drift, and susceptibility to electrical hum.
          </p>
          <p className="text-xs sm:text-sm text-sky-800 dark:text-sky-300/90 leading-relaxed">
            By selecting the <strong>Amphenol DLVR-F50D</strong>, all sensitive low-level analog signal amplification and temperature compensation take place within microns of the silicon diaphragm inside an integrated ASIC. The output is purely digital, leaving all bandpass filtering (0.01–20 Hz) to mathematically deterministic software algorithms on the Raspberry Pi 5.
          </p>
        </div>

        {/* On-Die ASIC Architecture Diagram */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-sky-600 dark:text-sky-400" />
            Integrated Transducer Signal Conditioning Block
          </h2>

          <div className="bg-white dark:bg-gray-800/80 rounded-2xl p-6 border border-gray-200 dark:border-gray-700/80 shadow-sm overflow-x-auto">
            <pre><code className="language-mermaid">flowchart LR{"\n"}{"    "}subgraph SENSOR_DIE["Amphenol DLVR-F50D Integrated Silicon Package"]{"\n"}{"        "}PNEU["Differential\nPressure Input\n(Port A vs B)"] --&gt; DIAPH["Micromachined\nSilicon Diaphragm"]{"\n"}{"        "}DIAPH --&gt;|Piezoresistive\nBridge| ASIC_AMP["Internal Precision\nInstrument Amplifier"]{"\n"}{"        "}TEMP_DIE["Internal Thermal\nReference Sensor"] --&gt;|Temp Correction| ASIC_AMP{"\n"}{"        "}ASIC_AMP --&gt; ON_CHIP_ADC["Integrated 14/16-bit\nSigma-Delta ADC"]{"\n"}{"        "}ON_CHIP_ADC --&gt; I2C_CORE["I²C Serial Engine\n(SDA / SCL @ 3.3V)"]{"\n"}{"    "}end{"\n"}{"\n"}{"    "}I2C_CORE --&gt;|Digital Frame (100 Hz)| RPI["Raspberry Pi 5\n(Digital Filtering in Software)"]{"\n"}</code></pre>
          </div>
        </section>

        {/* 4 ASIC Conditioning Functions */}
        <section className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            On-Chip Conditioning Subsystems
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {asicFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800/80 rounded-2xl p-6 border border-gray-200 dark:border-gray-700/80 shadow-sm space-y-2"
              >
                <div className="flex items-center gap-2 font-bold text-gray-900 dark:text-white text-base">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  {feat.title}
                </div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-200 dark:border-gray-800">
          <Link
            to="/03-hardware/calibration"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm shadow-sm transition-colors"
          >
            Next: Hardware Calibration
            <ArrowRight className="w-4 h-4" />
          </Link>
          <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
            <span>InfraSocket Documentation</span>
            <span>•</span>
            <Link to="/03-hardware/adc-digitization" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
              Digitization &amp; ADC
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}