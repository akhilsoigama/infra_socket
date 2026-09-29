# Sensor Connection Architecture

## Storage Calculations

Suppose one sensor records:
- **Sampling rate:** 100 samples/second
- **Data:** 4 bytes/sample

### 32-bit Data (4 bytes/sample)
**Raw Data Calculation:**
* 100 samples/second × 4 bytes = 400 bytes/second

**Approximate Storage Requirements:**
* 34.6 MB/day
* ≈ 1.04 GB/month
* ≈ 12.6 GB/year

*Note: That's for one channel, before considering timestamps, headers, and metadata.*

### 16-bit Data (2 bytes/sample)
**Raw Data Calculation:**
* 100 samples/second × 2 bytes = 200 bytes/second

**Approximate Storage Requirements:**
* ≈ 17.3 MB/day
* ≈ 0.52 GB/month
* ≈ 6.3 GB/year

**Conclusion:** A 32 GB card is already quite useful for a prototype.

---

## Benefits of Local Storage

A better architecture leverages both local and remote storage:

```mermaid
graph TD
    Sensor[Sensor] --> ESP32[ESP32]
    ESP32 --> SD[microSD<br/>Local backup]
    ESP32 --> WiFi[Wi-Fi]
    WiFi --> Server[Server]
    Server --> DB[(Database)]
```

* The microSD acts as a local backup/buffer.
* The server becomes the main long-term storage.

### Standard Workflow
1. **ESP32** records data from the sensor.
2. Data is saved to the **microSD** card.
3. Data is sent through **Wi-Fi**.
4. **Server** receives the data.
5. Data is stored in the **Database**.

### Store-and-Forward Approach (Wi-Fi Failure)
If Wi-Fi fails:
1. Wi-Fi connection is lost (❌).
2. **Sensor** continues to send data to the **ESP32**.
3. **ESP32** continues recording to the **microSD** card.

When Wi-Fi comes back:
1. **ESP32** retrieves missing data from the **microSD** card.
2. **ESP32** uploads the missing data to the **Server**.

---

## Wi-Fi Usage

Wi-Fi is primarily used for communication, not storage. Your sensor node can send the following telemetry to your server:
- Pressure
- Temperature
- Timestamp
- Node ID
- Battery status
- Signal quality

**Communication Flow:**
```mermaid
graph TD
    Node01[Node 01] --> WiFi[Wi-Fi]
    WiFi --> Router[Router]
    Router --> Internet[Internet / LAN]
    Internet --> Server[Server]
```
You can then see the data on your dashboard.

---

## Server Uses

The server is the central brain and storage system for all your sensor nodes.

```mermaid
graph TD
    Node01[Node 01] --> Server[Server]
    Node02[Node 02] --> Server
    Node03[Node 03] --> Server
    Node04[Node 04] --> Server
```

The server can perform several critical functions:

* **Store:** Historical sensor data.
* **Process:** Filtering, FFT (Fast Fourier Transform), Spectrogram, Feature extraction.
* **Compare:** Node 01 vs Node 02 vs Node 03.
* **Detect Events:** When multiple nodes detect the same event, it performs Event Correlation.
* **Display (Web Dashboard):** Live waveform, Frequency spectrum, Spectrogram, Sensor status, and Events.

---

## Infra Socket Node Architecture

```mermaid
graph TD
    subgraph "INFRA SOCKET NODE"
        Pressure[Pressure Sensor] --> Noise[Wind Noise Reduction]
        Noise --> AFE[Analog Front End]
        AFE --> ADC[ADC]
        ADC --> ESP32[ESP32]
        
        GPS[GPS/RTC time] --> ESP32
        ESP32 --> SD[microSD]
        ESP32 --> WiFi[Wi-Fi]
    end
    
    WiFi --> ServerMain[SERVER]
    
    ServerMain --> DB[(Database)]
    ServerMain --> Proc[Processing]
    ServerMain --> API[API]
    
    DB --> Dashboard[Dashboard]
    Proc --> Dashboard
    API --> Dashboard
```

---

## Multiple Locations Architecture

For multiple locations, the system architecture scales out:

```mermaid
graph TD
    subgraph "CENTRAL SYSTEM"
        Server[SERVER]
        DB[(Database)]
        Proc[Processing]
        Server --- DB
        Server --- Proc
    end

    Server --> Node01[Node 01]
    Server --> Node02[Node 02]
    Server --> Node03[Node 03]

    Node01 --- SD1[SD]
    SD1 --- Sens1[Sensor]

    Node02 --- SD2[SD]
    SD2 --- Sens2[Sensor]

    Node03 --- SD3[SD]
    SD3 --- Sens3[Sensor]
```

Each node can have its own 32 GB microSD, while the server can have much larger centralized storage.