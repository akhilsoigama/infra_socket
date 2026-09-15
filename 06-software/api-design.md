# API Design

> **Note:** This is a **Proposed API**. The actual implementation may differ based on the chosen technology stack.

## Base URL

```
http://<host>:<port>/api/v1
```

## Endpoints

### Sensors

#### GET /api/v1/sensors
**Purpose:** List all registered sensors.

**Response:**
```json
{
  "sensors": [
    {
      "sensor_id": "SENSOR-001",
      "location": "Lab-A, Building 3",
      "status": "ONLINE",
      "installation_time": "2025-03-10T09:00:00Z",
      "last_reading": "2025-03-15T10:30:00Z"
    }
  ]
}
```

#### GET /api/v1/sensors/{id}
**Purpose:** Get details for a specific sensor.

**Parameters:** `id` — sensor identifier

**Response:** Single sensor object as above.

**Error:** `404` if sensor not found.

---

### Measurements

#### GET /api/v1/measurements
**Purpose:** Query raw measurement data.

**Query Parameters:**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `sensor_id` | string | No | Filter by sensor |
| `start` | ISO 8601 | No | Start of time range |
| `end` | ISO 8601 | No | End of time range |
| `limit` | integer | No | Maximum records (default: 1000) |

**Response:**
```json
{
  "measurements": [
    {
      "timestamp": "2025-03-15T10:30:00.020Z",
      "sensor_id": "SENSOR-001",
      "pressure_value": 0.045,
      "temperature": 22.5,
      "quality_status": "OK"
    }
  ],
  "count": 1,
  "has_more": false
}
```

---

### Signals (Processed Windows)

#### GET /api/v1/signals
**Purpose:** Query processed signal windows and their features.

**Query Parameters:** Same as measurements (sensor_id, start, end, limit).

**Response:**
```json
{
  "signals": [
    {
      "window_id": "WIN-20250315-103000",
      "start_time": "2025-03-15T10:30:00Z",
      "end_time": "2025-03-15T10:30:30Z",
      "sampling_rate": 50,
      "features": {
        "rms_amplitude": 0.012,
        "peak_amplitude": 0.034,
        "dominant_frequency": 0.45,
        "spectral_energy": 0.0008,
        "spectral_centroid": 1.23,
        "spectral_bandwidth": 2.1
      },
      "quality_status": "OK"
    }
  ]
}
```

---

### Anomalies

#### GET /api/v1/anomalies
**Purpose:** Query anomaly detection results.

**Query Parameters:**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `sensor_id` | string | No | Filter by sensor |
| `start` | ISO 8601 | No | Start of time range |
| `end` | ISO 8601 | No | End of time range |
| `status` | string | No | Filter: ANOMALY, NORMAL, or ALL |
| `limit` | integer | No | Maximum records |

**Response:**
```json
{
  "anomalies": [
    {
      "anomaly_id": "ANOM-20250315-103030",
      "timestamp": "2025-03-15T10:30:30Z",
      "sensor_id": "SENSOR-001",
      "anomaly_score": 0.82,
      "threshold": 0.70,
      "status": "ANOMALY",
      "severity": "HIGH",
      "window_id": "WIN-20250315-103000"
    }
  ]
}
```

#### GET /api/v1/anomalies/{id}
**Purpose:** Get details for a specific anomaly record.

---

### System Status

#### GET /api/v1/system/status
**Purpose:** Get overall system health status.

**Response:**
```json
{
  "status": "HEALTHY",
  "timestamp": "2025-03-15T10:31:00Z",
  "components": {
    "sensor": "ONLINE",
    "daq": "RUNNING",
    "signal_processing": "RUNNING",
    "ai_inference": "RUNNING",
    "database": "CONNECTED",
    "uptime_seconds": 86400
  }
}
```

## Error Responses

All error responses follow a consistent format:

```json
{
  "error": {
    "code": 404,
    "message": "Sensor not found",
    "details": "No sensor with ID 'SENSOR-999' exists"
  }
}
```

| HTTP Code | Meaning |
|---|---|
| 200 | Success |
| 400 | Bad request (invalid parameters) |
| 404 | Resource not found |
| 500 | Internal server error |

---

*See also: [Software Overview](software-overview.md) | [Dashboard](dashboard.md) | [Data Model](../07-data/data-model.md)*
