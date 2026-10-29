import { Link } from 'react-router-dom';
import {
  Code2,
  ArrowRight
} from 'lucide-react';

export default function Page02SystemArchitectureSoftwareArchitecture() {
  const services = [
    {
      name: 'I²C Sensor DAQ Service',
      stack: 'Python smbus2 / libgpiod (C-bindings)',
      role: 'Polls Amphenol DLVR-F50D pressure sensor and MCP9808 temperature breakout over the hardware I²C bus at continuous 100 Hz. Applies monotonically increasing UTC timestamps and detects communication framing errors.'
    },
    {
      name: 'Circular Memory Ring Buffer',
      stack: 'NumPy Structured Circular Array',
      role: 'Maintains an in-memory ring buffer of the latest 3,600 seconds of 100 Hz raw data, decoupling real-time hardware sample polling from downstream file I/O and display threads.'
    },
    {
      name: 'Digital Signal Processing (DSP) Engine',
      stack: 'SciPy Signal & NumPy',
      role: 'Executes real-time baseline detrending, digital 4th-order Butterworth bandpass filtering (0.01 – 20.0 Hz), Fast Fourier Transform (FFT), and Welch Power Spectral Density (PSD) windowing.'
    },
    {
      name: 'Unsupervised ML Anomaly Detector',
      stack: 'scikit-learn (Isolation Forest)',
      role: 'Extracts time and spectral statistical features (RMS amplitude, dominant frequency, spectral centroid, energy ratio) on sliding windows and generates normalized anomaly scores (0.0 to 1.0).'
    },
    {
      name: 'Local Persistence Engine',
      stack: 'SQLite / HDF5 / CSV Append',
      role: 'Continuously writes raw sensor counts, calibrated Pascals, and ambient temperatures to the local microSD card, guaranteeing zero data loss during network disruptions.'
    },
    {
      name: 'Desktop Visualization Telemetry',
      stack: 'PyQtGraph / React-Electron UI',
      role: 'High-performance 60 FPS graphical user interface rendering live pressure waveforms, dynamic power spectra, waterfall spectrograms, and threshold alert indicators.'
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
          <span className="font-semibold text-gray-900 dark:text-gray-200">Software Architecture</span>
        </nav>

        {/* Hero Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
            <Code2 className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            Edge Compute &amp; Telemetry Stack
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Software &amp; Processing Architecture
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
            The InfraSocket software stack is organized as an asynchronous, multi-threaded pipeline running on the Raspberry Pi 5 Linux edge platform and streaming telemetry to a high-rate desktop console.
          </p>
        </div>

        {/* Software Architecture Flowchart */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-sky-600 dark:text-sky-400" />
            Software Subsystem Pipeline Flowchart
          </h2>

            <pre><code className="language-mermaid">{`flowchart TD
    subgraph ACQUISITION["I2C Acquisition Thread (100 Hz Loop)"]
        I2C_BUS["Hardware I2C Bus (DLVR-F50D + MCP9808)"] --> DAQ["DAQ Service<br/>(I2C Readout and Timestamping)"]
        DAQ --> RING["In-Memory Ring Buffer<br/>(NumPy Circular Array)"]
    end

    subgraph DSP_PIPELINE["DSP Processing Thread"]
        RING --> DETREND["DC Baseline Detrending"]
        DETREND --> FILTER["4th-Order Butterworth<br/>Bandpass (0.01-20 Hz)"]
        FILTER --> FFT["Welch PSD and FFT Spectral Math"]
        FILTER --> FEAT["Time and Spectral Feature Extraction"]
    end

    subgraph ML_PIPELINE["Edge Anomaly Detection Thread"]
        FEAT -->|Normalized Feature Vector| IF["Isolation Forest Engine<br/>(Unsupervised Scoring)"]
        IF --> THRESH["Score > Threshold?"]
        THRESH -->|Yes| ALERT["Anomaly Alert Flag"]
    end

    subgraph PERSISTENCE["Storage Service (Asynchronous)"]
        DAQ -->|Raw Integer Counts| DB[("microSD Ring Buffer<br/>(SQLite / CSV Time-Series)")]
        FILTER -->|Filtered Pascals| DB
        ALERT -->|Event Records| DB
    end

    subgraph GUI["Desktop Telemetry Console (60 FPS)"]
        FILTER -->|USB / LAN Stream| TELEM["PyQtGraph Telemetry Visualizer"]
        FFT --> TELEM
        ALERT --> TELEM
        TELEM --> DISP["Live Waveform + PSD Plot + STFT Waterfall"]
    end`}</code></pre>
        </section>

        {/* Core Services Grid */}
        <section className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            Core Software Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((svc, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800/80 rounded-2xl p-6 border border-gray-200 dark:border-gray-700/80 shadow-sm space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-gray-900 dark:text-white">
                      {svc.name}
                    </h3>
                    <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                      {svc.stack}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {svc.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-200 dark:border-gray-800">
          <Link
            to="/02-system-architecture/deployment-architecture"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm shadow-sm transition-colors"
          >
            Next: Deployment Architecture
            <ArrowRight className="w-4 h-4" />
          </Link>
          <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
            <span>InfraSocket Documentation</span>
            <span>•</span>
            <Link to="/02-system-architecture/data-flow" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
              Data Flow
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}