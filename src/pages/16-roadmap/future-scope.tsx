import { Link } from 'react-router-dom';

export default function Page16RoadmapFutureScope() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Roadmap</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Future Scope</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Future Scope</h1>
    <h2 id="planned-phases">Planned Phases</h2>
    <pre><code className="language-mermaid">gantt{"\n"}{"    "}title InfraSocket Development Roadmap{"\n"}{"    "}dateFormat YYYY-MM{"\n"}{"    "}axisFormat %b %Y{"\n"}{"\n"}{"    "}section Phase 1 (MVP){"\n"}{"        "}Hardware prototype{"        "}:done, p1a, 2025-01, 2025-03{"\n"}{"        "}Signal processing{"         "}:done, p1b, 2025-02, 2025-03{"\n"}{"        "}Isolation Forest{"          "}:done, p1c, 2025-02, 2025-04{"\n"}{"        "}Web dashboard{"             "}:done, p1d, 2025-03, 2025-04{"\n"}{"        "}Calibration &amp; testing{"     "}:active, p1e, 2025-03, 2025-05{"\n"}{"\n"}{"    "}section Phase 2{"\n"}{"        "}Improved manifold{"          "}:p2a, 2025-05, 2025-07{"\n"}{"        "}Multi-model ensemble{"       "}:p2b, 2025-05, 2025-08{"\n"}{"        "}Long-duration validation{"   "}:p2c, 2025-06, 2025-09{"\n"}{"\n"}{"    "}section Phase 3{"\n"}{"        "}Multi-sensor array{"         "}:p3a, 2025-08, 2025-12{"\n"}{"        "}Event classification{"       "}:p3b, 2025-09, 2026-03{"\n"}{"        "}Deep learning{"              "}:p3c, 2025-10, 2026-03{"\n"}{"\n"}{"    "}section Phase 4{"\n"}{"        "}Station network{"            "}:p4a, 2026-01, 2026-06{"\n"}{"        "}Cloud infrastructure{"       "}:p4b, 2026-02, 2026-08{"\n"}{"        "}Community deployment{"       "}:p4c, 2026-06, 2026-12{"\n"}</code></pre>
    <p><code>Assumption</code>: This roadmap is aspirational. Timelines depend on available resources,
      team availability, and research progress.</p>
    <h2 id="phase-2-improved-performance">Phase 2: Improved Performance</h2>
    <ul>
      <li>Larger wind-noise manifold with more inlets</li>
      <li>Ensemble anomaly detection (Isolation Forest + Local Outlier Factor + One-Class SVM)</li>
      <li>Extended field validation over weeks/months</li>
      <li>Temperature compensation for sensor drift</li>
      <li>Improved dashboard with historical analysis tools</li>
    </ul>
    <h2 id="phase-3-advanced-capabilities">Phase 3: Advanced Capabilities</h2>
    <ul>
      <li><strong>Multi-sensor array:</strong> Deploy 3+ sensors in an array for source direction
        estimation</li>
      <li><strong>Event classification:</strong> Train supervised models on labeled infrasound
        datasets to classify anomalies by type (storm-like, explosion-like, etc.)</li>
      <li><strong>Deep learning:</strong> Use Convolutional Neural Networks (CNNs) on spectrogram
        images for pattern recognition</li>
      <li><strong>Array processing:</strong> Cross-correlation methods (PMCC-like) for signal
        detection and azimuth estimation</li>
    </ul>
    <h2 id="phase-4-network-and-scale">Phase 4: Network and Scale</h2>
    <ul>
      <li><strong>Multi-station network:</strong> Deploy stations at multiple locations reporting to a
        central server</li>
      <li><strong>Cloud processing:</strong> Move heavy computation (deep learning, batch analysis) to
        cloud infrastructure</li>
      <li><strong>Community deployment:</strong> Provide build guides, kits, and software for other
        groups to deploy their own stations</li>
      <li><strong>Open data:</strong> Share anonymized infrasound data for community research</li>
    </ul>
    <h2 id="technology-evolution">Technology Evolution</h2>
    <table>
      <thead>
        <tr>
          <th>Capability</th>
          <th>MVP</th>
          <th>Phase 2</th>
          <th>Phase 3</th>
          <th>Phase 4</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Sensors</td>
          <td>1</td>
          <td>1 (improved)</td>
          <td>3–8 (array)</td>
          <td>Multiple stations</td>
        </tr>
        <tr>
          <td>AI</td>
          <td>Isolation Forest</td>
          <td>Ensemble</td>
          <td>Classification + DL</td>
          <td>Distributed inference</td>
        </tr>
        <tr>
          <td>Dashboard</td>
          <td>Single station</td>
          <td>Enhanced</td>
          <td>Array visualization</td>
          <td>Network map</td>
        </tr>
        <tr>
          <td>Alerts</td>
          <td>Dashboard</td>
          <td>Dashboard + email</td>
          <td>Multi-level</td>
          <td>Global</td>
        </tr>
        <tr>
          <td>Data</td>
          <td>Local SQLite</td>
          <td>Local PostgreSQL</td>
          <td>Central DB</td>
          <td>Cloud + distributed</td>
        </tr>
      </tbody>
    </table>
    <hr />
    <p><em>See also: <Link to="/16-roadmap/phase-plan">Phase Plan</Link> | <Link to="/16-roadmap/contribution-guide">Contribution Guide</Link></em></p>
  </article>
</div>

    </main>
  );
}