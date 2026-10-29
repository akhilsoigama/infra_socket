import { Link } from 'react-router-dom';
import {
  Wind,
  Thermometer,
  Activity,
  Sliders,
  Waves,
  CloudRain,
  Radio,
  ArrowRight,
  ShieldCheck,
  Target,
  Wrench,
  Gauge
} from 'lucide-react';

export default function Page01OverviewProblemStatement() {
  const challenges = [
    {
      num: 1,
      title: 'Detecting Weak Pressure Fluctuations',
      desc: 'Resolving small sub-Pascal pressure signals while minimizing measurement noise floor.',
      icon: Waves
    },
    {
      num: 2,
      title: 'Wind & Environmental Noise',
      desc: 'Reducing dynamic interference from turbulent wind eddies and local atmospheric disturbances.',
      icon: Wind
    },
    {
      num: 3,
      title: 'Temperature Variations & Sensor Drift',
      desc: 'Characterizing thermal coefficients and zero-point baseline drift over day-night cycles.',
      icon: Thermometer
    },
    {
      num: 4,
      title: 'Mechanical & Electronic Integration',
      desc: 'Integrating the differential sensing mechanism, pneumatic reference, and low-noise electronics.',
      icon: Wrench
    },
    {
      num: 5,
      title: 'Low-Frequency Response & Pressure Equalization',
      desc: 'Controlling slow barometric equalization while preserving the target 0.01–20 Hz response band.',
      icon: Sliders
    },
    {
      num: 6,
      title: 'Long-Term Stability',
      desc: 'Maintaining repeatable measurements and limiting cumulative zero-point offset over weeks of operation.',
      icon: Activity
    },
    {
      num: 7,
      title: 'Environmental Protection',
      desc: 'Protecting the internal sensor and pneumatic seals from moisture, dust ingress, and temperature extremes.',
      icon: ShieldCheck
    },
    {
      num: 8,
      title: 'Calibration & Validation',
      desc: 'Experimentally measuring sensitivity, noise floor, frequency response, and stability against known references.',
      icon: Gauge
    }
  ];

  return (
    <main className="flex-1 min-w-0 overflow-y-auto p-4 sm:p-6 md:p-10 relative">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-500 dark:text-gray-400 mb-6 sm:mb-8">
          <Link to="/" className="hover:underline text-sky-600 dark:text-sky-400">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/01-overview/key-features" className="hover:underline text-sky-600 dark:text-sky-400">Overview</Link>
          <span className="mx-2">/</span>
          <span className="font-medium text-gray-900 dark:text-gray-200">Problem Statement</span>
        </nav>

        <article className="markdown-body">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950/70 text-sky-800 dark:text-sky-300 text-xs font-semibold border border-sky-200 dark:border-sky-800">
              Atmospheric Microbarometry
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-semibold border border-gray-200 dark:border-gray-700">
              0.01–20 Hz Target Band
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
            Problem Statement
          </h1>

          {/* CORE PROBLEM DEFINITION BOX */}
          <div className="not-prose my-6 p-5 sm:p-7 rounded-2xl bg-sky-50/70 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800/80 shadow-xs">
            <span className="text-xs uppercase tracking-wider font-bold text-sky-700 dark:text-sky-400 block mb-2">
              Core Problem Definition
            </span>
            <p className="text-base sm:text-lg font-medium text-gray-900 dark:text-gray-100 leading-relaxed italic">
              &ldquo;Develop an affordable atmospheric microbarometer targeting approximately 0.01–20 Hz. Weak pressure signals can be masked by wind and environmental noise, while temperature variations and sensor drift affect measurement stability. The system must integrate pressure sensing, data acquisition and real-time visualization, with laboratory characterization of sensitivity, noise floor, frequency response and long-term stability.&rdquo;
            </p>
          </div>

          {/* 3 HIGHLIGHT CARDS: Target Band, Applications, System */}
          <div className="not-prose my-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Card 1: Target Frequency Band */}
            <div className="p-5 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/80 shadow-xs hover:shadow-md transition-all">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-lg bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center">
                  <Target className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-base">Target Frequency Band</h3>
              </div>
              <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-2 mt-3">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1 shrink-0"></span>
                  <span><strong>Approximately 0.01–20 Hz</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1 shrink-0"></span>
                  <span>Design target — requires laboratory validation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1 shrink-0"></span>
                  <span>Detectable sub-Pascal dynamic pressure changes</span>
                </li>
              </ul>
            </div>

            {/* Card 2: Potential Research Applications */}
            <div className="p-5 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/80 shadow-xs hover:shadow-md transition-all">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-lg bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center">
                  <Radio className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-base">Research Applications</h3>
              </div>
              <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-2 mt-3">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1 shrink-0"></span>
                  <span><strong>Atmospheric studies</strong> (gravity waves &amp; frontal passages)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1 shrink-0"></span>
                  <span><strong>Natural-event research</strong> (volcanoes, bolides, storms)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1 shrink-0"></span>
                  <span><strong>Human-made acoustic sources</strong> (quarries, launches)</span>
                </li>
              </ul>
            </div>

            {/* Card 3: System to Be Developed */}
            <div className="p-5 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/80 shadow-xs hover:shadow-md transition-all">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-lg bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center">
                  <Wrench className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-base">System Architecture</h3>
              </div>
              <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-2 mt-3">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1 shrink-0"></span>
                  <span>Differential-pressure sensing &amp; pneumatic reference</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1 shrink-0"></span>
                  <span>Temperature monitoring, wind interface &amp; enclosure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1 shrink-0"></span>
                  <span>High-speed acquisition, live FFT &amp; data logging</span>
                </li>
              </ul>
            </div>
          </div>

          <h2 id="why-infrasound-matters">Why Infrasound Measurement Matters</h2>
          <p>
            Sound, as commonly perceived by human ears, spans 20 Hz to 20,000 Hz. Below 20 Hz lies <strong>infrasound</strong>: acoustic pressure waves propagating through the atmosphere over vast planetary distances with minimal acoustic attenuation. Monitoring this band reveals three core domains of activity:
          </p>

          <div className="not-prose my-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-gray-800/60 border border-slate-200 dark:border-gray-700">
              <div className="w-8 h-8 rounded-lg bg-sky-100 dark:bg-sky-900/60 text-sky-600 dark:text-sky-300 flex items-center justify-center mb-2">
                <Waves className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-sm text-gray-900 dark:text-white">Natural Pressure Waves</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Volcanic explosive vents, bolide / meteor atmospheric entry, and ocean swell microbaroms.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-gray-800/60 border border-slate-200 dark:border-gray-700">
              <div className="w-8 h-8 rounded-lg bg-sky-100 dark:bg-sky-900/60 text-sky-600 dark:text-sky-300 flex items-center justify-center mb-2">
                <CloudRain className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-sm text-gray-900 dark:text-white">Atmospheric &amp; Weather Signals</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Severe thunderstorms, tornadoes, squall lines, gravity waves, and convective turbulence.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-gray-800/60 border border-slate-200 dark:border-gray-700">
              <div className="w-8 h-8 rounded-lg bg-sky-100 dark:bg-sky-900/60 text-sky-600 dark:text-sky-300 flex items-center justify-center mb-2">
                <Radio className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-sm text-gray-900 dark:text-white">Human-Made Acoustic Sources</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Rocket launches, mining quarry detonations, industrial gas venting, and heavy machinery vibrations.
              </p>
            </div>
          </div>

          {/* FROM CHALLENGE TO SOLUTION (Responsive flow) */}
          <h2 id="challenge-to-solution">From Challenge to Solution</h2>
          <div className="not-prose my-6 p-5 sm:p-6 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/80 shadow-xs">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 block mb-4">
              Physical Challenges &amp; Engineering Resolution
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {[
                { label: 'Weak Atmospheric\nPressure Change', tag: 'Signal', desc: 'Sub-Pascal amplitude' },
                { label: 'Wind / Background\nNoise', tag: 'Turbulence', desc: 'Masks low-Hz signals' },
                { label: 'Temperature &\nSensor Drift', tag: 'Thermal', desc: 'Slow baseline shift' },
                { label: 'Measurement &\nCalibration Limits', tag: 'Resolution', desc: 'ADC & noise floor' },
                { label: 'Laboratory\nValidation', tag: 'Verification', desc: 'Characterization rig' }
              ].map((step, idx, arr) => (
                <div key={idx} className="relative flex flex-col justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-gray-900/60 border border-slate-200 dark:border-gray-700">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-sky-600 dark:text-sky-400 block mb-1">
                      {step.tag}
                    </span>
                    <span className="text-xs font-bold text-gray-900 dark:text-white whitespace-pre-line leading-tight block">
                      {step.label}
                    </span>
                    <span className="text-[11px] text-gray-500 dark:text-gray-400 mt-1 block">
                      {step.desc}
                    </span>
                  </div>
                  {idx < arr.length - 1 && (
                    <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-gray-400">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 8 KEY CHALLENGES (Responsive grid with unified colors) */}
          <h2 id="the-8-key-challenges">The 8 Key Engineering Challenges</h2>
          <p>
            Designing a robust atmospheric infrasound sensor requires addressing eight fundamental engineering hurdles:
          </p>

          <div className="not-prose my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {challenges.map((c) => {
              const IconComp = c.icon;
              return (
                <div
                  key={c.num}
                  className="p-5 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/80 shadow-xs hover:shadow-md transition-all flex items-start gap-3.5"
                >
                  <span className="w-8 h-8 rounded-xl bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 font-bold text-sm flex items-center justify-center shrink-0 border border-sky-200 dark:border-sky-800">
                    {c.num}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <IconComp className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
                      <h3 className="font-bold text-gray-900 dark:text-white text-sm md:text-base leading-snug">
                        {c.title}
                      </h3>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-300 mt-1.5 leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <h2 id="engineering-scope-and-limitations">Engineering Scope &amp; Boundaries</h2>
          <ul>
            <li>The system is an <strong>accessible research instrument</strong>, not a direct replacement for multi-million dollar treaty networks (e.g. CTBTO IMS stations).</li>
            <li>The <strong>0.01–20 Hz bandwidth is an engineering design target</strong> that requires bench verification with dynamic pressure sources.</li>
            <li>Spatial wind-noise reduction performance is subject to local turbulence correlations, geometry, and environmental installation conditions.</li>
          </ul>

          <hr />
          <p>
            <em>Next: See the architectural solution in <Link to="/01-overview/proposed-solution" className="text-sky-600 dark:text-sky-400 hover:underline">Proposed Solution</Link> or examine the <Link to="/01-overview/technology-stack" className="text-sky-600 dark:text-sky-400 hover:underline">Technology Stack</Link>.</em>
          </p>
        </article>
      </div>
    </main>
  );
}