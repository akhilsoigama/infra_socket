import { Link } from 'react-router-dom';
import {
  Cpu,
  Wrench,
  Gauge,
  Box,
  Wind,
  Activity
} from 'lucide-react';

export default function Page16RoadmapPhasePlan() {
  const phase1Milestones = [
    {
      num: 1,
      title: 'Hardware Design & Components',
      desc: 'Designing pressure-sensing mechanism, transducer selection, and low-noise electronics.',
      icon: Cpu
    },
    {
      num: 2,
      title: 'Mechanical Integration',
      desc: 'Building the pneumatic assembly, reference chamber, and spatial wind-noise interface.',
      icon: Wrench
    },
    {
      num: 3,
      title: 'Calibration & Test Setup',
      desc: 'Establishing dynamic test setup for the 0.01–20 Hz target band characterization.',
      icon: Gauge
    }
  ];

  const phase2Milestones = [
    {
      num: 4,
      title: 'Environmental Enclosure',
      desc: 'Integrating system into enclosure, adding ingress protection and characterizing thermal behavior.',
      icon: Box
    },
    {
      num: 5,
      title: 'Field Testing & Noise Filter',
      desc: 'Testing outdoors to evaluate environmental interference, inlet attenuation, and measurement drift.',
      icon: Wind
    },
    {
      num: 6,
      title: 'Data Acquisition & Calibration',
      desc: 'Final sensitivity calibration, real-time waveform testing, and complete system handover.',
      icon: Activity
    }
  ];

  return (
    <main className="flex-1 min-w-0 overflow-y-auto p-4 sm:p-6 md:p-10 relative">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-500 dark:text-gray-400 mb-6 sm:mb-8">
          <Link to="/" className="hover:underline text-sky-600 dark:text-sky-400">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/16-roadmap/phase-plan" className="hover:underline text-sky-600 dark:text-sky-400">Roadmap</Link>
          <span className="mx-2">/</span>
          <span className="font-medium text-gray-900 dark:text-gray-200">Implementation Roadmap &amp; Milestones</span>
        </nav>

        <article className="markdown-body">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950/70 text-sky-800 dark:text-sky-300 text-xs font-semibold border border-sky-200 dark:border-sky-800">
              Product Development Phases
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-3">
            Implementation Roadmap &amp; Milestones
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            The InfraSocket development lifecycle is organized into two primary implementation phases spanning six sequential engineering milestones, followed by field calibration and acceptance gates.
          </p>

          {/* TWO-PHASE ROADMAP */}
          <div className="not-prose my-8 space-y-6">
            
            {/* PHASE 01 */}
            <div className="p-5 sm:p-7 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/80 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-xl bg-sky-600 text-white font-bold text-xs uppercase tracking-wider">
                    PHASE 01
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white m-0">
                    DESIGN &amp; PROTOTYPING
                  </h2>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-sky-50 dark:bg-sky-950/70 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                  Core Engineering
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {phase1Milestones.map((m) => {
                  const IconComp = m.icon;
                  return (
                    <div
                      key={m.num}
                      className="p-5 rounded-xl bg-slate-50 dark:bg-gray-900/60 border border-slate-200 dark:border-gray-700 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="w-7 h-7 rounded-lg bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 font-bold text-xs flex items-center justify-center border border-sky-200 dark:border-sky-800">
                            0{m.num}
                          </span>
                          <IconComp className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                        </div>
                        <h3 className="font-bold text-sm md:text-base text-gray-900 dark:text-white leading-snug">
                          {m.title}
                        </h3>
                        <p className="text-xs text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                          {m.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* PHASE 02 */}
            <div className="p-5 sm:p-7 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/80 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-xl bg-sky-700 text-white font-bold text-xs uppercase tracking-wider">
                    PHASE 02
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white m-0">
                    TESTING &amp; OPTIMIZATION
                  </h2>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-sky-50 dark:bg-sky-950/70 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                  Verification &amp; Handover
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {phase2Milestones.map((m) => {
                  const IconComp = m.icon;
                  return (
                    <div
                      key={m.num}
                      className="p-5 rounded-xl bg-slate-50 dark:bg-gray-900/60 border border-slate-200 dark:border-gray-700 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="w-7 h-7 rounded-lg bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 font-bold text-xs flex items-center justify-center border border-sky-200 dark:border-sky-800">
                            0{m.num}
                          </span>
                          <IconComp className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                        </div>
                        <h3 className="font-bold text-sm md:text-base text-gray-900 dark:text-white leading-snug">
                          {m.title}
                        </h3>
                        <p className="text-xs text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                          {m.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          <h2 id="deliverables-breakdown">Deliverables &amp; Acceptance Gates</h2>
          
          <h3 id="milestone-1-3-readiness">Design &amp; Prototyping Gates (Milestones 1–3)</h3>
          <ul>
            <li><strong>Traceable Component Integration:</strong> Integration of Amphenol DLVR-F50D differential sensor, Raspberry Pi 5 platform, and MCP9808 temperature breakout.</li>
            <li><strong>Mechanical Pneumatics:</strong> Assembly of airtight reference volume with fine-pitch leak restriction for thermal/barometric drift rejection.</li>
            <li><strong>Controlled Dynamic Calibrator:</strong> Sealed dynamic test chamber generating repeatable sinusoidal pressure variations down to 0.01 Hz.</li>
          </ul>

          <h3 id="milestone-4-6-readiness">Testing &amp; Optimization Gates (Milestones 4–6)</h3>
          <ul>
            <li><strong>Enclosure &amp; Ingress Defense:</strong> Weather-resistant IP-rated casing with heat isolation and passive convection paths (zero cooling fans).</li>
            <li><strong>Outdoor Co-Location Testing:</strong> Baseline recording comparing bare inlet vs. spatial-averaging wind filter to quantify acoustic turbulence attenuation.</li>
            <li><strong>Acquisition Handover:</strong> Validated Python I²C sample streaming pipeline linked to desktop React/Electron telemetry UI.</li>
          </ul>

          <hr />
          <p>
            <em>See also: <Link to="/01-overview/socio-economic-impact" className="text-sky-600 dark:text-sky-400 hover:underline">Socio-Economic Impact &amp; Viability</Link> | <Link to="/09-calibration-validation/validation-methodology" className="text-sky-600 dark:text-sky-400 hover:underline">Validation Methodology</Link> | <Link to="/16-roadmap/future-scope" className="text-sky-600 dark:text-sky-400 hover:underline">Future Scope</Link></em>
          </p>
        </article>
      </div>
    </main>
  );
}