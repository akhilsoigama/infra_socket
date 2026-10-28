import { Link } from 'react-router-dom';

export default function Page05AiMlModelSelection() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">AI / ML</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Model Selection</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Model Selection</h1>
    <h2 id="why-isolation-forest-">Why Isolation Forest?</h2>
    <table>
      <thead>
        <tr>
          <th>Criterion</th>
          <th>Isolation Forest</th>
          <th>One-Class SVM</th>
          <th>Autoencoder</th>
          <th>Statistical (Z-score)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Unsupervised</td>
          <td>✅ Yes</td>
          <td>✅ Yes</td>
          <td>✅ Yes</td>
          <td>✅ Yes</td>
        </tr>
        <tr>
          <td>Works with small data</td>
          <td>✅ Yes</td>
          <td>⚠️ Moderate</td>
          <td>❌ Needs more data</td>
          <td>✅ Yes</td>
        </tr>
        <tr>
          <td>Computational cost</td>
          <td>✅ Low</td>
          <td>⚠️ Moderate</td>
          <td>❌ High (GPU helpful)</td>
          <td>✅ Very low</td>
        </tr>
        <tr>
          <td>Edge deployment</td>
          <td>✅ Easy</td>
          <td>✅ Easy</td>
          <td>⚠️ Harder</td>
          <td>✅ Easy</td>
        </tr>
        <tr>
          <td>No distribution assumptions</td>
          <td>✅ Yes</td>
          <td>⚠️ Kernel-dependent</td>
          <td>✅ Yes</td>
          <td>❌ Assumes normal dist.</td>
        </tr>
        <tr>
          <td>Multi-dimensional</td>
          <td>✅ Yes</td>
          <td>✅ Yes</td>
          <td>✅ Yes</td>
          <td>❌ Per-feature only</td>
        </tr>
        <tr>
          <td>Interpretability</td>
          <td>✅ Good (score)</td>
          <td>⚠️ Moderate</td>
          <td>⚠️ Moderate</td>
          <td>✅ Very good</td>
        </tr>
        <tr>
          <td>Maturity</td>
          <td>✅ Well-established</td>
          <td>✅ Well-established</td>
          <td>✅ Established</td>
          <td>✅ Classical</td>
        </tr>
      </tbody>
    </table>
    <p><strong>Isolation Forest</strong> is selected for the MVP because it is:</p>
    <ol>
      <li><strong>Unsupervised</strong> — does not require labeled anomalies</li>
      <li><strong>Works without large labeled datasets</strong> — the amount and diversity of baseline
        data required will be determined experimentally</li>
      <li><strong>Computationally efficient</strong> — suitability for specific edge hardware to be
        benchmarked</li>
      <li><strong>Well-understood</strong> — published in IEEE ICDM 2008 by Liu, Ting, and Zhou;
        extensive Menu and library support (scikit-learn)</li>
      <li><strong>Multi-dimensional</strong> — considers all features jointly, not independently</li>
    </ol>
    <h2 id="alternative-models-future-scope-">Alternative Models (<code>Future Scope</code>)</h2>
    <h3 id="one-class-svm">One-Class SVM</h3>
    <p>Learns a boundary around normal data in feature space. Useful but more sensitive to
      hyperparameters and feature scaling.</p>
    <h3 id="autoencoder-neural-network-">Autoencoder (Neural Network)</h3>
    <p>Learns to compress and reconstruct normal data. Anomalies produce high reconstruction error.
      Requires more data and computational resources.</p>
    <h3 id="local-outlier-factor-lof-">Local Outlier Factor (LOF)</h3>
    <p>Density-based approach — anomalies are in low-density regions. Computationally heavier during
      inference. May be used alongside Isolation Forest for comparison.</p>
    <h3 id="ensemble-approach">Ensemble Approach</h3>
    <p>Combine multiple models and aggregate their Normalized Anomaly Indices. More robust but more
      complex. <code>Future Scope</code>.</p>
    <h2 id="model-comparison-plan">Model Comparison Plan</h2>
    <p><code>Assumption</code>: For the MVP, only Isolation Forest will be implemented. After collecting
      sufficient data, additional models can be trained and compared using the same feature vectors
      and evaluation metrics.</p>
    <hr />
    <p><em>See also: <Link to="/05-ai-ml/anomaly-detection">Anomaly Detection</Link> | <Link to="/05-ai-ml/model-training">Model Training</Link> | <Link to="/05-ai-ml/model-evaluation">Model
          Evaluation</Link></em></p>
  </article>
</div>

    </main>
  );
}