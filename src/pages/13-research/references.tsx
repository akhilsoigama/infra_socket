import { Link } from 'react-router-dom';

export default function Page13ResearchReferences() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Research</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">References</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>References</h1>
    <h2 id="authoritative-references">Authoritative References</h2>
    <blockquote>
      <p><strong>Note:</strong> All references listed below are real, verifiable sources from
        established organizations and peer-reviewed publications.</p>
    </blockquote>
    <h3 id="infrasound-and-atmospheric-acoustics">Infrasound and Atmospheric Acoustics</h3>
    <ol>
      <li>
        <p><strong>CTBTO Preparatory Commission.</strong> "Infrasound Monitoring." Comprehensive
          Nuclear-Test-Ban Treaty Organization.</p>
        <ul>
          <li>URL: <a href="https://www.ctbto.org/verification-regime/monitoring-technologies-how-they-work/infrasound-monitoring">https://www.ctbto.org/verification-regime/monitoring-technologies-how-they-work/infrasound-monitoring</a>
          </li>
          <li><em>Overview of the IMS infrasound monitoring network and its purpose.</em></li>
        </ul>
      </li>
      <li>
        <p><strong>Campus, P., and Christie, D. R.</strong> "Worldwide Observations of Infrasonic
          Waves." <em>Infrasound Monitoring for Atmospheric Studies</em>, Springer, 2010, pp.
          185–234.</p>
        <ul>
          <li><em>Comprehensive review of global infrasound observations and sources.</em></li>
        </ul>
      </li>
      <li>
        <p><strong>Hedlin, M. A. H., Walker, K., Drob, D. P., and de Groot-Hedlin, C. D.</strong>
          "Infrasound: Connecting the Solid Earth, Oceans, and Atmosphere." <em>Annual Review of
            Earth and Planetary Sciences</em>, Vol. 40, 2012, pp. 327–354.</p>
        <ul>
          <li>DOI: 10.1146/annurev-earth-042711-105508</li>
          <li><em>Review of infrasound science spanning geophysics, oceanography, and atmospheric
              science.</em></li>
        </ul>
      </li>
    </ol>
    <h3 id="wind-noise-reduction">Wind-Noise Reduction</h3>
    <ol start={4}>
      <li>
        <p><strong>Walker, K. T., and Hedlin, M. A. H.</strong> "A Review of Wind-Noise Reduction
          Methodologies." <em>Infrasound Monitoring for Atmospheric Studies</em>, Springer, 2010,
          pp. 141–182.</p>
        <ul>
          <li><em>Comprehensive review of spatial-filtering and other wind-noise reduction
              techniques.</em></li>
        </ul>
      </li>
      <li>
        <p><strong>Alcoverro, B., and Le Pichon, A.</strong> "Design and Optimization of a Noise
          Reduction System for Infrasonic Measurements Using Elements with Low Acoustic
          Impedance." <em>Journal of the Acoustical Society of America</em>, Vol. 117, No. 4,
          2005, pp. 1717–1727.</p>
        <ul>
          <li><em>Design principles for pipe-array spatial filters used at IMS stations.</em></li>
        </ul>
      </li>
    </ol>
    <h3 id="microbarometer-design">Microbarometer Design</h3>
    <ol start={6}>
      <li><strong>Ponceau, D., and Bosca, L.</strong> "Low-Noise Broadband Microbarometers."
        <em>Infrasound Monitoring for Atmospheric Studies</em>, Springer, 2010, pp. 119–140.<ul>
          <li><em>Design and performance of research-grade microbarometers including the MB3.</em>
          </li>
        </ul>
      </li>
    </ol>
    <h3 id="signal-processing">Signal Processing</h3>
    <ol start={7}>
      <li>
        <p><strong>Oppenheim, A. V., and Schafer, R. W.</strong> <em>Discrete-Time Signal
            Processing</em>, 3rd Edition, Pearson, 2010.</p>
        <ul>
          <li><em>Standard textbook covering FFT, filtering, and digital signal processing
              fundamentals.</em></li>
        </ul>
      </li>
      <li>
        <p><strong>Cooley, J. W., and Tukey, J. W.</strong> "An Algorithm for the Machine
          Calculation of Complex Fourier Series." <em>Mathematics of Computation</em>, Vol. 19,
          No. 90, 1965, pp. 297–301.</p>
        <ul>
          <li><em>The original FFT algorithm paper.</em></li>
        </ul>
      </li>
    </ol>
    <h3 id="anomaly-detection-and-isolation-forest">Anomaly Detection and Isolation Forest</h3>
    <ol start={9}>
      <li>
        <p><strong>Liu, F. T., Ting, K. M., and Zhou, Z.-H.</strong> "Isolation Forest."
          <em>Proceedings of the 2008 Eighth IEEE International Conference on Data Mining
            (ICDM)</em>, 2008, pp. 413–422.
        </p>
        <ul>
          <li>DOI: 10.1109/ICDM.2008.17</li>
          <li><em>The foundational paper for the Isolation Forest algorithm.</em></li>
        </ul>
      </li>
      <li>
        <p><strong>Liu, F. T., Ting, K. M., and Zhou, Z.-H.</strong> "Isolation-Based Anomaly
          Detection." <em>ACM Transactions on Knowledge Discovery from Data (TKDD)</em>, Vol. 6,
          No. 1, 2012, Article 3.</p>
        <ul>
          <li>DOI: 10.1145/2133360.2133363</li>
          <li><em>Expanded journal version of the Isolation Forest algorithm.</em></li>
        </ul>
      </li>
    </ol>
    <h3 id="public-data-sources">Public Data Sources</h3>
    <ol start={11}>
      <li>
        <p><strong>EarthScope Consortium (formerly IRIS).</strong> "Data Services."</p>
        <ul>
          <li>URL: <a href="https://ds.iris.edu/">https://ds.iris.edu/</a></li>
          <li><em>Access to seismic and infrasound waveform data from the USArray Transportable
              Array and other networks.</em></li>
        </ul>
      </li>
      <li>
        <p><strong>EarthScope.</strong> "TA Infrasound Reference Event Database (TAIRED)."</p>
        <ul>
          <li>URL: <a href="https://www.earthscope.org/">https://www.earthscope.org/</a></li>
          <li><em>Curated database of infrasound events detected by the Transportable Array.</em>
          </li>
        </ul>
      </li>
      <li>
        <p><strong>Boise State University.</strong> "Infrasound Data Repository."</p>
        <ul>
          <li>URL: <a href="https://scholarworks.boisestate.edu/">https://scholarworks.boisestate.edu/</a>
          </li>
          <li><em>Public datasets related to infrasound research including volcanic and avalanche
              events.</em></li>
        </ul>
      </li>
      <li>
        <p><strong>KNMI (Royal Netherlands Meteorological Institute).</strong> "KNMI Data Platform."
        </p>
        <ul>
          <li>URL: <a href="https://dataplatform.knmi.nl/">https://dataplatform.knmi.nl/</a></li>
          <li><em>Seismic and infrasound station data for the Netherlands.</em></li>
        </ul>
      </li>
    </ol>
    <h3 id="software-libraries">Software Libraries</h3>
    <ol start={15}>
      <li>
        <p><strong>Pedregosa, F., et al.</strong> "Scikit-learn: Machine Learning in Python."
          <em>Journal of Machine Learning Research</em>, Vol. 12, 2011, pp. 2825–2830.
        </p>
        <ul>
          <li><em>The scikit-learn library, which includes the Isolation Forest implementation
              used in this project.</em></li>
        </ul>
      </li>
      <li>
        <p><strong>Harris, C. R., et al.</strong> "Array programming with NumPy." <em>Nature</em>,
          Vol. 585, 2020, pp. 357–362.</p>
        <ul>
          <li>DOI: 10.1038/s41586-020-2649-2</li>
          <li><em>NumPy, used for numerical computation and FFT.</em></li>
        </ul>
      </li>
      <li>
        <p><strong>Virtanen, P., et al.</strong> "SciPy 1.0: Fundamental Algorithms for Scientific
          Computing in Python." <em>Nature Methods</em>, Vol. 17, 2020, pp. 261–272.</p>
        <ul>
          <li>DOI: 10.1038/s41592-019-0686-2</li>
          <li><em>SciPy, used for signal processing (filtering, spectral analysis).</em></li>
        </ul>
      </li>
    </ol>
    <h3 id="standards-and-organizations">Standards and Organizations</h3>
    <ol start={18}>
      <li>
        <p><strong>CTBTO Preparatory Commission.</strong> Vienna, Austria.</p>
        <ul>
          <li>URL: <a href="https://www.ctbto.org/">https://www.ctbto.org/</a></li>
          <li><em>International organization managing the CTBT verification regime.</em></li>
        </ul>
      </li>
      <li>
        <p><strong>FDSN (International Federation of Digital Seismograph Networks).</strong></p>
        <ul>
          <li>URL: <a href="https://www.fdsn.org/">https://www.fdsn.org/</a></li>
          <li><em>Standards for seismological and infrasound data exchange.</em></li>
        </ul>
      </li>
    </ol>
    <hr />
    <p><em>See also: <Link to="/13-research/background">Background</Link> | <Link to="/13-research/technical-assumptions">Technical Assumptions</Link></em></p>
  </article>
</div>

    </main>
  );
}