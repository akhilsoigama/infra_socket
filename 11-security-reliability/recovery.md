# Recovery

## Recovery Procedures

### After Power Failure
1. System auto-starts when power is restored (if configured with systemd)
2. Database opens in recovery mode (WAL journal replay)
3. DAQ resumes data acquisition
4. Processing pipeline resumes
5. AI loads model and resumes scoring
6. Data gap for the outage period is recorded

### After Software Crash
1. System auto-restarts the failed service
2. Last known good state is restored from database
3. Processing resumes from the current time (gap during crash is recorded)

### After Hardware Failure
1. Identify the failed component (sensor, ADC, power)
2. Replace the failed component
3. Recalibrate if the sensor or analog front end was replaced
4. Retrain AI model if the sensor was replaced (different characteristics)

### After Database Corruption
1. Stop all services
2. Attempt database recovery: `sqlite3 data.db ".recover" | sqlite3 recovered.db`
3. If recovery fails, restore from the most recent backup
4. Data between the last backup and the corruption is lost
5. Restart services

---

*See also: [Fault Handling](fault-handling.md) | [Reliability](reliability.md)*
