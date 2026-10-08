import { Link } from 'react-router-dom';

export default function Page05AiMlModelEvaluation() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">AI / ML</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Model Evaluation</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Model Evaluation</h1>
    <h2 id="evaluation-metrics">Evaluation Metrics</h2>
    <h3 id="precision">Precision</h3>
    <blockquote>
      <p><strong>Simple:</strong> Of all the times the system said "ANOMALY," how many were actually
        anomalies?</p>
    </blockquote>
    <pre><code>Precision = True Positives / (True Positives + False Positives){"\n"}</code></pre>
    <p>High precision = few false alarms.</p>
    <h3 id="recall-sensitivity-">Recall (Sensitivity)</h3>
    <blockquote>
      <p><strong>Simple:</strong> Of all the actual anomalies that occurred, how many did the system
        catch?</p>
    </blockquote>
    <pre><code>Recall = True Positives / (True Positives + False Negatives){"\n"}</code></pre>
    <p>High recall = few missed anomalies.</p>
    <h3 id="f1-score">F1-Score</h3>
    <blockquote>
      <p><strong>Simple:</strong> A single number that balances precision and recall. Ranges from 0
        (worst) to 1 (best).</p>
    </blockquote>
    <pre><code>F1 = 2 × (Precision × Recall) / (Precision + Recall){"\n"}</code></pre>
    <h3 id="false-positive-rate-fpr-">False Positive Rate (FPR)</h3>
    <pre><code>FPR = False Positives / (False Positives + True Negatives){"\n"}</code></pre>
    <h3 id="detection-latency">Detection Latency</h3>
    <p>Time from when an anomalous signal enters the sensor to when the alert is generated. Includes
      signal window accumulation, processing, and inference time.</p>
    <h2 id="evaluation-strategy">Evaluation Strategy</h2>
    <p>Since real anomaly events are rare and unpredictable, evaluation relies primarily on controlled
      test data (Level 2):</p>
    <table>
      <thead>
        <tr>
          <th>Test</th>
          <th>Input</th>
          <th>Expected Output</th>
          <th>Evaluates</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Normal baseline data</td>
          <td>Quiet atmospheric recording</td>
          <td>NORMAL for all/most windows</td>
          <td>False positive rate</td>
        </tr>
        <tr>
          <td>Controlled pressure pulse</td>
          <td>Known pressure step</td>
          <td>ANOMALY</td>
          <td>True positive detection</td>
        </tr>
        <tr>
          <td>Controlled sinusoidal signal</td>
          <td>Known frequency sine wave</td>
          <td>ANOMALY</td>
          <td>Frequency sensitivity</td>
        </tr>
        <tr>
          <td>Noise-only input</td>
          <td>High wind or electrical noise</td>
          <td>NORMAL (ideally)</td>
          <td>Noise rejection</td>
        </tr>
        <tr>
          <td>Borderline signal</td>
          <td>Weak controlled signal</td>
          <td>May or may not detect</td>
          <td>Sensitivity threshold</td>
        </tr>
      </tbody>
    </table>
    <h2 id="evaluation-record-template">Evaluation Record Template</h2>
    <table>
      <thead>
        <tr>
          <th>Metric</th>
          <th>Value</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Total test windows</td>
          <td><em>To be measured</em></td>
          <td />
        </tr>
        <tr>
          <td>True positives</td>
          <td><em>To be measured</em></td>
          <td />
        </tr>
        <tr>
          <td>False positives</td>
          <td><em>To be measured</em></td>
          <td />
        </tr>
        <tr>
          <td>True negatives</td>
          <td><em>To be measured</em></td>
          <td />
        </tr>
        <tr>
          <td>False negatives</td>
          <td><em>To be measured</em></td>
          <td />
        </tr>
        <tr>
          <td>Precision</td>
          <td><em>To be calculated</em></td>
          <td />
        </tr>
        <tr>
          <td>Recall</td>
          <td><em>To be calculated</em></td>
          <td />
        </tr>
        <tr>
          <td>F1-Score</td>
          <td><em>To be calculated</em></td>
          <td />
        </tr>
        <tr>
          <td>FPR</td>
          <td><em>To be calculated</em></td>
          <td />
        </tr>
        <tr>
          <td>Detection latency</td>
          <td><em>To be measured</em></td>
          <td>seconds</td>
        </tr>
      </tbody>
    </table>
    <blockquote>
      <p><strong>Important:</strong> Do not fabricate performance numbers. These fields are templates
        to be filled with actual measured results during testing.</p>
    </blockquote>
    <hr />
    <p><em>See also: <Link to="/05-ai-ml/model-training">Model Training</Link> | <Link to="/05-ai-ml/threshold-selection">Threshold Selection</Link> | <Link to="/08-testing/ai-testing">AI Testing</Link></em></p>
  </article>
</div>

    </main>
  );
}