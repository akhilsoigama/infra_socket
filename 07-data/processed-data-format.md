# Processed Data Format

## Description
Processed data includes filtered signal segments and their spectral representations.

## Record Format
```json
{
  "window_id": "WIN-20250315-103000",
  "start_time": "2025-03-15T10:30:00Z",
  "end_time": "2025-03-15T10:30:30Z",
  "sensor_id": "SENSOR-001",
  "sampling_rate": 50.0,
  "sample_count": 1500,
  "quality_status": "OK"
}
```

The filtered signal samples and FFT results can be stored as binary arrays or in a separate time-series store for efficiency. For the prototype, storing only the extracted features (see [Feature Data Format](feature-data-format.md)) is sufficient.

---

*See also: [Raw Data Format](raw-data-format.md) | [Feature Data Format](feature-data-format.md)*
