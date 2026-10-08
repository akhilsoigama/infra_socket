import { Link } from 'react-router-dom';

export default function Page08TestingHardwareTesting() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Testing</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Hardware Testing</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Hardware Testing</h1>
    <h2 id="tests">Tests</h2>
    <h3 id="hw-01-sensor-connectivity">HW-01: Sensor Connectivity</h3>
    <p><strong>Objective:</strong> Verify the sensor communicates with the DAQ system.
      <strong>Procedure:</strong> Power on system; read sensor output; verify valid readings.
      <strong>Pass criteria:</strong> Non-zero, non-saturated readings received.
    </p>
    <h3 id="hw-02-pressure-response">HW-02: Pressure Response</h3>
    <p><strong>Objective:</strong> Verify the sensor responds to applied pressure.
      <strong>Procedure:</strong> Apply a known pressure step (e.g., gently press on a sealed tube);
      observe ADC output change.
      <strong>Pass criteria:</strong> ADC output changes proportionally to applied pressure.
    </p>
    <h3 id="hw-03-adc-functionality">HW-03: ADC Functionality</h3>
    <p><strong>Objective:</strong> Verify the ADC digitizes the analog signal correctly.
      <strong>Procedure:</strong> Apply a known DC voltage to the ADC input; verify the digital
      reading matches expectations.
      <strong>Pass criteria:</strong> ADC reading within expected range for applied voltage.
    </p>
    <h3 id="hw-04-temperature-sensor">HW-04: Temperature Sensor</h3>
    <p><strong>Objective:</strong> Verify temperature sensor provides reasonable readings.
      <strong>Procedure:</strong> Read temperature sensor; compare with a reference thermometer.
      <strong>Pass criteria:</strong> Temperature reading within ±2°C of reference.
    </p>
    <h3 id="hw-05-power-supply-stability">HW-05: Power Supply Stability</h3>
    <p><strong>Objective:</strong> Verify power supply voltages are stable and within specifications.
      <strong>Procedure:</strong> Measure voltage at each regulated output with a multimeter over 10+
      minutes.
      <strong>Pass criteria:</strong> Voltage within ±5% of nominal; no oscillation visible on
      oscilloscope.
    </p>
    <h3 id="hw-06-reference-chamber-seal">HW-06: Reference Chamber Seal</h3>
    <p><strong>Objective:</strong> Verify the reference chamber is airtight (except for the capillary).
      <strong>Procedure:</strong> Seal the capillary; apply a small pressure step; observe sensor
      output over 5 minutes.
      <strong>Pass criteria:</strong> Sensor output holds steady (does not return to zero) for at
      least 5 minutes with the capillary sealed.
    </p>
    <h2 id="results-template">Results Template</h2>
    <table>
      <thead>
        <tr>
          <th>Test ID</th>
          <th>Date</th>
          <th>Result</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>HW-01</td>
          <td>___</td>
          <td><em>Pass/Fail</em></td>
          <td />
        </tr>
        <tr>
          <td>HW-02</td>
          <td>___</td>
          <td><em>Pass/Fail</em></td>
          <td />
        </tr>
        <tr>
          <td>HW-03</td>
          <td>___</td>
          <td><em>Pass/Fail</em></td>
          <td />
        </tr>
        <tr>
          <td>HW-04</td>
          <td>___</td>
          <td><em>Pass/Fail</em></td>
          <td />
        </tr>
        <tr>
          <td>HW-05</td>
          <td>___</td>
          <td><em>Pass/Fail</em></td>
          <td />
        </tr>
        <tr>
          <td>HW-06</td>
          <td>___</td>
          <td><em>Pass/Fail</em></td>
          <td />
        </tr>
      </tbody>
    </table>
    <hr />
    <p><em>See also: <Link to="/08-testing/testing-strategy">Testing Strategy</Link> | <Link to="/08-testing/sensor-testing">Sensor Testing</Link></em></p>
  </article>
</div>

    </main>
  );
}