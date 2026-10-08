import { Link } from 'react-router-dom';

export default function Page06SoftwareSoftwareOverview() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Software</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Software Overview</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Software Overview</h1>
    <h2 id="architecture">Architecture</h2>
    <p>The InfraSocket software stack handles data acquisition, signal processing, AI inference, data
      storage, API services, real-time visualization, and alerting.</p>
    <pre><code className="language-mermaid">flowchart TD{"\n"}{"    "}subgraph CORE["Core Services"]{"\n"}{"        "}DAQ["Data Acquisition\nService"]{"\n"}{"        "}SP["Signal Processing\nEngine"]{"\n"}{"        "}AI["AI Inference\nService"]{"\n"}{"    "}end{"\n"}{"\n"}{"    "}subgraph DATA["Data Services"]{"\n"}{"        "}DB["Database"]{"\n"}{"        "}API["REST API"]{"\n"}{"    "}end{"\n"}{"\n"}{"    "}subgraph USER_FACING["User-Facing"]{"\n"}{"        "}DASH["Web Dashboard"]{"\n"}{"        "}ALERT["Alert Service"]{"\n"}{"    "}end{"\n"}{"\n"}{"    "}subgraph INFRA["Infrastructure"]{"\n"}{"        "}CONFIG["Configuration"]{"\n"}{"        "}LOG["Logging"]{"\n"}{"        "}HEALTH["Health Monitor"]{"\n"}{"    "}end{"\n"}{"\n"}{"    "}DAQ --&gt; SP --&gt; AI{"\n"}{"    "}DAQ --&gt; DB{"\n"}{"    "}SP --&gt; DB{"\n"}{"    "}AI --&gt; DB{"\n"}{"    "}DB --&gt; API --&gt; DASH{"\n"}{"    "}AI --&gt; ALERT --&gt; DASH{"\n"}</code></pre>
    <h2 id="technology-considerations">Technology Considerations</h2>
    <p><code>Assumption</code>: The technology stack is not finalized. The following are
      technology-neutral descriptions with recommended options.</p>
    <table>
      <thead>
        <tr>
          <th>Component</th>
          <th>Recommended Options</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Language</td>
          <td>Python</td>
          <td>Rich ecosystem for signal processing (NumPy, SciPy) and ML (scikit-learn)</td>
        </tr>
        <tr>
          <td>Database</td>
          <td>SQLite (prototype) or PostgreSQL (production)</td>
          <td>SQLite is simplest for single-station deployment</td>
        </tr>
        <tr>
          <td>API framework</td>
          <td>Flask, FastAPI</td>
          <td>Lightweight Python web frameworks</td>
        </tr>
        <tr>
          <td>Dashboard</td>
          <td>Web-based (HTML/CSS/JS with charting library)</td>
          <td>Chart.js, Plotly, or similar</td>
        </tr>
        <tr>
          <td>AI library</td>
          <td>scikit-learn</td>
          <td>Isolation Forest implementation included</td>
        </tr>
        <tr>
          <td>Signal processing</td>
          <td>NumPy, SciPy</td>
          <td>FFT, filtering, windowing</td>
        </tr>
      </tbody>
    </table>
    <hr />
    <p><em>See also: <Link to="/06-software/backend">Backend</Link> | <Link to="/06-software/api-design">API Design</Link> | <Link to="/06-software/dashboard">Dashboard</Link></em></p>
  </article>
</div>

    </main>
  );
}