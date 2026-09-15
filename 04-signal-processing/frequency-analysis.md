# Frequency Analysis

## Purpose

Frequency analysis examines the spectral content of the infrasound signal to understand which frequencies are present, how strong they are, and how they change over time. This information feeds into feature extraction and anomaly detection.

## The Infrasound Frequency Range

| Sub-Band | Frequency | Period | Typical Sources |
|---|---|---|---|
| Ultra-low | 0.01–0.1 Hz | 10–100 sec | Volcanic tremor, ocean microbaroms, large weather systems |
| Low | 0.1–1 Hz | 1–10 sec | Volcanic eruptions, large explosions, severe storms |
| Mid | 1–5 Hz | 0.2–1 sec | Explosions, rocket launches, industrial sources |
| Upper | 5–20 Hz | 0.05–0.2 sec | Closer/smaller sources, some industrial, boundary with audible |

## Frequency Resolution

The frequency resolution Δf determines how finely the spectrum can distinguish nearby frequencies:

```
Δf = fs / N

Where:
  fs = sampling rate (Hz)
  N = FFT size (number of samples)
```

| FFT Size (at 50 Hz) | Window Length | Frequency Resolution |
|---|---|---|
| 512 | 10.24 sec | 0.098 Hz |
| 1024 | 20.48 sec | 0.049 Hz |
| 2048 | 40.96 sec | 0.024 Hz |
| 4096 | 81.92 sec | 0.012 Hz |

To resolve a 0.01 Hz signal, an FFT size of at least 4096 (at 50 Hz) is needed, requiring approximately 82 seconds of data per window.

## Spectral Features for Anomaly Detection

The following spectral features are extracted from each analysis window and passed to the AI model:

### 1. Dominant Frequency
The frequency with the highest power in the spectrum.

### 2. Spectral Centroid
The "centre of mass" of the spectrum — indicates where the bulk of the spectral energy is concentrated.

```
Spectral Centroid = Σ(f[k] × P[k]) / Σ(P[k])
```

### 3. Spectral Bandwidth
The spread of the spectrum around the centroid — indicates whether the energy is concentrated in a narrow band or spread broadly.

### 4. Spectral Energy
Total power in the spectrum — indicates overall signal strength.

### 5. Band Energy Ratios
Energy in specific sub-bands relative to total energy. Useful for distinguishing between different types of signals.

## Normal vs. Anomalous Spectral Patterns

| Pattern | Likely Interpretation |
|---|---|
| Low, flat spectrum | Quiet conditions (normal baseline) |
| Persistent peak at specific frequency | Continuous source (e.g., industrial, microbaroms) |
| Sudden broadband increase | Transient event (possible anomaly) |
| Strong peak at unexpected frequency | New or unusual source (possible anomaly) |
| Gradual spectral change over hours | Environmental change (weather, temperature) |

## Practical Notes

- Spectral analysis complements time-domain analysis — some anomalies are visible in the spectrum but not obvious in the waveform, and vice versa
- The spectrogram provides the most complete view by combining both time and frequency information
- Automated spectral analysis (via feature extraction and AI) can detect subtle changes that might be missed by visual inspection

---

*See also: [FFT Analysis](fft-analysis.md) | [Feature Extraction](feature-extraction.md) | [Signal Processing Overview](signal-processing-overview.md)*
