import { Link } from 'react-router-dom';

export default function Page10DeploymentMaintenance() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Deployment</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Maintenance</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Maintenance</h1>
    <h2 id="routine-maintenance">Routine Maintenance</h2>
    <table>
      <thead>
        <tr>
          <th>Task</th>
          <th>Frequency</th>
          <th>Procedure</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Check manifold inlets</td>
          <td>Monthly</td>
          <td>Clear any debris, insects, or water from inlets</td>
        </tr>
        <tr>
          <td>Check capillary</td>
          <td>Monthly</td>
          <td>Verify capillary is not clogged</td>
        </tr>
        <tr>
          <td>Clean enclosure</td>
          <td>Quarterly</td>
          <td>Remove dust, check seals</td>
        </tr>
        <tr>
          <td>Verify calibration</td>
          <td>Quarterly</td>
          <td>Run a quick pressure step test</td>
        </tr>
        <tr>
          <td>Update software</td>
          <td>As needed</td>
          <td>Apply patches, update dependencies</td>
        </tr>
        <tr>
          <td>Retrain AI model</td>
          <td>Quarterly or after environment changes</td>
          <td>Collect new baseline, retrain</td>
        </tr>
        <tr>
          <td>Backup data</td>
          <td>Weekly</td>
          <td>Copy database to external storage</td>
        </tr>
        <tr>
          <td>Check power supply</td>
          <td>Monthly</td>
          <td>Verify voltage, replace battery if applicable</td>
        </tr>
        <tr>
          <td>Review alert history</td>
          <td>Weekly</td>
          <td>Investigate any unreviewed anomalies</td>
        </tr>
      </tbody>
    </table>
    <h2 id="troubleshooting">Troubleshooting</h2>
    <table>
      <thead>
        <tr>
          <th>Symptom</th>
          <th>Possible Cause</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>No sensor data</td>
          <td>Cable disconnected, sensor failure</td>
          <td>Check connections; swap sensor if available</td>
        </tr>
        <tr>
          <td>High noise</td>
          <td>Wind, vibration, electronic interference</td>
          <td>Check manifold, isolation, shielding</td>
        </tr>
        <tr>
          <td>Constant DC drift</td>
          <td>Capillary clogged, temperature extreme</td>
          <td>Clear capillary; improve thermal insulation</td>
        </tr>
        <tr>
          <td>Many false positives</td>
          <td>Environmental change, baseline outdated</td>
          <td>Retrain model with new baseline</td>
        </tr>
        <tr>
          <td>Dashboard not loading</td>
          <td>Web server crashed, network issue</td>
          <td>Restart service; check network</td>
        </tr>
        <tr>
          <td>Database full</td>
          <td>Retention policy not applied</td>
          <td>Apply retention; expand storage</td>
        </tr>
      </tbody>
    </table>
    <hr />
    <p><em>See also: <Link to="/10-deployment/monitoring">Monitoring</Link> | <Link to="/11-security-reliability/fault-handling">Fault Handling</Link></em></p>
  </article>
</div>

    </main>
  );
}