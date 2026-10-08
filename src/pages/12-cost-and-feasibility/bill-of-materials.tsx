import { Link } from 'react-router-dom';

export default function Page12CostAndFeasibilityBillOfMaterials() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Cost &amp; Feasibility</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Bill of Materials</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Bill of Materials</h1>
    <p>See <Link to="/03-hardware/hardware-bom">Hardware BOM</Link> for the detailed component list.
    </p>
    <h2 id="cost-summary-by-category">Cost Summary by Category</h2>
    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>Components</th>
          <th>Estimated Range</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Pressure sensing</td>
          <td>Sensor, reference chamber, capillary</td>
          <td><code>To be determined</code></td>
          <td>Depends on sensor selection</td>
        </tr>
        <tr>
          <td>Electronics</td>
          <td>Amplifier, filter components, PCB</td>
          <td>Low</td>
          <td>Standard electronic components</td>
        </tr>
        <tr>
          <td>ADC</td>
          <td>External ADC module</td>
          <td><code>To be determined</code></td>
          <td>Depends on resolution requirements</td>
        </tr>
        <tr>
          <td>Microcontroller / DAQ</td>
          <td>Development board</td>
          <td>Medium</td>
          <td>Arduino, STM32, or equivalent</td>
        </tr>
        <tr>
          <td>Temperature sensor</td>
          <td>Digital I²C sensor</td>
          <td>Low</td>
          <td />
        </tr>
        <tr>
          <td>Mechanical</td>
          <td>Tubing, connectors, manifold fittings</td>
          <td>Low</td>
          <td>Hardware store components</td>
        </tr>
        <tr>
          <td>Enclosure</td>
          <td>IP-rated project box, cable glands</td>
          <td>Low–Medium</td>
          <td />
        </tr>
        <tr>
          <td>Power supply</td>
          <td>AC adapter, regulators</td>
          <td>Low</td>
          <td />
        </tr>
        <tr>
          <td>Computing</td>
          <td>Raspberry Pi or equivalent SBC</td>
          <td>Medium</td>
          <td>Optional if using laptop</td>
        </tr>
        <tr>
          <td>Miscellaneous</td>
          <td>Wiring, fasteners, insulation</td>
          <td>Low</td>
          <td />
        </tr>
      </tbody>
    </table>
    <blockquote>
      <p><strong>Important:</strong> Exact prices are not fabricated. Verify current pricing from
        suppliers before purchasing.</p>
    </blockquote>
    <hr />
    <p><em>See also: <Link to="/12-cost-and-feasibility/prototype-cost">Prototype Cost</Link> | <Link to="/03-hardware/hardware-bom">Hardware BOM</Link></em></p>
  </article>
</div>

    </main>
  );
}