import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

export default function Page03HardwarePowerSystem() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
        <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
          <a href="#" className="hover:underline">Home</a> /
          <a href="#" className="hover:underline">Hardware</a> /
          <span className="font-medium text-gray-900 dark:text-gray-200">Power System</span>
        </nav>
        <article className="markdown-body max-w-3xl">
          <h1>Power System</h1>
          <h2 id="purpose">Purpose</h2>
          <p>The power system provides clean, stable electrical power to all electronic components. Power
            supply noise can directly contaminate the measured signal, making power design critical for a
            low-noise measurement system.</p>
          <h2 id="power-requirements">Power Requirements</h2>
          <table>
            <thead>
              <tr>
                <th>Component</th>
                <th>Typical Voltage</th>
                <th>Current (est.)</th>
                <th>Noise Sensitivity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pressure sensor</td>
                <td>3.3 V or 5 V</td>
                <td>1–10 mA</td>
                <td>High</td>
              </tr>
              <tr>
                <td>Instrumentation amplifier</td>
                <td>±5 V or 3.3 V</td>
                <td>1–5 mA</td>
                <td>Very high</td>
              </tr>
              <tr>
                <td>ADC</td>
                <td>3.3 V or 5 V</td>
                <td>1–10 mA</td>
                <td>High</td>
              </tr>
              <tr>
                <td>Temperature sensor</td>
                <td>3.3 V</td>
                <td>&lt; 1 mA</td>
                <td>Low</td>
              </tr>
              <tr>
                <td>Microcontroller / DAQ</td>
                <td>3.3 V or 5 V</td>
                <td>50–500 mA</td>
                <td>Medium</td>
              </tr>
              <tr>
                <td>Edge computer (if used)</td>
                <td>5 V (USB)</td>
                <td>0.5–3 A</td>
                <td>Low (digital)</td>
              </tr>
            </tbody>
          </table>
          <p><code>Assumption</code>: Exact current requirements depend on selected components. Values above
            are approximate ranges.</p>
          <h2 id="supporting-subsystems">SUPPORTING SUBSYSTEMS</h2>
          <h3 id="a-power-subsystem">A. POWER SUBSYSTEM</h3>
          <pre><code className="language-mermaid">flowchart LR{"\n"}{"    "}BATT["12V LiFePO4 Battery"] --&gt; PROT["Protected Power Input"]{"\n"}{"    "}PROT --&gt; DCDC["DC-DC Regulation\n(includes local decoupling)"]{"\n"}</code></pre>

          <div className="not-prose my-4 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-sm">Design Compatibility Notice:</p>
              <p className="text-xs mt-0.5 opacity-90 font-mono">verify exact sensor variant and controller logic compatibility</p>
            </div>
          </div>

          <h2 id="power-architecture">Power Architecture</h2>
          <pre><code className="language-mermaid">flowchart TD{"\n"}{"    "}BATT["12V LiFePO4 Battery\n(or Mains Supply)"] --&gt; PROT["Protected Power Input\n(Reverse Polarity & Surge Protection)"]{"\n"}{"    "}PROT --&gt; DCDC["DC-DC Regulation\n(with Local Decoupling)"]{"\n"}{"    "}DCDC --&gt; VREG_A["Linear Voltage Regulator (Analog)\n(Ultra-low noise LDO)"]{"\n"}{"    "}DCDC --&gt; VREG_D["Voltage Regulator (Digital)\n(3.3V / 5V)"]{"\n"}{"\n"}{"    "}VREG_A --&gt; |"Clean analog power"| SENSOR["Pressure Sensor"]{"\n"}{"    "}VREG_A --&gt; |"Clean analog power"| AMP["Amplifier"]{"\n"}{"    "}VREG_A --&gt; |"Clean analog power"| ADC_A["ADC (Analog Supply)"]{"\n"}{"\n"}{"    "}VREG_D --&gt; |"Digital power"| MCU["Raspberry Pi 5 / Node"]{"\n"}{"    "}VREG_D --&gt; |"Digital power"| ADC_D["ADC (Digital Supply)"]{"\n"}{"    "}VREG_D --&gt; |"Digital power"| TEMP["Temp Sensor"]{"\n"}</code></pre>
          <h2 id="design-principles">Design Principles</h2>
          <h3 id="separate-analog-and-digital-power">Separate Analog and Digital Power</h3>
          <p>Digital circuits (microcontrollers, communication interfaces) generate high-frequency switching
            noise that can couple into the analog measurement chain. Using separate voltage regulators for
            analog and digital circuits minimizes this coupling.</p>
          <h3 id="linear-regulators-for-analog">Linear Regulators for Analog</h3>
          <p>Linear voltage regulators produce very clean output with minimal high-frequency noise. Switching
            regulators (DC-DC converters) are more efficient but produce significant switching noise that is
            difficult to filter completely. For the analog supply, a linear regulator is strongly preferred.
          </p>
          <h3 id="decoupling">Decoupling</h3>
          <p>Every IC should have a ceramic decoupling capacitor (100 nF typical) placed as close as possible
            to its power pin.</p>
          <h3 id="ground-plane">Ground Plane</h3>
          <p>Use a solid ground plane. If separate analog and digital grounds are used, connect them at a
            single point near the ADC.</p>
          <h2 id="power-source-options">Power Source Options</h2>
          <table>
            <thead>
              <tr>
                <th>Source</th>
                <th>Advantages</th>
                <th>Disadvantages</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>12V LiFePO4 Battery</strong></td>
                <td>High cycle life (2000+ cycles), thermally stable &amp; safe, flat discharge curve, ideal for field deployments</td>
                <td>Requires dedicated LiFePO4 charge controller</td>
              </tr>
              <tr>
                <td>Mains AC/DC adapter</td>
                <td>Continuous, reliable</td>
                <td>Requires mains power at site</td>
              </tr>
              <tr>
                <td>Battery (lead-acid/Li-ion)</td>
                <td>Portable, no mains needed</td>
                <td>Limited runtime, needs charging</td>
              </tr>
              <tr>
                <td>Solar + battery</td>
                <td>Extended off-grid operation</td>
                <td>Complex, weather-dependent</td>
              </tr>
              <tr>
                <td>USB power bank</td>
                <td>Simple, portable</td>
                <td>Limited capacity, may introduce noise</td>
              </tr>
            </tbody>
          </table>
          <p><strong>Prototype recommendation:</strong> A mains-powered AC/DC adapter (e.g., 12 V) with
            on-board linear regulators provides the simplest and cleanest power solution for indoor or lab
            testing. For field deployment, battery backup (UPS) is recommended.</p>
          <h2 id="power-failure-handling">Power Failure Handling</h2>
          <ul>
            <li>The system should detect power loss and perform a graceful shutdown if possible</li>
            <li>A UPS (uninterruptible power supply) or supercapacitor can provide brief holdover power for
              safe database closure</li>
            <li>Data written before the power failure is preserved; data during the outage is lost</li>
          </ul>
          <hr />
          <p><em>See also: <Link to="/03-hardware/analog-front-end">Analog Front End</Link> | <Link to="/03-hardware/hardware-overview">Hardware Overview</Link></em></p>
        </article>
      </div>

    </main>
  );
}