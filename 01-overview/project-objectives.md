# Project Objectives

## Primary Objectives

### 1. Build a Functional Infrasound Sensing Prototype

Design and construct a hardware system capable of responding to atmospheric pressure variations in the **0.01–20 Hz** frequency range. The sensor subsystem should include:

- A pressure-sensing element (microbarometer or differential pressure sensor)
- A reference chamber with a controlled leak to suppress barometric drift
- A wind-noise reduction manifold using spatial averaging
- An analog front end with appropriate amplification and filtering

### 2. Digitize the Infrasound Signal

Implement an analog-to-digital conversion pipeline that:

- Samples the analog pressure signal at a rate sufficient to capture the target frequency range (minimum 40 Hz sampling rate, per Nyquist theorem)
- Provides sufficient bit resolution to distinguish weak infrasound signals from noise
- Preserves signal integrity without introducing excessive digital noise

### 3. Implement Digital Signal Processing

Build a signal-processing pipeline that includes:

- DC offset removal
- Band-pass filtering to isolate the 0.01–20 Hz range
- FFT (Fast Fourier Transform) for frequency-domain analysis
- Spectrogram generation for time-frequency visualization
- Feature extraction for AI input

### 4. Implement AI-Based Anomaly Detection

Develop an anomaly-detection system that:

- Learns a baseline of "normal" atmospheric pressure behaviour
- Flags signal windows that deviate significantly from the learned baseline
- Uses an unsupervised approach (Isolation Forest) that does not require labeled anomaly data
- Generates Normalized Anomaly Indices and compares them against configurable thresholds

> **Important:** The MVP objective is **anomaly detection**, not event classification. The system flags unusual patterns — it does not identify what caused them.

### 5. Provide Real-Time Visualization and Alerting

Build a dashboard that displays:

- Live pressure waveform
- Frequency spectrum
- Spectrogram
- Current normalized anomaly index
- Alert status
- Sensor health

## Secondary Objectives

### 6. Document the System Comprehensively

Create engineering-quality documentation covering hardware design, signal processing, AI pipeline, software architecture, testing, calibration, and deployment — suitable for hackathon evaluation, academic review, and future development.

### 7. Demonstrate Reproducibility

Ensure the design uses commonly available components and well-documented techniques so that other student teams or researchers can reproduce or extend the system.

### 8. Establish a Calibration Framework

Define calibration procedures for:

- Pressure sensitivity
- Frequency response
- Noise floor characterization
- Temperature sensitivity

`Assumption`: Actual calibration results will be measured during prototype testing. Placeholder tables are provided for recording measured values.

## Non-Objectives (Explicit Exclusions)

| Non-Objective | Reason |
|---|---|
| Certified safety/early-warning system | Requires regulatory certification and extensive validation |
| Guaranteed event classification | Requires large labeled datasets not available for MVP |
| Professional-grade noise floor | Requires research-grade components and facilities |
| Multi-sensor array triangulation | Requires multiple synchronized stations — `Future Scope` |
| Sub-milliPascal sensitivity | Requires specialized lab-grade sensors |
| Real-time source localization | Requires array processing with multiple sensors — `Future Scope` |

## Measurable Outcomes

| Objective | Measurable Outcome |
|---|---|
| Pressure response | Sensor produces measurable output for known pressure input |
| Wind-noise reduction | Signal-to-noise improvement when manifold is engaged vs. single port |
| Digitization | Clean waveform captured at target sampling rate |
| FFT | Correct frequency peaks shown for known test signals |
| Anomaly detection | Controlled test signals flagged as anomalies |
| Dashboard | Real-time display of waveform, spectrum, and anomaly status |

---

*See also: [Problem Statement](problem-statement.md) | [Proposed Solution](proposed-solution.md) | [Key Features](key-features.md)*
