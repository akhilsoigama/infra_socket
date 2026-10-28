import { Link } from 'react-router-dom';

export default function Page04SignalProcessingFiltering() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Signal Processing</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Filtering</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Filtering</h1>
    <h2 id="purpose">Purpose</h2>
    <p>Digital filtering isolates the infrasound frequency band (0.01–20 Hz (TARGET - Pending experimental validation)) from the raw digital
      signal, removing unwanted components such as DC offset, residual barometric drift, and
      higher-frequency noise.</p>
    <h2 id="filter-types-used">Filter Types Used</h2>
    <h3 id="1-high-pass-filter-hpf-">1. High-Pass Filter (HPF)</h3>
    <p><strong>Purpose:</strong> Removes very-low-frequency content below the target range (&lt; 0.01
      Hz), including residual barometric drift that the reference chamber did not fully suppress.</p>
    <p><strong>Cutoff frequency:</strong> ~0.01 Hz (or slightly lower to avoid attenuating the lowest
      infrasound frequencies)</p>
    <p><strong>Challenge:</strong> Implementing a digital high-pass filter at 0.01 Hz is difficult
      because the time constant is very long (100 seconds per cycle). The filter needs many samples of
      history to operate effectively.</p>
    <blockquote>
      <p><strong>Important:</strong> High-pass filtering at 0.01 Hz removes DC and extreme
        low-frequency drift, but it does NOT create 0.01 Hz infrasound data if the sensor hardware
        itself failed to capture it. Digital filtering only isolates what was physically detected.
      </p>
    </blockquote>
    <h3 id="2-low-pass-filter-lpf-">2. Low-Pass Filter (LPF)</h3>
    <p><strong>Purpose:</strong> Removes frequencies above the infrasound range (&gt; 20 Hz), including
      any residual noise from electronics, mains hum (50/60 Hz), and other high-frequency
      interference.</p>
    <p><strong>Cutoff frequency:</strong> ~20 Hz</p>
    <p>This is simpler to implement than the high-pass filter because the cutoff frequency is well above
      the sub-hertz range.</p>
    <h3 id="3-band-pass-filter-bpf-">3. Band-Pass Filter (BPF)</h3>
    <p><strong>Purpose:</strong> Combines high-pass and low-pass filtering into a single operation,
      passing only the 0.01–20 Hz (TARGET - Pending experimental validation) range.</p>
    <pre><code className="language-mermaid">flowchart LR{"\n"}{"    "}subgraph PASS["Band-Pass Response"]{"\n"}{"        "}direction LR{"\n"}{"        "}REJECT_LOW["❌ Reject\n&lt; 0.01 Hz"] --&gt; PASS_BAND["fa:fa-check{"  "}Pass\n0.01–20 Hz"] --&gt; REJECT_HIGH["❌ Reject\n&gt; 20 Hz"]{"\n"}{"    "}end{"\n"}</code></pre>
    <h2 id="filter-design-parameters">Filter Design Parameters</h2>
    <table>
      <thead>
        <tr>
          <th>Parameter</th>
          <th>Value</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Type</td>
          <td>IIR (Infinite Impulse Response)</td>
          <td>Efficient, low computational cost</td>
        </tr>
        <tr>
          <td>Topology</td>
          <td>Butterworth or Bessel</td>
          <td>Butterworth: flat passband; Bessel: linear phase</td>
        </tr>
        <tr>
          <td>Order</td>
          <td>4th order (2nd order per section)</td>
          <td>Good balance of selectivity and stability</td>
        </tr>
        <tr>
          <td>High-pass cutoff</td>
          <td>0.01 Hz</td>
          <td>Very long time constant</td>
        </tr>
        <tr>
          <td>Low-pass cutoff</td>
          <td>20 Hz</td>
          <td />
        </tr>
        <tr>
          <td>Sampling rate</td>
          <td>50 Hz</td>
          <td />
        </tr>
      </tbody>
    </table>
    <h2 id="filter-implementation-considerations">Filter Implementation Considerations</h2>
    <h3 id="iir-vs-fir-filters">IIR vs. FIR Filters</h3>
    <table>
      <thead>
        <tr>
          <th>Characteristic</th>
          <th>IIR (Infinite Impulse Response)</th>
          <th>FIR (Finite Impulse Response)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Computational cost</td>
          <td>Low (few coefficients)</td>
          <td>High (many coefficients needed for low frequencies)</td>
        </tr>
        <tr>
          <td>Phase response</td>
          <td>Non-linear (unless Bessel)</td>
          <td>Can be linear phase</td>
        </tr>
        <tr>
          <td>Stability</td>
          <td>Must be designed carefully</td>
          <td>Always stable</td>
        </tr>
        <tr>
          <td>Suitability for 0.01 Hz</td>
          <td>Practical (few coefficients)</td>
          <td>Impractical (would need thousands of taps)</td>
        </tr>
      </tbody>
    </table>
    <p><strong>Recommendation:</strong> Use <strong>IIR filters</strong> for the prototype because
      implementing a 0.01 Hz FIR filter at 50 Hz sampling would require an impractically large number
      of filter taps.</p>
    <h3 id="numerical-stability">Numerical Stability</h3>
    <p>IIR filters with very low cutoff frequencies (relative to the sampling rate) can have numerical
      stability issues. Mitigation:</p>
    <ul>
      <li>Use <strong>second-order sections (SOS)</strong> form instead of transfer function form</li>
      <li>Use <strong>double-precision floating-point</strong> arithmetic</li>
      <li>Cascade multiple lower-order sections rather than using a single high-order filter</li>
    </ul>
    <h3 id="transient-response">Transient Response</h3>
    <p>When the filter first starts processing data (or after a gap), the output goes through a
      transient settling period. The length of this transient depends on the filter's time constant —
      for a 0.01 Hz high-pass filter, the settling time can be several minutes. Data during this
      transient period should be discarded or flagged.</p>
    <h2 id="dc-offset-removal">DC Offset Removal</h2>
    <p>Before or as part of filtering, the DC offset (constant component) of the signal is removed:</p>
    <pre><code>x_centered[n] = x[n] − mean(x){"\n"}</code></pre>
    <p>The mean can be computed as:</p>
    <ul>
      <li>A fixed mean over a calibration period</li>
      <li>A running mean (essentially a very-low-frequency high-pass filter)</li>
      <li>Removed by the high-pass filter itself</li>
    </ul>
    <h2 id="practical-filter-application">Practical Filter Application</h2>
    <p>The filtering is applied to the raw digital samples in real-time:</p>
    <pre><code>For each new sample x[n]:{"\n"}{"    "}1. Apply high-pass filter → removes DC and drift{"\n"}{"    "}2. Apply low-pass filter → removes high-frequency noise{"\n"}{"    "}(Or apply both as a single band-pass filter){"\n"}{"    "}Output: filtered sample y[n]{"\n"}</code></pre>
    <hr />
    <p><em>See also: <Link to="/04-signal-processing/signal-processing-overview">Signal Processing Overview</Link> | <Link to="/04-signal-processing/fft-analysis">FFT Analysis</Link> | <Link to="/04-signal-processing/noise-reduction">Noise
          Reduction</Link></em></p>
  </article>
</div>

    </main>
  );
}