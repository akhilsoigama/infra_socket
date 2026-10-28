import { Link } from 'react-router-dom';

export default function Page13ResearchTechnicalAssumptions() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Research</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Technical Assumptions</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Technical Assumptions</h1>
    <h2 id="documented-assumptions">Documented Assumptions</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Assumption</th>
          <th>Impact</th>
          <th>Mitigation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>A-01</td>
          <td>Deployment site has basic wind protection (not fully exposed hilltop)</td>
          <td>Wind-noise performance depends on site</td>
          <td>Site survey before deployment</td>
        </tr>
        <tr>
          <td>A-02</td>
          <td>Stable mains power is available</td>
          <td>Required for continuous operation</td>
          <td>UPS for critical deployments</td>
        </tr>
        <tr>
          <td>A-03</td>
          <td>Network connectivity available for dashboard/alerts</td>
          <td>Required for remote access</td>
          <td>Local operation possible without network</td>
        </tr>
        <tr>
          <td>A-04</td>
          <td>Ambient temperature range is moderate (0–45°C) for electronics</td>
          <td>Extreme temperatures may affect performance</td>
          <td>Thermal insulation; temperature monitoring</td>
        </tr>
        <tr>
          <td>A-05</td>
          <td>Baseline data collection period is representative of normal conditions</td>
          <td>Directly affects AI model quality</td>
          <td>Collect over multiple days; include diurnal variation</td>
        </tr>
        <tr>
          <td>A-06</td>
          <td>No strong local vibration sources (machinery, traffic) nearby</td>
          <td>Vibration contamination degrades data quality</td>
          <td>Site survey; vibration isolation</td>
        </tr>
        <tr>
          <td>A-07</td>
          <td>MEMS differential pressure sensors can respond to sub-hertz frequencies</td>
          <td>Core sensor selection assumption</td>
          <td>Validate with actual sensor testing</td>
        </tr>
        <tr>
          <td>A-08</td>
          <td>Isolation Forest is effective for infrasound anomaly detection</td>
          <td>Core AI assumption</td>
          <td>Validate with controlled test signals</td>
        </tr>
        <tr>
          <td>A-09</td>
          <td>A 50 Hz sampling rate is sufficient</td>
          <td>Nyquist criterion for 20 Hz signals</td>
          <td>Can increase if needed</td>
        </tr>
        <tr>
          <td>A-10</td>
          <td>A prototype-scale manifold (1–5 m) provides measurable noise reduction</td>
          <td>Core hardware assumption</td>
          <td>Measure with and without manifold</td>
        </tr>
        <tr>
          <td>A-11</td>
          <td>Controlled test signals adequately simulate real anomalies for testing</td>
          <td>Testing validity</td>
          <td>Supplement with public datasets when available</td>
        </tr>
        <tr>
          <td>A-12</td>
          <td>The reference chamber time constant can be tuned to achieve ~0.01 Hz corner
            frequency</td>
          <td>Lower frequency limit</td>
          <td>Experimental tuning required</td>
        </tr>
        <tr>
          <td>A-13</td>
          <td>SQLite is adequate for the prototype's data storage needs</td>
          <td>Database selection</td>
          <td>Upgrade to PostgreSQL if needed</td>
        </tr>
      </tbody>
    </table>
    <hr />
    <p><em>See also: <Link to="/13-research/background">Background</Link> | <Link to="/01-overview/scope-and-limitations">Scope and Limitations</Link></em></p>
  </article>
</div>

    </main>
  );
}