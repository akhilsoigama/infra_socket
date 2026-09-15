# Maintenance

## Routine Maintenance

| Task | Frequency | Procedure |
|---|---|---|
| Check manifold inlets | Monthly | Clear any debris, insects, or water from inlets |
| Check capillary | Monthly | Verify capillary is not clogged |
| Clean enclosure | Quarterly | Remove dust, check seals |
| Verify calibration | Quarterly | Run a quick pressure step test |
| Update software | As needed | Apply patches, update dependencies |
| Retrain AI model | Quarterly or after environment changes | Collect new baseline, retrain |
| Backup data | Weekly | Copy database to external storage |
| Check power supply | Monthly | Verify voltage, replace battery if applicable |
| Review alert history | Weekly | Investigate any unreviewed anomalies |

## Troubleshooting

| Symptom | Possible Cause | Action |
|---|---|---|
| No sensor data | Cable disconnected, sensor failure | Check connections; swap sensor if available |
| High noise | Wind, vibration, electronic interference | Check manifold, isolation, shielding |
| Constant DC drift | Capillary clogged, temperature extreme | Clear capillary; improve thermal insulation |
| Many false positives | Environmental change, baseline outdated | Retrain model with new baseline |
| Dashboard not loading | Web server crashed, network issue | Restart service; check network |
| Database full | Retention policy not applied | Apply retention; expand storage |

---

*See also: [Monitoring](monitoring.md) | [Fault Handling](../11-security-reliability/fault-handling.md)*
