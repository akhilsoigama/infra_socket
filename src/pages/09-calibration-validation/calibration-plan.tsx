import { Link } from 'react-router-dom';

export default function Page09CalibrationValidationCalibrationPlan() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Calibration &amp; Validation</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Calibration Plan</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Calibration Plan</h1>
    <h2 id="purpose">Purpose</h2>
    <p>Calibration establishes the quantitative relationship between the sensor's digital output and the
      physical pressure being measured. Without calibration, the system produces relative measurements
      only.</p>
    <h2 id="calibration-tests">Calibration Tests</h2>
    <table>
      <thead>
        <tr>
          <th>Test</th>
          <th>Document</th>
          <th>Purpose</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Pressure step test</td>
          <td><Link to="/09-calibration-validation/pressure-step-test">pressure-step-test.md</Link></td>
          <td>Determine sensitivity</td>
        </tr>
        <tr>
          <td>Frequency response test</td>
          <td><Link to="/09-calibration-validation/frequency-response-test">frequency-response-test.md</Link></td>
          <td>Characterize frequency behaviour</td>
        </tr>
        <tr>
          <td>Noise floor test</td>
          <td><Link to="/09-calibration-validation/noise-floor-test">noise-floor-test.md</Link></td>
          <td>Determine minimum detectable signal</td>
        </tr>
        <tr>
          <td>Sensitivity test</td>
          <td><Link to="/09-calibration-validation/sensitivity-test">sensitivity-test.md</Link></td>
          <td>Quantify output per unit pressure</td>
        </tr>
        <tr>
          <td>Validation methodology</td>
          <td><Link to="/09-calibration-validation/validation-methodology">validation-methodology.md</Link></td>
          <td>Overall validation approach</td>
        </tr>
      </tbody>
    </table>
    <h2 id="calibration-equipment-needed">Calibration Equipment Needed</h2>
    <table>
      <thead>
        <tr>
          <th>Equipment</th>
          <th>Purpose</th>
          <th>Availability</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Precision pressure source (water manometer or calibrator)</td>
          <td>Apply known pressure</td>
          <td>Can be built from water column</td>
        </tr>
        <tr>
          <td>Reference thermometer</td>
          <td>Temperature measurement</td>
          <td>Widely available</td>
        </tr>
        <tr>
          <td>Multimeter</td>
          <td>Voltage verification</td>
          <td>Standard lab equipment</td>
        </tr>
        <tr>
          <td>Oscilloscope (optional)</td>
          <td>Signal quality observation</td>
          <td>Helpful but not essential</td>
        </tr>
        <tr>
          <td>Reference barometer (optional)</td>
          <td>Absolute pressure reference</td>
          <td>For advanced calibration</td>
        </tr>
      </tbody>
    </table>
    <h2 id="calibration-procedure-overview">Calibration Procedure Overview</h2>
    <ol>
      <li>Set up the sensor in a controlled environment</li>
      <li>Record baseline (zero-pressure) output for 10+ minutes</li>
      <li>Apply known pressure steps and record output at each level</li>
      <li>Apply known frequency sinusoids and record output amplitude</li>
      <li>Record noise floor with sensor sealed</li>
      <li>Measure temperature during all tests</li>
      <li>Document all results in the calibration records</li>
    </ol>
    <h2 id="calibration-records">Calibration Records</h2>
    <p>All calibration data should be preserved with:</p>
    <ul>
      <li>Date, time, and operator</li>
      <li>Environmental conditions</li>
      <li>Equipment used</li>
      <li>Measurement results</li>
      <li>Calculated parameters (sensitivity, noise floor, etc.)</li>
    </ul>
    <hr />
    <p><em>See also: <Link to="/03-hardware/calibration">Hardware Calibration</Link> | <Link to="/09-calibration-validation/validation-methodology">Validation Methodology</Link></em></p>
  </article>
</div>

    </main>
  );
}