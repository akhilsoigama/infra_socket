import { Link } from 'react-router-dom';

export default function Page01OverviewProposedSolution() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Overview</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Proposed Solution</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Proposed Solution</h1>
    <h2 id="overview">Overview</h2>
    <p>InfraSocket addresses the problem of accessible infrasound monitoring by combining custom sensor
      hardware, digital signal processing, and AI-based anomaly detection into a single integrated
      prototype system.</p>
    <p>The solution is structured as a pipeline:</p>
    <pre><code className="language-mermaid">flowchart LR{"\n"}{"    "}A["Pressure\nWave"] --&gt; B["Wind-Noise\nReduction"]{"\n"}{"    "}B --&gt; C["Pressure\nSensor"]{"\n"}{"    "}C --&gt; D["Analog\nFront End"]{"\n"}{"    "}D --&gt; E["ADC"]{"\n"}{"    "}E --&gt; F["Signal\nProcessing"]{"\n"}{"    "}F --&gt; G["Feature\nExtraction"]{"\n"}{"    "}G --&gt; H["AI Anomaly\nDetection"]{"\n"}{"    "}H --&gt; I["Dashboard\n+ Alerts"]{"\n"}</code></pre>
    <h2 id="solution-components">Solution Components</h2>
    <h3 id="1-pressure-sensing-with-differential-design">1. Pressure Sensing with Differential Design
    </h3>
    <blockquote>
      <p><strong>Simple Explanation:</strong>
        The sensor measures a pressure difference between its ports. A reference chamber and
        restriction can make that difference frequency-dependent: slow and fast variations are
        attenuated differently rather than perfectly canceling one range and passing another.</p>
    </blockquote>
    <blockquote>
      <p><strong>Technical Explanation:</strong>
        A differential pressure transducer is connected to the atmosphere on one side and to a
        sealed reference chamber on the other. The reference chamber is connected to the atmosphere
        through a narrow capillary tube (controlled leak) that allows very slow pressure
        equalization. In a simplified model, the chamber and pneumatic resistance have a time
        constant τ and characteristic frequency f<sub>c</sub> = 1 / (2πτ). The actual transfer
        function depends on chamber volume, capillary dimensions, tubing, ports, leakage, and
        temperature; the cutoff must be measured and is currently TBD.</p>
    </blockquote>
    <h3 id="2-wind-noise-reduction-via-spatial-averaging">2. Wind-Noise Reduction via Spatial Averaging
    </h3>
    <blockquote>
      <p><strong>Simple Explanation:</strong>
        Multiple pressure inlets can provide spatial averaging. It may reduce wind-driven
        fluctuations that are weakly correlated between inlets, while a target pressure wave may
        remain similar across an aperture small relative to its wavelength. Neither condition is
        guaranteed for every frequency or installation.</p>
    </blockquote>
    <blockquote>
      <p><strong>Technical Explanation:</strong>
        A rosette or radial manifold is a design concept for spatially averaging pressure across
        multiple inlets. Under ideal assumptions, averaging N statistically independent,
        equal-variance noise contributions gives RMS amplitude proportional to 1/√N (Theoretical ideal, pending experimental characterization); this is not
        a measured InfraSocket result. Wavelength is λ = c / f (approximately 17 m at 20 Hz, 343 m
        at 1 Hz, and 34 km at 0.01 Hz for c ≈ 343 m/s). Signal phase, wind-turbulence correlation,
        inlet spacing, tube lengths/diameters, manifold geometry, impedance, wind direction, and
        installation determine real performance. WNRS attenuation is PENDING VALIDATION.</p>
    </blockquote>
    <h3 id="3-low-noise-analog-front-end">3. Low-Noise Analog Front End</h3>
    <p>The raw differential pressure signal is typically very small. The analog front end:</p>
    <ul>
      <li><strong>Amplifies</strong> the signal using an instrumentation amplifier</li>
      <li><strong>Filters</strong> the signal with an anti-aliasing low-pass filter before
        digitization</li>
      <li><strong>Provides a stable DC bias</strong> for the ADC input range</li>
    </ul>
    <h3 id="4-high-resolution-digitization">4. High-Resolution Digitization</h3>
    <p>An analog-to-digital converter (ADC) samples the conditioned analog signal. Key requirements:</p>
    <ul>
      <li>Sampling: theoretical boundary &gt;40 Hz (Theoretical minimum, Prototype targets approx. 100 Hz (TARGET - Pending validation)) for a 20 Hz upper-band target; approximately 100 Hz (TARGET - Pending validation) is the current engineering TARGET, not a verified rate.</li>
      <li>ADC resolution target: ≥≥16-bit (TARGET - Final selection depends on ENOB and noise). Nominal bit depth does not establish sensitivity; evaluate ENOB, input range, reference/ADC noise, sensor sensitivity, gain, drift, and system dynamic range.</li>
      <li>ADC and AFE noise performance: TBD pending component selection and measurement.</li>
    </ul>
    <h3 id="5-digital-signal-processing-pipeline">5. Digital Signal Processing Pipeline</h3>
    <p>Once digitized, the signal passes through:</p>
    <ol>
      <li><strong>DC offset removal</strong> — subtract the mean to centre the signal around zero</li>
      <li><strong>Band-pass filtering</strong> — process the approximate 0.01–20 Hz (TARGET - Pending experimental validation) TARGET band; complete system response remains pending experimental validation</li>
      <li><strong>Windowing</strong> — apply a window function (e.g., Hanning) before spectral
        analysis</li>
      <li><strong>FFT</strong> — transform to the frequency domain to identify spectral content</li>
      <li><strong>Spectrogram</strong> — create a time-frequency representation</li>
      <li><strong>Feature extraction</strong> — compute RMS amplitude, peak frequency, spectral
        energy, and other features for AI input</li>
    </ol>
    <blockquote>
      <p><strong>Important clarification:</strong> FFT and filtering are traditional signal
        processing, not AI. They are deterministic mathematical operations.</p>
    </blockquote>
    <h3 id="6-ai-anomaly-detection-isolation-forest-">6. AI Anomaly Detection (Isolation Forest)</h3>
    <p>The extracted features from each signal window are fed into an <strong>Isolation Forest</strong>
      model:</p>
    <ul>
      <li><strong>Training:</strong> The model is trained on feature vectors from normal (baseline)
        atmospheric conditions</li>
      <li><strong>Inference:</strong> For each new signal window, the model computes an normalized
        anomaly index</li>
      <li><strong>Decision:</strong> If the normalized anomaly index exceeds a configurable threshold,
        the system flags an anomaly</li>
    </ul>
    <blockquote>
      <p><strong>What this achieves:</strong> The system learns what "normal" looks like and alerts
        when something "unusual" occurs.</p>
      <p><strong>What this does NOT achieve:</strong> It does not identify what the anomaly is.
        "Anomaly detected" does not mean "explosion detected" or "meteor detected." Event
        classification is a separate, more complex problem requiring labeled datasets
        (<code>Future Scope</code>).</p>
    </blockquote>
    <h3 id="7-dashboard-and-alerting">7. Dashboard and Alerting</h3>
    <p>A web-based dashboard provides:</p>
    <ul>
      <li>Real-time pressure waveform</li>
      <li>Live frequency spectrum and spectrogram</li>
      <li>Current normalized anomaly index with threshold indicator</li>
      <li>Alert notifications when anomalies are detected</li>
      <li>Historical data browsing</li>
      <li>Sensor health status</li>
    </ul>
    <h2 id="how-the-components-work-together">How the Components Work Together</h2>
    <pre><code className="language-mermaid">flowchart TD{"\n"}{"    "}subgraph Hardware{"\n"}{"        "}W["Wind-Noise Reduction\nManifold"] --&gt; S["Pressure Sensor\n+ Reference Chamber"]{"\n"}{"        "}S --&gt; AFE["Analog Front End\n(Amp + Filter)"]{"\n"}{"        "}AFE --&gt; ADC["ADC"]{"\n"}{"    "}end{"\n"}{"\n"}{"    "}subgraph Software{"\n"}{"        "}ADC --&gt; SP["Signal Processing\n(Filter, FFT)"]{"\n"}{"        "}SP --&gt; FE["Feature Extraction"]{"\n"}{"        "}FE --&gt; AI["Isolation Forest\nAnomaly Detection"]{"\n"}{"        "}AI --&gt; DB["Database"]{"\n"}{"        "}DB --&gt; DASH["Dashboard"]{"\n"}{"        "}AI --&gt; ALERT["Alert System"]{"\n"}{"    "}end{"\n"}</code></pre>
    <h2 id="why-this-solution-is-appropriate-for-a-prototype">Why This Solution Is Appropriate for a
      Prototype</h2>
    <table>
      <thead>
        <tr>
          <th>Design Decision</th>
          <th>Rationale</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Differential pressure with reference chamber</td>
          <td>Well-established technique for suppressing barometric drift</td>
        </tr>
        <tr>
          <td>Spatial-averaging manifold (small scale)</td>
          <td>Proven wind-noise reduction principle, scalable to prototype size</td>
        </tr>
        <tr>
          <td>Isolation Forest for anomaly detection</td>
          <td>Works with unlabeled data, computationally lightweight, well-understood</td>
        </tr>
        <tr>
          <td>Web-based dashboard</td>
          <td>Portable, no specialized software needed on the viewing device</td>
        </tr>
        <tr>
          <td>Modular pipeline</td>
          <td>Each component can be tested, validated, and improved independently</td>
        </tr>
      </tbody>
    </table>
    <h2 id="what-success-looks-like">What Success Looks Like</h2>
    <p>A successful prototype demonstration would show:</p>
    <ol>
      <li>A clean waveform captured in a quiet environment</li>
      <li>Visible noise reduction when the wind manifold is engaged</li>
      <li>Correct FFT peaks for a known test signal</li>
      <li>An normalized anomaly index near zero for normal conditions</li>
      <li>An elevated normalized anomaly index and alert for a controlled test anomaly</li>
      <li>All of the above visible on the real-time dashboard</li>
    </ol>
    <hr />
    <p><em>See also: <Link to="/01-overview/problem-statement">Problem Statement</Link> | <Link to="/01-overview/project-objectives">Project Objectives</Link> | <Link to="/02-system-architecture/architecture">System Architecture</Link></em></p>
  </article>
</div>

    </main>
  );
}