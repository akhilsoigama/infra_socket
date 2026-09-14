# Environmental Testing

## Tests

### ENV-01: Temperature Variation
**Objective:** Observe system behaviour across a range of temperatures.
**Procedure:** Operate system from early morning (cool) through afternoon (warm); record temperature and sensor output.
**Pass criteria:** System continues operating; temperature effects are documented.

### ENV-02: Wind Exposure (With and Without Manifold)
**Objective:** Quantify the benefit of the wind-noise reduction manifold.
**Procedure:** Record data with a single open port, then with the full manifold connected. Compare RMS noise levels.
**Pass criteria:** Measurable noise reduction with manifold.

### ENV-03: Rain/Humidity
**Objective:** Verify the enclosure protects electronics during rain.
**Procedure:** Expose system to simulated rain or deploy during actual rain.
**Pass criteria:** No water ingress; system continues operating.

## Results Template

| Test ID | Date | Result | Notes |
|---|---|---|---|
| ENV-01 | ___ | ___ | Temperature range: ___°C to ___°C |
| ENV-02 | ___ | ___ | Noise reduction: ___ dB or ___× |
| ENV-03 | ___ | ___ | |

---

*See also: [Testing Strategy](testing-strategy.md) | [Acceptance Criteria](acceptance-criteria.md)*
