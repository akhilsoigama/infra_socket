import { Link } from 'react-router-dom';

export default function Page09CalibrationValidationPressureStepTest() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Calibration &amp; Validation</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Pressure Step Test</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Pressure Step Test</h1>
    <h2 id="objective">Objective</h2>
    <p>Determine the system's sensitivity (output change per unit of pressure input).</p>
    <h2 id="setup">Setup</h2>
    <ol>
      <li>Connect sensor to a known pressure source (e.g., water manometer: 1 cm H₂O ≈ 98.1 Pa)</li>
      <li>Record ADC output at each pressure level</li>
      <li>Include positive and negative pressure steps if possible</li>
    </ol>
    <h2 id="procedure">Procedure</h2>
    <ol>
      <li>Record zero-pressure baseline for 5 minutes</li>
      <li>Apply pressure step and hold for 60 seconds</li>
      <li>Record ADC reading during steady state</li>
      <li>Return to zero; record for 60 seconds</li>
      <li>Repeat for multiple pressure levels</li>
    </ol>
    <h2 id="results-template">Results Template</h2>
    <table>
      <thead>
        <tr>
          <th>Step</th>
          <th>Applied Pressure (Pa)</th>
          <th>ADC Reading (mean)</th>
          <th>ADC Reading (std)</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Baseline</td>
          <td>0.0</td>
          <td><em>To be measured</em></td>
          <td><em>To be measured</em></td>
          <td />
        </tr>
        <tr>
          <td>Step 1</td>
          <td><em>Known</em></td>
          <td><em>To be measured</em></td>
          <td><em>To be measured</em></td>
          <td />
        </tr>
        <tr>
          <td>Step 2</td>
          <td><em>Known</em></td>
          <td><em>To be measured</em></td>
          <td><em>To be measured</em></td>
          <td />
        </tr>
        <tr>
          <td>Step 3</td>
          <td><em>Known</em></td>
          <td><em>To be measured</em></td>
          <td><em>To be measured</em></td>
          <td />
        </tr>
        <tr>
          <td>Step 4</td>
          <td><em>Known</em></td>
          <td><em>To be measured</em></td>
          <td><em>To be measured</em></td>
          <td />
        </tr>
      </tbody>
    </table>
    <h2 id="derived-parameters">Derived Parameters</h2>
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
          <td>Sensitivity</td>
          <td><em>Calculate: ΔADC / ΔPa</em></td>
          <td>counts/Pa</td>
        </tr>
        <tr>
          <td>Linearity (R²)</td>
          <td><em>Calculate from fit</em></td>
          <td>dimensionless</td>
        </tr>
        <tr>
          <td>Offset</td>
          <td><em>Baseline ADC value</em></td>
          <td>counts</td>
        </tr>
      </tbody>
    </table>
    <hr />
    <p><em>See also: <Link to="/09-calibration-validation/calibration-plan">Calibration Plan</Link> | <Link to="/09-calibration-validation/sensitivity-test">Sensitivity Test</Link></em></p>
  </article>
</div>

    </main>
  );
}