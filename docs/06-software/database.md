# Database

## Purpose

The database stores all system data persistently: raw measurements, processed signal features, anomaly detection results, sensor metadata, and system logs.

## Database Selection

| Option | Advantages | Disadvantages | Recommendation |
|---|---|---|---|
| **SQLite** | Zero-config, file-based, lightweight | Single-writer, limited concurrency | **MVP prototype** |
| PostgreSQL | Full-featured, concurrent, scalable | Requires installation and management | Production/multi-station |
| InfluxDB | Optimized for time-series | Specialized, learning curve | `Future Scope` |

**MVP Recommendation:** SQLite — simplest to deploy, no server setup required, adequate for single-station operation.

## Schema Overview

See [Data Model](../07-data/data-model.md) for the complete logical data model.

### Key Tables

```sql
-- Sensor metadata
CREATE TABLE sensors (
    sensor_id TEXT PRIMARY KEY,
    location TEXT,
    installation_time TEXT,
    status TEXT,
    configuration TEXT
);

-- Raw measurements
CREATE TABLE measurements (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    timestamp TEXT NOT NULL,
    sensor_id TEXT NOT NULL,
    pressure_value REAL,
    temperature REAL,
    quality_status TEXT,
    FOREIGN KEY (sensor_id) REFERENCES sensors(sensor_id)
);

-- Signal windows and features
CREATE TABLE signal_windows (
    window_id TEXT PRIMARY KEY,
    start_time TEXT NOT NULL,
    end_time TEXT NOT NULL,
    sensor_id TEXT NOT NULL,
    sampling_rate REAL,
    rms_amplitude REAL,
    peak_amplitude REAL,
    dominant_frequency REAL,
    spectral_energy REAL,
    spectral_centroid REAL,
    spectral_bandwidth REAL,
    quality_status TEXT,
    FOREIGN KEY (sensor_id) REFERENCES sensors(sensor_id)
);

-- Anomaly records
CREATE TABLE anomalies (
    anomaly_id TEXT PRIMARY KEY,
    timestamp TEXT NOT NULL,
    sensor_id TEXT NOT NULL,
    window_id TEXT,
    anomaly_score REAL,
    threshold REAL,
    status TEXT,
    severity TEXT,
    FOREIGN KEY (sensor_id) REFERENCES sensors(sensor_id),
    FOREIGN KEY (window_id) REFERENCES signal_windows(window_id)
);
```

## Data Retention

See [Data Retention](../07-data/data-retention.md) for the retention policy.

## Backup

- SQLite databases can be backed up by copying the database file
- Schedule periodic backups (e.g., daily)
- For critical deployments, use WAL (Write-Ahead Logging) mode for crash safety

---

*See also: [Data Model](../07-data/data-model.md) | [Backend](backend.md) | [Data Retention](../07-data/data-retention.md)*
