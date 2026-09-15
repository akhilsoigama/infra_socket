# Software Deployment

## Prerequisites
- Edge computer with Linux OS (Raspberry Pi OS, Ubuntu) or Windows/macOS for laptop-based deployment
- Python 3.8+ with required packages (NumPy, SciPy, scikit-learn, Flask/FastAPI)
- SQLite (included with Python)

## Installation Steps
1. Clone or copy the software to the edge computer
2. Install Python dependencies: `pip install -r requirements.txt`
3. Configure settings (sensor port, sampling rate, threshold) in configuration file
4. Start the data acquisition service
5. Start the web dashboard service
6. Verify data appears on the dashboard

## Configuration

```yaml
# config.yaml (proposed)
sensor:
  port: "/dev/ttyUSB0"    # Serial port for DAQ
  sampling_rate: 50       # Hz
  adc_bits: 16

processing:
  window_length: 30       # seconds
  filter_low: 0.01        # Hz (high-pass cutoff)
  filter_high: 20.0       # Hz (low-pass cutoff)
  filter_order: 4

ai:
  model_path: "models/isolation_forest.joblib"
  threshold: 0.70
  alert_cooldown: 300     # seconds

dashboard:
  host: "0.0.0.0"
  port: 8080

database:
  path: "data/InfraSocket.db"
```

## Service Management
For production-like deployment, use systemd (Linux) to manage services:
- Auto-start on boot
- Auto-restart on failure
- Log management

---

*See also: [Deployment Overview](deployment-overview.md) | [Backend](../06-software/backend.md)*
