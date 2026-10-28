import { Link } from 'react-router-dom';

export default function Page04SignalProcessingSignalQualityChecks() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Signal Processing</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Signal Quality Checks</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Signal Quality Checks</h1>
    <h2 id="purpose">Purpose</h2>
    <p>Signal quality checks identify data that may be unreliable due to hardware issues, environmental
      conditions, or processing artefacts. Flagging low-quality data prevents it from corrupting the
      AI model's baseline or triggering false alarms.</p>
    <h2 id="quality-checks">Quality Checks</h2>
    <h3 id="1-saturation-check">1. Saturation Check</h3>
    <p><strong>What:</strong> ADC output at its maximum or minimum value for extended periods.
      <strong>Cause:</strong> Signal amplitude exceeds the ADC's input range (clipping).
      <strong>Action:</strong> Flag affected samples as saturated; do not use for AI training.
    </p>
    <h3 id="2-data-gap-detection">2. Data Gap Detection</h3>
    <p><strong>What:</strong> Missing samples or unexpected time gaps between consecutive timestamps.
      <strong>Cause:</strong> Communication error, buffer overflow, DAQ restart.
      <strong>Action:</strong> Log the gap; do not interpolate across large gaps.
    </p>
    <h3 id="3-dc-level-check">3. DC Level Check</h3>
    <p><strong>What:</strong> Mean signal level deviates significantly from the expected baseline.
      <strong>Cause:</strong> Sensor failure, capillary clogging, temperature extreme, reference
      chamber leak.
      <strong>Action:</strong> Flag for investigation; possible sensor maintenance needed.
    </p>
    <h3 id="4-noise-level-check">4. Noise Level Check</h3>
    <p><strong>What:</strong> RMS noise level significantly higher or lower than the established
      baseline.
      <strong>Cause:</strong> High wind, electronic interference, sensor degradation, or sensor
      disconnection.
      <strong>Action:</strong> Flag windows with abnormally high or low noise.
    </p>
    <h3 id="5-spectral-anomaly-check">5. Spectral Anomaly Check</h3>
    <p><strong>What:</strong> Persistent strong peak at a specific frequency not present in the
      baseline.
      <strong>Cause:</strong> Electronic interference (e.g., mains hum at 50/60 Hz), mechanical
      vibration.
      <strong>Action:</strong> Investigate; may need hardware mitigation.
    </p>
    <h3 id="6-temperature-range-check">6. Temperature Range Check</h3>
    <p><strong>What:</strong> Temperature outside the expected operating range.
      <strong>Cause:</strong> Extreme weather, enclosure failure, direct sunlight.
      <strong>Action:</strong> Flag data as potentially temperature-affected.
    </p>
    <h2 id="quality-status-codes">Quality Status Codes</h2>
    <table>
      <thead>
        <tr>
          <th>Code</th>
          <th>Meaning</th>
          <th>AI Training</th>
          <th>AI Inference</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>OK</code></td>
          <td>Data passes all quality checks</td>
          <td>Include</td>
          <td>Process normally</td>
        </tr>
        <tr>
          <td><code>SATURATED</code></td>
          <td>ADC clipping detected</td>
          <td>Exclude</td>
          <td>Flag result</td>
        </tr>
        <tr>
          <td><code>GAP</code></td>
          <td>Data gap in this window</td>
          <td>Exclude</td>
          <td>Skip window</td>
        </tr>
        <tr>
          <td><code>HIGH_NOISE</code></td>
          <td>Noise level above threshold</td>
          <td>Exclude</td>
          <td>Process with caution</td>
        </tr>
        <tr>
          <td><code>DRIFT</code></td>
          <td>DC level drift detected</td>
          <td>Exclude</td>
          <td>Process with caution</td>
        </tr>
        <tr>
          <td><code>TEMP_WARNING</code></td>
          <td>Temperature outside range</td>
          <td>Include with caution</td>
          <td>Process with flag</td>
        </tr>
        <tr>
          <td><code>SENSOR_ERROR</code></td>
          <td>Sensor communication failure</td>
          <td>Exclude</td>
          <td>No data</td>
        </tr>
      </tbody>
    </table>
    <h2 id="implementation">Implementation</h2>
    <p>Quality checks run automatically after each signal window is processed and before features are
      passed to the AI model:</p>
    <pre><code className="language-mermaid">flowchart LR{"\n"}{"    "}DATA["Signal\nWindow"] --&gt; QC["Quality\nChecks"]{"\n"}{"    "}QC --&gt;|"OK"| FE["Feature\nExtraction → AI"]{"\n"}{"    "}QC --&gt;|"Failed"| LOG["Log Issue\n+ Skip/Flag"]{"\n"}</code></pre>
    <hr />
    <p><em>See also: <Link to="/04-signal-processing/signal-processing-overview">Signal Processing Overview</Link> | <Link to="/04-signal-processing/feature-extraction">Feature Extraction</Link> | <Link to="/04-signal-processing/noise-reduction">Noise
          Reduction</Link></em></p>
  </article>
</div>

    </main>
  );
}