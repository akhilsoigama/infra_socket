import { Link } from 'react-router-dom';

export default function Page07DataRawDataFormat() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Data</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Raw Data Format</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Raw Data Format</h1>
    <h2 id="description">Description</h2>
    <p>Raw data consists of individual ADC samples with timestamps, directly as read from the hardware.
    </p>
    <h2 id="record-format">Record Format</h2>
    <pre><code className="language-json">{"{"}{"\n"}{"  "}"timestamp": "2025-03-15T10:30:00.020Z",{"\n"}{"  "}"sensor_id": "SENSOR-001",{"\n"}{"  "}"adc_value": 32847,{"\n"}{"  "}"pressure_pa": null,{"\n"}{"  "}"temperature_raw": 2456,{"\n"}{"  "}"temperature_c": 22.5,{"\n"}{"  "}"quality_status": "OK"{"\n"}{"}"}{"\n"}</code></pre>
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
          <td>timestamp</td>
          <td>ISO 8601 (ms precision)</td>
          <td>Sample acquisition time</td>
        </tr>
        <tr>
          <td>sensor_id</td>
          <td>String</td>
          <td>Sensor identifier</td>
        </tr>
        <tr>
          <td>adc_value</td>
          <td>Integer</td>
          <td>Raw ADC reading</td>
        </tr>
        <tr>
          <td>pressure_pa</td>
          <td>Float or null</td>
          <td>Calibrated pressure (null if uncalibrated)</td>
        </tr>
        <tr>
          <td>temperature_raw</td>
          <td>Integer</td>
          <td>Raw temperature ADC reading</td>
        </tr>
        <tr>
          <td>temperature_c</td>
          <td>Float</td>
          <td>Calibrated temperature in °C</td>
        </tr>
        <tr>
          <td>quality_status</td>
          <td>String</td>
          <td>OK, SATURATED, GAP, ERROR</td>
        </tr>
      </tbody>
    </table>
    <h2 id="storage-volume">Storage Volume</h2>
    <p>At 50 Hz sampling: ~4.3 million samples/day, approximately 10–50 MB/day depending on format and
      compression.</p>
    <hr />
    <p><em>See also: <Link to="/07-data/data-model">Data Model</Link> | <Link to="/07-data/processed-data-format">Processed Data Format</Link></em></p>
  </article>
</div>

    </main>
  );
}