# Hardware Architecture

## Hardware Block Diagram

```mermaid
flowchart TD
    subgraph INLET["Wind-Noise Reduction"]
        P1["Inlet 1"] --> MAN["Manifold\n(Common Volume)"]
        P2["Inlet 2"] --> MAN
        P3["Inlet 3"] --> MAN
        P4["Inlet 4"] --> MAN
        P5["Inlet ...N"] --> MAN
    end

    subgraph SENSING["Pressure Sensing"]
        MAN --> SPORT["Sensor Port\n(Atmosphere Side)"]
        SPORT --> DIFF["Differential Pressure\nSensor"]
        REFCHAM["Reference Chamber\n(Sealed Volume)"] --> DIFF
        CAP["Capillary Leak\n(Slow Equalization)"] --- REFCHAM
        CAP --- ATM_REF["Atmosphere\n(Reference Side)"]
    end

    subgraph ELECTRONICS["Analog Electronics"]
        DIFF --> INA["Instrumentation\nAmplifier"]
        INA --> LPF["Anti-Aliasing\nLow-Pass Filter"]
        LPF --> BIAS["DC Bias\nCircuit"]
    end

    subgraph DIGITIZATION["Digitization"]
        BIAS --> ADC["ADC Module\n(≥16-bit, ≥40 Hz)"]
        TEMP["Temperature\nSensor"] --> ADC_AUX["ADC Auxiliary\nChannel"]
    end

    subgraph POWER["Power"]
        PSU["Power Supply\n(Regulated)"] --> VREG["Voltage\nRegulator"]
        VREG --> |"Analog Supply"| ELECTRONICS
        VREG --> |"Digital Supply"| DIGITIZATION
    end

    ADC --> |"Digital Data"| MCU["Microcontroller / DAQ\n(Data Acquisition)"]
    ADC_AUX --> MCU
    MCU --> |"Serial / USB / Network"| HOST["Processing Host\n(Computer / SBC)"]
```

## Hardware Subsystem Summary

| Subsystem | Function | Key Components |
|---|---|---|
| Wind-noise reduction | Reduce turbulent wind noise | Multi-port manifold, tubing |
| Pressure sensing | Convert pressure to electrical signal | Differential pressure sensor, reference chamber, capillary |
| Analog front end | Amplify and filter the signal | Instrumentation amplifier, passive/active filters |
| Digitization | Convert analog signal to digital | ADC module (≥16-bit) |
| Temperature sensing | Monitor ambient/enclosure temperature | Temperature sensor (thermistor, RTD, or digital) |
| Power system | Provide stable, clean power | Power supply, voltage regulators |
| Enclosure | Protect electronics from environment | Weather-resistant housing |
| Data acquisition | Collect digital data and transmit | Microcontroller or DAQ board |

## Design Considerations

### Signal Path Integrity
The signal path from sensor to ADC must be designed to minimize added noise:
- Keep analog signal traces short
- Separate analog and digital ground planes
- Use shielded cables for the sensor connection
- Place the amplifier physically close to the sensor

### Power Supply Noise
Power supply noise can couple into the analog signal chain. Mitigation strategies:
- Use a linear regulator (not switching regulator) for the analog supply, or adequately filter a switching supply
- Provide separate analog and digital power rails
- Use decoupling capacitors at each IC

### Thermal Management
Temperature changes affect:
- Sensor sensitivity and offset
- Amplifier offset and gain
- Reference chamber pressure (PV = nRT)
- ADC reference voltage

Strategies:
- Thermal insulation of the enclosure
- Temperature monitoring for compensation
- Avoid placing heat-generating components near the sensor

### Mechanical Isolation
Ground vibration and mechanical disturbance can be transmitted to the pressure sensor. Mounting should include vibration isolation where possible.

## Interface Definitions

| Interface | From | To | Signal Type |
|---|---|---|---|
| Pneumatic | Manifold | Sensor port | Air pressure |
| Pneumatic | Capillary | Reference chamber | Slow air equalization |
| Electrical (analog) | Sensor | Instrumentation amplifier | Differential voltage |
| Electrical (analog) | Amplifier | Anti-alias filter | Amplified voltage |
| Electrical (analog) | Filter | ADC | Filtered voltage |
| Electrical (digital) | ADC | Microcontroller/DAQ | SPI / I²C / parallel |
| Electrical (digital) | Temperature sensor | Microcontroller/DAQ | I²C / analog |
| Data | Microcontroller/DAQ | Processing host | Serial / USB / Ethernet |

---

*See also: [Architecture](architecture.md) | [Pressure Sensing](../03-hardware/pressure-sensing.md) | [Analog Front End](../03-hardware/analog-front-end.md)*
