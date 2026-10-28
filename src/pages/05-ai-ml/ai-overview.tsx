import { Link } from 'react-router-dom';

export default function Page05AiMlAiOverview() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">AI / ML</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">AI Overview</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>AI Overview</h1>
    <h2 id="the-role-of-ai-in-infrasocket">The Role of AI in InfraSocket</h2>
    <blockquote>
      <p><strong>Critical Clarification:</strong>
        The AI does not physically detect pressure waves. The hardware sensor detects pressure
        waves. The AI analyzes the <strong>digitized, processed signal data</strong> to identify
        patterns that deviate from the learned baseline of normal atmospheric conditions.</p>
    </blockquote>
    <pre><code className="language-mermaid">flowchart LR{"\n"}{"    "}SENSOR["🔧 Hardware Sensor\n(Physical Detection)"] --&gt;|"Digital Signal"| SP["fa:fa-microchip{"  "}Signal Processing\n(Filtering, FFT)"]{"\n"}{"    "}SP --&gt;|"Feature Vector"| AI["fa:fa-brain{"  "}AI Model\n(Pattern Analysis)"]{"\n"}{"    "}AI --&gt;|"Normalized Anomaly Index"| DECISION["Normal /\nAnomaly"]{"\n"}</code></pre>
    <h2 id="what-ai-does-in-this-system">What AI Does in This System</h2>
    <table>
      <thead>
        <tr>
          <th>AI Function</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Learn baseline</strong></td>
          <td>Build a model of what "normal" atmospheric conditions look like in terms of signal
            features</td>
        </tr>
        <tr>
          <td><strong>Score new data</strong></td>
          <td>Assign an normalized anomaly index to each new signal window based on how different
            it is from the learned baseline</td>
        </tr>
        <tr>
          <td><strong>Flag anomalies</strong></td>
          <td>When the score exceeds a threshold, flag the data as anomalous</td>
        </tr>
      </tbody>
    </table>
    <h2 id="what-ai-does-not-do-in-this-system">What AI Does NOT Do in This System</h2>
    <table>
      <thead>
        <tr>
          <th>Non-Function</th>
          <th>Explanation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Physically sense pressure</td>
          <td>The hardware sensor does this</td>
        </tr>
        <tr>
          <td>Classify event types</td>
          <td>The MVP does not identify what caused an anomaly</td>
        </tr>
        <tr>
          <td>Replace signal processing</td>
          <td>FFT and filtering are deterministic math, not AI</td>
        </tr>
        <tr>
          <td>Guarantee detection</td>
          <td>The AI can miss events or produce false alarms</td>
        </tr>
        <tr>
          <td>Work without data</td>
          <td>The model must be trained on baseline data first</td>
        </tr>
      </tbody>
    </table>
    <h2 id="mvp-approach-unsupervised-anomaly-detection">Candidate Approach: Unsupervised Anomaly Detection
    </h2>
    <p>Unsupervised anomaly detection is an optional method that may be evaluated after the measurement
      chain and signal quality are validated. The documentation workspace contains no trained model,
      dataset, or evaluation evidence; this is not an implemented or tested capability.</p>
    <ol>
      <li><strong>No labeled dataset exists</strong> for the prototype's specific sensor in its
        specific environment</li>
      <li><strong>Anomalies are rare</strong> and unpredictable — we cannot collect examples of all
        possible anomalies</li>
      <li><strong>The system should work immediately</strong> after a baseline collection period,
        without manual labeling</li>
    </ol>
    <h3 id="chosen-algorithm-isolation-forest">Chosen Algorithm: Isolation Forest</h3>
    <p>Isolation Forest is an unsupervised anomaly detection algorithm well-suited for this application.
    </p>
    <blockquote>
      <p>See <Link to="/05-ai-ml/anomaly-detection">Anomaly Detection</Link> and <Link to="/05-ai-ml/model-selection">Model Selection</Link> for detailed Menu.</p>
    </blockquote>
    <h2 id="ai-pipeline">AI Pipeline</h2>
    <pre><code className="language-mermaid">flowchart TD{"\n"}{"    "}subgraph TRAINING["Training Phase (Offline)"]{"\n"}{"        "}COLLECT["Collect Normal\nBaseline Data\n(Hours/Days)"] --&gt; PROCESS_T["Signal Processing\n+ Feature Extraction"]{"\n"}{"        "}PROCESS_T --&gt; TRAIN["Train Isolation\nForest Model"]{"\n"}{"        "}TRAIN --&gt; MODEL["Trained Model\n(Saved to Disk)"]{"\n"}{"    "}end{"\n"}{"\n"}{"    "}subgraph INFERENCE["Inference Phase (Real-Time)"]{"\n"}{"        "}NEW_DATA["New Sensor\nData"] --&gt; PROCESS_I["Signal Processing\n+ Feature Extraction"]{"\n"}{"        "}PROCESS_I --&gt; LOAD["Load Trained\nModel"]{"\n"}{"        "}LOAD --&gt; SCORE["Compute\nNormalized Anomaly Index"]{"\n"}{"        "}SCORE --&gt; THRESHOLD{"{"}"Score &gt;\nThreshold?"{"}"}{"\n"}{"        "}THRESHOLD --&gt;|"Yes"| ANOMALY["fa:fa-triangle-exclamation{"  "}ANOMALY"]{"\n"}{"        "}THRESHOLD --&gt;|"No"| NORMAL["fa:fa-check{"  "}NORMAL"]{"\n"}{"    "}end{"\n"}</code></pre>
    <h2 id="relationship-between-signal-processing-and-ai">Relationship Between Signal Processing and AI
    </h2>
    <table>
      <thead>
        <tr>
          <th>Stage</th>
          <th>Type</th>
          <th>Deterministic?</th>
          <th>Output</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Filtering</td>
          <td>Signal Processing</td>
          <td>Yes</td>
          <td>Filtered signal</td>
        </tr>
        <tr>
          <td>FFT</td>
          <td>Signal Processing</td>
          <td>Yes</td>
          <td>Frequency spectrum</td>
        </tr>
        <tr>
          <td>Feature Extraction</td>
          <td>Signal Processing</td>
          <td>Yes</td>
          <td>Feature vector</td>
        </tr>
        <tr>
          <td>Isolation Forest</td>
          <td><strong>AI / Machine Learning</strong></td>
          <td>No (learned model)</td>
          <td>normalized anomaly index</td>
        </tr>
        <tr>
          <td>Threshold comparison</td>
          <td>Decision logic</td>
          <td>Yes</td>
          <td>Normal / Anomaly</td>
        </tr>
      </tbody>
    </table>
    <p>Only the Isolation Forest step is AI/ML. Everything before it is traditional signal processing.
    </p>
    <h2 id="future-ai-development">Future AI Development</h2>
    <table>
      <thead>
        <tr>
          <th>Phase</th>
          <th>Capability</th>
          <th>Requirement</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>MVP</strong></td>
          <td>Normal vs. Anomaly</td>
          <td>Normal baseline data only</td>
        </tr>
        <tr>
          <td><strong>Phase 2</strong></td>
          <td>Improved anomaly detection (multiple models)</td>
          <td>More baseline data, parameter tuning</td>
        </tr>
        <tr>
          <td><strong>Phase 3</strong> (<code>Future Scope</code>)</td>
          <td>Event classification (storm-like, explosion-like, etc.)</td>
          <td>Large labeled dataset</td>
        </tr>
        <tr>
          <td><strong>Phase 4</strong> (<code>Future Scope</code>)</td>
          <td>Deep learning on spectrograms</td>
          <td>GPU computing, large diverse dataset</td>
        </tr>
      </tbody>
    </table>
    <hr />
    <p><em>See also: <Link to="/05-ai-ml/anomaly-detection">Anomaly Detection</Link> | <Link to="/05-ai-ml/model-selection">Model Selection</Link> | <Link to="/05-ai-ml/dataset-strategy">Dataset
          Strategy</Link></em></p>
  </article>
</div>

    </main>
  );
}