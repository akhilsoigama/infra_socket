import { Link } from 'react-router-dom';

export default function Page05AiMlFalsePositiveHandling() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">AI / ML</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">False Positive Handling</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>False Positive Handling</h1>
    <h2 id="what-are-false-positives-">What Are False Positives?</h2>
    <p>A false positive occurs when the system flags a signal window as "ANOMALY" when it is actually a
      normal environmental variation. False positives reduce user trust and can lead to alert fatigue.
    </p>
    <h2 id="common-causes">Common Causes</h2>
    <table>
      <thead>
        <tr>
          <th>Cause</th>
          <th>Mechanism</th>
          <th>Mitigation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Weather change</td>
          <td>New weather pattern differs from training baseline</td>
          <td>Periodic retraining; wider baseline collection</td>
        </tr>
        <tr>
          <td>Wind gust</td>
          <td>Brief pressure spike from wind</td>
          <td>Quality checks; improved manifold</td>
        </tr>
        <tr>
          <td>Temperature shift</td>
          <td>Thermal drift affects features</td>
          <td>Temperature monitoring; compensation</td>
        </tr>
        <tr>
          <td>Vehicle/traffic</td>
          <td>Nearby vehicle creates pressure pulse</td>
          <td>Site selection; vibration isolation</td>
        </tr>
        <tr>
          <td>Construction/activity</td>
          <td>New local noise source</td>
          <td>Retrain baseline; adaptive threshold</td>
        </tr>
        <tr>
          <td>Sensor drift</td>
          <td>Electronics drift over time</td>
          <td>Periodic recalibration; health monitoring</td>
        </tr>
        <tr>
          <td>Insufficient training data</td>
          <td>Baseline does not capture full range of normal</td>
          <td>Longer baseline collection</td>
        </tr>
        <tr>
          <td>Industrial machinery</td>
          <td>Periodic or aperiodic mechanical vibration</td>
          <td>Frequency-based filtering; site selection</td>
        </tr>
        <tr>
          <td>Aircraft</td>
          <td>Overhead flights produce pressure signatures</td>
          <td>Baseline should include aircraft events</td>
        </tr>
        <tr>
          <td>Thunderstorms</td>
          <td>Atmospheric pressure transients</td>
          <td>Quality checks; weather correlation</td>
        </tr>
        <tr>
          <td>HVAC systems</td>
          <td>Nearby heating/cooling creates pressure variations</td>
          <td>Site selection; baseline inclusion</td>
        </tr>
        <tr>
          <td>Temperature-related pressure changes</td>
          <td>Diurnal thermal effects on atmosphere</td>
          <td>Longer baseline; temperature logging</td>
        </tr>
      </tbody>
    </table>
    <h2 id="environmental-interference-processing-architecture">Environmental Interference Processing
      Architecture</h2>
    <blockquote>
      <p>AI alone does not solve environmental interference. Wind-noise reduction and signal quality
        checks are necessary before AI screening.</p>
    </blockquote>
    <pre><code className="language-text">Atmospheric Pressure Variation{"\n"}{"            "}↓{"\n"}{"     "}Pressure Sensor{"\n"}{"            "}↓{"\n"}{"   "}Wind-Noise Reduction{"\n"}{"            "}↓{"\n"}{"    "}Analog Filtering{"\n"}{"            "}↓{"\n"}{"          "}ADC{"\n"}{"            "}↓{"\n"} Signal Quality Checks{"\n"}{"            "}↓{"\n"} Frequency / Amplitude / Duration Analysis{"\n"}{"            "}↓{"\n"}{"       "}AI Screening{"\n"}{"            "}↓{"\n"} Normal / Potential Anomaly{"\n"}{"            "}↓{"\n"} Further Correlation / Analysis{"\n"}</code></pre>
    <blockquote>
      <p><strong>Important:</strong> Local urban disturbances can generate pressure fluctuations that
        differ from the learned baseline. InfraSocket therefore treats AI as anomaly screening
        rather than definitive event identification. Urban deployment is a challenging validation
        scenario. The prototype will characterize environmental noise before making claims about
        event-detection performance.</p>
    </blockquote>
    <h2 id="mitigation-strategies">Mitigation Strategies</h2>
    <h3 id="1-confirmation-window">1. Confirmation Window</h3>
    <p>Require anomalous scores in multiple consecutive windows before triggering an alert:</p>
    <pre><code>Single anomalous window → Log only (no alert){"\n"}2+ consecutive anomalous windows → Trigger alert{"\n"}</code></pre>
    <h3 id="2-alert-cooldown">2. Alert Cooldown</h3>
    <p>After an alert, suppress further alerts for a configurable period (e.g., 5 minutes).</p>
    <h3 id="3-multi-feature-confirmation">3. Multi-Feature Confirmation</h3>
    <p>If possible, check whether the anomaly is visible in multiple independent features (time-domain
      AND frequency-domain).</p>
    <h3 id="4-temperature-correlation">4. Temperature Correlation</h3>
    <p>If an anomaly correlates with a sharp temperature change, it may be a thermal artefact rather
      than an infrasound event. Flag these for review.</p>
    <h3 id="5-periodic-baseline-update">5. Periodic Baseline Update</h3>
    <p>Retrain the model periodically with recent data to account for gradual environmental changes.</p>
    <h3 id="6-human-review">6. Human Review</h3>
    <p>For the prototype, include a "review" workflow where flagged anomalies can be manually inspected
      and marked as true positive, false positive, or uncertain.</p>
    <hr />
    <p><em>See also: <Link to="/05-ai-ml/threshold-selection">Threshold Selection</Link> | <Link to="/05-ai-ml/model-evaluation">Model Evaluation</Link> | <Link to="/05-ai-ml/anomaly-detection">Anomaly
          Detection</Link></em></p>
  </article>
</div>

    </main>
  );
}