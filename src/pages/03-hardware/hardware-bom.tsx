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
          <td>Differential pressure sensor (MEMS)</td>
          <td>1</td>
          <td><code>To be determined</code></td>
          <td>Electronics distributor</td>
          <td>Selection pending; evaluate noise and frequency response</td>
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
          <td><strong>Electronics</strong></td>
          <td>Instrumentation amplifier IC</td>
          <td>1</td>
          <td>Low</td>
          <td>Electronics distributor</td>
          <td>Select for low noise, low offset</td>
        </tr>
        <tr>
          <td />
          <td>Operational amplifier (for filter)</td>
          <td>1–2</td>
          <td>Low</td>
          <td>Electronics distributor</td>
          <td>Low noise, rail-to-rail</td>
        </tr>
        <tr>
          <td />
          <td>Passive components (resistors, capacitors)</td>
          <td>Assorted</td>
          <td>Low</td>
          <td>Electronics distributor</td>
          <td>Precision resistors for gain setting</td>
        </tr>
        <tr>
          <td />
          <td>PCB / protoboard</td>
          <td>1</td>
          <td>Low</td>
          <td>Electronics distributor</td>
          <td>Custom PCB or breadboard for prototype</td>
        </tr>
        <tr>
          <td><strong>ADC</strong></td>
          <td>External ADC module (≥≥16-bit (TARGET - Final selection depends on ENOB and noise))</td>
          <td>1</td>
          <td><code>To be determined</code></td>
          <td>Electronics distributor</td>
          <td>Sigma-Delta or SAR; evaluate resolution</td>
        </tr>
        <tr>
          <td><strong>Microcontroller / DAQ</strong></td>
          <td>Microcontroller board (e.g., Arduino, STM32) or DAQ board</td>
          <td>1</td>
          <td><code>To be determined</code></td>
          <td>Electronics distributor</td>
          <td>Must support ADC interface (SPI/I²C/USB)</td>
        </tr>
        <tr>
          <td><strong>Temperature Sensor</strong></td>
          <td>Digital temperature sensor (I²C)</td>
          <td>1–2</td>
          <td>Low</td>
          <td>Electronics distributor</td>
          <td>±0.5°C accuracy typical</td>
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
          <td><strong>Power Supply</strong></td>
          <td>AC/DC adapter (12V or 5V)</td>
          <td>1</td>
          <td>Low</td>
          <td>Electronics supply</td>
          <td>Mains-powered</td>
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
          <td>Key components (SBC, ADC)</td>
        </tr>
        <tr>
          <td><code>To be determined</code></td>
          <td>Varies</td>
          <td>Requires specific component selection</td>
        </tr>
      </tbody>
    </table>
    <h2 id="total-estimated-prototype-cost">Total Estimated Prototype Cost</h2>
    <p>The total prototype cost is expected to fall in the range of a student/hackathon budget. The
      exact total depends on component selection decisions that are still pending.</p>
    <p><code>Assumption</code>: The prototype budget target is to keep total component cost practical
      for a student team. Exact total cost will be computed after component selection and sourcing.
    </p>
    <h2 id="notes">Notes</h2>
    <ol>
      <li>Costs do not include tools (soldering iron, multimeter, etc.) which are assumed to be
        available</li>
      <li>Costs do not include the processing computer if a team member's laptop is used instead of a
        Raspberry Pi</li>
      <li>Prices should be verified at the time of purchase from current supplier listings</li>
      <li>Bulk purchasing or sponsor support may reduce costs</li>
    </ol>
    <hr />
    <p><em>See also: <Link to="/03-hardware/hardware-overview">Hardware Overview</Link> | <Link to="/12-cost-and-feasibility/bill-of-materials">Bill of Materials</Link> | <Link to="/12-cost-and-feasibility/prototype-cost">Prototype Cost</Link></em></p>
  </article>
</div>

    </main>
  );
}