# AI Testing

## Tests

### AI-01: Normal Signal Classification
**Objective:** Verify that normal baseline data receives low Normalized Anomaly Indices.
**Procedure:** Feed normal (quiet) signal data through the trained model.
**Pass criteria:** Normalized Anomaly Indices are below the threshold for >95% of windows.

### AI-02: Controlled Anomaly Detection
**Objective:** Verify that a controlled test signal is detected as an anomaly.
**Procedure:** Apply a controlled pressure signal; verify AI flags it.
**Pass criteria:** normalized anomaly index exceeds the threshold.

### AI-03: Noise-Only Input
**Objective:** Verify that pure noise is not flagged as an anomaly.
**Procedure:** Record in a noisy (but normal) environment; check Normalized Anomaly Indices.
**Pass criteria:** False positive rate is acceptable (documented).

### AI-04: Borderline Signal
**Objective:** Assess detection of weak signals near the detection threshold.
**Procedure:** Apply progressively weaker test signals; observe when detection fails.
**Pass criteria:** Minimum detectable signal level is documented.

### AI-05: False Positive Rate
**Objective:** Measure the rate of false alarms during normal operation.
**Procedure:** Run the system for 24+ hours during normal conditions; count false alerts.
**Pass criteria:** False positive rate is documented.

### AI-06: False Negative Rate
**Objective:** Measure the rate of missed detections.
**Procedure:** Apply multiple controlled test signals; count how many are missed.
**Pass criteria:** Detection rate is documented.

### AI-07: Model Load Failure
**Objective:** Verify system continues operating if the AI model fails to load.
**Procedure:** Delete or corrupt the model file; start the system.
**Pass criteria:** Data recording continues; AI scoring is skipped with an error log.

## Results Template

| Test ID | Date | Result | Measured Value | Notes |
|---|---|---|---|---|
| AI-01 | ___ | ___ | Normal score: ___ | |
| AI-02 | ___ | ___ | normalized anomaly index: ___ | |
| AI-03 | ___ | ___ | Noise FPR: ___ | |
| AI-04 | ___ | ___ | Min detectable: ___ | |
| AI-05 | ___ | ___ | FPR: ___/24hr | |
| AI-06 | ___ | ___ | Detection rate: ___ | |
| AI-07 | ___ | ___ | Graceful degradation: ___ | |

---

*See also: [Testing Strategy](testing-strategy.md) | [Model Evaluation](../05-ai-ml/model-evaluation.md)*
