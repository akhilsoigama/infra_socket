import { Link } from 'react-router-dom';

export default function Page10DeploymentFieldDeployment() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Deployment</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Field Deployment</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Field Deployment</h1>
    <h2 id="field-deployment-considerations">Field Deployment Considerations</h2>
    <table>
      <thead>
        <tr>
          <th>Factor</th>
          <th>Guidance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Location</td>
          <td>Away from roads, machinery, HVAC; some wind shelter preferred</td>
        </tr>
        <tr>
          <td>Ground surface</td>
          <td>Flat, stable; avoid areas prone to flooding</td>
        </tr>
        <tr>
          <td>Power access</td>
          <td>Mains power within cable reach, or battery/solar system</td>
        </tr>
        <tr>
          <td>Connectivity</td>
          <td>LAN or Wi-Fi for dashboard access; cellular for remote sites</td>
        </tr>
        <tr>
          <td>Physical security</td>
          <td>Fenced area or locked enclosure</td>
        </tr>
        <tr>
          <td>Accessibility</td>
          <td>Must be reachable for maintenance and calibration</td>
        </tr>
      </tbody>
    </table>
    <h2 id="field-deployment-procedure">Field Deployment Procedure</h2>
    <ol>
      <li><strong>Survey site:</strong> Assess noise environment, wind exposure, power availability
      </li>
      <li><strong>Install hardware:</strong> Mount enclosure, lay manifold tubing, connect sensor</li>
      <li><strong>Collect baseline:</strong> Run for 24–72 hours to collect normal data</li>
      <li><strong>Train model:</strong> Train Isolation Forest on the baseline data from this specific
        site</li>
      <li><strong>Verify operation:</strong> Confirm dashboard works, apply a test signal if possible
      </li>
      <li><strong>Monitor:</strong> Check system health daily for the first week</li>
    </ol>
    <h2 id="long-duration-operation">Long-Duration Operation</h2>
    <p>For deployments lasting weeks or months:</p>
    <ul>
      <li>Set up automatic data backup</li>
      <li>Configure email/webhook alerts for anomalies AND system health issues</li>
      <li>Schedule periodic maintenance visits</li>
      <li>Plan for data retention and storage management</li>
    </ul>
    <hr />
    <p><em>See also: <Link to="/10-deployment/deployment-overview">Deployment Overview</Link> | <Link to="/10-deployment/monitoring">Monitoring</Link> | <Link to="/10-deployment/maintenance">Maintenance</Link></em></p>
  </article>
</div>

    </main>
  );
}