# Pressure Step Test

## Objective
Determine the system's sensitivity (output change per unit of pressure input).

## Setup
1. Connect sensor to a known pressure source (e.g., water manometer: 1 cm H₂O ≈ 98.1 Pa)
2. Record ADC output at each pressure level
3. Include positive and negative pressure steps if possible

## Procedure
1. Record zero-pressure baseline for 5 minutes
2. Apply pressure step and hold for 60 seconds
3. Record ADC reading during steady state
4. Return to zero; record for 60 seconds
5. Repeat for multiple pressure levels

## Results Template

| Step | Applied Pressure (Pa) | ADC Reading (mean) | ADC Reading (std) | Notes |
|---|---|---|---|---|
| Baseline | 0.0 | _To be measured_ | _To be measured_ | |
| Step 1 | _Known_ | _To be measured_ | _To be measured_ | |
| Step 2 | _Known_ | _To be measured_ | _To be measured_ | |
| Step 3 | _Known_ | _To be measured_ | _To be measured_ | |
| Step 4 | _Known_ | _To be measured_ | _To be measured_ | |

## Derived Parameters

| Parameter | Value | Units |
|---|---|---|
| Sensitivity | _Calculate: ΔADC / ΔPa_ | counts/Pa |
| Linearity (R²) | _Calculate from fit_ | dimensionless |
| Offset | _Baseline ADC value_ | counts |

---

*See also: [Calibration Plan](calibration-plan.md) | [Sensitivity Test](sensitivity-test.md)*
