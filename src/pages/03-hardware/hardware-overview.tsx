import { Link } from 'react-router-dom';

export default function Page03HardwareHardwareOverview() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Hardware</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Hardware Overview</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Hardware Overview</h1>
    <h2 id="introduction">Introduction</h2>
    <p>The InfraSocket hardware subsystem is responsible for the physical interface between the
      atmosphere and the digital processing system. It captures very-low-frequency atmospheric
      pressure waves (0.01–20 Hz (TARGET - Pending experimental validation)), reduces environmental noise, conditions the electrical signal, and
      digitizes it for software processing.</p>
    <blockquote>
      <p><strong>Simple Explanation:</strong>
        The hardware is like a very sensitive "atmospheric microphone" — but instead of listening to
        audible sound, it measures extremely slow pressure changes in the air. Because these changes
        are so small and slow, every part of the hardware must be carefully designed to avoid adding
        noise or losing the signal.</p>
    </blockquote>
    <p><img src="../assets/hardware/infrasocket-node-concept.jpg" alt="Conceptual InfraSocket sensor node — exploded view showing environmental enclosure, Raspberry Pi, ADC, analog front end, pressure sensor, wind-noise manifold, and connection points" />
    </p>
    <p><strong>Figure:</strong> Conceptual illustration of a complete InfraSocket sensor node (exploded
      view).</p>
    <p><strong>Source:</strong> Project-generated concept diagram — not a photograph of the prototype.
    </p>
    <h2 id="hardware-subsystem-map">Hardware Subsystem Map</h2>
    <pre><code className="language-mermaid">flowchart TD{"\n"}{"    "}subgraph INPUT["Atmospheric Interface"]{"\n"}{"        "}WIND["Wind-Noise Reduction\nManifold"]{"\n"}{"    "}end{"\n"}{"\n"}{"    "}subgraph SENSING["Pressure Sensing"]{"\n"}{"        "}SENSOR["Pressure Sensor\n(Differential)"]{"\n"}{"        "}DIAPH["Diaphragm /\nSensing Element"]{"\n"}{"        "}REFCHAM["Reference\nChamber"]{"\n"}{"        "}CAPILLARY["Capillary\nLeak"]{"\n"}{"    "}end{"\n"}{"\n"}{"    "}subgraph CONDITIONING["Signal Conditioning"]{"\n"}{"        "}INA["Instrumentation\nAmplifier"]{"\n"}{"        "}FILTER["Anti-Aliasing\nFilter"]{"\n"}{"    "}end{"\n"}{"\n"}{"    "}subgraph DIGITIZATION["Digitization"]{"\n"}{"        "}ADC["ADC Module"]{"\n"}{"        "}TEMP["Temperature\nSensor"]{"\n"}{"    "}end{"\n"}{"\n"}{"    "}subgraph SUPPORT["Support Systems"]{"\n"}{"        "}POWER["Power Supply"]{"\n"}{"        "}ENCLOSURE["Environmental\nEnclosure"]{"\n"}{"        "}CALIB["Calibration\nInterface"]{"\n"}{"    "}end{"\n"}{"\n"}{"    "}WIND --&gt; SENSOR{"\n"}{"    "}SENSOR --- DIAPH{"\n"}{"    "}SENSOR --- REFCHAM{"\n"}{"    "}REFCHAM --- CAPILLARY{"\n"}{"    "}SENSOR --&gt; INA{"\n"}{"    "}INA --&gt; FILTER{"\n"}{"    "}FILTER --&gt; ADC{"\n"}{"    "}TEMP --&gt; ADC{"\n"}{"    "}POWER --&gt; CONDITIONING{"\n"}{"    "}POWER --&gt; DIGITIZATION{"\n"}</code></pre>
    <h2 id="hardware-components-summary">Hardware Components Summary</h2>
    <table>
      <thead>
        <tr>
          <th>Component</th>
          <th>Purpose</th>
          <th>Key Requirement</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><Link to="/03-hardware/wind-noise-reduction">Wind-noise reduction manifold</Link></td>
          <td>Reduce turbulent wind-induced pressure noise</td>
          <td>Multiple spatially distributed inlets</td>
        </tr>
        <tr>
          <td><Link to="/03-hardware/pressure-sensing">Pressure sensor</Link></td>
          <td>Convert pressure variations to electrical signal</td>
          <td>Target band: approximately 0.01–20 Hz (TARGET - Pending experimental validation); complete sensor/system response and
            differential configuration are PENDING VALIDATION</td>
        </tr>
        <tr>
          <td><Link to="/03-hardware/diaphragm-design">Diaphragm / sensing element</Link></td>
          <td>Mechanical element that deflects under pressure</td>
          <td>Sensitivity, linearity, low hysteresis</td>
        </tr>
        <tr>
          <td><Link to="/03-hardware/reference-chamber">Reference chamber</Link></td>
          <td>Provide stable reference pressure</td>
          <td>Sealed volume with controlled capillary leak</td>
        </tr>
        <tr>
          <td><Link to="/03-hardware/differential-pressure-system">Differential pressure system</Link></td>
          <td>Suppress slow barometric drift</td>
          <td>Atmosphere vs. reference chamber</td>
        </tr>
        <tr>
          <td><Link to="/03-hardware/analog-front-end">Instrumentation amplifier</Link></td>
          <td>Amplify weak sensor output</td>
          <td>Low noise, high CMRR, low offset drift</td>
        </tr>
        <tr>
          <td><Link to="/03-hardware/analog-front-end">Anti-aliasing filter</Link></td>
          <td>Prevent aliasing during digitization</td>
          <td>Low-pass, cutoff below half sampling rate</td>
        </tr>
        <tr>
          <td><Link to="/03-hardware/adc-digitization">ADC</Link></td>
          <td>Digitize the analog signal</td>
          <td>≥≥16-bit (TARGET - Final selection depends on ENOB and noise) nominal resolution TARGET; approximately 100 Hz (TARGET - Pending validation) sampling TARGET; final ADC, ENOB, input range, and noise TBD</td>
        </tr>
        <tr>
          <td><Link to="/03-hardware/temperature-sensing">Temperature sensor</Link></td>
          <td>Monitor ambient/enclosure temperature</td>
          <td>Accurate, low self-heating</td>
        </tr>
        <tr>
          <td><Link to="/03-hardware/power-system">Power supply</Link></td>
          <td>Provide clean, stable power</td>
          <td>Low noise, regulated output</td>
        </tr>
        <tr>
          <td><Link to="/03-hardware/environmental-enclosure">Environmental enclosure</Link></td>
          <td>Protect electronics</td>
          <td>Weather-resistant, thermally insulating</td>
        </tr>
        <tr>
          <td><Link to="/03-hardware/calibration">Calibration interface</Link></td>
          <td>Enable calibration procedures</td>
          <td>Access to sensor port, reference input</td>
        </tr>
      </tbody>
    </table>
    <h3 id="component-concepts">Component Concepts</h3>
    <p><img src="../assets/hardware/differential-pressure-concept.jpg" alt="Differential pressure sensor concept — cross-section showing atmospheric port, diaphragm, reference chamber, capillary tube, and electrical output" />
    </p>
    <p><strong>Figure:</strong> Conceptual cross-section of a differential pressure sensor for
      infrasound monitoring, showing how fast pressure changes (infrasound) create differential
      pressure across the diaphragm while slow barometric changes equalize through the capillary.</p>
    <blockquote>
      <p>Reference concept diagram — illustrates the sensing principle, not the final InfraSocket
        hardware.</p>
    </blockquote>
    <p><strong>Source:</strong> Project-generated concept diagram.</p>
    <p><img src="../assets/hardware/wind-rosette-concept.jpg" alt="Wind-noise reduction rosette — top-down view of 8-arm radial manifold with central hub and spatially distributed air inlets" />
    </p>
    <p><strong>Figure:</strong> Wind-noise reduction rosette/manifold concept — 8 tubes radiate from a
      central manifold to spatially distributed air inlets. Spatially coherent infrasound signal is
      preserved while spatially incoherent wind turbulence is averaged out.</p>
    <blockquote>
      <p>Expected attenuation will be experimentally characterized.</p>
    </blockquote>
    <p><strong>Source:</strong> Project-generated concept diagram.</p>
    <h2 id="design-philosophy">Design Philosophy</h2>
    <h3 id="1-noise-budget-awareness">1. Noise Budget Awareness</h3>
    <p>Every component in the signal chain adds noise. The overall system noise floor is determined by
      the noisiest component. Design priority is given to minimizing noise in the sensor and front-end
      amplifier — the first elements in the signal chain.</p>
    <h3 id="2-simplicity-for-prototype">2. Simplicity for Prototype</h3>
    <p>The prototype should use the simplest hardware configuration that meets the minimum requirements.
      Complex multi-stage amplification or exotic sensor technologies are deferred unless justified by
      testing.</p>
    <h3 id="3-measurability">3. Measurability</h3>
    <p>Every critical parameter (sensitivity, noise floor, frequency response) should be measurable
      through defined calibration procedures. The hardware design includes provisions for calibration
      access.</p>
    <h3 id="4-modularity">4. Modularity</h3>
    <p>The hardware is designed in modular subsystems that can be tested and upgraded independently:</p>
    <ul>
      <li>The wind-noise manifold can be improved without changing the sensor</li>
      <li>The sensor can be upgraded without changing the front-end electronics</li>
      <li>The ADC can be swapped for a higher-resolution unit</li>
    </ul>
    <hr />
    <p><em>See also: <Link to="/03-hardware/pressure-sensing">Pressure Sensing</Link> | <Link to="/03-hardware/wind-noise-reduction">Wind-Noise Reduction</Link> | <Link to="/03-hardware/analog-front-end">Analog Front End</Link></em></p>
  </article>
</div>

    </main>
  );
}