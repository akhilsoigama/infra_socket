# Signal Testing

## Tests

### SIG-01: Known Low-Frequency Signal
**Objective:** Verify the system correctly captures and processes a known signal.
**Procedure:** Apply a known-frequency pressure signal (e.g., 1 Hz sine wave); verify FFT shows correct peak.
**Pass criteria:** FFT shows peak at the applied frequency within frequency resolution.

### SIG-02: Frequency Sweep
**Objective:** Verify frequency response across the target range.
**Procedure:** Apply sinusoidal signals at multiple frequencies (0.1, 0.5, 1, 5, 10, 20 Hz); measure output amplitude.
**Pass criteria:** Output amplitude is documented at each frequency; response matches expectations.

### SIG-03: Noise-Only Recording
**Objective:** Characterize the noise environment.
**Procedure:** Record in a quiet environment with no applied signal for 30+ minutes.
**Pass criteria:** PSD shows expected noise characteristics; no unexpected spectral peaks.

### SIG-04: Band-Pass Filter Verification
**Objective:** Verify the digital filter correctly passes 0.01–20 Hz and attenuates outside.
**Procedure:** Inject signals at various frequencies; measure pre- and post-filter amplitudes.
**Pass criteria:** In-band signals preserved; out-of-band signals attenuated.

### SIG-05: Long-Duration Recording
**Objective:** Verify system stability during extended operation.
**Procedure:** Record continuously for 24+ hours; check for data gaps, drift, or errors.
**Pass criteria:** No data gaps; processing pipeline remains functional.

## Results Template

| Test ID | Date | Result | Notes |
|---|---|---|---|
| SIG-01 | ___ | _Pass/Fail_ | |
| SIG-02 | ___ | _Pass/Fail_ | |
| SIG-03 | ___ | _Pass/Fail_ | |
| SIG-04 | ___ | _Pass/Fail_ | |
| SIG-05 | ___ | _Pass/Fail_ | |

---

*See also: [Testing Strategy](testing-strategy.md) | [Signal Processing Overview](../04-signal-processing/signal-processing-overview.md)*
