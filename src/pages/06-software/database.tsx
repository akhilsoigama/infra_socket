import { Link } from 'react-router-dom';

export default function Page06SoftwareDatabase() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Software</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Database</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Database</h1>
    <h2 id="purpose">Purpose</h2>
    <p>The database stores all system data persistently: raw measurements, processed signal features,
      anomaly detection results, sensor metadata, and system logs.</p>
    <h2 id="database-selection">Database Selection</h2>
    <table>
      <thead>
        <tr>
          <th>Option</th>
          <th>Advantages</th>
          <th>Disadvantages</th>
          <th>Recommendation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>SQLite</strong></td>
          <td>Zero-config, file-based, lightweight</td>
          <td>Single-writer, limited concurrency</td>
          <td><strong>MVP prototype</strong></td>
        </tr>
        <tr>
          <td>PostgreSQL</td>
          <td>Full-featured, concurrent, scalable</td>
          <td>Requires installation and management</td>
          <td>Production/multi-station</td>
        </tr>
        <tr>
          <td>InfluxDB</td>
          <td>Optimized for time-series</td>
          <td>Specialized, learning curve</td>
          <td><code>Future Scope</code></td>
        </tr>
      </tbody>
    </table>
    <p><strong>MVP Recommendation:</strong> SQLite — simplest to deploy, no server setup required,
      adequate for single-station operation.</p>
    <h2 id="schema-overview">Schema Overview</h2>
    <p>See <Link to="/07-data/data-model">Data Model</Link> for the complete logical data model.</p>
    <h3 id="key-tables">Key Tables</h3>
    <pre><code className="language-sql">-- Sensor metadata{"\n"}CREATE TABLE sensors ({"\n"}{"    "}sensor_id TEXT PRIMARY KEY,{"\n"}{"    "}location TEXT,{"\n"}{"    "}installation_time TEXT,{"\n"}{"    "}status TEXT,{"\n"}{"    "}configuration TEXT{"\n"});{"\n"}{"\n"}-- Raw measurements{"\n"}CREATE TABLE measurements ({"\n"}{"    "}id INTEGER PRIMARY KEY AUTOINCREMENT,{"\n"}{"    "}timestamp TEXT NOT NULL,{"\n"}{"    "}sensor_id TEXT NOT NULL,{"\n"}{"    "}pressure_value REAL,{"\n"}{"    "}temperature REAL,{"\n"}{"    "}quality_status TEXT,{"\n"}{"    "}FOREIGN KEY (sensor_id) REFERENCES sensors(sensor_id){"\n"});{"\n"}{"\n"}-- Signal windows and features{"\n"}CREATE TABLE signal_windows ({"\n"}{"    "}window_id TEXT PRIMARY KEY,{"\n"}{"    "}start_time TEXT NOT NULL,{"\n"}{"    "}end_time TEXT NOT NULL,{"\n"}{"    "}sensor_id TEXT NOT NULL,{"\n"}{"    "}sampling_rate REAL,{"\n"}{"    "}rms_amplitude REAL,{"\n"}{"    "}peak_amplitude REAL,{"\n"}{"    "}dominant_frequency REAL,{"\n"}{"    "}spectral_energy REAL,{"\n"}{"    "}spectral_centroid REAL,{"\n"}{"    "}spectral_bandwidth REAL,{"\n"}{"    "}quality_status TEXT,{"\n"}{"    "}FOREIGN KEY (sensor_id) REFERENCES sensors(sensor_id){"\n"});{"\n"}{"\n"}-- Anomaly records{"\n"}CREATE TABLE anomalies ({"\n"}{"    "}anomaly_id TEXT PRIMARY KEY,{"\n"}{"    "}timestamp TEXT NOT NULL,{"\n"}{"    "}sensor_id TEXT NOT NULL,{"\n"}{"    "}window_id TEXT,{"\n"}{"    "}anomaly_index REAL,{"\n"}{"    "}threshold REAL,{"\n"}{"    "}status TEXT,{"\n"}{"    "}severity TEXT,{"\n"}{"    "}FOREIGN KEY (sensor_id) REFERENCES sensors(sensor_id),{"\n"}{"    "}FOREIGN KEY (window_id) REFERENCES signal_windows(window_id){"\n"});{"\n"}</code></pre>
    <h2 id="data-retention">Data Retention</h2>
    <p>See <Link to="/07-data/data-retention">Data Retention</Link> for the retention policy.</p>
    <h2 id="backup">Backup</h2>
    <ul>
      <li>SQLite databases can be backed up by copying the database file</li>
      <li>Schedule periodic backups (e.g., daily)</li>
      <li>For critical deployments, use WAL (Write-Ahead Logging) mode for crash safety</li>
    </ul>
    <hr />
    <p><em>See also: <Link to="/07-data/data-model">Data Model</Link> | <Link to="/06-software/backend">Backend</Link> | <Link to="/07-data/data-retention">Data
          Retention</Link></em></p>
  </article>
</div>

    </main>
  );
}