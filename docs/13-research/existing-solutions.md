# Existing Solutions

## Professional Systems

### CTBTO IMS Infrasound Stations
- **Description:** Global network of 60 stations for nuclear test detection
- **Sensors:** Research-grade microbarometers (e.g., CEA MB3, Chaparral Physics sensors)
- **Wind-noise reduction:** Large pipe arrays (18–70 m diameter rosettes)
- **Array size:** 1–3 km aperture, 4–8 sensors per station
- **Processing:** PMCC algorithm, automated detection
- **Cost:** Very high (infrastructure-scale)
- **Access:** Restricted; scientific access via vDEC application

### Research Station Networks
- **EarthScope/USArray Transportable Array:** Deployed infrasound sensors alongside seismic instruments across the US
- **Individual research groups:** Universities and national labs operate specialized infrasound stations
- **Cost:** High (research funding required)

### Commercial Sensors
- **CEA/DASE MB3:** Research-grade microbarometer
- **Chaparral Physics sensors:** Used at many IMS stations
- **Setra, Honeywell, Validyne:** Industrial differential pressure sensors adaptable for infrasound
- **Cost:** Individual sensors range from moderate to high

## Low-Cost / DIY Efforts
Several individuals and groups have explored low-cost infrasound sensing:
- **Instructables / maker community:** DIY microbarometer projects using MEMS pressure sensors
- **University student projects:** Various prototype systems for educational purposes
- **Open-source weather station networks:** Some incorporate low-frequency pressure sensing

## Comparison: Existing vs. Proposed

| Parameter | CTBTO IMS | Research Stations | Commercial Sensors | **Proposed Prototype** |
|---|---|---|---|---|
| Cost | Very high | High | Moderate–High | **Target: Low** |
| Sensor quality | Research-grade | Research-grade | Professional | Prototype-grade |
| Wind-noise reduction | Large arrays (18–70 m) | Variable (some large) | None (sensor only) | **Small manifold (1–5 m)** |
| AI/anomaly detection | Specialized algorithms | Custom per project | None | **Integrated (Isolation Forest)** |
| Real-time dashboard | Custom internal systems | Variable | None | **Planned (web-based)** |
| Accessibility | Restricted | Limited | Purchase only | **Open, reproducible** |
| Educational value | Minimal | Some | Minimal | **High** |
| Portability | Fixed installation | Semi-fixed | Portable (sensor only) | **Portable** |
| Multi-sensor array | Yes (per station) | Variable | No | **`Future Scope`** |
| Event classification | Automated (PMCC) | Custom | N/A | **`Future Scope`** |

> **Important:** The proposed prototype is not a replacement for professional systems. It is a simplified, accessible system for education, research exploration, and prototype demonstration. Performance claims require validation through calibration and testing. `To be validated`.

---

*See also: [Background](background.md) | [Proposed vs Existing](proposed-vs-existing.md)*
