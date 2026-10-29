import { Link } from 'react-router-dom';
import {
  Server,
  ArrowRight,
  Layers
} from 'lucide-react';

export default function Page02SystemArchitectureDeploymentArchitecture() {
  const deploymentTiers = [
    {
      tier: 'Tier 1: Physical Sensor Station Node',
      hardware: 'DLVR-F50D + Reference Chamber + MCP9808 + RPi 5 + 12V LiFePO4',
      role: 'Self-contained outdoor weather-resistant node. Connects pressure inlets to the spatial averaging manifold. Acquires 100 Hz continuous digital samples directly over I²C with local microSD backup recording.'
    },
    {
      tier: 'Tier 2: Local Station Telemetry (Direct Tether / LAN)',
      hardware: 'Operator PC / Lab Workstation (USB 3.0 / Ethernet / Wi-Fi)',
      role: 'Directly displays live 60 FPS waveforms, FFT power spectra, and anomaly alerts via the InfraSocket desktop console (PyQtGraph) with sub-50ms latency.'
    },
    {
      tier: 'Tier 3: Central Lab Server & Ingestion (Optional)',
      hardware: 'Central Laboratory Server / Workstation',
      role: 'Aggregates multiple distributed field nodes over standard LAN/VPN, archives multi-month datasets into PostgreSQL/InfluxDB, and synchronizes time offsets.'
    },
    {
      tier: 'Tier 4: Distributed Open Science Cloud (Roadmap)',
      hardware: 'Cloud Storage & Web API (AWS / S3 / Open Data Hub)',
      role: 'Publishes open-access anonymized infrasound streams and historical event catalogs for academic geophysics and atmospheric researchers worldwide.'
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
          <span className="font-semibold text-gray-900 dark:text-gray-200">Deployment Architecture</span>
        </nav>

        {/* Hero Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
            <Server className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            Field Station &amp; Network Topology
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Deployment Architecture &amp; Topologies
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
            Deployment configurations for InfraSocket stations, ranging from autonomous single-station field nodes to tethered laboratory benches and networked multi-station telemetry.
          </p>
        </div>

        {/* Deployment Diagram */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-sky-600 dark:text-sky-400" />
            Physical Deployment Topology Diagram
          </h2>

          <div className="bg-white dark:bg-gray-800/80 rounded-2xl p-6 border border-gray-200 dark:border-gray-700/80 shadow-sm overflow-x-auto">
            <pre><code className="language-mermaid">flowchart TD{"\n"}{"    "}subgraph FIELD_NODE["Field Station Enclosure (Autonomous Outdoor Node)"]{"\n"}{"        "}WIND["4-Port Spatial Averaging Manifold"] --&gt; SENS["Amphenol DLVR-F50D Sensor"]{"\n"}{"        "}REF["Thermally Insulated Reference Chamber"] --&gt;|Capillary Leak| SENS{"\n"}{"        "}TEMP["MCP9808 Digital Temperature Sensor"]{"\n"}{"        "}BAT["12V LiFePO4 Battery + DC-DC"] --&gt;|Power| SENS &amp; TEMP{"\n"}{"        "}BAT --&gt;|5V / 5A| RPI["Raspberry Pi 5 (Edge SBC)"]{"\n"}{"        "}SENS &amp; TEMP --&gt;|Direct I²C Bus (SDA/SCL @ 3.3V)| RPI{"\n"}{"        "}RPI --&gt;|Continuous Append| SD["Local microSD Ring Buffer"]{"\n"}{"    "}end{"\n"}{"\n"}{"    "}subgraph TETHER["Local Telemetry (Operator Workstation)"]{"\n"}{"        "}RPI --&gt;|USB 3.0 / Gigabit LAN / Wi-Fi| DESK["InfraSocket Desktop Application\n(PyQtGraph 60 FPS Visualizer)"]{"\n"}{"    "}end{"\n"}{"\n"}{"    "}subgraph MULTI_NODE["Central Research Server (Optional Scale-Out)"]{"\n"}{"        "}RPI --&gt;|Store-and-Forward Telemetry| CENTRAL["Central Laboratory Server\n(TimescaleDB / PostgreSQL)"]{"\n"}{"        "}CENTRAL --&gt; WEB_DASH["Centralized Multi-Node Fleet Dashboard"]{"\n"}{"    "}end{"\n"}</code></pre>
          </div>
        </section>

        {/* 4 Deployment Tiers Grid */}
        <section className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            Architectural Deployment Tiers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {deploymentTiers.map((tier, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800/80 rounded-2xl p-6 border border-gray-200 dark:border-gray-700/80 shadow-sm space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white">
                    {tier.tier}
                  </h3>
                  <div className="font-mono text-xs text-sky-700 dark:text-sky-300">
                    {tier.hardware}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {tier.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-200 dark:border-gray-800">
          <Link
            to="/02-system-architecture/time-synchronization"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm shadow-sm transition-colors"
          >
            Next: Time Synchronization
            <ArrowRight className="w-4 h-4" />
          </Link>
          <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
            <span>InfraSocket Documentation</span>
            <span>•</span>
            <Link to="/02-system-architecture/software-architecture" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
              Software Architecture
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}