import { Link } from 'react-router-dom';

export default function Page03HardwareTemperatureSensing() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Hardware</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Temperature Sensing</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Temperature Sensing</h1>
    <h2 id="purpose">Purpose</h2>
    <p>Temperature monitoring serves two functions in the InfraSocket system:</p>
    <ol>
      <li><strong>Data quality:</strong> Temperature is logged alongside pressure data to flag periods
        where temperature-related drift may affect measurements</li>
      <li><strong>Compensation:</strong> Temperature data can be used to correct for known thermal
        effects on the sensor, reference chamber, and electronics</li>
    </ol>
    <h2 id="why-temperature-matters-for-infrasound-sensing">Why Temperature Matters for Infrasound
      Sensing</h2>
    <h3 id="reference-chamber-effect">Reference Chamber Effect</h3>
    <p>The gas inside the sealed reference chamber obeys the ideal gas law (PV = nRT). If temperature
      changes while the volume is constant, pressure inside the chamber changes:</p>
    <pre><code>ΔP_ref ≈ P_atm × (ΔT / T){"\n"}{"\n"}For P_atm ≈ 101,325 Pa and ΔT = 1°C (1 K) at T = 293 K:{"\n"}ΔP_ref ≈ 101,325 × (1/293) ≈ 346 Pa{"\n"}</code></pre>
    <p>This 346 Pa change from just 1°C is enormous. Indicative/reference infrasound pressure amplitudes
      may span approximately 0.01–10 Pa, depending strongly on the source, propagation conditions, and
      distance. Actual sensitivity/noise-floor performance remains TBD and requires calibration and
      validation. However, most of this change is very slow (thermal time constants are long), so the
      capillary leak should allow equalization. Rapid temperature changes, or thermally isolated
      chambers, can still cause problems.</p>
    <h3 id="sensor-drift">Sensor Drift</h3>
    <p>Pressure sensor offset and sensitivity change with temperature. This is typically specified in
      the sensor datasheet as offset temperature coefficient (µV/°C) and sensitivity temperature
      coefficient (%/°C).</p>
    <h3 id="electronics-drift">Electronics Drift</h3>
    <p>Amplifier offset, gain, and filter characteristics are all temperature-dependent.</p>
    <h2 id="sensor-options">Sensor Options</h2>
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Accuracy</th>
          <th>Interface</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Digital temperature sensor (e.g., I²C-based)</td>
          <td>Typically ±0.5°C or better</td>
          <td>I²C</td>
          <td>Easy to interface, minimal external components</td>
        </tr>
        <tr>
          <td>Thermistor (NTC)</td>
          <td>Depends on characterization</td>
          <td>Analog (via ADC)</td>
          <td>Low cost, requires linearization</td>
        </tr>
        <tr>
          <td>RTD (Resistance Temperature Detector)</td>
          <td>±0.1°C or better</td>
          <td>Analog (via conditioning)</td>
          <td>Higher accuracy, more complex circuit</td>
        </tr>
        <tr>
          <td>Thermocouple</td>
          <td>±1°C or better</td>
          <td>Analog (via amplifier)</td>
          <td>Wide range, requires reference junction</td>
        </tr>
      </tbody>
    </table>
    <p><strong>Prototype recommendation:</strong> A digital I²C temperature sensor is the simplest
      option — it can share the I²C bus with other digital peripherals and requires no additional
      analog circuitry.</p>
    <h2 id="placement">Placement</h2>
    <table>
      <thead>
        <tr>
          <th>Location</th>
          <th>What It Measures</th>
          <th>Purpose</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Inside the enclosure, near the sensor</td>
          <td>Electronics/sensor temperature</td>
          <td>Detect thermal drift affecting the sensor</td>
        </tr>
        <tr>
          <td>Inside/on the reference chamber</td>
          <td>Reference gas temperature</td>
          <td>Assess thermal pressure effects in the chamber</td>
        </tr>
        <tr>
          <td>Outside the enclosure</td>
          <td>Ambient air temperature</td>
          <td>Environmental context for data analysis</td>
        </tr>
      </tbody>
    </table>
    <p><code>Assumption</code>: At least one temperature sensor near the pressure sensor and/or
      reference chamber is recommended for the prototype. Additional sensors are optional.</p>
    <h2 id="data-integration">Data Integration</h2>
    <p>Temperature data is sampled at a lower rate than pressure data (e.g., once per second or once per
      signal window) and stored alongside pressure measurements:</p>
    <pre><code>{"{"}{"\n"}{"  "}"timestamp": "2025-03-15T10:30:00.000Z",{"\n"}{"  "}"pressure_adc": 32768,{"\n"}{"  "}"temperature_C": 22.5,{"\n"}{"  "}"quality_flag": "OK"{"\n"}{"}"}{"\n"}</code></pre>
    <h2 id="temperature-compensation-future-scope-">Temperature Compensation (<code>Future Scope</code>)
    </h2>
    <p>Active temperature compensation involves applying a correction to the pressure measurement based
      on the measured temperature:</p>
    <pre><code>P_corrected = P_measured − f(T){"\n"}</code></pre>
    <p>Where f(T) is determined during calibration by characterizing the sensor's temperature response.
    </p>
    <blockquote>
      <p><code>Assumption</code>: For the MVP prototype, temperature data is logged for reference but
        active compensation is not implemented unless calibration data supports it.</p>
    </blockquote>
    <hr />
    <p><em>See also: <Link to="/03-hardware/reference-chamber">Reference Chamber</Link> | <Link to="/03-hardware/calibration">Calibration</Link> | <Link to="/03-hardware/hardware-overview">Hardware
          Overview</Link></em></p>
  </article>
</div>

    </main>
  );
}