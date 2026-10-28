import { Link } from 'react-router-dom';

export default function Page02SystemArchitectureHardwareArchitecture() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">System Architecture</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Hardware Architecture</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Hardware Architecture</h1>
    <h2 id="hardware-block-diagram">Hardware Block Diagram</h2>
    <pre><code className="language-mermaid">flowchart TD{"\n"}{"    "}subgraph INLET["Wind-Noise Reduction"]{"\n"}{"        "}P1["Inlet 1"] --&gt; MAN["Manifold\n(Common Volume)"]{"\n"}{"        "}P2["Inlet 2"] --&gt; MAN{"\n"}{"        "}P3["Inlet 3"] --&gt; MAN{"\n"}{"        "}P4["Inlet 4"] --&gt; MAN{"\n"}{"        "}P5["Inlet ...N"] --&gt; MAN{"\n"}{"    "}end{"\n"}{"\n"}{"    "}subgraph SENSING["Pressure Sensing"]{"\n"}{"        "}MAN --&gt; SPORT["Sensor Port\n(Atmosphere Side)"]{"\n"}{"        "}SPORT --&gt; DIFF["Differential Pressure\nSensor"]{"\n"}{"        "}REFCHAM["Reference Chamber\n(Sealed Volume)"] --&gt; DIFF{"\n"}{"        "}CAP["Capillary Leak\n(Slow Equalization)"] --- REFCHAM{"\n"}{"        "}CAP --- ATM_REF["Atmosphere\n(Reference Side)"]{"\n"}{"    "}end{"\n"}{"\n"}{"    "}subgraph ELECTRONICS["Analog Electronics"]{"\n"}{"        "}DIFF --&gt; INA["Instrumentation\nAmplifier"]{"\n"}{"        "}INA --&gt; LPF["Anti-Aliasing\nLow-Pass Filter"]{"\n"}{"        "}LPF --&gt; BIAS["DC Bias\nCircuit"]{"\n"}{"    "}end{"\n"}{"\n"}{"    "}subgraph DIGITIZATION["Digitization"]{"\n"}{"        "}BIAS --&gt; ADC["ADC Module\n(≥16-bit TARGET; ~100 Hz TARGET; selection TBD)"]{"\n"}{"        "}TEMP["Temperature\nSensor"] --&gt; ADC_AUX["ADC Auxiliary\nChannel"]{"\n"}{"    "}end{"\n"}{"\n"}{"    "}subgraph POWER["Power"]{"\n"}{"        "}PSU["Power Supply\n(Regulated)"] --&gt; VREG["Voltage\nRegulator"]{"\n"}{"        "}VREG --&gt; |"Analog Supply"| ELECTRONICS{"\n"}{"        "}VREG --&gt; |"Digital Supply"| DIGITIZATION{"\n"}{"    "}end{"\n"}{"\n"}{"    "}ADC --&gt; |"Digital Data"| MCU["Microcontroller / DAQ\n(Data Acquisition)"]{"\n"}{"    "}ADC_AUX --&gt; MCU{"\n"}{"    "}MCU --&gt; |"Serial / USB / Network"| HOST["Processing Host\n(Computer / SBC)"]{"\n"}</code></pre>
    <h2 id="hardware-subsystem-summary">Hardware Subsystem Summary</h2>
    <table>
      <thead>
        <tr>
          <th>Subsystem</th>
          <th>Function</th>
          <th>Key Components</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Wind-noise reduction</td>
          <td>Reduce turbulent wind noise</td>
          <td>Multi-port manifold, tubing</td>
        </tr>
        <tr>
          <td>Pressure sensing</td>
          <td>Convert pressure to electrical signal</td>
          <td>Differential pressure sensor, reference chamber, capillary</td>
        </tr>
        <tr>
          <td>Analog front end</td>
          <td>Amplify and filter the signal</td>
          <td>Instrumentation amplifier, passive/active filters</td>
        </tr>
        <tr>
          <td>Digitization</td>
          <td>Convert analog signal to digital</td>
          <td>ADC module (≥≥16-bit (TARGET - Final selection depends on ENOB and noise))</td>
        </tr>
        <tr>
          <td>Temperature sensing</td>
          <td>Monitor ambient/enclosure temperature</td>
          <td>Temperature sensor (thermistor, RTD, or digital)</td>
        </tr>
        <tr>
          <td>Power system</td>
          <td>Provide stable, clean power</td>
          <td>Power supply, voltage regulators</td>
        </tr>
        <tr>
          <td>Enclosure</td>
          <td>Protect electronics from environment</td>
          <td>Weather-resistant housing</td>
        </tr>
        <tr>
          <td>Data acquisition</td>
          <td>Collect digital data and transmit</td>
          <td>Microcontroller or DAQ board</td>
        </tr>
      </tbody>
    </table>
    <h2 id="design-considerations">Design Considerations</h2>
    <h3 id="signal-path-integrity">Signal Path Integrity</h3>
    <p>The signal path from sensor to ADC must be designed to minimize added noise:</p>
    <ul>
      <li>Keep analog signal traces short</li>
      <li>Separate analog and digital ground planes</li>
      <li>Use shielded cables for the sensor connection</li>
      <li>Place the amplifier physically close to the sensor</li>
    </ul>
    <h3 id="power-supply-noise">Power Supply Noise</h3>
    <p>Power supply noise can couple into the analog signal chain. Mitigation strategies:</p>
    <ul>
      <li>Use a linear regulator (not switching regulator) for the analog supply, or adequately filter
        a switching supply</li>
      <li>Provide separate analog and digital power rails</li>
      <li>Use decoupling capacitors at each IC</li>
    </ul>
    <h3 id="thermal-management">Thermal Management</h3>
    <p>Temperature changes affect:</p>
    <ul>
      <li>Sensor sensitivity and offset</li>
      <li>Amplifier offset and gain</li>
      <li>Reference chamber pressure (PV = nRT)</li>
      <li>ADC reference voltage</li>
    </ul>
    <p>Strategies:</p>
    <ul>
      <li>Thermal insulation of the enclosure</li>
      <li>Temperature monitoring for compensation</li>
      <li>Avoid placing heat-generating components near the sensor</li>
    </ul>
    <h3 id="mechanical-isolation">Mechanical Isolation</h3>
    <p>Ground vibration and mechanical disturbance can be transmitted to the pressure sensor. Mounting
      should include vibration isolation where possible.</p>
    <h2 id="interface-definitions">Interface Definitions</h2>
    <table>
      <thead>
        <tr>
          <th>Interface</th>
          <th>From</th>
          <th>To</th>
          <th>Signal Type</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Pneumatic</td>
          <td>Manifold</td>
          <td>Sensor port</td>
          <td>Air pressure</td>
        </tr>
        <tr>
          <td>Pneumatic</td>
          <td>Capillary</td>
          <td>Reference chamber</td>
          <td>Slow air equalization</td>
        </tr>
        <tr>
          <td>Electrical (analog)</td>
          <td>Sensor</td>
          <td>Instrumentation amplifier</td>
          <td>Differential voltage</td>
        </tr>
        <tr>
          <td>Electrical (analog)</td>
          <td>Amplifier</td>
          <td>Anti-alias filter</td>
          <td>Amplified voltage</td>
        </tr>
        <tr>
          <td>Electrical (analog)</td>
          <td>Filter</td>
          <td>ADC</td>
          <td>Filtered voltage</td>
        </tr>
        <tr>
          <td>Electrical (digital)</td>
          <td>ADC</td>
          <td>Microcontroller/DAQ</td>
          <td>SPI / I²C / parallel</td>
        </tr>
        <tr>
          <td>Electrical (digital)</td>
          <td>Temperature sensor</td>
          <td>Microcontroller/DAQ</td>
          <td>I²C / analog</td>
        </tr>
        <tr>
          <td>Data</td>
          <td>Microcontroller/DAQ</td>
          <td>Processing host</td>
          <td>Serial / USB / Ethernet</td>
        </tr>
      </tbody>
    </table>
    <hr />
    <p><em>See also: <Link to="/02-system-architecture/architecture">Architecture</Link> | <Link to="/03-hardware/pressure-sensing">Pressure Sensing</Link> | <Link to="/03-hardware/analog-front-end">Analog Front End</Link></em></p>
  </article>
</div>

    </main>
  );
}