import { Link } from 'react-router-dom';

export default function Page02SystemArchitectureSoftwareArchitecture() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">System Architecture</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Software Architecture</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Software Architecture</h1>
    <h2 id="software-architecture-diagram">Software Architecture Diagram</h2>
    <pre><code className="language-mermaid">flowchart TD{"\n"}{"    "}subgraph ACQUISITION["Data Acquisition Layer"]{"\n"}{"        "}DAQ["DAQ Service\n(Reads ADC Data)"]{"\n"}{"        "}DAQ --&gt; BUFFER["Ring Buffer\n(Raw Samples)"]{"\n"}{"    "}end{"\n"}{"\n"}{"    "}subgraph PROCESSING["Processing Layer"]{"\n"}{"        "}BUFFER --&gt; SP["Signal Processing Engine"]{"\n"}{"        "}SP --&gt; |"Filtered Data"| FFT_SVC["FFT / Spectral Service"]{"\n"}{"        "}SP --&gt; |"Filtered Data"| FE["Feature Extraction\nService"]{"\n"}{"        "}FFT_SVC --&gt; |"Spectrum, Spectrogram"| FE{"\n"}{"    "}end{"\n"}{"\n"}{"    "}subgraph AI_LAYER["AI Layer"]{"\n"}{"        "}FE --&gt;|"Feature Vectors"| INFERENCE["AI Inference Service\n(Isolation Forest)"]{"\n"}{"        "}INFERENCE --&gt;|"Raw Normalized Anomaly Index"| NORMALIZE["Project-defined\nNormalization"]{"\n"}{"        "}NORMALIZE --&gt;|"Anomaly Index"| DECISION["Decision Engine\n(Threshold Comparison)"]{"\n"}{"    "}end{"\n"}{"\n"}{"    "}subgraph DATA_LAYER["Data Layer"]{"\n"}{"        "}DAQ --&gt; |"Raw Data"| DB["Database"]{"\n"}{"        "}SP --&gt; |"Processed Data"| DB{"\n"}{"        "}FE --&gt; |"Feature Data"| DB{"\n"}{"        "}INFERENCE --&gt; |"Anomaly Records"| DB{"\n"}{"    "}end{"\n"}{"\n"}{"    "}subgraph APPLICATION["Application Layer"]{"\n"}{"        "}DB --&gt; API["REST API\nService"]{"\n"}{"        "}API --&gt; DASH["Web Dashboard"]{"\n"}{"        "}DECISION --&gt; |"Anomaly Alert"| ALERT["Alert Service"]{"\n"}{"        "}ALERT --&gt; DASH{"\n"}{"        "}ALERT --&gt; NOTIFY["Notifications\n(Email / Webhook)"]{"\n"}{"        "}API --&gt; EXTERNAL["External\nConsumers"]{"\n"}{"    "}end{"\n"}{"\n"}{"    "}subgraph SYSTEM["System Services"]{"\n"}{"        "}HEALTH["Health Monitor"]{"\n"}{"        "}CONFIG["Configuration\nManager"]{"\n"}{"        "}LOG["Logging Service"]{"\n"}{"    "}end{"\n"}{"\n"}{"    "}HEALTH --&gt; DAQ{"\n"}{"    "}HEALTH --&gt; SP{"\n"}{"    "}HEALTH --&gt; INFERENCE{"\n"}{"    "}CONFIG --&gt; DAQ{"\n"}{"    "}CONFIG --&gt; SP{"\n"}{"    "}CONFIG --&gt; INFERENCE{"\n"}</code></pre>
    <h2 id="service-descriptions">Service Descriptions</h2>
    <h3 id="data-acquisition-service-daq-service-">Data Acquisition Service (DAQ Service)</h3>
    <ul>
      <li><strong>Responsibility:</strong> Interface with the ADC hardware, read raw digital samples,
        buffer them, and make them available to downstream services</li>
      <li><strong>Input:</strong> Digital samples from ADC (via serial, USB, SPI, or network)</li>
      <li><strong>Output:</strong> Raw sample stream to ring buffer and database</li>
      <li><strong>Key behaviours:</strong>
        <ul>
          <li>Continuous sampling at the configured rate</li>
          <li>Timestamp each sample with a synchronized clock</li>
          <li>Detect and log data gaps or hardware communication errors</li>
          <li>Continue recording even if downstream processing fails</li>
        </ul>
      </li>
    </ul>
    <h3 id="signal-processing-engine">Signal Processing Engine</h3>
    <ul>
      <li><strong>Responsibility:</strong> Apply digital filtering, DC offset removal, and prepare
        data for spectral analysis</li>
      <li><strong>Input:</strong> Raw samples from the ring buffer</li>
      <li><strong>Output:</strong> Filtered signal data, passed to FFT and feature extraction</li>
      <li><strong>Key operations:</strong>
        <ul>
          <li>DC offset removal (subtract running mean)</li>
          <li>Band-pass filtering (0.01–20 Hz (TARGET - Pending experimental validation))</li>
          <li>Signal windowing for spectral analysis</li>
        </ul>
      </li>
    </ul>
    <h3 id="fft-spectral-service">FFT / Spectral Service</h3>
    <ul>
      <li><strong>Responsibility:</strong> Compute frequency-domain representations</li>
      <li><strong>Input:</strong> Filtered, windowed signal segments</li>
      <li><strong>Output:</strong> Power spectrum, spectrogram data</li>
      <li><strong>Key operations:</strong>
        <ul>
          <li>FFT computation</li>
          <li>Power spectral density estimation</li>
          <li>Spectrogram generation (successive overlapping FFTs)</li>
        </ul>
      </li>
    </ul>
    <h3 id="feature-extraction-service">Feature Extraction Service</h3>
    <ul>
      <li><strong>Responsibility:</strong> Compute numerical features from each signal window</li>
      <li><strong>Input:</strong> Filtered signal data, spectral data</li>
      <li><strong>Output:</strong> Feature vectors for AI inference</li>
      <li><strong>Features computed:</strong> RMS amplitude, peak amplitude, spectral energy, dominant
        frequency, spectral centroid, bandwidth</li>
    </ul>
    <h3 id="ai-inference-service">AI Inference Service</h3>
    <ul>
      <li><strong>Responsibility:</strong> Run the trained Isolation Forest model on incoming feature
        vectors</li>
      <li><strong>Input:</strong> Feature vectors from the feature extraction service</li>
      <li><strong>Output:</strong> Normalized Anomaly Indices</li>
      <li><strong>Key behaviours:</strong>
        <ul>
          <li>Load the trained model at startup</li>
          <li>Process each feature vector and output a score</li>
          <li>Handle model loading failures gracefully (log error, continue without AI)</li>
          <li>Support model hot-reloading for updates</li>
        </ul>
      </li>
    </ul>
    <h3 id="decision-engine">Decision Engine</h3>
    <ul>
      <li><strong>Responsibility:</strong> Compare Normalized Anomaly Indices against the configured
        threshold</li>
      <li><strong>Input:</strong> Normalized Anomaly Indices</li>
      <li><strong>Output:</strong> NORMAL / ANOMALY classification, trigger alerts</li>
      <li><strong>Configuration:</strong> Threshold value, cooldown period (to avoid repeated alerts
        for the same event)</li>
    </ul>
    <h3 id="database">Database</h3>
    <ul>
      <li><strong>Responsibility:</strong> Persistent storage of all data</li>
      <li><strong>Stored entities:</strong>
        <ul>
          <li>Raw measurements</li>
          <li>Processed signal data</li>
          <li>Feature vectors</li>
          <li>Anomaly records</li>
          <li>Sensor metadata</li>
          <li>System logs</li>
        </ul>
      </li>
    </ul>
    <h3 id="rest-api-service">REST API Service</h3>
    <ul>
      <li><strong>Responsibility:</strong> Provide HTTP endpoints for data access and system control
      </li>
      <li><strong>Consumers:</strong> Dashboard, external applications</li>
      <li><strong>Endpoints:</strong> See <Link to="/06-software/api-design">API Design</Link></li>
    </ul>
    <h3 id="web-dashboard">Web Dashboard</h3>
    <ul>
      <li><strong>Responsibility:</strong> Real-time visualization of system state</li>
      <li><strong>Displays:</strong> Waveform, spectrum, spectrogram, normalized anomaly index,
        alerts, sensor health</li>
      <li><strong>Technology:</strong> Web-based (accessible via browser)</li>
    </ul>
    <h3 id="alert-service">Alert Service</h3>
    <ul>
      <li><strong>Responsibility:</strong> Generate and deliver notifications when anomalies are
        detected</li>
      <li><strong>Channels:</strong> Dashboard notification, email, webhook (<code>Assumption</code>:
        notification channels to be determined based on implementation)</li>
    </ul>
    <h3 id="health-monitor">Health Monitor</h3>
    <ul>
      <li><strong>Responsibility:</strong> Monitor the health of all services and hardware connections
      </li>
      <li><strong>Checks:</strong> DAQ connectivity, processing latency, AI service status, database
        connectivity, disk space</li>
    </ul>
    <h3 id="configuration-manager">Configuration Manager</h3>
    <ul>
      <li><strong>Responsibility:</strong> Manage system configuration (sampling rate, filter
        parameters, AI threshold, alert settings)</li>
      <li><strong>Source:</strong> Configuration file or database</li>
    </ul>
    <h3 id="logging-service">Logging Service</h3>
    <ul>
      <li><strong>Responsibility:</strong> Centralized logging for debugging, auditing, and monitoring
      </li>
    </ul>
    <h2 id="inter-service-communication">Inter-Service Communication</h2>
    <p><code>Assumption</code>: The communication patterns below represent the proposed design. The
      specific implementation (message queue, shared memory, direct function calls) depends on the
      chosen technology stack.</p>
    <table>
      <thead>
        <tr>
          <th>Pattern</th>
          <th>Used Between</th>
          <th>Rationale</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>In-process (function calls)</td>
          <td>Signal processing stages</td>
          <td>Low latency, simple for monolithic prototype</td>
        </tr>
        <tr>
          <td>Message queue / stream</td>
          <td>DAQ → Processing → AI</td>
          <td>Decoupled, buffered, supports backpressure</td>
        </tr>
        <tr>
          <td>REST / HTTP</td>
          <td>API → Dashboard</td>
          <td>Standard web communication</td>
        </tr>
        <tr>
          <td>Database writes/reads</td>
          <td>All services → DB</td>
          <td>Persistent storage</td>
        </tr>
      </tbody>
    </table>
    <p>For the <strong>MVP prototype</strong>, a monolithic architecture (all services in one process)
      is acceptable and simpler. Microservice separation is <code>Future Scope</code> for production
      deployments.</p>
    <h2 id="edge-computing-platform">Edge Computing Platform</h2>
    <h3 id="primary-edge-processing-candidate-raspberry-pi-linux-sbc">Primary Edge Processing Candidate:
      Raspberry Pi / Linux SBC</h3>
    <p>Responsibilities:</p>
    <ul>
      <li>Data acquisition interface (ADC communication)</li>
      <li>Signal processing (filtering, FFT, spectral analysis)</li>
      <li>Feature extraction</li>
      <li>AI anomaly detection (Isolation Forest inference)</li>
      <li>Local dashboard / API server</li>
      <li>Data storage (local database)</li>
    </ul>
    <h3 id="esp32-optional-">ESP32 (Optional)</h3>
    <p>Position as:</p>
    <ul>
      <li>Optional low-level acquisition controller (direct ADC interfacing)</li>
      <li>Low-power communication controller (e.g., LoRa telemetry)</li>
      <li>Future embedded implementation for ultra-low-power deployments</li>
    </ul>
    <blockquote>
      <p>The Raspberry Pi / Linux SBC is the primary candidate for the prototype because it can run
        the full Python-based signal processing and AI stack. ESP32 is positioned as an optional
        component, not a co-requirement. Do not assume both are simultaneously required unless the
        architecture explicitly uses both.</p>
    </blockquote>
    <hr />
    <p><em>See also: <Link to="/02-system-architecture/architecture">Architecture</Link> | <Link to="/02-system-architecture/data-flow">Data Flow</Link> |
        <Link to="/06-software/backend">Backend</Link></em></p>
  </article>
</div>

    </main>
  );
}