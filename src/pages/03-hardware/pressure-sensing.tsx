import { Link } from 'react-router-dom';

export default function Page03HardwarePressureSensing() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Hardware</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Pressure Sensing</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Pressure Sensing</h1>
    <h2 id="purpose">Purpose</h2>
    <p>The pressure sensor is the core transduction element of the system. It converts atmospheric
      pressure variations into a proportional electrical signal that can be amplified, filtered, and
      digitized.</p>
    <h2 id="working-principle">Working Principle</h2>
    <blockquote>
      <p><strong>Simple Explanation:</strong>
        A pressure sensor works like a very sensitive drumhead. When atmospheric pressure changes
        slightly, the drumhead (diaphragm) flexes inward or outward. This movement is detected and
        converted into an electrical voltage. The harder the air pushes, the more the drumhead
        bends, and the larger the voltage.</p>
    </blockquote>
    <blockquote>
      <p><strong>Technical Explanation:</strong>
        Infrasound pressure sensors typically use a thin diaphragm (membrane) that deflects in
        response to differential pressure across its surfaces. The deflection is sensed by one of
        several transduction mechanisms:</p>
      <ul>
        <li><strong>Piezoresistive:</strong> Strain gauges on the diaphragm change resistance as it
          deflects</li>
        <li><strong>Capacitive:</strong> The diaphragm forms one plate of a capacitor; deflection
          changes capacitance</li>
        <li><strong>Piezoelectric:</strong> The diaphragm material generates a charge proportional
          to strain (less suitable for very low frequencies due to charge leakage)</li>
      </ul>
    </blockquote>
    <p>For infrasound applications, <strong>piezoresistive</strong> and <strong>capacitive</strong>
      sensors are preferred because they can respond to quasi-static (very slow) pressure changes,
      unlike piezoelectric sensors which are better suited for higher frequencies.</p>
    <h2 id="inputs-and-outputs">Inputs and Outputs</h2>
    <table>
      <thead>
        <tr>
          <th>Parameter</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Input</strong></td>
          <td>Differential air pressure across the sensor diaphragm</td>
        </tr>
        <tr>
          <td><strong>Output</strong></td>
          <td>Electrical voltage proportional to pressure difference</td>
        </tr>
        <tr>
          <td><strong>Input range</strong></td>
          <td>Very small differential pressures (fractions of a Pascal to a few Pascals)</td>
        </tr>
        <tr>
          <td><strong>Output range</strong></td>
          <td>Depends on sensor; typically µV to mV per Pascal</td>
        </tr>
      </tbody>
    </table>
    <h2 id="key-requirements-for-infrasound-sensing">Key Requirements for Infrasound Sensing</h2>
    <table>
      <thead>
        <tr>
          <th>Requirement</th>
          <th>Explanation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Low-frequency response</td>
          <td>Target low-frequency response: approximately 0.01 Hz (100-second period)</td>
        </tr>
        <tr>
          <td>Differential measurement</td>
          <td>Needed to reject barometric drift when used with reference chamber</td>
        </tr>
        <tr>
          <td>Low noise</td>
          <td>Sensor self-noise must be below the expected signal level</td>
        </tr>
        <tr>
          <td>Linearity</td>
          <td>Output should be proportional to pressure over the operating range</td>
        </tr>
        <tr>
          <td>Low hysteresis</td>
          <td>Should return to the same output for the same pressure, regardless of history</td>
        </tr>
        <tr>
          <td>Temperature stability</td>
          <td>Sensitivity and offset should change minimally with temperature</td>
        </tr>
      </tbody>
    </table>
    <h2 id="sensor-types-considered">Sensor Types Considered</h2>
    <h3 id="mems-differential-pressure-sensors">MEMS Differential Pressure Sensors</h3>
    <p>Modern MEMS (Micro-Electro-Mechanical Systems) pressure sensors are compact, relatively
      inexpensive, and available in differential configurations. Many have digital or analog outputs.
    </p>
    <p><strong>Advantages:</strong></p>
    <ul>
      <li>Small size, low cost</li>
      <li>Available in differential configurations</li>
      <li>Digital interfaces (I²C, SPI) on some models</li>
      <li>Widely available from multiple manufacturers</li>
    </ul>
    <p><strong>Limitations:</strong></p>
    <ul>
      <li>Noise floor may be higher than research-grade sensors</li>
      <li>Long-term stability varies by model</li>
      <li>May require careful evaluation for sub-hertz performance</li>
    </ul>
    <h3 id="analog-differential-pressure-transducers">Analog Differential Pressure Transducers</h3>
    <p>Industrial differential pressure transducers offer higher performance but are larger and more
      expensive.</p>
    <p><strong>Advantages:</strong></p>
    <ul>
      <li>Often lower noise than MEMS</li>
      <li>Well-characterized specifications</li>
      <li>Robust construction</li>
    </ul>
    <p><strong>Limitations:</strong></p>
    <ul>
      <li>Higher cost</li>
      <li>Larger size</li>
      <li>May require more complex signal conditioning</li>
    </ul>
    <h3 id="research-grade-microbarometers">Research-Grade Microbarometers</h3>
    <p>Instruments like the CEA MB3 or similar are purpose-built for infrasound monitoring.</p>
    <p><strong>Advantages:</strong></p>
    <ul>
      <li>Optimized for infrasound frequencies</li>
      <li>Very low noise floor</li>
      <li>Well-documented performance</li>
    </ul>
    <p><strong>Limitations:</strong></p>
    <ul>
      <li>Significantly higher cost</li>
      <li>May be difficult to source for student projects</li>
      <li>Not necessary for a prototype demonstration</li>
    </ul>
    <h2 id="prototype-recommendation">Prototype Recommendation</h2>
    <p>For the MVP prototype, a <strong>MEMS differential pressure sensor</strong> is recommended as a
      <strong>prototype candidate</strong> because of:
    </p>
    <ol>
      <li><strong>Availability</strong> — widely stocked by electronics distributors</li>
      <li><strong>Cost</strong> — affordable for student/hackathon budgets</li>
      <li><strong>Interface</strong> — many offer digital (I²C/SPI) interfaces, simplifying the analog
        front end</li>
      <li><strong>Menu</strong> — extensive application notes and community support</li>
    </ol>
    <blockquote>
      <p><code>Assumption</code>: The specific sensor model will be selected based on available
        budget, required sensitivity, and noise floor specifications evaluated during component
        selection. Exact sensor specifications are not fabricated here.</p>
    </blockquote>
    <h2 id="sensor-selection-criteria">Sensor Selection Criteria</h2>
    <p>Evaluate candidate sensors based on the following criteria before final selection:</p>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Criterion</th>
          <th>Rationale</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Pressure measurement range</td>
          <td>Must accommodate expected differential pressures (fractions of Pa to a few Pa)</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Noise density / resolution</td>
          <td>Determines the minimum detectable signal</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Low-frequency response</td>
          <td>Target low-frequency response: approximately 0.01 Hz (100-second period) — To Be
            Validated</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Temperature drift</td>
          <td>Sensitivity and offset should change minimally with temperature</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Long-term stability</td>
          <td>Sensor performance should not degrade significantly over weeks/months</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Output interface</td>
          <td>Analog (voltage) or digital (I²C/SPI) — affects front-end design</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Supply voltage</td>
          <td>Must be compatible with the chosen edge hardware</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Availability</td>
          <td>Must be sourceable from standard electronics distributors</td>
        </tr>
        <tr>
          <td>9</td>
          <td>Cost</td>
          <td>Must fit within prototype budget constraints</td>
        </tr>
        <tr>
          <td>10</td>
          <td>Calibration capability</td>
          <td>Must be possible to characterize sensitivity and offset</td>
        </tr>
        <tr>
          <td>11</td>
          <td>Environmental suitability</td>
          <td>Must tolerate expected operating temperature and humidity range</td>
        </tr>
      </tbody>
    </table>
    <blockquote>
      <p>The final sensor will be selected after candidate comparison and bench testing. No specific
        commercial sensor is locked in until evaluation is complete.</p>
    </blockquote>
    <h2 id="design-considerations">Design Considerations</h2>
    <h3 id="overrange-protection">Overrange Protection</h3>
    <p>The sensor must tolerate full atmospheric pressure without damage, even though it measures only
      small differential pressures. Most differential sensors are rated for overpressure on both
      ports.</p>
    <h3 id="port-configuration">Port Configuration</h3>
    <ul>
      <li><strong>Positive port:</strong> Connected to the wind-noise manifold (atmospheric side)</li>
      <li><strong>Negative port (reference):</strong> Connected to the reference chamber</li>
    </ul>
    <h3 id="mounting">Mounting</h3>
    <p>The sensor should be mounted to minimize mechanical stress and vibration coupling. Flexible
      tubing connections to the pressure ports help isolate the sensor from enclosure vibration.</p>
    <hr />
    <p><em>See also: <Link to="/03-hardware/diaphragm-design">Diaphragm Design</Link> | <Link to="/03-hardware/differential-pressure-system">Differential Pressure System</Link> | <Link to="/03-hardware/reference-chamber">Reference Chamber</Link></em></p>
  </article>
</div>

    </main>
  );
}