# Temperature Sensing

## Purpose

Temperature monitoring serves two functions in the InfraSocket system:

1. **Data quality:** Temperature is logged alongside pressure data to flag periods where temperature-related drift may affect measurements
2. **Compensation:** Temperature data can be used to correct for known thermal effects on the sensor, reference chamber, and electronics

## Why Temperature Matters for Infrasound Sensing

### Reference Chamber Effect
The gas inside the sealed reference chamber obeys the ideal gas law (PV = nRT). If temperature changes while the volume is constant, pressure inside the chamber changes:

```
ΔP_ref ≈ P_atm × (ΔT / T)

For P_atm ≈ 101,325 Pa and ΔT = 1°C (1 K) at T = 293 K:
ΔP_ref ≈ 101,325 × (1/293) ≈ 346 Pa
```

This 346 Pa change from just 1°C is enormous. Indicative/reference infrasound pressure amplitudes may span approximately 0.01–10 Pa, depending strongly on the source, propagation conditions, and distance. Actual sensitivity/noise-floor performance remains TBD and requires calibration and validation. However, most of this change is very slow (thermal time constants are long), so the capillary leak should allow equalization. Rapid temperature changes, or thermally isolated chambers, can still cause problems.

### Sensor Drift
Pressure sensor offset and sensitivity change with temperature. This is typically specified in the sensor datasheet as offset temperature coefficient (µV/°C) and sensitivity temperature coefficient (%/°C).

### Electronics Drift
Amplifier offset, gain, and filter characteristics are all temperature-dependent.

## Sensor Options

| Type | Accuracy | Interface | Notes |
|---|---|---|---|
| Digital temperature sensor (e.g., I²C-based) | Typically ±0.5°C or better | I²C | Easy to interface, minimal external components |
| Thermistor (NTC) | Depends on characterization | Analog (via ADC) | Low cost, requires linearization |
| RTD (Resistance Temperature Detector) | ±0.1°C or better | Analog (via conditioning) | Higher accuracy, more complex circuit |
| Thermocouple | ±1°C or better | Analog (via amplifier) | Wide range, requires reference junction |

**Prototype recommendation:** A digital I²C temperature sensor is the simplest option — it can share the I²C bus with other digital peripherals and requires no additional analog circuitry.

## Placement

| Location | What It Measures | Purpose |
|---|---|---|
| Inside the enclosure, near the sensor | Electronics/sensor temperature | Detect thermal drift affecting the sensor |
| Inside/on the reference chamber | Reference gas temperature | Assess thermal pressure effects in the chamber |
| Outside the enclosure | Ambient air temperature | Environmental context for data analysis |

`Assumption`: At least one temperature sensor near the pressure sensor and/or reference chamber is recommended for the prototype. Additional sensors are optional.

## Data Integration

Temperature data is sampled at a lower rate than pressure data (e.g., once per second or once per signal window) and stored alongside pressure measurements:

```
{
  "timestamp": "2025-03-15T10:30:00.000Z",
  "pressure_adc": 32768,
  "temperature_C": 22.5,
  "quality_flag": "OK"
}
```

## Temperature Compensation (`Future Scope`)

Active temperature compensation involves applying a correction to the pressure measurement based on the measured temperature:

```
P_corrected = P_measured − f(T)
```

Where f(T) is determined during calibration by characterizing the sensor's temperature response.

> `Assumption`: For the MVP prototype, temperature data is logged for reference but active compensation is not implemented unless calibration data supports it.

---

*See also: [Reference Chamber](reference-chamber.md) | [Calibration](calibration.md) | [Hardware Overview](hardware-overview.md)*
