import { Link } from 'react-router-dom';

export default function Page10DeploymentHardwareDeployment() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Deployment</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Hardware Deployment</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Hardware Deployment</h1>
    <h2 id="site-selection">Site Selection</h2>
    <ul>
      <li>Away from strong noise sources (roads, machinery, HVAC)</li>
      <li>Level ground for manifold installation</li>
      <li>Access to power</li>
      <li>Protection from extreme weather exposure</li>
    </ul>
    <h2 id="installation-steps">Installation Steps</h2>
    <ol>
      <li>Position enclosure at the deployment site</li>
      <li>Install wind-noise manifold with inlets at ground level</li>
      <li>Connect manifold tubes to sensor pressure port through enclosure</li>
      <li>Connect reference chamber capillary vent</li>
      <li>Connect power supply</li>
      <li>Connect data cable to edge computer</li>
      <li>Verify sensor readings</li>
    </ol>
    <h2 id="physical-security">Physical Security</h2>
    <ul>
      <li>Secure enclosure against tampering (locks, tamper-evident seals)</li>
      <li>Mark cables and tubing to prevent accidental disconnection</li>
      <li>Document the installation with photographs</li>
    </ul>
    <hr />
    <p><em>See also: <Link to="/10-deployment/deployment-overview">Deployment Overview</Link> | <Link to="/03-hardware/environmental-enclosure">Environmental Enclosure</Link></em></p>
  </article>
</div>

    </main>
  );
}