import { Link } from 'react-router-dom';

export default function Page16RoadmapPhasePlan() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Roadmap</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Phase Plan</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Phase Plan</h1>
    <p><strong>Roadmap reviewed: September 2026.</strong> No completion dates are asserted without project evidence.</p>
    <h2 id="phase-1-mvp-current-">Phase 1: Documentation &amp; Architecture</h2>
    <h3 id="objective">Objective</h3>
    <p>Define the research-prototype architecture, document requirements, and separate design targets from verified results.</p>
    <h3 id="deliverables">Deliverables</h3>
    <ul>
      <li><strong>IMPLEMENTED:</strong> Static documentation portal and documented system concepts.</li>
      <li><strong>PENDING EVIDENCE:</strong> Hardware integration, acquisition software, measured performance, and live telemetry are not established by the documentation workspace.</li>
    </ul>
    <h3 id="success-criteria">Success Criteria</h3>
    <ul>
      <li>Record selected sensor, analog chain, ADC, and acquisition platform with traceable identifiers.</li>
      <li>Publish reproducible pressure calibration, frequency-response, and noise-floor measurements.</li>
      <li>Demonstrate continuous acquisition and data integrity before claiming live dashboard operation.</li>
    </ul>
    <hr />
    <h2 id="phase-2-improved-performance-future-scope-">Phase 2: Hardware Prototype &amp; Integration</h2>
    <h3 id="objective">Objective</h3>
    <p><strong>CANDIDATE / PENDING VALIDATION.</strong> Integrate a documented pressure sensor, reference chamber, WNRS, AFE, ADC, timestamping, and local acquisition path.</p>
    <h3 id="key-activities">Key Activities</h3>
    <ul>
      <li>Resolve component choices and measured interface requirements; keep unspecified values TBD.</li>
      <li>Test pressure response, sample timing, clipping, gaps, and safe local storage.</li>
      <li>Do not claim sensitivity or wind attenuation until measured against a controlled reference.</li>
    </ul>
    <hr />
    <h2 id="phase-3-advanced-capabilities-future-scope-">Phase 3: Calibration &amp; Validation</h2>
    <h3 id="objective">Objective</h3>
    <p><strong>PENDING VALIDATION.</strong> Establish traceable sensor/system response and operating limits before interpreting field signals.</p>
    <h3 id="key-activities">Key Activities</h3>
    <ul>
      <li>Run controlled pressure-step and multi-amplitude sensitivity tests.</li>
      <li>Measure frequency response, noise floor, temperature drift, repeatability, and uncertainty.</li>
      <li>Compare WNRS-on/off conditions with documented wind and installation conditions.</li>
    </ul>
    <hr />
    <h2 id="phase-4-network-deployment-future-scope-">Phase 4: Signal Processing</h2>
    <h3 id="objective">Objective</h3>
    <p><strong>TARGET.</strong> Implement and verify filtering, FFT/spectrogram analysis, feature extraction, and signal-quality checks on recorded data.</p>
    <h3 id="key-activities">Key Activities</h3>
    <ul>
      <li>Version processing settings and record the input data/configuration for every analysis.</li>
      <li>Verify filter and spectral behavior with known test signals and documented sampling settings.</li>
      <li>Report dropped samples, saturation, gaps, and other quality flags rather than hiding them.</li>
    </ul>
    <hr />
    <h2 id="phase-5-ai-ml">Phase 5: Optional AI / ML</h2>
    <p><strong>FUTURE / EXPERIMENTAL.</strong> Consider anomaly scoring only after the sensor chain, calibration, signal quality, and a representative baseline dataset are established. Anomaly detection is not event classification.</p>
    <h2 id="phase-6-time-synchronization">Phase 6: Time Synchronization &amp; Multi-Node</h2>
    <p><strong>FUTURE.</strong> Evaluate NTP/SNTP with RTC holdover for a prototype and GNSS/PPS for advanced nodes. Measure clock offset and drift before multi-node comparison.</p>
    <h2 id="phase-7-field-validation">Phase 7: Field Validation</h2>
    <p><strong>FUTURE / PENDING VALIDATION.</strong> Conduct documented field tests only after controlled laboratory checks; report environmental conditions, calibration state, and limitations.</p>
    <p><em>See also: <Link to="/16-roadmap/future-scope">Future Scope</Link> | <Link to="/16-roadmap/contribution-guide">Contribution Guide</Link></em></p>
  </article>
</div>

    </main>
  );
}