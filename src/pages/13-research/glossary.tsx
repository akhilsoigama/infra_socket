import { Link } from 'react-router-dom';

export default function Page13ResearchGlossary() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <p className="breadcrumb"><Link to="/">Home</Link> / Research / Glossary</p>
  <details className="mobile-nav"><summary>Documentation navigation</summary><p><Link to="/13-research/background">Background</Link> · <Link to="/13-research/technical-assumptions">Technical Assumptions</Link> · <Link to="/13-research/references">References</Link></p></details>
  <h1>Glossary</h1>
  <p className="lede">Short definitions for terms used in the InfraSocket instrumentation and signal-processing documentation.</p>
  <h2>Measurement and hardware</h2>
  <dl>
    <dt><strong>Infrasound</strong></dt><dd>Atmospheric acoustic or pressure variations at frequencies below the conventional audible range. InfraSocket documents approximately 0.01–20 Hz as a design target, not a measured instrument response.</dd>
    <dt><strong>Microbarometer</strong></dt><dd>An instrument designed to measure small atmospheric pressure variations, often at low frequencies.</dd>
    <dt><strong>Pressure fluctuation</strong></dt><dd>A time-varying deviation in pressure relative to a reference or local mean.</dd>
    <dt><strong>Differential pressure</strong></dt><dd>The pressure difference between two ports or locations, commonly written ΔP = P₁ − P₂.</dd>
    <dt><strong>Wind noise</strong></dt><dd>Pressure fluctuations associated with wind-driven flow and turbulence at or near a pressure inlet; it can overlap the signal band.</dd>
    <dt><strong>WNRS</strong></dt><dd>Wind-noise reduction system: an inlet/manifold arrangement intended to reduce wind-generated pressure fluctuations. Its InfraSocket attenuation is pending measurement.</dd>
    <dt><strong>Spatial averaging</strong></dt><dd>Combining pressure contributions from multiple locations. Ideal 1/√N RMS-noise scaling requires independent, equal-variance noise contributions and is not a guaranteed manifold result.</dd>
    <dt><strong>Reference chamber</strong></dt><dd>A volume connected through pneumatic resistance to provide a frequency-dependent pressure reference. Its actual time constant and response require characterization.</dd>
    <dt><strong>AFE</strong></dt><dd>Analog front end: circuitry between a sensor output and an ADC, potentially including amplification, filtering, protection, and bias/offset handling.</dd>
    <dt><strong>ADC</strong></dt><dd>Analog-to-digital converter; samples an analog input and maps it to digital codes. Nominal bit depth does not alone determine system sensitivity.</dd>
    <dt><strong>Sampling rate</strong></dt><dd>Number of samples acquired per second, expressed in samples/s or Hz.</dd>
    <dt><strong>Nyquist frequency</strong></dt><dd>Half the sampling rate, fₛ/2. For a 20 Hz upper-band target, the theoretical condition is fₛ &gt; 40 Hz; practical anti-alias filtering requires transition-band margin.</dd>
  </dl>
  <h2>Signal and analysis</h2>
  <dl>
    <dt><strong>FFT</strong></dt><dd>Fast Fourier Transform, an algorithm for computing a discrete Fourier transform.</dd>
    <dt><strong>Spectrogram</strong></dt><dd>A time-frequency representation, commonly formed by applying a Fourier transform to overlapping signal windows.</dd>
    <dt><strong>Noise floor</strong></dt><dd>A measured background-noise level over a stated bandwidth and measurement method; it must include units and conditions.</dd>
    <dt><strong>Sensitivity</strong></dt><dd>Change in output per change in input pressure, such as ΔV/ΔP or calibrated digital units per pascal.</dd>
    <dt><strong>Calibration</strong></dt><dd>Comparison with a known reference or stimulus to establish the relationship between indicated output and input quantity, with uncertainty recorded.</dd>
    <dt><strong>Drift</strong></dt><dd>Change in output or calibration relationship over time or environmental conditions when the input is held constant.</dd>
    <dt><strong>RMS</strong></dt><dd>Root mean square, a measure of signal magnitude over a specified interval.</dd>
    <dt><strong>SNR</strong></dt><dd>Signal-to-noise ratio: a comparison of signal power or amplitude to noise under a stated bandwidth and convention.</dd>
    <dt><strong>Anomaly detection</strong></dt><dd>Identification of samples or feature vectors that differ from a defined baseline; it does not by itself identify a physical cause.</dd>
    <dt><strong>Isolation Forest</strong></dt><dd>An unsupervised anomaly-detection method that isolates observations by recursive partitioning. An anomaly score is not event classification or confirmation.</dd>
  </dl>
  <h2>Timing</h2>
  <dl>
    <dt><strong>NTP / SNTP</strong></dt><dd>Network Time Protocol and its simpler variant, Simple Network Time Protocol, used to synchronize clocks over IP networks.</dd>
    <dt><strong>GNSS</strong></dt><dd>Global Navigation Satellite System; satellite navigation systems can provide a time reference when appropriately received and integrated.</dd>
    <dt><strong>PPS</strong></dt><dd>Pulse per second, a timing signal that can provide a precise second boundary when paired with a suitable clock and capture hardware.</dd>
    <dt><strong>RTC</strong></dt><dd>Real-time clock: a clock/calendar device intended to maintain time when the main system is powered down or disconnected.</dd>
  </dl>
  <footer>Definitions are general engineering usage; project-specific specifications and measured values are tracked separately in <Link to="/09-calibration-validation/engineering-claims-evidence">Engineering Claims &amp; Evidence</Link>.</footer>
</div>

    </main>
  );
}