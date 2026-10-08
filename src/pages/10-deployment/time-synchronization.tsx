import { Link } from 'react-router-dom';

export default function Page10DeploymentTimeSynchronization() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <p className="breadcrumb"><Link to="/">Home</Link> / Deployment / Time Synchronization</p>
  <details className="mobile-nav"><summary>Documentation navigation</summary><p><Link to="/10-deployment/deployment-overview">Deployment</Link> · <Link to="/10-deployment/monitoring">Monitoring</Link> · <Link to="/02-system-architecture/data-flow">Data Flow</Link></p></details>
  <h1>Time Synchronization</h1>
  <p className="lede">Measurement timestamps should describe when acquisition occurred, not when a network packet happened to arrive. Clock accuracy and inter-node alignment are requirements to implement and measure, not established InfraSocket performance.</p>
  <p><span className="status status-pending">PENDING VALIDATION</span> No timestamp-accuracy or synchronization measurements were found in the inspected project sources.</p>
  <h2>Acquisition and data path</h2>
  <div className="table-wrap"><pre><code>Pressure sensor{"\n"}{"      "}↓{"\n"}ADC / acquisition{"\n"}{"      "}↓{"\n"}Timestamp as close to sample acquisition as practical{"\n"}{"      "}↓{"\n"}MCU / node (ESP32 is a candidate, not a confirmed selection){"\n"}{"   "}↙{"                         "}↘{"\n"}Local storage / buffer{"       "}Wi-Fi telemetry and upload{"\n"}{"                                  "}↓{"\n"}{"                           "}Central server / database{"\n"}{"                                  "}↓{"\n"}{"                           "}Processing and dashboard{"\n"}{"                                  "}↓{"\n"}{"                           "}Multi-node comparison (future)</code></pre></div>
  <p>For sampled data, preserve the acquisition clock basis and sample timing metadata. Server packet-arrival time may be retained as transport metadata, but must not replace the primary measurement timestamp.</p>
  <h2>Synchronization options</h2>
  <div className="table-wrap"><table>
      <thead><tr><th>Approach</th><th>Role</th><th>Status / limitation</th></tr></thead>
      <tbody>
        <tr><td>NTP / SNTP</td><td>Network time synchronization for a connected prototype node.</td><td><span className="status status-candidate">CANDIDATE</span> Accuracy depends on implementation, network path, polling, and oscillator behavior; no achieved accuracy is documented.</td></tr>
        <tr><td>RTC</td><td>Maintain local wall-clock time when the network is unavailable.</td><td><span className="status status-candidate">CANDIDATE</span> Device/model, holdover drift, and timestamp integration are TBD.</td></tr>
        <tr><td>GNSS + PPS</td><td>Potential higher-accuracy timing reference for advanced sensor nodes.</td><td><span className="status status-future">FUTURE</span> Requires receiver/PPS integration and measured offset/jitter.</td></tr>
        <tr><td>Multi-node alignment</td><td>Compare signals across stations using acquisition timestamps and known clock uncertainty.</td><td><span className="status status-future">FUTURE</span> No synchronized multi-node implementation or validation is documented.</td></tr>
      </tbody>
    </table></div>
  <h2>Validation requirements</h2>
  <ul>
    <li>Record timestamp source, clock state, synchronization events, and clock resets with the data.</li>
    <li>Measure offset and drift against a traceable reference over the expected operating duration and temperature range.</li>
    <li>Repeat with network loss, recovery, and store-and-forward upload; preserve acquisition time separately from upload time.</li>
    <li>For multi-node use, report relative offset/jitter and verify it against the analysis method’s timing needs before interpreting cross-correlation or direction.</li>
  </ul>
  <p>See <Link to="/09-calibration-validation/engineering-claims-evidence">Engineering Claims &amp; Evidence</Link> for timestamp evidence requirements.</p>
  <footer>Do not claim precision synchronization until offset, drift, and holdover have been measured on the actual node.</footer>
</div>

    </main>
  );
}