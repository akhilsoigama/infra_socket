# Anticipated Questions

## Technical Questions and Prepared Responses

### Q: "How sensitive is your sensor? Can it detect a volcanic eruption 1000 km away?"
**A:** "Our prototype uses a low-cost MEMS pressure sensor. The sensitivity and noise floor are characterized through our calibration procedures (we have templates and some results). Detecting a distant eruption would require both sufficient sensitivity AND a quiet deployment site — the prototype is designed to demonstrate the system pipeline, and whether it can detect real distant events depends on the actual noise floor, which is `to be validated` at the specific deployment site."

### Q: "Why Isolation Forest and not a neural network?"
**A:** "We chose Isolation Forest because it works without labeled anomaly data (unsupervised), it works with small datasets (hundreds of samples), and it's lightweight enough to run on a Raspberry Pi in real-time. A neural network like an autoencoder or CNN would be appropriate in a future phase with more data, but for our MVP, Isolation Forest is the right choice — it's well-established, computationally efficient, and well-understood."

### Q: "How do you know an anomaly is actually an infrasound event and not just noise?"
**A:** "We don't — and that's an honest limitation. Our system detects statistical anomalies in the signal, but it does not identify the cause. The anomaly could be wind, a truck passing, a temperature spike, or an actual infrasound event. Event classification is `Future Scope` requiring labeled training data."

### Q: "What is your false positive rate?"
**A:** "This depends on the deployment environment and the threshold setting. We have a testing plan to measure false positive rate over 24-hour periods (see AI Testing). The rate will be documented from actual measurements — we don't fabricate a number."

### Q: "Can your system locate the source of an infrasound event?"
**A:** "Not with a single sensor. Source localization requires an array of multiple sensors and array processing techniques (like cross-correlation). This is `Future Scope` for our multi-station architecture."

### Q: "How does your system compare to the CTBTO?"
**A:** "It doesn't — the CTBTO uses research-grade sensors, 70-metre pipe arrays, and decades of experience. Our prototype is dramatically simpler and cheaper. The value of our project is making infrasound monitoring accessible and demonstrating AI integration — not competing with professional systems."

### Q: "What happens if the power goes out?"
**A:** "Data during the outage is lost, but the system auto-starts when power returns. The database is designed for crash safety (WAL mode). For critical deployments, we recommend a UPS."

### Q: "Why not just use a standard barometer?"
**A:** "A standard barometer measures absolute atmospheric pressure, which is dominated by weather changes — approximately 101,325 Pa with slow variations of hundreds of Pascals. Infrasound signals are tiny fractions of a Pascal riding on top of this enormous background. Our differential measurement with a reference chamber mechanically suppresses the slow drift, isolating only the fast pressure variations we care about."

---

*See also: [Talking Points](talking-points.md) | [Scope and Limitations](../01-overview/scope-and-limitations.md)*
