import { Link } from 'react-router-dom';

export default function Page03HardwareAnalogFrontEnd() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Hardware</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Analog Front End</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Analog Front End</h1>
    <h2 id="purpose">Purpose</h2>
    <p>The analog front end (AFE) sits between the pressure sensor and the ADC. Its job is to amplify
      the weak electrical signal from the sensor to a level suitable for digitization, and to filter
      out frequencies that could cause problems during the analog-to-digital conversion.</p>
    <h2 id="block-diagram">Block Diagram</h2>
    <p><strong>Design status:</strong> The following is a functional block concept, not a confirmed
      circuit or selected component chain. Sensor interface, AFE topology, and ADC input requirements
      depend on the final hardware.</p>
    <pre><code className="language-mermaid">flowchart LR{"\n"}{"    "}SENSOR["Pressure Sensor\n(Output and sensitivity TBD)"] --&gt; INA["Analog Conditioning\n(Gain and noise TBD)"]{"\n"}{"    "}INA --&gt; HPF["Optional High-Pass\n(Topology/cutoff TBD)"]{"\n"}{"    "}HPF --&gt; LPF["Anti-Alias Filter\n(Response TBD)"]{"\n"}{"    "}LPF --&gt; BIAS["Offset/bias handling\n(TBD for ADC topology)"]{"\n"}{"    "}BIAS --&gt; ADC_IN["ADC input range TBD"]{"\n"}</code></pre>
    <h2 id="component-instrumentation-amplifier">Component: Instrumentation Amplifier</h2>
    <h3 id="purpose">Purpose</h3>
    <p>Amplifies the weak differential voltage from the pressure sensor while rejecting common-mode
      noise.</p>
    <h3 id="working-principle">Working Principle</h3>
    <blockquote>
      <p><strong>Simple Explanation:</strong>
        The sensor's output is like a very quiet whisper. The instrumentation amplifier is like a
        hearing aid — it makes the whisper louder without amplifying the background room noise.</p>
    </blockquote>
    <blockquote>
      <p><strong>Technical Explanation:</strong>
        An instrumentation amplifier (INA) has two high-impedance differential inputs and one
        single-ended output. It amplifies only the difference between its inputs (differential-mode
        signal) while strongly rejecting any signal that appears equally on both inputs (common-mode
        signal). The gain is typically set by a single external resistor.</p>
    </blockquote>
    <h3 id="key-requirements">Key Requirements</h3>
    <table>
      <thead>
        <tr>
          <th>Engineering parameter</th>
          <th>Value</th>
          <th>Status / evidence needed</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Target frequency band</td><td>Approximately 0.01–20 Hz (TARGET - Pending experimental validation)</td><td>TARGET — full system response pending validation</td></tr>
        <tr><td>Pressure-sensor output and sensitivity</td><td>TBD</td><td>PENDING — identify sensor and calibrate</td></tr>
        <tr><td>AFE topology and gain</td><td>TBD</td><td>PENDING — select after sensor output and ADC range are known</td></tr>
        <tr><td>Input-referred noise</td><td>TBD</td><td>PENDING — component analysis and measurement</td></tr>
        <tr><td>High-pass topology / cutoff</td><td>TBD</td><td>PENDING — determine whether required and characterize</td></tr>
        <tr><td>Low-pass / anti-alias response</td><td>TBD</td><td>PENDING — design with sampling target and measure</td></tr>
        <tr><td>ADC input range</td><td>TBD</td><td>PENDING — depends on selected ADC and reference</td></tr>
        <tr><td>Supply voltage</td><td>TBD</td><td>PENDING — depends on selected components</td></tr>
        <tr><td>Expected signal amplitude</td><td>TBD</td><td>PENDING — establish by pressure calibration</td></tr>
        <tr><td>Offset / bias handling</td><td>TBD</td><td>PENDING — depends on sensor output and ADC input topology</td></tr>
      </tbody>
    </table>
    <h3 id="design-considerations">Design Considerations</h3>
    <ul>
      <li><strong>1/f noise:</strong> At very low frequencies (&lt; 1 Hz), amplifier noise increases
        (called 1/f or "flicker" noise). Choose an amplifier with low 1/f noise corner frequency.
      </li>
      <li><strong>Gain selection:</strong> The gain should be set so that the expected maximum signal
        fills a reasonable portion of the ADC's input range without clipping.</li>
      <li><strong>Power supply rejection:</strong> The amplifier should have high power supply
        rejection ratio (PSRR) to avoid coupling power supply noise into the signal.</li>
    </ul>
    <h2 id="component-anti-aliasing-low-pass-filter">Component: Anti-Aliasing Low-Pass Filter</h2>
    <h3 id="purpose">Purpose</h3>
    <p>Removes frequencies above half the sampling rate (Nyquist frequency) to prevent aliasing during
      digitization.</p>
    <h3 id="working-principle">Working Principle</h3>
    <blockquote>
      <p><strong>Simple Explanation:</strong>
        When you digitize a signal, you take "snapshots" at regular intervals. If there are very
        fast signal changes happening between snapshots, they can appear as false slow signals
        (aliases). The anti-aliasing filter removes these fast signals before they cause problems.
      </p>
    </blockquote>
    <blockquote>
      <p><strong>Technical Explanation:</strong>
        Per the Nyquist-Shannon sampling theorem, a signal must be sampled at more than twice its
        highest frequency component to be faithfully reconstructed. If frequency components above
        fs/2 (where fs is the sampling rate) are present during sampling, they are aliased — they
        appear as spurious lower-frequency components in the digital data. An analog low-pass filter
        before the ADC prevents this.</p>
    </blockquote>
    <h3 id="design-parameters">Design Parameters</h3>
    <table>
      <thead>
        <tr>
          <th>Parameter</th>
          <th>Value / Guidance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Passband and stopband edges</td>
          <td>TBD from the target measurement band, sampling-rate target, and required alias rejection</td>
        </tr>
        <tr>
          <td>Filter topology and order</td>
          <td>TBD after passband, stopband, phase, noise, and component constraints are defined</td>
        </tr>
        <tr>
          <td>Rolloff / stopband attenuation</td>
          <td>TBD — specify and verify against out-of-band signals and aliasing requirements</td>
        </tr>
        <tr>
          <td>Passband amplitude and phase response</td>
          <td>TBD — measure across the target band; no filter response is established</td>
        </tr>
      </tbody>
    </table>
    <h3 id="filter-type-recommendations">Filter Type Recommendations</h3>
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Advantage</th>
          <th>Disadvantage</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Butterworth</td>
          <td>Maximally flat passband</td>
          <td>Steeper phase shift near cutoff</td>
        </tr>
        <tr>
          <td>Bessel</td>
          <td>Linear phase (preserves waveform shape)</td>
          <td>Gentler rolloff</td>
        </tr>
        <tr>
          <td>Sallen-Key topology</td>
          <td>Simple to implement with op-amps</td>
          <td>Sensitivity to component tolerance</td>
        </tr>
      </tbody>
    </table>
    <p>Filter choice is a tradeoff among amplitude response, phase/group delay, attenuation, noise,
      stability, and implementation constraints. No filter topology has been selected or validated
      for this prototype.</p>
    <h2 id="component-dc-bias-circuit">Component: DC Bias Circuit</h2>
    <h3 id="purpose">Purpose</h3>
    <p>If the selected ADC input cannot accept the sensor/AFE signal polarity or common-mode level,
      offset handling may be required. The input range and bias method depend on the selected ADC and
      signal chain; both remain TBD.
    </p>
    <h3 id="implementation">Implementation</h3>
    <p>A divider, reference, or other suitable circuit may be considered after the ADC input topology,
      reference, and signal swing are known. No bias circuit or voltage is specified.</p>
    <h2 id="noise-budget">Noise Budget</h2>
    <p>The overall noise floor of the analog front end is determined by the noisiest component —
      typically the first-stage amplifier or the sensor itself.</p>
    <table>
      <thead>
        <tr>
          <th>Noise Source</th>
          <th>Contribution</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Sensor self-noise</td>
          <td>Fundamental limit</td>
        </tr>
        <tr>
          <td>Instrumentation amplifier input noise</td>
          <td>Dominates if sensor noise is low</td>
        </tr>
        <tr>
          <td>Resistor thermal noise (Johnson noise)</td>
          <td>Generally small for reasonable resistor values</td>
        </tr>
        <tr>
          <td>Power supply noise</td>
          <td>Can be significant without proper filtering</td>
        </tr>
        <tr>
          <td>PCB layout noise (ground loops, crosstalk)</td>
          <td>Depends on physical design</td>
        </tr>
      </tbody>
    </table>
    <p><strong>Key principle:</strong> Minimize noise at the first stage (sensor + amplifier). Noise
      added later in the chain is less significant because it is not amplified.</p>
    <h2 id="prototype-approach">Prototype Approach</h2>
    <p>For the MVP prototype, the analog front end complexity depends on the chosen sensor:</p>
    <ul>
      <li><strong>If using a sensor with analog output:</strong> A separate instrumentation amplifier
        and filter circuit is needed.</li>
      <li><strong>If using a sensor with built-in signal conditioning and digital output
          (I²C/SPI):</strong> The analog front end is internal to the sensor module, and the
        prototype connects directly to the digital output.</li>
    </ul>
    <p><code>Assumption</code>: If a digital-output sensor is used, the analog front-end section
      describes the internal signal conditioning for understanding purposes. The external circuit is
      simplified.</p>
    <hr />
    <p><em>See also: <Link to="/03-hardware/pressure-sensing">Pressure Sensing</Link> | <Link to="/03-hardware/adc-digitization">ADC / Digitization</Link> | <Link to="/03-hardware/hardware-overview">Hardware Overview</Link></em></p>
  </article>
</div>

    </main>
  );
}