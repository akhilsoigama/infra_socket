import { Link } from 'react-router-dom';

export default function Page10DeploymentMonitoring() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Deployment</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Monitoring</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Monitoring</h1>
    <h2 id="system-health-monitoring">System Health Monitoring</h2>
    <table>
      <thead>
        <tr>
          <th>Component</th>
          <th>Health Check</th>
          <th>Frequency</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Sensor</td>
          <td>Data arriving at expected rate</td>
          <td>Every 10 seconds</td>
        </tr>
        <tr>
          <td>ADC</td>
          <td>No saturation, no gaps</td>
          <td>Continuous</td>
        </tr>
        <tr>
          <td>Signal processing</td>
          <td>Windows completing on schedule</td>
          <td>Per window</td>
        </tr>
        <tr>
          <td>AI inference</td>
          <td>Model loaded, scoring functional</td>
          <td>Per window</td>
        </tr>
        <tr>
          <td>Database</td>
          <td>Writable, not full</td>
          <td>Every minute</td>
        </tr>
        <tr>
          <td>Dashboard</td>
          <td>Web server responding</td>
          <td>Every 30 seconds</td>
        </tr>
        <tr>
          <td>Temperature</td>
          <td>Within operating range</td>
          <td>Every minute</td>
        </tr>
        <tr>
          <td>Disk space</td>
          <td>Sufficient remaining storage</td>
          <td>Every hour</td>
        </tr>
      </tbody>
    </table>
    <h2 id="health-status-endpoint">Health Status Endpoint</h2>
    <p>See <code>GET /api/v1/system/status</code> in <Link to="/06-software/api-design">API
        Design</Link>.</p>
    <h2 id="alerting-on-system-issues">Alerting on System Issues</h2>
    <p>In addition to infrasound anomaly alerts, the system should alert on:</p>
    <ul>
      <li>Sensor disconnection</li>
      <li>Data gaps &gt; 60 seconds</li>
      <li>Database approaching capacity</li>
      <li>Processing pipeline failure</li>
      <li>AI model not loaded</li>
    </ul>
    <hr />
    <p><em>See also: <Link to="/10-deployment/deployment-overview">Deployment Overview</Link> | <Link to="/10-deployment/maintenance">Maintenance</Link></em></p>
  </article>
</div>

    </main>
  );
}