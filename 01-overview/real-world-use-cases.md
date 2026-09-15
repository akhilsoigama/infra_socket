# Real-World Use Cases

## Important Disclaimer

> InfraSocket is a prototype/research system. It is **not** a certified safety system, early-warning system, or government-grade monitoring instrument. The use cases below describe areas where infrasound monitoring **can support** research and observation. The system's ability to contribute meaningfully to any specific use case depends on calibration, validation, and the specific deployment environment.

## Use Case 1: Atmospheric Monitoring and Research

**Description:** Continuous monitoring of the local infrasound environment to establish baseline conditions and observe natural variations.

**How InfraSocket Supports This:**
- Records long-term pressure waveform data
- Provides FFT and spectrogram analysis of the ambient infrasound field
- AI flags unusual deviations from the established baseline

**Value:** Provides hands-on learning about atmospheric acoustics and environmental monitoring.

## Use Case 2: Volcanic Activity Monitoring Support

**Description:** Active volcanoes produce sustained infrasound signals from eruptions, gas venting, and tremor. Research institutions use infrasound networks to monitor volcanic activity remotely.

**How InfraSocket Could Support This:**
- A low-cost sensor deployed near (but at safe distance from) an active volcano could provide additional data points
- Anomaly detection could flag changes in the infrasound signature
- Time-frequency analysis could reveal spectral changes associated with activity changes

**Limitations:**
- A single sensor cannot determine the direction or distance of a source
- Sensitivity and noise floor of the prototype may not be sufficient for weak volcanic signals at large distances
- Event identification (e.g., distinguishing volcanic tremor from wind) requires additional validation

## Use Case 3: Meteor Entry Detection Support

**Description:** Large meteors entering the atmosphere produce strong infrasound signals that can travel thousands of kilometres.

**How InfraSocket Could Support This:**
- A bright meteor event may produce a signal strong enough for a nearby prototype sensor to detect
- Anomaly detection would flag the unusual signal
- Correlation with visual observations or other data sources could confirm the event

**Limitations:**
- Most meteor infrasound signals require sensitive instruments and quiet environments
- A single prototype sensor cannot localize the source
- Confirmation requires external data (e.g., fireball reports, satellite data)

## Use Case 4: Severe Weather Research

**Description:** Severe storms, tornadoes, and large-scale weather systems generate infrasound through mechanisms including turbulence, convective activity, and pressure fluctuations.

**How InfraSocket Could Support This:**
- Continuous recording during storm seasons could capture weather-related infrasound
- Spectral analysis may reveal characteristic frequency patterns
- Correlation with meteorological data could provide research insights

**Limitations:**
- Wind noise during storms may overwhelm the sensor
- Separating weather-generated infrasound from weather-generated wind noise is challenging

## Use Case 5: Industrial Monitoring

**Description:** Large industrial facilities (power plants, factories, mining operations) can produce infrasound through machinery vibration, explosions, or large-scale processes.

**How InfraSocket Could Support This:**
- Monitoring the infrasound environment near industrial sites
- Detecting changes in the infrasound signature that may indicate equipment issues
- Providing continuous, unattended monitoring data

**Limitations:**
- Urban/industrial environments have high ambient noise
- Source identification requires additional information

## Use Case 6: Educational and Academic Use

**Description:** Infrasound is an excellent teaching topic spanning physics, signal processing, electronics, and machine learning.

**How InfraSocket Supports This:**
- Provides a hands-on project for learning about atmospheric pressure waves
- Demonstrates real-world application of FFT, filtering, and spectral analysis
- Introduces students to anomaly detection and machine learning concepts
- Covers hardware design, embedded systems, and full-stack software

**Value:** This is one of the strongest use cases for the prototype. The system is designed to be educational and reproducible.

## Use Case 7: Rocket Launch Monitoring

**Description:** Rocket launches produce powerful infrasound signals that can be detected at large distances.

**How InfraSocket Could Support This:**
- A sensor deployed within a reasonable distance of a launch site could capture the infrasound signature
- Signal analysis could reveal the spectral characteristics of launch events

**Limitations:**
- Distance and atmospheric conditions affect signal strength
- Access to launch sites may be restricted

## Use Case Summary

| Use Case | Prototype Suitability | Confidence Level |
|---|---|---|
| Atmospheric monitoring/research | High | Achievable with prototype |
| Educational/academic | High | Primary target use case |
| Volcanic monitoring support | Medium | Depends on distance and signal strength |
| Severe weather research | Medium | Wind noise is a challenge |
| Industrial monitoring | Medium | Urban noise environment |
| Meteor detection support | Low–Medium | Requires strong events and quiet site |
| Rocket launch monitoring | Low–Medium | Depends on proximity |

---

*See also: [Problem Statement](problem-statement.md) | [Scope and Limitations](scope-and-limitations.md)*
