import { Link } from 'react-router-dom';

export default function Page01OverviewProjectObjectives() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Overview</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Project Objectives</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Project Objectives</h1>
    <h2 id="primary-objectives">Primary Objectives</h2>
    <h3 id="1-build-a-functional-infrasound-sensing-prototype">1. Build a Functional Infrasound Sensing
      Prototype</h3>
    <p>Design a research-prototype hardware system targeting atmospheric pressure variations in the
      approximate <strong>0.01–20 Hz (TARGET - Pending experimental validation)</strong> band. The complete system frequency response is
      <strong>PENDING VALIDATION</strong>; the target is not a demonstrated operating range. The
      sensor subsystem is intended to include:</p>
    <ul>
      <li>A pressure-sensing element (microbarometer or differential pressure sensor)</li>
      <li>A reference chamber with a controlled leak to suppress barometric drift</li>
      <li>A wind-noise reduction manifold using spatial averaging</li>
      <li>An analog front end with appropriate amplification and filtering</li>
    </ul>
    <h3 id="2-digitize-the-infrasound-signal">2. Digitize the Infrasound Signal</h3>
    <p>Implement an analog-to-digital conversion pipeline that:</p>
    <ul>
      <li>Uses a sampling-rate target of approximately 100 Hz (TARGET - Pending validation); the theoretical Nyquist boundary for
        a 20 Hz upper-band target is &gt;40 Hz (Theoretical minimum, Prototype targets approx. 100 Hz (TARGET - Pending validation)), and 40 Hz (Theoretical minimum, Prototype targets approx. 100 Hz (TARGET - Pending validation)) itself is not an engineering target</li>
      <li>Targets an ADC of at least ≥16-bit (TARGET - Final selection depends on ENOB and noise) nominal resolution; sensitivity depends on sensor
        sensitivity, analog/ADC noise, ENOB, reference stability, range, gain, and drift</li>
      <li>Preserves signal integrity without introducing excessive digital noise</li>
    </ul>
    <h3 id="3-implement-digital-signal-processing">3. Implement Digital Signal Processing</h3>
    <p>Build a signal-processing pipeline that includes:</p>
    <ul>
      <li>DC offset removal</li>
      <li>Band-pass filtering for the approximate 0.01–20 Hz (TARGET - Pending experimental validation) target band, subject to measured system response</li>
      <li>FFT (Fast Fourier Transform) for frequency-domain analysis</li>
      <li>Spectrogram generation for time-frequency visualization</li>
      <li>Feature extraction for AI input</li>
    </ul>
    <h3 id="4-implement-ai-based-anomaly-detection">4. Implement AI-Based Anomaly Detection</h3>
    <p>Develop an anomaly-detection system that:</p>
    <ul>
      <li>Learns a baseline of "normal" atmospheric pressure behaviour</li>
      <li>Flags signal windows that deviate significantly from the learned baseline</li>
      <li>Uses an unsupervised approach (Isolation Forest) that does not require labeled anomaly data
      </li>
      <li>Generates Normalized Anomaly Indices and compares them against configurable thresholds</li>
    </ul>
    <blockquote>
      <p><strong>Important:</strong> The MVP objective is <strong>anomaly detection</strong>, not
        event classification. The system flags unusual patterns — it does not identify what caused
        them.</p>
    </blockquote>
    <h3 id="5-provide-real-time-visualization-and-alerting">5. Provide Real-Time Visualization and
      Alerting</h3>
    <p>Build a dashboard that displays:</p>
    <ul>
      <li>Live pressure waveform</li>
      <li>Frequency spectrum</li>
      <li>Spectrogram</li>
      <li>Current normalized anomaly index</li>
      <li>Alert status</li>
      <li>Sensor health</li>
    </ul>
    <h2 id="secondary-objectives">Secondary Objectives</h2>
    <h3 id="6-document-the-system-comprehensively">6. Document the System Comprehensively</h3>
    <p>Create engineering-quality Menu covering hardware design, signal processing, AI
      pipeline, software architecture, testing, calibration, and deployment — suitable for hackathon
      evaluation, academic review, and future development.</p>
    <h3 id="7-demonstrate-reproducibility">7. Demonstrate Reproducibility</h3>
    <p>Ensure the design uses commonly available components and well-documented techniques so that other
      student teams or researchers can reproduce or extend the system.</p>
    <h3 id="8-establish-a-calibration-framework">8. Establish a Calibration Framework</h3>
    <p>Define calibration procedures for:</p>
    <ul>
      <li>Pressure sensitivity</li>
      <li>Frequency response</li>
      <li>Noise floor characterization</li>
      <li>Temperature sensitivity</li>
    </ul>
    <p><code>Assumption</code>: Actual calibration results will be measured during prototype testing.
      Placeholder tables are provided for recording measured values.</p>
    <h2 id="non-objectives-explicit-exclusions-">Non-Objectives (Explicit Exclusions)</h2>
    <table>
      <thead>
        <tr>
          <th>Non-Objective</th>
          <th>Reason</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Certified safety/early-warning system</td>
          <td>Requires regulatory certification and extensive validation</td>
        </tr>
        <tr>
          <td>Guaranteed event classification</td>
          <td>Requires large labeled datasets not available for MVP</td>
        </tr>
        <tr>
          <td>Professional-grade noise floor</td>
          <td>Requires research-grade components and facilities</td>
        </tr>
        <tr>
          <td>Multi-sensor array triangulation</td>
          <td>Requires multiple synchronized stations — <code>Future Scope</code></td>
        </tr>
        <tr>
          <td>Sub-milliPascal sensitivity</td>
          <td>Requires specialized lab-grade sensors</td>
        </tr>
        <tr>
          <td>Real-time source localization</td>
          <td>Requires array processing with multiple sensors — <code>Future Scope</code></td>
        </tr>
      </tbody>
    </table>
    <h2 id="measurable-outcomes">Measurable Outcomes</h2>
    <table>
      <thead>
        <tr>
          <th>Objective</th>
          <th>Measurable Outcome</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Pressure response</td>
          <td>Sensor produces measurable output for known pressure input</td>
        </tr>
        <tr>
          <td>Wind-noise reduction</td>
          <td>Signal-to-noise improvement when manifold is engaged vs. single port</td>
        </tr>
        <tr>
          <td>Digitization</td>
          <td>Clean waveform captured at target sampling rate</td>
        </tr>
        <tr>
          <td>FFT</td>
          <td>Correct frequency peaks shown for known test signals</td>
        </tr>
        <tr>
          <td>Anomaly detection</td>
          <td>Controlled test signals flagged as anomalies</td>
        </tr>
        <tr>
          <td>Dashboard</td>
          <td>Real-time display of waveform, spectrum, and anomaly status</td>
        </tr>
      </tbody>
    </table>
    <hr />
    <p><em>See also: <Link to="/01-overview/problem-statement">Problem Statement</Link> | <Link to="/01-overview/proposed-solution">Proposed Solution</Link> | <Link to="/01-overview/key-features">Key
          Features</Link></em></p>
  </article>
</div>

    </main>
  );
}