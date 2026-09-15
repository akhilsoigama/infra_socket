# Component Interaction

## Interaction Diagram

```mermaid
sequenceDiagram
    participant ATM as Atmosphere
    participant WNR as Wind-Noise Manifold
    participant SENSOR as Pressure Sensor
    participant AFE as Analog Front End
    participant ADC as ADC
    participant DAQ as DAQ Service
    participant SP as Signal Processing
    participant FE as Feature Extraction
    participant AI as AI Inference
    participant DB as Database
    participant ALERT as Alert Service
    participant DASH as Dashboard

    ATM->>WNR: Pressure wave arrives
    WNR->>SENSOR: Spatially averaged pressure
    SENSOR->>AFE: Differential voltage signal
    AFE->>ADC: Amplified, filtered analog signal
    ADC->>DAQ: Digital samples (timestamped)
    DAQ->>DB: Store raw measurement
    DAQ->>SP: Stream raw samples

    loop Every analysis window (e.g., 30 seconds)
        SP->>SP: DC removal, band-pass filter, windowing
        SP->>FE: Filtered signal + FFT spectrum
        FE->>FE: Compute RMS, energy, freq features
        FE->>AI: Feature vector
        AI->>AI: Isolation Forest inference
        AI->>DB: Store anomaly record
        alt Anomaly Score > Threshold
            AI->>ALERT: Trigger anomaly alert
            ALERT->>DASH: Push alert notification
        end
    end

    DASH->>DB: Request latest data (via API)
    DB->>DASH: Return measurements, features, anomalies
```

## Component Interfaces

### Hardware ↔ Software Interface

The hardware-software boundary is at the **ADC output**. The DAQ service reads digital samples from the ADC hardware.

```mermaid
flowchart LR
    HW["Hardware Domain\n(Analog)"] -->|"ADC Output\n(Digital Samples)"| SW["Software Domain\n(Digital Processing)"]
```

**Interface protocol options:**
- SPI (Serial Peripheral Interface) — common for embedded ADCs
- I²C — for lower-speed ADCs and temperature sensors
- USB — for DAQ boards or USB-connected ADCs
- Serial (UART) — for microcontroller-based data acquisition
- Ethernet/TCP — for networked DAQ systems

### Signal Processing ↔ AI Interface

The signal-processing subsystem communicates with the AI subsystem through **feature vectors** — numerical arrays summarizing each analysis window.

```
Feature vector format (proposed):
[rms_amplitude, peak_amplitude, spectral_energy, dominant_frequency, spectral_centroid, bandwidth]
```

This interface is simple and well-defined: the AI model expects a fixed-length numerical array with the same feature order as its training data.

### AI ↔ Application Interface

The AI subsystem outputs:
- **Anomaly score** (float, 0.0–1.0)
- **Decision** (NORMAL or ANOMALY, based on threshold)
- **Metadata** (timestamp, window ID, associated sensor ID)

This output is written to the database and, if anomalous, triggers the alert service.

### Application Layer Internal Interfaces

```mermaid
flowchart LR
    DB["Database"] --> API["REST API"]
    API --> DASH["Dashboard\n(HTTP/WebSocket)"]
    ALERT["Alert Service"] --> DASH
    ALERT --> EMAIL["Email\nNotification"]
    ALERT --> WEBHOOK["Webhook"]
    API --> EXT["External\nConsumers"]
```

## Timing and Synchronization

| Component | Timing Characteristic |
|---|---|
| ADC sampling | Fixed rate (e.g., 50 Hz), hardware-clocked |
| Raw data storage | Written as soon as samples are received |
| Signal processing window | Triggered every N seconds (e.g., 30 sec) |
| AI inference | Triggered after each feature extraction |
| Dashboard update | Polled or pushed at 1–5 Hz |
| Alert | Triggered immediately on anomaly detection |

## Error Propagation

| Error Source | Downstream Impact | Handling |
|---|---|---|
| Sensor failure | No new data | DAQ detects missing data, logs error, dashboard shows sensor offline |
| ADC communication error | Data gaps | DAQ retries, logs gaps, marks affected windows as low quality |
| Signal processing error | No features for affected window | Error logged, AI skips window, raw data still saved |
| AI model not loaded | No anomaly detection | System logs warning, continues recording and processing without AI |
| Database write failure | Data at risk | Buffer in memory, retry; alert on persistent failure |

---

*See also: [Architecture](architecture.md) | [Data Flow](data-flow.md) | [Software Architecture](software-architecture.md)*
