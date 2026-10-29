import { Link } from 'react-router-dom';

export default function Page03HardwareHardwareBom() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Hardware</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Hardware Bill of Materials (BOM)</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Hardware Bill of Materials (BOM)</h1>
    <h2 id="overview">Overview</h2>
    <p>This document lists the categories of components required for the InfraSocket prototype. Exact
      costs are not fabricated — instead, estimated cost ranges are provided where possible, with
      notes for sourcing.</p>
    <blockquote>
      <p><strong>Important:</strong> Prices vary by supplier, region, and time. The costs below are
        approximate ranges intended for budget planning. Verify current pricing before purchasing.
      </p>
    </blockquote>
    <h2 id="bom-table">BOM Table</h2>
    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>Component</th>
          <th>Qty</th>
          <th>Estimated Cost Range</th>
          <th>Source</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Pressure Sensing</strong></td>
          <td>Amphenol DLVR-F50D-E1ND-C-NI3F (Differential Digital I²C)</td>
          <td>1</td>
          <td>Medium</td>
          <td>Electronics distributor (Amphenol)</td>
          <td>Selected primary sensor: calibrated digital I²C output, regulated 3.3 V supply</td>
        </tr>
        <tr>
          <td><strong>Reference Chamber</strong></td>
          <td>Airtight container (rigid, 0.5–5 L)</td>
          <td>1</td>
          <td>Low</td>
          <td>Hardware store / lab supply</td>
          <td>Glass jar, metal canister, or thick-walled PVC. Volume is an initial engineering
            range — to be experimentally optimized</td>
        </tr>
        <tr>
          <td />
          <td>Capillary tubing (0.1–0.5 mm bore)</td>
          <td>1</td>
          <td>Low</td>
          <td>Medical/lab supply</td>
          <td>Precision bore critical. Bore diameter is an initial engineering range — to be
            experimentally optimized</td>
        </tr>
        <tr>
          <td />
          <td>Tubing connectors and sealant</td>
          <td>Assorted</td>
          <td>Low</td>
          <td>Hardware store</td>
          <td>Epoxy, silicone, compression fittings</td>
        </tr>
        <tr>
          <td><strong>Wind-Noise Reduction</strong></td>
          <td>Tubing (5–15 mm diameter, 5–15 m total)</td>
          <td>1 set</td>
          <td>Low</td>
          <td>Hardware store</td>
          <td>Silicone, PVC, or copper tubing. Dimensions are initial engineering ranges — to be
            experimentally optimized</td>
        </tr>
        <tr>
          <td />
          <td>T-connectors / manifold fittings</td>
          <td>4–12</td>
          <td>Low</td>
          <td>Hardware/plumbing supply</td>
          <td>Depends on manifold design</td>
        </tr>
        <tr>
          <td />
          <td>Mesh filters for inlets</td>
          <td>4–12</td>
          <td>Low</td>
          <td>Hardware store</td>
          <td>Prevent debris and insects</td>
        </tr>
        <tr>
          <td><strong>Digital Bus Interface</strong></td>
          <td>I²C Level Shifter &amp; Pull-ups (3.3V)</td>
          <td>1</td>
          <td>Low</td>
          <td>Electronics distributor</td>
          <td>Optional bidirectional level protection / pull-up network for Raspberry Pi 5 I²C lines</td>
        </tr>
        <tr>
          <td />
          <td>Shielded I²C Wiring Harness</td>
          <td>1 set</td>
          <td>Low</td>
          <td>Electronics distributor</td>
          <td>4-wire connection (3.3V, GND, SDA, SCL) directly between DLVR-F50D and RPi 5 GPIO</td>
        </tr>
        <tr>
          <td><strong>Compute / DAQ</strong></td>
          <td>Raspberry Pi 5 Single Board Computer</td>
          <td>1</td>
          <td>Medium–High</td>
          <td>Raspberry Pi authorized distributor</td>
          <td>Selected acquisition &amp; processing platform: hardware I²C, sample timing &amp; USB telemetry</td>
        </tr>
        <tr>
          <td><strong>Temperature Sensor</strong></td>
          <td>MCP9808 Digital Temperature Sensor Breakout (I²C)</td>
          <td>1</td>
          <td>Low</td>
          <td>Electronics distributor (Microchip)</td>
          <td>Visual candidate for enclosure temperature logging and thermal characterization</td>
        </tr>
        <tr>
          <td><strong>Enclosure</strong></td>
          <td>IP65/IP66 project box</td>
          <td>1</td>
          <td>Low–Medium</td>
          <td>Electronics/industrial supply</td>
          <td>Size to fit all components</td>
        </tr>
        <tr>
          <td />
          <td>Cable glands</td>
          <td>2–4</td>
          <td>Low</td>
          <td>Electronics/industrial supply</td>
          <td>Sealed cable entry</td>
        </tr>
        <tr>
          <td />
          <td>Mounting hardware</td>
          <td>Assorted</td>
          <td>Low</td>
          <td>Hardware store</td>
          <td>Screws, brackets, standoffs</td>
        </tr>
        <tr>
          <td><strong>Power Subsystem</strong></td>
          <td>12V LiFePO4 Battery Pack + DC-DC Regulation</td>
          <td>1</td>
          <td>Medium</td>
          <td>Battery / electronics supply</td>
          <td>Clean low-noise DC source, regulated 3.3V DLVR sensor supply (3.135V–3.465V)</td>
        </tr>
        <tr>
          <td />
          <td>Linear voltage regulator</td>
          <td>1–2</td>
          <td>Low</td>
          <td>Electronics distributor</td>
          <td>For clean analog power</td>
        </tr>
        <tr>
          <td />
          <td>Decoupling capacitors</td>
          <td>Assorted</td>
          <td>Low</td>
          <td>Electronics distributor</td>
          <td>100 nF ceramic, bulk electrolytic</td>
        </tr>
        <tr>
          <td><strong>Computing</strong></td>
          <td>Edge computer (Raspberry Pi or equivalent)</td>
          <td>1</td>
          <td>Medium</td>
          <td>Electronics supply</td>
          <td>For signal processing, AI, dashboard</td>
        </tr>
        <tr>
          <td />
          <td>MicroSD card (32 GB+)</td>
          <td>1</td>
          <td>Low</td>
          <td>Electronics/general supply</td>
          <td>For OS and data storage</td>
        </tr>
        <tr>
          <td />
          <td>USB cable</td>
          <td>1</td>
          <td>Low</td>
          <td>General supply</td>
          <td>MCU to edge computer connection</td>
        </tr>
        <tr>
          <td><strong>Miscellaneous</strong></td>
          <td>Wiring, connectors, headers</td>
          <td>Assorted</td>
          <td>Low</td>
          <td>Electronics distributor</td>
          <td />
        </tr>
        <tr>
          <td />
          <td>Thermal insulation material</td>
          <td>As needed</td>
          <td>Low</td>
          <td>Hardware store</td>
          <td>Foam, reflective foil</td>
        </tr>
      </tbody>
    </table>
    <h2 id="cost-categories">Cost Categories</h2>
    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>Estimated Range</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Low</td>
          <td>Under ₹500 / $5 per item</td>
          <td>Common, widely available</td>
        </tr>
        <tr>
          <td>Low–Medium</td>
          <td>₹500–₹2,000 / $5–$25</td>
          <td>Moderate-cost items</td>
        </tr>
        <tr>
          <td>Medium</td>
          <td>₹2,000–₹5,000 / $25–$60</td>
          <td>Key components (Raspberry Pi 5, DLVR Digital Sensor)</td>
        </tr>
        <tr>
          <td><code>To be determined</code></td>
          <td>Varies</td>
          <td>Requires specific component selection</td>
        </tr>
      </tbody>
    </table>
    <h2 id="total-estimated-prototype-cost">Total Estimated Prototype Cost</h2>
    <p>The total prototype cost is engineered to remain accessible for educational and open-science research. The
      exact total depends on final casing, power pack, and component distributor selections.</p>
    <p><code>Assumption</code>: The prototype budget target is to keep total component costs significantly lower
      than institutional commercial microbarometers.
    </p>
    <h2 id="notes">Notes</h2>
    <ol>
      <li><strong>Direct Digital Architecture:</strong> The Amphenol DLVR-F50D incorporates on-die front-end conditioning and a 14/16-bit Delta-Sigma ADC. External instrumentation amplifiers, op-amp filters, and discrete ADC boards are completely eliminated, reducing component count and trace noise.</li>
      <li>Costs do not include general assembly tools (soldering station, multimeter, tubing crimpers)</li>
      <li>Processing costs account for an onboard Raspberry Pi; direct tethering to an external lab workstation via USB-UART is also supported</li>
      <li>Component pricing reflects single-quantity distributor listings and may vary with market availability</li>
      <li>Volume procurement discounts apply for multi-station sensor array fabrications</li>
    </ol>
    <hr />
    <p><em>See also: <Link to="/03-hardware/hardware-overview">Hardware Overview</Link> | <Link to="/12-cost-and-feasibility/bill-of-materials">Bill of Materials</Link> | <Link to="/12-cost-and-feasibility/prototype-cost">Prototype Cost</Link></em></p>
  </article>
</div>

    </main>
  );
}