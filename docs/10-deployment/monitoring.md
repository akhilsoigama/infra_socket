# Monitoring

## System Health Monitoring

| Component | Health Check | Frequency |
|---|---|---|
| Sensor | Data arriving at expected rate | Every 10 seconds |
| ADC | No saturation, no gaps | Continuous |
| Signal processing | Windows completing on schedule | Per window |
| AI inference | Model loaded, scoring functional | Per window |
| Database | Writable, not full | Every minute |
| Dashboard | Web server responding | Every 30 seconds |
| Temperature | Within operating range | Every minute |
| Disk space | Sufficient remaining storage | Every hour |

## Health Status Endpoint

See `GET /api/v1/system/status` in [API Design](../06-software/api-design.md).

## Alerting on System Issues

In addition to infrasound anomaly alerts, the system should alert on:
- Sensor disconnection
- Data gaps > 60 seconds
- Database approaching capacity
- Processing pipeline failure
- AI model not loaded

---

*See also: [Deployment Overview](deployment-overview.md) | [Maintenance](maintenance.md)*
