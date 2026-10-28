# InfraSocket Raw Infrasound Dataset

This dataset archive contains high-resolution raw sensor samples collected at 50 Hz from InfraSocket Node 01.

## Contents:
- **raw_samples_50hz.json**: Full JSON formatted array with timestamps, ADC raw counts, calibrated pressure in Pa, and temperature.
- **raw_samples_50hz.csv**: CSV format ready for NumPy, Pandas, Scipy, or MATLAB analysis.
- **metadata.json**: Acquisition parameters, sampling rate, and hardware specs.

## Schema:
- timestamp: ISO 8601 acquisition time (20ms interval = 50 Hz)
- sensor_id: Hardware identifier
- adc_value: Raw 16-bit ADC reading
- pressure_pa: Pressure variation in Pascals
- temperature_raw: Raw temperature reading
- temperature_c: Calibrated temperature in Celsius
- quality_status: Signal validity flag (OK)
