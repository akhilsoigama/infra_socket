import { Link } from 'react-router-dom';

export default function Page11SecurityReliabilityFaultHandling() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Security &amp; Reliability</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Fault Handling</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Fault Handling</h1>
    <h2 id="fault-scenarios-and-responses">Fault Scenarios and Responses</h2>
    <table>
      <thead>
        <tr>
          <th>Fault</th>
          <th>Detection</th>
          <th>Response</th>
          <th>Recovery</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Sensor disconnection</td>
          <td>No data from DAQ</td>
          <td>Log error; mark sensor offline</td>
          <td>Reconnect; restart DAQ</td>
        </tr>
        <tr>
          <td>ADC saturation</td>
          <td>Sample at max/min value</td>
          <td>Flag affected data</td>
          <td>Investigate cause (overpressure, fault)</td>
        </tr>
        <tr>
          <td>Data gap</td>
          <td>Missing timestamps</td>
          <td>Log gap; flag affected windows</td>
          <td>Auto-resume when data returns</td>
        </tr>
        <tr>
          <td>Processing error</td>
          <td>Exception in processing thread</td>
          <td>Log error; skip window</td>
          <td>Auto-retry next window</td>
        </tr>
        <tr>
          <td>AI model missing</td>
          <td>File not found on load</td>
          <td>Log warning; disable AI</td>
          <td>Retrain and deploy model</td>
        </tr>
        <tr>
          <td>Database write failure</td>
          <td>Write exception</td>
          <td>Buffer in memory; retry</td>
          <td>Retry; alert if persistent</td>
        </tr>
        <tr>
          <td>Disk full</td>
          <td>Storage check</td>
          <td>Stop recording; alert</td>
          <td>Free space; apply retention</td>
        </tr>
        <tr>
          <td>Power failure</td>
          <td>N/A (undetectable)</td>
          <td>Data lost during outage</td>
          <td>Auto-start on power restore</td>
        </tr>
        <tr>
          <td>Network failure</td>
          <td>Connection timeout</td>
          <td>Local operation continues</td>
          <td>Reconnect when available</td>
        </tr>
      </tbody>
    </table>
    <h2 id="key-principle">Key Principle</h2>
    <blockquote>
      <p><strong>If AI fails, sensor data should still be recorded.</strong></p>
    </blockquote>
    <p>The data acquisition and storage layers operate independently of the AI and dashboard layers. No
      single-point failure should cause data loss.</p>
    <hr />
    <p><em>See also: <Link to="/11-security-reliability/reliability">Reliability</Link> | <Link to="/11-security-reliability/recovery">Recovery</Link></em>
    </p>
  </article>
</div>

    </main>
  );
}