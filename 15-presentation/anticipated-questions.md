# Anticipated Questions

### Technical Questions

**Q: How do you detect 0.01 Hz?**
**A:** "Detecting 0.01 Hz requires extremely long observation windows (hundreds of seconds) because the period of a single wave is 100 seconds. Our hardware is designed to measure down to this frequency using a differential reference chamber, but characterizing a 0.01 Hz signal in software requires a sufficiently long FFT window and stable environmental conditions."

**Q: Why is your sampling rate sufficient?**
**A:** "Our candidate sampling rate of at least 50 Hz satisfies the Nyquist criterion for a 20 Hz maximum signal, but we prefer higher rates (e.g., 100 Hz) to provide a practical margin for analog anti-alias filtering and digital processing."

**Q: What is your actual noise floor?**
**A:** "The actual noise floor is currently pending validation. It will be experimentally measured in a quiet environment once the prototype hardware is fully assembled."

**Q: How is the sensor calibrated?**
**A:** "Calibration is necessary before making any quantitative claims in Pascals. We plan to perform reference pressure tests using controlled pressure steps to determine the V/Pa or Pa/count sensitivity."

**Q: How do you remove wind noise?**
**A:** "We use a physical wind-noise reduction rosette/manifold that spatially averages the pressure field. The expected attenuation will be experimentally characterized, but we do not claim the same performance as professional large-scale arrays."

**Q: How do you handle urban interference?**
**A:** "Urban deployment is a challenging validation scenario that increases false positives. We will characterize environmental noise during our baseline collection before making claims about event-detection performance."

**Q: Why Isolation Forest?**
**A:** "We chose Isolation Forest because it is an unsupervised anomaly detection algorithm. It learns the baseline environmental noise and flags deviations without needing a massive labeled dataset of rare infrasound events."

**Q: How is the normalized anomaly index calculated?**
**A:** "The Isolation Forest generates a raw normalized anomaly index based on path lengths in decision trees. This is then normalized into a project-defined visualization score (0-1). It must not be interpreted as a probability or confidence percentage."

**Q: How much training data is required?**
**A:** "Initial experiments will determine the amount of baseline data required for stable anomaly detection. It depends heavily on the deployment environment's variability."

**Q: How do you prevent false positives?**
**A:** "We tune our experimental thresholds using validation data. However, our system screens for potential anomalies; it does not confirm events, so false positives due to environmental changes are expected and are a known limitation."

### Innovation

**Q: CTBTO already detects infrasound. What is new?**
**A:** "InfraSocket does not compete with CTBTO. We are building a complementary low-cost, portable, and modular local monitoring layer that integrates edge AI anomaly screening, making infrasound accessible to researchers and educators."

**Q: Why is another infrasound sensor required?**
**A:** "Existing professional systems are extremely expensive and fixed. InfraSocket provides a modular architecture for regional experimentation where CTBTO-level sensitivity is not strictly required."

**Q: Why can't existing commercial sensors be used?**
**A:** "Commercial sensors either lack the low-frequency response (0.01 Hz) or are prohibitively expensive research instruments. We are aiming for a low-cost differential measurement approach."

### Feasibility

**Q: What is your prototype cost?**
**A:** "The target is a low-cost student/hackathon budget, utilizing MEMS/differential sensors and affordable edge computers like ESP32 or Raspberry Pi."

**Q: What hardware is actually available?**
**A:** "We have identified prototype candidates for the sensor, analog front end, and edge processing. Actual integration is marked as 'Prototype candidate' or 'To validate'."

**Q: Can it work outdoors?**
**A:** "Yes, with the environmental enclosure and wind-noise reduction manifold, though performance depends heavily on the specific outdoor environment and weather conditions."

**Q: What happens during power/network failure?**
**A:** "The system requires continuous power. During a network failure, the edge node can perform local data recording, but the live dashboard and alerts will be offline."

### Scalability

**Q: How do multiple nodes communicate?**
**A:** "Telemetry candidate options include Wi-Fi, Ethernet, 4G, or LoRa, depending on the required bandwidth and deployment location."

**Q: How will synchronization work?**
**A:** "Accurate time synchronization (e.g., via GPS or NTP) is a requirement for our future multi-node architecture."

**Q: How will localization work?**
**A:** "Localization requires cross-correlation and arrival-time difference calculations across multiple synchronized nodes. This is strictly future scope."

