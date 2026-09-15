# Sampling

## The Nyquist-Shannon Sampling Theorem

> **Simple Explanation:**
> To capture a wave faithfully, you need to take at least two "snapshots" per wave cycle. If you take too few snapshots, the wave appears to be slower than it actually is — this distortion is called **aliasing**, and once it happens, you cannot undo it.

> **Technical Explanation:**
> The Nyquist-Shannon theorem states that a continuous signal can be perfectly reconstructed from its samples if the sampling rate (fs) is greater than twice the highest frequency component in the signal (f_max):
>
> fs > 2 × f_max
>
> The frequency fs/2 is called the **Nyquist frequency**. Any signal components above the Nyquist frequency are aliased — they appear as false lower-frequency components in the sampled data.

## Sampling Rate Selection for InfraSocket

| Parameter | Value | Reasoning |
|---|---|---|
| Maximum signal frequency | 20 Hz | Upper bound of infrasound range |
| Nyquist minimum sampling rate | 40 Hz | 2 × 20 Hz |
| Minimum candidate sampling rate | **50 Hz** | Provides 25% margin above Nyquist |
| Preferred candidate sampling rate | **100 Hz** | More margin; practical for anti-alias filtering and digital processing |

> A sampling rate of at least 50 Hz is a minimum candidate for a 20 Hz upper-band target under ideal assumptions. A higher sampling rate such as 100 Hz may provide additional practical margin for anti-alias filtering and digital processing. Final sampling rate will be selected and validated experimentally.

### Why 50 Hz as Minimum Candidate?
- Meets Nyquist with margin
- Low enough to avoid generating excessive data volume
- High enough that the anti-aliasing filter can have a gentle rolloff (easier to design)
- Common rate used in many data acquisition systems

> **Important:** Sampling rate primarily determines the upper usable frequency and anti-aliasing requirements. Low-frequency performance also depends on sensor response, stability, observation duration and system design. Detecting/characterizing a 0.01 Hz signal (period ≈ 100 seconds) requires sufficiently long observation windows, stable sensor response, and appropriate reference chamber design. The target measurement band (0.01–20 Hz) is a design objective. Full sensor response across this entire band must be experimentally validated.

### Data Volume at 50 Hz
```
50 samples/sec × 2 bytes/sample (16-bit) = 100 bytes/sec
= 6 KB/min
= 360 KB/hour
= 8.6 MB/day
```

With metadata and storage overhead, expect approximately **10–50 MB/day** — easily manageable on modern storage.

## Anti-Aliasing

Before sampling, the analog anti-aliasing filter must attenuate all frequency components above fs/2 = 25 Hz (at 50 Hz sampling rate). See [Analog Front End](../03-hardware/analog-front-end.md) for filter design.

## Sample Timestamping

Every sample must be associated with a precise timestamp. Requirements:

- **Clock source:** Use the system clock of the DAQ microcontroller or host computer
- **Resolution:** Millisecond resolution is sufficient for 50 Hz sampling (20 ms between samples)
- **Synchronization:** If multiple sensors are used (`Future Scope`), their clocks must be synchronized (e.g., via NTP or GPS)

## Sample Format

Each raw sample consists of:
```
{
  "timestamp": "ISO 8601 format with milliseconds",
  "adc_value": integer (16-bit or 24-bit),
  "channel": 0
}
```

The raw ADC integer value is converted to physical units (Pascals) using calibration coefficients.

---

*See also: [Signal Processing Overview](signal-processing-overview.md) | [Filtering](filtering.md) | [ADC / Digitization](../03-hardware/adc-digitization.md)*
