import { Link } from 'react-router-dom';

export default function Page02SystemArchitectureComponentInteraction() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">System Architecture</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Component Interaction</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Component Interaction</h1>
    <h2 id="interaction-diagram">Interaction Diagram</h2>
    <pre><code className="language-mermaid">sequenceDiagram{"\n"}{"    "}participant ATM as Atmosphere{"\n"}{"    "}participant WNR as Wind-Noise Manifold{"\n"}{"    "}participant SENSOR as Pressure Sensor{"\n"}{"    "}participant AFE as Analog Front End{"\n"}{"    "}participant ADC as ADC{"\n"}{"    "}participant DAQ as DAQ Service{"\n"}{"    "}participant SP as Signal Processing{"\n"}{"    "}participant FE as Feature Extraction{"\n"}{"    "}participant AI as AI Inference{"\n"}{"    "}participant DB as Database{"\n"}{"    "}participant ALERT as Alert Service{"\n"}{"    "}participant DASH as Dashboard{"\n"}{"\n"}{"    "}ATM-&gt;&gt;WNR: Pressure wave arrives{"\n"}{"    "}WNR-&gt;&gt;SENSOR: Spatially averaged pressure{"\n"}{"    "}SENSOR-&gt;&gt;AFE: Differential voltage signal{"\n"}{"    "}AFE-&gt;&gt;ADC: Amplified, filtered analog signal{"\n"}{"    "}ADC-&gt;&gt;DAQ: Digital samples (timestamped){"\n"}{"    "}DAQ-&gt;&gt;DB: Store raw measurement{"\n"}{"    "}DAQ-&gt;&gt;SP: Stream raw samples{"\n"}{"\n"}{"    "}loop Every analysis window (e.g., 30 seconds){"\n"}{"        "}SP-&gt;&gt;SP: DC removal, band-pass filter, windowing{"\n"}{"        "}SP-&gt;&gt;FE: Filtered signal + FFT spectrum{"\n"}{"        "}FE-&gt;&gt;FE: Compute RMS, energy, freq features{"\n"}{"        "}FE-&gt;&gt;AI: Feature vector{"\n"}{"        "}AI-&gt;&gt;AI: Isolation Forest inference{"\n"}{"        "}AI-&gt;&gt;DB: Store anomaly record{"\n"}{"        "}alt Normalized Anomaly Index &gt; Threshold{"\n"}{"            "}AI-&gt;&gt;ALERT: Trigger anomaly alert{"\n"}{"            "}ALERT-&gt;&gt;DASH: Push alert notification{"\n"}{"        "}end{"\n"}{"    "}end{"\n"}{"\n"}{"    "}DASH-&gt;&gt;DB: Request latest data (via API){"\n"}{"    "}DB-&gt;&gt;DASH: Return measurements, features, anomalies{"\n"}</code></pre>
    <h2 id="component-interfaces">Component Interfaces</h2>
    <h3 id="hardware-software-interface">Hardware ↔ Software Interface</h3>
    <p>The hardware-software boundary is at the <strong>ADC output</strong>. The DAQ service reads
      digital samples from the ADC hardware.</p>
    <pre><code className="language-mermaid">flowchart LR{"\n"}{"    "}HW["Hardware Domain\n(Analog)"] --&gt;|"ADC Output\n(Digital Samples)"| SW["Software Domain\n(Digital Processing)"]{"\n"}</code></pre>
    <p><strong>Interface protocol options:</strong></p>
    <ul>
      <li>SPI (Serial Peripheral Interface) — common for embedded ADCs</li>
      <li>I²C — for lower-speed ADCs and temperature sensors</li>
      <li>USB — for DAQ boards or USB-connected ADCs</li>
      <li>Serial (UART) — for microcontroller-based data acquisition</li>
      <li>Ethernet/TCP — for networked DAQ systems</li>
    </ul>
    <h3 id="signal-processing-ai-interface">Signal Processing ↔ AI Interface</h3>
    <p>The signal-processing subsystem communicates with the AI subsystem through <strong>feature
        vectors</strong> — numerical arrays summarizing each analysis window.</p>
    <pre><code>Feature vector format (proposed):{"\n"}[rms_amplitude, peak_amplitude, spectral_energy, dominant_frequency, spectral_centroid, bandwidth]{"\n"}</code></pre>
    <p>This interface is simple and well-defined: the AI model expects a fixed-length numerical array
      with the same feature order as its training data.</p>
    <h3 id="ai-application-interface">AI ↔ Application Interface</h3>
    <p>The AI subsystem outputs:</p>
    <ul>
      <li><strong>normalized anomaly index</strong> (float, 0.0–1.0)</li>
      <li><strong>Decision</strong> (NORMAL or ANOMALY, based on threshold)</li>
      <li><strong>Metadata</strong> (timestamp, window ID, associated sensor ID)</li>
    </ul>
    <p>This output is written to the database and, if anomalous, triggers the alert service.</p>
    <h3 id="application-layer-internal-interfaces">Application Layer Internal Interfaces</h3>
    <pre><code className="language-mermaid">flowchart LR{"\n"}{"    "}DB["Database"] --&gt; API["REST API"]{"\n"}{"    "}API --&gt; DASH["Dashboard\n(HTTP/WebSocket)"]{"\n"}{"    "}ALERT["Alert Service"] --&gt; DASH{"\n"}{"    "}ALERT --&gt; EMAIL["Email\nNotification"]{"\n"}{"    "}ALERT --&gt; WEBHOOK["Webhook"]{"\n"}{"    "}API --&gt; EXT["External\nConsumers"]{"\n"}</code></pre>
    <h2 id="timing-and-synchronization">Timing and Synchronization</h2>
    <table>
      <thead>
        <tr>
          <th>Component</th>
          <th>Timing Characteristic</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>ADC sampling</td>
          <td>Hardware-clocked; approximately 100 Hz (TARGET - Pending validation) is the current sampling target, not a verified selection</td>
        </tr>
        <tr>
          <td>Raw data storage</td>
          <td>Written as soon as samples are received</td>
        </tr>
        <tr>
          <td>Signal processing window</td>
          <td>Triggered every N seconds (e.g., 30 sec)</td>
        </tr>
        <tr>
          <td>AI inference</td>
          <td>Triggered after each feature extraction</td>
        </tr>
        <tr>
          <td>Dashboard update</td>
          <td>Polled or pushed at 1–5 Hz</td>
        </tr>
        <tr>
          <td>Alert</td>
          <td>Triggered immediately on anomaly detection</td>
        </tr>
      </tbody>
    </table>
    <h2 id="error-propagation">Error Propagation</h2>
    <table>
      <thead>
        <tr>
          <th>Error Source</th>
          <th>Downstream Impact</th>
          <th>Handling</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Sensor failure</td>
          <td>No new data</td>
          <td>DAQ detects missing data, logs error, dashboard shows sensor offline</td>
        </tr>
        <tr>
          <td>ADC communication error</td>
          <td>Data gaps</td>
          <td>DAQ retries, logs gaps, marks affected windows as low quality</td>
        </tr>
        <tr>
          <td>Signal processing error</td>
          <td>No features for affected window</td>
          <td>Error logged, AI skips window, raw data still saved</td>
        </tr>
        <tr>
          <td>AI model not loaded</td>
          <td>No anomaly detection</td>
          <td>System logs warning, continues recording and processing without AI</td>
        </tr>
        <tr>
          <td>Database write failure</td>
          <td>Data at risk</td>
          <td>Buffer in memory, retry; alert on persistent failure</td>
        </tr>
      </tbody>
    </table>
    <hr />
    <p><em>See also: <Link to="/02-system-architecture/architecture">Architecture</Link> | <Link to="/02-system-architecture/data-flow">Data Flow</Link> |
        <Link to="/02-system-architecture/software-architecture">Software Architecture</Link></em></p>
  </article>
</div>

    </main>
  );
}