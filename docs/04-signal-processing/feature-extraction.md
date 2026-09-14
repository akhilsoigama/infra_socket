# Feature Extraction

## Purpose

Feature extraction converts each analysis window of processed signal data into a compact numerical vector (a set of numbers) that summarizes the key characteristics of the signal in that window. This feature vector is the input to the AI anomaly detection model.

> **Simple Explanation:**
> Instead of sending thousands of raw samples to the AI, we compute a "summary" of each signal window — like computing the average, the loudest point, and the main frequency. The AI then looks at these summaries to decide if something unusual is happening.

## Features Extracted

### Time-Domain Features

| Feature | Formula / Description | What It Represents |
|---|---|---|
| **RMS Amplitude** | √(mean(x²)) | Overall signal strength (root-mean-square energy) |
| **Peak Amplitude** | max(|x|) | Maximum signal excursion |
| **Peak-to-Peak** | max(x) − min(x) | Total range of signal variation |
| **Crest Factor** | Peak / RMS | How "peaky" the signal is (high = impulsive events) |
| **Zero-Crossing Rate** | Count of zero crossings / window length | Related to dominant frequency |
| **Standard Deviation** | std(x) | Variability of the signal |

### Frequency-Domain Features

| Feature | Formula / Description | What It Represents |
|---|---|---|
| **Dominant Frequency** | argmax(PSD) | Frequency with highest power |
| **Spectral Centroid** | Σ(f × P(f)) / Σ(P(f)) | "Centre of mass" of the spectrum |
| **Spectral Bandwidth** | Weighted std of frequency around centroid | Spread of spectral energy |
| **Spectral Energy** | Σ(P(f)) | Total power in the spectrum |
| **Band Energy (0.01–0.1 Hz)** | Σ(P(f)) for f in [0.01, 0.1] | Energy in the ultra-low sub-band |
| **Band Energy (0.1–1 Hz)** | Σ(P(f)) for f in [0.1, 1] | Energy in the low sub-band |
| **Band Energy (1–20 Hz)** | Σ(P(f)) for f in [1, 20] | Energy in the mid-upper sub-band |
| **Spectral Rolloff** | Frequency below which 85% of energy lies | Shape of spectral distribution |
| **Spectral Flatness** | Geometric mean(PSD) / Arithmetic mean(PSD) | How "noise-like" vs. "tonal" the signal is |

## Feature Vector

The complete feature vector for each analysis window is an array of these numerical values:

```
feature_vector = [
    rms_amplitude,
    peak_amplitude,
    crest_factor,
    zero_crossing_rate,
    dominant_frequency,
    spectral_centroid,
    spectral_bandwidth,
    spectral_energy,
    band_energy_ultra_low,
    band_energy_low,
    band_energy_mid_upper,
    spectral_rolloff,
    spectral_flatness
]
```

`Assumption`: The exact set of features may be refined during development and testing. Features that provide no discriminative value (i.e., they look the same for normal and anomalous signals) may be removed.

## Feature Normalization

Before feeding features to the AI model, they should be normalized to prevent features with large absolute values from dominating the model:

- **Standard scaling (Z-score):** (value − mean) / std_dev — transforms each feature to have mean 0 and standard deviation 1
- **Min-max scaling:** (value − min) / (max − min) — transforms each feature to the [0, 1] range

The normalization parameters (mean, std, min, max) are computed from the training data and applied consistently to all new data.

## Feature Quality

Not all features will be equally useful. Feature quality depends on:

1. **Discriminative power:** Does this feature differ between normal and anomalous signals?
2. **Stability:** Is this feature consistent for repeated measurements of the same signal?
3. **Independence:** Is this feature largely independent of other features? (Redundant features add noise without adding information.)

Feature selection and importance can be evaluated after initial data collection and model training.

---

*See also: [Signal Processing Overview](signal-processing-overview.md) | [FFT Analysis](fft-analysis.md) | [Feature Engineering](../05-ai-ml/feature-engineering.md)*
