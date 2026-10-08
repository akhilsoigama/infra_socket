import { Link } from 'react-router-dom';

export default function Page10DeploymentSoftwareDeployment() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Deployment</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Software Deployment</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Software Deployment</h1>
    <h2 id="prerequisites">Prerequisites</h2>
    <ul>
      <li>Edge computer with Linux OS (Raspberry Pi OS, Ubuntu) or Windows/macOS for laptop-based
        deployment</li>
      <li>Python 3.8+ with required packages (NumPy, SciPy, scikit-learn, Flask/FastAPI)</li>
      <li>SQLite (included with Python)</li>
    </ul>
    <h2 id="installation-steps">Installation Steps</h2>
    <ol>
      <li>Clone or copy the software to the edge computer</li>
      <li>Install Python dependencies: <code>pip install -r requirements.txt</code></li>
      <li>Configure settings (sensor port, sampling rate, threshold) in configuration file</li>
      <li>Start the data acquisition service</li>
      <li>Start the web dashboard service</li>
      <li>Verify data appears on the dashboard</li>
    </ol>
    <h2 id="configuration">Configuration</h2>
    <pre><code className="language-yaml"># config.yaml (proposed){"\n"}sensor:{"\n"}{"  "}port: "/dev/ttyUSB0"{"    "}# Serial port for DAQ{"\n"}{"  "}sampling_rate: 50{"       "}# Hz{"\n"}{"  "}adc_bits: 16{"\n"}{"\n"}processing:{"\n"}{"  "}window_length: 30{"       "}# seconds{"\n"}{"  "}filter_low: 0.01{"        "}# Hz (high-pass cutoff){"\n"}{"  "}filter_high: 20.0{"       "}# Hz (low-pass cutoff){"\n"}{"  "}filter_order: 4{"\n"}{"\n"}ai:{"\n"}{"  "}model_path: "models/isolation_forest.joblib"{"\n"}{"  "}threshold: 0.70{"\n"}{"  "}alert_cooldown: 300{"     "}# seconds{"\n"}{"\n"}dashboard:{"\n"}{"  "}host: "0.0.0.0"{"\n"}{"  "}port: 8080{"\n"}{"\n"}database:{"\n"}{"  "}path: "data/InfraSocket.db"{"\n"}</code></pre>
    <h2 id="service-management">Service Management</h2>
    <p>For production-like deployment, use systemd (Linux) to manage services:</p>
    <ul>
      <li>Auto-start on boot</li>
      <li>Auto-restart on failure</li>
      <li>Log management</li>
    </ul>
    <hr />
    <p><em>See also: <Link to="/10-deployment/deployment-overview">Deployment Overview</Link> | <Link to="/06-software/backend">Backend</Link></em></p>
  </article>
</div>

    </main>
  );
}