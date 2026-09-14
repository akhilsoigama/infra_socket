# Scope and Limitations

## In Scope (Prototype MVP)

The following capabilities are within the scope of the current prototype:

### Hardware
- Single-station infrasound sensing
- Differential pressure measurement with reference chamber
- Wind-noise reduction using a spatial-averaging manifold (small scale, prototype-appropriate)
- Analog signal conditioning (amplification and filtering)
- ADC digitization
- Temperature sensing
- Environmental enclosure (basic weather protection)

### Signal Processing
- DC offset removal
- Band-pass filtering (0.01–20 Hz)
- FFT-based spectral analysis
- Spectrogram generation
- Feature extraction (RMS, peak amplitude, spectral energy, dominant frequency, etc.)

### AI / ML
- Unsupervised anomaly detection using Isolation Forest
- Training on locally collected baseline data
- Configurable anomaly threshold
- Anomaly scoring and alerting

### Software
- Data acquisition and storage
- Real-time signal-processing pipeline
- REST API for data access
- Web-based dashboard
- Alert/notification system

### Documentation
- Complete engineering documentation
- Calibration framework (procedures defined; measurements to be filled in)
- Test strategy and acceptance criteria
- Demo plan for hackathon/evaluation

## Out of Scope (Explicitly Excluded from MVP)

| Item | Reason | Future Possibility |
|---|---|---|
| Event classification (explosion, meteor, volcano, etc.) | Requires large labeled datasets | `Future Scope` — Phase 5 |
| Multi-sensor array processing | Requires multiple synchronized stations | `Future Scope` — Phase 5 |
| Source localization / direction finding | Requires array with known geometry | `Future Scope` — Phase 5 |
| Sub-milliPascal sensitivity | Requires research-grade hardware | Possible with upgraded sensors |
| Certified safety/early-warning system | Requires regulatory certification | Out of scope entirely |
| Global-scale monitoring network | Requires significant infrastructure | `Future Scope` |
| Real-time source identification | Requires classification models + arrays | `Future Scope` |
| CTBTO IMS compliance | Requires specific standards and certification | Out of scope entirely |

## Known Limitations

### Hardware Limitations

1. **Wind Interference:** Even with a spatial-averaging manifold, wind noise cannot be completely eliminated. Prototype-scale manifolds (with apertures of a few metres) are less effective than the large-scale arrays (1–3 km) used by professional systems. Performance degrades in high-wind conditions.

2. **Temperature Drift:** Electronic components and the reference chamber are sensitive to temperature changes. Without active temperature compensation or a thermally stable enclosure, slow temperature drift can introduce measurement errors.

3. **Sensor Sensitivity:** Prototype-grade pressure sensors may not achieve the noise floor of research-grade microbarometers. Very weak infrasound signals may fall below the sensor's detection threshold.

4. **Single-Sensor Limitation:** A single sensor cannot determine the direction, distance, or speed of an infrasound source. It can only confirm that a pressure variation occurred at its location.

5. **Urban Noise Environment:** Urban deployments are subject to mechanical vibration, traffic-induced pressure fluctuations, HVAC systems, and other noise sources that can contaminate the infrasound measurement.

### Signal Processing Limitations

6. **Frequency Resolution vs. Time Resolution Trade-off:** Achieving fine frequency resolution at very low frequencies (e.g., 0.01 Hz) requires long analysis windows (100+ seconds). This limits the temporal precision of event detection.

7. **Filter Edge Effects:** Digital filters introduce transient artefacts at the beginning and end of data segments, which must be handled.

### AI / ML Limitations

8. **Limited Training Data:** The anomaly detection model is trained on whatever "normal" data is collected during the baseline period. If the baseline is not representative (e.g., collected during unusually calm or noisy conditions), the model's effectiveness will be reduced.

9. **False Positives:** Environmental changes (weather fronts, temperature shifts, nearby human activity) may produce signals that differ from the baseline, triggering false anomaly alerts.

10. **False Negatives:** If an anomalous event produces a signal that is similar in its extracted features to normal conditions, the model may not flag it.

11. **No Event Identification:** The MVP anomaly detection system cannot determine the cause of an anomaly. "Anomaly detected" means only that the signal differs from the learned baseline — it does not imply any specific event.

12. **Concept Drift:** Over time, "normal" atmospheric conditions change (seasonal variations, environmental changes). The model may need periodic retraining to remain effective.

### System Limitations

13. **Power Dependency:** The system requires continuous power. Power interruptions result in data loss for the affected period.

14. **Network Dependency:** The dashboard and alert system require network connectivity. Offline operation is limited to local data recording.

15. **Calibration Dependency:** Quantitative measurements (in Pascals) require proper calibration. Without calibration, the system provides relative measurements only.

## Assumption Summary

| Assumption | Impact |
|---|---|
| Deployment site has basic wind protection (not fully exposed hilltop) | Affects wind-noise performance |
| Stable power supply available | Required for continuous operation |
| Network connectivity available for dashboard/alerts | Required for remote monitoring |
| Ambient temperature range is moderate for electronics | Extreme temperatures may affect performance |
| Baseline data collection period is representative | Directly affects AI model quality |
| No strong local vibration sources (machinery, traffic) | Vibration contamination degrades data quality |

---

*See also: [Problem Statement](problem-statement.md) | [Project Objectives](project-objectives.md) | [Key Features](key-features.md)*
