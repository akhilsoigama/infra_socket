import { Link } from 'react-router-dom';

export default function Page08TestingTestingStrategy() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Testing</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Testing Strategy</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Testing Strategy</h1>
    <h2 id="testing-layers">Testing Layers</h2>
    <pre><code className="language-mermaid">flowchart TD{"\n"}{"    "}HW["Hardware Testing\n(Sensor, ADC, Power)"] --&gt; SIG["Signal Testing\n(Known signals, sweep)"]{"\n"}{"    "}SIG --&gt; AI_TEST["AI Testing\n(Normal, anomaly, FP/FN)"]{"\n"}{"    "}AI_TEST --&gt; INT["Integration Testing\n(End-to-end pipeline)"]{"\n"}{"    "}INT --&gt; PERF["Performance Testing\n(Latency, throughput)"]{"\n"}{"    "}PERF --&gt; ENV["Environmental Testing\n(Temperature, wind)"]{"\n"}{"    "}ENV --&gt; ACC["Acceptance Testing\n(Criteria verification)"]{"\n"}</code></pre>
    <h2 id="test-categories">Test Categories</h2>
    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>What Is Tested</th>
          <th>Key Questions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><Link to="/08-testing/hardware-testing">Hardware</Link></td>
          <td>Physical components</td>
          <td>Does the sensor respond? Does the ADC digitize correctly?</td>
        </tr>
        <tr>
          <td><Link to="/08-testing/sensor-testing">Sensor</Link></td>
          <td>Sensor-specific behaviour</td>
          <td>Sensitivity, linearity, noise floor?</td>
        </tr>
        <tr>
          <td><Link to="/08-testing/signal-testing">Signal</Link></td>
          <td>Signal processing pipeline</td>
          <td>Correct filtering? Correct FFT?</td>
        </tr>
        <tr>
          <td><Link to="/08-testing/ai-testing">AI</Link></td>
          <td>Anomaly detection model</td>
          <td>Detects controlled anomalies? False positive rate?</td>
        </tr>
        <tr>
          <td><Link to="/08-testing/integration-testing">Integration</Link></td>
          <td>Complete pipeline</td>
          <td>Data flows correctly from sensor to dashboard?</td>
        </tr>
        <tr>
          <td><Link to="/08-testing/performance-testing">Performance</Link></td>
          <td>Speed and resource usage</td>
          <td>Meets latency and memory targets?</td>
        </tr>
        <tr>
          <td><Link to="/08-testing/environmental-testing">Environmental</Link></td>
          <td>Real-world conditions</td>
          <td>Handles temperature changes? Wind?</td>
        </tr>
        <tr>
          <td><Link to="/08-testing/acceptance-criteria">Acceptance</Link></td>
          <td>Pass/fail criteria</td>
          <td>System meets documented requirements?</td>
        </tr>
      </tbody>
    </table>
    <h2 id="test-environment">Test Environment</h2>
    <table>
      <thead>
        <tr>
          <th>Environment</th>
          <th>Purpose</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Lab bench</td>
          <td>Component-level testing, controlled conditions</td>
        </tr>
        <tr>
          <td>Quiet indoor room</td>
          <td>Baseline noise characterization</td>
        </tr>
        <tr>
          <td>Outdoor (sheltered)</td>
          <td>Realistic but moderate conditions</td>
        </tr>
        <tr>
          <td>Outdoor (exposed)</td>
          <td>Stress testing, wind exposure</td>
        </tr>
      </tbody>
    </table>
    <hr />
    <p><em>See also: <Link to="/08-testing/hardware-testing">Hardware Testing</Link> | <Link to="/08-testing/acceptance-criteria">Acceptance Criteria</Link></em></p>
  </article>
</div>

    </main>
  );
}