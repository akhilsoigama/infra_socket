# Environmental Enclosure

## Purpose

The environmental enclosure protects the electronic components from weather, dust, insects, and temperature extremes while allowing the pressure sensor's atmospheric port to remain exposed to the ambient atmosphere.

## Requirements

| Requirement | Rationale |
|---|---|
| Weather resistance | Must survive rain, humidity, UV exposure |
| Thermal insulation | Reduces temperature swings that cause measurement drift |
| Dust and insect protection | Prevents contamination of sensor ports and electronics |
| Sensor port access | Pressure port(s) must remain connected to the atmosphere |
| Calibration access | Must be openable for calibration and maintenance |
| Cable entry | Sealed entries for power and data cables |
| Mounting | Secure mounting to ground or platform |

## Design Considerations

### Ventilation vs. Sealing
The enclosure must be sealed enough to protect electronics but NOT hermetically sealed — the sensor needs atmospheric access. The wind-noise manifold tubes pass through the enclosure to reach the sensor's pressure port.

### Thermal Design
- Insulation (foam, double-wall construction) reduces temperature swings
- Light-coloured exterior reduces solar heating
- Avoid placing heat-generating components (voltage regulators, computing boards) in direct thermal contact with the sensor

### Materials

| Material | Advantages | Disadvantages |
|---|---|---|
| ABS/Polycarbonate plastic | Lightweight, weather-resistant, insulating | May degrade under prolonged UV |
| Fibreglass | Very weather-resistant, good insulator | Heavier, more expensive |
| Aluminium | Durable, RF shielding | Thermally conductive (poor insulator) |
| IP-rated project box | Pre-made, rated for weather protection | May need modification for ports |

**Prototype recommendation:** An IP65 or IP66 rated plastic project box (ABS or polycarbonate) provides adequate protection and is readily available. Drill and seal holes for manifold tubes, cables, and the capillary vent.

## Prototype Enclosure Layout

```
┌──────────────────────────────────┐
│         Environmental            │
│           Enclosure              │
│                                  │
│  ┌─────────┐   ┌──────────┐     │
│  │ Pressure │   │  ADC /   │     │
│  │  Sensor  │   │   MCU    │     │
│  └────┬─────┘   └────┬─────┘     │
│       │              │           │
│  ┌────┴─────┐   ┌────┴─────┐    │
│  │ Reference│   │  Power   │    │
│  │ Chamber  │   │  Supply  │    │
│  └──────────┘   └──────────┘    │
│                                  │
│  Temp Sensor [·]                 │
│                                  │
├──┬────────────────────────┬──────┤
│  │ Manifold tubes in      │ Cable│
│  │ (sealed pass-through)  │ entry│
└──┴────────────────────────┴──────┘
```

---

*See also: [Hardware Overview](hardware-overview.md) | [Power System](power-system.md)*
