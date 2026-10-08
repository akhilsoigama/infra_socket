import { Link } from 'react-router-dom';

export default function Page07DataDataModel() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Data</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Data Model</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Data Model</h1>
    <h2 id="entity-relationship-diagram">Entity-Relationship Diagram</h2>
    <pre><code className="language-mermaid">erDiagram{"\n"}{"    "}SENSOR ||--o{"{"} MEASUREMENT : "produces"{"\n"}{"    "}SENSOR ||--o{"{"} SIGNAL_WINDOW : "generates"{"\n"}{"    "}SENSOR ||--o{"{"} ANOMALY : "triggers"{"\n"}{"    "}SIGNAL_WINDOW ||--o| ANOMALY : "evaluated_by"{"\n"}{"\n"}{"    "}SENSOR {"{"}{"\n"}{"        "}string sensor_id PK{"\n"}{"        "}string location{"\n"}{"        "}string installation_time{"\n"}{"        "}string status{"\n"}{"        "}string configuration{"\n"}{"        "}string last_calibration{"\n"}{"    "}{"}"}{"\n"}{"\n"}{"    "}MEASUREMENT {"{"}{"\n"}{"        "}int id PK{"\n"}{"        "}string timestamp{"\n"}{"        "}string sensor_id FK{"\n"}{"        "}float pressure_value{"\n"}{"        "}float temperature{"\n"}{"        "}string quality_status{"\n"}{"    "}{"}"}{"\n"}{"\n"}{"    "}SIGNAL_WINDOW {"{"}{"\n"}{"        "}string window_id PK{"\n"}{"        "}string start_time{"\n"}{"        "}string end_time{"\n"}{"        "}string sensor_id FK{"\n"}{"        "}float sampling_rate{"\n"}{"        "}float rms_amplitude{"\n"}{"        "}float peak_amplitude{"\n"}{"        "}float dominant_frequency{"\n"}{"        "}float spectral_energy{"\n"}{"        "}float spectral_centroid{"\n"}{"        "}float spectral_bandwidth{"\n"}{"        "}float band_energy_ultra_low{"\n"}{"        "}float band_energy_low{"\n"}{"        "}float band_energy_mid_upper{"\n"}{"        "}float spectral_rolloff{"\n"}{"        "}float spectral_flatness{"\n"}{"        "}string quality_status{"\n"}{"    "}{"}"}{"\n"}{"\n"}{"    "}ANOMALY {"{"}{"\n"}{"        "}string anomaly_id PK{"\n"}{"        "}string timestamp{"\n"}{"        "}string sensor_id FK{"\n"}{"        "}string window_id FK{"\n"}{"        "}float anomaly_index{"\n"}{"        "}float threshold{"\n"}{"        "}string status{"\n"}{"        "}string severity{"\n"}{"        "}bool acknowledged{"\n"}{"        "}string notes{"\n"}{"    "}{"}"}{"\n"}</code></pre>
    <h2 id="entity-descriptions">Entity Descriptions</h2>
    <h3 id="sensor">Sensor</h3>
    <p>Metadata about each physical sensor installation.</p>
    <h3 id="measurement">Measurement</h3>
    <p>Individual raw pressure samples with timestamps. This is the highest-volume table.</p>
    <h3 id="signal-window">Signal Window</h3>
    <p>Processed signal analysis windows with extracted features. One window typically contains 30–60
      seconds of measurements.</p>
    <h3 id="anomaly">Anomaly</h3>
    <p>Results of AI anomaly detection for each signal window. Contains the normalized anomaly index,
      threshold used, and classification decision.</p>
    <h2 id="relationships">Relationships</h2>
    <table>
      <thead>
        <tr>
          <th>Relationship</th>
          <th>Cardinality</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Sensor → Measurement</td>
          <td>One-to-Many</td>
          <td>Each sensor produces many measurements</td>
        </tr>
        <tr>
          <td>Sensor → Signal Window</td>
          <td>One-to-Many</td>
          <td>Each sensor generates many analysis windows</td>
        </tr>
        <tr>
          <td>Signal Window → Anomaly</td>
          <td>One-to-One</td>
          <td>Each window produces one anomaly evaluation</td>
        </tr>
        <tr>
          <td>Sensor → Anomaly</td>
          <td>One-to-Many</td>
          <td>Each sensor can have many anomaly records</td>
        </tr>
      </tbody>
    </table>
    <hr />
    <p><em>See also: <Link to="/07-data/raw-data-format">Raw Data Format</Link> | <Link to="/06-software/database">Database</Link> | <Link to="/06-software/api-design">API Design</Link></em></p>
  </article>
</div>

    </main>
  );
}