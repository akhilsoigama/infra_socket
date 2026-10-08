import { Link } from 'react-router-dom';

export default function Page03HardwareReferenceChamber() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Hardware</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Reference Chamber</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Reference Chamber</h1>
    <h2 id="purpose">Purpose</h2>
    <p>A reference chamber and pneumatic restriction can create a frequency-dependent pressure
      reference for a differential sensor. The resulting response depends on the implemented chamber,
      capillary, tubing, ports, and leakage; the complete InfraSocket response has not been measured
      in the evidence available here.</p>
    <h2 id="how-it-works">How It Works</h2>
    <blockquote>
      <p><strong>Simple Explanation (Analogy):</strong>
        Imagine you are in a room with a very small keyhole as the only opening to the outside. If
        someone slams a door outside (a fast event), you feel the pressure change immediately — the
        air cannot rush through the tiny keyhole fast enough to equalize. But if the weather changes
        slowly over hours, air gradually seeps in and out through the keyhole, so the room pressure
        keeps up with the outside. The reference chamber works the same way — it "ignores" slow
        pressure changes but "feels" fast ones.</p>
    </blockquote>
    <blockquote>
      <p><strong>Technical Explanation:</strong>
        The reference chamber is a sealed volume connected to the atmosphere through a narrow
        capillary tube (controlled acoustic leak). The capillary has a high acoustic resistance — it
        severely restricts airflow. This creates an RC-like time constant:</p>
      <ul>
        <li><strong>R</strong> = acoustic resistance of the capillary (depends on diameter, length,
          and air viscosity)</li>
        <li><strong>C</strong> = acoustic compliance of the chamber volume (depends on volume and
          atmospheric pressure)</li>
        <li><strong>τ = R × C</strong> = time constant</li>
      </ul>
      <p>In a simplified first-order model, pressure differences vary across a characteristic time
        scale τ: slower variations have more time to equalize through the restriction, while faster
        variations are less equalized. This is a frequency-dependent response, not perfect
        cancellation or an abrupt pass/reject boundary.</p>
      <p>The corresponding characteristic frequency is <strong>f<sub>c</sub> = 1 / (2πτ)</strong>.
        This relation is a model; the actual cutoff and full transfer function must be experimentally
        characterized for the physical assembly.</p>
    </blockquote>
    <h2 id="conceptual-diagram">Conceptual Diagram</h2>
    <pre><code className="language-mermaid">flowchart LR{"\n"}{"    "}ATM_FAST["Atmosphere\n(Faster pressure variations)"] --&gt;|"Direct path\n(manifold)"| PORT_A["Sensor Port A"]{"\n"}{"\n"}{"    "}ATM_SLOW["Atmosphere\n(Slow: Weather\n&lt; 0.001 Hz)"] --&gt;|"Through capillary\n(slow equalization)"| CHAMBER["Reference\nChamber\n(Sealed Volume)"]{"\n"}{"    "}CHAMBER --&gt; PORT_B["Sensor Port B"]{"\n"}{"\n"}{"    "}PORT_A --&gt; SENSOR["Differential\nSensor"]{"\n"}{"    "}PORT_B --&gt; SENSOR{"\n"}{"\n"}{"    "}SENSOR --&gt; |"Output:\nFrequency-dependent\ndifferential response"| OUT["Signal"]{"\n"}</code></pre>
    <h2 id="design-parameters">Design Parameters</h2>
    <h3 id="chamber-volume">Chamber Volume</h3>
    <ul>
      <li><strong>Larger volume</strong> → larger acoustic compliance → lower corner frequency → can
        measure lower frequencies</li>
      <li><strong>Smaller volume</strong> → higher corner frequency → loses sensitivity to the lowest
        frequencies</li>
    </ul>
    <p><strong>Cutoff: TBD — requires experimental characterization.</strong> A target near the low end
      of the intended band may be evaluated during design, but no chamber cutoff is established by
      the available project evidence.</p>
    <h3 id="capillary-dimensions">Capillary Dimensions</h3>
    <table>
      <thead>
        <tr>
          <th>Parameter</th>
          <th>Effect of Increasing</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Length</td>
          <td>Increases resistance → lowers corner frequency</td>
        </tr>
        <tr>
          <td>Bore diameter</td>
          <td>Decreases resistance → raises corner frequency</td>
        </tr>
      </tbody>
    </table>
    <p>Capillary dimensions are not finalized. Any candidate bore or length must be evaluated with the
      chamber volume, tubing, pneumatic resistance, pressure ports, leakage, and temperature effects.</p>
    <h3 id="time-constant-relationship">Time Constant Relationship</h3>
    <pre><code>τ = R_pneumatic × C_chamber{"\n"}{"\n"}f_c = 1 / (2π × τ){"\n"}{"\n"}R_pneumatic and C_chamber depend on the actual physical assembly.{"\n"}No target cutoff or measured τ is established here.{"\n"}</code></pre>
    <blockquote>
      <p><strong>Status: PENDING VALIDATION.</strong> Characterize pressure equalization and frequency
        response for the assembled chamber, capillary, tubing, and sensor ports. Do not infer a
        numeric cutoff from the model alone.</p>
    </blockquote>
    <pre><code className="language-text">Slow pressure variation{"\n"}{"        "}↓{"\n"}Reference chamber can follow gradually{"\n"}{"        "}↓{"\n"}Reduced differential component{"\n"}{"\n"}Faster pressure variation{"\n"}{"        "}↓{"\n"}Reference chamber cannot follow instantly{"\n"}{"        "}↓{"\n"}Differential pressure becomes measurable{"\n"}</code></pre>
    <h2 id="frequency-response-effect">Frequency Response Effect</h2>
    <p>The reference chamber creates a high-pass response in the overall sensor system:</p>
    <table>
      <thead>
        <tr>
          <th>Frequency</th>
          <th>Behaviour</th>
          <th>Signal Output</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Well below the measured characteristic frequency</td>
          <td>More pressure equalization occurs in the simplified model</td>
          <td>Attenuated according to measured response</td>
        </tr>
        <tr>
          <td>Near the measured characteristic frequency</td>
          <td>Transition region of the measured response</td>
          <td>Determine experimentally; first-order model is not yet established</td>
        </tr>
        <tr>
          <td>Well above the measured characteristic frequency</td>
          <td>Less pressure equalization occurs in the simplified model</td>
          <td>Determine experimentally; do not assume unity transfer</td>
        </tr>
      </tbody>
    </table>
    <h2 id="practical-construction">Practical Construction</h2>
    <h3 id="materials">Materials</h3>
    <ul>
      <li><strong>Chamber body:</strong> Can be constructed from any rigid, airtight material (metal,
        thick-walled plastic, glass jar). The material must not flex under small pressure changes.
      </li>
      <li><strong>Capillary:</strong> Medical-grade capillary tubing, hypodermic needle tubing, or
        precision-bore glass tubing. The bore must be small and well-controlled.</li>
      <li><strong>Seals:</strong> All joints must be airtight. Epoxy, silicone sealant, or compression
        fittings can be used.</li>
    </ul>
    <h3 id="size-guidance">Size Guidance</h3>
    <p><strong>CANDIDATE only:</strong> The ranges below are preliminary design values from the current
      documentation, not selected dimensions or measured specifications. Confirm hardware records
      before fabrication and characterize the resulting response.</p>
    <table>
      <thead>
        <tr>
          <th>Parameter</th>
          <th>Approximate Range</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Chamber volume</td>
          <td>0.5 to 5 litres</td>
        </tr>
        <tr>
          <td>Capillary bore</td>
          <td>0.1 to 0.5 mm</td>
        </tr>
        <tr>
          <td>Capillary length</td>
          <td>5 to 50 cm</td>
        </tr>
      </tbody>
    </table>
    <h3 id="assembly-considerations">Assembly Considerations</h3>
    <ol>
      <li>The chamber must be rigid — it should not deform under the small pressure differentials
        being measured</li>
      <li>The capillary must be straight and free of obstructions</li>
      <li>A small filter (mesh or sintered filter) at the capillary inlet prevents dust and moisture
        from entering</li>
      <li>The connection between the chamber and the sensor's reference port must be airtight</li>
    </ol>
    <h2 id="limitations">Limitations</h2>
    <ol>
      <li>
        <p><strong>Temperature sensitivity:</strong> As temperature changes, the gas inside the
          sealed chamber expands or contracts (PV = nRT). This creates a spurious pressure change
          that the sensor detects. Thermal insulation helps but does not eliminate this effect.
        </p>
      </li>
      <li>
        <p><strong>Capillary clogging:</strong> Moisture condensation, dust, or insects can
          partially block the capillary, changing the effective resistance and shifting the corner
          frequency.</p>
      </li>
      <li>
        <p><strong>Finite suppression:</strong> The reference chamber does not perfectly suppress
          all slow pressure changes — it is a first-order high-pass filter, meaning suppression is
          gradual, not abrupt.</p>
      </li>
      <li>
        <p><strong>Volume stability:</strong> If the chamber material is not sufficiently rigid, the
          chamber itself acts as an additional compliance, potentially altering the frequency
          response.</p>
      </li>
    </ol>
    <h2 id="testing-the-reference-chamber">Testing the Reference Chamber</h2>
    <p>To verify that the reference chamber is functioning correctly:</p>
    <ol>
      <li>
        <p><strong>Seal test:</strong> Seal the capillary completely and apply a small pressure
          step. The sensor should show a sustained output (the reference cannot equalize).</p>
      </li>
      <li>
        <p><strong>Time constant test:</strong> Apply a step pressure change and observe how quickly
          the sensor output decays. The decay time constant should match the design target.</p>
      </li>
      <li>
        <p><strong>Frequency response test:</strong> Apply known sinusoidal pressure signals at
          various frequencies and measure the sensor output amplitude at each frequency.</p>
      </li>
    </ol>
    <hr />
    <p><em>See also: <Link to="/03-hardware/differential-pressure-system">Differential Pressure System</Link> | <Link to="/03-hardware/pressure-sensing">Pressure Sensing</Link> | <Link to="/03-hardware/calibration">Calibration</Link></em></p>
  </article>
</div>

    </main>
  );
}