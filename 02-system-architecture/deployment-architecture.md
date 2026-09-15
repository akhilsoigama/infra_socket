# Deployment Architecture

## Deployment Diagram

```mermaid
flowchart TD
    subgraph FIELD["Field Deployment Site"]
        subgraph ENCLOSURE["Environmental Enclosure"]
            WNR["Wind-Noise\nManifold"] --> SENSOR["Pressure Sensor\n+ Reference Chamber"]
            SENSOR --> AFE["Analog Front End"]
            AFE --> ADC["ADC"]
            TEMP["Temperature\nSensor"]
            ADC --> MCU["Microcontroller\n/ DAQ Board"]
            TEMP --> MCU
        end

        MCU -->|"USB / Serial /\nEthernet"| EDGE["Edge Computer\n(Raspberry Pi / SBC /\nLaptop)"]

        subgraph EDGE_SW["Edge Software"]
            EDGE --> DAQ_SVC["DAQ Service"]
            DAQ_SVC --> SP_SVC["Signal Processing"]
            SP_SVC --> AI_SVC["AI Inference"]
            DAQ_SVC --> DB_LOCAL["Local Database"]
            SP_SVC --> DB_LOCAL
            AI_SVC --> DB_LOCAL
            DB_LOCAL --> API_SVC["REST API"]
            API_SVC --> DASH_SVC["Dashboard\n(Web Server)"]
            AI_SVC --> ALERT_SVC["Alert Service"]
        end
    end

    subgraph USER["User Access"]
        BROWSER["Web Browser\n(Any Device)"] -->|"HTTP/HTTPS\n(LAN or Remote)"| DASH_SVC
        ALERT_SVC -->|"Email /\nWebhook"| NOTIFY["Notification\nRecipient"]
    end

    subgraph CLOUD["Cloud (Future Scope)"]
        DB_LOCAL -.->|"Sync\n(Future)"| CLOUD_DB["Cloud\nDatabase"]
        CLOUD_DB -.-> CLOUD_DASH["Cloud\nDashboard"]
    end

    style CLOUD fill:#f5f5f5,stroke-dasharray: 5 5
```

## Deployment Configurations

### Configuration 1: Standalone (MVP)

Everything runs on a single edge computer at the deployment site.

| Component | Runs On |
|---|---|
| Sensor + ADC + DAQ board | Connected to edge computer via USB/serial |
| All software services | Edge computer (Raspberry Pi, laptop, or SBC) |
| Database | Local on edge computer |
| Dashboard | Web server on edge computer, accessed via LAN |
| Alerts | Local notifications or email (if internet available) |

**Advantages:** Simple, no internet required, low cost
**Limitations:** Data only accessible on local network

### Configuration 2: Remote Access (Extended)

Same as standalone, but with remote access capability.

| Added Component | Purpose |
|---|---|
| VPN or reverse proxy | Secure remote access to dashboard |
| Cloud database sync | Backup data to cloud storage |
| Remote alerts | Email or webhook notifications |

**Advantages:** Remote monitoring, data backup
**Requirements:** Internet connectivity

### Configuration 3: Multi-Sensor Network (`Future Scope`)

Multiple sensor stations report to a central server.

```mermaid
flowchart LR
    S1["Sensor\nStation 1"] --> CENTRAL["Central\nServer"]
    S2["Sensor\nStation 2"] --> CENTRAL
    S3["Sensor\nStation 3"] --> CENTRAL
    CENTRAL --> CDASH["Central\nDashboard"]
    CENTRAL --> ARRAY["Array\nProcessing"]
```

**Advantages:** Source localization, array processing, network-level analysis
**Requirements:** Multiple stations, network infrastructure, array processing software

## Hardware Requirements for Edge Computer

`Assumption`: These are estimated minimum requirements for the MVP deployment.

| Resource | Minimum | Recommended |
|---|---|---|
| CPU | Single-core, 1 GHz | Quad-core, 1.5 GHz+ |
| RAM | 512 MB | 2 GB+ |
| Storage | 8 GB | 32 GB+ (for long-term recording) |
| Connectivity | USB (for DAQ) | USB + Ethernet/Wi-Fi |
| OS | Linux-based | Raspberry Pi OS, Ubuntu |

Suitable edge computers include:
- Raspberry Pi 4 or later
- Any Linux-capable single-board computer (SBC)
- Laptop (for development and testing)

## Network Architecture

```mermaid
flowchart LR
    SENSOR["Sensor\nHardware"] -->|"USB/Serial"| EDGE["Edge\nComputer"]
    EDGE -->|"LAN\n(HTTP)"| USER_LAN["LAN\nUsers"]
    EDGE -->|"Internet\n(HTTPS)"| USER_REMOTE["Remote\nUsers"]
    EDGE -->|"SMTP /\nWebhook"| NOTIFY["Alert\nRecipients"]
```

## Physical Deployment Considerations

| Consideration | Guidance |
|---|---|
| **Location** | Away from strong local noise sources (roads, machinery, HVAC). `Assumption`: some level of wind shelter |
| **Elevation** | Ground level or slightly elevated; avoid rooftops in windy areas |
| **Wind exposure** | Partial shelter improves manifold performance; full exposure degrades SNR |
| **Power** | Mains power or sufficiently large battery/solar system for extended operation |
| **Weather protection** | Enclosure must protect electronics; sensor ports must remain open to atmosphere |
| **Security** | Physical security against tampering or theft in outdoor deployments |
| **Maintenance access** | Easy access for calibration, component replacement, and data retrieval |

---

*See also: [Architecture](architecture.md) | [Field Deployment](../10-deployment/field-deployment.md) | [Hardware Deployment](../10-deployment/hardware-deployment.md)*
