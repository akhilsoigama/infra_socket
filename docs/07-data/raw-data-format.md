# Raw Data Format

## Description
Raw data consists of individual ADC samples with timestamps, directly as read from the hardware.

## Record Format
```json
{
  "timestamp": "2025-03-15T10:30:00.020Z",
  "sensor_id": "SENSOR-001",
  "adc_value": 32847,
  "pressure_pa": null,
  "temperature_raw": 2456,
  "temperature_c": 22.5,
  "quality_status": "OK"
}
```

| Field | Type | Description |
|---|---|---|
| timestamp | ISO 8601 (ms precision) | Sample acquisition time |
| sensor_id | String | Sensor identifier |
| adc_value | Integer | Raw ADC reading |
| pressure_pa | Float or null | Calibrated pressure (null if uncalibrated) |
| temperature_raw | Integer | Raw temperature ADC reading |
| temperature_c | Float | Calibrated temperature in °C |
| quality_status | String | OK, SATURATED, GAP, ERROR |

## Storage Volume

At 50 Hz sampling: ~4.3 million samples/day, approximately 10–50 MB/day depending on format and compression.

---

*See also: [Data Model](data-model.md) | [Processed Data Format](processed-data-format.md)*
