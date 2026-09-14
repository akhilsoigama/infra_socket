# Validation Methodology

## Approach

Validation confirms that the system meets its stated objectives and behaves as documented. It is broader than individual calibration tests — it assesses the system as a whole.

## Validation Levels

### Level 1: Component Validation
Each hardware and software component is tested individually (see [Testing Strategy](../08-testing/testing-strategy.md)).

### Level 2: Integration Validation
The complete pipeline is tested end-to-end (see [Integration Testing](../08-testing/integration-testing.md)).

### Level 3: Environmental Validation
The system is tested under realistic conditions (see [Environmental Testing](../08-testing/environmental-testing.md)).

### Level 4: Reference Comparison (`Future Scope`)
The prototype's output is compared against a calibrated reference instrument deployed at the same location.

## Validation Checklist

| Item | Method | Status |
|---|---|---|
| Sensor produces measurable output for known pressure | Pressure step test | _Pending_ |
| System response covers 0.01–20 Hz range | Frequency response test | _Pending_ |
| Noise floor is characterized | Noise floor test | _Pending_ |
| FFT correctly identifies known frequencies | Signal testing | _Pending_ |
| AI flags controlled anomalies | AI testing | _Pending_ |
| Dashboard displays correct data | Integration testing | _Pending_ |
| Wind manifold provides noise reduction | Environmental testing | _Pending_ |

## Limitations of Validation

- Without a reference instrument, absolute accuracy cannot be verified
- Environmental validation depends on weather conditions during the test period
- AI validation depends on the quality and representativeness of the baseline data
- A single prototype at a single location provides limited statistical evidence

---

*See also: [Calibration Plan](calibration-plan.md) | [Testing Strategy](../08-testing/testing-strategy.md)*
