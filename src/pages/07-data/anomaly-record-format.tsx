import { Link } from 'react-router-dom';

export default function Page07DataAnomalyRecordFormat() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Data</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Anomaly Record Format</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Anomaly Record Format</h1>
    <h2 id="description">Description</h2>
    <p>Anomaly records store the output of the AI anomaly detection system for each evaluated signal
      window.</p>
    <h2 id="record-format">Record Format</h2>
    <pre><code className="language-json">{"{"}{"\n"}{"  "}"anomaly_id": "ANOM-20250315-103030",{"\n"}{"  "}"timestamp": "2025-03-15T10:30:30Z",{"\n"}{"  "}"sensor_id": "SENSOR-001",{"\n"}{"  "}"window_id": "WIN-20250315-103000",{"\n"}{"  "}"anomaly_index": 0.82,{"\n"}{"  "}"threshold": 0.70,{"\n"}{"  "}"status": "ANOMALY",{"\n"}{"  "}"severity": "HIGH",{"\n"}{"  "}"model_version": "v1.0-20250310",{"\n"}{"  "}"acknowledged": false,{"\n"}{"  "}"reviewed": false,{"\n"}{"  "}"review_label": null,{"\n"}{"  "}"notes": null{"\n"}{"}"}{"\n"}</code></pre>
    <table>
      <thead>
        <tr>
          <th>Field</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>anomaly_id</td>
          <td>String</td>
          <td>Unique anomaly record identifier</td>
        </tr>
        <tr>
          <td>timestamp</td>
          <td>ISO 8601</td>
          <td>Time of detection</td>
        </tr>
        <tr>
          <td>sensor_id</td>
          <td>String</td>
          <td>Source sensor</td>
        </tr>
        <tr>
          <td>window_id</td>
          <td>String</td>
          <td>Associated signal window</td>
        </tr>
        <tr>
          <td>anomaly_index</td>
          <td>Float (0–1)</td>
          <td>Isolation Forest normalized anomaly index</td>
        </tr>
        <tr>
          <td>threshold</td>
          <td>Float</td>
          <td>Threshold used for classification</td>
        </tr>
        <tr>
          <td>status</td>
          <td>String</td>
          <td>NORMAL or ANOMALY</td>
        </tr>
        <tr>
          <td>severity</td>
          <td>String</td>
          <td>LOW, MEDIUM, HIGH (for anomalies)</td>
        </tr>
        <tr>
          <td>model_version</td>
          <td>String</td>
          <td>Model identifier for traceability</td>
        </tr>
        <tr>
          <td>acknowledged</td>
          <td>Boolean</td>
          <td>Whether a user has seen this record</td>
        </tr>
        <tr>
          <td>reviewed</td>
          <td>Boolean</td>
          <td>Whether a user has reviewed and labeled</td>
        </tr>
        <tr>
          <td>review_label</td>
          <td>String or null</td>
          <td>True positive, false positive, unknown</td>
        </tr>
        <tr>
          <td>notes</td>
          <td>String or null</td>
          <td>User notes</td>
        </tr>
      </tbody>
    </table>
    <hr />
    <p><em>See also: <Link to="/07-data/data-model">Data Model</Link> | <Link to="/05-ai-ml/anomaly-detection">Anomaly Detection</Link></em></p>
  </article>
</div>

    </main>
  );
}