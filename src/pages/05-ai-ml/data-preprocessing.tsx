import { Link } from 'react-router-dom';

export default function Page05AiMlDataPreprocessing() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">AI / ML</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Data Preprocessing</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Data Preprocessing</h1>
    <h2 id="purpose">Purpose</h2>
    <p>Data preprocessing transforms raw feature data into a form suitable for the Isolation Forest
      model. It ensures consistency between training and inference data.</p>
    <h2 id="preprocessing-pipeline">Preprocessing Pipeline</h2>
    <pre><code className="language-mermaid">flowchart TD{"\n"}{"    "}RAW["Raw Feature\nVectors"] --&gt; QC["Quality\nFilter"]{"\n"}{"    "}QC --&gt; MISS["Handle Missing\nValues"]{"\n"}{"    "}MISS --&gt; OUT["Outlier\nScreening"]{"\n"}{"    "}OUT --&gt; NORM["Feature\nNormalization"]{"\n"}{"    "}NORM --&gt; READY["Preprocessed\nFeature Vectors"]{"\n"}</code></pre>
    <h2 id="steps">Steps</h2>
    <h3 id="1-quality-filtering">1. Quality Filtering</h3>
    <p>Remove feature vectors from windows that failed signal quality checks (saturation, data gaps,
      sensor errors). Only <code>OK</code> quality data should be used for training.</p>
    <h3 id="2-missing-value-handling">2. Missing Value Handling</h3>
    <p>If any features are missing (e.g., because FFT failed for a window), the window should be
      excluded rather than imputed, since missing data in real-time sensor systems usually indicates a
      processing error.</p>
    <h3 id="3-outlier-screening-training-only-">3. Outlier Screening (Training Only)</h3>
    <p>During training, screen for extreme outliers in the feature data that may indicate sensor
      artefacts or processing errors. Simple statistical methods (e.g., values beyond 5 standard
      deviations from the mean) can be used. This step is NOT applied during inference — during
      inference, outliers are exactly what we want to detect.</p>
    <h3 id="4-feature-normalization-optional-to-be-evaluated-">4. Feature Normalization (Optional — To
      Be Evaluated)</h3>
    <blockquote>
      <p>Feature scaling/normalization will be evaluated during experimentation. Isolation Forest does
        not inherently require feature scaling because it uses random feature splits rather than
        distance-based calculations. However, scaling may improve performance in some
        configurations. If applied, the transformation fitted on training data must be reused
        unchanged during inference.</p>
    </blockquote>
    <p><strong>Standard Scaling (Z-score normalization), if used:</strong></p>
    <pre><code>x_normalized = (x − μ) / σ{"\n"}{"\n"}Where:{"\n"}{"  "}μ = mean of the feature (computed from training data){"\n"}{"  "}σ = standard deviation (computed from training data){"\n"}</code></pre>
    <p><strong>Important:</strong></p>
    <ul>
      <li>Compute μ and σ <strong>only from the training data</strong></li>
      <li>Apply the <strong>same μ and σ</strong> to all new data during inference</li>
      <li>Save these parameters alongside the model</li>
    </ul>
    <h2 id="preprocessing-consistency">Preprocessing Consistency</h2>
    <p>The exact same preprocessing steps and parameters must be applied during both training and
      inference. Any inconsistency will cause the model to behave unpredictably.</p>
    <table>
      <thead>
        <tr>
          <th>Step</th>
          <th>Training</th>
          <th>Inference</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Quality filter</td>
          <td>Applied</td>
          <td>Applied</td>
        </tr>
        <tr>
          <td>Missing value handling</td>
          <td>Exclude</td>
          <td>Exclude</td>
        </tr>
        <tr>
          <td>Outlier screening</td>
          <td>Applied</td>
          <td><strong>NOT applied</strong></td>
        </tr>
        <tr>
          <td>Normalization parameters</td>
          <td>Computed</td>
          <td>Loaded from training</td>
        </tr>
        <tr>
          <td>Normalization application</td>
          <td>Applied</td>
          <td>Applied</td>
        </tr>
      </tbody>
    </table>
    <hr />
    <p><em>See also: <Link to="/05-ai-ml/dataset-strategy">Dataset Strategy</Link> | <Link to="/05-ai-ml/feature-engineering">Feature Engineering</Link> | <Link to="/05-ai-ml/model-training">Model Training</Link></em></p>
  </article>
</div>

    </main>
  );
}