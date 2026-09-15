# Performance Testing

## Tests

### PERF-01: Processing Latency
**Objective:** Measure time from window completion to anomaly score output.
**Procedure:** Timestamp window end and anomaly score generation; compute difference.
**Target:** < 2 seconds.

### PERF-02: Memory Usage
**Objective:** Verify the system operates within available memory.
**Procedure:** Monitor memory usage over 24 hours.
**Target:** < 500 MB total (on 2 GB system).

### PERF-03: CPU Usage
**Objective:** Verify the system does not overload the CPU.
**Procedure:** Monitor CPU usage over 24 hours.
**Target:** < 50% average on a Raspberry Pi 4 or equivalent.

### PERF-04: Storage Growth
**Objective:** Verify data storage grows at the expected rate.
**Procedure:** Monitor database size over 24 hours.
**Target:** Matches estimates in [Data Retention](../07-data/data-retention.md).

## Results Template

| Test ID | Date | Result | Measured Value | Target | Notes |
|---|---|---|---|---|---|
| PERF-01 | ___ | ___ | ___ sec | < 2 sec | |
| PERF-02 | ___ | ___ | ___ MB | < 500 MB | |
| PERF-03 | ___ | ___ | ___ % | < 50% | |
| PERF-04 | ___ | ___ | ___ MB/day | ~10-50 MB/day | |

---

*See also: [Testing Strategy](testing-strategy.md) | [Environmental Testing](environmental-testing.md)*
