import { Link } from 'react-router-dom';

export default function Page01OverviewKeyFeatures() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Overview</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Key Features</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Key Features</h1>
    <h2 id="feature-overview">Feature Overview</h2>
    <pre><code className="language-mermaid">mindmap{"\n"}{"  "}root((InfraSocket)){"\n"}{"    "}Hardware{"\n"}{"      "}Pressure Sensor{"\n"}{"      "}Reference Chamber{"\n"}{"      "}Wind-Noise Reduction{"\n"}{"      "}Analog Front End{"\n"}{"      "}High-Resolution ADC{"\n"}{"      "}Temperature Sensing{"\n"}{"    "}Signal Processing{"\n"}{"      "}Band-Pass Filtering{"\n"}{"      "}FFT Analysis{"\n"}{"      "}Spectrogram{"\n"}{"      "}Feature Extraction{"\n"}{"    "}AI / ML{"\n"}{"      "}Anomaly Detection{"\n"}{"      "}Isolation Forest{"\n"}{"      "}Configurable Threshold{"\n"}{"      "}Anomaly Scoring{"\n"}{"    "}Software{"\n"}{"      "}Real-Time Dashboard{"\n"}{"      "}REST API{"\n"}{"      "}Alert System{"\n"}{"      "}Data Storage{"\n"}{"      "}Sensor Monitoring{"\n"}</code></pre>
    <p>====</p>
    <h2 id="core-features">Core Features</h2>
    <h3 id="1-low-frequency-pressure-detection-0-01-20-hz-">1. Low-Frequency Pressure Target (0.01–20 Hz (TARGET - Pending experimental validation))</h3>
    <p>The research prototype targets atmospheric pressure variations in the approximate 0.01–20 Hz (TARGET - Pending experimental validation)
      band. Complete sensor and system response across that range is PENDING VALIDATION. The design
      concept depends on:</p>
    <ul>
      <li>A selected and calibrated pressure sensor with measured response</li>
      <li>A reference chamber whose pressure-equalization time constant and transfer function are measured</li>
      <li>An analog signal chain with documented noise, gain, filtering, and input range</li>
    </ul>
    <h3 id="2-wind-noise-reduction">2. Wind-Noise Reduction</h3>
    <p>Wind-induced pressure fluctuations can interfere with infrasound sensing. InfraSocket documents a
      multi-inlet spatial-averaging manifold concept; actual reduction and signal preservation depend
      on geometry, pneumatic response, frequency, turbulence correlation, wind, and installation.
      WNRS attenuation is PENDING VALIDATION.</p>
    <h3 id="3-differential-pressure-with-reference-chamber">3. Differential Pressure with Reference
      Chamber</h3>
    <p>A reference chamber and pneumatic restriction can create a frequency-dependent pressure
      reference. In a simplified model, f<sub>c</sub> = 1 / (2πτ), but the actual time constant and
      response depend on chamber volume, capillary, tubing, ports, leakage, and temperature. The
      cutoff is TBD pending experimental characterization.</p>
    <h3 id="4-high-resolution-digitization">4. High-Resolution Digitization</h3>
    <p>The ADC target is ≥≥16-bit (TARGET - Final selection depends on ENOB and noise) nominal resolution; this does not establish sensitivity or system
      dynamic range. Approximately 100 Hz (TARGET - Pending validation) is the prototype engineering sampling target; the
      theoretical Nyquist boundary for a 20 Hz upper target is greater than 40 Hz (Theoretical minimum, Prototype targets approx. 100 Hz (TARGET - Pending validation)). Component choice,
      ENOB, analog/ADC noise, and filter response remain to be validated.</p>
    <h3 id="5-digital-signal-processing">5. Digital Signal Processing</h3>
    <p>The documented signal-processing plan includes:</p>
    <table>
      <thead>
        <tr>
          <th>Stage</th>
          <th>Function</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>DC offset removal</td>
          <td>Centres the signal around zero</td>
        </tr>
        <tr>
          <td>Band-pass filtering</td>
          <td>Processes the approximate 0.01–20 Hz (TARGET - Pending experimental validation) TARGET band; full instrument response remains unvalidated</td>
        </tr>
        <tr>
          <td>Windowing</td>
          <td>Prepares segments for spectral analysis</td>
        </tr>
        <tr>
          <td>FFT</td>
          <td>Transforms to frequency domain</td>
        </tr>
        <tr>
          <td>Spectrogram</td>
          <td>Time-frequency visualization</td>
        </tr>
        <tr>
          <td>Feature extraction</td>
          <td>Computes signal characteristics for AI</td>
        </tr>
      </tbody>
    </table>
    <h3 id="6-ai-based-anomaly-detection">6. AI-Based Anomaly Detection</h3>
    <p>Isolation Forest is a candidate for optional anomaly scoring after sensor calibration, signal
      quality checks, and baseline-data review. No trained model, evaluation data, or deployed AI
      capability is evidenced in this workspace. An anomaly score is not event classification and is
      not confirmation of a physical event.</p>
    <ul>
      <li>Candidate anomaly score for analyst review; score definition and threshold require validation.</li>
      <li>Anomaly versus baseline deviation only; no physical event label is implied.</li>
      <li>Automated alerts remain a proposed function pending implementation and evaluation.</li>
    </ul>
    <h3 id="7-real-time-dashboard">7. Real-Time Dashboard</h3>
    <p>The documentation contains a dashboard mock-up, not live telemetry. A future connected dashboard may display:</p>
    <ul>
      <li>Live pressure waveform</li>
      <li>Frequency spectrum</li>
      <li>Spectrogram</li>
      <li>normalized anomaly index with threshold indicator</li>
      <li>Sensor status and health</li>
      <li>Alert history and event timeline</li>
    </ul>
    <h3 id="8-temperature-monitoring">8. Temperature Monitoring</h3>
    <p>A temperature sensor tracks ambient and/or enclosure temperature, enabling:</p>
    <ul>
      <li>Temperature logging alongside pressure data</li>
      <li>Potential temperature-drift compensation</li>
      <li>Environmental condition monitoring</li>
    </ul>
    <h3 id="9-modular-and-extensible-architecture">9. Modular and Extensible Architecture</h3>
    <p>Each subsystem (hardware, signal processing, AI, software) is designed as an independent module:
    </p>
    <ul>
      <li>Hardware can be upgraded without changing software</li>
      <li>Signal-processing algorithms can be replaced or tuned independently</li>
      <li>The AI model can be retrained or swapped</li>
      <li>The dashboard can be extended with new visualizations</li>
    </ul>
    <h2 id="feature-status">Feature Status</h2>
    <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th>Status</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Pressure sensing</td>
          <td>CANDIDATE</td>
          <td>Sensor selection and sensitivity TBD</td>
        </tr>
        <tr>
          <td>Reference chamber</td>
          <td>CANDIDATE</td>
          <td>Physical response and time constant require characterization</td>
        </tr>
        <tr>
          <td>Wind-noise reduction</td>
          <td>CANDIDATE</td>
          <td>Construction and attenuation measurement required</td>
        </tr>
        <tr>
          <td>Analog front end</td>
          <td>PENDING VALIDATION</td>
          <td>Component selection and circuit values TBD</td>
        </tr>
        <tr>
          <td>ADC</td>
          <td>TARGET</td>
          <td>≥≥16-bit (TARGET - Final selection depends on ENOB and noise) nominal and approximately 100 Hz (TARGET - Pending validation) targets; selection and ENOB TBD</td>
        </tr>
        <tr>
          <td>Signal processing</td>
          <td>TARGET</td>
          <td>Filtering, FFT, spectrogram, and feature methods require implementation and verification</td>
        </tr>
        <tr>
          <td>AI anomaly detection</td>
          <td>FUTURE / EXPERIMENTAL</td>
          <td>Isolation Forest is a candidate; no model or evaluation evidence found</td>
        </tr>
        <tr>
          <td>Dashboard</td>
          <td>CANDIDATE</td>
          <td>Current dashboard is a documentation mock-up, not live data</td>
        </tr>
        <tr>
          <td>Alert system</td>
          <td>Proposed design</td>
          <td>Notification method to be decided</td>
        </tr>
        <tr>
          <td>Event classification</td>
          <td><code>Future Scope</code></td>
          <td>Requires labeled datasets</td>
        </tr>
        <tr>
          <td>Multi-sensor array</td>
          <td><code>Future Scope</code></td>
          <td>Requires multiple stations</td>
        </tr>
        <tr>
          <td>Source localization</td>
          <td><code>Future Scope</code></td>
          <td>Requires array processing</td>
        </tr>
      </tbody>
    </table>
    <hr />
    <hr />
    <p><em>See also: <Link to="/01-overview/proposed-solution">Proposed Solution</Link> | <Link to="/01-overview/scope-and-limitations">Scope and Limitations</Link></em></p>
  </article>
</div>

    </main>
  );
}