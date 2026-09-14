# FFT Analysis

## What Is FFT?

> **Simple Explanation:**
> Imagine you are listening to a chord played on a piano. Your ear hears a single combined sound, but your brain can identify the individual notes. The FFT does the same thing for pressure signals — it takes a combined signal that varies over time and breaks it down into its individual frequency components. It answers the question: "What frequencies are present in this signal, and how strong is each one?"

> **Technical Explanation:**
> The Fast Fourier Transform (FFT) is an efficient algorithm for computing the Discrete Fourier Transform (DFT). It transforms a finite sequence of N time-domain samples into N complex-valued frequency-domain coefficients. The magnitude of each coefficient represents the amplitude of the corresponding frequency component. The FFT reduces the computational complexity from O(N²) for direct DFT to O(N log N).

> **FFT is traditional signal processing, not AI.** It is a deterministic mathematical operation with a predictable, reproducible output.

## FFT Parameters for Infrasense

| Parameter | Value | Reasoning |
|---|---|---|
| Sampling rate (fs) | 50 Hz | System sampling rate |
| FFT size (N) | 2048 samples | Provides good frequency resolution |
| Window length | N/fs = 2048/50 = 40.96 sec | Time duration of each FFT window |
| Frequency resolution (Δf) | fs/N = 50/2048 ≈ 0.024 Hz | Smallest distinguishable frequency difference |
| Maximum frequency | fs/2 = 25 Hz | Nyquist limit |
| Frequency bins | N/2 = 1024 | Number of unique frequency bins |

### Frequency Resolution vs. Time Resolution Trade-off

- **Longer FFT window (larger N):** Better frequency resolution but poorer time resolution
- **Shorter FFT window (smaller N):** Better time resolution but poorer frequency resolution

For infrasound at 0.01 Hz, even with N = 2048 at 50 Hz (≈ 41 seconds), the frequency resolution of 0.024 Hz is adequate but not extremely fine. To resolve 0.01 Hz precisely, longer windows (100+ seconds) would be needed.

## Windowing

### Why Windowing Is Needed

When the FFT analyzes a finite segment of data, it assumes the segment repeats infinitely. If the signal is not perfectly periodic within the segment, discontinuities at the edges create artefacts called **spectral leakage** — energy "leaks" from a signal's true frequency into neighbouring frequency bins.

### Window Functions

A window function is multiplied with the data before FFT to smoothly taper the signal at the edges, reducing spectral leakage.

| Window | Frequency Resolution | Spectral Leakage | Use Case |
|---|---|---|---|
| Rectangular (none) | Best | Worst | Only if signal is perfectly periodic within window |
| Hanning (Hann) | Good | Low | General-purpose; recommended default |
| Hamming | Good | Low | Similar to Hanning |
| Blackman | Lower | Very low | When leakage suppression is critical |
| Flat-top | Lowest | Very low | Amplitude accuracy measurements |

**Recommendation:** Use the **Hanning window** as the default — it provides a good balance of frequency resolution and spectral leakage suppression.

## Power Spectral Density (PSD)

The PSD shows how signal power is distributed across frequencies:

```
PSD[k] = |FFT[k]|² / (fs × N)    (units: Pa²/Hz, if signal is in Pa)
```

The PSD is more useful than the raw FFT magnitude for comparing signals of different lengths or sampling rates, because it normalizes by frequency resolution.

## Spectrogram

A spectrogram is a time-frequency representation created by computing FFTs on successive overlapping windows:

```
Time →
     ┌────────────────────────────────┐
 F   │ ░░▓▓░░░░░░░░▓▓▓▓░░░░░░░░░░░░ │  Dark = high energy
 r   │ ░░▓▓░░░░░░░░░▓▓▓░░░░░░░░░░░░ │
 e   │ ░░░▓▓░░░░░░░░▓▓░░░░░░░░░░░░░ │
 q   │ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │  Light = low energy
     │ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
 ↓   │ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
     └────────────────────────────────┘
```

Parameters:
- **Window length:** Same as FFT size (e.g., 2048 samples = ~41 sec)
- **Overlap:** 50% is standard (each window shares half its samples with the previous)
- **Colour mapping:** Intensity represents signal power at each time-frequency point

The spectrogram is valuable because it shows **how the frequency content changes over time** — essential for identifying transient infrasound events.

## FFT Output Interpretation

| What You See | What It Means |
|---|---|
| Strong peak at a specific frequency | A dominant periodic signal at that frequency |
| Broad hump across many frequencies | Broadband noise or a transient event |
| Flat, low-amplitude spectrum | Quiet conditions, no significant signal |
| Peak at 0.2 Hz that appears and fades | A transient event with a dominant frequency of 0.2 Hz |

## Implementation Notes

- Use established FFT libraries (e.g., NumPy FFT, SciPy FFT, FFTW) — do not implement FFT from scratch
- Apply the window function before calling FFT
- Compute only the positive-frequency half of the spectrum (the negative half is the mirror image for real-valued signals)
- Convert to magnitude (|FFT|) or power (|FFT|²) for visualization and feature extraction

---

*See also: [Signal Processing Overview](signal-processing-overview.md) | [Frequency Analysis](frequency-analysis.md) | [Feature Extraction](feature-extraction.md)*
