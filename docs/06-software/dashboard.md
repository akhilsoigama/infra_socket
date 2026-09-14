# Dashboard

## Purpose

The real-time web dashboard provides visual feedback on system status, sensor data, signal analysis, and anomaly detection results.

## Dashboard Layout

```
┌──────────────────────────────────────────────────────────────┐
│                    INFRASENSE DASHBOARD                       │
├──────────┬───────────────────────────────────────────────────┤
│ Sensor   │  SENSOR-001  |  Status: 🟢 ONLINE  |  Temp: 22°C │
│ Info     │  AI Status: ✅ RUNNING  |  Uptime: 24h 15m        │
├──────────┴───────────────────────────────────────────────────┤
│                                                              │
│  Live Pressure Waveform                                      │
│  ╭─────────────────────────────────────────────────╮         │
│  │  ∼∼∼∼∼∼∼∼∼∼∼∼∼∼∼∼∼∼∼∼∼∼∼∼∼∼∼∼∼∼∼∼∼∼∼∼∼∼∼∼∼ │         │
│  ╰─────────────────────────────────────────────────╯         │
│                                                              │
├──────────────────────────┬───────────────────────────────────┤
│  Frequency Spectrum      │  Spectrogram                      │
│  ╭──────────────────╮    │  ╭──────────────────────────╮     │
│  │  ▐ ▐▐ ▐          │    │  │  ░░▓▓░░░░░░▓▓▓░░░░░░░░░ │     │
│  │  ▐ ▐▐ ▐  ▐       │    │  │  ░░▓▓░░░░░░░▓▓░░░░░░░░░ │     │
│  │  ▐ ▐▐ ▐▐ ▐▐      │    │  │  ░░░░░░░░░░░░░░░░░░░░░░ │     │
│  ╰──────────────────╯    │  ╰──────────────────────────╯     │
│  0.01 Hz ────── 20 Hz    │  Time →                           │
├──────────────────────────┴───────────────────────────────────┤
│                                                              │
│  AI Anomaly Detection                                        │
│  ┌──────────────────────────────────────────────┐            │
│  │ Score: ██████░░░░░░░░░░░░░░  0.12            │            │
│  │ Threshold: ─────────────────|── 0.70         │            │
│  │ Status: ✅ NORMAL                             │            │
│  └──────────────────────────────────────────────┘            │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│  Event Timeline / Alert History                              │
│  10:15 ✅ Normal | 10:30 ✅ Normal | 10:45 🚨 ANOMALY       │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

## Dashboard Components

| Component | Data Source | Update Rate |
|---|---|---|
| Sensor status | Health monitor | Every 5 seconds |
| Live waveform | Raw sample buffer | 1–2 Hz |
| Frequency spectrum | Latest FFT | Per window (~30 sec) |
| Spectrogram | Rolling spectrogram data | Per window |
| Temperature | Temperature sensor | Every 5–10 seconds |
| Anomaly score | AI inference output | Per window |
| Anomaly status | Threshold comparison | Per window |
| Event timeline | Anomaly records from DB | Per window |
| Historical data | Database query | On demand |

## Technology Options

| Technology | Advantages | Notes |
|---|---|---|
| Chart.js | Lightweight, easy to integrate | Good for basic charts |
| Plotly.js | Interactive, supports spectrograms | Richer visualizations |
| D3.js | Maximum flexibility | Steeper learning curve |
| Grafana | Ready-made dashboards | Requires setup, may be overkill for prototype |

## Data Communication

The dashboard communicates with the backend via:
- **REST API** for historical data and current state
- **WebSocket** (`Future Scope`) for real-time push updates
- **Polling** (every 1–2 seconds) as a simpler alternative to WebSocket for MVP

---

*See also: [API Design](api-design.md) | [Alert System](alert-system.md) | [Software Overview](software-overview.md)*
