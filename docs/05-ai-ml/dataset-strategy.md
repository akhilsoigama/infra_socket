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
2. Record continuously for 12–72 hours (longer is better)
3. Process all recorded data through the signal-processing pipeline
4. Extract features from each analysis window
5. Apply quality checks — retain only high-quality windows
6. This "normal baseline" dataset is used to train the Isolation Forest

**Volume estimate:**
```
At 1 window per 30 seconds:
12 hours = 1,440 windows
24 hours = 2,880 windows
72 hours = 8,640 windows
```

Each window produces one feature vector (10–15 numbers). This is a small dataset by ML standards, but sufficient for Isolation Forest.

**Requirements:**
- Collection period should include day and night (diurnal variation)
- Avoid collection during obviously unusual conditions (storms, nearby construction)
- Log environmental conditions (temperature, wind) during collection

### Level 2: Controlled Test Anomalies (Secondary — Recommended)

**What:** Generate known, controlled low-frequency pressure signals in a safe laboratory or test environment to verify that the system detects them as anomalies.

**How:**
1. Use a speaker, pneumatic pump, or sealed chamber with a controlled leak to produce known pressure variations
2. Apply these signals to the sensor while the system is running
3. Record the sensor data, features, and AI output
4. Verify that the AI flags these controlled signals as anomalies

**Purpose:**
- Validates that the anomaly detection pipeline works end-to-end
- Provides test data for evaluating precision and recall
- Does NOT require dangerous or destructive demonstrations

**Important:** These are controlled test signals, not real infrasound events. They validate the system's detection pipeline, not its ability to detect specific real-world events.

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
- **For evaluation:** Must use appropriate metrics (precision, recall, F1) rather than simple accuracy, because a model that always says "normal" would have > 99% accuracy but be useless

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
