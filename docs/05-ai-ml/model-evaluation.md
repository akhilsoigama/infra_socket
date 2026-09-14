# Model Evaluation

## Evaluation Metrics

### Precision
> **Simple:** Of all the times the system said "ANOMALY," how many were actually anomalies?

```
Precision = True Positives / (True Positives + False Positives)
```

High precision = few false alarms.

### Recall (Sensitivity)
> **Simple:** Of all the actual anomalies that occurred, how many did the system catch?

```
Recall = True Positives / (True Positives + False Negatives)
```

High recall = few missed anomalies.

### F1-Score
> **Simple:** A single number that balances precision and recall. Ranges from 0 (worst) to 1 (best).

```
F1 = 2 × (Precision × Recall) / (Precision + Recall)
```

### False Positive Rate (FPR)
```
FPR = False Positives / (False Positives + True Negatives)
```

### Detection Latency
Time from when an anomalous signal enters the sensor to when the alert is generated. Includes signal window accumulation, processing, and inference time.

## Evaluation Strategy

Since real anomaly events are rare and unpredictable, evaluation relies primarily on controlled test data (Level 2):

| Test | Input | Expected Output | Evaluates |
|---|---|---|---|
| Normal baseline data | Quiet atmospheric recording | NORMAL for all/most windows | False positive rate |
| Controlled pressure pulse | Known pressure step | ANOMALY | True positive detection |
| Controlled sinusoidal signal | Known frequency sine wave | ANOMALY | Frequency sensitivity |
| Noise-only input | High wind or electrical noise | NORMAL (ideally) | Noise rejection |
| Borderline signal | Weak controlled signal | May or may not detect | Sensitivity threshold |

## Evaluation Record Template

| Metric | Value | Notes |
|---|---|---|
| Total test windows | _To be measured_ | |
| True positives | _To be measured_ | |
| False positives | _To be measured_ | |
| True negatives | _To be measured_ | |
| False negatives | _To be measured_ | |
| Precision | _To be calculated_ | |
| Recall | _To be calculated_ | |
| F1-Score | _To be calculated_ | |
| FPR | _To be calculated_ | |
| Detection latency | _To be measured_ | seconds |

> **Important:** Do not fabricate performance numbers. These fields are templates to be filled with actual measured results during testing.

---

*See also: [Model Training](model-training.md) | [Threshold Selection](threshold-selection.md) | [AI Testing](../08-testing/ai-testing.md)*
