import { Link } from 'react-router-dom';

export default function Page03HardwareCalibration() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Hardware</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Hardware Calibration</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Hardware Calibration</h1>
    <h2 id="why-calibration-is-required">Why Calibration Is Required</h2>
    <p>Without calibration, the system produces raw ADC values that have no quantitative meaning.
      Calibration establishes the relationship between the digital output and the actual physical
      quantity (pressure in Pascals). It also characterizes the system's performance (sensitivity,
      noise floor, frequency response) and identifies any systematic errors.</p>
    <h2 id="calibration-procedures">Calibration Procedures</h2>
    <h3 id="1-static-pressure-step-test">1. Static Pressure Step Test</h3>
    <p><strong>Purpose:</strong> Determine the sensor's sensitivity (output change per unit of pressure
      change).</p>
    <p><strong>Method:</strong></p>
    <ol>
      <li>Apply a known, static pressure difference to the sensor using a calibrated pressure source
        (e.g., a water manometer or precision pressure calibrator)</li>
      <li>Record the ADC output at multiple pressure levels</li>
      <li>Plot ADC output vs. applied pressure</li>
      <li>The slope of the linear fit is the system sensitivity</li>
    </ol>
    <p><strong>Record Template:</strong></p>
    <table>
      <thead>
        <tr>
          <th>Applied Pressure (Pa)</th>
          <th>ADC Reading</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>0.0</td>
          <td><em>To be measured</em></td>
          <td />
        </tr>
        <tr>
          <td>0.5</td>
          <td><em>To be measured</em></td>
          <td />
        </tr>
        <tr>
          <td>1.0</td>
          <td><em>To be measured</em></td>
          <td />
        </tr>
        <tr>
          <td>2.0</td>
          <td><em>To be measured</em></td>
          <td />
        </tr>
        <tr>
          <td>5.0</td>
          <td><em>To be measured</em></td>
          <td />
        </tr>
        <tr>
          <td>10.0</td>
          <td><em>To be measured</em></td>
          <td />
        </tr>
      </tbody>
    </table>
    <p><strong>Derived:</strong> Sensitivity = ΔADC / ΔPressure (counts/Pa or V/Pa)</p>
    <h3 id="2-frequency-response-test">2. Frequency Response Test</h3>
    <p><strong>Purpose:</strong> Measure how the system's output amplitude varies across the target
      frequency range.</p>
    <p><strong>Method:</strong></p>
    <ol>
      <li>Apply sinusoidal pressure signals at known frequencies across the 0.01–20 Hz (TARGET - Pending experimental validation) range</li>
      <li>Record the output amplitude at each frequency</li>
      <li>Plot amplitude vs. frequency (Bode plot)</li>
      <li>Identify the −3 dB points (corner frequencies)</li>
    </ol>
    <p><strong>Record Template:</strong></p>
    <table>
      <thead>
        <tr>
          <th>Frequency (Hz)</th>
          <th>Input Amplitude (Pa)</th>
          <th>Output Amplitude (counts)</th>
          <th>Gain (relative)</th>
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
    <h3 id="3-noise-floor-test">3. Noise Floor Test</h3>
    <p><strong>Purpose:</strong> Determine the minimum detectable signal — the noise level when no
      external pressure signal is applied.</p>
    <p><strong>Method:</strong></p>
    <ol>
      <li>Seal the sensor in a quiet, thermally stable environment</li>
      <li>Record data for an extended period (e.g., 30–60 minutes)</li>
      <li>Compute the RMS noise level and the power spectral density</li>
      <li>The noise floor is the lowest signal level that can be distinguished from noise</li>
    </ol>
    <p><strong>Record Template:</strong></p>
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
          <td>RMS noise level</td>
          <td><em>To be measured</em></td>
          <td>Pa or counts</td>
          <td />
        </tr>
        <tr>
          <td>Noise spectral density (at 1 Hz)</td>
          <td><em>To be measured</em></td>
          <td>Pa/√Hz</td>
          <td />
        </tr>
        <tr>
          <td>Noise spectral density (at 0.1 Hz)</td>
          <td><em>To be measured</em></td>
          <td>Pa/√Hz</td>
          <td />
        </tr>
        <tr>
          <td>Recording duration</td>
          <td>___</td>
          <td>minutes</td>
          <td />
        </tr>
        <tr>
          <td>Temperature during test</td>
          <td>___</td>
          <td>°C</td>
          <td />
        </tr>
      </tbody>
    </table>
    <h3 id="4-temperature-response-test">4. Temperature Response Test</h3>
    <p><strong>Purpose:</strong> Characterize how sensor output changes with temperature when no
      pressure signal is applied.</p>
    <p><strong>Method:</strong></p>
    <ol>
      <li>Place the sensor in a temperature-controlled or slowly varying environment</li>
      <li>Record pressure output and temperature simultaneously over several hours</li>
      <li>Compute the temperature coefficient (change in output per °C)</li>
    </ol>
    <p><strong>Record Template:</strong></p>
    <table>
      <thead>
        <tr>
          <th>Temperature (°C)</th>
          <th>ADC Reading (zero pressure)</th>
          <th>Offset Change</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>15</td>
          <td><em>To be measured</em></td>
          <td><em>baseline</em></td>
          <td />
        </tr>
        <tr>
          <td>20</td>
          <td><em>To be measured</em></td>
          <td><em>calculate</em></td>
          <td />
        </tr>
        <tr>
          <td>25</td>
          <td><em>To be measured</em></td>
          <td><em>calculate</em></td>
          <td />
        </tr>
        <tr>
          <td>30</td>
          <td><em>To be measured</em></td>
          <td><em>calculate</em></td>
          <td />
        </tr>
        <tr>
          <td>35</td>
          <td><em>To be measured</em></td>
          <td><em>calculate</em></td>
          <td />
        </tr>
      </tbody>
    </table>
    <h3 id="5-reference-comparison-future-scope-">5. Reference Comparison (<code>Future Scope</code>)
    </h3>
    <p><strong>Purpose:</strong> Compare the prototype's output against a calibrated reference
      instrument.</p>
    <p><strong>Method:</strong> Deploy the prototype alongside a calibrated microbarometer or barometric
      pressure sensor and compare outputs over an extended period.</p>
    <blockquote>
      <p>This requires access to a reference instrument, which may not be available for the MVP
        prototype.</p>
    </blockquote>
    <h2 id="calibration-schedule">Calibration Schedule</h2>
    <table>
      <thead>
        <tr>
          <th>Calibration</th>
          <th>When</th>
          <th>Frequency</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Static pressure step</td>
          <td>Before first deployment</td>
          <td>Once, plus after any hardware change</td>
        </tr>
        <tr>
          <td>Frequency response</td>
          <td>Before first deployment</td>
          <td>Once, plus after any hardware change</td>
        </tr>
        <tr>
          <td>Noise floor</td>
          <td>Before first deployment, and periodically</td>
          <td>Monthly or after environmental changes</td>
        </tr>
        <tr>
          <td>Temperature response</td>
          <td>Once during initial characterization</td>
          <td>Once, unless hardware changes</td>
        </tr>
      </tbody>
    </table>
    <h2 id="calibration-records">Calibration Records</h2>
    <p>All calibration results should be documented with:</p>
    <ul>
      <li>Date and time</li>
      <li>Operator name</li>
      <li>Environmental conditions (temperature, humidity)</li>
      <li>Equipment used (reference instruments, test equipment)</li>
      <li>Results (tables, plots)</li>
      <li>Pass/fail against acceptance criteria (if defined)</li>
    </ul>
    <hr />
    <p><em>See also: <Link to="/09-calibration-validation/calibration-plan">Calibration Plan</Link> |
        <Link to="/03-hardware/pressure-sensing">Pressure Sensing</Link> | <Link to="/03-hardware/hardware-overview">Hardware
          Overview</Link></em></p>
  </article>
</div>

    </main>
  );
}