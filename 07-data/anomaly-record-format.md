# Anomaly Record Format

## Description
Anomaly records store the output of the AI anomaly detection system for each evaluated signal window.

## Record Format
```json
{
  "anomaly_id": "ANOM-20250315-103030",
  "timestamp": "2025-03-15T10:30:30Z",
  "sensor_id": "SENSOR-001",
  "window_id": "WIN-20250315-103000",
  "anomaly_index": 0.82,
  "threshold": 0.70,
  "status": "ANOMALY",
  "severity": "HIGH",
  "model_version": "v1.0-20250310",
  "acknowledged": false,
  "reviewed": false,
  "review_label": null,
  "notes": null
}
```

| Field | Type | Description |
|---|---|---|
| anomaly_id | String | Unique anomaly record identifier |
| timestamp | ISO 8601 | Time of detection |
| sensor_id | String | Source sensor |
| window_id | String | Associated signal window |
| anomaly_index | Float (0–1) | Isolation Forest normalized anomaly index |
| threshold | Float | Threshold used for classification |
| status | String | NORMAL or ANOMALY |
| severity | String | LOW, MEDIUM, HIGH (for anomalies) |
| model_version | String | Model identifier for traceability |
| acknowledged | Boolean | Whether a user has seen this record |
| reviewed | Boolean | Whether a user has reviewed and labeled |
| review_label | String or null | True positive, false positive, unknown |
| notes | String or null | User notes |

---

*See also: [Data Model](data-model.md) | [Anomaly Detection](../05-ai-ml/anomaly-detection.md)*
