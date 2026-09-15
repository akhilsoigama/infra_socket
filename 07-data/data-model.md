# Data Model

## Entity-Relationship Diagram

```mermaid
erDiagram
    SENSOR ||--o{ MEASUREMENT : "produces"
    SENSOR ||--o{ SIGNAL_WINDOW : "generates"
    SENSOR ||--o{ ANOMALY : "triggers"
    SIGNAL_WINDOW ||--o| ANOMALY : "evaluated_by"

    SENSOR {
        string sensor_id PK
        string location
        string installation_time
        string status
        string configuration
        string last_calibration
    }

    MEASUREMENT {
        int id PK
        string timestamp
        string sensor_id FK
        float pressure_value
        float temperature
        string quality_status
    }

    SIGNAL_WINDOW {
        string window_id PK
        string start_time
        string end_time
        string sensor_id FK
        float sampling_rate
        float rms_amplitude
        float peak_amplitude
        float dominant_frequency
        float spectral_energy
        float spectral_centroid
        float spectral_bandwidth
        float band_energy_ultra_low
        float band_energy_low
        float band_energy_mid_upper
        float spectral_rolloff
        float spectral_flatness
        string quality_status
    }

    ANOMALY {
        string anomaly_id PK
        string timestamp
        string sensor_id FK
        string window_id FK
        float anomaly_index
        float threshold
        string status
        string severity
        bool acknowledged
        string notes
    }
```

## Entity Descriptions

### Sensor
Metadata about each physical sensor installation.

### Measurement
Individual raw pressure samples with timestamps. This is the highest-volume table.

### Signal Window
Processed signal analysis windows with extracted features. One window typically contains 30–60 seconds of measurements.

### Anomaly
Results of AI anomaly detection for each signal window. Contains the normalized anomaly index, threshold used, and classification decision.

## Relationships

| Relationship | Cardinality | Description |
|---|---|---|
| Sensor → Measurement | One-to-Many | Each sensor produces many measurements |
| Sensor → Signal Window | One-to-Many | Each sensor generates many analysis windows |
| Signal Window → Anomaly | One-to-One | Each window produces one anomaly evaluation |
| Sensor → Anomaly | One-to-Many | Each sensor can have many anomaly records |

---

*See also: [Raw Data Format](raw-data-format.md) | [Database](../06-software/database.md) | [API Design](../06-software/api-design.md)*
