# Diaphragm Design

## Purpose

The diaphragm (also called membrane or sensing element) is the mechanical component within the pressure sensor that physically deflects in response to pressure differences. Its mechanical properties directly determine the sensor's sensitivity, frequency response, and noise characteristics.

## Working Principle

> **Simple Explanation:**
> Imagine stretching a thin sheet of cling wrap over the mouth of a jar. If you gently blow on it, the film bulges slightly. If you push harder, it bulges more. The diaphragm in a pressure sensor works the same way — atmospheric pressure pushes on one side, reference pressure pushes on the other, and the difference makes the diaphragm bend. By measuring how much it bends, we know the pressure difference.

> **Technical Explanation:**
> The diaphragm is a thin, typically circular membrane clamped at its edges. When a differential pressure is applied across its faces, it deflects according to thin-plate theory. The centre deflection (w₀) for a circular diaphragm is approximately:
>
> w₀ ∝ ΔP × r⁴ / (E × t³)
>
> Where:
> - ΔP = differential pressure
> - r = diaphragm radius
> - E = Young's modulus of the material
> - t = diaphragm thickness
>
> Sensitivity increases with larger radius and thinner material, but at the cost of reduced maximum pressure range and increased fragility.

## Design Considerations

### Sensitivity vs. Range Trade-off

| Parameter | Larger/Thinner Diaphragm | Smaller/Thicker Diaphragm |
|---|---|---|
| Sensitivity | Higher | Lower |
| Maximum pressure range | Lower | Higher |
| Fragility | More fragile | More robust |
| Resonant frequency | Lower | Higher |

For infrasound applications, **higher sensitivity** is preferred because the pressure signals are very small. However, the diaphragm must still withstand normal atmospheric pressure variations without damage.

### Resonant Frequency

Every diaphragm has a natural resonant frequency. For accurate measurement, the operating frequency range must be well below the resonant frequency. Since infrasound frequencies go up to only 20 Hz, the diaphragm's resonant frequency can be relatively low compared to acoustic applications, but should still be comfortably above 20 Hz to avoid resonance effects within the measurement band.

### Material Properties

Common diaphragm materials in MEMS and industrial sensors:
- **Silicon** — used in MEMS sensors; precise, repeatable, but brittle
- **Stainless steel** — used in industrial transducers; robust, corrosion-resistant
- **Polymer films** — used in some microbarometer designs; can be very thin and sensitive

### Temperature Effects

Diaphragm properties (Young's modulus, thermal expansion) change with temperature, which can cause:
- **Sensitivity drift** — the same pressure produces slightly different deflection at different temperatures
- **Zero offset drift** — the "zero" point shifts with temperature

These effects are particularly important for infrasound because the signals are small and measurements may span hours or days during which temperature changes.

## Relevance to Prototype

In the prototype, the diaphragm is part of the commercially selected pressure sensor — it is not custom-designed. However, understanding diaphragm physics helps in:

1. **Selecting a sensor** with appropriate sensitivity for infrasound
2. **Understanding noise sources** related to the mechanical sensing element
3. **Interpreting temperature effects** on measurements
4. **Setting expectations** for the achievable noise floor

> `Assumption`: The prototype will use a commercially available sensor with a pre-designed diaphragm. Custom diaphragm design is not within the scope of the MVP.

---

*See also: [Pressure Sensing](pressure-sensing.md) | [Differential Pressure System](differential-pressure-system.md)*
