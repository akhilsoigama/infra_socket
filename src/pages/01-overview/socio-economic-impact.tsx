import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Search, 
  Cpu, 
  Wrench, 
  ArrowRight, 
  AlertCircle, 
  Sparkles
} from 'lucide-react';

export default function Page01OverviewSocioEconomicImpact() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto p-6 md:p-12 relative">
      <div>
        <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
          <Link to="/" className="hover:underline">Home</Link> /
          <Link to="/01-overview/key-features" className="hover:underline ml-1">Overview</Link> /
          <span className="font-medium text-gray-900 dark:text-gray-200 ml-1">Socio-Economic Impact &amp; Viability</span>
        </nav>

        <article className="markdown-body max-w-4xl">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-3">
            Socio-Economic Impact &amp; Viability
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            InfraSocket is engineered as an accessible, open-science research platform designed to democratize infrasound monitoring. By lowering capital requirements from institutional millions to prototype affordability, it bridges educational discovery, environmental research, and sustainable local production.
          </p>

          {/* MAIN VISUAL ARCHITECTURE CARD (Direct replica of diagram from image) */}
          <div className="not-prose my-10 p-6 md:p-8 rounded-3xl bg-gradient-to-b from-sky-50/70 via-white to-amber-50/40 dark:from-gray-900 dark:via-gray-900/90 dark:to-gray-800/60 border border-sky-100 dark:border-gray-800 shadow-xl shadow-sky-500/5 transition-all">
            
            {/* Top Root Node: Infra Socket Hardware */}
            <div className="flex justify-center mb-6">
              <div className="relative group w-full max-w-xs bg-white dark:bg-gray-800/90 rounded-2xl border-2 border-amber-400 dark:border-amber-500/80 p-5 text-center shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 transition-all duration-300">
                <div className="w-36 h-24 mx-auto mb-3 overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-900/60 flex items-center justify-center p-1 border border-gray-200 dark:border-gray-700">
                  <img 
                    src="../assets/hardware/infrasocket-node-concept.jpg" 
                    alt="InfraSocket Prototype Enclosure" 
                    className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white tracking-wide">Infra Socket</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-1">
                  locally assembled research platform
                </p>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-amber-400 text-white flex items-center justify-center shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                </div>
              </div>
            </div>

            {/* Tree Branch Line Indicator */}
            <div className="hidden md:flex justify-center mb-8 relative">
              <div className="w-3/4 h-8 border-b-2 border-l-2 border-r-2 border-gray-300 dark:border-gray-700 rounded-b-2xl relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-gray-300 dark:bg-gray-700"></div>
                <div className="absolute -bottom-2 left-0 w-2 h-2 rounded-full bg-amber-400"></div>
                <div className="absolute -bottom-2 left-1/3 w-2 h-2 rounded-full bg-sky-400"></div>
                <div className="absolute -bottom-2 right-1/3 w-2 h-2 rounded-full bg-amber-400"></div>
                <div className="absolute -bottom-2 right-0 w-2 h-2 rounded-full bg-indigo-400"></div>
              </div>
            </div>

            {/* Four Impact Pillars Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              
              {/* Card 1: Education & Access */}
              <div className="bg-white dark:bg-gray-800/80 rounded-2xl border-2 border-amber-300/80 dark:border-amber-500/40 p-5 text-center flex flex-col items-center justify-between shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <div className="w-14 h-14 rounded-2xl bg-amber-100 dark:bg-amber-950/60 flex items-center justify-center text-amber-600 dark:text-amber-400 mb-3 shadow-inner">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-base">Education &amp; Access</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium">
                    Hands on learning and experiments
                  </p>
                </div>
              </div>

              {/* Card 2: Research Enablement */}
              <div className="bg-white dark:bg-gray-800/80 rounded-2xl border-2 border-amber-300/80 dark:border-amber-500/40 p-5 text-center flex flex-col items-center justify-between shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <div className="w-14 h-14 rounded-2xl bg-sky-100 dark:bg-sky-950/60 flex items-center justify-center text-sky-600 dark:text-sky-400 mb-3 shadow-inner">
                  <Search className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-base">Research Enablement</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium">
                    Pressure data for laboratory studies
                  </p>
                </div>
              </div>

              {/* Card 3: Local Value Creation */}
              <div className="bg-white dark:bg-gray-800/80 rounded-2xl border-2 border-amber-300/80 dark:border-amber-500/40 p-5 text-center flex flex-col items-center justify-between shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <div className="w-14 h-14 rounded-2xl bg-amber-100 dark:bg-amber-950/60 flex items-center justify-center text-amber-500 dark:text-amber-400 mb-3 shadow-inner">
                  <Cpu className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-base">Local Value Creation</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium">
                    Fabrication, Integration and software
                  </p>
                </div>
              </div>

              {/* Card 4: Maintainable Design */}
              <div className="bg-white dark:bg-gray-800/80 rounded-2xl border-2 border-amber-300/80 dark:border-amber-500/40 p-5 text-center flex flex-col items-center justify-between shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <div className="w-14 h-14 rounded-2xl bg-indigo-100 dark:bg-indigo-950/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-3 shadow-inner">
                  <Wrench className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-base">Maintainable Design</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium">
                    Replaceable module and documentation
                  </p>
                </div>
              </div>

            </div>

            {/* Bottom Roadmap Section (Viability and Roadmap Container) */}
            <div className="p-5 md:p-6 rounded-2xl bg-amber-100/70 dark:bg-amber-950/40 border border-amber-300/80 dark:border-amber-800/50">
              <div className="flex flex-col lg:flex-row items-center gap-6">
                
                {/* Section Title with Vertical Divider */}
                <div className="lg:border-r-2 lg:border-amber-400/70 dark:lg:border-amber-700/60 lg:pr-6 shrink-0 text-center lg:text-left">
                  <h4 className="text-xl font-extrabold text-gray-900 dark:text-white leading-tight">
                    Viability And<br className="hidden lg:block" /> Roadmap
                  </h4>
                </div>

                {/* Pipeline Flow Steps */}
                <div className="flex-1 w-full flex flex-wrap md:flex-nowrap items-center justify-between gap-2.5">
                  {[
                    { label: 'Lab\nValidation', desc: 'Bench characterization' },
                    { label: 'College\nPilot', desc: 'Academic deployment' },
                    { label: 'User\nFeedback', desc: 'Iterative optimization' },
                    { label: 'Repeatable\nBuild', desc: 'Documented assembly' },
                    { label: 'Maintenance', desc: 'Long-term support' },
                  ].map((step, idx, arr) => (
                    <div key={idx} className="flex items-center flex-1 min-w-[120px]">
                      <div className="w-full bg-slate-200/90 dark:bg-gray-800 border border-slate-300 dark:border-gray-700 rounded-xl py-3 px-2 text-center shadow-xs">
                        <span className="text-xs md:text-sm font-bold text-gray-800 dark:text-gray-200 whitespace-pre-line leading-tight block">
                          {step.label}
                        </span>
                      </div>
                      {idx < arr.length - 1 && (
                        <ArrowRight className="w-4 h-4 text-gray-400 dark:text-gray-500 mx-1 shrink-0" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Expansion Pill inside roadmap */}
              <div className="mt-4 flex justify-end">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-200/80 dark:bg-amber-900/60 text-amber-900 dark:text-amber-200 text-xs font-semibold border border-amber-300 dark:border-amber-700">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                  Future expansion: application - specific industrial research
                </span>
              </div>
            </div>

            {/* Bottom Validation Status Pill */}
            <div className="mt-6 flex justify-start">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800 text-xs font-semibold">
                <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                Proposed benefits: Performance and usability require experimental validation
              </span>
            </div>

          </div>

          {/* DETAILED NARRATIVE & BREAKDOWN */}
          <h2 id="core-pillars">The Four Core Impact Pillars</h2>
          <p>
            Traditional infrasound monitoring has historically been restricted to national labs, intergovernmental verification networks (such as CTBTO IMS), and large geophysics facilities due to equipment costs ranging from tens of thousands to millions of dollars. InfraSocket rethinks this equation through four foundational pillars:
          </p>

          <div className="space-y-6 my-6">
            <div className="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-amber-500" />
                1. Education &amp; Access (Hands-on Learning)
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                Enables university laboratories, physics programs, and engineering hackathons to access real atmospheric microbarometer hardware. Students learn analog front-end principles, signal processing (FFT, spectrograms), and edge computing with tangible, live data rather than theoretical simulations.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <Search className="w-5 h-5 text-sky-500" />
                2. Research Enablement (Laboratory &amp; Regional Studies)
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                Supplies calibrated continuous pressure time-series in the sub-audible range (0.01–20 Hz target). Local institutions can conduct atmospheric research, monitor severe convective storms, detect regional quarry blasts, and analyze urban low-frequency acoustic noise footprints.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <Cpu className="w-5 h-5 text-amber-500" />
                3. Local Value Creation (Local Fabrication &amp; Assembly)
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                Rather than importing proprietary, closed-box sensor arrays, InfraSocket emphasizes standard COTS components, 3D printed noise-reduction manifolds, local PCB fabrication, and open-source software stack development. This builds indigenous technical know-how.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <Wrench className="w-5 h-5 text-indigo-500" />
                4. Maintainable Design (Modular &amp; Well-Documented)
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                Hardware modules (Pressure Sensor, ADC digitizer, Reference Chamber, Raspberry Pi 5 SBC) are independently swappable. If a sensor drifts or requires recalibration, the module can be serviced locally without scrapping the entire installation.
              </p>
            </div>
          </div>

          <h2 id="phased-roadmap">Viability &amp; Deployment Roadmap</h2>
          <p>
            To transform the design into a viable, dependable platform, InfraSocket follows a five-stage progressive rollout:
          </p>

          <table>
            <thead>
              <tr>
                <th>Phase</th>
                <th>Stage Name</th>
                <th>Key Deliverables</th>
                <th>Validation Objective</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>01</strong></td>
                <td><strong>Lab Validation</strong></td>
                <td>Bench testing, sensitivity measurement, static step response, and noise-floor characterization.</td>
                <td>Verify core electrical and acoustic responsiveness.</td>
              </tr>
              <tr>
                <td><strong>02</strong></td>
                <td><strong>College Pilot</strong></td>
                <td>Deploy 1–2 test nodes in an academic laboratory or university rooftop setting.</td>
                <td>Assess real-world telemetry, daily thermal drift, and continuous operation.</td>
              </tr>
              <tr>
                <td><strong>03</strong></td>
                <td><strong>User Feedback</strong></td>
                <td>Collect usability reports from students, instructors, and researchers.</td>
                <td>Iterate dashboard interface, documentation, and mechanical enclosure ergonomics.</td>
              </tr>
              <tr>
                <td><strong>04</strong></td>
                <td><strong>Repeatable Build</strong></td>
                <td>Publish validated BOM, Gerber files, 3D CAD files, and automated deployment scripts.</td>
                <td>Enable third parties to independently assemble functional nodes.</td>
              </tr>
              <tr>
                <td><strong>05</strong></td>
                <td><strong>Maintenance</strong></td>
                <td>Continuous firmware updates, calibration protocols, and community sensor network synchronization.</td>
                <td>Long-term data integrity and multi-node correlation.</td>
              </tr>
            </tbody>
          </table>

          <div className="my-6 p-4 rounded-xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 text-sky-900 dark:text-sky-200 text-sm">
            <h4 className="font-bold flex items-center gap-1.5 text-base mb-1">
              <Sparkles className="w-4 h-4 text-sky-600 dark:text-sky-400" />
              Future Expansion: Application-Specific Industrial Research
            </h4>
            <p className="text-xs leading-relaxed opacity-95">
              Following academic validation, the platform is structured for expansion into industrial safety, such as early detection of industrial equipment vibrations, pipeline micro-leaks, mining quarry monitoring, and localized volcanic hazard screening.
            </p>
          </div>

          <hr />
          <p>
            <em>See also: <Link to="/01-overview/proposed-solution">Proposed Solution</Link> | <Link to="/01-overview/real-world-use-cases">Real-World Use Cases</Link> | <Link to="/12-cost-and-feasibility/scalability">Scalability</Link> | <Link to="/16-roadmap/phase-plan">Phase Plan</Link></em>
          </p>
        </article>
      </div>
    </main>
  );
}
