import { Link } from 'react-router-dom';

export default function Page06SoftwareApiDesign() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Software</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">API Design</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>API Design</h1>
    <blockquote>
      <p><strong>Note:</strong> This is a <strong>Proposed API</strong>. The actual implementation may
        differ based on the chosen technology stack.</p>
    </blockquote>
    <h2 id="base-url">Base URL</h2>
    <pre><code>http://&lt;host&gt;:&lt;port&gt;/api/v1{"\n"}</code></pre>
    <h2 id="endpoints">Endpoints</h2>
    <h3 id="sensors">Sensors</h3>
    <h4>GET /api/v1/sensors</h4>
    <p><strong>Purpose:</strong> List all registered sensors.</p>
    <p><strong>Response:</strong></p>
    <pre><code className="language-json">{"{"}{"\n"}{"  "}"sensors": [{"\n"}{"    "}{"{"}{"\n"}{"      "}"sensor_id": "SENSOR-001",{"\n"}{"      "}"location": "Lab-A, Building 3",{"\n"}{"      "}"status": "ONLINE",{"\n"}{"      "}"installation_time": "2025-03-10T09:00:00Z",{"\n"}{"      "}"last_reading": "2025-03-15T10:30:00Z"{"\n"}{"    "}{"}"}{"\n"}{"  "}]{"\n"}{"}"}{"\n"}</code></pre>
    <h4>GET /api/v1/sensors/{'{'}id{'}'}</h4>
    <p><strong>Purpose:</strong> Get details for a specific sensor.</p>
    <p><strong>Parameters:</strong> <code>id</code> — sensor identifier</p>
    <p><strong>Response:</strong> Single sensor object as above.</p>
    <p><strong>Error:</strong> <code>404</code> if sensor not found.</p>
    <hr />
    <h3 id="measurements">Measurements</h3>
    <h4>GET /api/v1/measurements</h4>
    <p><strong>Purpose:</strong> Query raw measurement data.</p>
    <p><strong>Query Parameters:</strong></p>
    <table>
      <thead>
        <tr>
          <th>Parameter</th>
          <th>Type</th>
          <th>Required</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>sensor_id</code></td>
          <td>string</td>
          <td>No</td>
          <td>Filter by sensor</td>
        </tr>
        <tr>
          <td><code>start</code></td>
          <td>ISO 8601</td>
          <td>No</td>
          <td>Start of time range</td>
        </tr>
        <tr>
          <td><code>end</code></td>
          <td>ISO 8601</td>
          <td>No</td>
          <td>End of time range</td>
        </tr>
        <tr>
          <td><code>limit</code></td>
          <td>integer</td>
          <td>No</td>
          <td>Maximum records (default: 1000)</td>
        </tr>
      </tbody>
    </table>
    <p><strong>Response:</strong></p>
    <pre><code className="language-json">{"{"}{"\n"}{"  "}"measurements": [{"\n"}{"    "}{"{"}{"\n"}{"      "}"timestamp": "2025-03-15T10:30:00.020Z",{"\n"}{"      "}"sensor_id": "SENSOR-001",{"\n"}{"      "}"pressure_value": 0.045,{"\n"}{"      "}"temperature": 22.5,{"\n"}{"      "}"quality_status": "OK"{"\n"}{"    "}{"}"}{"\n"}{"  "}],{"\n"}{"  "}"count": 1,{"\n"}{"  "}"has_more": false{"\n"}{"}"}{"\n"}</code></pre>
    <hr />
    <h3 id="signals-processed-windows-">Signals (Processed Windows)</h3>
    <h4>GET /api/v1/signals</h4>
    <p><strong>Purpose:</strong> Query processed signal windows and their features.</p>
    <p><strong>Query Parameters:</strong> Same as measurements (sensor_id, start, end, limit).</p>
    <p><strong>Response:</strong></p>
    <pre><code className="language-json">{"{"}{"\n"}{"  "}"signals": [{"\n"}{"    "}{"{"}{"\n"}{"      "}"window_id": "WIN-20250315-103000",{"\n"}{"      "}"start_time": "2025-03-15T10:30:00Z",{"\n"}{"      "}"end_time": "2025-03-15T10:30:30Z",{"\n"}{"      "}"sampling_rate": 50,{"\n"}{"      "}"features": {"{"}{"\n"}{"        "}"rms_amplitude": 0.012,{"\n"}{"        "}"peak_amplitude": 0.034,{"\n"}{"        "}"dominant_frequency": 0.45,{"\n"}{"        "}"spectral_energy": 0.0008,{"\n"}{"        "}"spectral_centroid": 1.23,{"\n"}{"        "}"spectral_bandwidth": 2.1{"\n"}{"      "}{"}"},{"\n"}{"      "}"quality_status": "OK"{"\n"}{"    "}{"}"}{"\n"}{"  "}]{"\n"}{"}"}{"\n"}</code></pre>
    <hr />
    <h3 id="anomalies">Anomalies</h3>
    <h4>GET /api/v1/anomalies</h4>
    <p><strong>Purpose:</strong> Query anomaly detection results.</p>
    <p><strong>Query Parameters:</strong></p>
    <table>
      <thead>
        <tr>
          <th>Parameter</th>
          <th>Type</th>
          <th>Required</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>sensor_id</code></td>
          <td>string</td>
          <td>No</td>
          <td>Filter by sensor</td>
        </tr>
        <tr>
          <td><code>start</code></td>
          <td>ISO 8601</td>
          <td>No</td>
          <td>Start of time range</td>
        </tr>
        <tr>
          <td><code>end</code></td>
          <td>ISO 8601</td>
          <td>No</td>
          <td>End of time range</td>
        </tr>
        <tr>
          <td><code>status</code></td>
          <td>string</td>
          <td>No</td>
          <td>Filter: ANOMALY, NORMAL, or ALL</td>
        </tr>
        <tr>
          <td><code>limit</code></td>
          <td>integer</td>
          <td>No</td>
          <td>Maximum records</td>
        </tr>
      </tbody>
    </table>
    <p><strong>Response:</strong></p>
    <pre><code className="language-json">{"{"}{"\n"}{"  "}"anomalies": [{"\n"}{"    "}{"{"}{"\n"}{"      "}"anomaly_id": "ANOM-20250315-103030",{"\n"}{"      "}"timestamp": "2025-03-15T10:30:30Z",{"\n"}{"      "}"sensor_id": "SENSOR-001",{"\n"}{"      "}"anomaly_index": 0.82,{"\n"}{"      "}"threshold": 0.70,{"\n"}{"      "}"status": "ANOMALY",{"\n"}{"      "}"severity": "HIGH",{"\n"}{"      "}"window_id": "WIN-20250315-103000"{"\n"}{"    "}{"}"}{"\n"}{"  "}]{"\n"}{"}"}{"\n"}</code></pre>
    <h4>GET /api/v1/anomalies/{'{'}id{'}'}</h4>
    <p><strong>Purpose:</strong> Get details for a specific anomaly record.</p>
    <hr />
    <h3 id="system-status">System Status</h3>
    <h4>GET /api/v1/system/status</h4>
    <p><strong>Purpose:</strong> Get overall system health status.</p>
    <p><strong>Response:</strong></p>
    <pre><code className="language-json">{"{"}{"\n"}{"  "}"status": "HEALTHY",{"\n"}{"  "}"timestamp": "2025-03-15T10:31:00Z",{"\n"}{"  "}"components": {"{"}{"\n"}{"    "}"sensor": "ONLINE",{"\n"}{"    "}"daq": "RUNNING",{"\n"}{"    "}"signal_processing": "RUNNING",{"\n"}{"    "}"ai_inference": "RUNNING",{"\n"}{"    "}"database": "CONNECTED",{"\n"}{"    "}"uptime_seconds": 86400{"\n"}{"  "}{"}"}{"\n"}{"}"}{"\n"}</code></pre>
    <h2 id="error-responses">Error Responses</h2>
    <p>All error responses follow a consistent format:</p>
    <pre><code className="language-json">{"{"}{"\n"}{"  "}"error": {"{"}{"\n"}{"    "}"code": 404,{"\n"}{"    "}"message": "Sensor not found",{"\n"}{"    "}"details": "No sensor with ID 'SENSOR-999' exists"{"\n"}{"  "}{"}"}{"\n"}{"}"}{"\n"}</code></pre>
    <table>
      <thead>
        <tr>
          <th>HTTP Code</th>
          <th>Meaning</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>200</td>
          <td>Success</td>
        </tr>
        <tr>
          <td>400</td>
          <td>Bad request (invalid parameters)</td>
        </tr>
        <tr>
          <td>404</td>
          <td>Resource not found</td>
        </tr>
        <tr>
          <td>500</td>
          <td>Internal server error</td>
        </tr>
      </tbody>
    </table>
    <hr />
    <p><em>See also: <Link to="/06-software/software-overview">Software Overview</Link> | <Link to="/06-software/dashboard">Dashboard</Link> | <Link to="/07-data/data-model">Data
          Model</Link></em></p>
  </article>
</div>

    </main>
  );
}