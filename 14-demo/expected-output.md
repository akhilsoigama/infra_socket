# Expected Output

## Normal Conditions

```
Waveform:     Low-amplitude, quasi-random fluctuations
FFT:          Low, relatively flat spectrum
Spectrogram:  Uniform, low-intensity
AI Score:     0.05 – 0.20 (well below threshold)
Status:       ✅ NORMAL
Alerts:       None
```

## During Controlled Test Signal

```
Waveform:     Clear pressure excursion visible
FFT:          Peak at the test signal frequency
Spectrogram:  Bright band at the test frequency during the event
AI Score:     0.70 – 0.95 (above threshold)
Status:       🚨 ANOMALY
Alerts:       Alert notification generated
```

## After Test Signal Removed

```
Waveform:     Returns to low-amplitude noise
FFT:          Returns to flat spectrum
Spectrogram:  Bright band fades
AI Score:     Decreases back below threshold (within 1–2 windows)
Status:       ✅ NORMAL
Alerts:       Previous alert remains in history
```

---

*See also: [Demo Plan](demo-plan.md) | [Demo Scenario](demo-scenario.md)*
