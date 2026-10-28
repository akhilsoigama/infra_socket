import { Link } from 'react-router-dom';

export default function Page11SecurityReliabilityReliability() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Security &amp; Reliability</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Reliability</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Reliability</h1>
    <h2 id="design-for-reliability">Design for Reliability</h2>
    <h3 id="principle-graceful-degradation">Principle: Graceful Degradation</h3>
    <p>The system is designed so that failures in higher-level components do not prevent lower-level
      components from operating:</p>
    <pre><code className="language-mermaid">flowchart TD{"\n"}{"    "}L1["Level 1: Data Acquisition\n(Most critical — must always run)"]{"\n"}{"    "}L2["Level 2: Signal Processing\n(Can restart independently)"]{"\n"}{"    "}L3["Level 3: AI Inference\n(Can fail without data loss)"]{"\n"}{"    "}L4["Level 4: Dashboard/Alerts\n(Cosmetic — data is safe in DB)"]{"\n"}{"\n"}{"    "}L1 --&gt; L2 --&gt; L3 --&gt; L4{"\n"}</code></pre>
    <table>
      <thead>
        <tr>
          <th>If This Fails...</th>
          <th>Data Acquisition</th>
          <th>Signal Processing</th>
          <th>AI</th>
          <th>Dashboard</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Dashboard</td>
          <td>✅ Continues</td>
          <td>✅ Continues</td>
          <td>✅ Continues</td>
          <td>❌ Unavailable</td>
        </tr>
        <tr>
          <td>AI inference</td>
          <td>✅ Continues</td>
          <td>✅ Continues</td>
          <td>❌ No scoring</td>
          <td>✅ Shows data (no AI)</td>
        </tr>
        <tr>
          <td>Signal processing</td>
          <td>✅ Continues</td>
          <td>❌ No features</td>
          <td>❌ No scoring</td>
          <td>⚠️ Raw data only</td>
        </tr>
        <tr>
          <td>Data acquisition</td>
          <td>❌ No data</td>
          <td>❌ No data</td>
          <td>❌ No data</td>
          <td>❌ Stale data</td>
        </tr>
      </tbody>
    </table>
    <h3 id="watchdog-and-auto-restart">Watchdog and Auto-Restart</h3>
    <p>Software services should be configured to auto-restart on failure (e.g., using systemd on Linux).
    </p>
    <h3 id="heartbeat-logging">Heartbeat Logging</h3>
    <p>Each service logs periodic heartbeat messages. If heartbeats stop, the health monitor raises an
      alert.</p>
    <hr />
    <p><em>See also: <Link to="/11-security-reliability/security">Security</Link> | <Link to="/11-security-reliability/fault-handling">Fault
          Handling</Link></em></p>
  </article>
</div>

    </main>
  );
}