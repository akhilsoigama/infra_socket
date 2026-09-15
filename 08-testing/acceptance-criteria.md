# Acceptance Criteria

## Criteria for Prototype Demonstration

| ID | Criterion | Verification Method | Status |
|---|---|---|---|
| AC-01 | System powers on and begins data acquisition | Hardware test HW-01 | _Pending_ |
| AC-02 | Sensor responds to applied pressure changes | Hardware test HW-02 | _Pending_ |
| AC-03 | ADC produces valid digital samples at ≥40 Hz | Signal test SIG-01 | _Pending_ |
| AC-04 | Digital filter correctly isolates 0.01–20 Hz band | Signal test SIG-04 | _Pending_ |
| AC-05 | FFT correctly identifies known test frequencies | Signal test SIG-01 | _Pending_ |
| AC-06 | Feature extraction produces valid feature vectors | Integration test INT-01 | _Pending_ |
| AC-07 | raw anomaly scores normal data below threshold | AI test AI-01 | _Pending_ |
| AC-08 | Isolation Forest flags controlled anomaly above threshold | AI test AI-02 | _Pending_ |
| AC-09 | Data is stored in database and retrievable via API | Integration test INT-02, INT-03 | _Pending_ |
| AC-10 | Dashboard displays live waveform, spectrum, and normalized anomaly index | Integration test INT-01 | _Pending_ |
| AC-11 | Alert is generated on dashboard when anomaly is detected | Integration test INT-01 | _Pending_ |
| AC-12 | System operates continuously for 24+ hours without failure | Signal test SIG-05, Performance tests | _Pending_ |

## Demonstration Readiness Checklist

- [ ] All hardware assembled and connected
- [ ] Software installed and running
- [ ] Baseline data collected and model trained
- [ ] Controlled test signal available
- [ ] Dashboard accessible via web browser
- [ ] Demo flow rehearsed

---

*See also: [Testing Strategy](testing-strategy.md) | [Demo Plan](../14-demo/demo-plan.md)*
