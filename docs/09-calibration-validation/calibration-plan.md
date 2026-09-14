# Calibration Plan

## Purpose

Calibration establishes the quantitative relationship between the sensor's digital output and the physical pressure being measured. Without calibration, the system produces relative measurements only.

## Calibration Tests

| Test | Document | Purpose |
|---|---|---|
| Pressure step test | [pressure-step-test.md](pressure-step-test.md) | Determine sensitivity |
| Frequency response test | [frequency-response-test.md](frequency-response-test.md) | Characterize frequency behaviour |
| Noise floor test | [noise-floor-test.md](noise-floor-test.md) | Determine minimum detectable signal |
| Sensitivity test | [sensitivity-test.md](sensitivity-test.md) | Quantify output per unit pressure |
| Validation methodology | [validation-methodology.md](validation-methodology.md) | Overall validation approach |

## Calibration Equipment Needed

| Equipment | Purpose | Availability |
|---|---|---|
| Precision pressure source (water manometer or calibrator) | Apply known pressure | Can be built from water column |
| Reference thermometer | Temperature measurement | Widely available |
| Multimeter | Voltage verification | Standard lab equipment |
| Oscilloscope (optional) | Signal quality observation | Helpful but not essential |
| Reference barometer (optional) | Absolute pressure reference | For advanced calibration |

## Calibration Procedure Overview

1. Set up the sensor in a controlled environment
2. Record baseline (zero-pressure) output for 10+ minutes
3. Apply known pressure steps and record output at each level
4. Apply known frequency sinusoids and record output amplitude
5. Record noise floor with sensor sealed
6. Measure temperature during all tests
7. Document all results in the calibration records

## Calibration Records

All calibration data should be preserved with:
- Date, time, and operator
- Environmental conditions
- Equipment used
- Measurement results
- Calculated parameters (sensitivity, noise floor, etc.)

---

*See also: [Hardware Calibration](../03-hardware/calibration.md) | [Validation Methodology](validation-methodology.md)*
