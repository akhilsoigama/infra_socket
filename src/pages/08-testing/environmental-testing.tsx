import { Link } from 'react-router-dom';

export default function Page08TestingEnvironmentalTesting() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Testing</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Environmental Testing</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Environmental Testing</h1>
    <h2 id="tests">Tests</h2>
    <h3 id="env-01-temperature-variation">ENV-01: Temperature Variation</h3>
    <p><strong>Objective:</strong> Observe system behaviour across a range of temperatures.
      <strong>Procedure:</strong> Operate system from early morning (cool) through afternoon (warm);
      record temperature and sensor output.
      <strong>Pass criteria:</strong> System continues operating; temperature effects are documented.
    </p>
    <h3 id="env-02-wind-exposure-with-and-without-manifold-">ENV-02: Wind Exposure (With and Without
      Manifold)</h3>
    <p><strong>Objective:</strong> Quantify the benefit of the wind-noise reduction manifold.
      <strong>Procedure:</strong> Record data with a single open port, then with the full manifold
      connected. Compare RMS noise levels.
      <strong>Pass criteria:</strong> Measurable noise reduction with manifold.
    </p>
    <h3 id="env-03-rain-humidity">ENV-03: Rain/Humidity</h3>
    <p><strong>Objective:</strong> Verify the enclosure protects electronics during rain.
      <strong>Procedure:</strong> Expose system to simulated rain or deploy during actual rain.
      <strong>Pass criteria:</strong> No water ingress; system continues operating.
    </p>
    <h2 id="results-template">Results Template</h2>
    <table>
      <thead>
        <tr>
          <th>Test ID</th>
          <th>Date</th>
          <th>Result</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>ENV-01</td>
          <td>___</td>
          <td>___</td>
          <td>Temperature range: ___°C to ___°C</td>
        </tr>
        <tr>
          <td>ENV-02</td>
          <td>___</td>
          <td>___</td>
          <td>Noise reduction: ___ dB or ___×</td>
        </tr>
        <tr>
          <td>ENV-03</td>
          <td>___</td>
          <td>___</td>
          <td />
        </tr>
      </tbody>
    </table>
    <hr />
    <p><em>See also: <Link to="/08-testing/testing-strategy">Testing Strategy</Link> | <Link to="/08-testing/acceptance-criteria">Acceptance Criteria</Link></em></p>
  </article>
</div>

    </main>
  );
}