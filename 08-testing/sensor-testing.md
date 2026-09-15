# Sensor Testing

## Tests

### SEN-01: Static Sensitivity
**Objective:** Measure sensor output change per unit of pressure.
**Procedure:** Apply known pressure steps; record ADC output at each level.
**Pass criteria:** Linear relationship between pressure and output.

### SEN-02: Noise Floor
**Objective:** Characterize the minimum detectable signal.
**Procedure:** Seal sensor in quiet environment; record for 30+ minutes; compute RMS noise and PSD.
**Pass criteria:** Noise floor is measurable and documented.

### SEN-03: Linearity
**Objective:** Verify output is proportional to input across the operating range.
**Procedure:** Apply multiple pressure levels; plot output vs. input.
**Pass criteria:** R² > 0.99 for linear fit.

### SEN-04: Long-Term Drift
**Objective:** Assess sensor output stability over time.
**Procedure:** Record sensor output over 24+ hours in a stable environment.
**Pass criteria:** Drift rate is documented (no specific pass/fail threshold for MVP).

## Results Template

| Test ID | Date | Result | Measured Value | Notes |
|---|---|---|---|---|
| SEN-01 | ___ | ___ | Sensitivity: ___ counts/Pa | |
| SEN-02 | ___ | ___ | RMS noise: ___ Pa | |
| SEN-03 | ___ | ___ | R²: ___ | |
| SEN-04 | ___ | ___ | Drift: ___ Pa/hour | |

---

*See also: [Hardware Testing](hardware-testing.md) | [Calibration Plan](../09-calibration-validation/calibration-plan.md)*