**Q: What happens if one node fails?**
**A:** "The architecture is modular. A single node can continue local anomaly screening independently, though multi-node localization would degrade."

### Scientific validity

**Q: What is measured versus assumed?**
**A:** "We clearly separate validated claims from targets. For instance, our 0.01-20 Hz frequency response and noise attenuation are targets to be experimentally validated, not assumed guarantees."

**Q: Which performance values are experimentally validated?**
**A:** "We maintain a 'Measured vs Target' matrix. Currently, parameters like noise floor, AI precision, and wind attenuation are pending experimental validation."

**Q: Which results are simulated?**
**A:** "Synthetic signal injection is used to validate the signal-processing and AI pipeline, but we explicitly state that this does not by itself validate atmospheric sensing performance."

**Q: What is the difference between anomaly detection and event classification?**
**A:** "Our MVP does anomaly detection: identifying deviations from a learned baseline. Event classification (identifying the physical cause, like an explosion) requires additional analysis and labeled data, which is out of scope for the prototype."

### Design & Architecture

**Q: Why do you need such a long observation window?**
**A:** "A 0.01 Hz signal has a period of approximately 100 seconds. To properly characterize such a signal in the frequency domain, the observation window must be at least several times the signal period. A 30-second window can screen for higher-frequency components but cannot resolve 0.01 Hz."

**Q: Why use differential pressure?**
**A:** "Atmospheric pressure is dominated by weather changes — approximately 101,325 Pa with slow variations of hundreds of Pascals. Infrasound signals are tiny fractions of a Pascal riding on top of this. Differential measurement with a reference chamber mechanically suppresses the slow drift, isolating only the fast pressure variations."

**Q: Why use a reference chamber?**
**A:** "The reference chamber provides a slowly-equalizing reference pressure via a capillary. Fast pressure variations (infrasound) appear as a differential across the sensor, while slow barometric changes equalize through the capillary and are suppressed. It acts as a mechanical high-pass filter."

**Q: How is InfraSocket different from commercial sensors?**
**A:** "Commercial microbarometers are research-grade, expensive, and often proprietary. InfraSocket aims to be a modular, lower-cost platform where all components — hardware, signal processing, and AI — are integrated and documented for accessibility."

**Q: Is the normalized anomaly index a probability?**
**A:** "No. The normalized anomaly index is a project-defined visualization/decision-support score derived from the Isolation Forest's path-length-based raw score. It must not be interpreted as a probability or confidence percentage."

### Robustness

**Q: What happens if the AI is wrong?**
**A:** "If the AI falsely flags a normal signal as anomalous, no harm is done — the alert is logged for review. If it misses an anomaly, the raw data is still stored and can be reanalyzed. AI failure never causes data loss."

**Q: What happens if internet connectivity fails?**
**A:** "The edge node continues local data acquisition, signal processing, and AI inference. Data is stored locally. The dashboard and remote alerts are unavailable until connectivity is restored."

**Q: What is actually implemented vs proposed?**
**A:** "We maintain status labels throughout the documentation: IMPLEMENTED, PROTOTYPE, PROPOSED, TO BE VALIDATED, and FUTURE. Every technology and specification is tagged with one of these labels."

### Broader Impact

**Q: What is the current prototype cost?**
**A:** "The total prototype cost target is a student/hackathon budget. Exact cost will be computed after component selection and sourcing. We do not fabricate a cost number before purchasing."

**Q: How can this become a startup?**
**A:** "Potential business models include hardware node sales, monitoring platform subscription, analytics subscription, research/education packages, and monitoring-as-a-service. These are proposed future directions, not existing revenue."

**Q: Why can't satellites solve the same problem?**
**A:** "Satellite observations and ground-based infrasound provide complementary information. Satellites observe some atmospheric phenomena but do not directly measure infrasonic pressure waves at ground level. InfraSocket can potentially act as an additional ground-based sensing layer."

**Q: Why is this useful for government/research?**
**A:** "A low-cost, modular, deployable infrasound monitoring system can augment existing networks in regions without coverage, support research projects, and serve educational purposes — without requiring the infrastructure of professional-grade networks."

**Q: What is the next technical milestone?**
**A:** "The immediate milestone is completing the hardware prototype, validating the sensor response, measuring the noise floor, and running the AI pipeline on real atmospheric data. Every claim in our documentation is linked to a specific validation step."

---

*See also: [Talking Points](talking-points.md) | [Scope and Limitations](../01-overview/scope-and-limitations.md)*
