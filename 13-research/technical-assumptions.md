# Technical Assumptions

## Documented Assumptions

| ID | Assumption | Impact | Mitigation |
|---|---|---|---|
| A-01 | Deployment site has basic wind protection (not fully exposed hilltop) | Wind-noise performance depends on site | Site survey before deployment |
| A-02 | Stable mains power is available | Required for continuous operation | UPS for critical deployments |
| A-03 | Network connectivity available for dashboard/alerts | Required for remote access | Local operation possible without network |
| A-04 | Ambient temperature range is moderate (0–45°C) for electronics | Extreme temperatures may affect performance | Thermal insulation; temperature monitoring |
| A-05 | Baseline data collection period is representative of normal conditions | Directly affects AI model quality | Collect over multiple days; include diurnal variation |
| A-06 | No strong local vibration sources (machinery, traffic) nearby | Vibration contamination degrades data quality | Site survey; vibration isolation |
| A-07 | MEMS differential pressure sensors can respond to sub-hertz frequencies | Core sensor selection assumption | Validate with actual sensor testing |
| A-08 | Isolation Forest is effective for infrasound anomaly detection | Core AI assumption | Validate with controlled test signals |
| A-09 | A 50 Hz sampling rate is sufficient | Nyquist criterion for 20 Hz signals | Can increase if needed |
| A-10 | A prototype-scale manifold (1–5 m) provides measurable noise reduction | Core hardware assumption | Measure with and without manifold |
| A-11 | Controlled test signals adequately simulate real anomalies for testing | Testing validity | Supplement with public datasets when available |
| A-12 | The reference chamber time constant can be tuned to achieve ~0.01 Hz corner frequency | Lower frequency limit | Experimental tuning required |
| A-13 | SQLite is adequate for the prototype's data storage needs | Database selection | Upgrade to PostgreSQL if needed |

---

*See also: [Background](background.md) | [Scope and Limitations](../01-overview/scope-and-limitations.md)*
