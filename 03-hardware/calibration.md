# Hardware Calibration

## Why Calibration Is Required

Without calibration, the system produces raw ADC values that have no quantitative meaning. Calibration establishes the relationship between the digital output and the actual physical quantity (pressure in Pascals). It also characterizes the system's performance (sensitivity, noise floor, frequency response) and identifies any systematic errors.

## Calibration Procedures

### 1. Static Pressure Step Test

**Purpose:** Determine the sensor's sensitivity (output change per unit of pressure change).

**Method:**
1. Apply a known, static pressure difference to the sensor using a calibrated pressure source (e.g., a water manometer or precision pressure calibrator)
2. Record the ADC output at multiple pressure levels
3. Plot ADC output vs. applied pressure
4. The slope of the linear fit is the system sensitivity

**Record Template:**

| Applied Pressure (Pa) | ADC Reading | Notes |
|---|---|---|
| 0.0 | _To be measured_ | |
| 0.5 | _To be measured_ | |
| 1.0 | _To be measured_ | |
| 2.0 | _To be measured_ | |
| 5.0 | _To be measured_ | |
| 10.0 | _To be measured_ | |

**Derived:** Sensitivity = ΔADC / ΔPressure (counts/Pa or V/Pa)

### 2. Frequency Response Test

**Purpose:** Measure how the system's output amplitude varies across the target frequency range.

**Method:**
1. Apply sinusoidal pressure signals at known frequencies across the 0.01–20 Hz range
2. Record the output amplitude at each frequency
3. Plot amplitude vs. frequency (Bode plot)
4. Identify the −3 dB points (corner frequencies)

**Record Template:**

| Frequency (Hz) | Input Amplitude (Pa) | Output Amplitude (counts) | Gain (relative) | Notes |
| -------------- | -------------------- | ------------------------- | --------------- | ----- |
| 0.01           | _Known_              | _To be measured_          | _Calculate_     |       |
| 0.02           | _Known_              | _To be measured_          | _Calculate_     |       |
| 0.05           | _Known_              | _To be measured_          | _Calculate_     |       |
| 0.1            | _Known_              | _To be measured_          | _Calculate_     |       |
| 0.5            | _Known_              | _To be measured_          | _Calculate_     |       |
| 1.0            | _Known_              | _To be measured_          | _Calculate_     |       |
| 5.0            | _Known_              | _To be measured_          | _Calculate_     |       |
| 10.0           | _Known_              | _To be measured_          | _Calculate_     |       |
| 20.0           | _Known_              | _To be measured_          | _Calculate_     |       |

### 3. Noise Floor Test

**Purpose:** Determine the minimum detectable signal — the noise level when no external pressure signal is applied.

**Method:**
1. Seal the sensor in a quiet, thermally stable environment
2. Record data for an extended period (e.g., 30–60 minutes)
3. Compute the RMS noise level and the power spectral density
4. The noise floor is the lowest signal level that can be distinguished from noise

**Record Template:**

| Parameter | Value | Units | Notes |
|---|---|---|---|
| RMS noise level | _To be measured_ | Pa or counts | |
| Noise spectral density (at 1 Hz) | _To be measured_ | Pa/√Hz | |
| Noise spectral density (at 0.1 Hz) | _To be measured_ | Pa/√Hz | |
| Recording duration | ___ | minutes | |
| Temperature during test | ___ | °C | |

### 4. Temperature Response Test

**Purpose:** Characterize how sensor output changes with temperature when no pressure signal is applied.

**Method:**
1. Place the sensor in a temperature-controlled or slowly varying environment
2. Record pressure output and temperature simultaneously over several hours
3. Compute the temperature coefficient (change in output per °C)

**Record Template:**

| Temperature (°C) | ADC Reading (zero pressure) | Offset Change | Notes |
|---|---|---|---|
| 15 | _To be measured_ | _baseline_ | |
| 20 | _To be measured_ | _calculate_ | |
| 25 | _To be measured_ | _calculate_ | |
| 30 | _To be measured_ | _calculate_ | |
| 35 | _To be measured_ | _calculate_ | |

### 5. Reference Comparison (`Future Scope`)

**Purpose:** Compare the prototype's output against a calibrated reference instrument.

**Method:** Deploy the prototype alongside a calibrated microbarometer or barometric pressure sensor and compare outputs over an extended period.

> This requires access to a reference instrument, which may not be available for the MVP prototype.

## Calibration Schedule

| Calibration | When | Frequency |
|---|---|---|
| Static pressure step | Before first deployment | Once, plus after any hardware change |
| Frequency response | Before first deployment | Once, plus after any hardware change |
| Noise floor | Before first deployment, and periodically | Monthly or after environmental changes |
| Temperature response | Once during initial characterization | Once, unless hardware changes |

## Calibration Records

All calibration results should be documented with:
- Date and time
- Operator name
- Environmental conditions (temperature, humidity)
- Equipment used (reference instruments, test equipment)
- Results (tables, plots)
- Pass/fail against acceptance criteria (if defined)

---

*See also: [Calibration Plan](../09-calibration-validation/calibration-plan.md) | [Pressure Sensing](pressure-sensing.md) | [Hardware Overview](hardware-overview.md)*
