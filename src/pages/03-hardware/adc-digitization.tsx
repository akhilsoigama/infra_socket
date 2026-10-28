import { Link } from 'react-router-dom';

export default function Page03HardwareAdcDigitization() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Hardware</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">ADC / Digitization</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>ADC / Digitization</h1>
    <h2 id="purpose">Purpose</h2>
    <p>The Analog-to-Digital Converter (ADC) converts the continuous analog electrical signal from the
      sensor/front-end into discrete digital numbers that can be processed by software. This is the
      bridge between the physical/analog world and the digital processing world.</p>
    <h2 id="working-principle">Working Principle</h2>
    <blockquote>
      <p><strong>Simple Explanation:</strong>
        The ADC is like a very precise ruler that measures the voltage level at regular time
        intervals and writes down the number. The faster it measures (sampling rate), the more
        detail it captures over time. The more marks on the ruler (bit depth), the more precisely it
        can distinguish between slightly different voltage levels.</p>
    </blockquote>
    <blockquote>
      <p><strong>Technical Explanation:</strong>
        An ADC samples the input voltage at a fixed rate (sampling frequency, fs) and quantizes each
        sample to the nearest discrete level. A ≥16-bit (TARGET - Final selection depends on ENOB and noise) ADC divides the input voltage range into 2^16
        = 65,536 levels. A 24-bit ADC provides 2^24 = 16,777,216 levels. The resulting digital
        values are integers that represent the analog voltage at each sample instant.</p>
    </blockquote>
    <h2 id="key-parameters">Key Parameters</h2>
    <h3 id="sampling-rate-fs-">Sampling Rate (fs)</h3>
    <table>
      <thead>
        <tr>
          <th>Parameter</th>
          <th>Value</th>
          <th>Status / reasoning</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Theoretical Nyquist boundary</td>
          <td>&gt;40 Hz (Theoretical minimum, Prototype targets approx. 100 Hz (TARGET - Pending validation))</td>
          <td>40 Hz (Theoretical minimum, Prototype targets approx. 100 Hz (TARGET - Pending validation)) is only the boundary for a 20 Hz upper-band target</td>
        </tr>
        <tr>
          <td>Prototype sampling-rate target</td>
          <td>Approximately 100 Hz (TARGET - Pending validation)</td>
          <td>TARGET — not verified on selected hardware; validate with the analog anti-alias filter</td>
        </tr>
      </tbody>
    </table>
    <blockquote>
      <p><strong>Why Nyquist matters:</strong> The Nyquist-Shannon sampling theorem states that to
        faithfully capture a signal of frequency f, you must sample at more than 2f. Sampling at
        less than 2f causes aliasing — frequencies appear to be lower than they actually are,
        corrupting the data irreversibly.</p>
    </blockquote>
    <h3 id="bit-depth-resolution-">Bit Depth (Resolution)</h3>
    <table>
      <thead>
        <tr>
          <th>Bit Depth</th>
          <th>Number of Levels</th>
          <th>Meaning</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>12-bit</td>
          <td>4,096</td>
          <td>Nominal code count only; system dynamic range is not implied</td>
          <td>Illustrative resolution</td>
        </tr>
        <tr>
          <td>≥16-bit (TARGET - Final selection depends on ENOB and noise)</td>
          <td>65,536</td>
          <td>Nominal code count only; system dynamic range is not implied</td>
          <td>Prototype target is ≥≥16-bit (TARGET - Final selection depends on ENOB and noise); not a selected or validated ADC</td>
        </tr>
        <tr>
          <td>24-bit</td>
          <td>16,777,216</td>
          <td>Nominal code count only; system dynamic range is not implied</td>
          <td>Illustrative resolution</td>
        </tr>
      </tbody>
    </table>
    <blockquote>
      <p>Nominal bit depth gives the number of digital codes, not actual system sensitivity. The
        prototype targets an ADC of at least ≥16-bit (TARGET - Final selection depends on ENOB and noise) resolution, but this is not a component
        selection or a measured performance claim. Final selection must consider effective number
        of bits (ENOB), input range, ADC and reference noise, sensor sensitivity, analog gain,
        quantization, drift, and required system dynamic range.</p>
    </blockquote>
    <h3 id="input-voltage-range">Input Voltage Range</h3>
    <p>The ADC accepts a specific voltage range (e.g., 0–3.3 V, 0–5 V, or ±2.5 V). The analog front end
      must scale the sensor signal to fit within this range.</p>
    <h3 id="noise-performance">Noise Performance</h3>
    <p>The ADC itself adds noise (quantization noise, reference noise, internal circuit noise). For a
      prototype, the ADC's effective number of bits (ENOB) should be evaluated — this represents the
      actual usable resolution after accounting for the ADC's own noise.</p>
    <h2 id="adc-types-considered">ADC Types Considered</h2>
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Characteristics</th>
          <th>Suitability</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Sigma-Delta (ΔΣ)</strong></td>
          <td>Very high resolution (24-bit), low noise, but lower speed</td>
          <td>Excellent for infrasound (low-frequency, high-resolution)</td>
        </tr>
        <tr>
          <td><strong>SAR (Successive Approximation)</strong></td>
          <td>Moderate resolution (12–18 bit), moderate speed</td>
          <td>Good for prototype with ≥16-bit (TARGET - Final selection depends on ENOB and noise) models</td>
        </tr>
        <tr>
          <td><strong>Integrated (on-chip)</strong></td>
          <td>Built into microcontrollers, typically 12-bit</td>
          <td>Marginal — may be sufficient for initial testing</td>
        </tr>
      </tbody>
    </table>
    <p><strong>Recommendation:</strong> A <strong>Sigma-Delta ADC</strong> is well-suited for infrasound
      because it provides high resolution at low sampling rates — exactly matching the requirements
      (high precision, low speed).</p>
    <h2 id="interface-options">Interface Options</h2>
    <table>
      <thead>
        <tr>
          <th>Interface</th>
          <th>Advantages</th>
          <th>Disadvantages</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>SPI</td>
          <td>Fast, widely supported, full-duplex</td>
          <td>Requires more wires (4+)</td>
        </tr>
        <tr>
          <td>I²C</td>
          <td>Fewer wires (2), address multiple devices</td>
          <td>Slower, less noise immunity</td>
        </tr>
        <tr>
          <td>USB (via DAQ board)</td>
          <td>Plug-and-play, high bandwidth</td>
          <td>More complex, higher cost</td>
        </tr>
        <tr>
          <td>Analog to MCU on-chip ADC</td>
          <td>Simplest — no external ADC needed</td>
          <td>Lower resolution (typically 12-bit)</td>
        </tr>
      </tbody>
    </table>
    <h2 id="data-output-format">Data Output Format</h2>
    <p>Each ADC sample is a digital integer representing the instantaneous voltage. The software must
      convert this raw value to a meaningful pressure unit:</p>
    <pre><code>Pressure (Pa) = (ADC_value − ADC_offset) × (V_ref / 2^n) × (1 / Gain) × (1 / Sensitivity){"\n"}{"\n"}Where:{"\n"}{"  "}ADC_value = raw digital reading{"\n"}{"  "}ADC_offset = value at zero differential pressure{"\n"}{"  "}V_ref = ADC reference voltage{"\n"}{"  "}n = number of bits{"\n"}{"  "}Gain = amplifier gain{"\n"}{"  "}Sensitivity = sensor sensitivity (V/Pa){"\n"}</code></pre>
    <p><code>Assumption</code>: Actual conversion coefficients will be determined during calibration.
    </p>
    <h2 id="design-considerations">Design Considerations</h2>
    <ol>
      <li><strong>Reference voltage stability:</strong> The ADC's reference voltage directly affects
        measurement accuracy. Use a precision voltage reference, not the microcontroller's supply
        voltage.</li>
      <li><strong>Ground plane:</strong> Separate analog and digital ground planes, connecting at a
        single point, to minimize digital switching noise coupling into the analog signal.</li>
      <li><strong>Decoupling:</strong> Place decoupling capacitors close to the ADC power and
        reference pins.</li>
      <li><strong>Clock jitter:</strong> Timing uncertainty in the sampling clock adds noise. Use a
        stable clock source.</li>
      <li><strong>Input protection:</strong> Add input protection (clamping diodes, series resistor)
        to prevent damage from overvoltage.</li>
    </ol>
    <hr />
    <p><em>See also: <Link to="/03-hardware/analog-front-end">Analog Front End</Link> | <Link to="/04-signal-processing/sampling">Sampling</Link> | <Link to="/03-hardware/hardware-overview">Hardware Overview</Link></em></p>
  </article>
</div>

    </main>
  );
}