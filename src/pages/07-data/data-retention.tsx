import { Link } from 'react-router-dom';

export default function Page07DataDataRetention() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Data</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Data Retention</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Data Retention</h1>
    <h2 id="retention-policy">Retention Policy</h2>
    <table>
      <thead>
        <tr>
          <th>Data Type</th>
          <th>Retention Period</th>
          <th>Rationale</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Raw measurements</td>
          <td>7–30 days</td>
          <td>High volume; older raw data can be archived or deleted</td>
        </tr>
        <tr>
          <td>Processed features</td>
          <td>90 days</td>
          <td>Moderate volume; useful for model retraining</td>
        </tr>
        <tr>
          <td>Anomaly records</td>
          <td>Indefinite</td>
          <td>Low volume; important for analysis and auditing</td>
        </tr>
        <tr>
          <td>Sensor metadata</td>
          <td>Indefinite</td>
          <td>Low volume; configuration history</td>
        </tr>
        <tr>
          <td>System logs</td>
          <td>30 days</td>
          <td>Moderate volume; useful for debugging</td>
        </tr>
      </tbody>
    </table>
    <p><code>Assumption</code>: These retention periods are proposed starting points. Adjust based on
      available storage and operational needs.</p>
    <h2 id="storage-estimates">Storage Estimates</h2>
    <table>
      <thead>
        <tr>
          <th>Data Type</th>
          <th>Rate</th>
          <th>30-Day Storage</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Raw measurements (50 Hz)</td>
          <td>~10–50 MB/day</td>
          <td>300 MB – 1.5 GB</td>
        </tr>
        <tr>
          <td>Processed features (1/30 sec)</td>
          <td>~50 KB/day</td>
          <td>~1.5 MB</td>
        </tr>
        <tr>
          <td>Anomaly records</td>
          <td>~50 KB/day</td>
          <td>~1.5 MB</td>
        </tr>
      </tbody>
    </table>
    <p>Raw measurements dominate storage. A 32 GB SD card can hold approximately 20–90 days of raw data.
    </p>
    <h2 id="archival">Archival</h2>
    <p>For long-term storage:</p>
    <ul>
      <li>Export raw data to compressed files (CSV.gz or binary)</li>
      <li>Archive to external storage or cloud</li>
      <li>Keep processed features and anomaly records in the active database</li>
    </ul>
    <hr />
    <p><em>See also: <Link to="/07-data/data-model">Data Model</Link> | <Link to="/06-software/database">Database</Link></em></p>
  </article>
</div>

    </main>
  );
}