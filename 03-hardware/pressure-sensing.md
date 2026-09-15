# Pressure Sensing

## Purpose

The pressure sensor is the core transduction element of the system. It converts atmospheric pressure variations into a proportional electrical signal that can be amplified, filtered, and digitized.

## Working Principle

> **Simple Explanation:**
> A pressure sensor works like a very sensitive drumhead. When atmospheric pressure changes slightly, the drumhead (diaphragm) flexes inward or outward. This movement is detected and converted into an electrical voltage. The harder the air pushes, the more the drumhead bends, and the larger the voltage.

> **Technical Explanation:**
> Infrasound pressure sensors typically use a thin diaphragm (membrane) that deflects in response to differential pressure across its surfaces. The deflection is sensed by one of several transduction mechanisms:
>
> - **Piezoresistive:** Strain gauges on the diaphragm change resistance as it deflects
> - **Capacitive:** The diaphragm forms one plate of a capacitor; deflection changes capacitance
> - **Piezoelectric:** The diaphragm material generates a charge proportional to strain (less suitable for very low frequencies due to charge leakage)

For infrasound applications, **piezoresistive** and **capacitive** sensors are preferred because they can respond to quasi-static (very slow) pressure changes, unlike piezoelectric sensors which are better suited for higher frequencies.

## Inputs and Outputs

| Parameter | Value |
|---|---|
| **Input** | Differential air pressure across the sensor diaphragm |
| **Output** | Electrical voltage proportional to pressure difference |
| **Input range** | Very small differential pressures (fractions of a Pascal to a few Pascals) |
| **Output range** | Depends on sensor; typically µV to mV per Pascal |

## Key Requirements for Infrasound Sensing

| Requirement | Explanation |
|---|---|
| Low-frequency response | Target low-frequency response: approximately 0.01 Hz (100-second period) |
| Differential measurement | Needed to reject barometric drift when used with reference chamber |
| Low noise | Sensor self-noise must be below the expected signal level |
| Linearity | Output should be proportional to pressure over the operating range |
| Low hysteresis | Should return to the same output for the same pressure, regardless of history |
| Temperature stability | Sensitivity and offset should change minimally with temperature |

## Sensor Types Considered

### MEMS Differential Pressure Sensors

Modern MEMS (Micro-Electro-Mechanical Systems) pressure sensors are compact, relatively inexpensive, and available in differential configurations. Many have digital or analog outputs.

**Advantages:**
- Small size, low cost
- Available in differential configurations
- Digital interfaces (I²C, SPI) on some models
- Widely available from multiple manufacturers

**Limitations:**
- Noise floor may be higher than research-grade sensors
- Long-term stability varies by model
- May require careful evaluation for sub-hertz performance

### Analog Differential Pressure Transducers

Industrial differential pressure transducers offer higher performance but are larger and more expensive.

**Advantages:**
- Often lower noise than MEMS
- Well-characterized specifications
- Robust construction

**Limitations:**
- Higher cost
- Larger size
- May require more complex signal conditioning

### Research-Grade Microbarometers

Instruments like the CEA MB3 or similar are purpose-built for infrasound monitoring.

**Advantages:**
- Optimized for infrasound frequencies
- Very low noise floor
- Well-documented performance

**Limitations:**
- Significantly higher cost
- May be difficult to source for student projects
- Not necessary for a prototype demonstration

## Prototype Recommendation

For the MVP prototype, a **MEMS differential pressure sensor** is recommended as a **prototype candidate** because of:

1. **Availability** — widely stocked by electronics distributors
2. **Cost** — affordable for student/hackathon budgets
3. **Interface** — many offer digital (I²C/SPI) interfaces, simplifying the analog front end
4. **Documentation** — extensive application notes and community support

> `Assumption`: The specific sensor model will be selected based on available budget, required sensitivity, and noise floor specifications evaluated during component selection. Exact sensor specifications are not fabricated here.

## Sensor Selection Criteria

Evaluate candidate sensors based on the following criteria before final selection:

| # | Criterion | Rationale |
|---|---|---|
| 1 | Pressure measurement range | Must accommodate expected differential pressures (fractions of Pa to a few Pa) |
| 2 | Noise density / resolution | Determines the minimum detectable signal |
| 3 | Low-frequency response | Target low-frequency response: approximately 0.01 Hz (100-second period) — To Be Validated |
| 4 | Temperature drift | Sensitivity and offset should change minimally with temperature |
| 5 | Long-term stability | Sensor performance should not degrade significantly over weeks/months |
| 6 | Output interface | Analog (voltage) or digital (I²C/SPI) — affects front-end design |
| 7 | Supply voltage | Must be compatible with the chosen edge hardware |
| 8 | Availability | Must be sourceable from standard electronics distributors |
| 9 | Cost | Must fit within prototype budget constraints |
| 10 | Calibration capability | Must be possible to characterize sensitivity and offset |
| 11 | Environmental suitability | Must tolerate expected operating temperature and humidity range |

> The final sensor will be selected after candidate comparison and bench testing. No specific commercial sensor is locked in until evaluation is complete.

## Design Considerations

### Overrange Protection
The sensor must tolerate full atmospheric pressure without damage, even though it measures only small differential pressures. Most differential sensors are rated for overpressure on both ports.

### Port Configuration
- **Positive port:** Connected to the wind-noise manifold (atmospheric side)
- **Negative port (reference):** Connected to the reference chamber

### Mounting
The sensor should be mounted to minimize mechanical stress and vibration coupling. Flexible tubing connections to the pressure ports help isolate the sensor from enclosure vibration.

---

*See also: [Diaphragm Design](diaphragm-design.md) | [Differential Pressure System](differential-pressure-system.md) | [Reference Chamber](reference-chamber.md)*
