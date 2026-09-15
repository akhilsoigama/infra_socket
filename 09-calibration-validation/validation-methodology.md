# Validation Methodology

## Approach

Validation screens for that the system meets its stated objectives and behaves as documented. It is broader than individual calibration tests — it assesses the system as a whole.

## Validation Levels

### Level 1: Component Validation
Each hardware and software component is tested individually (see [Testing Strategy](../08-testing/testing-strategy.md)).

### Level 2: Integration Validation
The complete pipeline is tested end-to-end (see [Integration Testing](../08-testing/integration-testing.md)).

### Level 3: Environmental Validation
The system is tested under realistic conditions (see [Environmental Testing](../08-testing/environmental-testing.md)).

### Level 4: Reference Comparison (`Future Scope`)
The prototype's output is compared against a calibrated reference instrument deployed at the same location.

## Validation Matrix

| Parameter              | Target/Requirement              | Measurement Method                 | Status      |
| ---------------------- | ------------------------------- | ---------------------------------- | ----------- |
| Frequency response     | 0.01–20 Hz target               | Controlled frequency/pressure test | To validate |
| Sampling               | Suitable for 20 Hz upper band   | ADC test                           | To validate |
| Noise floor            | Experimentally measured         | Quiet-environment recording        | Pending     |
| Sensitivity            | V/Pa or Pa/count                | Reference pressure test            | Pending     |
| Wind-noise attenuation | Experimentally measured         | Controlled wind comparison         | Pending     |
| Temperature drift      | Measured over temperature range | Environmental test                 | Pending     |
| AI precision           | Experimentally measured         | Held-out validation set            | Pending     |
| False-positive rate    | Experimentally measured         | Normal environmental dataset       | Pending     |
| Stability              | Long-duration test              | 24h/72h recording                  | Pending     |

## Limitations of Validation

- Without a reference instrument, absolute accuracy cannot be verified
- Environmental validation depends on weather conditions during the test period
- AI validation depends on the quality and representativeness of the baseline data
- A single prototype at a single location provides limited statistical evidence

---

*See also: [Calibration Plan](calibration-plan.md) | [Testing Strategy](../08-testing/testing-strategy.md)*
