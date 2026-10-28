import { Link } from 'react-router-dom';

export default function Page08TestingIntegrationTesting() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Testing</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Integration Testing</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Integration Testing</h1>
    <h2 id="end-to-end-integration-test">End-to-End Integration Test</h2>
    <p><strong>Objective:</strong> Verify that the complete pipeline works from sensor input to
      dashboard output.</p>
    <pre><code className="language-mermaid">flowchart LR{"\n"}{"    "}SEN["Sensor"] --&gt; ADC["ADC"] --&gt; SP["Signal\nProcessing"] --&gt; AI["AI"] --&gt; DB["Database"] --&gt; DASH["Dashboard"]{"\n"}</code></pre>
    <h3 id="int-01-complete-pipeline">INT-01: Complete Pipeline</h3>
    <p><strong>Procedure:</strong></p>
    <ol>
      <li>Power on the system</li>
      <li>Verify sensor readings appear in the raw data store</li>
      <li>Verify signal processing produces filtered data and features</li>
      <li>Verify AI produces Normalized Anomaly Indices</li>
      <li>Verify data appears on the dashboard</li>
      <li>Apply a controlled test signal</li>
      <li>Verify the dashboard shows the signal in the waveform</li>
      <li>Verify the FFT shows the correct frequency peak</li>
      <li>Verify the AI flags the signal as an anomaly</li>
      <li>Verify an alert appears on the dashboard</li>
    </ol>
    <p><strong>Pass criteria:</strong> All 10 steps complete successfully.</p>
    <h3 id="int-02-data-persistence">INT-02: Data Persistence</h3>
    <p><strong>Procedure:</strong> Run system for 1 hour; restart; verify all data is preserved in
      database.
      <strong>Pass criteria:</strong> No data loss after restart.
    </p>
    <h3 id="int-03-api-data-consistency">INT-03: API Data Consistency</h3>
    <p><strong>Procedure:</strong> Query API endpoints; verify returned data matches database contents.
      <strong>Pass criteria:</strong> API responses match stored data.
    </p>
    <h2 id="results-template">Results Template</h2>
    <table>
      <thead>
        <tr>
          <th>Test ID</th>
          <th>Date</th>
          <th>Result</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>INT-01</td>
          <td>___</td>
          <td><em>Pass/Fail</em></td>
          <td />
        </tr>
        <tr>
          <td>INT-02</td>
          <td>___</td>
          <td><em>Pass/Fail</em></td>
          <td />
        </tr>
        <tr>
          <td>INT-03</td>
          <td>___</td>
          <td><em>Pass/Fail</em></td>
          <td />
        </tr>
      </tbody>
    </table>
    <hr />
    <p><em>See also: <Link to="/08-testing/testing-strategy">Testing Strategy</Link> | <Link to="/08-testing/performance-testing">Performance Testing</Link></em></p>
  </article>
</div>

    </main>
  );
}