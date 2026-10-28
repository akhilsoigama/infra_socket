import { Link } from 'react-router-dom';

export default function Page04SignalProcessingFftAnalysis() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Signal Processing</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">FFT Analysis</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>FFT Analysis</h1>
    <h2 id="what-is-fft-">What Is FFT?</h2>
    <blockquote>
      <p><strong>Simple Explanation:</strong>
        Imagine you are listening to a chord played on a piano. Your ear hears a single combined
        sound, but your brain can identify the individual notes. The FFT does the same thing for
        pressure signals — it takes a combined signal that varies over time and breaks it down into
        its individual frequency components. It answers the question: "What frequencies are present
        in this signal, and how strong is each one?"</p>
    </blockquote>
    <blockquote>
      <p><strong>Technical Explanation:</strong>
        The Fast Fourier Transform (FFT) is an efficient algorithm for computing the Discrete
        Fourier Transform (DFT). It transforms a finite sequence of N time-domain samples into N
        complex-valued frequency-domain coefficients. The magnitude of each coefficient represents
        the amplitude of the corresponding frequency component. The FFT reduces the computational
        complexity from O(N²) for direct DFT to O(N log N).</p>
    </blockquote>
    <blockquote>
      <p><strong>FFT is traditional signal processing, not AI.</strong> It is a deterministic
        mathematical operation with a predictable, reproducible output.</p>
    </blockquote>
    <h2 id="fft-parameters-for-infrasocket">FFT Parameters for InfraSocket</h2>
    <table>
      <thead>
        <tr>
          <th>Parameter</th>
          <th>Value</th>
          <th>Reasoning</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Sampling rate (fs)</td>
          <td>50–100 Hz (TARGET - Pending validation) (candidate)</td>
          <td>System candidate sampling rate</td>
        </tr>
        <tr>
          <td>FFT size (N)</td>
          <td>2048 samples</td>
          <td>Provides good frequency resolution</td>
        </tr>
        <tr>
          <td>Window length (at 50 Hz)</td>
          <td>N/fs = 2048/50 = 40.96 sec</td>
          <td>Time duration of each FFT window</td>
        </tr>
        <tr>
          <td>Frequency resolution (Δf, at 50 Hz)</td>
          <td>fs/N = 50/2048 ≈ 0.024 Hz</td>
          <td>Smallest distinguishable frequency difference</td>
        </tr>
        <tr>
          <td>Maximum frequency</td>
          <td>fs/2 = 25 Hz (at 50 Hz)</td>
          <td>Nyquist limit</td>
        </tr>
        <tr>
          <td>Frequency bins</td>
          <td>N/2 = 1024</td>
          <td>Number of unique frequency bins</td>
        </tr>
      </tbody>
    </table>
    <h3 id="frequency-resolution-vs-time-resolution-trade-off">Frequency Resolution vs. Time Resolution
      Trade-off</h3>
    <ul>
      <li><strong>Longer FFT window (larger N):</strong> Better frequency resolution but poorer time
        resolution</li>
      <li><strong>Shorter FFT window (smaller N):</strong> Better time resolution but poorer frequency
        resolution</li>
    </ul>
    <p>For a 50 Hz sampling rate and N=2048, the FFT bin spacing is approximately 0.0244 Hz. This can be
      useful for higher-frequency screening but is too coarse for precise characterization near 0.01
      Hz. Longer observation windows and larger FFT sizes are preferable when characterizing
      components close to 0.01 Hz.</p>
    <h3 id="short-vs-long-processing-windows">Short vs. Long Processing Windows</h3>
    <table>
      <thead>
        <tr>
          <th>Window Type</th>
          <th>Duration</th>
          <th>Used For</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Short processing window</strong></td>
          <td>10–60 seconds</td>
          <td>Faster monitoring, higher-frequency components, preliminary anomaly screening</td>
        </tr>
        <tr>
          <td><strong>Long observation window</strong></td>
          <td>100–300+ seconds</td>
          <td>Characterizing very-low-frequency components, resolving frequencies close to 0.01
            Hz, low-frequency spectral analysis</td>
        </tr>
      </tbody>
    </table>
    <blockquote>
      <p><strong>Important:</strong> A 0.01 Hz signal has a period of approximately 100 seconds. A
        20–30 second window cannot properly resolve a 0.01 Hz component. Longer observation windows
        are required for meaningful low-frequency characterization. The target lower-frequency limit
        of 0.01 Hz requires sufficiently long observation windows. Shorter analysis windows may be
        used for higher-frequency screening.</p>
    </blockquote>
    <h2 id="windowing">Windowing</h2>
    <h3 id="why-windowing-is-needed">Why Windowing Is Needed</h3>
    <p>When the FFT analyzes a finite segment of data, it assumes the segment repeats infinitely. If the
      signal is not perfectly periodic within the segment, discontinuities at the edges create
      artefacts called <strong>spectral leakage</strong> — energy "leaks" from a signal's true
      frequency into neighbouring frequency bins.</p>
    <h3 id="window-functions">Window Functions</h3>
    <p>A window function is multiplied with the data before FFT to smoothly taper the signal at the
      edges, reducing spectral leakage.</p>
    <table>
      <thead>
        <tr>
          <th>Window</th>
          <th>Frequency Resolution</th>
          <th>Spectral Leakage</th>
          <th>Use Case</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Rectangular (none)</td>
          <td>Best</td>
          <td>Worst</td>
          <td>Only if signal is perfectly periodic within window</td>
        </tr>
        <tr>
          <td>Hanning (Hann)</td>
          <td>Good</td>
          <td>Low</td>
          <td>General-purpose; recommended default</td>
        </tr>
        <tr>
          <td>Hamming</td>
          <td>Good</td>
          <td>Low</td>
          <td>Similar to Hanning</td>
        </tr>
        <tr>
          <td>Blackman</td>
          <td>Lower</td>
          <td>Very low</td>
          <td>When leakage suppression is critical</td>
        </tr>
        <tr>
          <td>Flat-top</td>
          <td>Lowest</td>
          <td>Very low</td>
          <td>Amplitude accuracy measurements</td>
        </tr>
      </tbody>
    </table>
    <p><strong>Recommendation:</strong> Use the <strong>Hanning window</strong> as the default — it
      provides a good balance of frequency resolution and spectral leakage suppression.</p>
    <h2 id="power-spectral-density-psd-">Power Spectral Density (PSD)</h2>
    <p>The PSD shows how signal power is distributed across frequencies:</p>
    <pre><code>PSD[k] = |FFT[k]|² / (fs × N){"    "}(units: Pa²/Hz, if signal is in Pa){"\n"}</code></pre>
    <p>The PSD is more useful than the raw FFT magnitude for comparing signals of different lengths or
      sampling rates, because it normalizes by frequency resolution.</p>
    <h2 id="spectrogram">Spectrogram</h2>
    <p>A spectrogram is a time-frequency representation created by computing FFTs on successive
      overlapping windows:</p>
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 my-6 bg-white dark:bg-gray-800 shadow-sm max-w-2xl mx-auto font-sans">
      <div className="text-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-8">Example Spectrogram Visualization</div>
      <div className="flex items-center justify-center gap-6">
        {/* Y-axis */}
        <div className="text-xs text-gray-500 dark:text-gray-400 -rotate-90 origin-center translate-x-4 tracking-wider">Frequency (Hz)</div>
        {/* Chart Area */}
        <div className="relative w-96 h-48 border-2 border-gray-800 dark:border-gray-600 bg-white dark:bg-gray-900 overflow-hidden rounded-sm">
          {/* Grid lines */}
          <div className="absolute inset-0 flex flex-col justify-between">
            <div className="border-t border-dashed border-gray-200 dark:border-gray-700 w-full h-1/3" />
            <div className="border-t border-dashed border-gray-200 dark:border-gray-700 w-full h-1/3" />
            <div className="border-t border-dashed border-gray-200 dark:border-gray-700 w-full h-1/3" />
          </div>
          <div className="absolute inset-0 flex justify-between">
            <div className="border-l border-dashed border-gray-200 dark:border-gray-700 h-full w-1/3" />
            <div className="border-l border-dashed border-gray-200 dark:border-gray-700 h-full w-1/3" />
            <div className="border-l border-dashed border-gray-200 dark:border-gray-700 h-full w-1/3" />
          </div>
          {/* Horizontal blue band */}
          <div className="absolute bottom-4 left-0 w-full h-6 bg-sky-400/60 mix-blend-multiply dark:mix-blend-screen" />
          <div className="absolute bottom-5 left-0 w-full h-3 bg-sky-500/80 mix-blend-multiply dark:mix-blend-screen" />
          {/* Red bar */}
          <div className="absolute bottom-4 left-16 w-8 h-36 bg-rose-400/50 rounded flex justify-center items-center backdrop-blur-[1px]">
            <div className="w-3 h-32 bg-rose-700 rounded-sm shadow-sm" />
          </div>
          {/* Orange bar */}
          <div className="absolute bottom-12 right-24 w-12 h-24 bg-amber-400/60 rounded flex justify-center items-center backdrop-blur-[1px]">
            <div className="w-6 h-16 bg-amber-700 rounded-sm shadow-sm" />
          </div>
        </div>
        {/* Legend */}
        <div className="flex flex-col items-center justify-between h-48 text-xs text-gray-600 dark:text-gray-400 ml-4">
          <div className="flex items-center gap-2 font-medium">
            <div className="w-4 h-4 bg-rose-700 rounded-sm" /> High
          </div>
          <div className="w-5 h-32 rounded bg-gradient-to-t from-white via-amber-400 to-rose-700 border border-gray-200 dark:border-gray-700 shadow-inner" />
          <div className="flex items-center gap-2 font-medium">
            <div className="w-4 h-4 bg-white border border-gray-200 dark:border-gray-700 rounded-sm" /> Low
          </div>
        </div>
      </div>
      {/* X-axis */}
      <div className="text-center text-xs text-gray-500 dark:text-gray-400 mt-6 tracking-wider">Time →</div>
    </div>
    <ul>
      <li><strong>Window length:</strong> Same as FFT size (e.g., 2048 samples = ~41 sec)</li>
      <li><strong>Overlap:</strong> 50% is standard (each window shares half its samples with the
        previous)</li>
      <li><strong>Colour mapping:</strong> Intensity represents signal power at each time-frequency
        point</li>
    </ul>
    <p>The spectrogram is valuable because it shows <strong>how the frequency content changes over
        time</strong> — essential for identifying transient infrasound events.</p>
    <h2 id="fft-output-interpretation">FFT Output Interpretation</h2>
    <table>
      <thead>
        <tr>
          <th>What You See</th>
          <th>What It Means</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Strong peak at a specific frequency</td>
          <td>A dominant periodic signal at that frequency</td>
        </tr>
        <tr>
          <td>Broad hump across many frequencies</td>
          <td>Broadband noise or a transient event</td>
        </tr>
        <tr>
          <td>Flat, low-amplitude spectrum</td>
          <td>Quiet conditions, no significant signal</td>
        </tr>
        <tr>
          <td>Peak at 0.2 Hz that appears and fades</td>
          <td>A transient event with a dominant frequency of 0.2 Hz</td>
        </tr>
      </tbody>
    </table>
    <h2 id="implementation-notes">Implementation Notes</h2>
    <ul>
      <li>Use established FFT libraries (e.g., NumPy FFT, SciPy FFT, FFTW) — do not implement FFT from
        scratch</li>
      <li>Apply the window function before calling FFT</li>
      <li>Compute only the positive-frequency half of the spectrum (the negative half is the mirror
        image for real-valued signals)</li>
      <li>Convert to magnitude (|FFT|) or power (|FFT|²) for visualization and feature extraction</li>
    </ul>
    <hr />
    <p><em>See also: <Link to="/04-signal-processing/signal-processing-overview">Signal Processing Overview</Link> | <Link to="/04-signal-processing/frequency-analysis">Frequency Analysis</Link> | <Link to="/04-signal-processing/feature-extraction">Feature Extraction</Link></em></p>
  </article>
</div>

    </main>
  );
}