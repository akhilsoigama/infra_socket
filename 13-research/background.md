# Background

## What Is Infrasound?

Infrasound refers to acoustic (pressure) waves with frequencies below the lower limit of human hearing, approximately below **20 Hz**. The infrasound range of interest for atmospheric monitoring extends down to approximately **0.01 Hz** (period of 100 seconds).

At these very low frequencies, sound waves behave differently from audible sound:

- **Long wavelengths:** At 1 Hz, the wavelength is approximately 340 metres (speed of sound ÷ frequency). At 0.01 Hz, the wavelength is approximately 34 kilometres.
- **Low atmospheric absorption:** Lower frequencies experience less absorption than higher frequencies, allowing infrasound to travel hundreds or thousands of kilometres through the atmosphere.
- **Interaction with atmospheric structure:** Infrasound waves can be refracted and ducted by atmospheric temperature and wind gradients, enabling long-range propagation.

## What Is a Microbarometer?

A microbarometer is a precision instrument designed to measure small, rapid atmospheric pressure fluctuations — specifically, the infrasound component of the atmospheric pressure field. Unlike a standard barometer that measures absolute atmospheric pressure (typically ~101,325 Pa), a microbarometer is designed to measure deviations of a fraction of a Pascal from the atmospheric mean.

Key design features of microbarometers:
- **Differential measurement** against a reference pressure
- **High sensitivity** to small pressure changes
- **Frequency response** extending to sub-hertz frequencies
- **Mechanical high-pass filtering** via reference chamber to suppress barometric drift

## History of Infrasound Monitoring

Infrasound monitoring has a history spanning over a century:

- **Early 20th century:** Scientists recognized that volcanic eruptions and large explosions produced atmospheric pressure waves detectable at great distances
- **Cold War era:** Infrasound monitoring was developed for nuclear test detection
- **1996:** The Comprehensive Nuclear-Test-Ban Treaty (CTBT) established the International Monitoring System (IMS), which includes a global network of infrasound stations
- **Present:** The IMS infrasound network consists of 60 planned stations (53 certified as of recent years), each using arrays of microbarometers with spatial-filtering wind-noise reduction systems

## The CTBTO Infrasound Network

The Comprehensive Nuclear-Test-Ban Treaty Organization (CTBTO) operates the most extensive global infrasound monitoring network. Key characteristics:

- **60 stations** distributed worldwide
- **4–8 microbarometers per station** in array configurations
- **Array apertures** of 1–3 km
- **Spatial-filtering pipe arrays** (rosettes) of 18–70 m diameter per sensor
- **Sampling rate** typically 20 samples per second
- **Processing** using cross-correlation methods (e.g., PMCC — Progressive Multi-Channel Correlation)

This professional infrastructure provides the benchmark against which simpler systems can be compared.

## Why This Project Matters

The CTBTO and similar networks demonstrate that infrasound monitoring is technically feasible and scientifically valuable. However, these systems are:
- Expensive to build and maintain
- Geographically limited (60 stations for the entire globe)
- Primarily designed for treaty verification, not general research

A low-cost, accessible prototype could:
- Enable educational and research institutions to explore infrasound monitoring
- Provide supplementary data in regions without professional stations
- Serve as a teaching platform for signal processing and machine learning
- Demonstrate the feasibility of AI-enhanced infrasound analysis

---

*See also: [Existing Solutions](existing-solutions.md) | [References](references.md)*
