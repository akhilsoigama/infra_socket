# Talking Points

## For Each Major Component

### Hardware
- "Our sensing system uses a differential pressure architecture with a capillary-leaked reference chamber — the same fundamental approach used by professional microbarometers, but implemented with low-cost MEMS sensors"
- "The wind-noise manifold spatially averages pressure over multiple inlets, exploiting the fact that infrasound waves are coherent over large distances while wind noise is not"

### Signal Processing
- "We digitize at 50 Hz and apply a 0.01–20 Hz band-pass filter to isolate the infrasound range"
- "FFT analysis reveals the frequency content of each 30-second window, and we compute a set of spectral and temporal features"
- "Signal processing is traditional engineering — deterministic mathematics — not AI"

### AI
- "We chose Isolation Forest because it's unsupervised — we don't need labeled anomaly examples, only normal baseline data"
- "The model learns what 'normal' atmospheric conditions look like and flags anything that significantly deviates"
- "Our AI does anomaly DETECTION, not event CLASSIFICATION — it says 'this is unusual,' not 'this was an explosion'"
- "Isolation Forest is computationally lightweight and runs in real-time on a Raspberry Pi"

### Dashboard
- "The web-based dashboard provides live visualization of the pressure waveform, frequency spectrum, and AI anomaly score"
- "When an anomaly is detected, an alert appears in real-time"

## For Judges

- "We were careful not to overstate our system's capabilities"
- "All performance claims require validation through calibration, which is designed but may not be complete"
- "We distinguish clearly between what we've built (prototype) and what is future scope"
- "The documentation follows a specific discipline: Assumptions are labeled, Future Scope is marked, and no performance numbers are fabricated"

---

*See also: [Presentation Flow](presentation-flow.md) | [Anticipated Questions](anticipated-questions.md)*
