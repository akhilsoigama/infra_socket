import { Link } from 'react-router-dom';

export default function Page12CostAndFeasibilityScalability() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Cost &amp; Feasibility</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Scalability</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Scalability</h1>
    <h2 id="scaling-dimensions">Scaling Dimensions</h2>
    <table>
      <thead>
        <tr>
          <th>Dimension</th>
          <th>Current (MVP)</th>
          <th>Scaled (<code>Future Scope</code>)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Sensors</td>
          <td>1</td>
          <td>Multiple (5–50+)</td>
        </tr>
        <tr>
          <td>Processing</td>
          <td>Single edge computer</td>
          <td>Central server + edge nodes</td>
        </tr>
        <tr>
          <td>Storage</td>
          <td>Local SQLite</td>
          <td>PostgreSQL or time-series DB</td>
        </tr>
        <tr>
          <td>Dashboard</td>
          <td>Single station view</td>
          <td>Multi-station map view</td>
        </tr>
        <tr>
          <td>AI</td>
          <td>Single Isolation Forest</td>
          <td>Ensemble models, deep learning</td>
        </tr>
        <tr>
          <td>Network</td>
          <td>Local</td>
          <td>Distributed, internet-connected</td>
        </tr>
      </tbody>
    </table>
    <h2 id="scaling-challenges">Scaling Challenges</h2>
    <ol>
      <li><strong>Data volume:</strong> Multiple sensors at 50 Hz each generate significant data</li>
      <li><strong>Synchronization:</strong> Array processing requires tightly synchronized clocks</li>
      <li><strong>Networking:</strong> Remote sensors need reliable connectivity</li>
      <li><strong>Model management:</strong> Different sites may need different baselines</li>
      <li><strong>Infrastructure:</strong> Central server, database, and networking add complexity and
        cost</li>
    </ol>
    <h2 id="scaling-approach">Scaling Approach</h2>
    <pre><code className="language-mermaid">flowchart LR{"\n"}{"    "}MVP["Single Station\n(Edge Processing)"] --&gt; MULTI["Multiple Stations\n(Edge + Central)"] --&gt; NETWORK["Station Network\n(Cloud Infrastructure)"]{"\n"}</code></pre>
    <p>Each scaling step adds capability but also complexity and cost.</p>
    <hr />
    <p><em>See also: <Link to="/12-cost-and-feasibility/cost-optimization">Cost Optimization</Link> | <Link to="/16-roadmap/future-scope">Future Scope</Link></em></p>
  </article>
</div>

    </main>
  );
}