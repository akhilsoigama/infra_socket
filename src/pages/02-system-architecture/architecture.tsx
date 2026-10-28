import { Link } from 'react-router-dom';

export default function Page02SystemArchitectureArchitecture() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">System Architecture</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">System Architecture</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>System Architecture</h1>
    <h2 id="hardware-architecture-diagram">Hardware Architecture Diagram</h2>
    <pre><code className="language-mermaid">flowchart LR{"\n"}{"    "}A[Atmospheric Pressure Waves]{"\n"}{"    "}B[Wind Noise Reduction Manifold]{"\n"}{"    "}C[Pressure / Differential Sensor]{"\n"}{"    "}D[Reference Chamber]{"\n"}{"    "}E[Low Noise Analog Front End]{"\n"}{"    "}F[ADC / Digitizer]{"\n"}{"    "}G[Edge Computer]{"\n"}{"    "}H[Signal Processing]{"\n"}{"    "}I[AI Anomaly Screening]{"\n"}{"    "}J[Dashboard / Alert]{"\n"}{"\n"}{"    "}A --&gt; B{"\n"}{"    "}B --&gt; C{"\n"}{"    "}D --&gt; C{"\n"}{"    "}C --&gt; E{"\n"}{"    "}E --&gt; F{"\n"}{"    "}F --&gt; G{"\n"}{"    "}G --&gt; H{"\n"}{"    "}H --&gt; I{"\n"}{"    "}I --&gt; J{"\n"}</code></pre>
    <h2 id="complete-architecture-diagram">Complete Architecture Diagram</h2>
    <pre><code className="language-mermaid">flowchart TD{"\n"}{"    "}ATM["fa:fa-globe{"  "}Atmosphere\nPressure Wave Source"] --&gt; WNR{"\n"}{"\n"}{"    "}subgraph HARDWARE["Hardware Subsystem"]{"\n"}{"        "}WNR["fa:fa-wind{"  "}Wind-Noise Reduction\nSpatial Averaging Manifold\n(Multiple Inlet Ports)"]{"\n"}{"        "}WNR --&gt; SENSOR["fa:fa-microchip{"  "}Pressure Sensor\n(Microbarometer / Differential\nPressure Transducer)"]{"\n"}{"        "}SENSOR --- REFCHAM["fa:fa-lock{"  "}Reference Chamber\n(Sealed Volume +\nCapillary Leak)"]{"\n"}{"        "}SENSOR --&gt; AFE["fa:fa-bolt{"  "}Analog Front End\n(Instrumentation Amplifier\n+ Anti-Alias Filter)"]{"\n"}{"        "}AFE --&gt; ADC["fa:fa-microchip{"  "}ADC\n(≥16-bit TARGET, ~100 Hz TARGET; selection TBD)"]{"\n"}{"        "}TEMP["fa:fa-temperature-half{"  "}Temperature Sensor"] --&gt; ADC{"\n"}{"    "}end{"\n"}{"\n"}{"    "}subgraph PROCESSING["Signal Processing Subsystem"]{"\n"}{"        "}ADC --&gt; DCR["DC Offset Removal"]{"\n"}{"        "}DCR --&gt; BPF["Band-Pass Filter\n(0.01–20 Hz)"]{"\n"}{"        "}BPF --&gt; WIN["Windowing\n(Hanning Window)"]{"\n"}{"        "}WIN --&gt; FFT["FFT\n(Frequency Transform)"]{"\n"}{"        "}FFT --&gt; SPEC["Spectrogram\n(Time-Frequency)"]{"\n"}{"        "}BPF --&gt; FEAT["Feature Extraction\n(RMS, Peak, Energy,\nDominant Freq)"]{"\n"}{"        "}SPEC --&gt; FEAT{"\n"}{"    "}end{"\n"}{"\n"}{"    "}subgraph AI_SUB["AI Subsystem"]{"\n"}{"        "}FEAT --&gt; IFOREST["fa:fa-brain{"  "}Isolation Forest\n(Anomaly Detection)"]{"\n"}{"        "}IFOREST --&gt; RAWSCORE["Raw Normalized Anomaly Index"]{"\n"}{"        "}RAWSCORE --&gt; NORMSCORE["Project-defined\nNormalized Anomaly Index"]{"\n"}{"        "}NORMSCORE --&gt; THRESHOLD{"{"}"Index &gt; Threshold?"{"}"}{"\n"}{"        "}THRESHOLD --&gt;|Yes| ANOMALY["fa:fa-triangle-exclamation{"  "}POTENTIAL ANOMALY"]{"\n"}{"        "}THRESHOLD --&gt;|No| NORMAL["fa:fa-check{"  "}NORMAL"]{"\n"}{"    "}end{"\n"}{"\n"}{"    "}subgraph APPLICATION["Application Subsystem"]{"\n"}{"        "}ANOMALY --&gt; ALERT["fa:fa-bell{"  "}Alert System"]{"\n"}{"        "}NORMAL --&gt; DB["fa:fa-database{"  "}Database"]{"\n"}{"        "}ANOMALY --&gt; DB{"\n"}{"        "}DB --&gt; API["fa:fa-plug{"  "}REST API"]{"\n"}{"        "}API --&gt; DASHBOARD["fa:fa-chart-line{"  "}Dashboard\n(Web-Based)"]{"\n"}{"        "}ALERT --&gt; DASHBOARD{"\n"}{"    "}end{"\n"}</code></pre>
    <h2 id="architecture-block-descriptions">Architecture Block Descriptions</h2>
    <h3 id="atmosphere-source-">Atmosphere (Source)</h3>
    <p>The physical environment producing pressure waves. These can originate from natural phenomena
      (volcanic eruptions, severe storms, meteor entries) or human-made events (explosions, rocket
      launches). The pressure waves propagate through the atmosphere at approximately the speed of
      sound.</p>
    <h3 id="wind-noise-reduction-spatial-averaging-manifold-">Wind-Noise Reduction (Spatial Averaging
      Manifold)</h3>
    <p>A proposed physical structure with multiple air inlets connected to a common manifold. Spatial
      averaging can reduce sufficiently uncorrelated noise contributions under ideal assumptions,
      while a target pressure wave may remain coherent over an aperture small relative to its
      wavelength. Actual performance depends on inlet geometry and spacing, tubing, impedance,
      frequency, turbulence correlation, wind, and installation; WNRS attenuation is pending
      experimental validation.</p>
    <h3 id="pressure-sensor-microbarometer-differential-pressure-transducer-">Pressure Sensor
      (Microbarometer / Differential Pressure Transducer)</h3>
    <p>The sensing element that converts atmospheric pressure variations into an electrical signal. For
      infrasound applications, this is typically a differential pressure sensor — one port is exposed
      to the atmosphere (via the wind-noise manifold), and the other is connected to the reference
      chamber.</p>
    <h3 id="reference-chamber">Reference Chamber</h3>
    <p>A chamber and pneumatic restriction can produce a frequency-dependent pressure reference. A
      simplified model uses a time constant τ and characteristic frequency f<sub>c</sub> = 1 / (2πτ).
      The actual response depends on chamber volume, capillary, tubing, ports, leaks, and temperature;
      its cutoff and transfer function are TBD pending experimental characterization.</p>
    <h3 id="analog-front-end">Analog Front End</h3>
    <p>Electronic circuitry that:</p>
    <ul>
      <li><strong>Amplifies</strong> the weak differential-pressure signal using an instrumentation
        amplifier</li>
      <li><strong>Filters</strong> the signal with an anti-aliasing low-pass filter (to prevent
        aliasing during digitization)</li>
      <li><strong>Biases</strong> the signal to the ADC input range</li>
    </ul>
    <h3 id="adc-analog-to-digital-converter-">ADC (Analog-to-Digital Converter)</h3>
    <p>Converts the continuous analog signal into discrete digital samples. Key parameters:</p>
    <ul>
      <li><strong>Sampling rate:</strong> approximately 100 Hz (TARGET - Pending validation) TARGET; theoretical Nyquist boundary
        is &gt;40 Hz (Theoretical minimum, Prototype targets approx. 100 Hz (TARGET - Pending validation)) for a 20 Hz upper-band target</li>
      <li><strong>Resolution:</strong> ≥≥16-bit (TARGET - Final selection depends on ENOB and noise) TARGET; nominal bits do not establish system dynamic
        range or sensitivity. ADC selection and ENOB are TBD.</li>
    </ul>
    <h3 id="temperature-sensor">Temperature Sensor</h3>
    <p>Monitors ambient or enclosure temperature. Temperature data is logged alongside pressure data and
      can be used for drift compensation or data quality assessment.</p>
    <h3 id="dc-offset-removal">DC Offset Removal</h3>
    <p>Subtracts the mean value from the digital signal to centre it around zero. This removes any
      constant offset from the sensor or electronics.</p>
    <h3 id="band-pass-filter-0-01-20-hz-">Band-Pass Filter (0.01–20 Hz (TARGET - Pending experimental validation))</h3>
    <p>A digital filter may be configured for the approximate 0.01–20 Hz (TARGET - Pending experimental validation) TARGET band. Filter design
      does not prove the sensor or complete instrument responds across that band; the full frequency
      response remains pending measurement. Filter edges and implementation are configuration
      parameters, not measured hardware limits.</p>
    <h3 id="windowing-hanning-window-">Windowing (Hanning Window)</h3>
    <p>Before performing FFT, each data segment is multiplied by a window function (e.g., Hanning/Hann
      window) to reduce spectral leakage — artefacts caused by analyzing a finite-length signal
      segment.</p>
    <h3 id="fft-fast-fourier-transform-">FFT (Fast Fourier Transform)</h3>
    <p>A mathematical algorithm that transforms the time-domain signal into the frequency domain,
      revealing which frequencies are present and their relative amplitudes. <strong>FFT is
        traditional signal processing, not AI.</strong></p>
    <h3 id="spectrogram">Spectrogram</h3>
    <p>A time-frequency representation showing how the frequency content of the signal changes over
      time. Generated by computing FFT on successive overlapping windows.</p>
    <h3 id="feature-extraction">Feature Extraction</h3>
    <p>Computes numerical characteristics of each signal window:</p>
    <ul>
      <li><strong>RMS amplitude</strong> — overall signal strength</li>
      <li><strong>Peak amplitude</strong> — maximum excursion</li>
      <li><strong>Spectral energy</strong> — total energy in the frequency domain</li>
      <li><strong>Dominant frequency</strong> — frequency with highest energy</li>
      <li><strong>Spectral centroid</strong> — "centre of mass" of the spectrum</li>
      <li><strong>Bandwidth</strong> — spread of spectral energy</li>
      <li><strong>Duration</strong> — length of signal window</li>
    </ul>
    <h3 id="isolation-forest-anomaly-detection-">Isolation Forest (Anomaly Detection)</h3>
    <p>An unsupervised machine-learning algorithm that:</p>
    <ol>
      <li>Is trained on feature vectors from normal (baseline) atmospheric conditions</li>
      <li>Assigns a raw normalized anomaly index to each new feature vector based on average path
        length in its decision trees</li>
      <li>Anomalies are easier to "isolate" (separate) than normal points, resulting in shorter
        average path lengths</li>
    </ol>
    <blockquote>
      <p><strong>Current AI scope = anomaly screening.</strong> Event classification and multi-source
        event confirmation are future phases.</p>
    </blockquote>
    <h3 id="normalized-anomaly-index-pipeline">Normalized Anomaly Index Pipeline</h3>
    <p>The Isolation Forest raw output is processed through a project-defined normalization step:</p>
    <pre><code className="language-text">Feature Vector{"\n"}{"      "}↓{"\n"}Isolation Forest{"\n"}{"      "}↓{"\n"}Raw Normalized Anomaly Index{"\n"}{"      "}↓{"\n"}Project-defined Normalization{"\n"}{"      "}↓{"\n"}Normalized Anomaly Index{"\n"}{"      "}↓{"\n"}Threshold{"\n"}{"      "}↓{"\n"}Normal / Potential Anomaly{"\n"}</code></pre>
    <p>A configurable threshold determines the decision boundary:</p>
    <ul>
      <li>Index ≤ threshold → <strong>NORMAL</strong></li>
      <li>Index &gt; threshold → <strong>POTENTIAL ANOMALY</strong></li>
    </ul>
    <blockquote>
      <p><strong>Important:</strong> The normalized anomaly index is a project-defined
        visualization/decision-support score. It is NOT a probability and must not be interpreted as
        model confidence. The threshold is an experimental value to be selected using validation
        data.</p>
    </blockquote>
    <h3 id="alert-system">Alert System</h3>
    <p>When an anomaly is detected, the alert system:</p>
    <ul>
      <li>Generates a notification (e.g., email, webhook, dashboard alert)</li>
      <li>Logs the alert with timestamp, normalized anomaly index, and associated data</li>
      <li>Displays the alert on the dashboard</li>
    </ul>
    <h3 id="database">Database</h3>
    <p>Stores:</p>
    <ul>
      <li>Raw measurement data (timestamp, pressure value, temperature)</li>
      <li>Processed signal windows and their features</li>
      <li>Anomaly records (scores, thresholds, status)</li>
      <li>Sensor metadata and configuration</li>
    </ul>
    <h3 id="rest-api">REST API</h3>
    <p>Provides programmatic access to stored data and system status. Allows external applications to
      query measurements, anomalies, and sensor health.</p>
    <h3 id="dashboard-web-based-">Dashboard (Web-Based)</h3>
    <p>Real-time visualization interface showing live waveform, spectrum, spectrogram, normalized
      anomaly index, alerts, and historical data.</p>
    <h2 id="multi-sensor-future-architecture">Multi-Sensor Future Architecture</h2>
    <pre><code className="language-text">Node A ─┐{"\n"}Node B ─┼──&gt; Central Processing ──&gt; Correlation{"\n"}Node C ─┘{"                         "}↓{"\n"}{"                              "}Event Assessment{"\n"}</code></pre>
    <p>This future architecture supports localization and improved noise rejection through:</p>
    <ul>
      <li>Time synchronization across nodes</li>
      <li>Cross-correlation of signals</li>
      <li>Arrival-time difference calculations</li>
      <li>Source direction/location estimation</li>
    </ul>
    <blockquote>
      <p><strong>Note:</strong> Accurate localization will not be claimed until experimentally
        validated with a synchronized multi-node array.</p>
    </blockquote>
    <h2 id="multi-source-fusion-future-scope-">Multi-Source Fusion (Future Scope)</h2>
    <pre><code className="language-text">InfraSocket Infrasound{"\n"}{"        "}+{"\n"}Weather Data{"\n"}{"        "}+{"\n"}Seismic Data{"\n"}{"        "}+{"\n"}Satellite / Remote Sensing Data{"\n"}{"        "}↓{"\n"}Multi-Source Correlation{"\n"}{"        "}↓{"\n"}AI / Statistical Analysis{"\n"}{"        "}↓{"\n"}Potential Event Assessment{"\n"}</code></pre>
    <blockquote>
      <p><strong>Note:</strong> Satellite data and infrasound provide complementary observations.
        InfraSocket can potentially act as an additional ground-based sensing layer. Satellite and
        other external data sources are complementary evidence sources, not replacements for direct
        infrasound measurement. Multi-source fusion remains <strong>Future Scope</strong> unless
        explicitly implemented.</p>
    </blockquote>
    <h2 id="ai-processing-pipeline">AI Processing Pipeline</h2>
    <pre><code className="language-mermaid">flowchart TD{"\n"}{"    "}A[Raw Pressure Waveform]{"\n"}{"    "}B[Signal Quality Check]{"\n"}{"    "}C[Filtering]{"\n"}{"    "}D[Frequency / Spectral Analysis]{"\n"}{"    "}E[Feature Extraction]{"\n"}{"    "}F[Isolation Forest]{"\n"}{"    "}G[Raw Normalized Anomaly Index]{"\n"}{"    "}H[Project-defined Normalization]{"\n"}{"    "}I[Normalized Anomaly Index]{"\n"}{"    "}J[Threshold]{"\n"}{"    "}K[Normal]{"\n"}{"    "}L[Potential Anomaly]{"\n"}{"\n"}{"    "}A --&gt; B{"\n"}{"    "}B --&gt; C{"\n"}{"    "}C --&gt; D{"\n"}{"    "}D --&gt; E{"\n"}{"    "}E --&gt; F{"\n"}{"    "}F --&gt; G{"\n"}{"    "}G --&gt; H{"\n"}{"    "}H --&gt; I{"\n"}{"    "}I --&gt; J{"\n"}{"    "}J --&gt; K{"\n"}{"    "}J --&gt; L{"\n"}</code></pre>
    <blockquote>
      <p><strong>Current AI scope = anomaly screening.</strong> Event classification and multi-source
        event confirmation are future phases.</p>
    </blockquote>
    <h2 id="architecture-principles">Architecture Principles</h2>
    <ol>
      <li><strong>Data preservation:</strong> Raw data is always stored, even if processing or AI
        fails</li>
      <li><strong>Graceful degradation:</strong> If the AI subsystem is unavailable, signal processing
        and data recording continue</li>
      <li><strong>Separation of concerns:</strong> Hardware, signal processing, AI, and application
        layers are independent</li>
      <li><strong>Observable:</strong> Every stage produces inspectable output for debugging and
        validation</li>
    </ol>
    <hr />
    <p><em>See also: <Link to="/02-system-architecture/system-overview">System Overview</Link> | <Link to="/02-system-architecture/hardware-architecture">Hardware Architecture</Link> | <Link to="/02-system-architecture/software-architecture">Software Architecture</Link> | <Link to="/02-system-architecture/data-flow">Data
          Flow</Link></em></p>
  </article>
</div>

    </main>
  );
}