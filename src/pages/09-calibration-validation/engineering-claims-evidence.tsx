import { Link } from 'react-router-dom';

export default function Page09CalibrationValidationEngineeringClaimsEvidence() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <p className="breadcrumb"><Link to="/">Home</Link> / Calibration &amp; Validation / Engineering Claims &amp; Evidence</p>
  <details className="mobile-nav"><summary>Documentation navigation</summary><p><Link to="/01-overview/project-status">Project Status</Link> · <Link to="/09-calibration-validation/experimental-results">Experimental Results</Link> · <Link to="/09-calibration-validation/calibration-plan">Calibration Plan</Link></p></details>
  <h1>Engineering Claims &amp; Evidence</h1>
  <p className="lede">Claims about instrument performance must be linked to a reproducible measurement or implementation artifact. This matrix records the minimum evidence needed; a design target is not a result.</p>
  <div className="callout"><strong>Audit rule:</strong> No numerical performance measurements were found in the inspected documentation workspace. “TBD” means evidence is absent here, not that the instrument has zero performance.</div>
  <div className="table-wrap"><table>
      <thead><tr><th>Claim</th><th>Evidence required</th><th>Current evidence in this workspace</th><th>Status</th></tr></thead>
      <tbody>
        <tr><td>Complete response over approximately 0.01–20 Hz</td><td>Calibrated pressure stimulus and frequency sweep across the stated band; report amplitude and phase, setup, uncertainty, and repeatability.</td><td>No measured response plot or test record found.</td><td><span className="status status-pending">PENDING VALIDATION</span></td></tr>
        <tr><td>Pressure sensitivity</td><td>Known pressure steps or calibrated sinusoidal pressure; electrical/digital output versus pressure; fit, uncertainty, and repeatability.</td><td>Final sensor model and calibration data are not documented.</td><td><span className="status status-pending">PENDING VALIDATION</span></td></tr>
        <tr><td>System noise floor</td><td>Quiet/reference input test with duration, sample rate, bandwidth, configuration, environmental conditions, PSD method, and units.</td><td>No measured noise spectrum or noise-floor value found.</td><td><span className="status status-pending">PENDING VALIDATION</span></td></tr>
        <tr><td>Wind-noise reduction</td><td>Controlled paired comparison with and without the actual WNRS, recorded wind speed/direction, geometry, frequency-dependent method, and repeated trials.</td><td>Spatial-averaging concept only; no measured attenuation found.</td><td><span className="status status-pending">PENDING VALIDATION</span></td></tr>
        <tr><td>Reference-chamber cutoff and transfer</td><td>Pressure-step/equalization test and frequency-response measurement on the assembled chamber, tubing, ports, and sensor.</td><td>First-order model described; no measured time constant or cutoff found.</td><td><span className="status status-pending">PENDING VALIDATION</span></td></tr>
        <tr><td>Temperature stability / drift</td><td>Repeated calibrated measurements over documented temperatures and soak times; report drift, uncertainty, and compensation state.</td><td>No temperature-drift test results found.</td><td><span className="status status-pending">PENDING VALIDATION</span></td></tr>
        <tr><td>Real-time processing latency</td><td>Timestamped end-to-end run on identified hardware with input rate, windowing, load, latency distribution, and dropped-sample count.</td><td>Latency values in design pages are targets; no run record found.</td><td><span className="status status-pending">PENDING VALIDATION</span></td></tr>
        <tr><td>AI anomaly screening performance</td><td>Versioned dataset, leakage-safe split, baseline definition, model/configuration, metrics, false-positive analysis, and reproducible evaluation.</td><td>Isolation Forest is described as a possible method; no dataset/model evaluation found.</td><td><span className="status status-future">FUTURE</span></td></tr>
        <tr><td>Timestamp accuracy / multi-node alignment</td><td>Comparison against a traceable timing reference under network loss/recovery and across nodes; report offset and drift.</td><td>No timing accuracy test or synchronization record found.</td><td><span className="status status-pending">PENDING VALIDATION</span></td></tr>
        <tr><td>Cloud deployment or operational early warning</td><td>Deployment record, operational monitoring, validated instrument performance, defined alert semantics, and independent evaluation.</td><td>No production/cloud deployment or validated warning-system evidence found.</td><td><span className="status status-future">FUTURE</span></td></tr>
      </tbody>
    </table></div>
  <h2>Interpretation</h2>
  <p>An anomaly score is a statistical deviation from a defined baseline; it does not identify or confirm a physical event. A signal-processing pipeline or dashboard screenshot does not establish sensor sensitivity, system response, or field performance.</p>
  <p>Use the <Link to="/09-calibration-validation/experimental-results">Experimental Results</Link> page as the record for each completed measurement and the <Link to="/09-calibration-validation/calibration-plan">Calibration Plan</Link> for procedure design.</p>
  <footer>Only change a status when the supporting artifact is linked, dated, and reproducible.</footer>
</div>

    </main>
  );
}