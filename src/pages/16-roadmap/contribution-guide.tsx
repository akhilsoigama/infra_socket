import { Link } from 'react-router-dom';

export default function Page16RoadmapContributionGuide() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Roadmap</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Contribution Guide</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Contribution Guide</h1>
    <h2 id="how-to-contribute">How to Contribute</h2>
    <h3 id="getting-started">Getting Started</h3>
    <ol>
      <li>Read the <Link to="/01-overview/problem-statement">Overview</Link> to understand the
        project</li>
      <li>Read the <Link to="/02-system-architecture/system-overview">System Architecture</Link> to
        understand the design</li>
      <li>Review the <Link to="/16-roadmap/future-scope">Future Scope</Link> to identify areas for contribution
      </li>
    </ol>
    <h3 id="areas-open-for-contribution">Areas Open for Contribution</h3>
    <table>
      <thead>
        <tr>
          <th>Area</th>
          <th>Skills Needed</th>
          <th>Priority</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Sensor characterization</td>
          <td>Electronics, testing</td>
          <td>High</td>
        </tr>
        <tr>
          <td>Wind-noise manifold optimization</td>
          <td>Mechanical, fluid dynamics</td>
          <td>High</td>
        </tr>
        <tr>
          <td>Signal processing improvements</td>
          <td>DSP, Python</td>
          <td>Medium</td>
        </tr>
        <tr>
          <td>Additional AI models</td>
          <td>ML, Python</td>
          <td>Medium</td>
        </tr>
        <tr>
          <td>Dashboard enhancements</td>
          <td>Web development, JS</td>
          <td>Medium</td>
        </tr>
        <tr>
          <td>Menu improvements</td>
          <td>Technical writing</td>
          <td>Medium</td>
        </tr>
        <tr>
          <td>Multi-sensor array</td>
          <td>Electronics, DSP</td>
          <td>Low (Phase 3)</td>
        </tr>
        <tr>
          <td>Mobile app</td>
          <td>Mobile development</td>
          <td>Low (Phase 4)</td>
        </tr>
      </tbody>
    </table>
    <h3 id="contribution-workflow">Contribution Workflow</h3>
    <ol>
      <li>Discuss proposed changes before starting work</li>
      <li>Follow the existing Menu style and conventions</li>
      <li>Mark assumptions with <code>Assumption</code> and future scope with
        <code>Future Scope</code>
      </li>
      <li>Test changes thoroughly</li>
      <li>Update Menu to reflect changes</li>
      <li>Submit for review</li>
    </ol>
    <h3 id="Menu-conventions">Menu Conventions</h3>
    <ul>
      <li>All Menu in Markdown format</li>
      <li>Use Mermaid diagrams for flowcharts and architecture</li>
      <li>Use tables for structured data</li>
      <li>Mark assumptions clearly</li>
      <li>Do not fabricate performance numbers</li>
      <li>Distinguish between prototype and production capabilities</li>
    </ul>
    <hr />
    <p><em>See also: <Link to="/16-roadmap/future-scope">Future Scope</Link> | <Link to="/16-roadmap/phase-plan">Phase
          Plan</Link></em></p>
  </article>
</div>

    </main>
  );
}