# False Positive Handling

## What Are False Positives?

A false positive occurs when the system flags a signal window as "ANOMALY" when it is actually a normal environmental variation. False positives reduce user trust and can lead to alert fatigue.

## Common Causes

| Cause | Mechanism | Mitigation |
|---|---|---|
| Weather change | New weather pattern differs from training baseline | Periodic retraining; wider baseline collection |
| Wind gust | Brief pressure spike from wind | Quality checks; improved manifold |
| Temperature shift | Thermal drift affects features | Temperature monitoring; compensation |
| Vehicle/traffic | Nearby vehicle creates pressure pulse | Site selection; vibration isolation |
| Construction/activity | New local noise source | Retrain baseline; adaptive threshold |
| Sensor drift | Electronics drift over time | Periodic recalibration; health monitoring |
| Insufficient training data | Baseline does not capture full range of normal | Longer baseline collection |
| Industrial machinery | Periodic or aperiodic mechanical vibration | Frequency-based filtering; site selection |
| Aircraft | Overhead flights produce pressure signatures | Baseline should include aircraft events |
| Thunderstorms | Atmospheric pressure transients | Quality checks; weather correlation |
| HVAC systems | Nearby heating/cooling creates pressure variations | Site selection; baseline inclusion |
| Temperature-related pressure changes | Diurnal thermal effects on atmosphere | Longer baseline; temperature logging |

## Environmental Interference Processing Architecture

> AI alone does not solve environmental interference. Wind-noise reduction and signal quality checks are necessary before AI screening.

```text
Atmospheric Pressure Variation
            ↓
     Pressure Sensor
            ↓
   Wind-Noise Reduction
            ↓
    Analog Filtering
            ↓
          ADC
            ↓
 Signal Quality Checks
            ↓
 Frequency / Amplitude / Duration Analysis
            ↓
       AI Screening
            ↓
 Normal / Potential Anomaly
            ↓
 Further Correlation / Analysis
```

> **Important:** Local urban disturbances can generate pressure fluctuations that differ from the learned baseline. InfraSocket therefore treats AI as anomaly screening rather than definitive event identification. Urban deployment is a challenging validation scenario. The prototype will characterize environmental noise before making claims about event-detection performance.

## Mitigation Strategies

### 1. Confirmation Window
Require anomalous scores in multiple consecutive windows before triggering an alert:

```
Single anomalous window → Log only (no alert)
2+ consecutive anomalous windows → Trigger alert
```

### 2. Alert Cooldown
After an alert, suppress further alerts for a configurable period (e.g., 5 minutes).

### 3. Multi-Feature Confirmation
If possible, check whether the anomaly is visible in multiple independent features (time-domain AND frequency-domain).

### 4. Temperature Correlation
If an anomaly correlates with a sharp temperature change, it may be a thermal artefact rather than an infrasound event. Flag these for review.

### 5. Periodic Baseline Update
Retrain the model periodically with recent data to account for gradual environmental changes.

### 6. Human Review
For the prototype, include a "review" workflow where flagged anomalies can be manually inspected and marked as true positive, false positive, or uncertain.

---

*See also: [Threshold Selection](threshold-selection.md) | [Model Evaluation](model-evaluation.md) | [Anomaly Detection](anomaly-detection.md)*
