import { Link } from 'react-router-dom';

export default function Page05AiMlThresholdSelection() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">AI / ML</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Threshold Selection</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Threshold Selection</h1>
    <h2 id="the-threshold-problem">The Threshold Problem</h2>
    <p>The Isolation Forest produces a continuous normalized anomaly index. The threshold converts this
      continuous score into a binary decision: NORMAL or ANOMALY.</p>
    <p><strong>Setting the threshold is a trade-off:</strong></p>
    <ul>
      <li><strong>Lower threshold</strong> → more sensitive (catches more anomalies) but more false
        positives</li>
      <li><strong>Higher threshold</strong> → less sensitive (fewer false alarms) but may miss some
        anomalies</li>
    </ul>
    <h2 id="threshold-selection-methods">Threshold Selection Methods</h2>
    <h3 id="method-1-statistical-recommended-for-mvp-">Method 1: Statistical (Recommended for MVP)</h3>
    <ol>
      <li>Score all validation data (normal baseline)</li>
      <li>Compute the mean and standard deviation of scores</li>
      <li>Set threshold = mean + k × std_dev (e.g., k = 2 or 3)</li>
    </ol>
    <p>This places the threshold at a fixed number of standard deviations above the normal score
      distribution.</p>
    <h3 id="method-2-percentile-based">Method 2: Percentile-Based</h3>
    <p>Set the threshold at a high percentile (e.g., 95th or 99th) of the normal data score
      distribution. Any score above this is considered anomalous.</p>
    <h3 id="method-3-precision-recall-based-requires-level-2-data-">Method 3: Precision-Recall Based
      (Requires Level 2 Data)</h3>
    <p>If controlled anomaly test data is available:</p>
    <ol>
      <li>Compute precision and recall at various threshold values</li>
      <li>Plot the precision-recall curve</li>
      <li>Select the threshold that provides the best balance (e.g., maximum F1-score)</li>
    </ol>
    <h3 id="method-4-manual-expert">Method 4: Manual / Expert</h3>
    <p>Set the threshold manually based on observation of the score distribution and domain knowledge.
      Adjust through experience.</p>
    <h2 id="recommended-starting-approach">Recommended Starting Approach</h2>
    <p>For initial deployment, use <strong>Method 1</strong> (statistical) with k = 3 (three standard
      deviations above mean). This is conservative — it will produce few false positives but may miss
      weak anomalies. Adjust based on experience.</p>
    <h2 id="threshold-configuration">Threshold Configuration</h2>
    <p>The threshold should be configurable without retraining the model:</p>
    <pre><code>Configuration:{"\n"}{"  "}anomaly_threshold: 0.70{"\n"}{"  "}alert_cooldown_seconds: 300{"\n"}</code></pre>
    <ul>
      <li><code>anomaly_threshold</code>: Score above which a window is classified as anomalous</li>
      <li><code>alert_cooldown_seconds</code>: Minimum time between successive alerts (prevents alert
        flooding)</li>
    </ul>
    <h2 id="threshold-evaluation">Threshold Evaluation</h2>
    <table>
      <thead>
        <tr>
          <th>Metric</th>
          <th>Definition</th>
          <th>Impact of Threshold Change</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>True Positive Rate (Recall)</td>
          <td>Fraction of real anomalies correctly detected</td>
          <td>Lower threshold → higher recall</td>
        </tr>
        <tr>
          <td>False Positive Rate</td>
          <td>Fraction of normal windows incorrectly flagged</td>
          <td>Lower threshold → higher FPR</td>
        </tr>
        <tr>
          <td>Precision</td>
          <td>Fraction of flagged windows that are truly anomalous</td>
          <td>Lower threshold → lower precision</td>
        </tr>
        <tr>
          <td>F1-Score</td>
          <td>Harmonic mean of precision and recall</td>
          <td>Optimal threshold maximizes F1</td>
        </tr>
      </tbody>
    </table>
    <hr />
    <p><em>See also: <Link to="/05-ai-ml/anomaly-detection">Anomaly Detection</Link> | <Link to="/05-ai-ml/model-evaluation">Model Evaluation</Link> | <Link to="/05-ai-ml/false-positive-handling">False Positive Handling</Link></em></p>
  </article>
</div>

    </main>
  );
}