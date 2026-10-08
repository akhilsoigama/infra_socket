import { Link } from 'react-router-dom';

export default function Page06SoftwareRealtimeProcessing() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Software</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Real-Time Processing</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Real-Time Processing</h1>
    <h2 id="overview">Overview</h2>
    <p>Real-time processing ensures that sensor data is continuously acquired, processed, analyzed, and
      visualized with minimal latency.</p>
    <h2 id="processing-timeline">Processing Timeline</h2>
    <pre><code className="language-mermaid">gantt{"\n"}{"    "}title Real-Time Processing Timeline (per 30-second window){"\n"}{"    "}dateFormat ss{"\n"}{"    "}axisFormat %S sec{"\n"}{"\n"}{"    "}section Data Acquisition{"\n"}{"        "}Continuous ADC sampling{"  "}:a1, 00, 30s{"\n"}{"\n"}{"    "}section Processing{"\n"}{"        "}DC removal + Filtering{"   "}:p1, 30, 1s{"\n"}{"        "}FFT + Spectrogram{"        "}:p2, after p1, 1s{"\n"}{"        "}Feature extraction{"       "}:p3, after p2, 1s{"\n"}{"\n"}{"    "}section AI{"\n"}{"        "}Isolation Forest inference :ai1, after p3, 1s{"\n"}{"\n"}{"    "}section Output{"\n"}{"        "}Database write{"           "}:o1, after ai1, 1s{"\n"}{"        "}Dashboard update{"         "}:o2, after ai1, 1s{"\n"}{"        "}Alert (if anomaly){"       "}:o3, after ai1, 1s{"\n"}</code></pre>
    <h2 id="latency-budget-proposed-engineering-targets-">Latency Budget (Proposed Engineering Targets)
    </h2>
    <blockquote>
      <p><strong>Note:</strong> The following latency values are proposed engineering targets, not
        measured results. They will be benchmarked on the selected edge hardware after
        implementation.</p>
    </blockquote>
    <table>
      <thead>
        <tr>
          <th>Stage</th>
          <th>Proposed Target</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Data acquisition (window fill)</td>
          <td>30 seconds</td>
          <td>Window accumulation time</td>
        </tr>
        <tr>
          <td>Signal processing</td>
          <td>&lt; 500 ms</td>
          <td>Filtering + FFT on ~1500 samples</td>
        </tr>
        <tr>
          <td>Feature extraction</td>
          <td>&lt; 100 ms</td>
          <td>Simple arithmetic operations (proposed)</td>
        </tr>
        <tr>
          <td>AI inference</td>
          <td>&lt; 100 ms</td>
          <td>Isolation Forest (proposed target — To Be Validated)</td>
        </tr>
        <tr>
          <td>Database write</td>
          <td>&lt; 100 ms</td>
          <td>Local database</td>
        </tr>
        <tr>
          <td>Dashboard push</td>
          <td>&lt; 200 ms</td>
          <td>WebSocket or polling</td>
        </tr>
        <tr>
          <td><strong>Total pipeline</strong></td>
          <td><strong>~31 seconds</strong></td>
          <td>Dominated by window accumulation</td>
        </tr>
      </tbody>
    </table>
    <p>The practical detection latency is approximately one window length (30 seconds) plus processing
      time (~1 second, proposed).</p>
    <h2 id="streaming-architecture">Streaming Architecture</h2>
    <p>Data flows through the pipeline as a continuous stream:</p>
    <ul>
      <li>ADC samples arrive continuously at the candidate sampling rate (e.g., 50–100 Hz (TARGET - Pending validation))</li>
      <li>The dashboard waveform can update at a higher rate (e.g., every 1–2 seconds) using the raw
        sample buffer</li>
      <li>Feature extraction and AI inference run on each completed analysis window</li>
    </ul>
    <hr />
    <p><em>See also: <Link to="/06-software/backend">Backend</Link> | <Link to="/04-signal-processing/signal-processing-overview">Signal Processing
          Overview</Link></em></p>
  </article>
</div>

    </main>
  );
}