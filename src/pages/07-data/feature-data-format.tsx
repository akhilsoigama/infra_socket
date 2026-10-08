import { Link } from 'react-router-dom';

export default function Page07DataFeatureDataFormat() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Data</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Feature Data Format</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Feature Data Format</h1>
    <h2 id="description">Description</h2>
    <p>Feature data contains the numerical feature vectors extracted from each signal window, used as
      input to the AI model.</p>
    <h2 id="record-format">Record Format</h2>
    <pre><code className="language-json">{"{"}{"\n"}{"  "}"window_id": "WIN-20250315-103000",{"\n"}{"  "}"features": {"{"}{"\n"}{"    "}"rms_amplitude": 0.012,{"\n"}{"    "}"peak_amplitude": 0.034,{"\n"}{"    "}"crest_factor": 2.83,{"\n"}{"    "}"zero_crossing_rate": 0.45,{"\n"}{"    "}"dominant_frequency": 0.45,{"\n"}{"    "}"spectral_centroid": 1.23,{"\n"}{"    "}"spectral_bandwidth": 2.1,{"\n"}{"    "}"spectral_energy": 0.0008,{"\n"}{"    "}"band_energy_ultra_low": 0.0002,{"\n"}{"    "}"band_energy_low": 0.0003,{"\n"}{"    "}"band_energy_mid_upper": 0.0003,{"\n"}{"    "}"spectral_rolloff": 5.2,{"\n"}{"    "}"spectral_flatness": 0.65{"\n"}{"  "}{"}"},{"\n"}{"  "}"normalized": false{"\n"}{"}"}{"\n"}</code></pre>
    <h2 id="feature-vector-array-form-">Feature Vector (Array Form)</h2>
    <p>For AI model input, features are ordered as a numerical array:</p>
    <pre><code>[0.012, 0.034, 2.83, 0.45, 0.45, 1.23, 2.1, 0.0008, 0.0002, 0.0003, 0.0003, 5.2, 0.65]{"\n"}</code></pre>
    <p>The order must match the order used during model training.</p>
    <hr />
    <p><em>See also: <Link to="/04-signal-processing/feature-extraction">Feature Extraction</Link> | <Link to="/07-data/anomaly-record-format">Anomaly Record Format</Link></em></p>
  </article>
</div>

    </main>
  );
}