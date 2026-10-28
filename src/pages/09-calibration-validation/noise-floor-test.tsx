import { Link } from 'react-router-dom';

export default function Page09CalibrationValidationNoiseFloorTest() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Calibration &amp; Validation</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Noise Floor Test</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Noise Floor Test</h1>
    <h2 id="objective">Objective</h2>
    <p>Determine the minimum detectable signal level by characterizing the system's self-noise.</p>
    <h2 id="procedure">Procedure</h2>
    <ol>
      <li>Seal the sensor in a quiet, thermally stable environment</li>
      <li>Record data for 30–60 minutes</li>
      <li>Compute RMS noise and power spectral density (PSD)</li>
    </ol>
    <h2 id="results-template">Results Template</h2>
    <table>
      <thead>
        <tr>
          <th>Parameter</th>
          <th>Value</th>
          <th>Units</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Recording duration</td>
          <td>___</td>
          <td>minutes</td>
          <td />
        </tr>
        <tr>
          <td>Temperature (mean)</td>
          <td>___</td>
          <td>°C</td>
          <td />
        </tr>
        <tr>
          <td>Temperature (range)</td>
          <td>___</td>
          <td>°C</td>
          <td />
        </tr>
        <tr>
          <td>RMS noise (broadband)</td>
          <td><em>To be measured</em></td>
          <td>counts / Pa</td>
          <td />
        </tr>
        <tr>
          <td>Noise PSD at 0.01 Hz</td>
          <td><em>To be measured</em></td>
          <td>Pa²/Hz</td>
          <td />
        </tr>
        <tr>
          <td>Noise PSD at 0.1 Hz</td>
          <td><em>To be measured</em></td>
          <td>Pa²/Hz</td>
          <td />
        </tr>
        <tr>
          <td>Noise PSD at 1.0 Hz</td>
          <td><em>To be measured</em></td>
          <td>Pa²/Hz</td>
          <td />
        </tr>
        <tr>
          <td>Noise PSD at 10 Hz</td>
          <td><em>To be measured</em></td>
          <td>Pa²/Hz</td>
          <td />
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