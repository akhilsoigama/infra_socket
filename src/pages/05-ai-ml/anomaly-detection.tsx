import { Link } from 'react-router-dom';

export default function Page05AiMlAnomalyDetection() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">AI / ML</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Anomaly Detection</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Anomaly Detection</h1>
    <h2 id="definition">Definition</h2>
    <blockquote>
      <p><strong>An anomaly is a signal pattern that significantly differs from the learned normal
          behaviour.</strong></p>
    </blockquote>
    <p>An anomaly detector assigns a score or flag to data that differs from a defined baseline. It
      does not identify the physical cause of that deviation. Baseline quality, sensor health,
      preprocessing, feature choice, threshold selection, and evaluation all affect the output; an
      unsupervised method can still produce false positives and false negatives.</p>
    <blockquote>
      <p><strong>AI is an optional analytical layer, not a substitute for sensor sensitivity,
          calibration, wind-noise reduction, or signal-quality checks.</strong> Isolation Forest is a
        candidate method only; no trained model, project dataset, or evaluation result is evidenced
        in this workspace.</p>
      <p><strong>Anomaly detection ≠ event classification.</strong> An anomaly is not a confirmed
        physical event, and an anomaly score must be interpreted by an analyst.</p>
    </blockquote>
    <h2 id="how-isolation-forest-works">How Isolation Forest Works</h2>
    <blockquote>
      <p><strong>Simple Explanation:</strong>
        Imagine you have a bag of mostly red marbles (normal data) and occasionally a blue marble
        (anomaly). If you randomly pick properties to sort by (size, weight, colour), the blue
        marble will be isolated from the group much faster than any individual red marble. Isolation
        Forest works the same way — it randomly partitions the data and measures how quickly each
        data point becomes isolated. Anomalies are isolated faster because they are "few and
        different."</p>
    </blockquote>
    <blockquote>
      <p><strong>Technical Explanation:</strong>
        Isolation Forest constructs an ensemble of binary decision trees (Isolation Trees). Each
        tree recursively partitions the data by randomly selecting a feature and a random split
        value within the feature's range.</p>
      <ul>
        <li><strong>Normal points</strong> are similar to many other points, so they require many
          splits (deep tree paths) to become isolated.</li>
        <li><strong>Anomalous points</strong> are few and different, so they require fewer splits
          (shorter tree paths) to become isolated.</li>
      </ul>
      <p>The <strong>normalized anomaly index</strong> is derived from the average path length across
        all trees. Shorter average paths indicate higher Normalized Anomaly Indices.</p>
    </blockquote>
    <h2 id="isolation-forest-for-infrasocket">Isolation Forest for InfraSocket</h2>
    <h3 id="architecture">Architecture</h3>
    <pre><code className="language-mermaid">flowchart TD{"\n"}{"    "}SENSOR["Pressure Sensor"] --&gt; ADC["ADC"]{"\n"}{"    "}ADC --&gt; SP["Signal Processing\n(Filter, FFT)"]{"\n"}{"    "}SP --&gt; FE["Feature Extraction\n(RMS, Energy, Frequency,\nCentroid, Bandwidth, ...)"]{"\n"}{"    "}FE --&gt; IF["Isolation Forest\nModel"]{"\n"}{"    "}IF --&gt; RAWSCORE["Raw Normalized Anomaly Index"]{"\n"}{"    "}RAWSCORE --&gt; NORMSCORE["Project-defined\nNormalized Anomaly Index"]{"\n"}{"    "}NORMSCORE --&gt; THRESH{"{"}"Index &gt; Threshold?"{"}"}{"\n"}{"    "}THRESH --&gt;|"Yes"| ANOM["fa:fa-triangle-exclamation{"  "}POTENTIAL ANOMALY\nAlert + Log"]{"\n"}{"    "}THRESH --&gt;|"No"| NORM["fa:fa-check{"  "}NORMAL\nLog"]{"\n"}</code></pre>
    <h3 id="training-process">Training Process</h3>
    <ol>
      <li><strong>Collect baseline data:</strong> Record sensor data during normal atmospheric
        conditions for an extended period (hours to days)</li>
      <li><strong>Process data:</strong> Apply the full signal-processing pipeline to the baseline
        data</li>
      <li><strong>Extract features:</strong> Compute feature vectors for each analysis window</li>
      <li><strong>Quality filter:</strong> Remove windows with quality issues (saturation, gaps,
        excessive noise)</li>
      <li><strong>Train model:</strong> Fit the Isolation Forest on the clean feature vectors</li>
      <li><strong>Save model:</strong> Serialize the trained model to disk for inference</li>
    </ol>
    <h3 id="inference-process">Inference Process</h3>
    <ol>
      <li><strong>Receive new data:</strong> Signal window arrives from real-time processing</li>
      <li><strong>Extract features:</strong> Same feature extraction as training</li>
      <li><strong>Normalize features:</strong> Apply the same normalization used during training, if
        feature scaling is used (see note below)</li>
      <li><strong>Predict:</strong> Pass the feature vector through the trained Isolation Forest</li>
      <li><strong>Score:</strong> Receive the raw normalized anomaly index; apply project-defined
        normalization to produce the anomaly index</li>
      <li><strong>Compare:</strong> Compare the normalized anomaly index to the threshold</li>
      <li><strong>Act:</strong> Log the result; if anomalous, trigger alert</li>
    </ol>
    <h3 id="model-parameters">Model Parameters</h3>
    <table>
      <thead>
        <tr>
          <th>Parameter</th>
          <th>Description</th>
          <th>Recommended Starting Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>n_estimators</code></td>
          <td>Number of trees in the forest</td>
          <td>100–200</td>
        </tr>
        <tr>
          <td><code>max_samples</code></td>
          <td>Number of samples used to build each tree</td>
          <td>256 or "auto"</td>
        </tr>
        <tr>
          <td><code>contamination</code></td>
          <td>Expected proportion of anomalies in training data</td>
          <td>0.01–0.05 (or "auto")</td>
        </tr>
        <tr>
          <td><code>max_features</code></td>
          <td>Number of features used per tree</td>
          <td>1.0 (all features)</td>
        </tr>
        <tr>
          <td><code>random_state</code></td>
          <td>Seed for reproducibility</td>
          <td>Fixed integer (e.g., 42)</td>
        </tr>
      </tbody>
    </table>
    <p><code>Assumption</code>: These are starting values. Optimal parameters will be determined through
      testing and validation.</p>
    <h2 id="anomaly-index-interpretation">Anomaly Index Interpretation</h2>
    <p>The raw raw anomaly score is processed through a project-defined normalization to produce a
      normalized anomaly index. This index is used for visualization and threshold-based decision
      making.</p>
    <table>
      <thead>
        <tr>
          <th>Index Range</th>
          <th>Interpretation</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Low</td>
          <td>Clearly normal</td>
          <td>No action</td>
        </tr>
        <tr>
          <td>Below threshold</td>
          <td>Likely normal</td>
          <td>No action (log for analysis)</td>
        </tr>
        <tr>
          <td>Near threshold</td>
          <td>Uncertain / borderline</td>
          <td>Log with attention flag</td>
        </tr>
        <tr>
          <td>Above threshold</td>
          <td>Potential anomaly</td>
          <td>Trigger alert</td>
        </tr>
        <tr>
          <td>High</td>
          <td>Strong potential anomaly</td>
          <td>Trigger high-priority alert</td>
        </tr>
      </tbody>
    </table>
    <blockquote>
      <p><strong>Important:</strong> The Normalized Anomaly Index is a project-defined visualization
        and decision-support value. It is not a probability and must not be interpreted as model
        confidence. Actual index distributions and appropriate thresholds will be determined by
        testing with real data. See <Link to="/05-ai-ml/threshold-selection">Threshold Selection</Link>.</p>
    </blockquote>
    <h2 id="why-isolation-forest-is-suitable-for-this-application">Why Isolation Forest Is Suitable for
      This Application</h2>
    <table>
      <thead>
        <tr>
          <th>Reason</th>
          <th>Explanation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Unsupervised</strong></td>
          <td>Does not require labeled anomaly examples</td>
        </tr>
        <tr>
          <td><strong>Works without large labeled datasets</strong></td>
          <td>The anomaly detector can be trained without requiring labelled anomaly examples, but
            the amount and diversity of normal baseline data required for reliable performance
            will be determined experimentally</td>
        </tr>
        <tr>
          <td><strong>Computationally lightweight</strong></td>
          <td>Fast training and inference; suitability for specific edge hardware to be
            benchmarked</td>
        </tr>
        <tr>
          <td><strong>No distribution assumptions</strong></td>
          <td>Does not assume data follows a specific distribution</td>
        </tr>
        <tr>
          <td><strong>Interpretable</strong></td>
          <td>normalized anomaly index has an intuitive meaning</td>
        </tr>
        <tr>
          <td><strong>Well-established</strong></td>
          <td>Published in IEEE ICDM 2008, widely used and validated</td>
        </tr>
      </tbody>
    </table>
    <h2 id="limitations-of-anomaly-detection">Limitations of Anomaly Detection</h2>
    <ol>
      <li>
        <p><strong>Anomaly ≠ event identification:</strong> A detected anomaly could be caused by a
          distant explosion, a weather front, sensor malfunction, or an animal bumping the sensor.
          The model does not know the cause.</p>
      </li>
      <li>
        <p><strong>Baseline dependency:</strong> The model's definition of "normal" is limited to
          the conditions present during training. Seasonal changes, new environmental factors, or
          sensor degradation may require retraining.</p>
      </li>
      <li>
        <p><strong>False positives:</strong> Environmental changes that differ from the training
          baseline (e.g., a nearby construction project starting) may be flagged as anomalies even
          though they are not infrasound events of interest.</p>
      </li>
      <li>
        <p><strong>False negatives:</strong> Anomalous events that happen to produce feature vectors
          similar to normal conditions may be missed.</p>
      </li>
      <li>
        <p><strong>No severity estimation:</strong> The normalized anomaly index indicates how
          different a signal is, not how "important" or "dangerous" it is.</p>
      </li>
    </ol>
    <hr />
    <p><em>See also: <Link to="/05-ai-ml/ai-overview">AI Overview</Link> | <Link to="/05-ai-ml/model-selection">Model
          Selection</Link> | <Link to="/05-ai-ml/threshold-selection">Threshold Selection</Link> | <Link to="/05-ai-ml/false-positive-handling">False Positive Handling</Link></em></p>
  </article>
</div>

    </main>
  );
}