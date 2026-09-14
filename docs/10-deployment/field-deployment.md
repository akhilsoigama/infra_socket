# Field Deployment

## Field Deployment Considerations

| Factor | Guidance |
|---|---|
| Location | Away from roads, machinery, HVAC; some wind shelter preferred |
| Ground surface | Flat, stable; avoid areas prone to flooding |
| Power access | Mains power within cable reach, or battery/solar system |
| Connectivity | LAN or Wi-Fi for dashboard access; cellular for remote sites |
| Physical security | Fenced area or locked enclosure |
| Accessibility | Must be reachable for maintenance and calibration |

## Field Deployment Procedure

1. **Survey site:** Assess noise environment, wind exposure, power availability
2. **Install hardware:** Mount enclosure, lay manifold tubing, connect sensor
3. **Collect baseline:** Run for 24–72 hours to collect normal data
4. **Train model:** Train Isolation Forest on the baseline data from this specific site
5. **Verify operation:** Confirm dashboard works, apply a test signal if possible
6. **Monitor:** Check system health daily for the first week

## Long-Duration Operation

For deployments lasting weeks or months:
- Set up automatic data backup
- Configure email/webhook alerts for anomalies AND system health issues
- Schedule periodic maintenance visits
- Plan for data retention and storage management

---

*See also: [Deployment Overview](deployment-overview.md) | [Monitoring](monitoring.md) | [Maintenance](maintenance.md)*
