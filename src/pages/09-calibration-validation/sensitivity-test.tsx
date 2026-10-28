import { Link } from 'react-router-dom';

export default function Page09CalibrationValidationSensitivityTest() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Calibration &amp; Validation</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Sensitivity Test</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Sensitivity Test</h1>
    <h2 id="objective">Objective</h2>
    <p>Quantify the system's sensitivity — the output change per unit of pressure input — and determine
      if it is sufficient for the target application.</p>
    <h2 id="procedure">Procedure</h2>
    <p>Same as <Link to="/09-calibration-validation/pressure-step-test">Pressure Step Test</Link>, with focus on computing the
      sensitivity value.</p>
    <h2 id="sensitivity-calculation">Sensitivity Calculation</h2>
    <pre><code>Sensitivity = ΔADC_output / ΔPressure_input{"  "}(counts/Pa){"\n"}{"\n"}Or in voltage terms:{"\n"}Sensitivity = ΔVoltage_output / ΔPressure_input{"  "}(V/Pa){"\n"}</code></pre>
    <h2 id="results-template">Results Template</h2>
    <table>
      <thead>
        <tr>
          <th>Parameter</th>
          <th>Value</th>
          <th>Units</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Measured sensitivity</td>
          <td><em>To be measured</em></td>
          <td>counts/Pa</td>
        </tr>
        <tr>
          <td>Minimum detectable pressure (from noise floor)</td>
          <td><em>Calculate: noise floor / sensitivity</em></td>
          <td>Pa</td>
        </tr>
        <tr>
          <td>Dynamic range</td>
          <td><em>Calculate: max range / min detectable</em></td>
          <td>dB</td>
        </tr>
      </tbody>
    </table>
    <h2 id="assessment">Assessment</h2>
    <p>Compare the minimum detectable pressure against expected infrasound signal levels to determine if
      the prototype sensitivity is adequate:</p>
    <blockquote>
      <p><strong>Important:</strong> The following values are indicative/reference ranges from
        published literature and are NOT InfraSocket performance specifications. Actual amplitudes
        depend strongly on source type, distance, atmospheric propagation and measurement
        conditions. These values are provided as context for evaluating whether the prototype's
        sensitivity may be adequate.</p>
    </blockquote>
    <table>
      <thead>
        <tr>
          <th>Signal Type</th>
          <th>Expected Amplitude (Reference)</th>
          <th>Detectable?</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Strong nearby event (&lt; 10 km)</td>
          <td>1–100 Pa</td>
          <td><code>To be validated</code></td>
          <td>Reference / To Be Validated</td>
        </tr>
        <tr>
          <td>Moderate event (10–100 km)</td>
          <td>0.1–1 Pa</td>
          <td><code>To be validated</code></td>
          <td>Reference / To Be Validated</td>
        </tr>
        <tr>
          <td>Weak distant event (&gt; 100 km)</td>
          <td>0.001–0.1 Pa</td>
          <td><code>To be validated</code></td>
          <td>Reference / To Be Validated</td>
        </tr>
        <tr>
          <td>Ambient microbaroms</td>
          <td>0.01–0.1 Pa</td>
          <td><code>To be validated</code></td>
          <td>Reference / To Be Validated</td>
        </tr>
      </tbody>
    </table>
    <hr />
    <p><em>See also: <Link to="/09-calibration-validation/calibration-plan">Calibration Plan</Link> | <Link to="/09-calibration-validation/pressure-step-test">Pressure Step Test</Link></em></p>
  </article>
</div>

    </main>
  );
}