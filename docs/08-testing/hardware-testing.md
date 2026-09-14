# Hardware Testing

## Tests

### HW-01: Sensor Connectivity
**Objective:** Verify the sensor communicates with the DAQ system.
**Procedure:** Power on system; read sensor output; verify valid readings.
**Pass criteria:** Non-zero, non-saturated readings received.

### HW-02: Pressure Response
**Objective:** Verify the sensor responds to applied pressure.
**Procedure:** Apply a known pressure step (e.g., gently press on a sealed tube); observe ADC output change.
**Pass criteria:** ADC output changes proportionally to applied pressure.

### HW-03: ADC Functionality
**Objective:** Verify the ADC digitizes the analog signal correctly.
**Procedure:** Apply a known DC voltage to the ADC input; verify the digital reading matches expectations.
**Pass criteria:** ADC reading within expected range for applied voltage.

### HW-04: Temperature Sensor
**Objective:** Verify temperature sensor provides reasonable readings.
**Procedure:** Read temperature sensor; compare with a reference thermometer.
**Pass criteria:** Temperature reading within ±2°C of reference.

### HW-05: Power Supply Stability
**Objective:** Verify power supply voltages are stable and within specifications.
**Procedure:** Measure voltage at each regulated output with a multimeter over 10+ minutes.
**Pass criteria:** Voltage within ±5% of nominal; no oscillation visible on oscilloscope.

### HW-06: Reference Chamber Seal
**Objective:** Verify the reference chamber is airtight (except for the capillary).
**Procedure:** Seal the capillary; apply a small pressure step; observe sensor output over 5 minutes.
**Pass criteria:** Sensor output holds steady (does not return to zero) for at least 5 minutes with the capillary sealed.

## Results Template

| Test ID | Date | Result | Notes |
|---|---|---|---|
| HW-01 | ___ | _Pass/Fail_ | |
| HW-02 | ___ | _Pass/Fail_ | |
| HW-03 | ___ | _Pass/Fail_ | |
| HW-04 | ___ | _Pass/Fail_ | |
| HW-05 | ___ | _Pass/Fail_ | |
| HW-06 | ___ | _Pass/Fail_ | |

---

*See also: [Testing Strategy](testing-strategy.md) | [Sensor Testing](sensor-testing.md)*
