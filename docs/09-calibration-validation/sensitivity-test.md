# Sensitivity Test

## Objective
Quantify the system's sensitivity — the output change per unit of pressure input — and determine if it is sufficient for the target application.

## Procedure
Same as [Pressure Step Test](pressure-step-test.md), with focus on computing the sensitivity value.

## Sensitivity Calculation

```
Sensitivity = ΔADC_output / ΔPressure_input  (counts/Pa)

Or in voltage terms:
Sensitivity = ΔVoltage_output / ΔPressure_input  (V/Pa)
```

## Results Template

| Parameter | Value | Units |
|---|---|---|
| Measured sensitivity | _To be measured_ | counts/Pa |
| Minimum detectable pressure (from noise floor) | _Calculate: noise floor / sensitivity_ | Pa |
| Dynamic range | _Calculate: max range / min detectable_ | dB |

## Assessment
Compare the minimum detectable pressure against expected infrasound signal levels to determine if the prototype sensitivity is adequate:

| Signal Type | Expected Amplitude | Detectable? |
|---|---|---|
| Strong nearby event (< 10 km) | 1–100 Pa | `To be validated` |
| Moderate event (10–100 km) | 0.1–1 Pa | `To be validated` |
| Weak distant event (> 100 km) | 0.001–0.1 Pa | `To be validated` |
| Ambient microbaroms | 0.01–0.1 Pa | `To be validated` |

---

*See also: [Calibration Plan](calibration-plan.md) | [Pressure Step Test](pressure-step-test.md)*
