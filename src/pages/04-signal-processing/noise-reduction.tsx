import { Link } from 'react-router-dom';

export default function Page04SignalProcessingNoiseReduction() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Signal Processing</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Noise Reduction</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Noise Reduction</h1>
    <h2 id="sources-of-noise-in-the-infrasocket-system">Sources of Noise in the InfraSocket System</h2>
    <table>
      <thead>
        <tr>
          <th>Noise Source</th>
          <th>Nature</th>
          <th>Frequency Range</th>
          <th>Mitigation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Wind turbulence (Stagnation &amp; Intrinsic)</td>
          <td>Stagnation pressure (&frac12;&rho;v&sup2; against structure) and intrinsic atmospheric turbulence (turbulence-turbulence and turbulence-shear interactions)</td>
          <td>Broadband, dominant below 1–3 Hz (follows &minus;5/3 power law)</td>
          <td>Pneumatic spatial-averaging manifold / porous filter (hardware)</td>
        </tr>
        <tr>
          <td>Electronic noise (thermal)</td>
          <td>Random electron motion in components</td>
          <td>Broadband</td>
          <td>Low-noise amplifier selection</td>
        </tr>
        <tr>
          <td>1/f (flicker) noise</td>
          <td>Amplifier and sensor low-frequency noise</td>
          <td>Increases at lower frequencies</td>
          <td>Low-noise amplifier with low 1/f corner</td>
        </tr>
        <tr>
          <td>Quantization noise</td>
          <td>ADC digitization error</td>
          <td>Broadband (white)</td>
          <td>Higher bit-depth ADC</td>
        </tr>
        <tr>
          <td>Mains hum</td>
          <td>Power supply coupling</td>
          <td>50 or 60 Hz (and harmonics)</td>
          <td>Power supply filtering, shielding</td>
        </tr>
        <tr>
          <td>Mechanical vibration</td>
          <td>Ground or structure vibration</td>
          <td>Variable</td>
          <td>Vibration isolation</td>
        </tr>
        <tr>
          <td>Temperature-induced drift</td>
          <td>Thermal expansion, gas law effects</td>
          <td>Very low frequency</td>
          <td>Thermal insulation, compensation</td>
        </tr>
      </tbody>
    </table>
    <h2 id="digital-noise-reduction-techniques">Digital Noise Reduction Techniques</h2>
    <h3 id="1-band-pass-filtering-primary-">1. Band-Pass Filtering (Primary)</h3>
    <p>The most effective digital noise reduction is the band-pass filter, which attenuates frequency
      components outside the target band (0.01–20 Hz (TARGET - Pending experimental validation)). This attenuates mains hum, high-frequency
      electronic noise, and much of the thermal drift.</p>
    <h3 id="2-averaging">2. Averaging</h3>
    <p>Averaging multiple signal windows reduces random noise:</p>
    <pre><code>Noise reduction from averaging n windows: √n{"\n"}</code></pre>
    <p>However, averaging also reduces time resolution — averaged data cannot detect short-duration
      events.</p>
    <h3 id="3-median-filtering">3. Median Filtering</h3>
    <p>Replacing each sample with the median of surrounding samples effectively removes impulse noise
      (short spikes). Useful as a preprocessing step if the data contains digital glitches.</p>
    <h3 id="4-adaptive-filtering-future-scope-">4. Adaptive Filtering (<code>Future Scope</code>)</h3>
    <p>If a separate noise reference is available (e.g., a second sensor without a manifold), adaptive
      filtering can estimate and subtract the noise component from the signal. This technique can
      provide superior noise reduction but requires additional hardware.</p>
    <h2 id="noise-floor-characterization">Noise Floor Characterization &amp; PSD Estimation</h2>
    <p>The noise floor is the baseline power spectral density present when no infrasound signal is applied or under ambient background conditions. It defines the minimum detectable signal (MDS).</p>
    <p>Measuring and comparing the noise floor across hardware configurations:</p>
    <ol>
      <li><strong>Sealed Sensor Self-Noise:</strong> Cap sensor inlet ports in a temperature-stabilized chamber to record pure transducer and ADC electronic self-noise.</li>
      <li><strong>Atmospheric Background PSD:</strong> Deploy sensors in situ with and without pneumatic filters (e.g., bare vs. spatial manifold) and record continuous pressure.</li>
      <li><strong>Welch PSD Computation:</strong> Estimate the power spectral density using Welch's averaged periodogram method with a <strong>Hann window</strong> and <strong>50% overlap</strong> (as exemplified in the 20-minute Hann window methodology of Albert et al., 2021).</li>
      <li><strong>Wind-Speed Binning:</strong> Partition PSD curves by local anemometer intervals (e.g., 0–0.5 m/s, 1–1.5 m/s, etc.) to evaluate noise suppression across varying turbulent wind regimes.</li>
      <li><strong>Baseline Subtraction:</strong> Compute frequency-dependent noise attenuation: <span className="font-mono">&Delta;dB(f) = PSD_bare(f) &minus; PSD_filter(f)</span>.</li>
    </ol>
    <p>The noise floor typically increases at lower frequencies (due to 1/f noise, thermal drift, and boundary layer turbulence), making sub-0.1 Hz detection challenging.</p>
    <blockquote>
      <p><strong>Acoustic Fidelity Caution:</strong> Minimizing background PSD power is only half the engineering challenge. As demonstrated in published research (Albert et al., 2021; Howard et al., 2007), high-attenuation filters like porous hoses can alter signal amplitude and phase. System validation requires measuring both noise floor suppression and transient waveform preservation simultaneously.</p>
    </blockquote>
    <h2 id="signal-to-noise-ratio-snr-">Signal-to-Noise Ratio (SNR)</h2>
    <pre><code>SNR = Signal Power / Noise Power{"\n"}{"\n"}SNR (dB) = 10 × log10(Signal Power / Noise Power){"\n"}</code></pre>
    <p>A signal is detectable when SNR &gt; 1 (or &gt; 0 dB). For reliable detection with low false
      alarm rate, higher SNR is needed.</p>
    <h2 id="urban-noise-and-environmental-interference">Urban Noise and Environmental Interference</h2>
    <p>Urban environments present significant challenges, including traffic, construction, industrial
      machinery, aircraft, wind, storms, temperature effects, pressure changes, and electronic noise.
    </p>
    <blockquote>
      <p>AI alone does not solve environmental interference. </p>
    </blockquote>
    <p>The system relies on a complete processing chain to handle these challenges:</p>
    <pre><code className="language-text">Atmospheric Pressure{"\n"}{"        "}↓{"\n"}Pressure Sensor{"\n"}{"        "}↓{"\n"}Wind-Noise Reduction{"\n"}{"        "}↓{"\n"}Analog Filtering{"\n"}{"        "}↓{"\n"}ADC{"\n"}{"        "}↓{"\n"}Signal Quality Checks{"\n"}{"        "}↓{"\n"}Frequency / Amplitude / Duration Analysis{"\n"}{"        "}↓{"\n"}AI Anomaly Screening{"\n"}{"        "}↓{"\n"}Normal / Potential Anomaly{"\n"}{"        "}↓{"\n"}Further Correlation / Analysis{"\n"}</code></pre>
    <blockquote>
      <p>A detected anomaly is not automatically a confirmed explosion, meteor, volcanic eruption or
        other specific event.</p>
    </blockquote>
    <h2 id="noise-reduction-hierarchy">Noise Reduction Hierarchy</h2>
    <p>The most effective noise reduction combines hardware and software techniques:</p>
    <pre><code className="language-mermaid">flowchart TD{"\n"}{"    "}A["1. Hardware\n(Spatial averaging manifold)"] --&gt; B["2. Hardware\n(Low-noise electronics)"]{"\n"}{"    "}B --&gt; C["3. Digital\n(Band-pass filtering)"]{"\n"}{"    "}C --&gt; D["4. Digital\n(Averaging, if applicable)"]{"\n"}{"    "}D --&gt; E["5. AI\n(Anomaly detection handles\nresidual noise statistically)"]{"\n"}</code></pre>
    <p>Each stage reduces noise further, but the hardware stages are the most important — noise that is
      not removed in hardware cannot be fully recovered in software.</p>
    <hr />
    <p><em>See also: <Link to="/04-signal-processing/signal-processing-overview">Signal Processing Overview</Link> | <Link to="/04-signal-processing/filtering">Filtering</Link> | <Link to="/03-hardware/wind-noise-reduction">Wind-Noise Reduction</Link></em></p>
  </article>
</div>

    </main>
  );
}