import { Link } from 'react-router-dom';
import {
  Box,
  ShieldCheck,
  Thermometer,
  Droplets,
  Cpu,
  Wind,
  CheckCircle2,
  AlertTriangle,
  Layers,
  ArrowRight
} from 'lucide-react';

export default function Page03HardwareEnvironmentalEnclosure() {
  const requirements = [
    { title: 'Weather Resistance', desc: 'IP65/IP66 ingress protection against driving rain, blowing dust, and high relative humidity (up to 100% condensing).', icon: Droplets },
    { title: 'Thermal Attenuation', desc: 'High thermal mass and multi-layer insulation to dampen diurnal ambient swings and prevent thermal drift in the reference volume.', icon: Thermometer },
    { title: 'Pneumatic Isolation', desc: 'Hermetic cable/tube pass-throughs preventing air leaks that would bypass the engineered spatial averaging manifold.', icon: Wind },
    { title: 'Component Decoupling', desc: 'Mechanical and thermal separation between heat-generating SBC electronics and sensitive microbarometer transducers.', icon: Cpu }
  ];

  const materials = [
    {
      name: 'Polycarbonate / High-Impact ABS',
      pros: 'Lightweight, naturally RF transparent, excellent thermal insulator, easy to machine and drill for compression fittings.',
      cons: 'Requires UV-resistant exterior coating for multi-year desert exposure.',
      recommendation: 'Primary Choice for Prototype Node'
    },
    {
      name: 'Fiberglass-Reinforced Polyester (GRP)',
      pros: 'Superior UV and chemical durability, outstanding structural rigidity, excellent thermal stability across -40°C to +85°C.',
      cons: 'Heavier than ABS; abrasive dust when drilling bulkhead holes.',
      recommendation: 'Recommended for Permanent Field Stations'
    },
    {
      name: 'Die-Cast Aluminum (Sealed)',
      pros: 'Complete RF/EMI Faraday shielding, ruggedized crush resistance.',
      cons: 'High thermal conductivity introduces rapid temperature swings to the internal reference volume unless heavily insulated.',
      recommendation: 'Requires Secondary Internal Thermal Insulation'
    }
  ];

  return (
    <main className="flex-1 min-w-0 overflow-y-auto p-4 sm:p-6 md:p-10 relative">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Navigation Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/03-hardware/hardware-overview" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Hardware</Link>
          <span>/</span>
          <span className="font-semibold text-gray-900 dark:text-gray-200">Environmental Enclosure</span>
        </nav>

        {/* Hero Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
            <Box className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            Field Chassis &amp; Environmental Thermal Packaging
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Environmental Enclosure Architecture
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            The InfraSocket environmental enclosure shields sensitive digital transducers, thermal reference chambers, power converters, and edge compute electronics from severe outdoor weather while establishing hermetic pneumatic pathways to external wind-noise reduction filters.
          </p>
        </div>

        {/* Sandia Scientific Boundary Notice */}
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-amber-900 dark:text-amber-200 space-y-1">
            <p className="font-semibold">Aeroacoustic Design Rule (Sandia Research Finding):</p>
            <p>
              An environmental enclosure serves strictly as a weather and thermal shield — <strong>it must never function as a wind filter</strong>. As demonstrated by Sandia National Laboratories (Albert, Pankow, &amp; Berg, 2021; SAND2021-10136), simply inverting a bucket or unengineered housing over a sensor collapses spatial averaging into a single point and actively amplifies turbulence above 1–3 Hz. All atmospheric sensing ports must extend out through sealed bulkhead fittings directly to an engineered spatial averaging manifold.
            </p>
          </div>
        </div>

        {/* Section 1: Core Functional Requirements */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-sky-600 dark:text-sky-400" />
              Functional Enclosure Requirements
            </h2>
            <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">IP65 / IP66 Standard</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {requirements.map((req, i) => {
              const Icon = req.icon;
              return (
                <div key={i} className="p-5 rounded-2xl border border-gray-200 dark:border-gray-700/80 bg-white dark:bg-gray-800/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-sky-50 dark:bg-sky-950/50 border border-sky-200 dark:border-sky-800 flex items-center justify-center text-sky-600 dark:text-sky-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-sm text-gray-900 dark:text-white">{req.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {req.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 2: Visual Prototype Enclosure Layout Blueprint */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 id="prototype-enclosure-layout" className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-sky-600 dark:text-sky-400" />
              Prototype Enclosure Internal Architecture
            </h2>
            <span className="text-xs text-emerald-600 dark:text-emerald-400 font-mono font-semibold">Dual-Chamber Layout</span>
          </div>

          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            To prevent thermal dissipation from the Raspberry Pi 5 SBC and DC-DC power converters from warming the reference chamber and inducing adiabatic pressure drift, the enclosure is internally partitioned into two isolated thermal compartments:
          </p>

          {/* Visual Blueprint Card */}
          <div className="rounded-2xl border-2 border-slate-300 dark:border-gray-700 bg-slate-900 text-white p-6 sm:p-8 shadow-xl font-sans relative overflow-hidden">
            <div className="absolute top-3 right-4 text-[10px] font-mono tracking-wider text-slate-400 uppercase">
              Chassis Specification: IP66 Sealed Polycarbonate Enclosure (300 × 200 × 130 mm)
            </div>

            <div className="border border-slate-700/80 rounded-xl p-4 sm:p-6 bg-slate-950/60 space-y-6">
              {/* Outer Enclosure Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest flex items-center gap-2">
                  <Box className="w-4 h-4" /> Weatherproof Enclosure Shell
                </span>
                <span className="text-xs text-slate-400">Silicone Neoprene Gasket Sealing</span>
              </div>

              {/* Two Compartments Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Zone 1: Thermal Sensing Sub-Chamber */}
                <div className="p-4 rounded-xl border border-sky-500/40 bg-sky-950/20 space-y-3 relative">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-sky-300 uppercase">Zone A: Transducer Sub-Volume</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-sky-900/60 text-sky-200">Thermally Insulated</span>
                  </div>

                  <div className="space-y-2.5 text-xs text-slate-300">
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-white">Amphenol DLVR-F50D</div>
                        <div className="text-[11px] text-slate-400">Piezoresistive Digital Sensor (±500 Pa)</div>
                      </div>
                      <span className="text-[10px] font-mono text-teal-400">Port A / B</span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-white">Thermal Reference Chamber</div>
                        <div className="text-[11px] text-slate-400">Sealed Volume + Needle Capillary Valve</div>
                      </div>
                      <span className="text-[10px] font-mono text-sky-400">P_ref</span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-white">MCP9808 Digital Temp</div>
                        <div className="text-[11px] text-slate-400">Chamber Ambient Drift Tracking</div>
                      </div>
                      <span className="text-[10px] font-mono text-amber-400">±0.25°C</span>
                    </div>
                  </div>
                </div>

                {/* Zone 2: Compute & Power Compartment */}
                <div className="p-4 rounded-xl border border-indigo-500/40 bg-indigo-950/20 space-y-3 relative">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-indigo-300 uppercase">Zone B: Edge SBC &amp; Power</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-900/60 text-indigo-200">Vibration Damped</span>
                  </div>

                  <div className="space-y-2.5 text-xs text-slate-300">
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-white">Raspberry Pi 5 (Edge SBC)</div>
                        <div className="text-[11px] text-slate-400">100 Hz I²C DAQ + DSP + Isolation Forest</div>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400">Broadcom SoC</span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-white">Isolated DC-DC Regulators</div>
                        <div className="text-[11px] text-slate-400">5.1V / 5A SBC Rail + Ultra-Low-Ripple 3.3V</div>
                      </div>
                      <span className="text-[10px] font-mono text-purple-400">Power Delivery</span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-white">Local Storage &amp; RTC</div>
                        <div className="text-[11px] text-slate-400">High-Endurance microSD Ring Buffer</div>
                      </div>
                      <span className="text-[10px] font-mono text-blue-400">SQLite / CSV</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bulkhead Interface Strip */}
              <div className="border-t border-slate-800 pt-4">
                <div className="text-[11px] font-mono text-slate-400 uppercase mb-2">Bottom Bulkhead Penetration Interfaces</div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-2 rounded bg-slate-900/80 border border-slate-700 text-center">
                    <div className="font-semibold text-teal-300">Port A Pass-Through</div>
                    <div className="text-[10px] text-slate-400">Brass Bulkhead Compression Fitting &rarr; Manifold</div>
                  </div>
                  <div className="p-2 rounded bg-slate-900/80 border border-slate-700 text-center">
                    <div className="font-semibold text-sky-300">Capillary Equalization Port</div>
                    <div className="text-[10px] text-slate-400">Sintered Porous Bronze Breather Filter</div>
                  </div>
                  <div className="p-2 rounded bg-slate-900/80 border border-slate-700 text-center">
                    <div className="font-semibold text-amber-300">Cable Glands (IP67)</div>
                    <div className="text-[10px] text-slate-400">12V DC Power Input + Ethernet / USB</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Mermaid Flow Diagram */}
        <section className="space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
            Enclosure Physical &amp; Pneumatic Routing Flowchart
          </h2>
          <pre><code className="language-mermaid">flowchart TD{"\n"}{"    "}subgraph ENCLOSURE["IP66 Weatherproof Enclosure Shell"]{"\n"}{"        "}subgraph THERMAL_ZONE["Thermally Insulated Transducer Chamber"]{"\n"}{"            "}DLVR["Amphenol DLVR-F50D\nDigital Differential Sensor"]{"\n"}{"            "}REF["Rigid Reference Chamber\nConstant Reference Mass"]{"\n"}{"            "}LEAK["Needle Valve / Capillary Leak\nSlow Pressure Equalization"]{"\n"}{"            "}TEMP["MCP9808 Temp Sensor\nDigital Drift Tracking"]{"\n"}{"            "}REF --- LEAK{"\n"}{"            "}REF --&gt;|Port B Static Reference| DLVR{"\n"}{"        "}end{"\n"}{"\n"}{"        "}subgraph COMPUTE_ZONE["Active Electronics Compartment"]{"\n"}{"            "}RPI["Raspberry Pi 5 Edge SBC\n100 Hz I2C Acquisition"]{"\n"}{"            "}PWR["Isolated DC-DC Buck Module\n5.1V / 5A and Low-Noise 3.3V"]{"\n"}{"            "}PWR --&gt; RPI{"\n"}{"            "}PWR --&gt;|Clean 3.3V Rail| DLVR{"\n"}{"            "}PWR --&gt;|Clean 3.3V Rail| TEMP{"\n"}{"            "}DLVR --&gt;|Digital I2C Data| RPI{"\n"}{"            "}TEMP --&gt;|Digital I2C Data| RPI{"\n"}{"        "}end{"\n"}{"    "}end{"\n"}{"\n"}{"    "}WIND["External Spatial Manifold\n4-Port Rosette or Porous Hose"] --&gt;|Hermetic Bulkhead Fitting| PORT_A["Port A Atmosphere"]{"\n"}{"    "}PORT_A --&gt; DLVR{"\n"}{"    "}LEAK --&gt;|Sintered Bronze Vent| ATM_LEAK["Atmospheric Equalization"]{"\n"}{"    "}BATT["External 12V LiFePO4 Battery"] --&gt;|IP67 Sealed Cable Gland| PWR{"\n"}{"    "}RPI --&gt;|Ethernet / Wi-Fi Telemetry| DESKTOP["InfraSocket Desktop Visualizer"]{"\n"}</code></pre>
        </section>

        {/* Section 4: Materials Selection */}
        <section className="space-y-6">
          <h2 id="materials" className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            Enclosure Material Comparison
          </h2>

          <div className="space-y-4">
            {materials.map((mat, i) => (
              <div key={i} className="p-5 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/80 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="font-bold text-base text-gray-900 dark:text-white">{mat.name}</h3>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300 w-fit">
                    {mat.recommendation}
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <p><strong className="text-emerald-600 dark:text-emerald-400">Advantages:</strong> {mat.pros}</p>
                  <p><strong className="text-rose-600 dark:text-rose-400">Trade-offs:</strong> {mat.cons}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Condensation & Breather Management */}
        <section className="space-y-4 p-5 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
          <h2 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Droplets className="w-4 h-4 text-sky-600 dark:text-sky-400" />
            Condensation Prevention &amp; Desiccant Strategy
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            In outdoor field deployments, diurnal temperature cycling causes air inside a completely sealed box to warm, expand, cool, and draw in humid ambient air, creating internal water condensation on sensor pins and computing traces. InfraSocket combats this through three measures:
          </p>
          <ul className="list-disc pl-5 text-xs sm:text-sm text-gray-600 dark:text-gray-300 space-y-1.5">
            <li><strong>Gore-Tex Hydrophobic Vent:</strong> An IP68 ePTFE membrane vent installed on the compute chamber equalizes internal static pressure with ambient air while repelling liquid water droplets and humidity spikes.</li>
            <li><strong>Rechargeable Silica Desiccant Pack:</strong> A sealed molecular sieve / silica gel canister mounted inside the electronics compartment absorbs residual moisture.</li>
            <li><strong>Conformal Coating:</strong> PCB traces and breakout soldering points are treated with silicone conformal coating (MG Chemicals 422B) to protect against condensation-induced micro-corrosion.</li>
          </ul>
        </section>

        {/* Footer Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-200 dark:border-gray-800 text-xs text-gray-500 dark:text-gray-400">
          <div>
            <em>See also: <Link to="/03-hardware/hardware-overview" className="hover:underline text-sky-600 dark:text-sky-400">Hardware Overview</Link> | <Link to="/03-hardware/wind-noise-reduction" className="hover:underline text-sky-600 dark:text-sky-400">Wind-Noise Reduction</Link> | <Link to="/03-hardware/reference-chamber" className="hover:underline text-sky-600 dark:text-sky-400">Reference Chamber</Link></em>
          </div>
          <div>InfraSocket Mechanical Design Documentation</div>
        </div>
      </div>
    </main>
  );
}