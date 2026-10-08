import { Link } from 'react-router-dom';

export default function Page08TestingSensorTesting() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Testing</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Sensor Testing</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Sensor Testing</h1>
    <h2 id="tests">Tests</h2>
    <h3 id="sen-01-static-sensitivity">SEN-01: Static Sensitivity</h3>
    <p><strong>Objective:</strong> Measure sensor output change per unit of pressure.
      <strong>Procedure:</strong> Apply known pressure steps; record ADC output at each level.
      <strong>Pass criteria:</strong> Linear relationship between pressure and output.
    </p>
    <h3 id="sen-02-noise-floor">SEN-02: Noise Floor</h3>
    <p><strong>Objective:</strong> Characterize the minimum detectable signal.
      <strong>Procedure:</strong> Seal sensor in quiet environment; record for 30+ minutes; compute
      RMS noise and PSD.
      <strong>Pass criteria:</strong> Noise floor is measurable and documented.
    </p>
    <h3 id="sen-03-linearity">SEN-03: Linearity</h3>
    <p><strong>Objective:</strong> Verify output is proportional to input across the operating range.
      <strong>Procedure:</strong> Apply multiple pressure levels; plot output vs. input.
      <strong>Pass criteria:</strong> R² &gt; 0.99 for linear fit.
    </p>
    <h3 id="sen-04-long-term-drift">SEN-04: Long-Term Drift</h3>
    <p><strong>Objective:</strong> Assess sensor output stability over time.
      <strong>Procedure:</strong> Record sensor output over 24+ hours in a stable environment.
      <strong>Pass criteria:</strong> Drift rate is documented (no specific pass/fail threshold for
      MVP).
    </p>
    <h2 id="results-template">Results Template</h2>
    <table>
      <thead>
        <tr>
          <th>Test ID</th>
          <th>Date</th>
          <th>Result</th>
          <th>Measured Value</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>SEN-01</td>
          <td>___</td>
          <td>___</td>
          <td>Sensitivity: ___ counts/Pa</td>
          <td />
        </tr>
        <tr>
          <td>SEN-02</td>
          <td>___</td>
          <td>___</td>
          <td>RMS noise: ___ Pa</td>
          <td />
        </tr>
        <tr>
          <td>SEN-03</td>
          <td>___</td>
          <td>___</td>
          <td>R²: ___</td>
          <td />
        </tr>
        <tr>
          <td>SEN-04</td>
          <td>___</td>
          <td>___</td>
          <td>Drift: ___ Pa/hour</td>
          <td />
        </tr>
      </tbody>
    </table>
    <hr />
    <p><em>See also: <Link to="/08-testing/hardware-testing">Hardware Testing</Link> | <Link to="/09-calibration-validation/calibration-plan">Calibration Plan</Link></em></p>
  </article>
</div>

    </main>
  );
}