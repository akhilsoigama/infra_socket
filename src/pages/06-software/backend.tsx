import { Link } from 'react-router-dom';

export default function Page06SoftwareBackend() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Software</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Backend</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Backend</h1>
    <h2 id="responsibilities">Responsibilities</h2>
    <p>The backend is the central software component that orchestrates all services: data acquisition,
      processing, AI inference, storage, and API serving.</p>
    <h2 id="architecture-pattern">Architecture Pattern</h2>
    <p>For the MVP prototype, a <strong>monolithic architecture</strong> is recommended:</p>
    <ul>
      <li>All services run in a single process or a small set of coordinated processes</li>
      <li>Simpler to develop, deploy, and debug</li>
      <li>Adequate for single-station operation</li>
    </ul>
    <p><code>Future Scope</code>: Microservice architecture for multi-station deployment.</p>
    <h2 id="core-modules">Core Modules</h2>
    <h3 id="1-daq-module">1. DAQ Module</h3>
    <p>Reads raw samples from the ADC hardware (via serial/USB/SPI). Buffers samples and distributes to
      storage and processing.</p>
    <h3 id="2-processing-module">2. Processing Module</h3>
    <p>Applies the signal-processing pipeline (DC removal, filtering, windowing, FFT, feature
      extraction) to each analysis window.</p>
    <h3 id="3-ai-module">3. AI Module</h3>
    <p>Loads the trained Isolation Forest model, normalizes features, computes normalized anomaly
      indexs, and makes threshold decisions.</p>
    <h3 id="4-storage-module">4. Storage Module</h3>
    <p>Writes data to the database (raw measurements, processed features, anomaly records). Handles
      write buffering and error recovery.</p>
    <h3 id="5-api-module">5. API Module</h3>
    <p>Serves REST endpoints for the dashboard and external consumers. Returns JSON responses.</p>
    <h3 id="6-alert-module">6. Alert Module</h3>
    <p>Monitors anomaly decisions and triggers notifications (dashboard alerts, email, webhook).</p>
    <h2 id="process-model">Process Model</h2>
    <pre><code className="language-mermaid">flowchart LR{"\n"}{"    "}subgraph MAIN["Main Process"]{"\n"}{"        "}DAQ_THREAD["DAQ\n(Thread/Async)"]{"\n"}{"        "}PROC_THREAD["Processing\n(Thread/Async)"]{"\n"}{"        "}AI_THREAD["AI\n(Thread/Async)"]{"\n"}{"    "}end{"\n"}{"\n"}{"    "}subgraph API_PROC["API Process"]{"\n"}{"        "}API_SERVER["Web Server\n(Flask/FastAPI)"]{"\n"}{"    "}end{"\n"}{"\n"}{"    "}DAQ_THREAD --&gt;|"Queue"| PROC_THREAD{"\n"}{"    "}PROC_THREAD --&gt;|"Queue"| AI_THREAD{"\n"}{"    "}DAQ_THREAD --&gt;|"DB Write"| DB["Database"]{"\n"}{"    "}PROC_THREAD --&gt;|"DB Write"| DB{"\n"}{"    "}AI_THREAD --&gt;|"DB Write"| DB{"\n"}{"    "}DB --&gt;|"DB Read"| API_SERVER{"\n"}</code></pre>
    <hr />
    <p><em>See also: <Link to="/06-software/software-overview">Software Overview</Link> | <Link to="/06-software/data-ingestion">Data Ingestion</Link> | <Link to="/06-software/realtime-processing">Real-Time
          Processing</Link></em></p>
  </article>
</div>

    </main>
  );
}