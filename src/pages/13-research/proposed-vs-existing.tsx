import { Link } from 'react-router-dom';

export default function Page13ResearchProposedVsExisting() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Research</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Proposed vs Existing</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Proposed vs Existing</h1>
    <h2 id="comparison-table">Comparison Table</h2>
    <table>
      <thead>
        <tr>
          <th>Parameter</th>
          <th>Professional Monitoring Networks</th>
          <th>InfraSocket</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Deployment</td>
          <td>Large-scale infrastructure</td>
          <td>Portable/modular</td>
        </tr>
        <tr>
          <td>Cost</td>
          <td>Specialized/high</td>
          <td>Low-cost prototype objective</td>
        </tr>
        <tr>
          <td>Processing</td>
          <td>Central/network processing</td>
          <td>Local edge processing</td>
        </tr>
        <tr>
          <td>AI</td>
          <td>Existing automated processing in professional systems</td>
          <td>AI-assisted local anomaly screening</td>
        </tr>
        <tr>
          <td>Deployment Scope</td>
          <td>Global / regional networks</td>
          <td>Local / experimental / regional</td>
        </tr>
        <tr>
          <td>Sensor Array</td>
          <td>Multi-station professional arrays</td>
          <td>Single node → future multi-node</td>
        </tr>
        <tr>
          <td>Data Fusion</td>
          <td>Advanced network systems</td>
          <td>Future multi-source fusion</td>
        </tr>
        <tr>
          <td>Goal</td>
          <td>High-confidence monitoring</td>
          <td>Affordable complementary monitoring</td>
        </tr>
        <tr>
          <td>Certification</td>
          <td>Depending on system</td>
          <td>Not claimed</td>
        </tr>
        <tr>
          <td>Validation</td>
          <td>Established</td>
          <td>Prototype / to validate</td>
        </tr>
      </tbody>
    </table>
    <blockquote>
      <p>InfraSocket is not intended to replace professional monitoring infrastructure. Its goal is to
        make experimental, educational, local and regional infrasound monitoring more accessible.
      </p>
    </blockquote>
    <h2 id="where-the-prototype-adds-value">Where the Prototype Adds Value</h2>
    <ol>
      <li><strong>Accessibility:</strong> Makes infrasound monitoring available to educational and
        research groups without large budgets</li>
      <li><strong>Integrated AI:</strong> Demonstrates AI anomaly detection as part of the sensing
        system</li>
      <li><strong>Educational platform:</strong> Covers a wide range of engineering disciplines in a
        single project</li>
      <li><strong>Rapid prototyping:</strong> Modular design allows quick iteration and
        experimentation</li>
      <li><strong>Dashboard visualization:</strong> Provides immediate, visual feedback on the
        infrasound environment</li>
    </ol>
    <h2 id="where-professional-systems-are-superior">Where Professional Systems Are Superior</h2>
    <ol>
      <li><strong>Sensitivity:</strong> Orders of magnitude better noise floor</li>
      <li><strong>Wind-noise reduction:</strong> Much larger and more effective arrays</li>
      <li><strong>Source localization:</strong> Multi-sensor array processing</li>
      <li><strong>Event classification:</strong> Proven algorithms with decades of reference data</li>
      <li><strong>Reliability:</strong> Designed for years of continuous, unattended operation</li>
      <li><strong>Global coverage:</strong> Worldwide network provides comprehensive monitoring</li>
    </ol>
    <h2 id="startup-positioning-future-outlook-">Startup Positioning (Future Outlook)</h2>
    <p>InfraSocket is not intended to replace established global monitoring systems. Its potential value
      lies in providing lower-cost, portable and modular sensing nodes with local signal processing
      and AI-assisted anomaly screening for research, education, regional experimentation and selected
      monitoring applications.</p>
    <h3 id="possible-future-business-model-proposed-">Possible Future Business Model (Proposed)</h3>
    <ul>
      <li>Hardware node sales</li>
      <li>Monitoring platform subscription</li>
      <li>Analytics subscription</li>
      <li>Research/education package</li>
      <li>Monitoring-as-a-Service</li>
    </ul>
    <blockquote>
      <p><strong>Note:</strong> These business models are proposed future directions and do not
        represent existing revenue or customers.</p>
    </blockquote>
    <h3 id="scalability-architecture-proposed-">Scalability Architecture (Proposed)</h3>
    <pre><code className="language-text">Sensor Node{"\n"}{"     "}↓{"\n"}Edge Processing + AI{"\n"}{"     "}↓{"\n"}Local Dashboard{"\n"}{"     "}↓{"\n"}Optional Cloud Sync{"\n"}{"     "}↓{"\n"}Multi-Node Network{"\n"}{"     "}↓{"\n"}Analytics / Monitoring Platform{"\n"}</code></pre>
    <h3 id="potential-target-users">Potential Target Users</h3>
    <blockquote>
      <p>These are potential applications / target users — not confirmed adopters.</p>
    </blockquote>
    <ul>
      <li>Universities and educational institutions</li>
      <li>Research laboratories</li>
      <li>Environmental monitoring groups</li>
      <li>Atmospheric science researchers</li>
      <li>Industrial monitoring applications</li>
      <li>Aerospace / aviation research</li>
      <li>Government / research agencies</li>
    </ul>
    <hr />
    <p><em>See also: <Link to="/13-research/existing-solutions">Existing Solutions</Link> | <Link to="/13-research/background">Background</Link></em></p>
  </article>
</div>

    </main>
  );
}