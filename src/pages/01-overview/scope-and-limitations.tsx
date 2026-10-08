import { Link } from 'react-router-dom';

export default function Page01OverviewScopeAndLimitations() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Overview</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Scope and Limitations</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Scope and Limitations</h1>
    <h2 id="in-scope-prototype-mvp-">In Scope (Prototype MVP)</h2>
    <p>The following capabilities are within the scope of the current prototype:</p>
    <h3 id="hardware">Hardware</h3>
    <ul>
      <li>Single-station infrasound sensing</li>
      <li>Differential pressure measurement with reference chamber</li>
      <li>Wind-noise reduction using a spatial-averaging manifold (small scale, prototype-appropriate)
      </li>
      <li>Analog signal conditioning (amplification and filtering)</li>
      <li>ADC digitization</li>
      <li>Temperature sensing</li>
      <li>Environmental enclosure (basic weather protection)</li>
    </ul>
    <h3 id="signal-processing">Signal Processing</h3>
    <ul>
      <li>DC offset removal</li>
      <li>Band-pass filtering (0.01–20 Hz (TARGET - Pending experimental validation))</li>
      <li>FFT-based spectral analysis</li>
      <li>Spectrogram generation</li>
      <li>Feature extraction (RMS, peak amplitude, spectral energy, dominant frequency, etc.)</li>
    </ul>
    <h3 id="ai-ml">AI / ML</h3>
    <ul>
      <li>Unsupervised anomaly detection using Isolation Forest</li>
      <li>Training on locally collected baseline data</li>
      <li>Configurable anomaly threshold</li>
      <li>Anomaly scoring and alerting</li>
    </ul>
    <h3 id="software">Software</h3>
    <ul>
      <li>Data acquisition and storage</li>
      <li>Real-time signal-processing pipeline</li>
      <li>REST API for data access</li>
      <li>Web-based dashboard</li>
      <li>Alert/notification system</li>
    </ul>
    <h3 id="Menu">Menu</h3>
    <ul>
      <li>Complete engineering Menu</li>
      <li>Calibration framework (procedures defined; measurements to be filled in)</li>
      <li>Test strategy and acceptance criteria</li>
      <li>Demo plan for hackathon/evaluation</li>
    </ul>
    <h2 id="out-of-scope-explicitly-excluded-from-mvp-">Out of Scope (Explicitly Excluded from MVP)</h2>
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Reason</th>
          <th>Future Possibility</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Event classification (explosion, meteor, volcano, etc.)</td>
          <td>Requires large labeled datasets</td>
          <td><code>Future Scope</code> — Phase 5</td>
        </tr>
        <tr>
          <td>Multi-sensor array processing</td>
          <td>Requires multiple synchronized stations</td>
          <td><code>Future Scope</code> — Phase 5</td>
        </tr>
        <tr>
          <td>Source localization / direction finding</td>
          <td>Requires array with known geometry</td>
          <td><code>Future Scope</code> — Phase 5</td>
        </tr>
        <tr>
          <td>Sub-milliPascal sensitivity</td>
          <td>Requires research-grade hardware</td>
          <td>Possible with upgraded sensors</td>
        </tr>
        <tr>
          <td>Certified safety/early-warning system</td>
          <td>Requires regulatory certification</td>
          <td>Out of scope entirely</td>
        </tr>
        <tr>
          <td>Global-scale monitoring network</td>
          <td>Requires significant infrastructure</td>
          <td><code>Future Scope</code></td>
        </tr>
        <tr>
          <td>Real-time source identification</td>
          <td>Requires classification models + arrays</td>
          <td><code>Future Scope</code></td>
        </tr>
        <tr>
          <td>CTBTO IMS compliance</td>
          <td>Requires specific standards and certification</td>
          <td>Out of scope entirely</td>
        </tr>
      </tbody>
    </table>
    <h2 id="known-limitations">Known Limitations</h2>
    <h3 id="hardware-limitations">Hardware Limitations</h3>
    <ol>
      <li>
        <p><strong>Wind Interference:</strong> Even with a spatial-averaging manifold, wind noise
          cannot be completely eliminated. Professional infrasound arrays may provide
          substantially better noise rejection because they use large-scale arrays (1–3 km) rather
          than prototype-scale manifolds. Performance degrades in high-wind conditions.</p>
      </li>
      <li>
        <p><strong>Temperature Drift:</strong> Electronic components and the reference chamber are
          sensitive to temperature changes. Without active temperature compensation or a thermally
          stable enclosure, slow temperature drift can introduce measurement errors.</p>
      </li>
      <li>
        <p><strong>Sensor Sensitivity:</strong> Prototype-grade pressure sensors may not achieve the
          noise floor of research-grade microbarometers. Very weak infrasound signals may fall
          below the sensor's detection threshold.</p>
      </li>
      <li>
        <p><strong>Localization Limitations:</strong> A single sensor cannot determine the
          direction, distance, or speed of an infrasound source. Localization requires multiple
          synchronized nodes.</p>
      </li>
      <li>
        <p><strong>Urban Noise Environment:</strong> Urban environments can significantly increase
          false positives. Urban deployments are subject to mechanical vibration, traffic-induced
          pressure fluctuations, HVAC systems, and other noise sources that can contaminate the
          infrasound measurement.</p>
      </li>
    </ol>
    <h3 id="signal-processing-limitations">Signal Processing Limitations</h3>
    <ol start={6}>
      <li>
        <p><strong>Frequency Resolution vs. Time Resolution Trade-off:</strong> Achieving fine
          frequency resolution at very low frequencies (e.g., 0.01 Hz) requires long analysis
          windows (100+ seconds). This limits the temporal precision of event detection.</p>
      </li>
      <li>
        <p><strong>Filter Edge Effects:</strong> Digital filters introduce transient artefacts at
          the beginning and end of data segments, which must be handled.</p>
      </li>
    </ol>
    <h3 id="ai-ml-limitations">AI / ML Limitations</h3>
    <ol start={8}>
      <li>
        <p><strong>Limited Training Data:</strong> The anomaly detection model is trained on
          whatever "normal" data is collected during the baseline period. If the baseline is not
          representative (e.g., collected during unusually calm or noisy conditions), the model's
          effectiveness will be reduced.</p>
      </li>
      <li>
        <p><strong>False Positives:</strong> Environmental changes (weather fronts, temperature
          shifts, nearby human activity) may produce signals that differ from the baseline,
          triggering false anomaly alerts.</p>
      </li>
      <li>
        <p><strong>False Negatives:</strong> If an anomalous event produces a signal that is similar
          in its extracted features to normal conditions, the model may not flag it.</p>
      </li>
      <li>
        <p><strong>No Event Identification:</strong> The MVP anomaly detection system cannot
          determine the cause of an anomaly. "Anomaly detected" means only that the signal differs
          from the learned baseline — it does not imply any specific event.</p>
      </li>
      <li>
        <p><strong>Concept Drift:</strong> Over time, "normal" atmospheric conditions change
          (seasonal variations, environmental changes). The model may need periodic retraining to
          remain effective.</p>
      </li>
    </ol>
    <h3 id="system-limitations">System Limitations</h3>
    <ol start={13}>
      <li>
        <p><strong>Prototype Status:</strong> The prototype is not a CTBTO replacement. It is a
          complementary local monitoring layer.</p>
      </li>
      <li>
        <p><strong>Not Certified:</strong> The prototype is not a certified safety or security
          detection system.</p>
      </li>
      <li>
        <p><strong>Multi-Source Fusion:</strong> Satellite, weather, and seismic fusion are
          considered future scope unless explicitly implemented.</p>
      </li>
      <li>
        <p><strong>Power Dependency:</strong> The system requires continuous power. Power
          interruptions result in data loss for the affected period.</p>
      </li>
      <li>
        <p><strong>Network Dependency:</strong> The dashboard and alert system require network
          connectivity. Offline operation is limited to local data recording.</p>
      </li>
      <li>
        <p><strong>Calibration Dependency:</strong> Sensor calibration is necessary before making
          quantitative claims. Quantitative measurements (in Pascals) require proper calibration.
          Without calibration, the system provides relative measurements only.</p>
      </li>
    </ol>
    <h3 id="validation-status-limitations">Validation Status Limitations</h3>
    <ol start={19}>
      <li>
        <p><strong>0.01–20 Hz (TARGET - Pending experimental validation) Response:</strong> Full frequency response across the target 0.01–20 Hz (TARGET - Pending experimental validation) band is not yet experimentally validated.</p>
      </li>
      <li>
        <p><strong>Noise Floor:</strong> Actual sensor noise floor is TBD / To Be Validated.</p>
      </li>
      <li>
        <p><strong>Sensitivity:</strong> Sensor sensitivity (V/Pa or counts/Pa) is TBD / calibration
          required.</p>
      </li>
      <li>
        <p><strong>Wind Attenuation:</strong> Wind-noise reduction effectiveness is TBD /
          experimental.</p>
      </li>
      <li>
        <p><strong>AI False-Positive Rate:</strong> AI false-positive rate is TBD / validation
          required with environmental datasets.</p>
      </li>
      <li>
        <p><strong>AI Anomaly ≠ Confirmed Event:</strong> An anomaly detection output does NOT
          confirm the physical cause of the signal. Anomaly screening identifies statistical
          deviations from a learned baseline, not specific physical events.</p>
      </li>
    </ol>
    <h2 id="assumption-summary">Assumption Summary</h2>
    <table>
      <thead>
        <tr>
          <th>Assumption</th>
          <th>Impact</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Deployment site has basic wind protection (not fully exposed hilltop)</td>
          <td>Affects wind-noise performance</td>
        </tr>
        <tr>
          <td>Stable power supply available</td>
          <td>Required for continuous operation</td>
        </tr>
        <tr>
          <td>Network connectivity available for dashboard/alerts</td>
          <td>Required for remote monitoring</td>
        </tr>
        <tr>
          <td>Ambient temperature range is moderate for electronics</td>
          <td>Extreme temperatures may affect performance</td>
        </tr>
        <tr>
          <td>Baseline data collection period is representative</td>
          <td>Directly affects AI model quality</td>
        </tr>
        <tr>
          <td>No strong local vibration sources (machinery, traffic)</td>
          <td>Vibration contamination degrades data quality</td>
        </tr>
      </tbody>
    </table>
    <hr />
    <p><em>See also: <Link to="/01-overview/problem-statement">Problem Statement</Link> | <Link to="/01-overview/project-objectives">Project Objectives</Link> | <Link to="/01-overview/key-features">Key
          Features</Link></em></p>
  </article>
</div>

    </main>
  );
}