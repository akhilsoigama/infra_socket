import { Link } from 'react-router-dom';
import { Wind, ShieldAlert, CheckCircle2, AlertTriangle, Layers, Activity, Sliders, Info } from 'lucide-react';

export default function Page03HardwareWindNoiseReduction() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto p-4 sm:p-6 md:p-10 relative">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Navigation Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/03-hardware/hardware-overview" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Hardware</Link>
          <span>/</span>
          <span className="font-semibold text-gray-900 dark:text-gray-200">Wind-Noise Reduction</span>
        </nav>

        {/* Hero Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
            <Wind className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            Atmospheric Boundary Layer Acoustics &amp; Spatial Filtering
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Wind-Noise Reduction Systems (WNRS)
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Turbulent atmospheric wind generates pressure fluctuations that mask microbarometer signals across the infrasound band (0.01–20 Hz). This page details the fluid dynamics of wind noise, evaluates published research findings from Sandia National Laboratories (SAND2021-10136), explores spatial filtering mechanisms, and outlines research-based design considerations for InfraSocket.
          </p>
        </div>

        {/* Callout Notice: Science & Documentation Rules */}
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 flex items-start gap-3">
          <Info className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-amber-900 dark:text-amber-200 space-y-1">
            <p className="font-semibold">Scientific Reporting &amp; Engineering Distinctions:</p>
            <p>
              Numerical attenuation values (e.g., 2–15 dB, 2–7 dB) cited below represent published empirical findings from <strong>Sandia National Laboratories (Albert, Pankow, &amp; Berg, 2021; Report SAND2021-10136)</strong> obtained using commercial Hyperion IFS-3000 microbarometers. They are <strong>not</strong> measured performance figures for the InfraSocket prototype. InfraSocket's specific 4-port spatial averaging manifold and inlet configurations remain <em>Pending Experimental Validation</em>.
            </p>
          </div>
        </div>

        {/* Section 1: Why Wind Noise Matters */}
        <section className="space-y-6">
          <h2 id="why-wind-noise-is-a-problem" className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Activity className="w-6 h-6 text-sky-600 dark:text-sky-400" />
            1. Why Wind Noise Matters in Infrasound Monitoring
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700/70 space-y-2">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">Conceptual Explanation</h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                When air currents move across an exposed sensor port, chaotic swirling eddies generate localized pressure swings. In the low-frequency infrasound spectrum (&le; 20 Hz), these wind-induced pressure fluctuations can be orders of magnitude stronger than distant acoustic waves from volcanoes, bolides, or industrial explosions, completely submerging the signal of interest.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700/70 space-y-2">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">Aeroacoustic &amp; Spectral Reality</h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Atmospheric turbulence generates turbulent kinetic energy that follows Kolmogorov's &minus;5/3 power law across the boundary layer. Because turbulent pressure noise occupies the exact same 0.01–20 Hz band as true infrasound signals, conventional single-channel digital filtering (e.g., bandpass filtering) cannot separate wind turbulence from acoustic waves. Noise mitigation must take place pneumatically before acoustic-to-digital conversion.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Three Distinct Aeroacoustic Pressure Regimes</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              As established by Raspet et al. (2019) and synthesized by Albert et al. (2021), pressure fluctuations incident on a sensor fall into three distinct physical mechanisms:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 space-y-2">
                <span className="text-xs font-mono font-bold text-sky-600 dark:text-sky-400 uppercase">Mechanism 1</span>
                <h4 className="font-bold text-sm text-gray-900 dark:text-white">Stagnation Pressure Noise</h4>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                  Generated when turbulent wind collides with a physical structure (the sensor body, tripod, or enclosure). Kinetic energy converts to dynamic pressure (<span className="font-mono">P = &frac12;&rho;v&sup2;</span>) directly across the sensor orifice.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 space-y-2">
                <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase">Mechanism 2</span>
                <h4 className="font-bold text-sm text-gray-900 dark:text-white">Turbulence-Turbulence Interaction</h4>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                  Intrinsic atmospheric pressure fluctuations produced by the non-linear interaction of turbulent eddies with one another in the free air stream, existing independent of any physical obstacle.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 space-y-2">
                <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase">Mechanism 3</span>
                <h4 className="font-bold text-sm text-gray-900 dark:text-white">Turbulence-Shear Interaction</h4>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                  Intrinsic pressure fluctuations generated when turbulent velocity fluctuations interact with the mean vertical velocity gradient (wind shear, <span className="font-mono">&part;u/&part;z</span>) near the planetary surface boundary layer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Spatial Coherence */}
        <section className="space-y-6">
          <h2 id="key-insight-spatial-coherence" className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Layers className="w-6 h-6 text-sky-600 dark:text-sky-400" />
            2. The Physical Principle: Spatial Coherence vs. Eddy Incoherence
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            Effective pneumatic wind-noise reduction exploits the profound difference in <strong>spatial coherence</strong> between coherent acoustic waves and incoherent turbulent eddies:
          </p>

          <div className="overflow-x-auto border border-gray-200 dark:border-gray-700 rounded-xl">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-gray-50 dark:bg-gray-800/80 border-b border-gray-200 dark:border-gray-700">
                <tr>
                  <th className="py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Property</th>
                  <th className="py-3 px-4 font-semibold text-sky-700 dark:text-sky-300">Propagating Infrasound Acoustic Wave</th>
                  <th className="py-3 px-4 font-semibold text-amber-700 dark:text-amber-300">Atmospheric Turbulent Wind Noise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                <tr>
                  <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Spatial Coherence</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Coherent across tens to thousands of meters (&lambda; = 17 m at 20 Hz; &lambda; &approx; 34 km at 0.01 Hz)</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Rapidly decorrelates over distances greater than eddy diameter (often &lt; 1–3 meters)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Physical Wavefront</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Planar or spherical acoustic compressional wave with predictable phase velocity (c &approx; 343 m/s)</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Advected vortical eddies advecting with mean wind velocity (u &approx; 1–10 m/s)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Averaging Response</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Inlets in phase: acoustic pressure sums constructively (<span className="font-mono">P_avg &approx; P_signal</span>)</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Uncorrelated noise components cancel statistically (theoretically proportional to <span className="font-mono">1/&radic;N</span>)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: Published Research - Sandia Report Comparison */}
        <section className="space-y-6">
          <h2 id="sandia-research-comparison" className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Sliders className="w-6 h-6 text-sky-600 dark:text-sky-400" />
            3. Comparison of Wind Noise Reduction Systems (Sandia Report SAND2021-10136)
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            In August 2021, researchers Sarah Albert, Kristine Pankow, and Elizabeth Berg published a comprehensive empirical evaluation of temporary infrasound wind filters: <em>Comparison of Infrasound Wind Noise Reduction Systems for Use in Temporary Deployments</em> (Sandia National Laboratories, SAND2021-10136). The study evaluated co-located sensors recorded continuously from January through April 2019 at 100 Hz sampling rate across six distinct wind speed intervals (0–0.5 m/s up to 5–5.5 m/s).
          </p>

          <div className="overflow-x-auto border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                <tr>
                  <th className="py-3 px-4 font-semibold text-gray-900 dark:text-white">Wind Noise Reduction System</th>
                  <th className="py-3 px-4 font-semibold text-gray-900 dark:text-white">Reported Findings (Sandia Study)</th>
                  <th className="py-3 px-4 font-semibold text-gray-900 dark:text-white">Important Engineering Considerations</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                <tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/40">
                  <td className="py-3.5 px-4 font-semibold text-gray-900 dark:text-white">
                    Porous Hose Filter
                    <span className="block text-xs font-normal text-gray-500">4-port shroud + 4 garden soaker hoses (~30 m dia)</span>
                  </td>
                  <td className="py-3.5 px-4 text-emerald-700 dark:text-emerald-400 font-medium">
                    Approximately 2–15 dB overall noise reduction across 0.01–20 Hz
                  </td>
                  <td className="py-3.5 px-4 text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                    Greatest noise power reduction; however, may alter signal amplitude and frequency content depending on azimuth, incidence angle, and frequency.
                  </td>
                </tr>
                <tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/40">
                  <td className="py-3.5 px-4 font-semibold text-gray-900 dark:text-white">
                    Metal Mesh Dome
                    <span className="block text-xs font-normal text-gray-500">1 m diameter hemispherical wire mesh dome</span>
                  </td>
                  <td className="py-3.5 px-4 text-sky-700 dark:text-sky-400 font-medium">
                    Approximately 2–7 dB noise reduction across 0.01–20 Hz
                  </td>
                  <td className="py-3.5 px-4 text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                    Better preservation of waveform fidelity in the reported study; compact 1 m footprint; heavy (~50 lbs) requiring multi-person transport.
                  </td>
                </tr>
                <tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/40 bg-rose-50/30 dark:bg-rose-950/20">
                  <td className="py-3.5 px-4 font-semibold text-rose-800 dark:text-rose-300">
                    Bucket Arrangement
                    <span className="block text-xs font-normal text-rose-600 dark:text-rose-400">5-gallon bucket inverted over sensor shroud</span>
                  </td>
                  <td className="py-3.5 px-4 text-rose-700 dark:text-rose-400 font-medium">
                    No meaningful reduction below ~1 Hz; noise increase above ~1–3 Hz
                  </td>
                  <td className="py-3.5 px-4 text-rose-900 dark:text-rose-200 text-xs sm:text-sm">
                    <strong>Not recommended by the report.</strong> Destroys spatial averaging by reducing intake to a single drilled hole; induces turbulence &amp; cavity resonance.
                  </td>
                </tr>
                <tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/40">
                  <td className="py-3.5 px-4 font-semibold text-gray-900 dark:text-white">
                    Bare Sensor / Basic Shroud
                    <span className="block text-xs font-normal text-gray-500">Hyperion HF shroud without external filter</span>
                  </td>
                  <td className="py-3.5 px-4 text-gray-700 dark:text-gray-300 font-medium">
                    Smallest footprint and simplest setup (Baseline reference)
                  </td>
                  <td className="py-3.5 px-4 text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                    Provides minimal wind-noise attenuation. Acceptable primarily in high SNR scenarios (e.g., proximal volcanic explosions) or dense sheltering vegetation.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Deep Dive Subsections */}
          <div className="space-y-6 pt-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">System-by-System Technical Analysis</h3>

            {/* Porous Hose System */}
            <div className="p-5 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/90 space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">Porous Hose Filter</span>
                <h4 className="font-bold text-gray-900 dark:text-white">Averaging Efficacy vs. Waveform Distortion</h4>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Porous garden soaker hoses achieve spatial line-averaging because thousands of micro-perforations continuously integrate atmospheric pressure over an aperture spanning ~30 meters. This spatial integration yielded the highest raw noise suppression in the Sandia trial (2–15 dB across 0.01–20 Hz).
              </p>
              <div className="bg-amber-50 dark:bg-amber-950/30 p-3.5 rounded-xl border border-amber-200 dark:border-amber-800 text-xs sm:text-sm text-amber-900 dark:text-amber-300 space-y-2">
                <p className="font-semibold flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  Critical Limitations Documented in Research:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Acoustic Transfer Function:</strong> As established by Howard, Dillon, &amp; Shields (2007) and Albert et al. (2021), porous hoses exhibit an uncalibrated transfer function. Incident signals may suffer frequency-dependent attenuation or artificial resonant amplification depending on backazimuth and angle of incidence.</li>
                  <li><strong>Waveform Fidelity Risk:</strong> Uncontrolled amplitude and phase shifts introduce substantial errors into source yield calculation, source characterization, waveform inversion, and array beamforming.</li>
                  <li><strong>Environmental Vulnerability:</strong> Porous rubber degrades over extended deployments due to solar ultraviolet (UV) radiation, pore blockage from silt/rain mud, and physical chewing or trampling by wildlife or domestic animals.</li>
                  <li><strong>Fundamental Truth:</strong> <em>Lower measured background noise power does not automatically equal higher measurement accuracy if the target acoustic wave itself is distorted.</em></li>
                </ul>
              </div>
            </div>

            {/* Metal Mesh Dome */}
            <div className="p-5 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/90 space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300">Metal Mesh Dome</span>
                <h4 className="font-bold text-gray-900 dark:text-white">Aerodynamic Flow Deceleration &amp; Waveform Preservation</h4>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                The ~1 m diameter metal mesh dome evaluated by Sandia acts as a permeable aerodynamic boundary layer decelerator. As turbulent wind strikes the dome, flow velocities are reduced around the interior sensor without introducing pneumatic transmission lines or acoustic path length delays.
              </p>
              <ul className="list-disc pl-5 text-xs sm:text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li><strong>Reported Performance:</strong> Achieved approximately 2–7 dB noise reduction across 0.01–20 Hz.</li>
                <li><strong>Waveform Preservation:</strong> Unlike porous hoses, the open acoustic permeability of the mesh dome preserves transient signal amplitude and phase, rendering it Sandia's primary recommendation when waveform fidelity is paramount.</li>
                <li><strong>Deployment Drawbacks:</strong> Weighs approximately 50 lbs (23 kg) and requires at least two field engineers to transport. Transporting such a dome up steep slopes or into remote backcountry sites is logistically demanding. Lighter fabric wind domes (Raspet et al., 2019) represent a promising lightweight alternative for future study.</li>
              </ul>
            </div>

            {/* The Bucket Pitfall */}
            <div className="p-5 rounded-2xl border border-rose-200 dark:border-rose-900/60 bg-rose-50/20 dark:bg-rose-950/10 space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300">Bucket Arrangement</span>
                <h4 className="font-bold text-rose-900 dark:text-rose-200">The Single-Port Aeroacoustic Trap</h4>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Infield researchers have historically placed an inverted 5-gallon utility bucket over bare infrasound sensors as an informal rain and wind shroud. Albert et al. (2021) conducted the first rigorous evaluation of this practice and found it to be <strong>fundamentally counterproductive</strong>:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <h5 className="font-bold text-gray-900 dark:text-white mb-1">Spatial Collapse to a Single Point</h5>
                  <p className="text-gray-600 dark:text-gray-300">
                    A bare sensor with a multi-port shroud (such as 16 perimeter holes) provides modest inherent spatial averaging. Inverting a solid bucket with a single drilled cable hole collapses acoustic sampling into a single point in space, completely cancelling the sensor's inherent noise averaging.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <h5 className="font-bold text-gray-900 dark:text-white mb-1">Cavity Turbulence &amp; Noise Increase</h5>
                  <p className="text-gray-600 dark:text-gray-300">
                    Wind blowing across the bucket perimeter induces vortex shedding and cavity air circulation. The Sandia experiment recorded <strong>zero noise reduction between 0.01–1 Hz</strong> and a clear <strong>noise increase above 1–3 Hz</strong> across all wind speed regimes (even calm 0–0.5 m/s conditions).
                  </p>
                </div>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 italic">
                Note on terminology: In porous hose deployments, a bucket is often used merely as an inverted central weather housing over the central manifold while the hoses extend outward into the open air. This is mechanically distinct from using an inverted bucket as the primary wind filter directly over the sensor port.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Conceptual Visual Diagrams */}
        <section className="space-y-6">
          <h2 id="conceptual-diagrams" className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Layers className="w-6 h-6 text-sky-600 dark:text-sky-400" />
            4. Conceptual Architectural Diagrams
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">Comparative Flow &amp; Spatial Filtering Architectures</h3>
              <pre><code className="language-mermaid">flowchart TD{"\n"}{"    "}subgraph S1["1. Bare Sensor Reference"]{"\n"}{"        "}W1["Boundary Layer Wind\n(Turbulent Eddies)"] --&gt; SHROUD["Standard Shroud\n(Multi-Hole Perimeter)"]{"\n"}{"        "}SHROUD --&gt; SENS1["Sensor Port\n(Minimal Attenuation)"]{"\n"}{"    "}end{"\n"}{"\n"}{"    "}subgraph S2["2. Porous Hose Filter (30 m)"]{"\n"}{"        "}W2["Boundary Layer Wind"] --&gt; HOSE["Porous Soaker Hoses\n(Distributed Continuous Ports)"]{"\n"}{"        "}HOSE --&gt;|Spatial Line Integration| MANIFOLD["Central Manifold"]{"\n"}{"        "}MANIFOLD --&gt;|High Noise Reduction 2-15 dB| SENS2["Sensor Port\n(Altered Transfer Function)"]{"\n"}{"    "}end{"\n"}{"\n"}{"    "}subgraph S3["3. Metal Mesh Dome (1 m)"]{"\n"}{"        "}W3["Boundary Layer Wind"] --&gt; DOME["Porous Wire Mesh Dome\n(Flow Deceleration)"]{"\n"}{"        "}DOME --&gt;|Boundary Layer Displacement| SENS3["Sensor Port\n(2-7 dB Noise Reduction\nPreserved Waveform Fidelity)"]{"\n"}{"    "}end{"\n"}{"\n"}{"    "}subgraph S4["4. Inverted Bucket Pitfall"]{"\n"}{"        "}W4["Boundary Layer Wind"] --&gt; BUCKET["Solid 5-Gal Bucket\n(Single Cable Hole)"]{"\n"}{"        "}BUCKET --&gt;|Vortex Shedding / Local Turbulence| SENS4["Sensor Port\n(Noise Amplification above 1-3 Hz)"]{"\n"}{"    "}end{"\n"}</code></pre>
            </div>

            <div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">Porous Hose Spatial Filter Integration Concept</h3>
              <pre><code className="language-mermaid">flowchart LR{"\n"}{"    "}subgraph ACOUSTIC["Coherent Infrasonic Wave"]{"\n"}{"        "}WAVE["Planar Acoustic Front\n(Wavelength &gt; 100 m)\nIn-phase pressure across aperture"]{"\n"}{"    "}end{"\n"}{"\n"}{"    "}subgraph TURBULENCE["Incoherent Boundary Layer Wind"]{"\n"}{"        "}EDDY["Turbulent Velocity Eddies\n(Scale &lt; 3 m)\nRandom uncorrelated local pressures"]{"\n"}{"    "}end{"\n"}{"\n"}{"    "}subgraph SPATIAL_FILTER["Porous Soaker Hose Assembly"]{"\n"}{"        "}HOSE_INLETS["Distributed Micro-Pores\nContinuous line integration"]{"\n"}{"    "}end{"\n"}{"\n"}{"    "}WAVE --&gt;|Constructive In-Phase Summation| HOSE_INLETS{"\n"}{"    "}EDDY --&gt;|Destructive Spatial Averaging| HOSE_INLETS{"\n"}{"\n"}{"    "}HOSE_INLETS --&gt;|Internal Acoustic Conduction| MAN["Central Summing Manifold\nEddies average towards zero\nAcoustic signal reinforces"]{"\n"}{"    "}MAN --&gt; PORT["Differential Pressure Port A\n(Atmospheric Sensing Port)"]{"\n"}</code></pre>
            </div>

            {/* Conceptual Schematic of Sandia PSD Findings */}
            <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700/80 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-gray-900 dark:text-white">
                  Conceptual Spectral Difference Relative to Bare Sensor (Based on SAND2021-10136)
                </h3>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300">
                  Published Literature Schematic
                </span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Schematic representation of relative noise reduction (<span className="font-mono">&Delta;PSD = PSD_bare &minus; PSD_filter</span> in dB) across 0.01–20 Hz as described by Albert et al. (2021). Positive decibels denote noise reduction; negative values indicate noise amplification.
              </p>
              
              <div className="space-y-3 font-mono text-xs">
                <div className="space-y-1">
                  <div className="flex justify-between text-emerald-700 dark:text-emerald-400 font-semibold">
                    <span>Porous Hose Filter (~30 m)</span>
                    <span>+2 to +15 dB Noise Reduction (Consistent across 0.01–20 Hz)</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-sky-700 dark:text-sky-400 font-semibold">
                    <span>Metal Mesh Dome (1 m dia)</span>
                    <span>+2 to +7 dB Noise Reduction (Preserves Waveform Fidelity)</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-sky-500 h-full rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-rose-700 dark:text-rose-400 font-semibold">
                    <span>5-Gallon Bucket Over Shroud</span>
                    <span>0 dB (&lt; 1 Hz) &rarr; Negative &Delta;dB (&gt; 1–3 Hz, Net Noise Increase)</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-rose-500 h-full rounded-full" style={{ width: '15%' }}></div>
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-gray-500 dark:text-gray-400 italic">
                *Note: Reproduced conceptually for engineering context. Not measured from the InfraSocket prototype hardware.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Exact Mandatory Section Title */}
        <section className="space-y-6 pt-4 border-t border-gray-200 dark:border-gray-800">
          <div className="p-6 rounded-2xl bg-sky-50/60 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 space-y-4">
            <h2 id="research-based-design-considerations-for-infrasocket" className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              Research-Based Design Considerations for InfraSocket
            </h2>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              Synthesizing the empirical findings of Albert et al. (2021), Raspet et al. (2019), and Howard et al. (2007) yields six mandatory engineering principles guiding InfraSocket's pneumatic hardware roadmap:
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                <span><strong>Wind-noise reduction is essential:</strong> Reliable low-frequency atmospheric pressure measurement in the target 0.01–20 Hz band is physically impossible in outdoor environments without front-end pneumatic noise suppression.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                <span><strong>Porous hose trade-offs:</strong> While porous soaker hoses offer substantial raw noise reduction (2–15 dB in Sandia tests), their uncharacterized transfer function introduces directional distortion and frequency attenuation that must be calibrated.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                <span><strong>Mesh-based wind protection:</strong> Permeable wire or fabric mesh structures represent a superior engineering avenue when waveform fidelity, source characterization, and amplitude accuracy are prioritized.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                <span><strong>Holistic system evaluation:</strong> A pneumatic wind filter cannot be analyzed in isolation. It acts as an acoustic transmission line coupled to interconnecting tubing, the central manifold, the reference volume leak, and the differential sensor diaphragm.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                <span><strong>Simultaneous noise and signal characterization:</strong> Noise power reduction (in dB) and acoustic signal preservation must always be measured together. Minimizing background noise is useless if the target transient waveform is attenuated or filtered out.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                <span><strong>Empirical prototype validation:</strong> InfraSocket must conduct its own comparative experimental campaign (bare vs. manifold vs. porous line) before finalizing any production inlet configuration.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 6: Existing InfraSocket Design & Implementation Alternatives */}
        <section className="space-y-6">
          <h2 id="infrasocket-prototype-design" className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Sliders className="w-6 h-6 text-sky-600 dark:text-sky-400" />
            6. InfraSocket Prototype Manifold &amp; Evaluation Options
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            Rather than immediately replacing InfraSocket's proposed compact 4-port spatial averaging manifold, the project documents three implementation alternatives to be empirically evaluated:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 space-y-2">
              <span className="text-xs font-mono font-bold text-sky-600 dark:text-sky-400 uppercase">Option A (Baseline)</span>
              <h4 className="font-bold text-sm text-gray-900 dark:text-white">Compact 4-Port Rosette</h4>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                4 radial tubes (1–2 m length) feeding a central mixing manifold with discrete inlet ports. Retains low deployment footprint and known geometry, with expected moderate noise reduction at frequencies above 1 Hz.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 space-y-2">
              <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase">Option B (High Attenuation)</span>
              <h4 className="font-bold text-sm text-gray-900 dark:text-white">Porous Soaker Hose Arms</h4>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Connecting 4 commercial soaker hoses (5–10 m length) to the central manifold. Provides enhanced spatial averaging across windy terrain, requiring experimental transfer function calibration against reference acoustic pulses.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 space-y-2">
              <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase">Option C (High Fidelity)</span>
              <h4 className="font-bold text-sm text-gray-900 dark:text-white">Compact Mesh Shroud</h4>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                A lightweight 0.5–1.0 m wire mesh dome enclosing the central sensor node. Decelerates boundary layer flow while eliminating acoustic tube delay, providing optimal fidelity for regional waveform inversion.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto border border-gray-200 dark:border-gray-700 rounded-xl">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                <tr>
                  <th className="py-3 px-4 font-semibold text-gray-900 dark:text-white">Parameter</th>
                  <th className="py-3 px-4 font-semibold text-gray-900 dark:text-white">Professional IMS Scale</th>
                  <th className="py-3 px-4 font-semibold text-sky-700 dark:text-sky-300">InfraSocket Initial Prototype</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                <tr>
                  <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Manifold Diameter</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">18–70 meters per sensor</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">1–5 meters (engineering prototype range)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Inlet Ports</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">96–144 impedance-matched ports</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">4 discrete ports or 4 porous lines</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Tubing Diameter</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">25–50 mm rigid stainless/poly pipe</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">6–12 mm flexible silicone / PVC</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Acoustic Damping</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Precision capillary acoustic resistors</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Porous sintered bronze / capillary inserts</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Footer Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-200 dark:border-gray-800 text-xs text-gray-500 dark:text-gray-400">
          <div>
            <em>See also: <Link to="/03-hardware/hardware-overview" className="hover:underline text-sky-600 dark:text-sky-400">Hardware Overview</Link> | <Link to="/03-hardware/pressure-sensing" className="hover:underline text-sky-600 dark:text-sky-400">Pressure Sensing</Link> | <Link to="/09-calibration-validation/validation-methodology" className="hover:underline text-sky-600 dark:text-sky-400">Validation Methodology</Link></em>
          </div>
          <div>InfraSocket Research Engineering Documentation</div>
        </div>
      </div>
    </main>
  );
}