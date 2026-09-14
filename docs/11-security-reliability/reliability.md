# Reliability

## Design for Reliability

### Principle: Graceful Degradation

The system is designed so that failures in higher-level components do not prevent lower-level components from operating:

```mermaid
flowchart TD
    L1["Level 1: Data Acquisition\n(Most critical — must always run)"]
    L2["Level 2: Signal Processing\n(Can restart independently)"]
    L3["Level 3: AI Inference\n(Can fail without data loss)"]
    L4["Level 4: Dashboard/Alerts\n(Cosmetic — data is safe in DB)"]

    L1 --> L2 --> L3 --> L4
```

| If This Fails... | Data Acquisition | Signal Processing | AI | Dashboard |
|---|---|---|---|---|
| Dashboard | ✅ Continues | ✅ Continues | ✅ Continues | ❌ Unavailable |
| AI inference | ✅ Continues | ✅ Continues | ❌ No scoring | ✅ Shows data (no AI) |
| Signal processing | ✅ Continues | ❌ No features | ❌ No scoring | ⚠️ Raw data only |
| Data acquisition | ❌ No data | ❌ No data | ❌ No data | ❌ Stale data |

### Watchdog and Auto-Restart
Software services should be configured to auto-restart on failure (e.g., using systemd on Linux).

### Heartbeat Logging
Each service logs periodic heartbeat messages. If heartbeats stop, the health monitor raises an alert.

---

*See also: [Security](security.md) | [Fault Handling](fault-handling.md)*
