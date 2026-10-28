import { Link } from 'react-router-dom';

export default function Page02SystemArchitectureSystemOverview() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">System Architecture</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">System Overview</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>System Overview</h1>
    <h2 id="what-is-infrasocket-">What Is InfraSocket?</h2>
    <p>InfraSocket is a research-prototype architecture intended to sense, digitize, and analyze
      low-frequency atmospheric pressure variations. Approximately <strong>0.01–20 Hz (TARGET - Pending experimental validation) is the target
        band</strong>; complete instrument response across it remains pending experimental validation.</p>
    <blockquote>
      <p><strong>Simple Explanation:</strong>
        Think of InfraSocket as a specialized "listening station" for sounds too low for human ears
        — pressure variations that require suitable sensing and acquisition hardware. The intended
        chain is pressure sensing, conditioning, digitization, signal processing, and signal-quality
        analysis. AI/ML is optional and does not establish the physical cause of a signal.</p>
    </blockquote>
    <h2 id="system-layers">System Layers</h2>
    <p>The system is organized into four primary layers:</p>
    <pre><code className="language-mermaid">flowchart TD{"\n"}{"    "}subgraph L1["Layer 1: Physical Sensing"]{"\n"}{"        "}direction LR{"\n"}{"        "}WNR["Wind-Noise Reduction"] --&gt; PS["Pressure Sensor"]{"\n"}{"        "}PS --&gt; RC["Reference Chamber"]{"\n"}{"    "}end{"\n"}{"\n"}{"    "}subgraph L2["Layer 2: Signal Conditioning &amp; Digitization"]{"\n"}{"        "}direction LR{"\n"}{"        "}AFE["Analog Front End"] --&gt; ADC["ADC"]{"\n"}{"    "}end{"\n"}{"\n"}{"    "}subgraph L3["Layer 3: Digital Processing &amp; AI"]{"\n"}{"        "}direction LR{"\n"}{"        "}SP["Signal Processing"] --&gt; FE["Feature Extraction"]{"\n"}{"        "}FE --&gt; AI["AI Anomaly Detection"]{"\n"}{"    "}end{"\n"}{"\n"}{"    "}subgraph L4["Layer 4: Application"]{"\n"}{"        "}direction LR{"\n"}{"        "}DB["Database"] --&gt; DASH["Dashboard"]{"\n"}{"        "}DB --&gt; API["API"]{"\n"}{"        "}AI2["Alert System"] --&gt; DASH{"\n"}{"    "}end{"\n"}{"\n"}{"    "}L1 --&gt; L2{"\n"}{"    "}L2 --&gt; L3{"\n"}{"    "}L3 --&gt; L4{"\n"}</code></pre>
    <h3 id="layer-1-physical-sensing">Layer 1: Physical Sensing</h3>
    <p>The hardware layer that interfaces with the physical atmosphere. It includes wind-noise
      reduction, pressure sensing, and the reference chamber for differential measurement.</p>
    <h3 id="layer-2-signal-conditioning-digitization">Layer 2: Signal Conditioning &amp; Digitization
    </h3>
    <p>The analog electronics that amplify, filter, and digitize the raw pressure signal. This layer
      bridges the physical world and the digital processing world.</p>
    <h3 id="layer-3-digital-processing-ai">Layer 3: Digital Processing &amp; AI</h3>
    <p>Software that processes the digitized signal through filtering, FFT, feature extraction, and
      anomaly detection. This is where signal processing (deterministic math) meets AI (learned
      models).</p>
    <h3 id="layer-4-application">Layer 4: Application</h3>
    <p>User-facing components: data storage, REST API, real-time dashboard, and alert system.</p>
    <h2 id="key-design-principles">Key Design Principles</h2>
    <table>
      <thead>
        <tr>
          <th>Principle</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Modularity</strong></td>
          <td>Each layer operates independently with defined interfaces</td>
        </tr>
        <tr>
          <td><strong>Fail-safe operation</strong></td>
          <td>If AI fails, sensor data is still recorded</td>
        </tr>
        <tr>
          <td><strong>Transparency</strong></td>
          <td>Raw data is always preserved alongside processed results</td>
        </tr>
        <tr>
          <td><strong>Simplicity for MVP</strong></td>
          <td>Use well-understood techniques before exploring complex alternatives</td>
        </tr>
        <tr>
          <td><strong>Honest metrics</strong></td>
          <td>No performance claims without measured evidence</td>
        </tr>
      </tbody>
    </table>
    <h2 id="signal-flow-summary">Signal Flow Summary</h2>
    <table>
      <thead>
        <tr>
          <th>Step</th>
          <th>Domain</th>
          <th>Technology</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Atmospheric pressure wave arrives</td>
          <td>Physical</td>
          <td>Nature</td>
        </tr>
        <tr>
          <td>Wind noise reduced by manifold</td>
          <td>Physical/Mechanical</td>
          <td>Spatial averaging</td>
        </tr>
        <tr>
          <td>Pressure converted to electrical signal</td>
          <td>Transduction</td>
          <td>Sensor + reference chamber</td>
        </tr>
        <tr>
          <td>Electrical signal amplified and filtered</td>
          <td>Analog electronics</td>
          <td>Instrumentation amplifier, filters</td>
        </tr>
        <tr>
          <td>Analog signal digitized</td>
          <td>Analog → Digital</td>
          <td>ADC</td>
        </tr>
        <tr>
          <td>Digital signal filtered and transformed</td>
          <td>Digital signal processing</td>
          <td>Band-pass filter, FFT</td>
        </tr>
        <tr>
          <td>Features extracted from signal windows</td>
          <td>Digital signal processing</td>
          <td>RMS, energy, spectral features</td>
        </tr>
        <tr>
          <td>normalized anomaly index computed</td>
          <td>Machine learning</td>
          <td>Isolation Forest</td>
        </tr>
        <tr>
          <td>Results stored and displayed</td>
          <td>Software</td>
          <td>Database, dashboard, API</td>
        </tr>
      </tbody>
    </table>
    <hr />
    <p><em>See also: <Link to="/02-system-architecture/architecture">Architecture</Link> | <Link to="/02-system-architecture/hardware-architecture">Hardware Architecture</Link> | <Link to="/02-system-architecture/software-architecture">Software Architecture</Link></em></p>
  </article>
</div>

    </main>
  );
}