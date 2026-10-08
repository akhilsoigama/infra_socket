import { Link } from 'react-router-dom';

export default function Page04SignalProcessingFeatureExtraction() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Signal Processing</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Feature Extraction</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Feature Extraction</h1>
    <h2 id="purpose">Purpose</h2>
    <p>Feature extraction converts each analysis window of processed signal data into a compact
      numerical vector (a set of numbers) that summarizes the key characteristics of the signal in
      that window. This feature vector is the input to the AI anomaly detection model.</p>
    <blockquote>
      <p><strong>Simple Explanation:</strong>
        Instead of sending thousands of raw samples to the AI, we compute a "summary" of each signal
        window — like computing the average, the loudest point, and the main frequency. The AI then
        looks at these summaries to decide if something unusual is happening.</p>
    </blockquote>
    <h2 id="features-extracted">Features Extracted</h2>
    <h3 id="time-domain-features">Time-Domain Features</h3>
    <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th>Formula / Description</th>
          <th>What It Represents</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>RMS Amplitude</strong></td>
          <td>√(mean(x²))</td>
          <td>Overall signal strength (root-mean-square energy)</td>
        </tr>
        <tr>
          <td><strong>Peak Amplitude</strong></td>
          <td>max(</td>
          <td>x</td>
        </tr>
        <tr>
          <td><strong>Peak-to-Peak</strong></td>
          <td>max(x) − min(x)</td>
          <td>Total range of signal variation</td>
        </tr>
        <tr>
          <td><strong>Crest Factor</strong></td>
          <td>Peak / RMS</td>
          <td>How "peaky" the signal is (high = impulsive events)</td>
        </tr>
        <tr>
          <td><strong>Zero-Crossing Rate</strong></td>
          <td>Count of zero crossings / window length</td>
          <td>Related to dominant frequency</td>
        </tr>
        <tr>
          <td><strong>Standard Deviation</strong></td>
          <td>std(x)</td>
          <td>Variability of the signal</td>
        </tr>
      </tbody>
    </table>
    <h3 id="frequency-domain-features">Frequency-Domain Features</h3>
    <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th>Formula / Description</th>
          <th>What It Represents</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Dominant Frequency</strong></td>
          <td>argmax(PSD)</td>
          <td>Frequency with highest power</td>
        </tr>
        <tr>
          <td><strong>Spectral Centroid</strong></td>
          <td>Σ(f × P(f)) / Σ(P(f))</td>
          <td>"Centre of mass" of the spectrum</td>
        </tr>
        <tr>
          <td><strong>Spectral Bandwidth</strong></td>
          <td>Weighted std of frequency around centroid</td>
          <td>Spread of spectral energy</td>
        </tr>
        <tr>
          <td><strong>Spectral Energy</strong></td>
          <td>Σ(P(f))</td>
          <td>Total power in the spectrum</td>
        </tr>
        <tr>
          <td><strong>Band Energy (0.01–0.1 Hz)</strong></td>
          <td>Σ(P(f)) for f in [0.01, 0.1]</td>
          <td>Energy in the ultra-low sub-band</td>
        </tr>
        <tr>
          <td><strong>Band Energy (0.1–1 Hz)</strong></td>
          <td>Σ(P(f)) for f in [0.1, 1]</td>
          <td>Energy in the low sub-band</td>
        </tr>
        <tr>
          <td><strong>Band Energy (1–20 Hz)</strong></td>
          <td>Σ(P(f)) for f in [1, 20]</td>
          <td>Energy in the mid-upper sub-band</td>
        </tr>
        <tr>
          <td><strong>Spectral Rolloff</strong></td>
          <td>Frequency below which 85% of energy lies</td>
          <td>Shape of spectral distribution</td>
        </tr>
        <tr>
          <td><strong>Spectral Flatness</strong></td>
          <td>Geometric mean(PSD) / Arithmetic mean(PSD)</td>
          <td>How "noise-like" vs. "tonal" the signal is</td>
        </tr>
      </tbody>
    </table>
    <h2 id="feature-vector">Feature Vector</h2>
    <p>The complete feature vector for each analysis window is an array of these numerical values:</p>
    <pre><code>feature_vector = [{"\n"}{"    "}rms_amplitude,{"\n"}{"    "}peak_amplitude,{"\n"}{"    "}crest_factor,{"\n"}{"    "}zero_crossing_rate,{"\n"}{"    "}dominant_frequency,{"\n"}{"    "}spectral_centroid,{"\n"}{"    "}spectral_bandwidth,{"\n"}{"    "}spectral_energy,{"\n"}{"    "}band_energy_ultra_low,{"\n"}{"    "}band_energy_low,{"\n"}{"    "}band_energy_mid_upper,{"\n"}{"    "}spectral_rolloff,{"\n"}{"    "}spectral_flatness{"\n"}]{"\n"}</code></pre>
    <p><code>Assumption</code>: The exact set of features may be refined during development and testing.
      Features that provide no discriminative value (i.e., they look the same for normal and anomalous
      signals) may be removed.</p>
    <h2 id="feature-normalization">Feature Normalization</h2>
    <p>Before feeding features to the AI model, they should be normalized to prevent features with large
      absolute values from dominating the model:</p>
    <ul>
      <li><strong>Standard scaling (Z-score):</strong> (value − mean) / std_dev — transforms each
        feature to have mean 0 and standard deviation 1</li>
      <li><strong>Min-max scaling:</strong> (value − min) / (max − min) — transforms each feature to
        the [0, 1] range</li>
    </ul>
    <p>The normalization parameters (mean, std, min, max) are computed from the training data and
      applied consistently to all new data.</p>
    <h2 id="feature-quality">Feature Quality</h2>
    <p>Not all features will be equally useful. Feature quality depends on:</p>
    <ol>
      <li><strong>Discriminative power:</strong> Does this feature differ between normal and anomalous
        signals?</li>
      <li><strong>Stability:</strong> Is this feature consistent for repeated measurements of the same
        signal?</li>
      <li><strong>Independence:</strong> Is this feature largely independent of other features?
        (Redundant features add noise without adding information.)</li>
    </ol>
    <p>Feature selection and importance can be evaluated after initial data collection and model
      training.</p>
    <hr />
    <p><em>See also: <Link to="/04-signal-processing/signal-processing-overview">Signal Processing Overview</Link> | <Link to="/04-signal-processing/fft-analysis">FFT Analysis</Link> | <Link to="/05-ai-ml/feature-engineering">Feature Engineering</Link></em></p>
  </article>
</div>

    </main>
  );
}