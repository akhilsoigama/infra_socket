import { Link } from 'react-router-dom';

export default function Page04SignalProcessingFrequencyAnalysis() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Signal Processing</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Frequency Analysis</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Frequency Analysis</h1>
    <h2 id="purpose">Purpose</h2>
    <p>Frequency analysis examines the spectral content of the infrasound signal to understand which
      frequencies are present, how strong they are, and how they change over time. This information
      feeds into feature extraction and anomaly detection.</p>
    <h2 id="the-infrasound-frequency-range">The Infrasound Frequency Range</h2>
    <table>
      <thead>
        <tr>
          <th>Sub-Band</th>
          <th>Frequency</th>
          <th>Period</th>
          <th>Typical Sources</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ultra-low</td>
          <td>0.01–0.1 Hz</td>
          <td>10–100 sec</td>
          <td>Volcanic tremor, ocean microbaroms, large weather systems</td>
        </tr>
        <tr>
          <td>Low</td>
          <td>0.1–1 Hz</td>
          <td>1–10 sec</td>
          <td>Volcanic eruptions, large explosions, severe storms</td>
        </tr>
        <tr>
          <td>Mid</td>
          <td>1–5 Hz</td>
          <td>0.2–1 sec</td>
          <td>Explosions, rocket launches, industrial sources</td>
        </tr>
        <tr>
          <td>Upper</td>
          <td>5–20 Hz</td>
          <td>0.05–0.2 sec</td>
          <td>Closer/smaller sources, some industrial, boundary with audible</td>
        </tr>
      </tbody>
    </table>
    <h2 id="frequency-resolution">Frequency Resolution</h2>
    <p>The frequency resolution Δf determines how finely the spectrum can distinguish nearby
      frequencies:</p>
    <pre><code>Δf = fs / N{"\n"}{"\n"}Where:{"\n"}{"  "}fs = sampling rate (Hz){"\n"}{"  "}N = FFT size (number of samples){"\n"}</code></pre>
    <table>
      <thead>
        <tr>
          <th>FFT Size (at 50 Hz)</th>
          <th>Window Length</th>
          <th>Frequency Resolution</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>512</td>
          <td>10.24 sec</td>
          <td>0.098 Hz</td>
        </tr>
        <tr>
          <td>1024</td>
          <td>20.48 sec</td>
          <td>0.049 Hz</td>
        </tr>
        <tr>
          <td>2048</td>
          <td>40.96 sec</td>
          <td>0.024 Hz</td>
        </tr>
        <tr>
          <td>4096</td>
          <td>81.92 sec</td>
          <td>0.012 Hz</td>
        </tr>
      </tbody>
    </table>
    <p>At a 50 Hz sampling rate, N=4096 gives approximately 0.0122 Hz FFT bin spacing and therefore
      provides coarse characterization near 0.01 Hz. Longer windows or larger FFT sizes are preferable
      when finer low-frequency resolution is required.</p>
    <blockquote>
      <p>Frequency resolution depends on observation duration / FFT length, while the sampling rate
        primarily determines the upper usable frequency and anti-aliasing requirements.</p>
    </blockquote>
    <h2 id="spectral-features-for-anomaly-detection">Spectral Features for Anomaly Detection</h2>
    <p>The following spectral features are extracted from each analysis window and passed to the AI
      model:</p>
    <h3 id="1-dominant-frequency">1. Dominant Frequency</h3>
    <p>The frequency with the highest power in the spectrum.</p>
    <h3 id="2-spectral-centroid">2. Spectral Centroid</h3>
    <p>The "centre of mass" of the spectrum — indicates where the bulk of the spectral energy is
      concentrated.</p>
    <pre><code>Spectral Centroid = Σ(f[k] × P[k]) / Σ(P[k]){"\n"}</code></pre>
    <h3 id="3-spectral-bandwidth">3. Spectral Bandwidth</h3>
    <p>The spread of the spectrum around the centroid — indicates whether the energy is concentrated in
      a narrow band or spread broadly.</p>
    <h3 id="4-spectral-energy">4. Spectral Energy</h3>
    <p>Total power in the spectrum — indicates overall signal strength.</p>
    <h3 id="5-band-energy-ratios">5. Band Energy Ratios</h3>
    <p>Energy in specific sub-bands relative to total energy. Useful for distinguishing between
      different types of signals.</p>
    <h2 id="normal-vs-anomalous-spectral-patterns">Normal vs. Anomalous Spectral Patterns</h2>
    <table>
      <thead>
        <tr>
          <th>Pattern</th>
          <th>Likely Interpretation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Low, flat spectrum</td>
          <td>Quiet conditions (normal baseline)</td>
        </tr>
        <tr>
          <td>Persistent peak at specific frequency</td>
          <td>Continuous source (e.g., industrial, microbaroms)</td>
        </tr>
        <tr>
          <td>Sudden broadband increase</td>
          <td>Transient event (possible anomaly)</td>
        </tr>
        <tr>
          <td>Strong peak at unexpected frequency</td>
          <td>New or unusual source (possible anomaly)</td>
        </tr>
        <tr>
          <td>Gradual spectral change over hours</td>
          <td>Environmental change (weather, temperature)</td>
        </tr>
      </tbody>
    </table>
    <h2 id="practical-notes">Practical Notes</h2>
    <ul>
      <li>Spectral analysis complements time-domain analysis — some anomalies are visible in the
        spectrum but not obvious in the waveform, and vice versa</li>
      <li>The spectrogram provides the most complete view by combining both time and frequency
        information</li>
      <li>Automated spectral analysis (via feature extraction and AI) can detect subtle changes that
        might be missed by visual inspection</li>
    </ul>
    <hr />
    <p><em>See also: <Link to="/04-signal-processing/fft-analysis">FFT Analysis</Link> | <Link to="/04-signal-processing/feature-extraction">Feature Extraction</Link> | <Link to="/04-signal-processing/signal-processing-overview">Signal Processing Overview</Link></em></p>
  </article>
</div>

    </main>
  );
}