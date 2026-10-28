import { Link } from 'react-router-dom';

export default function Page01OverviewRealWorldUseCases() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Overview</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Real-World Use Cases</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Real-World Use Cases</h1>
    <h2 id="important-disclaimer">Important Disclaimer</h2>
    <blockquote>
      <p>InfraSocket is a prototype/research system. It is <strong>not</strong> a certified safety
        system, early-warning system, or government-grade monitoring instrument. The use cases below
        describe areas where infrasound monitoring <strong>can support</strong> research and
        observation. The system's ability to contribute meaningfully to any specific use case
        depends on calibration, validation, and the specific deployment environment.</p>
    </blockquote>
    <h2 id="use-case-1-atmospheric-monitoring-and-research">Use Case 1: Atmospheric Monitoring and
      Research</h2>
    <p><strong>Description:</strong> Continuous monitoring of the local infrasound environment to
      establish baseline conditions and observe natural variations.</p>
    <p><strong>How InfraSocket Supports This:</strong></p>
    <ul>
      <li>Records long-term pressure waveform data</li>
      <li>Provides FFT and spectrogram analysis of the ambient infrasound field</li>
      <li>AI flags unusual deviations from the established baseline</li>
    </ul>
    <p><strong>Value:</strong> Provides hands-on learning about atmospheric acoustics and environmental
      monitoring.</p>
    <h2 id="use-case-2-volcanic-activity-monitoring-support">Use Case 2: Volcanic Activity Monitoring
      Support</h2>
    <p><strong>Description:</strong> Active volcanoes produce sustained infrasound signals from
      eruptions, gas venting, and tremor. Research institutions use infrasound networks to monitor
      volcanic activity remotely.</p>
    <p><strong>How InfraSocket Could Support This:</strong></p>
    <ul>
      <li>A low-cost sensor deployed near (but at safe distance from) an active volcano could provide
        additional data points</li>
      <li>Anomaly detection could flag changes in the infrasound signature</li>
      <li>Time-frequency analysis could reveal spectral changes associated with activity changes</li>
    </ul>
    <p><strong>Limitations:</strong></p>
    <ul>
      <li>A single sensor cannot determine the direction or distance of a source</li>
      <li>Sensitivity and noise floor of the prototype may not be sufficient for weak volcanic signals
        at large distances</li>
      <li>Event identification (e.g., distinguishing volcanic tremor from wind) requires additional
        validation</li>
    </ul>
    <h2 id="use-case-3-meteor-entry-detection-support">Use Case 3: Meteor Entry Detection Support</h2>
    <p><strong>Description:</strong> Large meteors entering the atmosphere produce strong infrasound
      signals that can travel thousands of kilometres.</p>
    <p><strong>How InfraSocket Could Support This:</strong></p>
    <ul>
      <li>A bright meteor event may produce a signal strong enough for a nearby prototype sensor to
        detect</li>
      <li>Anomaly detection would flag the unusual signal</li>
      <li>Correlation with visual observations or other data sources could confirm the event</li>
    </ul>
    <p><strong>Limitations:</strong></p>
    <ul>
      <li>Most meteor infrasound signals require sensitive instruments and quiet environments</li>
      <li>A single prototype sensor cannot localize the source</li>
      <li>Confirmation requires external data (e.g., fireball reports, satellite data)</li>
    </ul>
    <h2 id="use-case-4-severe-weather-research">Use Case 4: Severe Weather Research</h2>
    <p><strong>Description:</strong> Severe storms, tornadoes, and large-scale weather systems generate
      infrasound through mechanisms including turbulence, convective activity, and pressure
      fluctuations.</p>
    <p><strong>How InfraSocket Could Support This:</strong></p>
    <ul>
      <li>Continuous recording during storm seasons could capture weather-related infrasound</li>
      <li>Spectral analysis may reveal characteristic frequency patterns</li>
      <li>Correlation with meteorological data could provide research insights</li>
    </ul>
    <p><strong>Limitations:</strong></p>
    <ul>
      <li>Wind noise during storms may overwhelm the sensor</li>
      <li>Separating weather-generated infrasound from weather-generated wind noise is challenging
      </li>
    </ul>
    <h2 id="use-case-5-industrial-monitoring">Use Case 5: Industrial Monitoring</h2>
    <p><strong>Description:</strong> Large industrial facilities (power plants, factories, mining
      operations) can produce infrasound through machinery vibration, explosions, or large-scale
      processes.</p>
    <p><strong>How InfraSocket Could Support This:</strong></p>
    <ul>
      <li>Monitoring the infrasound environment near industrial sites</li>
      <li>Detecting changes in the infrasound signature that may indicate equipment issues</li>
      <li>Providing continuous, unattended monitoring data</li>
    </ul>
    <p><strong>Limitations:</strong></p>
    <ul>
      <li>Urban/industrial environments have high ambient noise</li>
      <li>Source identification requires additional information</li>
    </ul>
    <h2 id="use-case-6-educational-and-academic-use">Use Case 6: Educational and Academic Use</h2>
    <p><strong>Description:</strong> Infrasound is an excellent teaching topic spanning physics, signal
      processing, electronics, and machine learning.</p>
    <p><strong>How InfraSocket Supports This:</strong></p>
    <ul>
      <li>Provides a hands-on project for learning about atmospheric pressure waves</li>
      <li>Demonstrates real-world application of FFT, filtering, and spectral analysis</li>
      <li>Introduces students to anomaly detection and machine learning concepts</li>
      <li>Covers hardware design, embedded systems, and full-stack software</li>
    </ul>
    <p><strong>Value:</strong> This is one of the strongest use cases for the prototype. The system is
      designed to be educational and reproducible.</p>
    <h2 id="use-case-7-rocket-launch-monitoring">Use Case 7: Rocket Launch Monitoring</h2>
    <p><strong>Description:</strong> Rocket launches produce powerful infrasound signals that can be
      detected at large distances.</p>
    <p><strong>How InfraSocket Could Support This:</strong></p>
    <ul>
      <li>A sensor deployed within a reasonable distance of a launch site could capture the infrasound
        signature</li>
      <li>Signal analysis could reveal the spectral characteristics of launch events</li>
    </ul>
    <p><strong>Limitations:</strong></p>
    <ul>
      <li>Distance and atmospheric conditions affect signal strength</li>
      <li>Access to launch sites may be restricted</li>
    </ul>
    <h2 id="use-case-summary">Use Case Summary</h2>
    <table>
      <thead>
        <tr>
          <th>Use Case</th>
          <th>Prototype Suitability</th>
          <th>Confidence Level</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Atmospheric monitoring/research</td>
          <td>High</td>
          <td>Achievable with prototype</td>
        </tr>
        <tr>
          <td>Educational/academic</td>
          <td>High</td>
          <td>Primary target use case</td>
        </tr>
        <tr>
          <td>Volcanic monitoring support</td>
          <td>Medium</td>
          <td>Depends on distance and signal strength</td>
        </tr>
        <tr>
          <td>Severe weather research</td>
          <td>Medium</td>
          <td>Wind noise is a challenge</td>
        </tr>
        <tr>
          <td>Industrial monitoring</td>
          <td>Medium</td>
          <td>Urban noise environment</td>
        </tr>
        <tr>
          <td>Meteor detection support</td>
          <td>Low–Medium</td>
          <td>Requires strong events and quiet site</td>
        </tr>
        <tr>
          <td>Rocket launch monitoring</td>
          <td>Low–Medium</td>
          <td>Depends on proximity</td>
        </tr>
      </tbody>
    </table>
    <hr />
    <p><em>See also: <Link to="/01-overview/problem-statement">Problem Statement</Link> | <Link to="/01-overview/scope-and-limitations">Scope and Limitations</Link></em></p>
  </article>
</div>

    </main>
  );
}