# Data Retention

## Retention Policy

| Data Type | Retention Period | Rationale |
|---|---|---|
| Raw measurements | 7–30 days | High volume; older raw data can be archived or deleted |
| Processed features | 90 days | Moderate volume; useful for model retraining |
| Anomaly records | Indefinite | Low volume; important for analysis and auditing |
| Sensor metadata | Indefinite | Low volume; configuration history |
| System logs | 30 days | Moderate volume; useful for debugging |

`Assumption`: These retention periods are proposed starting points. Adjust based on available storage and operational needs.

## Storage Estimates

| Data Type | Rate | 30-Day Storage |
|---|---|---|
| Raw measurements (50 Hz) | ~10–50 MB/day | 300 MB – 1.5 GB |
| Processed features (1/30 sec) | ~50 KB/day | ~1.5 MB |
| Anomaly records | ~50 KB/day | ~1.5 MB |

Raw measurements dominate storage. A 32 GB SD card can hold approximately 20–90 days of raw data.

## Archival

For long-term storage:
- Export raw data to compressed files (CSV.gz or binary)
- Archive to external storage or cloud
- Keep processed features and anomaly records in the active database

---

*See also: [Data Model](data-model.md) | [Database](../06-software/database.md)*
