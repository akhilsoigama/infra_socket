import { Link } from 'react-router-dom';

export default function Page12CostAndFeasibilityOperationalCost() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Cost &amp; Feasibility</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Operational Cost</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Operational Cost</h1>
    <h2 id="ongoing-costs">Ongoing Costs</h2>
    <table>
      <thead>
        <tr>
          <th>Cost Item</th>
          <th>Estimate</th>
          <th>Frequency</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Electricity (edge computer + sensor)</td>
          <td>Very low (&lt; 20W)</td>
          <td>Continuous</td>
        </tr>
        <tr>
          <td>Internet connectivity (if used)</td>
          <td>Existing connection or cellular</td>
          <td>Monthly</td>
        </tr>
        <tr>
          <td>Storage (SD card replacement)</td>
          <td>Low</td>
          <td>Annual</td>
        </tr>
        <tr>
          <td>Replacement parts</td>
          <td>Low (if components fail)</td>
          <td>As needed</td>
        </tr>
        <tr>
          <td>Cloud hosting (if used, <code>Future Scope</code>)</td>
          <td><code>To be determined</code></td>
          <td>Monthly</td>
        </tr>
      </tbody>
    </table>
    <h2 id="notes">Notes</h2>
    <ul>
      <li>The prototype is designed to be low-power and low-maintenance</li>
      <li>Primary ongoing cost is electricity and internet</li>
      <li>No software licensing costs (open-source tools)</li>
    </ul>
    <hr />
    <p><em>See also: <Link to="/12-cost-and-feasibility/prototype-cost">Prototype Cost</Link> | <Link to="/12-cost-and-feasibility/cost-optimization">Cost Optimization</Link></em></p>
  </article>
</div>

    </main>
  );
}