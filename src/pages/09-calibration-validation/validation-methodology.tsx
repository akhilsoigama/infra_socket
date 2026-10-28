import { Link } from 'react-router-dom';

export default function Page09CalibrationValidationValidationMethodology() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Calibration &amp; Validation</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Validation Methodology</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Validation Methodology</h1>
    <h2 id="approach">Approach</h2>
    <p>Validation screens for that the system meets its stated objectives and behaves as documented. It
      is broader than individual calibration tests — it assesses the system as a whole.</p>
    <h2 id="validation-levels">Validation Levels</h2>
    <h3 id="level-1-component-validation">Level 1: Component Validation</h3>
    <p>Each hardware and software component is tested individually (see <Link to="/08-testing/testing-strategy">Testing Strategy</Link>).</p>
    <h3 id="level-2-integration-validation">Level 2: Integration Validation</h3>
    <p>The complete pipeline is tested end-to-end (see <Link to="/08-testing/integration-testing">Integration Testing</Link>).</p>
    <h3 id="level-3-environmental-validation">Level 3: Environmental Validation</h3>
    <p>The system is tested under realistic conditions (see <Link to="/08-testing/environmental-testing">Environmental Testing</Link>).</p>
    <h3 id="level-4-reference-comparison-future-scope-">Level 4: Reference Comparison
      (<code>Future Scope</code>)</h3>
    <p>The prototype's output is compared against a calibrated reference instrument deployed at the same
      location.</p>
    <h2 id="validation-matrix">Validation Matrix</h2>
    <table>
      <thead>
        <tr>
          <th>Parameter</th>
          <th>Target/Requirement</th>
          <th>Measurement Method</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Frequency response</td>
          <td>0.01–20 Hz (TARGET - Pending experimental validation) target</td>
          <td>Controlled frequency/pressure test</td>
          <td>To validate</td>
        </tr>
        <tr>
          <td>Sampling</td>
          <td>Suitable for 20 Hz upper band</td>
          <td>ADC test</td>
          <td>To validate</td>
        </tr>
        <tr>
          <td>Noise floor</td>
          <td>Experimentally measured</td>
          <td>Quiet-environment recording</td>
          <td>Pending</td>
        </tr>
        <tr>
          <td>Sensitivity</td>
          <td>V/Pa or Pa/count</td>
          <td>Reference pressure test</td>
          <td>Pending</td>
        </tr>
        <tr>
          <td>Wind-noise attenuation</td>
          <td>Experimentally measured</td>
          <td>Controlled wind comparison</td>
          <td>Pending</td>
        </tr>
        <tr>
          <td>Temperature drift</td>
          <td>Measured over temperature range</td>
          <td>Environmental test</td>
          <td>Pending</td>
        </tr>
        <tr>
          <td>AI precision</td>
          <td>Experimentally measured</td>
          <td>Held-out validation set</td>
          <td>Pending</td>
        </tr>
        <tr>
          <td>False-positive rate</td>
          <td>Experimentally measured</td>
          <td>Normal environmental dataset</td>
          <td>Pending</td>
        </tr>
        <tr>
          <td>Stability</td>
          <td>Long-duration test</td>
          <td>24h/72h recording</td>
          <td>Pending</td>
        </tr>
      </tbody>
    </table>
    <h2 id="limitations-of-validation">Limitations of Validation</h2>
    <ul>
      <li>Without a reference instrument, absolute accuracy cannot be verified</li>
      <li>Environmental validation depends on weather conditions during the test period</li>
      <li>AI validation depends on the quality and representativeness of the baseline data</li>
      <li>A single prototype at a single location provides limited statistical evidence</li>
    </ul>
    <hr />
    <p><em>See also: <Link to="/09-calibration-validation/calibration-plan">Calibration Plan</Link> | <Link to="/08-testing/testing-strategy">Testing Strategy</Link></em></p>
  </article>
</div>

    </main>
  );
}