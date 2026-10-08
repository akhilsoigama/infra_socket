import { Link } from 'react-router-dom';

export default function Page02SystemArchitectureDataFlow() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">System Architecture</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Data Flow</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Data Flow</h1>
    <h2 id="end-to-end-data-flow-diagram">End-to-End Data Flow Diagram</h2>
    <pre><code className="language-mermaid">flowchart TD{"\n"}{"    "}A["fa:fa-globe{"  "}Atmospheric\nPressure Wave"] --&gt;|"Physical\npropagation"| B["fa:fa-wind{"  "}Wind-Noise\nReduction Manifold"]{"\n"}{"\n"}{"    "}B --&gt;|"Averaged\npressure"| C["fa:fa-microchip{"  "}Pressure\nSensor"]{"\n"}{"\n"}{"    "}C --&gt;|"Differential\nvoltage (µV–mV)"| D["fa:fa-bolt{"  "}Instrumentation\nAmplifier"]{"\n"}{"\n"}{"    "}D --&gt;|"Amplified voltage\n(mV–V range)"| E["🔧 Anti-Alias\nFilter"]{"\n"}{"\n"}{"    "}E --&gt;|"Filtered analog\nsignal"| F["fa:fa-microchip{"  "}ADC\n(Digital Samples)"]{"\n"}{"\n"}{"    "}F --&gt;|"Raw digital\nsamples + timestamp"| G["💾 Raw Data\nStorage"]{"\n"}{"\n"}{"    "}F --&gt;|"Raw digital\nsamples"| H["🧹 DC Offset\nRemoval"]{"\n"}{"\n"}{"    "}H --&gt;|"Zero-centred\nsamples"| I["📐 Band-Pass\nFilter (0.01–20 Hz)"]{"\n"}{"\n"}{"    "}I --&gt;|"Filtered\nsamples"| J["🪟 Windowing"]{"\n"}{"\n"}{"    "}J --&gt;|"Windowed\nsegment"| K["fa:fa-microchip{"  "}FFT"]{"\n"}{"\n"}{"    "}K --&gt;|"Power spectrum"| L["🖼️ Spectrogram"]{"\n"}{"\n"}{"    "}I --&gt;|"Filtered samples"| M["fa:fa-microchip{"  "}Feature\nExtraction"]{"\n"}{"    "}K --&gt;|"Spectral data"| M{"\n"}{"\n"}{"    "}M --&gt;|"Feature vector\n[RMS, peak, energy,\nfreq, centroid, BW]"| N["fa:fa-brain{"  "}Isolation\nForest"]{"\n"}{"\n"}{"    "}N --&gt;|"Normalized\nAnomaly Index"| O{"{"}"Index &gt;\nThreshold?"{"}"}{"\n"}{"\n"}{"    "}O --&gt;|"Yes"| P["fa:fa-triangle-exclamation{"  "}Potential\nAnomaly Record"]{"\n"}{"    "}O --&gt;|"No"| Q["fa:fa-check{"  "}Normal\nRecord"]{"\n"}{"\n"}{"    "}P --&gt; R["fa:fa-database{"  "}Database"]{"\n"}{"    "}Q --&gt; R{"\n"}{"\n"}{"    "}P --&gt; S["fa:fa-bell{"  "}Alert\nService"]{"\n"}{"\n"}{"    "}R --&gt; T["fa:fa-plug{"  "}REST\nAPI"]{"\n"}{"\n"}{"    "}T --&gt; U["fa:fa-chart-line{"  "}Dashboard"]{"\n"}{"    "}S --&gt; U{"\n"}{"\n"}{"    "}style G fill:#e8f5e9{"\n"}{"    "}style R fill:#e8f5e9{"\n"}</code></pre>
    <h2 id="data-types-at-each-stage">Data Types at Each Stage</h2>
    <table>
      <thead>
        <tr>
          <th>Stage</th>
          <th>Data Type</th>
          <th>Format</th>
          <th>Approximate Size</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Wind-noise manifold output</td>
          <td>Air pressure</td>
          <td>Physical (pneumatic)</td>
          <td>N/A</td>
        </tr>
        <tr>
          <td>Sensor output</td>
          <td>Differential voltage</td>
          <td>Analog (µV to mV)</td>
          <td>N/A</td>
        </tr>
        <tr>
          <td>Amplifier output</td>
          <td>Amplified voltage</td>
          <td>Analog (mV to V)</td>
          <td>N/A</td>
        </tr>
        <tr>
          <td>ADC output</td>
          <td>Digital samples</td>
          <td>Integer (16–24 bit)</td>
          <td>2–3 bytes per sample</td>
        </tr>
        <tr>
          <td>Raw data record</td>
          <td>Timestamp + sample</td>
          <td><code>{'{'}timestamp, value, temperature{'}'}</code></td>
          <td>~20 bytes per record</td>
        </tr>
        <tr>
          <td>Filtered signal</td>
          <td>Digital samples</td>
          <td>Float array</td>
          <td>~4 bytes per sample</td>
        </tr>
        <tr>
          <td>FFT output</td>
          <td>Complex spectrum</td>
          <td>Complex float array</td>
          <td>~8 bytes per bin</td>
        </tr>
        <tr>
          <td>Spectrogram</td>
          <td>Time-frequency matrix</td>
          <td>2D float array</td>
          <td>Varies with window/overlap</td>
        </tr>
        <tr>
          <td>Feature vector</td>
          <td>Numerical features</td>
          <td>Float array (6–10 values)</td>
          <td>~40–80 bytes</td>
        </tr>
        <tr>
          <td>Anomaly index</td>
          <td>Single value</td>
          <td>Float (project-defined normalized index — not a probability)</td>
          <td>4 bytes</td>
        </tr>
        <tr>
          <td>Anomaly record</td>
          <td>Structured record</td>
          <td>JSON / DB record</td>
          <td>~200–500 bytes</td>
        </tr>
      </tbody>
    </table>
    <h2 id="data-flow-rates">Data Flow Rates</h2>
    <p><code>Assumption</code>: Based on a candidate 50 Hz sampling rate (chosen to provide margin above
      the 40 Hz (Theoretical minimum, Prototype targets approx. 100 Hz (TARGET - Pending validation)) Nyquist minimum). A higher sampling rate such as 100 Hz (TARGET - Pending validation) may be selected to provide
      additional practical margin for anti-alias filtering.</p>
    <table>
      <thead>
        <tr>
          <th>Stage</th>
          <th>Data Rate</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>ADC samples</td>
          <td>50 samples/sec</td>
          <td>~100 bytes/sec (≥16-bit (TARGET - Final selection depends on ENOB and noise))</td>
        </tr>
        <tr>
          <td>Raw data storage</td>
          <td>~1 KB/sec</td>
          <td>With timestamp and metadata overhead</td>
        </tr>
        <tr>
          <td>Signal processing</td>
          <td>Window every 10–60 sec</td>
          <td>Processing triggered per window</td>
        </tr>
        <tr>
          <td>Feature extraction</td>
          <td>1 vector per window</td>
          <td>6–10 features per vector</td>
        </tr>
        <tr>
          <td>AI inference</td>
          <td>1 score per window</td>
          <td>Milliseconds per inference</td>
        </tr>
        <tr>
          <td>Dashboard updates</td>
          <td>1–5 updates/sec</td>
          <td>Waveform updates in near real-time</td>
        </tr>
      </tbody>
    </table>
    <h2 id="data-persistence-points">Data Persistence Points</h2>
    <p>Data is persisted at three key stages to ensure no data is lost:</p>
    <pre><code className="language-mermaid">flowchart LR{"\n"}{"    "}RAW["📦 Raw Data\n(Always saved)"] --&gt; PROC["📦 Processed Data\n(Filtered + Features)"]{"\n"}{"    "}PROC --&gt; ANOM["📦 Anomaly Records\n(Scores + Decisions)"]{"\n"}{"\n"}{"    "}style RAW fill:#c8e6c9{"\n"}{"    "}style PROC fill:#fff9c4{"\n"}{"    "}style ANOM fill:#ffcdd2{"\n"}</code></pre>
    <ol>
      <li><strong>Raw Data (Green):</strong> Always saved immediately after digitization. Even if all
        downstream processing fails, raw data is preserved.</li>
      <li><strong>Processed Data (Yellow):</strong> Saved after signal processing and feature
        extraction.</li>
      <li><strong>Anomaly Records (Red):</strong> Saved with each anomaly detection decision (whether
        normal or anomaly).</li>
    </ol>
    <h2 id="failure-scenarios-and-data-preservation">Failure Scenarios and Data Preservation</h2>
    <table>
      <thead>
        <tr>
          <th>Failure</th>
          <th>Data Impact</th>
          <th>Mitigation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>AI service crashes</td>
          <td>Raw and processed data still saved</td>
          <td>AI runs independently; restart recovers</td>
        </tr>
        <tr>
          <td>Signal processing fails</td>
          <td>Raw data still saved</td>
          <td>Can reprocess from stored raw data</td>
        </tr>
        <tr>
          <td>Database unavailable</td>
          <td>Data queued in memory buffer</td>
          <td>Write-ahead buffer; retry on reconnection</td>
        </tr>
        <tr>
          <td>Dashboard disconnected</td>
          <td>No data loss; all data in DB</td>
          <td>Dashboard reconnects and catches up</td>
        </tr>
        <tr>
          <td>Power failure</td>
          <td>Data lost only for the outage period</td>
          <td>UPS recommended; journal-mode database for crash recovery</td>
        </tr>
      </tbody>
    </table>
    <hr />
    <p><em>See also: <Link to="/02-system-architecture/architecture">Architecture</Link> | <Link to="/02-system-architecture/component-interaction">Component Interaction</Link> | <Link to="/07-data/data-model">Data Model</Link></em></p>
  </article>
</div>

    </main>
  );
}