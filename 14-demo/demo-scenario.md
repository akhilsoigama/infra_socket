# Demo Scenario

## Scenario: Detecting an Unusual Pressure Event

### Narrative
"We have deployed our InfraSocket sensor in this room. It has been recording the normal atmospheric pressure for the past several hours. Our AI model has learned what 'normal' looks like. Now, watch what happens when we introduce an unusual pressure event..."

### Steps

1. **Show normal state:** Dashboard displays calm waveform, flat spectrum, low normalized anomaly index
2. **Introduce event:** Apply controlled test signal (e.g., a low-frequency pressure pulse)
3. **Show waveform change:** The live waveform clearly shows the pressure excursion
4. **Show FFT peak:** The frequency spectrum shows energy at the test signal's frequency
5. **Show AI response:** The normalized anomaly index spikes above the threshold
6. **Show alert:** A notification appears on the dashboard
7. **Return to normal:** Stop the test signal; show the system returning to normal state

### Key Messages During Demo

- "The sensor detects the physical pressure change"
- "The signal processing reveals the frequency content"
- "The AI flags this as unusual because it differs from the learned normal baseline"
- "The system does NOT know what caused the anomaly — only that it is unusual"

---

*See also: [Demo Plan](demo-plan.md) | [Expected Output](expected-output.md)*
