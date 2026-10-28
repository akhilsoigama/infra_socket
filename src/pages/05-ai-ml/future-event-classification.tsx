import { Link } from 'react-router-dom';

export default function Page05AiMlFutureEventClassification() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">AI / ML</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Future Event Classification</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Future Event Classification</h1>
    <blockquote>
      <p><strong>This section describes <code>Future Scope</code> capabilities that are NOT part of
          the MVP.</strong></p>
    </blockquote>
    <h2 id="the-distinction">The Distinction</h2>
    <pre><code>Anomaly Detection (MVP):{"     "}Is this signal UNUSUAL?{"      "}→ Yes / No{"\n"}Event Classification (Future): WHAT TYPE of unusual event? → Storm / Explosion / Meteor / Unknown{"\n"}</code></pre>
    <p>These are fundamentally different problems:</p>
    <ul>
      <li><strong>Anomaly detection</strong> requires only normal baseline data (unsupervised)</li>
      <li><strong>Event classification</strong> requires labeled examples of each event type
        (supervised)</li>
    </ul>
    <h2 id="why-classification-is-not-in-the-mvp">Why Classification Is Not in the MVP</h2>
    <ol>
      <li><strong>No labeled dataset:</strong> The prototype does not have labeled examples of
        different infrasound event types</li>
      <li><strong>Sensor-specific:</strong> Classification models trained on other sensors/locations
        may not transfer</li>
      <li><strong>Complexity:</strong> Supervised classification requires data collection, labeling,
        model design, and extensive validation</li>
      <li><strong>Validation difficulty:</strong> Without ground truth, classification accuracy cannot
        be verified</li>
    </ol>
    <h2 id="future-classification-architecture">Future Classification Architecture</h2>
    <pre><code className="language-mermaid">flowchart TD{"\n"}{"    "}FE["Feature\nExtraction"] --&gt; AD["Anomaly\nDetection"]{"\n"}{"    "}AD --&gt;|"ANOMALY"| CLASS["Event\nClassifier"]{"\n"}{"    "}AD --&gt;|"NORMAL"| LOG["Log as\nNormal"]{"\n"}{"    "}CLASS --&gt; TYPES["Predicted Event Type:\n• Storm-like\n• Explosion-like\n• Rocket launch-like\n• Meteor-like\n• Volcanic-like\n• Unknown"]{"\n"}</code></pre>
    <h2 id="potential-future-event-classes">Potential Future Event Classes</h2>
    <table>
      <thead>
        <tr>
          <th>Class</th>
          <th>Typical Spectral Characteristics</th>
          <th>Data Source Needed</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Storm-like</td>
          <td>Broadband, sustained, variable</td>
          <td>Weather-correlated recordings</td>
        </tr>
        <tr>
          <td>Explosion-like</td>
          <td>Impulsive, broadband, short duration</td>
          <td>Controlled blasts or public datasets</td>
        </tr>
        <tr>
          <td>Rocket launch-like</td>
          <td>Strong, sustained, specific frequency profile</td>
          <td>Launch monitoring datasets</td>
        </tr>
        <tr>
          <td>Meteor-like</td>
          <td>Impulsive, broadband, often with dispersive characteristics</td>
          <td>Fireball databases, CTBTO data</td>
        </tr>
        <tr>
          <td>Volcanic-like</td>
          <td>Sustained, tremor-like, specific frequency bands</td>
          <td>Volcano monitoring stations</td>
        </tr>
        <tr>
          <td>Unknown</td>
          <td>Does not match other classes</td>
          <td>Catch-all category</td>
        </tr>
      </tbody>
    </table>
    <blockquote>
      <p><strong>Important note on naming:</strong> These class names use "-like" terminology
        intentionally. The system would classify signals as "explosion-like," not confirm that an
        explosion occurred. Confirmation requires additional evidence.</p>
    </blockquote>
    <h2 id="requirements-for-future-classification">Requirements for Future Classification</h2>
    <table>
      <thead>
        <tr>
          <th>Requirement</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Labeled dataset</td>
          <td>Hundreds to thousands of labeled examples per class</td>
        </tr>
        <tr>
          <td>Diverse conditions</td>
          <td>Data from multiple sensors, locations, and conditions</td>
        </tr>
        <tr>
          <td>Supervised model</td>
          <td>CNN on spectrograms, or gradient-boosted trees on features</td>
        </tr>
        <tr>
          <td>Evaluation framework</td>
          <td>Per-class precision, recall, confusion matrix</td>
        </tr>
        <tr>
          <td>Expert validation</td>
          <td>Domain expert review of classification results</td>
        </tr>
      </tbody>
    </table>
    <h2 id="recommended-approach-when-ready-">Recommended Approach (When Ready)</h2>
    <ol>
      <li>Start by classifying only 2–3 clearly distinct classes</li>
      <li>Always include an "Unknown" class for signals that don't match any learned pattern</li>
      <li>Use a confidence threshold — only report a class if confidence exceeds a threshold;
        otherwise report "Unknown"</li>
      <li>Never report a classification as fact — always indicate it is a model prediction</li>
    </ol>
    <hr />
    <p><em>See also: <Link to="/05-ai-ml/ai-overview">AI Overview</Link> | <Link to="/05-ai-ml/anomaly-detection">Anomaly
          Detection</Link> | <Link to="/16-roadmap/future-scope">Future Scope</Link></em></p>
  </article>
</div>

    </main>
  );
}