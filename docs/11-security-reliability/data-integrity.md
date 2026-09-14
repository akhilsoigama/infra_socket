# Data Integrity

## Timestamp Integrity
- All timestamps use UTC to avoid timezone ambiguity
- Timestamps are generated at the point of ADC sampling, not at the point of storage
- Clock synchronization (NTP) is recommended if the system has internet access

## Measurement Integrity
- Raw ADC values are stored without modification
- Calibrated values are computed from raw values and stored separately
- Quality flags indicate the reliability of each measurement

## Database Integrity
- Use SQLite WAL (Write-Ahead Logging) mode for crash safety
- Periodic integrity checks: `PRAGMA integrity_check`
- Foreign key constraints enforced

## Checksums (`Future Scope`)
For critical deployments, compute checksums on data files to detect corruption.

---

*See also: [Security](security.md) | [Fault Handling](fault-handling.md)*
