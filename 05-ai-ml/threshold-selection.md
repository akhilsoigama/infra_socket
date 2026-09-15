# Threshold Selection

## The Threshold Problem

The Isolation Forest produces a continuous normalized anomaly index. The threshold converts this continuous score into a binary decision: NORMAL or ANOMALY.

**Setting the threshold is a trade-off:**
- **Lower threshold** → more sensitive (catches more anomalies) but more false positives
- **Higher threshold** → less sensitive (fewer false alarms) but may miss some anomalies

## Threshold Selection Methods

### Method 1: Statistical (Recommended for MVP)

1. Score all validation data (normal baseline)
2. Compute the mean and standard deviation of scores
3. Set threshold = mean + k × std_dev (e.g., k = 2 or 3)

This places the threshold at a fixed number of standard deviations above the normal score distribution.

### Method 2: Percentile-Based

Set the threshold at a high percentile (e.g., 95th or 99th) of the normal data score distribution. Any score above this is considered anomalous.

### Method 3: Precision-Recall Based (Requires Level 2 Data)

If controlled anomaly test data is available:
1. Compute precision and recall at various threshold values
2. Plot the precision-recall curve
3. Select the threshold that provides the best balance (e.g., maximum F1-score)

### Method 4: Manual / Expert

Set the threshold manually based on observation of the score distribution and domain knowledge. Adjust through experience.

## Recommended Starting Approach

For initial deployment, use **Method 1** (statistical) with k = 3 (three standard deviations above mean). This is conservative — it will produce few false positives but may miss weak anomalies. Adjust based on experience.

## Threshold Configuration

The threshold should be configurable without retraining the model:

```
Configuration:
  anomaly_threshold: 0.70
  alert_cooldown_seconds: 300
```

- `anomaly_threshold`: Score above which a window is classified as anomalous
- `alert_cooldown_seconds`: Minimum time between successive alerts (prevents alert flooding)

## Threshold Evaluation

| Metric | Definition | Impact of Threshold Change |
|---|---|---|
| True Positive Rate (Recall) | Fraction of real anomalies correctly detected | Lower threshold → higher recall |
| False Positive Rate | Fraction of normal windows incorrectly flagged | Lower threshold → higher FPR |
| Precision | Fraction of flagged windows that are truly anomalous | Lower threshold → lower precision |
| F1-Score | Harmonic mean of precision and recall | Optimal threshold maximizes F1 |

---

*See also: [Anomaly Detection](anomaly-detection.md) | [Model Evaluation](model-evaluation.md) | [False Positive Handling](false-positive-handling.md)*
