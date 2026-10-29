import { Link } from 'react-router-dom';
import {
  Wind,
  Gauge,
  Cpu,
  Monitor,
  Database,
  ShieldCheck,
  Sparkles,
  Layers,
  FlaskConical
} from 'lucide-react';

export default function Page01OverviewProposedSolution() {
  const pipelineStages = [
    {
      num: 1,
      title: 'Atmospheric Inlet & Wind Interface',
      desc: 'Collects atmospheric pressure through a spatial-averaging wind-noise reduction inlet.',
      icon: Wind
    },
    {
      num: 2,
      title: 'Pneumatic Assembly & DLVR-F50D',
      desc: 'Measures differential pressure using a sealed reference chamber and controlled restriction.',
      icon: Gauge
    },
    {
      num: 3,
      title: 'Raspberry Pi 5 & Data Acquisition',
      desc: 'Reads calibrated digital sensor data over I²C and streams samples to the host via USB.',
      icon: Cpu
    },
    {
      num: 4,
      title: 'InfraSocket Desktop Application',
      desc: 'Displays real-time waveforms, calculates FFT spectra/PSD, and records sessions.',
      icon: Monitor
    },
    {
      num: 5,
      title: 'Measurement Records & Diagnostics',
      desc: 'Stores structured test metadata, verifies sample continuity, and reports sensor status.',
      icon: Database
    }
  ];

  const validationPillars = [
    { title: 'Frequency Response', desc: 'Characterizing 0.01–20 Hz magnitude and phase transfer function' },
    { title: 'Pressure-Noise Spectrum', desc: 'Determining spectral noise floor and band-limited RMS counts' },
    { title: 'Sensitivity Calibration', desc: 'Benchmarking digital counts against precision reference pressure' },
    { title: 'Temperature Drift', desc: 'Measuring zero-point offset across ambient thermal variations' },
    { title: 'Repeatability', desc: 'Ensuring consistent, reproducible data across multi-hour sessions' }
  ];

  return (
    <main className="flex-1 min-w-0 overflow-y-auto p-4 sm:p-6 md:p-10 relative">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-500 dark:text-gray-400 mb-6 sm:mb-8">
          <Link to="/" className="hover:underline text-sky-600 dark:text-sky-400">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/01-overview/key-features" className="hover:underline text-sky-600 dark:text-sky-400">Overview</Link>
          <span className="mx-2">/</span>
          <span className="font-medium text-gray-900 dark:text-gray-200">Proposed Solution</span>
        </nav>

        <article className="markdown-body">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950/70 text-sky-800 dark:text-sky-300 text-xs font-semibold border border-sky-200 dark:border-sky-800">
              System Architecture &amp; Methodology
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-3">
            Proposed Solution &amp; Engineering Differentiation
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            InfraSocket addresses the challenge of accessible low-frequency atmospheric pressure measurement by combining a specialized pneumatic reference assembly, a commercial digital differential sensor, high-accuracy edge sample timing, and desktop visualization.
          </p>

          {/* CORE SYSTEM SUMMARY BOX */}
          <div className="not-prose my-6 p-5 sm:p-7 rounded-2xl bg-sky-50/70 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800/80 shadow-xs">
            <span className="text-xs uppercase tracking-wider font-bold text-sky-700 dark:text-sky-400 block mb-2">
              System Overview
            </span>
            <p className="text-base sm:text-lg font-medium text-gray-900 dark:text-gray-100 leading-relaxed italic">
              &ldquo;The InfraSocket system consists of a DLVR differential-pressure sensor, a pneumatically adjustable reference assembly, and desktop acquisition software. This prototype is evaluated for its frequency response, sensitivity, noise, and stability characteristics.&rdquo;
            </p>
          </div>

          {/* 5-STAGE END-TO-END PIPELINE */}
          <h2 id="end-to-end-pipeline">5-Stage System Flow</h2>
          <div className="not-prose my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {pipelineStages.map((stage) => {
              const IconComp = stage.icon;
              return (
                <div
                  key={stage.num}
                  className="p-4 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-7 h-7 rounded-lg bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 font-bold text-xs flex items-center justify-center border border-sky-200 dark:border-sky-800">
                        0{stage.num}
                      </span>
                      <IconComp className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-xs md:text-sm leading-snug">
                      {stage.title}
                    </h3>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
                      {stage.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 3 CORE VALUE & DIFFERENTIATION PILLARS */}
          <h2 id="engineering-differentiation">Engineering Differentiation &amp; Platform Value</h2>
          <div className="not-prose my-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Pillar 1 */}
            <div className="p-5 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2 text-sky-600 dark:text-sky-400">
                  <Sparkles className="w-5 h-5" />
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm md:text-base">
                    Tunable Pneumatics
                  </h3>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                  A <strong>tunable pneumatic reference assembly</strong> paired with <strong>calibrated digital DLVR sensing</strong>, bypassing noisy analog amplification circuits in favor of direct digital integration.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-5 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2 text-sky-600 dark:text-sky-400">
                  <ShieldCheck className="w-5 h-5" />
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm md:text-base">
                    Validation &amp; Repeatability
                  </h3>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                  <strong>Documented procedures</strong> to evaluate frequency response, wind-noise reduction, sensitivity, and drift, supported by reproducible mechanical assembly and calibration tests.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-5 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2 text-sky-600 dark:text-sky-400">
                  <Layers className="w-5 h-5" />
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm md:text-base">
                    Accessible Research Value
                  </h3>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                  A <strong>locally assembled, serviceable platform</strong> engineered specifically for academic laboratories, environmental monitoring teams, and exploratory infrasound research.
                </p>
              </div>
            </div>

          </div>

          {/* VALIDATION PLAN PILLARS */}
          <h2 id="validation-plan">Validation Plan: Five Evaluation Domains</h2>
          <div className="not-prose my-6 p-5 sm:p-6 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/80 shadow-xs">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4 flex items-center gap-2">
              <FlaskConical className="w-4 h-4 text-sky-500" />
              Laboratory Validation Plan
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {validationPillars.map((p, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 dark:bg-gray-900/60 border border-slate-200 dark:border-gray-700 text-center">
                  <span className="text-xs font-bold text-sky-600 dark:text-sky-400 block mb-1">
                    0{idx + 1}
                  </span>
                  <span className="text-xs font-bold text-gray-900 dark:text-gray-100 block mb-1">
                    {p.title}
                  </span>
                  <span className="text-[10px] text-gray-500 dark:text-gray-400 block leading-tight">
                    {p.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <h2 id="solution-components-detail">Detailed Component Architecture</h2>
          
          <h3 id="1-differential-pressure-sensing-with-dlvr">1. Differential Pressure Sensing (DLVR-F50D)</h3>
          <p>
            The prototype utilizes an <strong>Amphenol DLVR-F50D-E1ND-C-NI3F</strong> sensor featuring integrated piezoresistive micro-machined silicon technology.
          </p>
          <ul>
            <li><strong>Port A (Atmospheric Path):</strong> Direct exposure to the external pressure field via the wind-noise reduction manifold.</li>
            <li><strong>Port B (Reference Path):</strong> Connected to a sealed reference chamber via a controlled restriction (capillary / needle leak).</li>
            <li><strong>Frequency-Dependent Equalization:</strong> Slow barometric weather drifts (below 0.01 Hz) slowly equalize across both ports, preventing transducer saturation, while rapid infrasonic fluctuations (0.01–20 Hz) produce measurable differential displacement.</li>
          </ul>

          <h3 id="2-spatial-averaging-wind-noise-interface">2. Spatial-Averaging Wind Noise Reduction</h3>
          <p>
            Wind turbulence causes dynamic, localized pressure eddies across bare inlet ports. By connecting multiple spatially distributed inlet ports to a central summing manifold:
          </p>
          <ul>
            <li>Incoherent, turbulent eddies across separate ports partially cancel out through spatial averaging.</li>
            <li>Long-wavelength infrasonic waves (&gt;17 m at 20 Hz, &gt;340 m at 1 Hz) remain correlated across the compact aperture and enter both ports coherently.</li>
          </ul>

          <h3 id="3-acquisition-processing-raspberry-pi-5">3. Edge Acquisition &amp; Processing (Raspberry Pi 5)</h3>
          <p>
            The Raspberry Pi 5 single-board computer acts as the dedicated acquisition node:
          </p>
          <ul>
            <li>Reads digital 14/16-bit pressure data directly via I²C with hardware interrupt timing.</li>
            <li>Eliminates analog line noise by digitizing directly on the sensor breakout at regulated 3.3 V.</li>
            <li>Buffers and streams timestamped frames to the desktop application over USB.</li>
          </ul>

          <h3 id="4-desktop-application-visualization">4. Desktop Application &amp; Diagnostics</h3>
          <p>
            Built with <strong>React, TypeScript, Electron, and Recharts</strong>:
          </p>
          <ul>
            <li>Displays real-time time-series waveforms and live FFT power spectra (PSD).</li>
            <li>Provides session recording, export to CSV/JSON, and telemetry diagnostic monitoring.</li>
            <li>Computes spectral features for downstream anomaly detection.</li>
          </ul>

          <hr />
          <p>
            <em>See also: <Link to="/02-system-architecture/architecture" className="text-sky-600 dark:text-sky-400 hover:underline">Technical Architecture</Link> | <Link to="/01-overview/technology-stack" className="text-sky-600 dark:text-sky-400 hover:underline">Technology Stack &amp; Feasibility</Link> | <Link to="/09-calibration-validation/validation-methodology" className="text-sky-600 dark:text-sky-400 hover:underline">Validation Methodology</Link></em>
          </p>
        </article>
      </div>
    </main>
  );
}