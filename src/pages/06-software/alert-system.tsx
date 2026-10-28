import { Link } from 'react-router-dom';

export default function Page06SoftwareAlertSystem() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Software</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Alert System</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Alert System</h1>
    <h2 id="purpose">Purpose</h2>
    <p>The alert system notifies users when the AI anomaly detection identifies an unusual signal
      pattern.</p>
    <h2 id="alert-flow">Alert Flow</h2>
    <pre><code className="language-mermaid">flowchart TD{"\n"}{"    "}AI["AI Inference:\nNormalized Anomaly Index &gt; Threshold"] --&gt; COOL{"{"}"Cooldown\nActive?"{"}"}{"\n"}{"    "}COOL --&gt;|Yes| SKIP["Skip Alert\n(Log Only)"]{"\n"}{"    "}COOL --&gt;|No| GEN["Generate Alert\nRecord"]{"\n"}{"    "}GEN --&gt; DB["Store in\nDatabase"]{"\n"}{"    "}GEN --&gt; DASH["Push to\nDashboard"]{"\n"}{"    "}GEN --&gt; NOTIFY["Send\nNotification"]{"\n"}{"    "}NOTIFY --&gt; EMAIL["Email"]{"\n"}{"    "}NOTIFY --&gt; WEBHOOK["Webhook"]{"\n"}{"    "}NOTIFY --&gt; LOG_ALERT["System Log"]{"\n"}</code></pre>
    <h2 id="alert-record">Alert Record</h2>
    <pre><code className="language-json">{"{"}{"\n"}{"  "}"alert_id": "ALERT-20250315-104530",{"\n"}{"  "}"timestamp": "2025-03-15T10:45:30Z",{"\n"}{"  "}"sensor_id": "SENSOR-001",{"\n"}{"  "}"anomaly_index": 0.82,{"\n"}{"  "}"threshold": 0.70,{"\n"}{"  "}"severity": "HIGH",{"\n"}{"  "}"status": "NEW",{"\n"}{"  "}"window_id": "WIN-20250315-104500",{"\n"}{"  "}"acknowledged": false{"\n"}{"}"}{"\n"}</code></pre>
    <h2 id="severity-levels">Severity Levels</h2>
    <table>
      <thead>
        <tr>
          <th>Severity</th>
          <th>Score Range</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>LOW</td>
          <td>0.70–0.80</td>
          <td>Dashboard notification</td>
        </tr>
        <tr>
          <td>MEDIUM</td>
          <td>0.80–0.90</td>
          <td>Dashboard + log emphasis</td>
        </tr>
        <tr>
          <td>HIGH</td>
          <td>0.90–1.00</td>
          <td>Dashboard + external notification</td>
        </tr>
      </tbody>
    </table>
    <p><code>Assumption</code>: Severity ranges are configurable and will be calibrated based on
      experience.</p>
    <h2 id="alert-configuration">Alert Configuration</h2>
    <pre><code className="language-yaml">alerts:{"\n"}{"  "}enabled: true{"\n"}{"  "}threshold: 0.70{"\n"}{"  "}cooldown_seconds: 300{"\n"}{"  "}confirmation_windows: 1{"\n"}{"  "}channels:{"\n"}{"    "}dashboard: true{"\n"}{"    "}email: false{"        "}# Enable when SMTP is configured{"\n"}{"    "}webhook: false{"      "}# Enable when webhook URL is set{"\n"}</code></pre>
    <h2 id="alert-lifecycle">Alert Lifecycle</h2>
    <ol>
      <li><strong>NEW</strong> — Alert generated, displayed on dashboard</li>
      <li><strong>ACKNOWLEDGED</strong> — User has seen the alert</li>
      <li><strong>REVIEWED</strong> — User has investigated and marked as true positive, false
        positive, or unknown</li>
      <li><strong>ARCHIVED</strong> — Alert moved to historical archive</li>
    </ol>
    <hr />
    <p><em>See also: <Link to="/06-software/dashboard">Dashboard</Link> | <Link to="/05-ai-ml/anomaly-detection">Anomaly Detection</Link> | <Link to="/05-ai-ml/false-positive-handling">False Positive Handling</Link></em></p>
  </article>
</div>

    </main>
  );
}