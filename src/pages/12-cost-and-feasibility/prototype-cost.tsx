import { Link } from 'react-router-dom';

export default function Page12CostAndFeasibilityPrototypeCost() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Cost &amp; Feasibility</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Prototype Cost</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Prototype Cost</h1>
    <h2 id="cost-estimation-approach">Cost Estimation Approach</h2>
    <p>The prototype cost is estimated by category. Exact prices are not fabricated — ranges are
      provided based on typical component costs for similar projects.</p>
    <h2 id="estimated-ranges">Estimated Ranges</h2>
    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>Estimated Cost Range</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Sensor + reference chamber + capillary</td>
          <td><code>To be determined after component selection</code></td>
        </tr>
        <tr>
          <td>Electronic components (amplifier, filter, passives)</td>
          <td>Low</td>
        </tr>
        <tr>
          <td>ADC module</td>
          <td>Low–Medium</td>
        </tr>
        <tr>
          <td>Microcontroller / DAQ board</td>
          <td>Medium</td>
        </tr>
        <tr>
          <td>Wind-noise manifold materials</td>
          <td>Low</td>
        </tr>
        <tr>
          <td>Enclosure + mounting</td>
          <td>Low–Medium</td>
        </tr>
        <tr>
          <td>Power supply</td>
          <td>Low</td>
        </tr>
        <tr>
          <td>Edge computer (Raspberry Pi or equivalent)</td>
          <td>Medium</td>
        </tr>
        <tr>
          <td>Miscellaneous (wiring, tools consumed)</td>
          <td>Low</td>
        </tr>
      </tbody>
    </table>
    <h2 id="cost-reduction-options">Cost Reduction Options</h2>
    <ul>
      <li>Use team members' laptops instead of purchasing an SBC</li>
      <li>Use breadboard instead of custom PCB</li>
      <li>Source components from educational/maker discounts</li>
      <li>Use 3D printing for custom mechanical parts if available</li>
      <li>Leverage hackathon/sponsor hardware provisions</li>
    </ul>
    <h2 id="budget-planning-template">Budget Planning Template</h2>
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Qty</th>
          <th>Unit Cost</th>
          <th>Total</th>
          <th>Source</th>
          <th>Purchased?</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><em>Component name</em></td>
          <td>___</td>
          <td>___</td>
          <td>___</td>
          <td>___</td>
          <td>☐</td>
        </tr>
        <tr>
          <td><em>Component name</em></td>
          <td>___</td>
          <td>___</td>
          <td>___</td>
          <td>___</td>
          <td>☐</td>
        </tr>
        <tr>
          <td><strong>TOTAL</strong></td>
          <td />
          <td />
          <td><strong>___</strong></td>
          <td />
          <td />
        </tr>
      </tbody>
    </table>
    <hr />
    <p><em>See also: <Link to="/12-cost-and-feasibility/bill-of-materials">Bill of Materials</Link> | <Link to="/12-cost-and-feasibility/cost-optimization">Cost Optimization</Link></em></p>
  </article>
</div>

    </main>
  );
}