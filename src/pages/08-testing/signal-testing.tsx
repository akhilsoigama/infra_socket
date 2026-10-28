import { Link } from 'react-router-dom';

export default function Page08TestingSignalTesting() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Testing</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Signal Testing</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Signal Testing</h1>
    <h2 id="tests">Tests</h2>
    <h3 id="sig-01-known-low-frequency-signal">SIG-01: Known Low-Frequency Signal</h3>
    <p><strong>Objective:</strong> Verify the system correctly captures and processes a known signal.
      <strong>Procedure:</strong> Apply a known-frequency pressure signal (e.g., 1 Hz sine wave);
      verify FFT shows correct peak.
      <strong>Pass criteria:</strong> FFT shows peak at the applied frequency within frequency
      resolution.
    </p>
    <h3 id="sig-02-frequency-sweep">SIG-02: Frequency Sweep</h3>
    <p><strong>Objective:</strong> Verify frequency response across the target range.
      <strong>Procedure:</strong> Apply sinusoidal signals at multiple frequencies (0.1, 0.5, 1, 5,
      10, 20 Hz); measure output amplitude.
      <strong>Pass criteria:</strong> Output amplitude is documented at each frequency; response
      matches expectations.
    </p>
    <h3 id="sig-03-noise-only-recording">SIG-03: Noise-Only Recording</h3>
    <p><strong>Objective:</strong> Characterize the noise environment.
      <strong>Procedure:</strong> Record in a quiet environment with no applied signal for 30+
      minutes.
      <strong>Pass criteria:</strong> PSD shows expected noise characteristics; no unexpected spectral
      peaks.
    </p>
    <h3 id="sig-04-band-pass-filter-verification">SIG-04: Band-Pass Filter Verification</h3>
    <p><strong>Objective:</strong> Verify the digital filter correctly passes 0.01–20 Hz (TARGET - Pending experimental validation) and attenuates
      outside.
      <strong>Procedure:</strong> Inject signals at various frequencies; measure pre- and post-filter
      amplitudes.
      <strong>Pass criteria:</strong> In-band signals preserved; out-of-band signals attenuated.
    </p>
    <h3 id="sig-05-long-duration-recording">SIG-05: Long-Duration Recording</h3>
    <p><strong>Objective:</strong> Verify system stability during extended operation.
      <strong>Procedure:</strong> Record continuously for 24+ hours; check for data gaps, drift, or
      errors.
      <strong>Pass criteria:</strong> No data gaps; processing pipeline remains functional.
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
          <td>SIG-01</td>
          <td>___</td>
          <td><em>Pass/Fail</em></td>
          <td />
        </tr>
        <tr>
          <td>SIG-02</td>
          <td>___</td>
          <td><em>Pass/Fail</em></td>
          <td />
        </tr>
        <tr>
          <td>SIG-03</td>
          <td>___</td>
          <td><em>Pass/Fail</em></td>
          <td />
        </tr>
        <tr>
          <td>SIG-04</td>
          <td>___</td>
          <td><em>Pass/Fail</em></td>
          <td />
        </tr>
        <tr>
          <td>SIG-05</td>
          <td>___</td>
          <td><em>Pass/Fail</em></td>
          <td />
        </tr>
      </tbody>
    </table>
    <hr />
    <p><em>See also: <Link to="/08-testing/testing-strategy">Testing Strategy</Link> | <Link to="/04-signal-processing/signal-processing-overview">Signal Processing
          Overview</Link></em></p>
  </article>
</div>

    </main>
  );
}