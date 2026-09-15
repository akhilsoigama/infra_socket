# Testing Strategy

## Testing Layers

```mermaid
flowchart TD
    HW["Hardware Testing\n(Sensor, ADC, Power)"] --> SIG["Signal Testing\n(Known signals, sweep)"]
    SIG --> AI_TEST["AI Testing\n(Normal, anomaly, FP/FN)"]
    AI_TEST --> INT["Integration Testing\n(End-to-end pipeline)"]
    INT --> PERF["Performance Testing\n(Latency, throughput)"]
    PERF --> ENV["Environmental Testing\n(Temperature, wind)"]
    ENV --> ACC["Acceptance Testing\n(Criteria verification)"]
```

## Test Categories

| Category | What Is Tested | Key Questions |
|---|---|---|
| [Hardware](hardware-testing.md) | Physical components | Does the sensor respond? Does the ADC digitize correctly? |
| [Sensor](sensor-testing.md) | Sensor-specific behaviour | Sensitivity, linearity, noise floor? |
| [Signal](signal-testing.md) | Signal processing pipeline | Correct filtering? Correct FFT? |
| [AI](ai-testing.md) | Anomaly detection model | Detects controlled anomalies? False positive rate? |
| [Integration](integration-testing.md) | Complete pipeline | Data flows correctly from sensor to dashboard? |
| [Performance](performance-testing.md) | Speed and resource usage | Meets latency and memory targets? |
| [Environmental](environmental-testing.md) | Real-world conditions | Handles temperature changes? Wind? |
| [Acceptance](acceptance-criteria.md) | Pass/fail criteria | System meets documented requirements? |

## Test Environment

| Environment | Purpose |
|---|---|
| Lab bench | Component-level testing, controlled conditions |
| Quiet indoor room | Baseline noise characterization |
| Outdoor (sheltered) | Realistic but moderate conditions |
| Outdoor (exposed) | Stress testing, wind exposure |

---

*See also: [Hardware Testing](hardware-testing.md) | [Acceptance Criteria](acceptance-criteria.md)*
