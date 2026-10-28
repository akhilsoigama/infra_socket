import { Link } from 'react-router-dom';

export default function Page03HardwareDifferentialPressureSystem() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Hardware</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Differential Pressure System</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Differential Pressure System</h1>
    <h2 id="purpose">Purpose</h2>
    <p>The differential pressure system measures the <strong>difference</strong> between two pressures
      rather than measuring absolute atmospheric pressure. This is critical for infrasound detection
      because it naturally suppresses the large, slow-changing background atmospheric pressure
      (approximately 101,325 Pa) while remaining sensitive to small, faster pressure variations (the
      infrasound signal).</p>
    <h2 id="working-principle">Working Principle</h2>
    <blockquote>
      <p><strong>Simple Explanation:</strong>
        Imagine two rooms separated by a flexible wall. If both rooms are at the same pressure, the
        wall stays flat. If one room has slightly more pressure, the wall bends toward the
        lower-pressure room. A differential pressure sensor works like that flexible wall — it only
        responds to the <em>difference</em> between two pressures, ignoring the large common
        pressure that both sides share.</p>
    </blockquote>
    <blockquote>
      <p><strong>Technical Explanation:</strong>
        A differential pressure sensor has two pressure ports:</p>
      <ul>
        <li><strong>Port A (Positive/High):</strong> Connected to the atmosphere (via the wind-noise
          manifold)</li>
        <li><strong>Port B (Negative/Low/Reference):</strong> Connected to the reference chamber
        </li>
      </ul>
      <p>The sensor diaphragm is exposed to pressure from both ports simultaneously. Only the
        difference (P_A − P_B) causes the diaphragm to deflect. Since the reference chamber slowly
        equalizes with the atmosphere through a capillary leak, the differential pressure represents
        only the faster pressure variations — exactly the infrasound signal we want to capture.</p>
    </blockquote>
    <h2 id="system-diagram">System Diagram</h2>
    <pre><code className="language-mermaid">flowchart LR{"\n"}{"    "}ATM["Atmosphere\n(P_atm + P_infrasound)"] --&gt;|"Via manifold"| PORT_A["Port A\n(Atmospheric Side)"]{"\n"}{"    "}PORT_A --&gt; SENSOR["Differential\nPressure Sensor\n(Diaphragm)"]{"\n"}{"    "}REFCHAM["Reference Chamber\n(P_ref ≈ P_atm_mean)"] --&gt; PORT_B["Port B\n(Reference Side)"]{"\n"}{"    "}PORT_B --&gt; SENSOR{"\n"}{"    "}CAP["Capillary\nLeak"] --- REFCHAM{"\n"}{"    "}CAP --- ATM2["Atmosphere"]{"\n"}{"    "}SENSOR --&gt;|"Output ∝\nP_A − P_B"| OUTPUT["Electrical\nSignal"]{"\n"}</code></pre>
    <h2 id="why-differential-measurement-is-essential">Why Differential Measurement Is Essential</h2>
    <h3 id="problem-barometric-pressure-is-enormous">Problem: Barometric Pressure is Enormous</h3>
    <p>Standard atmospheric pressure is approximately 101,325 Pa (1013.25 hPa). An infrasound signal
      might have an amplitude of 0.01 to 10 Pa. This means the signal is roughly <strong>10,000 to
        10,000,000 times smaller</strong> than the background pressure.</p>
    <h3 id="problem-barometric-pressure-changes-slowly">Problem: Barometric Pressure Changes Slowly</h3>
    <p>Weather systems, diurnal heating, and altitude changes cause the atmospheric pressure to vary by
      hundreds of Pascals over hours. These slow changes would completely overwhelm the tiny
      infrasound signal if measured on an absolute scale.</p>
    <h3 id="solution-differential-measurement">Solution: Differential Measurement</h3>
    <p>By measuring pressure relative to a slowly tracking reference, the large common-mode atmospheric
      pressure is cancelled. Only the differential signal — the fast pressure variation (infrasound) —
      remains.</p>
    <pre><code>Absolute measurement:{"  "}P_measured = P_atm_mean + P_weather_drift + P_infrasound{"\n"}{"                       "}↑ ~101,325 Pa{"   "}↑ ~100s Pa{"        "}↑ ~0.01–10 Pa{"\n"}{"\n"}Differential measurement: ΔP = P_atmosphere − P_reference{"\n"}{"                          "}ΔP ≈ P_infrasound{"  "}(if reference tracks the mean){"\n"}</code></pre>
    <h2 id="behaviour-at-different-frequencies">Behaviour at Different Frequencies</h2>
    <table>
      <thead>
        <tr>
          <th>Frequency Range</th>
          <th>Atmospheric Pressure</th>
          <th>Reference Chamber Pressure</th>
          <th>Differential Output</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Very slow (&lt; 0.001 Hz, weather)</td>
          <td>Changes by 100s of Pa</td>
          <td>Equalizes through capillary → follows atmosphere</td>
          <td>≈ 0 (suppressed)</td>
        </tr>
        <tr>
          <td>Target range (0.01–20 Hz (TARGET - Pending experimental validation), infrasound)</td>
          <td>Changes by fractions to Pascals</td>
          <td>Cannot equalize fast enough → lags behind</td>
          <td>≈ P_infrasound (detected)</td>
        </tr>
        <tr>
          <td>Higher frequency (&gt; 20 Hz)</td>
          <td>Small changes</td>
          <td>Negligible equalization</td>
          <td>Present but filtered by electronics</td>
        </tr>
      </tbody>
    </table>
    <h2 id="key-design-parameters">Key Design Parameters</h2>
    <table>
      <thead>
        <tr>
          <th>Parameter</th>
          <th>Design Consideration</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Reference chamber volume</td>
          <td>Larger volume → slower equalization → lower cutoff frequency</td>
        </tr>
        <tr>
          <td>Capillary bore diameter</td>
          <td>Smaller bore → more restriction → slower equalization</td>
        </tr>
        <tr>
          <td>Capillary length</td>
          <td>Longer capillary → more restriction → slower equalization</td>
        </tr>
        <tr>
          <td>Time constant</td>
          <td>τ = R × V (acoustic resistance × chamber volume) determines the high-pass corner
            frequency</td>
        </tr>
        <tr>
          <td>Corner frequency</td>
          <td>f_c = 1 / (2π × τ); sets the lower bound of frequency response</td>
        </tr>
      </tbody>
    </table>
    <h2 id="common-mode-rejection">Common-Mode Rejection</h2>
    <p>The differential sensor naturally rejects any pressure that appears equally on both ports. This
      common-mode rejection is important because:</p>
    <ul>
      <li>Absolute atmospheric pressure changes affect both sides equally (via the slow capillary
        equalization)</li>
      <li>Any mechanical vibration that pressurizes both sides equally is also rejected</li>
      <li>Only the differential component — the infrasound arriving through the manifold — produces an
        output</li>
    </ul>
    <h2 id="limitations">Limitations</h2>
    <ol>
      <li><strong>Imperfect equalization:</strong> The capillary leak is an approximation; very slow
        infrasound near the corner frequency is partially attenuated</li>
      <li><strong>Temperature sensitivity:</strong> Gas in the reference chamber expands/contracts
        with temperature (PV = nRT), creating a spurious differential signal</li>
      <li><strong>Capillary clogging:</strong> Moisture or debris in the capillary can change its
        resistance, altering the corner frequency</li>
      <li><strong>Limited range:</strong> Differential sensors have a much smaller measurement range
        than absolute sensors; overpressure protection is needed</li>
    </ol>
    <hr />
    <p><em>See also: <Link to="/03-hardware/reference-chamber">Reference Chamber</Link> | <Link to="/03-hardware/pressure-sensing">Pressure Sensing</Link> | <Link to="/03-hardware/calibration">Calibration</Link></em></p>
  </article>
</div>

    </main>
  );
}