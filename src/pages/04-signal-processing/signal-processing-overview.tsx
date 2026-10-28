import { Link } from 'react-router-dom';

export default function Page04SignalProcessingSignalProcessingOverview() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Signal Processing</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Signal Processing Overview</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Signal Processing Overview</h1>
    <h2 id="introduction">Introduction</h2>
    <p>Signal processing is the bridge between raw digitized sensor data and the AI anomaly detection
      system. It transforms noisy, unprocessed ADC samples into clean, meaningful features that the AI
      model can analyze.</p>
    <blockquote>
      <p><strong>Critical Distinction:</strong>
        Signal processing (filtering, FFT, feature extraction) is <strong>traditional mathematics
          and engineering</strong> — not AI. It uses deterministic algorithms with predictable,
        reproducible outputs. The AI component (Isolation Forest) comes after signal processing and
        operates on the extracted features.</p>
    </blockquote>
    <h2 id="signal-processing-pipeline">Signal Processing Pipeline</h2>
    <pre><code className="language-mermaid">flowchart TD{"\n"}{"    "}RAW["📥 Raw ADC Samples\n(Timestamped integers)"] --&gt; DC["🔧 DC Offset Removal\n(Subtract mean)"]{"\n"}{"    "}DC --&gt; BPF["📐 Band-Pass Filter\n(0.01–20 Hz)"]{"\n"}{"    "}BPF --&gt; NR["🔇 Noise Reduction\n(Adaptive, optional)"]{"\n"}{"    "}NR --&gt; WIN["🪟 Windowing\n(Hanning/Hamming)"]{"\n"}{"    "}WIN --&gt; FFT["fa:fa-microchip{"  "}FFT\n(Time → Frequency domain)"]{"\n"}{"    "}FFT --&gt; SPEC["🖼️ Spectrogram\n(Time-Frequency map)"]{"\n"}{"    "}BPF --&gt; FEAT["fa:fa-microchip{"  "}Feature Extraction"]{"\n"}{"    "}FFT --&gt; FEAT{"\n"}{"    "}SPEC --&gt; FEAT{"\n"}{"    "}FEAT --&gt; AI["fa:fa-brain{"  "}→ AI Anomaly Detection\n(Isolation Forest)"]{"\n"}{"\n"}{"    "}style RAW fill:#e3f2fd{"\n"}{"    "}style FEAT fill:#fff9c4{"\n"}{"    "}style AI fill:#fce4ec{"\n"}</code></pre>
    <h2 id="pipeline-stages-summary">Pipeline Stages Summary</h2>
    <table>
      <thead>
        <tr>
          <th>Stage</th>
          <th>What It Does</th>
          <th>Why It's Needed</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>DC offset removal</td>
          <td>Subtracts the mean value</td>
          <td>Centres signal around zero; removes sensor/amplifier offset</td>
          <td>Signal processing</td>
        </tr>
        <tr>
          <td>Band-pass filter</td>
          <td>Passes 0.01–20 Hz (TARGET - Pending experimental validation), attenuates everything else</td>
          <td>Isolates the infrasound frequency range</td>
          <td>Signal processing</td>
        </tr>
        <tr>
          <td>Noise reduction</td>
          <td>Reduces remaining noise</td>
          <td>Improves signal-to-noise ratio</td>
          <td>Signal processing</td>
        </tr>
        <tr>
          <td>Windowing</td>
          <td>Multiplies signal segment by a smooth function</td>
          <td>Reduces spectral leakage in FFT</td>
          <td>Signal processing</td>
        </tr>
        <tr>
          <td>FFT</td>
          <td>Transforms time-domain to frequency-domain</td>
          <td>Reveals which frequencies are present</td>
          <td>Signal processing</td>
        </tr>
        <tr>
          <td>Spectrogram</td>
          <td>Stacked FFTs over time</td>
          <td>Shows how frequency content changes over time</td>
          <td>Signal processing</td>
        </tr>
        <tr>
          <td>Feature extraction</td>
          <td>Computes numerical descriptors</td>
          <td>Provides compact representation for AI</td>
          <td>Signal processing</td>
        </tr>
        <tr>
          <td>Anomaly detection</td>
          <td>Identifies unusual patterns</td>
          <td>Core detection goal</td>
          <td><strong>AI / ML</strong></td>
        </tr>
      </tbody>
    </table>
    <h2 id="offline-vs-real-time-processing">Offline vs. Real-Time Processing</h2>
    <table>
      <thead>
        <tr>
          <th>Mode</th>
          <th>Description</th>
          <th>Use Case</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Real-time</strong></td>
          <td>Process data as it arrives, window by window</td>
          <td>Live monitoring, dashboard updates, alerting</td>
        </tr>
        <tr>
          <td><strong>Offline (batch)</strong></td>
          <td>Process stored data after collection</td>
          <td>Research analysis, model training, re-analysis with different parameters</td>
        </tr>
      </tbody>
    </table>
    <p>The system should support both modes. Real-time processing is essential for the dashboard and
      alerts. Offline processing enables retrospective analysis and model retraining.</p>
    <h2 id="key-parameters">Key Parameters</h2>
    <table>
      <thead>
        <tr>
          <th>Parameter</th>
          <th>Proposed Value</th>
          <th>Rationale</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Sampling rate</td>
          <td>50 Hz</td>
          <td>Provides margin above 40 Hz (Theoretical minimum, Prototype targets approx. 100 Hz (TARGET - Pending validation)) Nyquist minimum for 20 Hz signals</td>
        </tr>
        <tr>
          <td>Analysis window length</td>
          <td>30–60 seconds</td>
          <td>Provides sufficient frequency resolution for sub-hertz analysis</td>
        </tr>
        <tr>
          <td>Window overlap</td>
          <td>50%</td>
          <td>Standard overlap for spectrogram generation</td>
        </tr>
        <tr>
          <td>Filter type</td>
          <td>Butterworth or Bessel (digital IIR)</td>
          <td>Well-characterized, efficient for real-time</td>
        </tr>
        <tr>
          <td>Filter order</td>
          <td>4th order</td>
          <td>Good balance of steepness and stability</td>
        </tr>
        <tr>
          <td>FFT size</td>
          <td>2048–4096 samples</td>
          <td>Depends on window length and desired frequency resolution</td>
        </tr>
        <tr>
          <td>Window function</td>
          <td>Hanning (Hann)</td>
          <td>Good frequency resolution with moderate spectral leakage</td>
        </tr>
      </tbody>
    </table>
    <p><code>Assumption</code>: These values are proposed starting points and may be adjusted based on
      testing with actual sensor data.</p>
    <hr />
    <p><em>See also: <Link to="/04-signal-processing/sampling">Sampling</Link> | <Link to="/04-signal-processing/filtering">Filtering</Link> | <Link to="/04-signal-processing/fft-analysis">FFT Analysis</Link> | <Link to="/04-signal-processing/feature-extraction">Feature
          Extraction</Link></em></p>
  </article>
</div>

    </main>
  );
}