# Dataset Strategy

## The Data Challenge

Unlike many AI applications, there is **no large, pre-labeled infrasound anomaly dataset** readily available for training a prototype sensor's anomaly detection model. This is because:

1. Each sensor has its own noise characteristics and sensitivity
2. Each deployment site has its own ambient infrasound environment
3. Infrasound "anomalies" are context-dependent — what is anomalous at one site may be normal at another
4. Publicly available infrasound data is primarily from research-grade stations, not prototype sensors

The dataset strategy must be realistic for a student/hackathon project.

## Three-Level Data Strategy

### Level 1: Normal Baseline (Primary — Required for MVP)

**What:** Collect data from the prototype sensor during normal, quiet atmospheric conditions.

**How:**
1. Deploy the sensor in a relatively quiet location
2. Initial prototype validation may begin with shorter controlled recordings, while longer baseline collection is planned to capture daily and environmental variability.
3. A 12–72 hour continuous recording (or longer) is the recommended baseline collection target.
4. Process all recorded data through the signal-processing pipeline
4. Extract features from each analysis window
5. Apply quality checks — retain only high-quality windows
6. This "normal baseline" dataset is used to train the Isolation Forest

| Data Collection                 | Status                        |
| ------------------------------- | ----------------------------- |
| Short controlled recordings     | Prototype validation          |
| Extended environmental baseline | Proposed                      |
| 12–72 hour baseline             | Recommended collection target |
| Longer-term monitoring          | Future / To Be Validated      |

**Volume estimate:**
```
At 1 window per 30 seconds:
12 hours = 1,440 windows
24 hours = 2,880 windows
72 hours = 8,640 windows
```

Each window produces one feature vector (10–15 numbers). The amount and diversity of normal baseline data required for reliable performance will be determined experimentally.

**Requirements:**
- Collection period should include day and night (diurnal variation)
- Avoid collection during obviously unusual conditions (storms, nearby construction)
- Log environmental conditions (temperature, wind) during collection
- Normal baseline data should ideally represent:
  - quiet conditions
  - wind (various speeds)
  - rain
  - traffic
  - construction
  - machinery
  - aircraft overhead
  - weather changes (fronts, pressure changes)
  - day/night variation
  - temperature changes
  - other local environmental conditions

> The AI should learn the site's normal background, including its variability, before anomalies are flagged.

### Level 2: Controlled Test Anomalies (Secondary — Recommended)

**What:** Generate known, controlled low-frequency pressure signals in a safe laboratory or test environment to verify that the system detects them as anomalies.

**How:**
### A. Synthetic signal injection

For validating:
- filtering
- FFT
- feature extraction
- AI pipeline
- anomaly detection logic

> Synthetic signal injection validates the signal-processing and AI pipeline but does not by itself validate atmospheric sensing performance.

### B. Controlled pressure variation

For validating:
- pressure sensor
- diaphragm
- differential pressure measurement
- reference chamber
- analog electronics
- ADC
- calibration

### C. Real environmental recordings

For validating:
- environmental noise
- wind effects
- urban interference
- real-world anomaly screening

> An ordinary speaker cannot reliably generate/validate the complete 0.01–20 Hz atmospheric infrasound band.

### Level 3: Public Research Datasets (Supplementary — Future Scope)

**What:** Use publicly available infrasound datasets from research institutions to supplement local data.

**Potential Sources:**

| Source | Description | Access |
|---|---|---|
| EarthScope (formerly IRIS) Transportable Array | Infrasound waveform data from US stations | Public, FDSN web services |
| CTBTO vDEC | IMS infrasound station data | Restricted; scientific access by application |
| Boise State University Infrasound Repository | Research datasets (volcanic, avalanche, etc.) | Public (ScholarWorks) |
| KNMI Data Platform | Netherlands infrasound station data | Public (NetCDF format) |

**Limitations:**
- Data is from different sensors with different characteristics than the prototype
- May require format conversion and preprocessing
- Licensing and terms of use must be respected
- Cannot be directly used to train the prototype's sensor-specific model, but can be used for algorithm development and testing

## Data Splitting

For model evaluation (especially with Level 2 data):

| Split | Purpose | Source |
|---|---|---|
| Training set | Train the Isolation Forest on normal data | Level 1 (70–80% of normal baseline) |
| Validation set | Tune threshold and parameters | Level 1 remainder + Level 2 controlled anomalies |
| Test set | Final performance evaluation | Held-out Level 1 + Level 2 data |

### Data Leakage Prevention

> **Data leakage** occurs when information from the test or validation set accidentally influences the training process, leading to overly optimistic performance estimates.

Prevention measures:
1. **Temporal separation:** If using time-series data, split by time — training data from earlier periods, test data from later periods
2. **No feature computation on test data during training:** Normalization parameters (mean, std) are computed only from training data
3. **No model tuning on test data:** The test set is used only for final evaluation, never for adjusting parameters

## Class Imbalance

In real deployment, anomalies are expected to be very rare (< 1% of all windows). This creates a class imbalance problem:

- **For training:** Not a problem — Isolation Forest trains on normal data only
- **For evaluation:** A model that always predicts "normal" can achieve misleadingly high accuracy when anomalies are rare, while still being ineffective for anomaly detection. Therefore, precision, recall and F1-score should be evaluated alongside other appropriate metrics.

## Noise Contamination

Training data may inadvertently contain noise artefacts (sensor glitches, wind gusts, temperature spikes) that are not true infrasound events. Quality checks before training help, but some contamination is likely.

**Mitigation:**
- Apply strict quality checks to training data
- Use the `contamination` parameter of Isolation Forest to account for a small fraction of "impure" training data
- Periodically retrain with cleaner data as more data becomes available

## Dataset Documentation

Every dataset used should be documented with:
- Collection start and end times
- Sensor configuration
- Deployment location
- Environmental conditions
- Quality check results
- Number of windows retained vs. rejected
- Any known issues

---

*See also: [AI Overview](ai-overview.md) | [Data Preprocessing](data-preprocessing.md) | [Model Training](model-training.md)*
