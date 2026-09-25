# References

## Authoritative References

> **Note:** All references listed below are real, verifiable sources from established organizations and peer-reviewed publications.

# **SIH Problem Statement** 

144  :  Background The Infrasound sensors are precision instruments designed to detect and measure low frequency atmospheric pressure waves, known as infrasound, that fall below the range of human hearing, typically under 20 Hz. These waves can travel long distances through the atmosphere and are produced by a variety of natural and human-made sources including distant Industrial explosions, volcanic eruptions, severe weather systems, meteors, rocket launches, and other energetic phenomena. Detection and analysis of these signals are important for atmospheric monitoring, geophysical research, disaster warning systems and security applications.  
• Description It is required to design and develop a high-sensitivity atmospheric microbarometer Infrasound sensor capable of measuring infrasonic pressure fluctuations in the frequency range of approximately 0.01 Hz to 20 Hz.  
  
**The sensor should address the complete hardware architecture, including:**  
  
(a).Pressure sensing mechanism.  
  
(b).Mechanical transducer design.  
  
(c).Differential pressure measurement technique.  
  
(d).Low-noise analog front-end electronics.  
  
(e).Temperature compensation.  
  
(f).Long-period pressure equalization system.  
  
(g).Environmental enclosure.  
  
(h).Wind-noise reduction interface.  
  
(i).Calibration methodology.  
  
The design should aim to detect very small pressure variations while maintaining long-term stability, low drift, and high signal fidelity. The data acquisition (digitizer) and real time waveform display & analysis software available in open market to be included to demonstrate complete functional sensor system.  
  
• Expected Solution The prototype infrasound sensor should have high sensitivity, long-term stability and low-noise signal condition to measure infrasound signals accurately. Sensor should demonstrate:  
  
(a).Detection of low-frequency pressure signals.  
  
(b).Laboratory characterization of frequency response.  
  
(c).Noise floor measurements.  
  
(d).Sensitivity estimation.  
  
(e).Stability testing.  
  
The evaluation will be conducted based on the achievement of the following parameters Attach Table Here The digitizer and data acquisition software (available in open market) for real time waveform display & analysis will be arranged by candidates themselves to demonstrate the complete functional sensor system.

### Infrasound and Atmospheric Acoustics

1. **CTBTO Preparatory Commission.** "Infrasound Monitoring." Comprehensive Nuclear-Test-Ban Treaty Organization.
   - URL: https://www.ctbto.org/verification-regime/monitoring-technologies-how-they-work/infrasound-monitoring
   - *Overview of the IMS infrasound monitoring network and its purpose.*

2. **Campus, P., and Christie, D. R.** "Worldwide Observations of Infrasonic Waves." *Infrasound Monitoring for Atmospheric Studies*, Springer, 2010, pp. 185–234.
   - *Comprehensive review of global infrasound observations and sources.*

3. **Hedlin, M. A. H., Walker, K., Drob, D. P., and de Groot-Hedlin, C. D.** "Infrasound: Connecting the Solid Earth, Oceans, and Atmosphere." *Annual Review of Earth and Planetary Sciences*, Vol. 40, 2012, pp. 327–354.
   - DOI: 10.1146/annurev-earth-042711-105508
   - *Review of infrasound science spanning geophysics, oceanography, and atmospheric science.*

### Wind-Noise Reduction

4. **Walker, K. T., and Hedlin, M. A. H.** "A Review of Wind-Noise Reduction Methodologies." *Infrasound Monitoring for Atmospheric Studies*, Springer, 2010, pp. 141–182.
   - *Comprehensive review of spatial-filtering and other wind-noise reduction techniques.*

5. **Alcoverro, B., and Le Pichon, A.** "Design and Optimization of a Noise Reduction System for Infrasonic Measurements Using Elements with Low Acoustic Impedance." *Journal of the Acoustical Society of America*, Vol. 117, No. 4, 2005, pp. 1717–1727.
   - *Design principles for pipe-array spatial filters used at IMS stations.*

### Microbarometer Design

6. **Ponceau, D., and Bosca, L.** "Low-Noise Broadband Microbarometers." *Infrasound Monitoring for Atmospheric Studies*, Springer, 2010, pp. 119–140.
   - *Design and performance of research-grade microbarometers including the MB3.*

### Signal Processing

7. **Oppenheim, A. V., and Schafer, R. W.** *Discrete-Time Signal Processing*, 3rd Edition, Pearson, 2010.
   - *Standard textbook covering FFT, filtering, and digital signal processing fundamentals.*

