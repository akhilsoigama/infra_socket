import { Link } from 'react-router-dom';

export default function Page04SignalProcessingSampling() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Signal Processing</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Sampling</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Sampling</h1>
    <h2 id="the-nyquist-shannon-sampling-theorem">The Nyquist-Shannon Sampling Theorem</h2>
    <blockquote>
      <p><strong>Simple Explanation:</strong>
        To capture a wave faithfully, you need to take at least two "snapshots" per wave cycle. If
        you take too few snapshots, the wave appears to be slower than it actually is — this
        distortion is called <strong>aliasing</strong>, and once it happens, you cannot undo it.</p>
    </blockquote>
    <blockquote>
      <p><strong>Technical Explanation:</strong>
        The Nyquist-Shannon theorem states that a continuous signal can be perfectly reconstructed
        from its samples if the sampling rate (fs) is greater than twice the highest frequency
        component in the signal (f_max):</p>
      <p>fs &gt; 2 × f_max</p>
      <p>The frequency fs/2 is called the <strong>Nyquist frequency</strong>. Any signal components
        above the Nyquist frequency are aliased — they appear as false lower-frequency components in
        the sampled data.</p>
    </blockquote>
    <h2 id="sampling-rate-selection-for-infrasocket">Sampling Rate Selection for InfraSocket</h2>
    <table>
      <thead>
        <tr>
          <th>Parameter</th>
          <th>Value</th>
          <th>Reasoning</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Maximum signal frequency</td>
          <td>20 Hz</td>
          <td>Upper bound of infrasound range</td>
        </tr>
        <tr>
          <td>Theoretical Nyquist boundary</td>
          <td>&gt;40 Hz (Theoretical minimum, Prototype targets approx. 100 Hz (TARGET - Pending validation))</td>
          <td>Sampling must be greater than 2 × 20 Hz; 40 Hz (Theoretical minimum, Prototype targets approx. 100 Hz (TARGET - Pending validation)) itself is only the boundary</td>
        </tr>
        <tr>
          <td>Prototype engineering target</td>
          <td><strong>Approximately 100 Hz (TARGET - Pending validation) — TARGET</strong></td>
          <td>Provides practical transition-band margin for anti-alias filtering and processing; not experimentally validated</td>
        </tr>
      </tbody>
    </table>
    <blockquote>
      <p>For a 20 Hz upper-band target, the theoretical Nyquist condition is f<sub>s</sub> &gt; 40 Hz (Theoretical minimum, Prototype targets approx. 100 Hz (TARGET - Pending validation));
        40 Hz (Theoretical minimum, Prototype targets approx. 100 Hz (TARGET - Pending validation)) is not a preferred engineering rate. The current prototype engineering target is
        approximately 100 Hz (TARGET - Pending validation) to provide practical transition-band margin for the analog anti-alias
        filter and digital processing. This is a TARGET, not a verified hardware setting. Sampling
        rate and filter response must be validated together.</p>
    </blockquote>
    <h3 id="why-50-hz-as-minimum-candidate-">Why Target Approximately 100 Hz (TARGET - Pending validation)?</h3>
    <ul>
      <li>Creates more transition-band room between the 20 Hz target band and Nyquist than a rate near 40 Hz (Theoretical minimum, Prototype targets approx. 100 Hz (TARGET - Pending validation)).</li>
      <li>Allows practical anti-alias filter design and digital processing margin.</li>
      <li>The final rate remains subject to the selected ADC, filter, storage format, and experimental validation.</li>
    </ul>
    <blockquote>
      <p><strong>Important:</strong> Sampling rate primarily determines the upper usable frequency and
        anti-aliasing requirements. Low-frequency performance also depends on sensor response,
        stability, observation duration and system design. Detecting/characterizing a 0.01 Hz signal
        (period ≈ 100 seconds) requires sufficiently long observation windows, stable sensor
        response, and appropriate reference chamber design. The target measurement band (0.01–20 Hz (TARGET - Pending experimental validation))
        is a design objective. Full sensor response across this entire band must be experimentally
        validated.</p>
    </blockquote>
    <h3 id="data-volume-at-100-hz">Illustrative Raw Data Volume</h3>
    <pre><code>100 samples/sec × 2 bytes/sample (illustrative packed 16-bit format) = 200 bytes/sec{"\n"}= 12 KB/min{"\n"}= 720 KB/hour{"\n"}= 17.28 MB/day{"\n"}</code></pre>
    <p>This is arithmetic for an illustrative 100 Hz (TARGET - Pending validation), 2-byte-per-sample payload only. The sampling rate
      and ADC format are targets/candidates, not confirmed selections. Framing, timestamps, metadata,
      filesystem overhead, and any higher-resolution representation change actual storage use.</p>
    <h2 id="anti-aliasing">Anti-Aliasing</h2>
    <p>Before sampling, the analog anti-aliasing filter must attenuate out-of-band content sufficiently
      before it can alias into the measurement band. At the approximately 100 Hz (TARGET - Pending validation) sampling-rate target,
      Nyquist is approximately 50 Hz; the filter transition band must be designed from the required
      passband and stopband, not treated as an ideal cutoff at Nyquist. See <Link to="/03-hardware/analog-front-end">Analog Front End</Link>. The actual filter is TBD
      pending component selection and measurement.</p>
    <h2 id="sample-timestamping">Sample Timestamping</h2>
    <p>Every sample must be associated with a precise timestamp. Requirements:</p>
    <ul>
      <li><strong>Clock source:</strong> Use the system clock of the DAQ microcontroller or host
        computer</li>
      <li><strong>Resolution:</strong> The 100 Hz (TARGET - Pending validation) target has a 10 ms sample interval. Timestamp
        resolution, clock error, and synchronization accuracy must be specified for the acquisition
        implementation and validated; no timing accuracy is established here.</li>
      <li><strong>Synchronization:</strong> If multiple sensors are used (<code>Future Scope</code>),
        their clocks must be synchronized (e.g., via NTP or GPS)</li>
    </ul>
    <h2 id="sample-format">Sample Format</h2>
    <p>Each raw sample consists of:</p>
    <pre><code>{"{"}{"\n"}{"  "}"timestamp": "ISO 8601 format with milliseconds",{"\n"}{"  "}"adc_value": integer (16-bit or 24-bit),{"\n"}{"  "}"channel": 0{"\n"}{"}"}{"\n"}</code></pre>
    <p>The raw ADC integer value is converted to physical units (Pascals) using calibration
      coefficients.</p>
    <hr />
    <p><em>See also: <Link to="/04-signal-processing/signal-processing-overview">Signal Processing Overview</Link> | <Link to="/04-signal-processing/filtering">Filtering</Link> | <Link to="/03-hardware/adc-digitization">ADC /
          Digitization</Link></em></p>
  </article>
</div>

    </main>
  );
}