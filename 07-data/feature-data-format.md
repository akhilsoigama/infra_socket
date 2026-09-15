# Feature Data Format

## Description
Feature data contains the numerical feature vectors extracted from each signal window, used as input to the AI model.

## Record Format
```json
{
  "window_id": "WIN-20250315-103000",
  "features": {
    "rms_amplitude": 0.012,
    "peak_amplitude": 0.034,
    "crest_factor": 2.83,
    "zero_crossing_rate": 0.45,
    "dominant_frequency": 0.45,
    "spectral_centroid": 1.23,
    "spectral_bandwidth": 2.1,
    "spectral_energy": 0.0008,
    "band_energy_ultra_low": 0.0002,
    "band_energy_low": 0.0003,
    "band_energy_mid_upper": 0.0003,
    "spectral_rolloff": 5.2,
    "spectral_flatness": 0.65
  },
  "normalized": false
}
```

## Feature Vector (Array Form)
For AI model input, features are ordered as a numerical array:
```
[0.012, 0.034, 2.83, 0.45, 0.45, 1.23, 2.1, 0.0008, 0.0002, 0.0003, 0.0003, 5.2, 0.65]
```

The order must match the order used during model training.

---

*See also: [Feature Extraction](../04-signal-processing/feature-extraction.md) | [Anomaly Record Format](anomaly-record-format.md)*
