import { Link } from 'react-router-dom';

export default function Page05AiMlModelTraining() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">AI / ML</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Model Training</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Model Training</h1>
    <h2 id="training-data-requirements">Training Data Requirements</h2>
    <table>
      <thead>
        <tr>
          <th>Requirement</th>
          <th>Specification</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Data source</td>
          <td>Level 1 baseline (normal atmospheric conditions)</td>
        </tr>
        <tr>
          <td>Minimum duration</td>
          <td>12+ hours of continuous, quality-checked data</td>
        </tr>
        <tr>
          <td>Recommended duration</td>
          <td>24–72 hours (captures diurnal variation)</td>
        </tr>
        <tr>
          <td>Quality</td>
          <td>Only windows passing all quality checks</td>
        </tr>
        <tr>
          <td>Conditions</td>
          <td>Representative of expected deployment conditions</td>
        </tr>
      </tbody>
    </table>
    <h2 id="training-workflow">Training Workflow</h2>
    <pre><code className="language-mermaid">flowchart TD{"\n"}{"    "}COLLECT["1. Collect Baseline\nSensor Data"] --&gt; PROCESS["2. Signal Processing\n(Filter, FFT)"]{"\n"}{"    "}PROCESS --&gt; EXTRACT["3. Feature Extraction"]{"\n"}{"    "}EXTRACT --&gt; QC["4. Quality Filtering"]{"\n"}{"    "}QC --&gt; SPLIT["5. Train/Validation\nSplit (80/20)"]{"\n"}{"    "}SPLIT --&gt; NORM["6. Compute Normalization\nParameters (μ, σ)"]{"\n"}{"    "}NORM --&gt; NORMALIZE["7. Normalize\nFeature Vectors"]{"\n"}{"    "}NORMALIZE --&gt; FIT["8. Fit Isolation Forest\n(Training Set)"]{"\n"}{"    "}FIT --&gt; VALIDATE["9. Validate on\nValidation Set"]{"\n"}{"    "}VALIDATE --&gt; TUNE["10. Tune Parameters\nif Needed"]{"\n"}{"    "}TUNE --&gt; SAVE["11. Save Model +\nNormalization Params"]{"\n"}</code></pre>
    <h2 id="training-parameters">Training Parameters</h2>
    <pre><code className="language-python"># Proposed Isolation Forest configuration{"\n"}from sklearn.ensemble import IsolationForest{"\n"}{"\n"}model = IsolationForest({"\n"}{"    "}n_estimators=100,{"       "}# Number of trees{"\n"}{"    "}max_samples='auto',{"     "}# Samples per tree (auto = min(256, n_samples)){"\n"}{"    "}contamination=0.02,{"     "}# Expected fraction of anomalies in training data{"\n"}{"    "}max_features=1.0,{"       "}# Use all features{"\n"}{"    "}random_state=42,{"        "}# Reproducibility{"\n"}{"    "}n_jobs=-1{"               "}# Use all CPU cores{"\n"}){"\n"}{"\n"}model.fit(X_train_normalized){"\n"}</code></pre>
    <p><code>Assumption</code>: These are starting parameters. Tuning may be needed based on validation
      results.</p>
    <h2 id="artifacts-to-save">Artifacts to Save</h2>
    <p>After training, save:</p>
    <ol>
      <li><strong>The trained model</strong> (e.g., using <code>joblib</code> or <code>pickle</code>)
      </li>
      <li><strong>Normalization parameters</strong> (mean and standard deviation for each feature)
      </li>
      <li><strong>Feature list</strong> (ordered list of feature names, to ensure correct alignment)
      </li>
      <li><strong>Training metadata</strong> (date, dataset size, parameters, quality check summary)
      </li>
    </ol>
    <h2 id="retraining-schedule">Retraining Schedule</h2>
    <table>
      <thead>
        <tr>
          <th>Trigger</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Initial deployment</td>
          <td>Train on first baseline collection</td>
        </tr>
        <tr>
          <td>Seasonal change</td>
          <td>Consider retraining with new baseline</td>
        </tr>
        <tr>
          <td>Hardware change</td>
          <td>Retrain required (new sensor characteristics)</td>
        </tr>
        <tr>
          <td>High false positive rate</td>
          <td>Investigate and potentially retrain with more data</td>
        </tr>
        <tr>
          <td>Deployment site change</td>
          <td>Retrain required (new ambient environment)</td>
        </tr>
      </tbody>
    </table>
    <h2 id="training-validation">Training Validation</h2>
    <p>After training, validate the model by:</p>
    <ol>
      <li><strong>Score the validation set</strong> — check that normal validation data receives low
        Normalized Anomaly Indices</li>
      <li><strong>Score known test anomalies</strong> (Level 2 data) — check that controlled anomalies
        receive high scores</li>
      <li><strong>Plot score distribution</strong> — normal data should cluster at low scores;
        anomalies should be clearly separated</li>
    </ol>
    <hr />
    <p><em>See also: <Link to="/05-ai-ml/dataset-strategy">Dataset Strategy</Link> | <Link to="/05-ai-ml/model-inference">Model Inference</Link> | <Link to="/05-ai-ml/model-evaluation">Model
          Evaluation</Link></em></p>
  </article>
</div>

    </main>
  );
}