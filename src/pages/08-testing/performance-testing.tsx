import { Link } from 'react-router-dom';

export default function Page08TestingPerformanceTesting() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Testing</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Performance Testing</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Performance Testing</h1>
    <h2 id="tests">Tests</h2>
    <h3 id="perf-01-processing-latency">PERF-01: Processing Latency</h3>
    <p><strong>Objective:</strong> Measure time from window completion to normalized anomaly index
      output.
      <strong>Procedure:</strong> Timestamp window end and normalized anomaly index generation;
      compute difference.
      <strong>Target:</strong> &lt; 2 seconds.
    </p>
    <h3 id="perf-02-memory-usage">PERF-02: Memory Usage</h3>
    <p><strong>Objective:</strong> Verify the system operates within available memory.
      <strong>Procedure:</strong> Monitor memory usage over 24 hours.
      <strong>Target:</strong> &lt; 500 MB total (on 2 GB system).
    </p>
    <h3 id="perf-03-cpu-usage">PERF-03: CPU Usage</h3>
    <p><strong>Objective:</strong> Verify the system does not overload the CPU.
      <strong>Procedure:</strong> Monitor CPU usage over 24 hours.
      <strong>Target:</strong> &lt; 50% average on a Raspberry Pi 4 or equivalent.
    </p>
    <h3 id="perf-04-storage-growth">PERF-04: Storage Growth</h3>
    <p><strong>Objective:</strong> Verify data storage grows at the expected rate.
      <strong>Procedure:</strong> Monitor database size over 24 hours.
      <strong>Target:</strong> Matches estimates in <Link to="/07-data/data-retention">Data
        Retention</Link>.
    </p>
    <h2 id="results-template">Results Template</h2>
    <table>
      <thead>
        <tr>
          <th>Test ID</th>
          <th>Date</th>
          <th>Result</th>
          <th>Measured Value</th>
          <th>Target</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>PERF-01</td>
          <td>___</td>
          <td>___</td>
          <td>___ sec</td>
          <td>&lt; 2 sec</td>
          <td />
        </tr>
        <tr>
          <td>PERF-02</td>
          <td>___</td>
          <td>___</td>
          <td>___ MB</td>
          <td>&lt; 500 MB</td>
          <td />
        </tr>
        <tr>
          <td>PERF-03</td>
          <td>___</td>
          <td>___</td>
          <td>___ %</td>
          <td>&lt; 50%</td>
          <td />
        </tr>
        <tr>
          <td>PERF-04</td>
          <td>___</td>
          <td>___</td>
          <td>___ MB/day</td>
          <td>~10-50 MB/day</td>
          <td />
        </tr>
      </tbody>
    </table>
    <hr />
    <p><em>See also: <Link to="/08-testing/testing-strategy">Testing Strategy</Link> | <Link to="/08-testing/environmental-testing">Environmental Testing</Link></em></p>
  </article>
</div>

    </main>
  );
}