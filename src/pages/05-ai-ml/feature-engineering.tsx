import { Link } from 'react-router-dom';

export default function Page05AiMlFeatureEngineering() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">AI / ML</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Feature Engineering</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Feature Engineering</h1>
    <h2 id="purpose">Purpose</h2>
    <p>Feature engineering determines which numerical characteristics of the signal are fed to the AI
      model. Well-chosen features capture the essential differences between normal and anomalous
      signals, enabling effective anomaly detection.</p>
    <h2 id="feature-categories">Feature Categories</h2>
    <h3 id="time-domain-features">Time-Domain Features</h3>
    <p>Computed directly from the filtered signal samples:</p>
    <ul>
      <li>RMS amplitude, peak amplitude, crest factor, zero-crossing rate, standard deviation</li>
    </ul>
    <h3 id="frequency-domain-features">Frequency-Domain Features</h3>
    <p>Computed from the FFT / power spectrum:</p>
    <ul>
      <li>Dominant frequency, spectral centroid, spectral bandwidth, spectral energy, band energies,
        spectral rolloff, spectral flatness</li>
    </ul>
    <blockquote>
      <p>See <Link to="/04-signal-processing/feature-extraction">Feature Extraction</Link> for the
        full feature catalog.</p>
    </blockquote>
    <h2 id="feature-selection-considerations">Feature Selection Considerations</h2>
    <h3 id="relevance">Relevance</h3>
    <p>A feature is useful only if it differs between normal and anomalous conditions. Features that are
      constant or randomly varying regardless of the signal state add noise without adding
      information.</p>
    <h3 id="redundancy">Redundancy</h3>
    <p>Highly correlated features carry the same information. Including many redundant features can slow
      the model without improving performance. After initial data collection, compute the correlation
      matrix between features and consider removing highly correlated pairs.</p>
    <h3 id="stability">Stability</h3>
    <p>A good feature should produce similar values for similar signals. If a feature varies wildly due
      to minor noise differences, it is unstable and may not be useful.</p>
    <h2 id="feature-engineering-strategy">Feature Engineering Strategy</h2>
    <p>For the MVP:</p>
    <ol>
      <li><strong>Start with all proposed features</strong> (from <Link to="/04-signal-processing/feature-extraction">Feature Extraction</Link>)</li>
      <li><strong>Collect baseline data</strong> and compute features</li>
      <li><strong>Analyze feature distributions</strong> — plot histograms, check for constant or
        highly variable features</li>
      <li><strong>Compute correlation matrix</strong> — identify redundant features</li>
      <li><strong>Train initial model</strong> with all features</li>
      <li><strong>Evaluate feature importance</strong> — Isolation Forest does not directly provide
        feature importance, but permutation importance or ablation studies can be used</li>
      <li><strong>Refine feature set</strong> — remove uninformative or redundant features</li>
    </ol>
    <p><code>Assumption</code>: The initial feature set will be refined based on empirical data. The
      features listed are a starting point based on standard practice in audio/vibration anomaly
      detection.</p>
    <h2 id="advanced-features-future-scope-">Advanced Features (<code>Future Scope</code>)</h2>
    <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th>Description</th>
          <th>Requirement</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mel-frequency cepstral coefficients (MFCCs)</td>
          <td>Common in audio analysis</td>
          <td>May not be meaningful for sub-1 Hz signals</td>
        </tr>
        <tr>
          <td>Wavelet coefficients</td>
          <td>Multi-resolution time-frequency analysis</td>
          <td>More complex implementation</td>
        </tr>
        <tr>
          <td>Auto-correlation features</td>
          <td>Periodicity detection</td>
          <td>Useful for repeating sources</td>
        </tr>
        <tr>
          <td>Temporal context features</td>
          <td>Features from adjacent windows</td>
          <td>Requires sequential modeling</td>
        </tr>
      </tbody>
    </table>
    <hr />
    <p><em>See also: <Link to="/04-signal-processing/feature-extraction">Feature Extraction</Link> | <Link to="/05-ai-ml/data-preprocessing">Data Preprocessing</Link> | <Link to="/05-ai-ml/model-selection">Model
          Selection</Link></em></p>
  </article>
</div>

    </main>
  );
}