import { Link } from 'react-router-dom';

export default function Page11SecurityReliabilityRecovery() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Security &amp; Reliability</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Recovery</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Recovery</h1>
    <h2 id="recovery-procedures">Recovery Procedures</h2>
    <h3 id="after-power-failure">After Power Failure</h3>
    <ol>
      <li>System auto-starts when power is restored (if configured with systemd)</li>
      <li>Database opens in recovery mode (WAL journal replay)</li>
      <li>DAQ resumes data acquisition</li>
      <li>Processing pipeline resumes</li>
      <li>AI loads model and resumes scoring</li>
      <li>Data gap for the outage period is recorded</li>
    </ol>
    <h3 id="after-software-crash">After Software Crash</h3>
    <ol>
      <li>System auto-restarts the failed service</li>
      <li>Last known good state is restored from database</li>
      <li>Processing resumes from the current time (gap during crash is recorded)</li>
    </ol>
    <h3 id="after-hardware-failure">After Hardware Failure</h3>
    <ol>
      <li>Identify the failed component (sensor, ADC, power)</li>
      <li>Replace the failed component</li>
      <li>Recalibrate if the sensor or analog front end was replaced</li>
      <li>Retrain AI model if the sensor was replaced (different characteristics)</li>
    </ol>
    <h3 id="after-database-corruption">After Database Corruption</h3>
    <ol>
      <li>Stop all services</li>
      <li>Attempt database recovery: <code>sqlite3 data.db ".recover" | sqlite3 recovered.db</code>
      </li>
      <li>If recovery fails, restore from the most recent backup</li>
      <li>Data between the last backup and the corruption is lost</li>
      <li>Restart services</li>
    </ol>
    <hr />
    <p><em>See also: <Link to="/11-security-reliability/fault-handling">Fault Handling</Link> | <Link to="/11-security-reliability/reliability">Reliability</Link></em></p>
  </article>
</div>

    </main>
  );
}