import { Link } from 'react-router-dom';

export default function Page10DeploymentDeploymentOverview() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Deployment</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Deployment Overview</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Deployment Overview</h1>
    <h2 id="deployment-configurations">Deployment Configurations</h2>
    <p>See <Link to="/02-system-architecture/deployment-architecture">Deployment Architecture</Link>
      for detailed deployment diagrams.</p>
    <table>
      <thead>
        <tr>
          <th>Configuration</th>
          <th>Description</th>
          <th>Complexity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Lab/Indoor</td>
          <td>Bench setup for development and testing</td>
          <td>Low</td>
        </tr>
        <tr>
          <td>Standalone Field</td>
          <td>Single station with local processing</td>
          <td>Medium</td>
        </tr>
        <tr>
          <td>Remote-Accessible</td>
          <td>Standalone + remote dashboard access</td>
          <td>Medium</td>
        </tr>
        <tr>
          <td>Multi-Station (<code>Future Scope</code>)</td>
          <td>Multiple stations reporting to central server</td>
          <td>High</td>
        </tr>
      </tbody>
    </table>
    <h2 id="deployment-checklist">Deployment Checklist</h2>
    <ul>
      <li><input disabled type="checkbox" /> Hardware assembled and tested in lab</li>
      <li><input disabled type="checkbox" /> Software installed on edge computer</li>
      <li><input disabled type="checkbox" /> Baseline data collected and AI model trained</li>
      <li><input disabled type="checkbox" /> Enclosure assembled with sealed cable entries</li>
      <li><input disabled type="checkbox" /> Wind-noise manifold installed at deployment site</li>
      <li><input disabled type="checkbox" /> Power supply connected and verified</li>
      <li><input disabled type="checkbox" /> Network connectivity established (if needed)</li>
      <li><input disabled type="checkbox" /> Dashboard accessible from client device</li>
      <li><input disabled type="checkbox" /> System monitored for first 24 hours</li>
    </ul>
    <hr />
    <p><em>See also: <Link to="/10-deployment/hardware-deployment">Hardware Deployment</Link> | <Link to="/10-deployment/software-deployment">Software Deployment</Link> | <Link to="/10-deployment/field-deployment">Field Deployment</Link></em></p>
  </article>
</div>

    </main>
  );
}