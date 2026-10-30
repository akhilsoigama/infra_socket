import { Link } from 'react-router-dom';
import {
  ShieldAlert, CheckCircle2, XCircle,
  Wind, Layers
} from 'lucide-react';

export default function Page13ResearchSandiaWindNoiseStudy() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto p-6 md:p-12 relative">
      <div>
        {/* Breadcrumb Navigation */}
        <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
          <Link to="/" className="hover:underline">Home</Link> /{' '}
          <Link to="/13-research/background" className="hover:underline">Research</Link> /{' '}
          <span className="font-medium text-gray-900 dark:text-gray-200">Sandia WNRS Study (SAND2021-10136)</span>
        </nav>

        <article className="markdown-body max-w-4xl">
          {/* Header Metadata Pill */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-sky-100 text-sky-800 dark:bg-sky-900/60 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
              SANDIA REPORT • SAND2021-10136
            </span>
            <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
              Printed August 2021
            </span>
            <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
              NNSA DNN R&D Funded
            </span>
          </div>

          <h1>Comparison of Infrasound Wind Noise Reduction Systems for Temporary Deployments</h1>

          {/* Authors & Institutional Attribution Card */}
          <div className="my-6 p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/70 dark:bg-gray-800/50 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Authors:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Sarah Albert</strong> (Sandia National Laboratories)<br />
                  <strong>Kristine Pankow</strong> (University of Utah)<br />
                  <strong>Elizabeth Berg</strong> (Sandia National Laboratories)
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Operating Institution & Collaborators:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Prepared by <strong>Sandia National Laboratories</strong> (Albuquerque, NM & Livermore, CA)<br />
                  Operated for U.S. DOE / NNSA under Contract DE-NA0003525.<br />
                  Collaborators: LANL, LLNL, MSTS, PNNL, and Univ. of Utah.
                </p>
              </div>
            </div>
          </div>

          {/* Executive Abstract */}
          <h2 id="abstract">Abstract</h2>
          <blockquote>
            <p>
              <strong>Official Abstract:</strong> Infrasound, or low frequency sound ≤ 20 Hz, is produced by a variety of
              natural and anthropogenic sources. Wind also generates signals within this frequency band and serves as a
              persistent source of infrasonic noise. Infrasound sensors measure pressure fluctuations, which scale with the
              ambient density and velocity fluctuations of ground winds.
            </p>
            <p className="mt-2">
              Here we compare four different wind noise reduction systems, or <em>“filters”</em>, and make recommendations for
              their use in temporary infrasound deployments. Our results show that there are two filters that are especially
              effective at reducing wind noise:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>(1)</strong> A Hyperion high frequency (HF) shroud with a 1 m diameter metal mesh dome placed on top, and</li>
              <li><strong>(2)</strong> A Hyperion Four Port Garden Hose shroud with 4 Miracle-Gro Soaker System garden hoses.</li>
            </ul>
            <p className="mt-2 text-rose-700 dark:text-rose-400 font-semibold">
              ⚠️ Critical Finding: Placing a 5-gallon bucket over the HF wind shroud should NOT be done, as it provides a negligible
              decrease in noise up to ~1 Hz and then causes an increase in noise above 1–3 Hz.
            </p>
            <p className="mt-2">
              We conclude that it is up to the researcher to determine which of the other filters is best for their needs based on
              location and expense. We anticipate this study will be used as a resource for future deployments when a wind noise
              reduction method is necessary but only needed for a limited time period.
            </p>
          </blockquote>

          {/* Acronyms & Key Definitions */}
          <h2 id="acronyms-and-definitions">Acronyms and Definitions</h2>
          <table>
            <thead>
              <tr>
                <th style={{ width: '22%' }}>Abbreviation</th>
                <th>Definition & Technical Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>CTBTO PrepCom</strong></td>
                <td>Preparatory Commission for the Comprehensive Nuclear-Test-Ban Treaty Organization</td>
              </tr>
              <tr>
                <td><strong>IMS</strong></td>
                <td>International Monitoring System (global 60-station infrasound network)</td>
              </tr>
              <tr>
                <td><strong>HF</strong></td>
                <td>High Frequency (Hyperion IFS-3000 sensor shroud with 16 inlet ports)</td>
              </tr>
              <tr>
                <td><strong>PSD</strong></td>
                <td>Power Spectral Density (measure of signal power versus frequency, computed in dB via 10 log₁₀ x)</td>
              </tr>
              <tr>
                <td><strong>SNR</strong></td>
                <td>Signal-to-Noise Ratio (ratio of acoustic infrasound amplitude to background wind noise)</td>
              </tr>
              <tr>
                <td><strong>WNRS</strong></td>
                <td>Wind Noise Reduction System (spatial averaging filters or physical turbulence barriers)</td>
              </tr>
            </tbody>
          </table>

          {/* Section 1: Introduction */}
          <h2 id="1-introduction">1. Introduction</h2>
          <p>
            Infrasound is low frequency sound <strong>≤ 20 Hz</strong>. It is produced by a variety of natural and anthropogenic
            sources including volcanoes, earthquakes, chemical explosions, and rockets. Monitoring these sources is vital for
            national security, nuclear treaty verification, and natural hazard mitigation, requiring high-fidelity waveforms.
          </p>
          <p>
            However, atmospheric turbulence presents severe challenges. As articulated by Raspet et al. (2019):
          </p>
          <blockquote>
            <p className="italic">
              “The greatest impediment to the detection and analysis of infrasound signals are the intrinsic pressure fluctuations
              due to air turbulence, known as wind noise, always present in the atmosphere.”
            </p>
          </blockquote>
          <p>
            For the low frequencies of the infrasound band (0.01–20 Hz), wind noise easily dominates the signal of interest.
            Two primary classes of wind noise exist:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="p-4 rounded-lg border border-sky-200 dark:border-sky-900 bg-sky-50/50 dark:bg-sky-950/20">
              <div className="flex items-center gap-2 text-sky-800 dark:text-sky-300 font-bold mb-2">
                <Wind className="w-5 h-5" /> Stagnation Pressures
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Generated via atmospheric turbulence directly interacting and impacting an object (i.e., the infrasound sensor body or shroud itself).
              </p>
            </div>
            <div className="p-4 rounded-lg border border-indigo-200 dark:border-indigo-900 bg-indigo-50/50 dark:bg-indigo-950/20">
              <div className="flex items-center gap-2 text-indigo-800 dark:text-indigo-300 font-bold mb-2">
                <Layers className="w-5 h-5" /> Intrinsic Pressures
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Divided into <strong>turbulence-turbulence interaction</strong> (turbulent eddies interacting within the atmosphere)
                and <strong>turbulence-shear interaction</strong> (turbulence interacting with strong wind shear near the ground surface).
              </p>
            </div>
          </div>

          <h3 id="historical-wind-noise-reduction">Historical Background & System Evolution</h3>
          <ul>
            <li>
              <strong>Daniels (1959) Line Microphone:</strong> The first infrasound spatial filter used a 602 m long tapered pipe
              with 100 openings. While it attenuated wind noise below 1 Hz, the extreme linear geometry introduced severe directional
              bias, making it unsuitable for backazimuth calculation of unknown sources.
            </li>
            <li>
              <strong>CTBTO IMS Rosette Pipe Arrays:</strong> Modern International Monitoring System stations utilize large metal
              rosette pipe arrays (18–70 m diameter) with 96–144 summing ports. They achieve up to <strong>20 dB</strong> of wind noise
              reduction via spatial averaging over a massive area (Hedlin & Raspet, 2003; Raspet et al., 2019). However, they are high
              cost, require heavy civil infrastructure, and have a massive physical footprint—unfit for temporary deployments.
            </li>
            <li>
              <strong>Porous Hoses:</strong> Commonly used in temporary campaign deployments because they are lightweight and affordable.
              However, Walker & Hedlin (2010) advised against them because the hoses degrade rapidly and possess an unknown frequency
              response. Howard et al. (2007) revealed that porous hoses can distort signals—attenuating or amplifying waves depending
              on backazimuth, angle of incidence, and frequency.
            </li>
            <li>
              <strong>Porous Wind Domes:</strong> Wind domes reduce noise by up to <strong>25 dB</strong> while offering solid environmental
              protection (Noble et al., 2014; Raspet et al., 2019), though lower-frequency noise attenuation demands larger dome volumes.
            </li>
            <li>
              <strong>The 5-Gallon Bucket Method:</strong> An informal, anecdotal technique observed across research groups and field
              deployments where an inverted plastic bucket is placed over the sensor. Prior to this Sandia report, no peer-reviewed quantitative
              characterization of its acoustic impact existed.
            </li>
          </ul>

          {/* Section 2: Experiment Setup */}
          <h2 id="2-experiment-setup">2. Experiment Setup</h2>
          <p>
            The field experiment was conducted to evaluate four portable wind noise reduction systems side-by-side against a control sensor.
            Five co-located <strong>Hyperion Technology Group (HTG) IFS-3000</strong> infrasound sensors were connected to a
            high-precision <strong>Trimble Reftek RT-130 digitizer</strong>.
          </p>

          <div className="p-4 my-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 text-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <span className="text-gray-500 dark:text-gray-400 block text-xs">Sensor Model</span>
                <span className="font-semibold text-gray-900 dark:text-gray-100">HTG IFS-3000 (x5)</span>
              </div>
              <div>
                <span className="text-gray-500 dark:text-gray-400 block text-xs">Digitizer</span>
                <span className="font-semibold text-gray-900 dark:text-gray-100">Trimble Reftek RT-130</span>
              </div>
              <div>
                <span className="text-gray-500 dark:text-gray-400 block text-xs">Sampling Rate</span>
                <span className="font-semibold text-gray-900 dark:text-gray-100">100 Hz</span>
              </div>
              <div>
                <span className="text-gray-500 dark:text-gray-400 block text-xs">Recording Period</span>
                <span className="font-semibold text-gray-900 dark:text-gray-100">Jan 1 – Apr 22, 2019 (112 days)</span>
              </div>
            </div>
          </div>

          <h3 id="test-configurations">Sensor Test Configurations (Figure 2-1)</h3>
          <table>
            <thead>
              <tr>
                <th style={{ width: '12%' }}>Sensor #</th>
                <th style={{ width: '28%' }}>System Name</th>
                <th>Physical Setup & Details</th>
                <th style={{ width: '18%' }}>Footprint</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Sensor 1</strong></td>
                <td><strong>Bare Sensor (Control)</strong></td>
                <td>Standard Hyperion HF shroud (16 small ports around its circumference). Reference sensor for comparison.</td>
                <td>~0.3 m</td>
              </tr>
              <tr>
                <td><strong>Sensor 2</strong></td>
                <td><strong>Duplicate HF Sensor</strong></td>
                <td>Second sensor with HF shroud to confirm baseline consistency (results identical to Sensor 1).</td>
                <td>~0.3 m</td>
              </tr>
              <tr>
                <td><strong>Sensor 3</strong></td>
                <td><strong>Metal Mesh Dome</strong></td>
                <td>Hyperion HF shroud with a 1 m diameter rigid metal mesh dome positioned directly on top. Weight ~50 lbs.</td>
                <td>1.0 m diameter</td>
              </tr>
              <tr>
                <td><strong>Sensor 4</strong></td>
                <td><strong>5-Gallon Bucket</strong></td>
                <td>Hyperion HF shroud covered by an inverted 5-gallon plastic bucket with a single drilled side hole for cabling.</td>
                <td>~0.35 m</td>
              </tr>
              <tr>
                <td><strong>Sensor 5</strong></td>
                <td><strong>Porous Hose Filter</strong></td>
                <td>Hyperion Four Port Garden Hose shroud connected to four Miracle-Gro Soaker System garden hoses with push-on fittings. Bucket used purely as weather enclosure.</td>
                <td>~30 m diameter</td>
              </tr>
            </tbody>
          </table>

          <p className="text-sm text-gray-600 dark:text-gray-400 italic">
            * Note: In situ wind speed data was logged at the test site using an anemometer. Due to irregular logging rates, wind velocity
            data was resampled to 0.0008 Hz (20 minutes per sample) using linear interpolation.
          </p>

          <pre><code className="language-mermaid">{`graph LR
    subgraph SENSORS["Co-Located Experiment Network (Reftek RT-130 Digitizer @ 100 Hz)"]
        S1["Sensor 1: Bare HF Shroud\\n(Baseline Control)"]
        S3["Sensor 3: 1m Metal Mesh Dome\\n(Over HF Shroud)"]
        S4["Sensor 4: 5-Gal Inverted Bucket\\n(Single Cable Hole)"]
        S5["Sensor 5: 4-Port Shroud +\\n4x Miracle-Gro Soaker Hoses\\n(~30m Footprint)"]
    end

    WIND["In Situ Wind Sensor\\n(Resampled to 20 min/sample)"] -.->|Correlated Wind Bins| SENSORS
    SENSORS --> CALC["Hann Window 20-min PSD\\n50% Overlap\\n10 log10(x) dB"]
    CALC --> DELTA["Noise Reduction = PSD(Bare) - PSD(Filter)"]
`}</code></pre>

          {/* Section 3: Methods */}
          <h2 id="3-methods">3. Methods</h2>
          <p>
            Following the established methodology of Hedlin & Walker (2003), continuous atmospheric wind speed measurements were
            segregated into six discrete velocity intervals:
          </p>
          <div className="flex flex-wrap gap-2 my-4">
            {['0.0 – 0.5 m/s', '1.0 – 1.5 m/s', '2.0 – 2.5 m/s', '3.0 – 3.5 m/s', '4.0 – 4.5 m/s', '5.0 – 5.5 m/s'].map((bin, i) => (
              <span key={i} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md text-sm font-mono text-gray-800 dark:text-gray-200">
                Bin {i + 1}: {bin}
              </span>
            ))}
          </div>

          <h3 id="spectral-analysis-workflow">Spectral Analysis Workflow</h3>
          <ol>
            <li>
              <strong>PSD Computation:</strong> For each wind speed interval and each filter system, power spectral densities (PSDs)
              were calculated using 20-minute Hann windows with 50% overlap.
            </li>
            <li>
              <strong>Decibel Transformation:</strong> PSD values were converted to decibels using:
              <br />
              <code>PSD (dB) = 10 · log₁₀(x)</code>, where <em>x</em> is the calculated power spectral density.
            </li>
            <li>
              <strong>Noise Reduction Calculation:</strong> For every filter and wind velocity interval, the mean PSD was calculated.
              The overall wind noise reduction achieved by each system was computed by subtracting each filter’s PSD from the bare sensor baseline:
              <br />
              <code>ΔPSD_reduction = PSD_bare_sensor − PSD_filter</code>
            </li>
          </ol>

          {/* Section 4: Results */}
          <h2 id="4-results">4. Results</h2>
          <p>
            The spectral analysis across the 0.01–20 Hz infrasound band revealed stark contrasts between the systems across all six wind velocity bins:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            {/* Porous Hose */}
            <div className="p-4 rounded-xl border border-emerald-300 dark:border-emerald-800 bg-emerald-50/60 dark:bg-emerald-950/20">
              <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                Porous Hose System
              </div>
              <ul className="text-sm space-y-1.5 text-gray-700 dark:text-gray-300">
                <li><strong>Attenuation:</strong> <strong>2 to 15 dB</strong> reduction across entire 0.01–20 Hz band.</li>
                <li><strong>Performance:</strong> Greatest overall noise decrease; consistent with Raspet et al. (2019).</li>
                <li><strong>Peak Band:</strong> Substantial attenuation between 0.5 Hz and 10 Hz.</li>
              </ul>
            </div>

            {/* Metal Mesh Dome */}
            <div className="p-4 rounded-xl border border-sky-300 dark:border-sky-800 bg-sky-50/60 dark:bg-sky-950/20">
              <div className="flex items-center gap-2 text-sky-800 dark:text-sky-300 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                Metal Mesh Dome (1 m)
              </div>
              <ul className="text-sm space-y-1.5 text-gray-700 dark:text-gray-300">
                <li><strong>Attenuation:</strong> <strong>2 to 7 dB</strong> reduction between 0.01 and 20 Hz.</li>
                <li><strong>Consistency:</strong> Steady attenuation across low and mid wind velocities.</li>
                <li><strong>Preservation:</strong> Maintains acoustic wave shape with zero directional distortion.</li>
              </ul>
            </div>

            {/* Bucket System */}
            <div className="p-4 rounded-xl border border-rose-300 dark:border-rose-800 bg-rose-50/60 dark:bg-rose-950/20">
              <div className="flex items-center gap-2 text-rose-800 dark:text-rose-400 font-bold mb-2">
                <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                5-Gallon Bucket
              </div>
              <ul className="text-sm space-y-1.5 text-gray-700 dark:text-gray-300">
                <li><strong>Low Frequency:</strong> <strong>0 dB</strong> reduction between 0.01 and 1 Hz.</li>
                <li><strong>High Frequency:</strong> <strong>Increases noise</strong> by +3 to +10 dB above 1–3 Hz!</li>
                <li><strong>Verdict:</strong> Complete failure as a wind filter. Strongly contraindicated.</li>
              </ul>
            </div>
          </div>

          <h3 id="noise-reduction-by-frequency-summary">Noise Reduction Behavior by Frequency (Figure 4-1 Summary)</h3>
          <table>
            <thead>
              <tr>
                <th>Filter System</th>
                <th>0.01 – 1.0 Hz Band</th>
                <th>1.0 – 5.0 Hz Band</th>
                <th>5.0 – 20 Hz Band</th>
                <th>Overall Assessment</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Porous Hoses (30 m)</strong></td>
                <td>+2 to +6 dB reduction</td>
                <td>+8 to +15 dB reduction (Peak)</td>
                <td>+5 to +10 dB reduction</td>
                <td className="text-emerald-700 dark:text-emerald-400 font-semibold">Highest Attenuation</td>
              </tr>
              <tr>
                <td><strong>Metal Mesh Dome (1 m)</strong></td>
                <td>+2 to +4 dB reduction</td>
                <td>+4 to +7 dB reduction</td>
                <td>+3 to +6 dB reduction</td>
                <td className="text-sky-700 dark:text-sky-400 font-semibold">Recommended Standard</td>
              </tr>
              <tr>
                <td><strong>5-Gallon Bucket</strong></td>
                <td>~0 dB (No change)</td>
                <td className="text-rose-600 dark:text-rose-400 font-medium">Degrades: −2 to −5 dB (Noise Increase)</td>
                <td className="text-rose-600 dark:text-rose-400 font-medium">Degrades: −5 to −12 dB (Noise Increase)</td>
                <td className="text-rose-700 dark:text-rose-400 font-semibold">Harmful / Do Not Use</td>
              </tr>
              <tr>
                <td><strong>Bare Sensor (HF Shroud)</strong></td>
                <td>0 dB (Reference Baseline)</td>
                <td>0 dB (Reference Baseline)</td>
                <td>0 dB (Reference Baseline)</td>
                <td>Lightest / High SNR only</td>
              </tr>
            </tbody>
          </table>

          {/* Section 5: Discussion */}
          <h2 id="5-discussion">5. Discussion</h2>

          <h3 id="the-porous-hose-trade-off-noise-vs-fidelity">The Porous Hose Trade-off: Attenuation vs. Waveform Fidelity</h3>
          <p>
            While the porous hose filter is quantitatively the most effective at suppressing raw noise power (up to 15 dB),
            it introduces severe scientific complications:
          </p>
          <ul>
            <li>
              <strong>Waveform Distortion:</strong> Howard et al. (2007) demonstrated that porous hoses alter both the amplitude
              and frequency spectrum of incoming infrasonic waves depending on signal backazimuth and angle of incidence.
            </li>
            <li>
              <strong>Impact on Nuclear & Explosion Monitoring:</strong> At regional to global distances, a weak arrival could be
              further attenuated or distorted. These discrepancies corrupt critical downstream research tasks:
              <br />
              <em>• Explosive yield calculation</em><br />
              <em>• Source characterization</em><br />
              <em>• Full waveform inversion</em><br />
              <em>• Array beamforming and backazimuth slowness estimation</em>
            </li>
            <li>
              <strong>Transfer Function Requirement:</strong> Before porous hoses can be reliably used for high-fidelity scientific
              analyses, an empirical transfer function must be modeled to compensate for angle and frequency dependence.
            </li>
            <li>
              <strong>Environmental Vulnerability:</strong> Porous hoses suffer from physical degradation over time due to UV sunlight,
              precipitation, thermal expansion, and destruction by livestock or local wildlife.
            </li>
          </ul>

          <h3 id="why-metal-mesh-dome-is-recommended">Why the Metal Mesh Dome is Recommended</h3>
          <p>
            Due to the fidelity issues inherent in porous hoses, Albert et al. recommend the <strong>1 m diameter metal mesh dome</strong> as
            the superior choice for temporary deployments:
          </p>
          <ul>
            <li>
              <strong>Compact 1 m Footprint:</strong> Can be placed in restricted geographic terrain, narrow mountain ledges, or populated areas.
            </li>
            <li>
              <strong>Waveform Fidelity Preserved:</strong> Because it acts as an omnidirectional mechanical turbulence dissipation barrier rather
              than a spatial delay network, it does not distort phase or backazimuth.
            </li>
            <li>
              <strong>Logistical Caveat:</strong> The rigid metal mesh dome weighs approximately <strong>50 lbs (23 kg)</strong> and requires at least
              two field personnel to transport, making it arduous on steep mountain slopes. (Fabric mesh domes were suggested as an enticing lighter
              alternative for future verification).
            </li>
            <li>
              <strong>Base Optimization:</strong> Adding gravel or crushed stone around the perimeter base may further boost noise reduction by
              blocking ground-level wind seepage.
            </li>
          </ul>

          <h3 id="why-the-bucket-method-fails">Acoustic Physics: Why the Bucket System Fails Catastrophically</h3>
          <div className="p-4 rounded-xl border border-rose-300 dark:border-rose-900 bg-rose-50/70 dark:bg-rose-950/30 my-4">
            <div className="flex items-start gap-3">
              <ShieldAlert className="w-6 h-6 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-rose-900 dark:text-rose-200 text-base mb-1">
                  Why Inverting a Bucket Over an Infrasound Sensor Destroys Performance:
                </h4>
                <p className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
                  The standard Hyperion HF shroud achieves noise suppression by averaging pressure across <strong>16 circumferential ports</strong>.
                  When a bucket is placed over the shroud with only a single drilled hole for cable routing, <strong>the system is forced to sample
                  pressure at only one single spatial point</strong>.
                </p>
                <p className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed mt-2">
                  This effectively <em>cancels out</em> the bare sensor’s built-in spatial averaging. The increase in noise above 1–3 Hz occurs even
                  at the lowest wind speed interval (0–0.5 m/s), proving this resonance and turbulence amplification is an <strong>intrinsic acoustic
                  defect</strong> of the bucket enclosure, not simple wind buffeting or bucket flexing.
                </p>
              </div>
            </div>
          </div>

          <h3 id="role-of-the-bare-sensor">Role of the Bare Sensor (HF Shroud)</h3>
          <p>
            Although outperformed by both the metal mesh dome and porous hoses, the bare sensor remains the lightest and smallest system.
            If the target phenomenon produces a high Signal-to-Noise Ratio (SNR)—such as near-vent volcanic eruption monitoring or close-range
            rocket launches—a bare sensor placed among natural ground vegetation provides adequate detection without adding bulky field gear.
          </p>

          {/* Section 6: Conclusions & Table 6-1 */}
          <h2 id="6-conclusions-and-recommendations">6. Conclusions &amp; Deployment Recommendations</h2>
          <p>
            The porous hose filter provides large raw noise attenuation but alters waveform fidelity and frequency content.
            The metal mesh dome offers solid 2–7 dB noise reduction while preserving pristine acoustic waveforms, making it the primary
            recommended wind noise reduction system for temporary infrasound stations. Placing a bucket over a sensor should never be done.
          </p>

          <h3 id="table-6-1-recommendations">Table 6-1. Wind Noise Reduction System Recommendations (Sandia Report)</h3>
          <div className="overflow-x-auto my-4">
            <table>
              <thead>
                <tr>
                  <th style={{ width: '32%' }}>Station Characteristics</th>
                  <th>Recommended Wind Noise Reduction System</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Low-lying vegetation</strong><br />
                    <span className="text-xs text-gray-500 dark:text-gray-400">≥ 30 m space available</span>
                  </td>
                  <td>
                    <ul className="list-disc pl-4 space-y-1 text-sm">
                      <li><strong>If waveform fidelity is NOT an issue:</strong> Hyperion Four Port Garden Hose shroud + 4 Miracle-Gro Soaker System hoses</li>
                      <li><strong>Otherwise:</strong> Hyperion HF shroud + metal mesh dome</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Low-lying vegetation</strong><br />
                    <span className="text-xs text-gray-500 dark:text-gray-400">≤ 30 m space available</span>
                  </td>
                  <td>
                    <p className="text-sm"><strong>Hyperion HF shroud + metal mesh dome</strong></p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Dense vegetation</strong><br />
                    <span className="text-xs text-gray-500 dark:text-gray-400">≥ 30 m space available</span>
                  </td>
                  <td>
                    <ul className="list-disc pl-4 space-y-1 text-sm">
                      <li><strong>If waveform fidelity is NOT an issue:</strong> Hyperion Four Port Garden Hose shroud + 4 Miracle-Gro Soaker System hoses</li>
                      <li><strong>Otherwise:</strong> Hyperion HF shroud + metal mesh dome</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Dense vegetation</strong><br />
                    <span className="text-xs text-gray-500 dark:text-gray-400">≤ 30 m space available</span>
                  </td>
                  <td>
                    <p className="text-sm"><strong>Hyperion HF shroud + metal mesh dome</strong></p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>On top of a steep slope</strong>
                  </td>
                  <td>
                    <ul className="list-disc pl-4 space-y-1 text-sm">
                      <li><strong>If waveform fidelity is NOT an issue and space is available:</strong> Hyperion Four Port Garden Hose shroud + 4 Miracle-Gro Soaker System hoses</li>
                      <li><strong>Otherwise:</strong> Hyperion HF shroud + metal mesh dome (if able to carry 50 lbs) OR fabric mesh dome</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Expecting high SNR signals</strong><br />
                    <span className="text-xs text-gray-500 dark:text-gray-400">(e.g., local volcanic explosions, proximal rocket tests)</span>
                  </td>
                  <td>
                    <p className="text-sm"><strong>Hyperion HF shroud</strong> (Bare sensor placed in natural brush/vegetation)</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <pre><code className="language-mermaid">{`flowchart TD
    START["Deployment Planning:\\nSelect WNRS for Temporary Site"] --> Q_SNR{"Is high SNR expected?\\n(e.g., proximal volcano/blast)"}
    Q_SNR -- "Yes" --> BARE["Hyperion HF Shroud\\n(Bare sensor in vegetation)"]
    Q_SNR -- "No" --> Q_FID{"Is pristine waveform fidelity\\nrequired? (Yield / Inversion)"}

    Q_FID -- "Yes (Preserve Waveform)" --> Q_SLOPE{"Steep slope or\\nweight limited?"}
    Q_SLOPE -- "No (Vehicle / Flat)" --> DOME["Hyperion HF Shroud +\\n1m Metal Mesh Dome (Recommended)"]
    Q_SLOPE -- "Yes (Backpack / Peak)" --> FABRIC["Metal Dome (if carryable)\\nOR Fabric Mesh Dome"]

    Q_FID -- "No (Simple Detection)" --> Q_SPACE{"Space >= 30m available?"}
    Q_SPACE -- "Yes" --> HOSES["Hyperion 4-Port Shroud +\\n4x Miracle-Gro Soaker Hoses\\n(Max raw noise reduction: 2-15 dB)"]
    Q_SPACE -- "No (< 30m space)" --> DOME

    BUCKET["5-Gallon Bucket Method"] -.->|NEVER USE| FAIL["❌ Noise Increase above 1-3 Hz\\nDestroys Multi-Port Averaging"]
`}</code></pre>

          {/* Section 7: References */}
          <h2 id="references">References</h2>
          <ol className="text-sm space-y-2">
            <li>
              <strong>Daniels, F. B. (1959).</strong> Noise-reducing line microphone for frequencies below 1 cps. <em>Journal of the Acoustical Society of America</em>, 31(4):529–531.
            </li>
            <li>
              <strong>Hedlin, M. A., Alcoverro, B., and D’Spain, G. (2003).</strong> Evaluation of rosette infrasonic noise-reducing spatial filters. <em>Journal of the Acoustical Society of America</em>, 114(4):1807–1820.
            </li>
            <li>
              <strong>Hedlin, M. A. and Raspet, R. (2003).</strong> Infrasonic wind-noise reduction by barriers and spatial filters. <em>Journal of the Acoustical Society of America</em>, 114(3):1379–1386.
            </li>
            <li>
              <strong>Howard, W., Dillon, K., and Shields, F. (2007).</strong> Acoustical properties of porous hose wind noise filters. <em>Journal of the Acoustical Society of America</em>, 122(5):2985.
            </li>
            <li>
              <strong>Noble, J. M., Alberts II, W. K., Collier, S., Raspet, R., and Coleman, M. A. (2014).</strong> Wind noise suppression for infrasound sensors. Technical Report ARL-TR-6873, Army Research Laboratory.
            </li>
            <li>
              <strong>Raspet, R., Abbott, J.-P., Webster, J., Yu, J., Talmadge, C., Alberts II, K., Collier, S., and Noble, J. (2019).</strong> <em>Infrasound Monitoring for Atmospheric Studies</em>, chapter New Systems for Wind Noise Reduction for Infrasonic Measurements, pages 91–123. Springer Science.
            </li>
            <li>
              <strong>Walker, K. and Hedlin, M. (2010).</strong> <em>Infrasound Monitoring for Atmospheric Studies</em>, chapter A Review of Wind-Noise Reduction Methodologies, pages 141–182. Springer Science.
            </li>
          </ol>

          {/* Section 8: Report Distribution */}
          <h2 id="distribution-and-acknowledgements">Distribution and Acknowledgements</h2>
          <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/30 text-sm mb-8">
            <p className="mb-2">
              <strong>Field Engineering Acknowledgements:</strong> The authors thank University of Utah field engineers
              <strong> Wes O'Keefe</strong> and <strong>Jon Rusho</strong> for establishing the experiment setup and troubleshooting field operations.
            </p>
            <p className="mb-3 text-xs text-gray-500 dark:text-gray-400">
              Funding: National Nuclear Security Administration, Defense Nuclear Nonproliferation Research and Development (NNSA DNN R&D).
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
              <div className="p-2 rounded bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <span className="font-semibold block text-gray-900 dark:text-gray-200">Sandia Internal Distribution:</span>
                Stephanie Teich-McGoldrick (Org 06756), Steve Vigil (Org 06752), Technical Library (Org 01977).
              </div>
              <div className="p-2 rounded bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <span className="font-semibold block text-gray-900 dark:text-gray-200">External Distribution:</span>
                James Ely (PNNL), Brian Paeth (NNSA), Kristine Pankow (Univ of Utah), Ellen Syracuse (NNSA).
              </div>
            </div>
          </div>

          <hr className="my-8 border-gray-200 dark:border-gray-800" />

          {/* Cross-module links */}
          <div className="flex flex-wrap items-center justify-between text-sm text-gray-600 dark:text-gray-400">
            <div>
              <em>Related Hardware: </em>
              <Link to="/03-hardware/wind-noise-reduction" className="text-sky-600 dark:text-sky-400 hover:underline">
                Hardware Wind-Noise Reduction
              </Link>
            </div>
            <div>
              <em>Research Context: </em>
              <Link to="/13-research/existing-solutions" className="text-sky-600 dark:text-sky-400 hover:underline mr-3">
                Existing Solutions
              </Link>
              <Link to="/13-research/references" className="text-sky-600 dark:text-sky-400 hover:underline">
                References
              </Link>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
