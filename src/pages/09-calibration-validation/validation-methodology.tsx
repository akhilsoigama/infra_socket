import { Link } from 'react-router-dom';

export default function Page09CalibrationValidationValidationMethodology() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Calibration &amp; Validation</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Validation Methodology</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Validation Methodology</h1>
    <h2 id="approach">Approach</h2>
    <p>Validation screens for that the system meets its stated objectives and behaves as documented. It
      is broader than individual calibration tests — it assesses the system as a whole.</p>
    <h2 id="validation-levels">Validation Levels</h2>
    <h3 id="level-1-component-validation">Level 1: Component Validation</h3>
    <p>Each hardware and software component is tested individually (see <Link to="/08-testing/testing-strategy">Testing Strategy</Link>).</p>
    <h3 id="level-2-integration-validation">Level 2: Integration Validation</h3>
    <p>The complete pipeline is tested end-to-end (see <Link to="/08-testing/integration-testing">Integration Testing</Link>).</p>
    <h3 id="level-3-environmental-validation">Level 3: Environmental Validation</h3>
    <p>The system is tested under realistic conditions (see <Link to="/08-testing/environmental-testing">Environmental Testing</Link>).</p>
    <h3 id="level-4-reference-comparison-future-scope-">Level 4: Reference Comparison
      (<code>Future Scope</code>)</h3>
    <p>The prototype's output is compared against a calibrated reference instrument deployed at the same
      location.</p>
    <h2 id="validation-matrix">Validation Matrix</h2>
    <table>
      <thead>
        <tr>
          <th>Parameter</th>
          <th>Target/Requirement</th>
          <th>Measurement Method</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Frequency response</td>
          <td>0.01–20 Hz (TARGET - Pending experimental validation) target</td>
          <td>Controlled frequency/pressure test</td>
          <td>To validate</td>
        </tr>
        <tr>
          <td>Sampling</td>
          <td>Suitable for 20 Hz upper band</td>
          <td>ADC test</td>
          <td>To validate</td>
        </tr>
        <tr>
          <td>Noise floor</td>
          <td>Experimentally measured</td>
          <td>Quiet-environment recording</td>
          <td>Pending</td>
        </tr>
        <tr>
          <td>Sensitivity</td>
          <td>V/Pa or Pa/count</td>
          <td>Reference pressure test</td>
          <td>Pending</td>
        </tr>
        <tr>
          <td>Wind-noise attenuation</td>
          <td>Experimentally measured</td>
          <td>Controlled wind comparison</td>
          <td>Pending</td>
        </tr>
        <tr>
          <td>Temperature drift</td>
          <td>Measured over temperature range</td>
          <td>Environmental test</td>
          <td>Pending</td>
        </tr>
        <tr>
          <td>AI precision</td>
          <td>Experimentally measured</td>
          <td>Held-out validation set</td>
          <td>Pending</td>
        </tr>
        <tr>
          <td>False-positive rate</td>
          <td>Experimentally measured</td>
          <td>Normal environmental dataset</td>
          <td>Pending</td>
        </tr>
        <tr>
          <td>Stability</td>
          <td>Long-duration test</td>
          <td>24h/72h recording</td>
          <td>Pending</td>
        </tr>
      </tbody>
    </table>

    <h2 id="proposed-wind-noise-validation-plan">Proposed Comparative Experimental Validation Plan (Wind-Noise Reduction)</h2>
    <p>
      Informed by the co-located sensor methodology established by <strong>Sandia National Laboratories (Albert, Pankow, &amp; Berg, 2021; SAND2021-10136)</strong>, InfraSocket outlines a rigorous comparative experimental validation plan to evaluate pneumatic wind noise filters. This plan establishes empirical protocols to quantify both noise attenuation and signal preservation before finalizing any inlet hardware.
    </p>

    <blockquote>
      <p><strong>Status: PROPOSED VALIDATION PLAN.</strong> The tests detailed below are engineering protocols planned for execution. No experimental results, attenuation numbers, or response curves are fabricated. Results will be published on the <Link to="/09-calibration-validation/experimental-results">Experimental Results</Link> page once physically conducted.</p>
    </blockquote>

    <h3 id="test-configurations">Test Configurations Under Evaluation</h3>
    <ol>
      <li><strong>Bare Sensor Baseline Reference:</strong> Amphenol DLVR sensor connected to atmospheric port with standard protective shroud (no external spatial manifold) to establish baseline environmental and turbulence noise.</li>
      <li><strong>InfraSocket 4-Port Manifold:</strong> Symmetrical 4-port spatial averaging manifold (1–2 m radial arms) with discrete perimeter inlets.</li>
      <li><strong>Porous Hose Configuration:</strong> 4-port central hub connected to flexible porous soaker hose segments (evaluating spatial line-averaging).</li>
      <li><strong>Metal/Fabric Mesh Dome Configuration (Optional/Roadmap):</strong> Enclosing sensor in permeable wire mesh or synthetic fabric dome if a physical prototype unit is available.</li>
    </ol>

    <h3 id="experimental-test-matrix">Comparative Experimental Test Protocols</h3>
    <ul>
      <li><strong>Bare Sensor Baseline Measurement:</strong> Continuous co-located recording to establish unmitigated boundary layer turbulence across diurnal cycles.</li>
      <li><strong>Wind-Condition Binned PSD Comparison:</strong> Synchronized ultrasonic or cup anemometer wind speed logging resampled to match PSD intervals. Spectral power is binned into standardized velocity brackets (0–0.5, 1–1.5, 2–2.5, 3–3.5, 4–4.5, 5–5.5+ m/s) to isolate wind-induced dynamic noise from ambient acoustics.</li>
      <li><strong>Welch Spectral Estimation:</strong> Welch PSD estimation using Hann windowing and 50% overlap. Reference benchmark runs evaluate extended windows (multi-minute averages), compared against rolling edge windowing (2048 samples at 100 Hz).</li>
      <li><strong>Signal Amplitude &amp; Waveform Preservation:</strong> Controlled acoustic test signals (e.g., low-frequency subwoofer sweep or calibrated repeatable pressure pulse) to evaluate whether the pneumatic filter alters transient peak amplitude, impulse rise time, or RMS energy.</li>
      <li><strong>Frequency-Response Comparison (Transfer Function):</strong> Ratio of filtered spectrum to bare sensor spectrum across 0.01–20 Hz to detect passband attenuation, artificial amplification, or acoustic tube resonances.</li>
      <li><strong>Repeatability Testing:</strong> Repeated test runs across multiple days, atmospheric temperatures (0–40°C), and varying wind directions to verify measurement consistency.</li>
      <li><strong>Environmental Durability Assessment:</strong> Long-term outdoor exposure (weeks to months) to assess pore clogging from precipitation, dust/silt accumulation, UV embrittlement, and biological/animal interference.</li>
    </ul>

    <h3 id="evaluation-parameters">Evaluation Parameters Matrix</h3>
    <table>
      <thead>
        <tr>
          <th>Parameter</th>
          <th>Purpose &amp; Method</th>
          <th>Validation Target</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Mean PSD</strong></td>
          <td>Compare background spectral power across frequency bins (Pa²/Hz)</td>
          <td>Quantify baseline noise floor under quiet vs. turbulent conditions</td>
        </tr>
        <tr>
          <td><strong>Noise reduction (dB)</strong></td>
          <td>Quantify relative decibel noise reduction: <span className="font-mono">10 log10(PSD_bare / PSD_filter)</span></td>
          <td>Measure frequency-dependent attenuation across 0.01–20 Hz</td>
        </tr>
        <tr>
          <td><strong>Signal amplitude</strong></td>
          <td>Evaluate waveform preservation using controlled acoustic reference pulses</td>
          <td>Verify that noise reduction does not attenuate target infrasound amplitude</td>
        </tr>
        <tr>
          <td><strong>Frequency response</strong></td>
          <td>Identify passband attenuation, high-frequency rolloff, or resonant amplification</td>
          <td>Flat transfer function (&plusmn;3 dB) across stated operating band</td>
        </tr>
        <tr>
          <td><strong>SNR</strong></td>
          <td>Assess useful signal quality: <span className="font-mono">10 log10(P_signal / P_noise)</span></td>
          <td>Demonstrate measurable SNR gain under moderate wind (&gt; 3 m/s)</td>
        </tr>
        <tr>
          <td><strong>Repeatability</strong></td>
          <td>Evaluate consistency across repeated trials, wind directions, and diurnal cycles</td>
          <td>Statistical variance across trials &lt; 1.5 dB</td>
        </tr>
        <tr>
          <td><strong>Environmental stability</strong></td>
          <td>Assess long-term physical suitability against rain, UV, and physical aging</td>
          <td>Zero pore clogging or response degradation after multi-week exposure</td>
        </tr>
      </tbody>
    </table>
    <h2 id="limitations-of-validation">Limitations of Validation</h2>
    <ul>
      <li>Without a reference instrument, absolute accuracy cannot be verified</li>
      <li>Environmental validation depends on weather conditions during the test period</li>
      <li>AI validation depends on the quality and representativeness of the baseline data</li>
      <li>A single prototype at a single location provides limited statistical evidence</li>
    </ul>
    <hr />
    <p><em>See also: <Link to="/09-calibration-validation/calibration-plan">Calibration Plan</Link> | <Link to="/08-testing/testing-strategy">Testing Strategy</Link></em></p>
  </article>
</div>

    </main>
  );
}