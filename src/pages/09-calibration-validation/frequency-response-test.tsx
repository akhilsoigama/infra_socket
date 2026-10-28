import { Link } from 'react-router-dom';

export default function Page09CalibrationValidationFrequencyResponseTest() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Calibration &amp; Validation</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Frequency Response Test</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Frequency Response Test</h1>
    <h2 id="objective">Objective</h2>
    <p>Characterize the system's response across the target frequency range (0.01–20 Hz (TARGET - Pending experimental validation)).</p>
    <h2 id="procedure">Procedure</h2>
    <ol>
      <li>Apply sinusoidal pressure signals at known frequencies</li>
      <li>Record output amplitude at each frequency</li>
      <li>Plot amplitude vs. frequency (Bode magnitude plot)</li>
    </ol>
    <h2 id="results-template">Results Template</h2>
    <table>
      <thead>
        <tr>
          <th>Frequency (Hz)</th>
          <th>Input Amplitude (Pa)</th>
          <th>Output Amplitude (counts)</th>
          <th>Relative Gain (dB)</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>0.01</td>
          <td><em>Known</em></td>
          <td><em>To be measured</em></td>
          <td><em>Calculate</em></td>
          <td />
        </tr>
        <tr>
          <td>0.02</td>
          <td><em>Known</em></td>
          <td><em>To be measured</em></td>
          <td><em>Calculate</em></td>
          <td />
        </tr>
        <tr>
          <td>0.05</td>
          <td><em>Known</em></td>
          <td><em>To be measured</em></td>
          <td><em>Calculate</em></td>
          <td />
        </tr>
        <tr>
          <td>0.1</td>
          <td><em>Known</em></td>
          <td><em>To be measured</em></td>
          <td><em>Calculate</em></td>
          <td />
        </tr>
        <tr>
          <td>0.5</td>
          <td><em>Known</em></td>
          <td><em>To be measured</em></td>
          <td><em>Calculate</em></td>
          <td />
        </tr>
        <tr>
          <td>1.0</td>
          <td><em>Known</em></td>
          <td><em>To be measured</em></td>
          <td><em>Calculate</em></td>
          <td />
        </tr>
        <tr>
          <td>5.0</td>
          <td><em>Known</em></td>
          <td><em>To be measured</em></td>
          <td><em>Calculate</em></td>
          <td />
        </tr>
        <tr>
          <td>10.0</td>
          <td><em>Known</em></td>
          <td><em>To be measured</em></td>
          <td><em>Calculate</em></td>
          <td />
        </tr>
        <tr>
          <td>20.0</td>
          <td><em>Known</em></td>
          <td><em>To be measured</em></td>
          <td><em>Calculate</em></td>
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
          <td>−3 dB low cutoff</td>
          <td><em>From plot</em></td>
          <td>Hz</td>
        </tr>
        <tr>
          <td>−3 dB high cutoff</td>
          <td><em>From plot</em></td>
          <td>Hz</td>
        </tr>
        <tr>
          <td>Flat-band gain</td>
          <td><em>From plot</em></td>
          <td>counts/Pa</td>
        </tr>
        <tr>
          <td>Passband ripple</td>
          <td><em>From plot</em></td>
          <td>dB</td>
        </tr>
      </tbody>
    </table>
    <hr />
    <p><em>See also: <Link to="/09-calibration-validation/calibration-plan">Calibration Plan</Link> | <Link to="/09-calibration-validation/noise-floor-test">Noise Floor Test</Link></em></p>
  </article>
</div>

    </main>
  );
}