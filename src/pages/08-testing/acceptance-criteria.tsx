import { Link } from 'react-router-dom';

export default function Page08TestingAcceptanceCriteria() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Testing</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Acceptance Criteria</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Acceptance Criteria</h1>
    <h2 id="criteria-for-prototype-demonstration">Criteria for Prototype Demonstration</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Criterion</th>
          <th>Verification Method</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>AC-01</td>
          <td>System powers on and begins data acquisition</td>
          <td>Hardware test HW-01</td>
          <td><em>Pending</em></td>
        </tr>
        <tr>
          <td>AC-02</td>
          <td>Sensor responds to applied pressure changes</td>
          <td>Hardware test HW-02</td>
          <td><em>Pending</em></td>
        </tr>
        <tr>
          <td>AC-03</td>
          <td>ADC produces valid samples at the documented selected rate (engineering target: approximately 100 Hz (TARGET - Pending validation)), with timing and anti-alias behavior recorded</td>
          <td>Signal test SIG-01</td>
          <td><em>Pending</em></td>
        </tr>
        <tr>
          <td>AC-04</td>
          <td>Digital filter response matches its specified coefficients and passes the configured approximate 0.01–20 Hz (TARGET - Pending experimental validation) target band; this does not establish physical sensor/system response</td>
          <td>Signal test SIG-04</td>
          <td><em>Pending</em></td>
        </tr>
        <tr>
          <td>AC-05</td>
          <td>FFT correctly identifies known test frequencies</td>
          <td>Signal test SIG-01</td>
          <td><em>Pending</em></td>
        </tr>
        <tr>
          <td>AC-06</td>
          <td>Feature extraction produces valid feature vectors</td>
          <td>Integration test INT-01</td>
          <td><em>Pending</em></td>
        </tr>
        <tr>
          <td>AC-07</td>
          <td>raw anomaly scores normal data below threshold</td>
          <td>AI test AI-01</td>
          <td><em>Pending</em></td>
        </tr>
        <tr>
          <td>AC-08</td>
          <td>Isolation Forest flags controlled anomaly above threshold</td>
          <td>AI test AI-02</td>
          <td><em>Pending</em></td>
        </tr>
        <tr>
          <td>AC-09</td>
          <td>Data is stored in database and retrievable via API</td>
          <td>Integration test INT-02, INT-03</td>
          <td><em>Pending</em></td>
        </tr>
        <tr>
          <td>AC-10</td>
          <td>Dashboard displays live waveform, spectrum, and normalized anomaly index</td>
          <td>Integration test INT-01</td>
          <td><em>Pending</em></td>
        </tr>
        <tr>
          <td>AC-11</td>
          <td>Alert is generated on dashboard when anomaly is detected</td>
          <td>Integration test INT-01</td>
          <td><em>Pending</em></td>
        </tr>
        <tr>
          <td>AC-12</td>
          <td>System operates continuously for 24+ hours without failure</td>
          <td>Signal test SIG-05, Performance tests</td>
          <td><em>Pending</em></td>
        </tr>
      </tbody>
    </table>
    <h2 id="demonstration-readiness-checklist">Demonstration Readiness Checklist</h2>
    <ul>
      <li><input disabled type="checkbox" /> All hardware assembled and connected</li>
      <li><input disabled type="checkbox" /> Software installed and running</li>
      <li><input disabled type="checkbox" /> Baseline data collected and model trained</li>
      <li><input disabled type="checkbox" /> Controlled test signal available</li>
      <li><input disabled type="checkbox" /> Dashboard accessible via web browser</li>
      <li><input disabled type="checkbox" /> Demo flow rehearsed</li>
    </ul>
    <hr />
    <p><em>See also: <Link to="/08-testing/testing-strategy">Testing Strategy</Link> | <Link to="/14-demo/demo-plan">Demo Plan</Link></em></p>
  </article>
</div>

    </main>
  );
}