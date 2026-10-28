import { Link } from 'react-router-dom';

export default function Page05AiMlModelInference() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">AI / ML</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Model Inference</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Model Inference</h1>
    <h2 id="inference-pipeline">Inference Pipeline</h2>
    <p>Model inference is the process of using the trained Isolation Forest model to score new, unseen
      data in real-time.</p>
    <pre><code className="language-mermaid">flowchart LR{"\n"}{"    "}NEW["New Signal\nWindow"] --&gt; FE["Feature\nExtraction"]{"\n"}{"    "}FE --&gt; NORM["Normalize\n(Using training params)"]{"\n"}{"    "}NORM --&gt; MODEL["Isolation Forest\n.predict()"]{"\n"}{"    "}MODEL --&gt; RAWSCORE["Raw Anomaly\nScore"]{"\n"}{"    "}RAWSCORE --&gt; NORMSCORE["Normalized\nAnomaly Index"]{"\n"}{"    "}NORMSCORE --&gt; DECISION{"{"}"Index &gt;\nThreshold?"{"}"}{"\n"}{"    "}DECISION --&gt;|Yes| ALERT["fa:fa-triangle-exclamation{"  "}Alert"]{"\n"}{"    "}DECISION --&gt;|No| LOG["fa:fa-check{"  "}Log"]{"\n"}</code></pre>
    <h2 id="inference-steps">Inference Steps</h2>
    <ol>
      <li><strong>Feature extraction:</strong> Compute the same features as during training, in the
        same order</li>
      <li><strong>Normalization:</strong> If feature scaling is applied, use the saved parameters from
        training (NOT recomputed). Feature scaling/normalization will be evaluated during
        experimentation. If applied, the transformation fitted on training data must be reused
        unchanged during inference.</li>
      <li><strong>Model prediction:</strong> Call <code>model.decision_function()</code> or
        <code>model.score_samples()</code> to get the raw normalized anomaly index
      </li>
      <li><strong>Project-defined normalization:</strong> Transform the raw score into the normalized
        anomaly index</li>
      <li><strong>Threshold comparison:</strong> Compare the normalized anomaly index against the
        configured threshold</li>
      <li><strong>Action:</strong> Log result; if anomalous, trigger alert</li>
    </ol>
    <h2 id="performance-targets">Performance Targets</h2>
    <blockquote>
      <p><strong>Performance targets will be benchmarked on the selected edge hardware after
          implementation.</strong></p>
    </blockquote>
    <table>
      <thead>
        <tr>
          <th>Metric</th>
          <th>Current Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>AI inference latency</td>
          <td>To Be Validated</td>
        </tr>
        <tr>
          <td>Feature extraction latency</td>
          <td>To Be Validated</td>
        </tr>
        <tr>
          <td>Memory usage</td>
          <td>To Be Validated</td>
        </tr>
        <tr>
          <td>CPU utilization</td>
          <td>To Be Validated</td>
        </tr>
        <tr>
          <td>Power consumption</td>
          <td>To Be Validated</td>
        </tr>
      </tbody>
    </table>
    <h2 id="failure-handling">Failure Handling</h2>
    <table>
      <thead>
        <tr>
          <th>Failure</th>
          <th>Handling</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Model file missing</td>
          <td>Log error; continue recording data without AI scoring</td>
        </tr>
        <tr>
          <td>Feature extraction error</td>
          <td>Skip window; log error</td>
        </tr>
        <tr>
          <td>Model prediction error</td>
          <td>Log error; continue with next window</td>
        </tr>
        <tr>
          <td>Score is NaN / invalid</td>
          <td>Treat as unknown; do not trigger alert or log as normal</td>
        </tr>
      </tbody>
    </table>
    <p><strong>Key principle:</strong> If the AI model fails, the system continues recording sensor
      data. AI failure should never cause data loss.</p>
    <hr />
    <p><em>See also: <Link to="/05-ai-ml/model-training">Model Training</Link> | <Link to="/05-ai-ml/threshold-selection">Threshold Selection</Link> | <Link to="/05-ai-ml/anomaly-detection">Anomaly Detection</Link></em></p>
  </article>
</div>

    </main>
  );
}