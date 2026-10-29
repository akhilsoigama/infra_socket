import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Search, 
  Cpu, 
  Wrench, 
  AlertCircle, 
  Sparkles
} from 'lucide-react';

export default function Page01OverviewSocioEconomicImpact() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto p-4 sm:p-6 md:p-10 relative">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-500 dark:text-gray-400 mb-6 sm:mb-8">
          <Link to="/" className="hover:underline text-sky-600 dark:text-sky-400">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/01-overview/key-features" className="hover:underline text-sky-600 dark:text-sky-400">Overview</Link>
          <span className="mx-2">/</span>
          <span className="font-medium text-gray-900 dark:text-gray-200">Socio-Economic Impact &amp; Viability</span>
        </nav>

        <article className="markdown-body">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950/70 text-sky-800 dark:text-sky-300 text-xs font-semibold border border-sky-200 dark:border-sky-800">
              Impact &amp; Scalability
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-3">
            Socio-Economic Impact &amp; Viability
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            InfraSocket is engineered as an accessible, open-science research platform designed to democratize infrasound monitoring. By lowering capital requirements from institutional millions to prototype affordability, it bridges educational discovery, environmental research, and sustainable local production.
          </p>

          {/* MAIN VISUAL ARCHITECTURE CARD */}
          <div className="not-prose my-8 p-5 sm:p-7 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/80 shadow-xs">
            
            {/* Top Root Node: Infra Socket Hardware */}
            <div className="flex justify-center mb-6">
              <div className="relative group w-full max-w-xs bg-slate-50 dark:bg-gray-900/60 rounded-2xl border border-sky-200 dark:border-sky-800/80 p-5 text-center shadow-xs hover:shadow-md transition-all">
                <div className="w-32 h-20 mx-auto mb-3 overflow-hidden rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center p-1 border border-gray-200 dark:border-gray-700">
                  <img 
                    src="/assets/hardware/infrasocket-node-concept.jpg" 
                    alt="InfraSocket Prototype Enclosure" 
                    className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white tracking-wide">Infra Socket</h3>
                <p className="text-xs text-sky-600 dark:text-sky-400 font-medium mt-1">
                  Locally Assembled Research Platform
                </p>
              </div>
            </div>

            {/* Tree Branch Line Indicator */}
            <div className="hidden md:flex justify-center mb-6 relative">
              <div className="w-3/4 h-6 border-b border-l border-r border-sky-200 dark:border-sky-800 rounded-b-xl relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-sky-200 dark:bg-sky-800"></div>
              </div>
            </div>

            {/* Four Impact Pillars Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              
              {/* Card 1: Education & Access */}
              <div className="bg-slate-50 dark:bg-gray-900/60 rounded-xl border border-slate-200 dark:border-gray-700 p-4 text-center flex flex-col items-center justify-between shadow-xs hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-950 flex items-center justify-center text-sky-600 dark:text-sky-400 mb-2">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm">Education &amp; Access</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Hands-on learning &amp; experiments
                  </p>
                </div>
              </div>

              {/* Card 2: Research Enablement */}
              <div className="bg-slate-50 dark:bg-gray-900/60 rounded-xl border border-slate-200 dark:border-gray-700 p-4 text-center flex flex-col items-center justify-between shadow-xs hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-950 flex items-center justify-center text-sky-600 dark:text-sky-400 mb-2">
                  <Search className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm">Research Enablement</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Pressure data for lab studies
                  </p>
                </div>
              </div>

              {/* Card 3: Local Value Creation */}
              <div className="bg-slate-50 dark:bg-gray-900/60 rounded-xl border border-slate-200 dark:border-gray-700 p-4 text-center flex flex-col items-center justify-between shadow-xs hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-950 flex items-center justify-center text-sky-600 dark:text-sky-400 mb-2">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm">Local Value Creation</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Fabrication, integration &amp; software
                  </p>
                </div>
              </div>

              {/* Card 4: Maintainable Design */}
              <div className="bg-slate-50 dark:bg-gray-900/60 rounded-xl border border-slate-200 dark:border-gray-700 p-4 text-center flex flex-col items-center justify-between shadow-xs hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-950 flex items-center justify-center text-sky-600 dark:text-sky-400 mb-2">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm">Maintainable Design</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Modular blocks &amp; documentation
                  </p>
                </div>
              </div>

            </div>

            {/* Bottom Roadmap Section */}
            <div className="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-gray-900/60 border border-slate-200 dark:border-gray-700">
              <div className="flex flex-col lg:flex-row items-center gap-4">
                
                <div className="lg:border-r lg:border-gray-200 dark:lg:border-gray-700 lg:pr-5 shrink-0 text-center lg:text-left">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white leading-tight">
                    Viability &amp;<br className="hidden lg:block" /> Roadmap
                  </h4>
                </div>

                <div className="flex-1 w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
                  {[
                    { label: 'Lab\nValidation', desc: 'Bench testing' },
                    { label: 'Pilot\nDeployment', desc: 'Field trials' },
                    { label: 'User\nFeedback', desc: 'Iterative tuning' },
                    { label: 'Repeatable\nBuild', desc: 'Standard assembly' },
                    { label: 'Long-term\nMaintenance', desc: 'Ongoing support' },
                  ].map((step, idx) => (
                    <div key={idx} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-2.5 text-center">
                      <span className="text-xs font-bold text-gray-800 dark:text-gray-200 whitespace-pre-line leading-tight block">
                        {step.label}
                      </span>
                      <span className="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5 block">
                        {step.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expansion Pill */}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-gray-200 dark:border-gray-800">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-sky-50 dark:bg-sky-950/70 text-sky-700 dark:text-sky-300 text-xs font-semibold border border-sky-200 dark:border-sky-800">
                  <Sparkles className="w-3.5 h-3.5" />
                  Future expansion: application-specific industrial acoustic monitoring
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs border border-gray-200 dark:border-gray-700">
                  <AlertCircle className="w-3.5 h-3.5 text-sky-500" />
                  Performance and usability require experimental validation
                </span>
              </div>
            </div>

          </div>

          {/* DETAILED NARRATIVE & BREAKDOWN */}
          <h2 id="core-pillars">The Four Core Impact Pillars</h2>
          <p>
            Traditional infrasound monitoring has historically been restricted to national research labs, intergovernmental verification networks (such as CTBTO IMS), and large geophysics facilities due to equipment costs ranging from tens of thousands to millions of dollars. InfraSocket rethinks this equation through four foundational pillars:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-4 sm:p-5 rounded-xl border border-gray-200 dark:border-gray-700/80 bg-white dark:bg-gray-800/80">
              <h3 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                1. Education &amp; Access (Hands-on Learning)
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                Enables university laboratories, physics programs, and applied research teams to access functional atmospheric microbarometer hardware. Students learn analog front-end principles, signal processing (FFT, spectrograms), and edge computing with tangible, live data rather than theoretical simulations.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl border border-gray-200 dark:border-gray-700/80 bg-white dark:bg-gray-800/80">
              <h3 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <Search className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                2. Research Enablement (Laboratory &amp; Regional Studies)
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                Supplies calibrated continuous pressure time-series in the sub-audible range (0.01–20 Hz target). Local institutions can conduct atmospheric research, monitor severe convective storms, detect regional quarry blasts, and analyze urban low-frequency acoustic noise footprints.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl border border-gray-200 dark:border-gray-700/80 bg-white dark:bg-gray-800/80">
              <h3 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <Cpu className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                3. Local Value Creation (Local Fabrication &amp; Assembly)
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                Rather than importing proprietary, closed-box sensor arrays, InfraSocket emphasizes standard COTS components, 3D printed noise-reduction manifolds, local PCB fabrication, and open-source software stack development. This builds indigenous technical know-how.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl border border-gray-200 dark:border-gray-700/80 bg-white dark:bg-gray-800/80">
              <h3 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <Wrench className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                4. Maintainable Design (Modular &amp; Well-Documented)
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                Hardware modules (Pressure Sensor, ADC digitizer, Reference Chamber, Raspberry Pi 5 SBC) are independently swappable. If a sensor drifts or requires recalibration, the module can be serviced locally without scrapping the entire installation.
              </p>
            </div>
          </div>

          <hr />
          <p>
            <em>See also: <Link to="/01-overview/proposed-solution" className="text-sky-600 dark:text-sky-400 hover:underline">Proposed Solution</Link> | <Link to="/01-overview/real-world-use-cases" className="text-sky-600 dark:text-sky-400 hover:underline">Real-World Use Cases</Link> | <Link to="/16-roadmap/phase-plan" className="text-sky-600 dark:text-sky-400 hover:underline">Phase Plan</Link></em>
          </p>
        </article>
      </div>
    </main>
  );
}
