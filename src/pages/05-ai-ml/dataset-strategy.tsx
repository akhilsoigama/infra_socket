import { Link } from 'react-router-dom';

export default function Page05AiMlDatasetStrategy() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">AI / ML</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Dataset Strategy</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Dataset Strategy</h1>
    <h2 id="the-data-challenge">The Data Challenge</h2>
    <p>Unlike many AI applications, there is <strong>no large, pre-labeled infrasound anomaly
        dataset</strong> readily available for training a prototype sensor's anomaly detection
      model. This is because:</p>
    <ol>
      <li>Each sensor has its own noise characteristics and sensitivity</li>
      <li>Each deployment site has its own ambient infrasound environment</li>
      <li>Infrasound "anomalies" are context-dependent — what is anomalous at one site may be normal
        at another</li>
      <li>Publicly available infrasound data is primarily from research-grade stations, not prototype
        sensors</li>
    </ol>
    <p>The dataset strategy must be realistic for a student/hackathon project.</p>
    <h2 id="three-level-data-strategy">Three-Level Data Strategy</h2>
    <h3 id="level-1-normal-baseline-primary-required-for-mvp-">Level 1: Normal Baseline (Primary —
      Required for MVP)</h3>
    <p><strong>What:</strong> Collect data from the prototype sensor during normal, quiet atmospheric
      conditions.</p>
    <p><strong>How:</strong></p>
    <ol>
      <li>Deploy the sensor in a relatively quiet location</li>
      <li>Initial prototype validation may begin with shorter controlled recordings, while longer
        baseline collection is planned to capture daily and environmental variability.</li>
      <li>A 12–72 hour continuous recording (or longer) is the recommended baseline collection target.
      </li>
      <li>Process all recorded data through the signal-processing pipeline</li>
      <li>Extract features from each analysis window</li>
      <li>Apply quality checks — retain only high-quality windows</li>
      <li>This "normal baseline" dataset is used to train the Isolation Forest</li>
    </ol>
    <table>
      <thead>
        <tr>
          <th>Data Collection</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Short controlled recordings</td>
          <td>Prototype validation</td>
        </tr>
        <tr>
          <td>Extended environmental baseline</td>
          <td>Proposed</td>
        </tr>
        <tr>
          <td>12–72 hour baseline</td>
          <td>Recommended collection target</td>
        </tr>
        <tr>
          <td>Longer-term monitoring</td>
          <td>Future / To Be Validated</td>
        </tr>
      </tbody>
    </table>
    <p><strong>Volume estimate:</strong></p>
    <pre><code>At 1 window per 30 seconds:{"\n"}12 hours = 1,440 windows{"\n"}24 hours = 2,880 windows{"\n"}72 hours = 8,640 windows{"\n"}</code></pre>
    <p>Each window produces one feature vector (10–15 numbers). The amount and diversity of normal
      baseline data required for reliable performance will be determined experimentally.</p>
    <p><strong>Requirements:</strong></p>
    <ul>
      <li>Collection period should include day and night (diurnal variation)</li>
      <li>Avoid collection during obviously unusual conditions (storms, nearby construction)</li>
      <li>Log environmental conditions (temperature, wind) during collection</li>
      <li>Normal baseline data should ideally represent:<ul>
          <li>quiet conditions</li>
          <li>wind (various speeds)</li>
          <li>rain</li>
          <li>traffic</li>
          <li>construction</li>
          <li>machinery</li>
          <li>aircraft overhead</li>
          <li>weather changes (fronts, pressure changes)</li>
          <li>day/night variation</li>
          <li>temperature changes</li>
          <li>other local environmental conditions</li>
        </ul>
      </li>
    </ul>
    <blockquote>
      <p>The AI should learn the site's normal background, including its variability, before anomalies
        are flagged.</p>
    </blockquote>
    <h3 id="level-2-controlled-test-anomalies-secondary-recommended-">Level 2: Controlled Test Anomalies
      (Secondary — Recommended)</h3>
    <p><strong>What:</strong> Generate known, controlled low-frequency pressure signals in a safe
      laboratory or test environment to verify that the system detects them as anomalies.</p>
    <p><strong>How:</strong></p>
    <h3 id="a-synthetic-signal-injection">A. Synthetic signal injection</h3>
    <p>For validating:</p>
    <ul>
      <li>filtering</li>
      <li>FFT</li>
      <li>feature extraction</li>
      <li>AI pipeline</li>
      <li>anomaly detection logic</li>
    </ul>
    <blockquote>
      <p>Synthetic signal injection validates the signal-processing and AI pipeline but does not by
        itself validate atmospheric sensing performance.</p>
    </blockquote>
    <h3 id="b-controlled-pressure-variation">B. Controlled pressure variation</h3>
    <p>For validating:</p>
    <ul>
      <li>pressure sensor</li>
      <li>diaphragm</li>
      <li>differential pressure measurement</li>
      <li>reference chamber</li>
      <li>analog electronics</li>
      <li>ADC</li>
      <li>calibration</li>
    </ul>
    <h3 id="c-real-environmental-recordings">C. Real environmental recordings</h3>
    <p>For validating:</p>
    <ul>
      <li>environmental noise</li>
      <li>wind effects</li>
      <li>urban interference</li>
      <li>real-world anomaly screening</li>
    </ul>
    <blockquote>
      <p>An ordinary speaker cannot reliably generate/validate the complete 0.01–20 Hz (TARGET - Pending experimental validation) atmospheric
        infrasound band.</p>
    </blockquote>
    <h3 id="level-3-public-research-datasets-supplementary-future-scope-">Level 3: Public Research
      Datasets (Supplementary — Future Scope)</h3>
    <p><strong>What:</strong> Use publicly available infrasound datasets from research institutions to
      supplement local data.</p>
    <p><strong>Potential Sources:</strong></p>
    <table>
      <thead>
        <tr>
          <th>Source</th>
          <th>Description</th>
          <th>Access</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>EarthScope (formerly IRIS) Transportable Array</td>
          <td>Infrasound waveform data from US stations</td>
          <td>Public, FDSN web services</td>
        </tr>
        <tr>
          <td>CTBTO vDEC</td>
          <td>IMS infrasound station data</td>
          <td>Restricted; scientific access by application</td>
        </tr>
        <tr>
          <td>Boise State University Infrasound Repository</td>
          <td>Research datasets (volcanic, avalanche, etc.)</td>
          <td>Public (ScholarWorks)</td>
        </tr>
        <tr>
          <td>KNMI Data Platform</td>
          <td>Netherlands infrasound station data</td>
          <td>Public (NetCDF format)</td>
        </tr>
      </tbody>
    </table>
    <p><strong>Limitations:</strong></p>
    <ul>
      <li>Data is from different sensors with different characteristics than the prototype</li>
      <li>May require format conversion and preprocessing</li>
      <li>Licensing and terms of use must be respected</li>
      <li>Cannot be directly used to train the prototype's sensor-specific model, but can be used for
        algorithm development and testing</li>
    </ul>
    <h2 id="data-splitting">Data Splitting</h2>
    <p>For model evaluation (especially with Level 2 data):</p>
    <table>
      <thead>
        <tr>
          <th>Split</th>
          <th>Purpose</th>
          <th>Source</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Training set</td>
          <td>Train the Isolation Forest on normal data</td>
          <td>Level 1 (70–80% of normal baseline)</td>
        </tr>
        <tr>
          <td>Validation set</td>
          <td>Tune threshold and parameters</td>
          <td>Level 1 remainder + Level 2 controlled anomalies</td>
        </tr>
        <tr>
          <td>Test set</td>
          <td>Final performance evaluation</td>
          <td>Held-out Level 1 + Level 2 data</td>
        </tr>
      </tbody>
    </table>
    <h3 id="data-leakage-prevention">Data Leakage Prevention</h3>
    <blockquote>
      <p><strong>Data leakage</strong> occurs when information from the test or validation set
        accidentally influences the training process, leading to overly optimistic performance
        estimates.</p>
    </blockquote>
    <p>Prevention measures:</p>
    <ol>
      <li><strong>Temporal separation:</strong> If using time-series data, split by time — training
        data from earlier periods, test data from later periods</li>
      <li><strong>No feature computation on test data during training:</strong> Normalization
        parameters (mean, std) are computed only from training data</li>
      <li><strong>No model tuning on test data:</strong> The test set is used only for final
        evaluation, never for adjusting parameters</li>
    </ol>
    <h2 id="class-imbalance">Class Imbalance</h2>
    <p>In real deployment, anomalies are expected to be very rare (&lt; 1% of all windows). This creates
      a class imbalance problem:</p>
    <ul>
      <li><strong>For training:</strong> Not a problem — Isolation Forest trains on normal data only
      </li>
      <li><strong>For evaluation:</strong> A model that always predicts "normal" can achieve
        misleadingly high accuracy when anomalies are rare, while still being ineffective for
        anomaly detection. Therefore, precision, recall and F1-score should be evaluated alongside
        other appropriate metrics.</li>
    </ul>
    <h2 id="noise-contamination">Noise Contamination</h2>
    <p>Training data may inadvertently contain noise artefacts (sensor glitches, wind gusts, temperature
      spikes) that are not true infrasound events. Quality checks before training help, but some
      contamination is likely.</p>
    <p><strong>Mitigation:</strong></p>
    <ul>
      <li>Apply strict quality checks to training data</li>
      <li>Use the <code>contamination</code> parameter of Isolation Forest to account for a small
        fraction of "impure" training data</li>
      <li>Periodically retrain with cleaner data as more data becomes available</li>
    </ul>
    <h2 id="dataset-Menu">Dataset Menu</h2>
    <p>Every dataset used should be documented with:</p>
    <ul>
      <li>Collection start and end times</li>
      <li>Sensor configuration</li>
      <li>Deployment location</li>
      <li>Environmental conditions</li>
      <li>Quality check results</li>
      <li>Number of windows retained vs. rejected</li>
      <li>Any known issues</li>
    </ul>
    <hr />
    <p><em>See also: <Link to="/05-ai-ml/ai-overview">AI Overview</Link> | <Link to="/05-ai-ml/data-preprocessing">Data
          Preprocessing</Link> | <Link to="/05-ai-ml/model-training">Model Training</Link></em></p>
  </article>
</div>

    </main>
  );
}