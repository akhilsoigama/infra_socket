# ADC / Digitization

## Purpose

The Analog-to-Digital Converter (ADC) converts the continuous analog electrical signal from the sensor/front-end into discrete digital numbers that can be processed by software. This is the bridge between the physical/analog world and the digital processing world.

## Working Principle

> **Simple Explanation:**
> The ADC is like a very precise ruler that measures the voltage level at regular time intervals and writes down the number. The faster it measures (sampling rate), the more detail it captures over time. The more marks on the ruler (bit depth), the more precisely it can distinguish between slightly different voltage levels.

> **Technical Explanation:**
> An ADC samples the input voltage at a fixed rate (sampling frequency, fs) and quantizes each sample to the nearest discrete level. A 16-bit ADC divides the input voltage range into 2^16 = 65,536 levels. A 24-bit ADC provides 2^24 = 16,777,216 levels. The resulting digital values are integers that represent the analog voltage at each sample instant.

## Key Parameters

### Sampling Rate (fs)

| Requirement | Value | Reasoning |
|---|---|---|
| Minimum (Nyquist) | 40 Hz | Must be > 2× highest signal frequency (20 Hz) |
| Recommended | 50–100 Hz | Provides margin above Nyquist minimum |
| Practical maximum | 200 Hz | More than sufficient; higher rates waste storage |

> **Why Nyquist matters:** The Nyquist-Shannon sampling theorem states that to faithfully capture a signal of frequency f, you must sample at more than 2f. Sampling at less than 2f causes aliasing — frequencies appear to be lower than they actually are, corrupting the data irreversibly.

### Bit Depth (Resolution)

| Bit Depth | Number of Levels | Dynamic Range | Suitability |
|---|---|---|---|
| 12-bit | 4,096 | ~72 dB | Marginal — may not distinguish weak signals from quantization noise |
| 16-bit | 65,536 | ~96 dB | Adequate for most prototype applications |
| 24-bit | 16,777,216 | ~144 dB | Excellent — provides maximum dynamic range |

> **Dynamic range** is the ratio between the largest and smallest signals the ADC can represent. More bits = wider dynamic range = ability to measure both strong and very weak signals.

`Assumption`: A 16-bit or higher ADC is recommended. The specific ADC selection depends on available budget and interface requirements.

### Input Voltage Range

The ADC accepts a specific voltage range (e.g., 0–3.3 V, 0–5 V, or ±2.5 V). The analog front end must scale the sensor signal to fit within this range.

### Noise Performance

The ADC itself adds noise (quantization noise, reference noise, internal circuit noise). For a prototype, the ADC's effective number of bits (ENOB) should be evaluated — this represents the actual usable resolution after accounting for the ADC's own noise.

## ADC Types Considered

| Type | Characteristics | Suitability |
|---|---|---|
| **Sigma-Delta (ΔΣ)** | Very high resolution (24-bit), low noise, but lower speed | Excellent for infrasound (low-frequency, high-resolution) |
| **SAR (Successive Approximation)** | Moderate resolution (12–18 bit), moderate speed | Good for prototype with 16-bit models |
| **Integrated (on-chip)** | Built into microcontrollers, typically 12-bit | Marginal — may be sufficient for initial testing |

**Recommendation:** A **Sigma-Delta ADC** is well-suited for infrasound because it provides high resolution at low sampling rates — exactly matching the requirements (high precision, low speed).

## Interface Options

| Interface | Advantages | Disadvantages |
|---|---|---|
| SPI | Fast, widely supported, full-duplex | Requires more wires (4+) |
| I²C | Fewer wires (2), address multiple devices | Slower, less noise immunity |
| USB (via DAQ board) | Plug-and-play, high bandwidth | More complex, higher cost |
| Analog to MCU on-chip ADC | Simplest — no external ADC needed | Lower resolution (typically 12-bit) |

## Data Output Format

Each ADC sample is a digital integer representing the instantaneous voltage. The software must convert this raw value to a meaningful pressure unit:

```
Pressure (Pa) = (ADC_value − ADC_offset) × (V_ref / 2^n) × (1 / Gain) × (1 / Sensitivity)

Where:
  ADC_value = raw digital reading
  ADC_offset = value at zero differential pressure
  V_ref = ADC reference voltage
  n = number of bits
  Gain = amplifier gain
  Sensitivity = sensor sensitivity (V/Pa)
```

`Assumption`: Actual conversion coefficients will be determined during calibration.

## Design Considerations

1. **Reference voltage stability:** The ADC's reference voltage directly affects measurement accuracy. Use a precision voltage reference, not the microcontroller's supply voltage.
2. **Ground plane:** Separate analog and digital ground planes, connecting at a single point, to minimize digital switching noise coupling into the analog signal.
3. **Decoupling:** Place decoupling capacitors close to the ADC power and reference pins.
4. **Clock jitter:** Timing uncertainty in the sampling clock adds noise. Use a stable clock source.
5. **Input protection:** Add input protection (clamping diodes, series resistor) to prevent damage from overvoltage.

---

*See also: [Analog Front End](analog-front-end.md) | [Sampling](../04-signal-processing/sampling.md) | [Hardware Overview](hardware-overview.md)*
