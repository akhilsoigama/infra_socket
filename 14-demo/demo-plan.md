# Demo Plan

## Overview

The demo is designed to be safe, reproducible, and effective for a hackathon or project evaluation. It demonstrates the complete pipeline from sensor input to AI anomaly detection and dashboard visualization.

> **Safety:** No unsafe, explosive, or dangerous physical demonstrations. All test signals are generated through safe, controlled methods (e.g., gently blowing into a tube, synthetic signal injection, or applying a controlled pressure step via a syringe/sealed chamber).

## Validation Distinctions for Demo

### Synthetic Signal Injection
Used to validate:
- FFT
- filtering
- feature extraction
- AI processing
- anomaly detection logic

> Synthetic signal injection validates the signal-processing and AI pipeline but does not by itself validate atmospheric sensing performance.

### Controlled Pressure Variation
Used to validate:
- pressure sensor
- diaphragm
- differential pressure measurement
- reference chamber
- analog front end
- ADC
- calibration

### Real Environmental Recordings
Used to validate:
- environmental noise
- wind effects
- urban interference
- real-world anomaly screening

## Demo Segments

### Demo 1: Normal Atmospheric Signal

**What:** Show the system recording the ambient atmospheric pressure in a quiet room.

**Expected Output:**
```
Live Waveform: Low-amplitude noise
FFT Spectrum: Low, flat spectrum
Anomaly Index: Low
Status: ✅ NORMAL
```

**Duration:** 1–2 minutes

### Demo 2: Controlled Anomaly

**What:** Introduce a controlled low-frequency pressure signal (e.g., by gently blowing into the manifold tube, tapping a sealed volume, or applying a controlled pressure variation / synthetic signal injection).

**Expected Output:**
```
Live Waveform: Visible pressure excursion
FFT Spectrum: Clear peak at the test frequency
Anomaly Index: Elevated
Status: 🚨 POTENTIAL ANOMALY DETECTED
Dashboard Alert: Anomaly notification appears
```

**Duration:** 2–3 minutes

### Demo 3: FFT / Spectrogram Visualization

**What:** Show the frequency spectrum and spectrogram updating in real time, highlighting the difference between normal and test signal conditions.

**Duration:** 1 minute

### Demo 4: AI Normalized Anomaly Index

**What:** Point to the normalized anomaly index meter on the dashboard. Show how it stays low during normal conditions and spikes during the test signal.

**Duration:** 1 minute

### Demo 5: Dashboard Alert

**What:** Show the alert notification that appeared when the anomaly was detected. Show the event timeline and alert history.

**Duration:** 1 minute

## Demo Requirements

| Requirement | Details |
|---|---|
| Working prototype hardware | Sensor, ADC, manifold connected |
| Running software | All services active on edge computer |
| Trained AI model | Baseline data collected, model trained |
| Dashboard accessible | Web browser on presentation laptop |
| Controlled test signal method | Chosen and tested beforehand |
| Backup plan | Pre-recorded demo data in case of hardware issues |

---

*See also: [Demo Scenario](demo-scenario.md) | [Judge Demo Flow](judge-demo-flow.md)*
