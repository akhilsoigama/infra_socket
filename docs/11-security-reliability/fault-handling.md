# Fault Handling

## Fault Scenarios and Responses

| Fault | Detection | Response | Recovery |
|---|---|---|---|
| Sensor disconnection | No data from DAQ | Log error; mark sensor offline | Reconnect; restart DAQ |
| ADC saturation | Sample at max/min value | Flag affected data | Investigate cause (overpressure, fault) |
| Data gap | Missing timestamps | Log gap; flag affected windows | Auto-resume when data returns |
| Processing error | Exception in processing thread | Log error; skip window | Auto-retry next window |
| AI model missing | File not found on load | Log warning; disable AI | Retrain and deploy model |
| Database write failure | Write exception | Buffer in memory; retry | Retry; alert if persistent |
| Disk full | Storage check | Stop recording; alert | Free space; apply retention |
| Power failure | N/A (undetectable) | Data lost during outage | Auto-start on power restore |
| Network failure | Connection timeout | Local operation continues | Reconnect when available |

## Key Principle

> **If AI fails, sensor data should still be recorded.**

The data acquisition and storage layers operate independently of the AI and dashboard layers. No single-point failure should cause data loss.

---

*See also: [Reliability](reliability.md) | [Recovery](recovery.md)*
