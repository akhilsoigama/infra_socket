# Hardware Bill of Materials (BOM)

## Overview

This document lists the categories of components required for the InfraSocket prototype. Exact costs are not fabricated — instead, estimated cost ranges are provided where possible, with notes for sourcing.

> **Important:** Prices vary by supplier, region, and time. The costs below are approximate ranges intended for budget planning. Verify current pricing before purchasing.

## BOM Table

| Category | Component | Qty | Estimated Cost Range | Source | Notes |
|---|---|---|---|---|---|
| **Pressure Sensing** | Differential pressure sensor (MEMS) | 1 | `To be determined` | Electronics distributor | Selection pending; evaluate noise and frequency response |
| **Reference Chamber** | Airtight container (rigid, 0.5–5 L) | 1 | Low | Hardware store / lab supply | Glass jar, metal canister, or thick-walled PVC. Volume is an initial engineering range — to be experimentally optimized |
| | Capillary tubing (0.1–0.5 mm bore) | 1 | Low | Medical/lab supply | Precision bore critical. Bore diameter is an initial engineering range — to be experimentally optimized |
| | Tubing connectors and sealant | Assorted | Low | Hardware store | Epoxy, silicone, compression fittings |
| **Wind-Noise Reduction** | Tubing (5–15 mm diameter, 5–15 m total) | 1 set | Low | Hardware store | Silicone, PVC, or copper tubing. Dimensions are initial engineering ranges — to be experimentally optimized |
| | T-connectors / manifold fittings | 4–12 | Low | Hardware/plumbing supply | Depends on manifold design |
| | Mesh filters for inlets | 4–12 | Low | Hardware store | Prevent debris and insects |
| **Electronics** | Instrumentation amplifier IC | 1 | Low | Electronics distributor | Select for low noise, low offset |
| | Operational amplifier (for filter) | 1–2 | Low | Electronics distributor | Low noise, rail-to-rail |
| | Passive components (resistors, capacitors) | Assorted | Low | Electronics distributor | Precision resistors for gain setting |
| | PCB / protoboard | 1 | Low | Electronics distributor | Custom PCB or breadboard for prototype |
| **ADC** | External ADC module (≥16-bit) | 1 | `To be determined` | Electronics distributor | Sigma-Delta or SAR; evaluate resolution |
| **Microcontroller / DAQ** | Microcontroller board (e.g., Arduino, STM32) or DAQ board | 1 | `To be determined` | Electronics distributor | Must support ADC interface (SPI/I²C/USB) |
| **Temperature Sensor** | Digital temperature sensor (I²C) | 1–2 | Low | Electronics distributor | ±0.5°C accuracy typical |
| **Enclosure** | IP65/IP66 project box | 1 | Low–Medium | Electronics/industrial supply | Size to fit all components |
| | Cable glands | 2–4 | Low | Electronics/industrial supply | Sealed cable entry |
| | Mounting hardware | Assorted | Low | Hardware store | Screws, brackets, standoffs |
| **Power Supply** | AC/DC adapter (12V or 5V) | 1 | Low | Electronics supply | Mains-powered |
| | Linear voltage regulator | 1–2 | Low | Electronics distributor | For clean analog power |
| | Decoupling capacitors | Assorted | Low | Electronics distributor | 100 nF ceramic, bulk electrolytic |
| **Computing** | Edge computer (Raspberry Pi or equivalent) | 1 | Medium | Electronics supply | For signal processing, AI, dashboard |
| | MicroSD card (32 GB+) | 1 | Low | Electronics/general supply | For OS and data storage |
| | USB cable | 1 | Low | General supply | MCU to edge computer connection |
| **Miscellaneous** | Wiring, connectors, headers | Assorted | Low | Electronics distributor | |
| | Thermal insulation material | As needed | Low | Hardware store | Foam, reflective foil |

## Cost Categories

| Category | Estimated Range | Notes |
|---|---|---|
| Low | Under ₹500 / $5 per item | Common, widely available |
| Low–Medium | ₹500–₹2,000 / $5–$25 | Moderate-cost items |
| Medium | ₹2,000–₹5,000 / $25–$60 | Key components (SBC, ADC) |
| `To be determined` | Varies | Requires specific component selection |

## Total Estimated Prototype Cost

The total prototype cost is expected to fall in the range of a student/hackathon budget. The exact total depends on component selection decisions that are still pending.

`Assumption`: The prototype budget target is to keep total component cost practical for a student team. Exact total cost will be computed after component selection and sourcing.

## Notes

1. Costs do not include tools (soldering iron, multimeter, etc.) which are assumed to be available
2. Costs do not include the processing computer if a team member's laptop is used instead of a Raspberry Pi
3. Prices should be verified at the time of purchase from current supplier listings
4. Bulk purchasing or sponsor support may reduce costs

---

*See also: [Hardware Overview](hardware-overview.md) | [Bill of Materials](../12-cost-and-feasibility/bill-of-materials.md) | [Prototype Cost](../12-cost-and-feasibility/prototype-cost.md)*
