import { Link } from 'react-router-dom';

export default function Page08TestingAiTesting() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Testing</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">AI Testing</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>AI Testing</h1>
    <h2 id="tests">Tests</h2>
    <h3 id="ai-01-normal-signal-classification">AI-01: Normal Signal Classification</h3>
    <p><strong>Objective:</strong> Verify that normal baseline data receives low Normalized Anomaly
      Indices.
      <strong>Procedure:</strong> Feed normal (quiet) signal data through the trained model.
      <strong>Pass criteria:</strong> Normalized Anomaly Indices are below the threshold for &gt;95%
      of windows.
    </p>
    <h3 id="ai-02-controlled-anomaly-detection">AI-02: Controlled Anomaly Detection</h3>
    <p><strong>Objective:</strong> Verify that a controlled test signal is detected as an anomaly.
      <strong>Procedure:</strong> Apply a controlled pressure signal; verify AI flags it.
      <strong>Pass criteria:</strong> normalized anomaly index exceeds the threshold.
    </p>
    <h3 id="ai-03-noise-only-input">AI-03: Noise-Only Input</h3>
    <p><strong>Objective:</strong> Verify that pure noise is not flagged as an anomaly.
      <strong>Procedure:</strong> Record in a noisy (but normal) environment; check Normalized Anomaly
      Indices.
      <strong>Pass criteria:</strong> False positive rate is acceptable (documented).
    </p>
    <h3 id="ai-04-borderline-signal">AI-04: Borderline Signal</h3>
    <p><strong>Objective:</strong> Assess detection of weak signals near the detection threshold.
      <strong>Procedure:</strong> Apply progressively weaker test signals; observe when detection
      fails.
      <strong>Pass criteria:</strong> Minimum detectable signal level is documented.
    </p>
    <h3 id="ai-05-false-positive-rate">AI-05: False Positive Rate</h3>
    <p><strong>Objective:</strong> Measure the rate of false alarms during normal operation.
      <strong>Procedure:</strong> Run the system for 24+ hours during normal conditions; count false
      alerts.
      <strong>Pass criteria:</strong> False positive rate is documented.
    </p>
    <h3 id="ai-06-false-negative-rate">AI-06: False Negative Rate</h3>
    <p><strong>Objective:</strong> Measure the rate of missed detections.
      <strong>Procedure:</strong> Apply multiple controlled test signals; count how many are missed.
      <strong>Pass criteria:</strong> Detection rate is documented.
    </p>
    <h3 id="ai-07-model-load-failure">AI-07: Model Load Failure</h3>
    <p><strong>Objective:</strong> Verify system continues operating if the AI model fails to load.
      <strong>Procedure:</strong> Delete or corrupt the model file; start the system.
      <strong>Pass criteria:</strong> Data recording continues; AI scoring is skipped with an error
      log.
    </p>
    <h2 id="results-template">Results Template</h2>
    <table>
      <thead>
        <tr>
          <th>Test ID</th>
          <th>Date</th>
          <th>Result</th>
          <th>Measured Value</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>AI-01</td>
          <td>___</td>
          <td>___</td>
          <td>Normal score: ___</td>
          <td />
        </tr>
        <tr>
          <td>AI-02</td>
          <td>___</td>
          <td>___</td>
          <td>normalized anomaly index: ___</td>
          <td />
        </tr>
        <tr>
          <td>AI-03</td>
          <td>___</td>
          <td>___</td>
          <td>Noise FPR: ___</td>
          <td />
        </tr>
        <tr>
          <td>AI-04</td>
          <td>___</td>
          <td>___</td>
          <td>Min detectable: ___</td>
          <td />
        </tr>
        <tr>
          <td>AI-05</td>
          <td>___</td>
          <td>___</td>
          <td>FPR: ___/24hr</td>
          <td />
        </tr>
        <tr>
          <td>AI-06</td>
          <td>___</td>
          <td>___</td>
          <td>Detection rate: ___</td>
          <td />
        </tr>
        <tr>
          <td>AI-07</td>
          <td>___</td>
          <td>___</td>
          <td>Graceful degradation: ___</td>
          <td />
        </tr>
      </tbody>
    </table>
    <hr />
    <p><em>See also: <Link to="/08-testing/testing-strategy">Testing Strategy</Link> | <Link to="/05-ai-ml/model-evaluation">Model Evaluation</Link></em></p>
  </article>
</div>

    </main>
  );
}