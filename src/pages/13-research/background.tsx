import { Link } from 'react-router-dom';

export default function Page13ResearchBackground() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Research</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Background</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Background</h1>
    <h2 id="what-is-infrasound-">What Is Infrasound?</h2>
    <p>Infrasound refers to acoustic (pressure) waves with frequencies below the lower limit of human
      hearing, approximately below <strong>20 Hz</strong>. The infrasound range of interest for
      atmospheric monitoring extends down to approximately <strong>0.01 Hz</strong> (period of 100
      seconds).</p>
    <p>At these very low frequencies, sound waves behave differently from audible sound:</p>
    <ul>
      <li><strong>Long wavelengths:</strong> At 1 Hz, the wavelength is approximately 340 metres
        (speed of sound ÷ frequency). At 0.01 Hz, the wavelength is approximately 34 kilometres.
      </li>
      <li><strong>Low atmospheric absorption:</strong> Lower frequencies experience less absorption
        than higher frequencies, allowing infrasound to travel hundreds or thousands of kilometres
        through the atmosphere.</li>
      <li><strong>Interaction with atmospheric structure:</strong> Infrasound waves can be refracted
        and ducted by atmospheric temperature and wind gradients, enabling long-range propagation.
      </li>
    </ul>
    <h2 id="what-is-a-microbarometer-">What Is a Microbarometer?</h2>
    <p>A microbarometer is a precision instrument designed to measure small, rapid atmospheric pressure
      fluctuations — specifically, the infrasound component of the atmospheric pressure field. Unlike
      a standard barometer that measures absolute atmospheric pressure (typically ~101,325 Pa), a
      microbarometer is designed to measure deviations of a fraction of a Pascal from the atmospheric
      mean.</p>
    <p>Key design features of microbarometers:</p>
    <ul>
      <li><strong>Differential measurement</strong> against a reference pressure</li>
      <li><strong>High sensitivity</strong> to small pressure changes</li>
      <li><strong>Frequency response</strong> extending to sub-hertz frequencies</li>
      <li><strong>Mechanical high-pass filtering</strong> via reference chamber to suppress barometric
        drift</li>
    </ul>
    <h2 id="history-of-infrasound-monitoring">History of Infrasound Monitoring</h2>
    <p>Infrasound monitoring has a history spanning over a century:</p>
    <ul>
      <li><strong>Early 20th century:</strong> Scientists recognized that volcanic eruptions and large
        explosions produced atmospheric pressure waves detectable at great distances</li>
      <li><strong>Cold War era:</strong> Infrasound monitoring was developed for nuclear test
        detection</li>
      <li><strong>1996:</strong> The Comprehensive Nuclear-Test-Ban Treaty (CTBT) established the
        International Monitoring System (IMS), which includes a global network of infrasound
        stations</li>
      <li><strong>Present:</strong> The IMS infrasound network consists of 60 planned stations (53
        certified as of recent years), each using arrays of microbarometers with spatial-filtering
        wind-noise reduction systems</li>
    </ul>
    <h2 id="the-ctbto-infrasound-network">The CTBTO Infrasound Network</h2>
    <p>The Comprehensive Nuclear-Test-Ban Treaty Organization (CTBTO) operates the most extensive global
      infrasound monitoring network. Key characteristics:</p>
    <ul>
      <li><strong>60 stations</strong> distributed worldwide</li>
      <li><strong>4–8 microbarometers per station</strong> in array configurations</li>
      <li><strong>Array apertures</strong> of 1–3 km</li>
      <li><strong>Spatial-filtering pipe arrays</strong> (rosettes) of 18–70 m diameter per sensor
      </li>
      <li><strong>Sampling rate</strong> typically 20 samples per second</li>
      <li><strong>Processing</strong> using cross-correlation methods (e.g., PMCC — Progressive
        Multi-Channel Correlation)</li>
    </ul>
    <p>This professional infrastructure provides the benchmark against which simpler systems can be
      compared.</p>
    <h2 id="why-this-project-matters">Why This Project Matters</h2>
    <p>The CTBTO and similar networks demonstrate that infrasound monitoring is technically feasible and
      scientifically valuable. However, these systems are:</p>
    <ul>
      <li>Expensive to build and maintain</li>
      <li>Geographically limited (60 stations for the entire globe)</li>
      <li>Primarily designed for treaty verification, not general research</li>
    </ul>
    <p>A low-cost, accessible prototype could:</p>
    <ul>
      <li>Enable educational and research institutions to explore infrasound monitoring</li>
      <li>Provide supplementary data in regions without professional stations</li>
      <li>Serve as a teaching platform for signal processing and machine learning</li>
      <li>Demonstrate the feasibility of AI-enhanced infrasound analysis</li>
    </ul>
    <hr />
    <p><em>See also: <Link to="/13-research/existing-solutions">Existing Solutions</Link> | <Link to="/13-research/references">References</Link></em></p>
  </article>
</div>

    </main>
  );
}