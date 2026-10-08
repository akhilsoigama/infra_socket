import { Link } from 'react-router-dom';

export default function Page11SecurityReliabilityDataIntegrity() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Security &amp; Reliability</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Data Integrity</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Data Integrity</h1>
    <h2 id="timestamp-integrity">Timestamp Integrity</h2>
    <ul>
      <li>All timestamps use UTC to avoid timezone ambiguity</li>
      <li>Timestamps are generated at the point of ADC sampling, not at the point of storage</li>
      <li>Clock synchronization (NTP) is recommended if the system has internet access</li>
    </ul>
    <h2 id="measurement-integrity">Measurement Integrity</h2>
    <ul>
      <li>Raw ADC values are stored without modification</li>
      <li>Calibrated values are computed from raw values and stored separately</li>
      <li>Quality flags indicate the reliability of each measurement</li>
    </ul>
    <h2 id="database-integrity">Database Integrity</h2>
    <ul>
      <li>Use SQLite WAL (Write-Ahead Logging) mode for crash safety</li>
      <li>Periodic integrity checks: <code>PRAGMA integrity_check</code></li>
      <li>Foreign key constraints enforced</li>
    </ul>
    <h2 id="checksums-future-scope-">Checksums (<code>Future Scope</code>)</h2>
    <p>For critical deployments, compute checksums on data files to detect corruption.</p>
    <hr />
    <p><em>See also: <Link to="/11-security-reliability/security">Security</Link> | <Link to="/11-security-reliability/fault-handling">Fault
          Handling</Link></em></p>
  </article>
</div>

    </main>
  );
}