8. **Cooley, J. W., and Tukey, J. W.** "An Algorithm for the Machine Calculation of Complex Fourier Series." *Mathematics of Computation*, Vol. 19, No. 90, 1965, pp. 297–301.
   - *The original FFT algorithm paper.*

### Anomaly Detection and Isolation Forest

9. **Liu, F. T., Ting, K. M., and Zhou, Z.-H.** "Isolation Forest." *Proceedings of the 2008 Eighth IEEE International Conference on Data Mining (ICDM)*, 2008, pp. 413–422.
   - DOI: 10.1109/ICDM.2008.17
   - *The foundational paper for the Isolation Forest algorithm.*

10. **Liu, F. T., Ting, K. M., and Zhou, Z.-H.** "Isolation-Based Anomaly Detection." *ACM Transactions on Knowledge Discovery from Data (TKDD)*, Vol. 6, No. 1, 2012, Article 3.
    - DOI: 10.1145/2133360.2133363
    - *Expanded journal version of the Isolation Forest algorithm.*

### Public Data Sources

11. **EarthScope Consortium (formerly IRIS).** "Data Services."
    - URL: https://ds.iris.edu/
    - *Access to seismic and infrasound waveform data from the USArray Transportable Array and other networks.*

12. **EarthScope.** "TA Infrasound Reference Event Database (TAIRED)."
    - URL: https://www.earthscope.org/
    - *Curated database of infrasound events detected by the Transportable Array.*

13. **Boise State University.** "Infrasound Data Repository."
    - URL: https://scholarworks.boisestate.edu/
    - *Public datasets related to infrasound research including volcanic and avalanche events.*

14. **KNMI (Royal Netherlands Meteorological Institute).** "KNMI Data Platform."
    - URL: https://dataplatform.knmi.nl/
    - *Seismic and infrasound station data for the Netherlands.*

### Reference Sensor: Seismo Wave MB3a Infrasound Sensor

The **Seismo Wave MB3a** is a professional infrasound sensor used as a reference for the design of our InfraSocket system. It is designed to detect very low-frequency atmospheric pressure variations, with a pressure-output bandwidth of **0.01–28 Hz**, covering the infrasound frequency range.

The MB3a uses an **aneroid capsule coupled with a magnet and coil transducer** to convert atmospheric pressure variations into an electrical signal. It provides a default pressure sensitivity of **20 mV/Pa** and has low instrumental self-noise, making it suitable for detecting small pressure fluctuations.

The sensor also includes **temperature and atmospheric-pressure measurements**, which can be useful for environmental monitoring and compensation. It operates from **12 V DC** and provides a differential analog output that can be connected to a suitable digitizer.

For the InfraSocket project, the MB3a is used as a **technical reference and benchmark**, particularly for its frequency range, sensitivity, noise performance, environmental sensing, and signal-output approach. The actual prototype will aim to achieve similar functional objectives using **lower-cost, commercially available components**.

URL : https://seismowave.com/wp-content/uploads/2019/07/datasheet_mb3a2017.V2.pdf

### Software Libraries

15. **Pedregosa, F., et al.** "Scikit-learn: Machine Learning in Python." *Journal of Machine Learning Research*, Vol. 12, 2011, pp. 2825–2830.
    - *The scikit-learn library, which includes the Isolation Forest implementation used in this project.*

16. **Harris, C. R., et al.** "Array programming with NumPy." *Nature*, Vol. 585, 2020, pp. 357–362.
    - DOI: 10.1038/s41586-020-2649-2
    - *NumPy, used for numerical computation and FFT.*

17. **Virtanen, P., et al.** "SciPy 1.0: Fundamental Algorithms for Scientific Computing in Python." *Nature Methods*, Vol. 17, 2020, pp. 261–272.
    - DOI: 10.1038/s41592-019-0686-2
    - *SciPy, used for signal processing (filtering, spectral analysis).*

### Standards and Organizations

18. **CTBTO Preparatory Commission.** Vienna, Austria.
    - URL: https://www.ctbto.org/
    - *International organization managing the CTBT verification regime.*

19. **FDSN (International Federation of Digital Seismograph Networks).**
    - URL: https://www.fdsn.org/
    - *Standards for seismological and infrasound data exchange.*

---

*See also: [Background](background.md) | [Technical Assumptions](technical-assumptions.md)*
