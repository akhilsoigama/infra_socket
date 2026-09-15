# Feature Engineering

## Purpose

Feature engineering determines which numerical characteristics of the signal are fed to the AI model. Well-chosen features capture the essential differences between normal and anomalous signals, enabling effective anomaly detection.

## Feature Categories

### Time-Domain Features
Computed directly from the filtered signal samples:
- RMS amplitude, peak amplitude, crest factor, zero-crossing rate, standard deviation

### Frequency-Domain Features
Computed from the FFT / power spectrum:
- Dominant frequency, spectral centroid, spectral bandwidth, spectral energy, band energies, spectral rolloff, spectral flatness

> See [Feature Extraction](../04-signal-processing/feature-extraction.md) for the full feature catalog.

## Feature Selection Considerations

### Relevance
A feature is useful only if it differs between normal and anomalous conditions. Features that are constant or randomly varying regardless of the signal state add noise without adding information.

### Redundancy
Highly correlated features carry the same information. Including many redundant features can slow the model without improving performance. After initial data collection, compute the correlation matrix between features and consider removing highly correlated pairs.

### Stability
A good feature should produce similar values for similar signals. If a feature varies wildly due to minor noise differences, it is unstable and may not be useful.

## Feature Engineering Strategy

For the MVP:

1. **Start with all proposed features** (from [Feature Extraction](../04-signal-processing/feature-extraction.md))
2. **Collect baseline data** and compute features
3. **Analyze feature distributions** — plot histograms, check for constant or highly variable features
4. **Compute correlation matrix** — identify redundant features
5. **Train initial model** with all features
6. **Evaluate feature importance** — Isolation Forest does not directly provide feature importance, but permutation importance or ablation studies can be used
7. **Refine feature set** — remove uninformative or redundant features

`Assumption`: The initial feature set will be refined based on empirical data. The features listed are a starting point based on standard practice in audio/vibration anomaly detection.

## Advanced Features (`Future Scope`)

| Feature | Description | Requirement |
|---|---|---|
| Mel-frequency cepstral coefficients (MFCCs) | Common in audio analysis | May not be meaningful for sub-1 Hz signals |
| Wavelet coefficients | Multi-resolution time-frequency analysis | More complex implementation |
| Auto-correlation features | Periodicity detection | Useful for repeating sources |
| Temporal context features | Features from adjacent windows | Requires sequential modeling |

---

*See also: [Feature Extraction](../04-signal-processing/feature-extraction.md) | [Data Preprocessing](data-preprocessing.md) | [Model Selection](model-selection.md)*
