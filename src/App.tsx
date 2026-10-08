import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Layout from './components/Layout';
import Splash from './components/Splash';

import Page01OverviewEngineeringClaims from './pages/01-overview/engineering-claims';
import Page01OverviewGlossary from './pages/01-overview/glossary';
import Page01OverviewKeyFeatures from './pages/01-overview/key-features';
import Page01OverviewProblemStatement from './pages/01-overview/problem-statement';
import Page01OverviewProjectObjectives from './pages/01-overview/project-objectives';
import Page01OverviewProjectStatus from './pages/01-overview/project-status';
import Page01OverviewProposedSolution from './pages/01-overview/proposed-solution';
import Page01OverviewRealWorldUseCases from './pages/01-overview/real-world-use-cases';
import Page01OverviewScopeAndLimitations from './pages/01-overview/scope-and-limitations';
import Page02SystemArchitectureArchitecture from './pages/02-system-architecture/architecture';
import Page02SystemArchitectureComponentInteraction from './pages/02-system-architecture/component-interaction';
import Page02SystemArchitectureDataFlow from './pages/02-system-architecture/data-flow';
import Page02SystemArchitectureDeploymentArchitecture from './pages/02-system-architecture/deployment-architecture';
import Page02SystemArchitectureHardwareArchitecture from './pages/02-system-architecture/hardware-architecture';
import Page02SystemArchitectureSoftwareArchitecture from './pages/02-system-architecture/software-architecture';
import Page02SystemArchitectureSystemOverview from './pages/02-system-architecture/system-overview';
import Page02SystemArchitectureTimeSynchronization from './pages/02-system-architecture/time-synchronization';
import Page03HardwareAdcDigitization from './pages/03-hardware/adc-digitization';
import Page03HardwareAnalogFrontEnd from './pages/03-hardware/analog-front-end';
import Page03HardwareCalibration from './pages/03-hardware/calibration';
import Page03HardwareDiaphragmDesign from './pages/03-hardware/diaphragm-design';
import Page03HardwareDifferentialPressureSystem from './pages/03-hardware/differential-pressure-system';
import Page03HardwareEnvironmentalEnclosure from './pages/03-hardware/environmental-enclosure';
import Page03HardwareHardwareBom from './pages/03-hardware/hardware-bom';
import Page03HardwareHardwareOverview from './pages/03-hardware/hardware-overview';
import Page03HardwarePowerSystem from './pages/03-hardware/power-system';
import Page03HardwarePressureSensing from './pages/03-hardware/pressure-sensing';
import Page03HardwareReferenceChamber from './pages/03-hardware/reference-chamber';
import Page03HardwareTemperatureSensing from './pages/03-hardware/temperature-sensing';
import Page03HardwareWindNoiseReduction from './pages/03-hardware/wind-noise-reduction';
import Page04SignalProcessingFeatureExtraction from './pages/04-signal-processing/feature-extraction';
import Page04SignalProcessingFftAnalysis from './pages/04-signal-processing/fft-analysis';
import Page04SignalProcessingFiltering from './pages/04-signal-processing/filtering';
import Page04SignalProcessingFrequencyAnalysis from './pages/04-signal-processing/frequency-analysis';
import Page04SignalProcessingNoiseReduction from './pages/04-signal-processing/noise-reduction';
import Page04SignalProcessingSampling from './pages/04-signal-processing/sampling';
import Page04SignalProcessingSignalProcessingOverview from './pages/04-signal-processing/signal-processing-overview';
import Page04SignalProcessingSignalQualityChecks from './pages/04-signal-processing/signal-quality-checks';
import Page05AiMlAiOverview from './pages/05-ai-ml/ai-overview';
import Page05AiMlAnomalyDetection from './pages/05-ai-ml/anomaly-detection';
import Page05AiMlDataPreprocessing from './pages/05-ai-ml/data-preprocessing';
import Page05AiMlDatasetStrategy from './pages/05-ai-ml/dataset-strategy';
import Page05AiMlFalsePositiveHandling from './pages/05-ai-ml/false-positive-handling';
import Page05AiMlFeatureEngineering from './pages/05-ai-ml/feature-engineering';
import Page05AiMlFutureEventClassification from './pages/05-ai-ml/future-event-classification';
import Page05AiMlModelEvaluation from './pages/05-ai-ml/model-evaluation';
import Page05AiMlModelInference from './pages/05-ai-ml/model-inference';
import Page05AiMlModelSelection from './pages/05-ai-ml/model-selection';
import Page05AiMlModelTraining from './pages/05-ai-ml/model-training';
import Page05AiMlThresholdSelection from './pages/05-ai-ml/threshold-selection';
import Page06SoftwareAlertSystem from './pages/06-software/alert-system';
import Page06SoftwareApiDesign from './pages/06-software/api-design';
import Page06SoftwareBackend from './pages/06-software/backend';
import Page06SoftwareDashboard from './pages/06-software/dashboard';
import Page06SoftwareDataIngestion from './pages/06-software/data-ingestion';
import Page06SoftwareDatabase from './pages/06-software/database';
import Page06SoftwareRealtimeProcessing from './pages/06-software/realtime-processing';
import Page06SoftwareSoftwareOverview from './pages/06-software/software-overview';
import Page07DataAnomalyRecordFormat from './pages/07-data/anomaly-record-format';
import Page07DataDataModel from './pages/07-data/data-model';
import Page07DataDataRetention from './pages/07-data/data-retention';
import Page07DataFeatureDataFormat from './pages/07-data/feature-data-format';
import Page07DataProcessedDataFormat from './pages/07-data/processed-data-format';
import Page07DataRawDataFormat from './pages/07-data/raw-data-format';
import Page08TestingAcceptanceCriteria from './pages/08-testing/acceptance-criteria';
import Page08TestingAiTesting from './pages/08-testing/ai-testing';
import Page08TestingEnvironmentalTesting from './pages/08-testing/environmental-testing';
import Page08TestingHardwareTesting from './pages/08-testing/hardware-testing';
import Page08TestingIntegrationTesting from './pages/08-testing/integration-testing';
import Page08TestingPerformanceTesting from './pages/08-testing/performance-testing';
import Page08TestingSensorTesting from './pages/08-testing/sensor-testing';
import Page08TestingSignalTesting from './pages/08-testing/signal-testing';
import Page08TestingTestingStrategy from './pages/08-testing/testing-strategy';
import Page09CalibrationValidationCalibrationPlan from './pages/09-calibration-validation/calibration-plan';
import Page09CalibrationValidationEngineeringClaimsEvidence from './pages/09-calibration-validation/engineering-claims-evidence';
import Page09CalibrationValidationExperimentalResults from './pages/09-calibration-validation/experimental-results';
import Page09CalibrationValidationFrequencyResponseTest from './pages/09-calibration-validation/frequency-response-test';
import Page09CalibrationValidationNoiseFloorTest from './pages/09-calibration-validation/noise-floor-test';
import Page09CalibrationValidationPressureStepTest from './pages/09-calibration-validation/pressure-step-test';
import Page09CalibrationValidationSensitivityTest from './pages/09-calibration-validation/sensitivity-test';
import Page09CalibrationValidationValidationMethodology from './pages/09-calibration-validation/validation-methodology';
import Page10DeploymentDeploymentOverview from './pages/10-deployment/deployment-overview';
import Page10DeploymentFieldDeployment from './pages/10-deployment/field-deployment';
import Page10DeploymentHardwareDeployment from './pages/10-deployment/hardware-deployment';
import Page10DeploymentMaintenance from './pages/10-deployment/maintenance';
import Page10DeploymentMonitoring from './pages/10-deployment/monitoring';
import Page10DeploymentSoftwareDeployment from './pages/10-deployment/software-deployment';
import Page10DeploymentTimeSynchronization from './pages/10-deployment/time-synchronization';
import Page11SecurityReliabilityDataIntegrity from './pages/11-security-reliability/data-integrity';
import Page11SecurityReliabilityFaultHandling from './pages/11-security-reliability/fault-handling';
import Page11SecurityReliabilityRecovery from './pages/11-security-reliability/recovery';
import Page11SecurityReliabilityReliability from './pages/11-security-reliability/reliability';
import Page11SecurityReliabilitySecurity from './pages/11-security-reliability/security';
import Page12CostAndFeasibilityBillOfMaterials from './pages/12-cost-and-feasibility/bill-of-materials';
import Page12CostAndFeasibilityCostOptimization from './pages/12-cost-and-feasibility/cost-optimization';
import Page12CostAndFeasibilityOperationalCost from './pages/12-cost-and-feasibility/operational-cost';
import Page12CostAndFeasibilityPrototypeCost from './pages/12-cost-and-feasibility/prototype-cost';
import Page12CostAndFeasibilityScalability from './pages/12-cost-and-feasibility/scalability';
import Page13ResearchBackground from './pages/13-research/background';
import Page13ResearchExistingSolutions from './pages/13-research/existing-solutions';
import Page13ResearchGlossary from './pages/13-research/glossary';
import Page13ResearchProposedVsExisting from './pages/13-research/proposed-vs-existing';
import Page13ResearchReferences from './pages/13-research/references';
import Page13ResearchTechnicalAssumptions from './pages/13-research/technical-assumptions';
import Page14SensorConnectionSensorConnection from './pages/14-sensor_connection/sensor_connection';
import Page16RoadmapContributionGuide from './pages/16-roadmap/contribution-guide';
import Page16RoadmapFutureScope from './pages/16-roadmap/future-scope';
import Page16RoadmapPhasePlan from './pages/16-roadmap/phase-plan';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <Splash onComplete={() => setShowSplash(false)} />}
      <Router>
        <Routes>
        <Route path="/01-overview/engineering-claims" element={<Layout><Page01OverviewEngineeringClaims /></Layout>} />
        <Route path="/01-overview/glossary" element={<Layout><Page01OverviewGlossary /></Layout>} />
        <Route path="/01-overview/key-features" element={<Layout><Page01OverviewKeyFeatures /></Layout>} />
        <Route path="/01-overview/problem-statement" element={<Layout><Page01OverviewProblemStatement /></Layout>} />
        <Route path="/01-overview/project-objectives" element={<Layout><Page01OverviewProjectObjectives /></Layout>} />
        <Route path="/01-overview/project-status" element={<Layout><Page01OverviewProjectStatus /></Layout>} />
        <Route path="/01-overview/proposed-solution" element={<Layout><Page01OverviewProposedSolution /></Layout>} />
        <Route path="/01-overview/real-world-use-cases" element={<Layout><Page01OverviewRealWorldUseCases /></Layout>} />
        <Route path="/01-overview/scope-and-limitations" element={<Layout><Page01OverviewScopeAndLimitations /></Layout>} />
        <Route path="/02-system-architecture/architecture" element={<Layout><Page02SystemArchitectureArchitecture /></Layout>} />
        <Route path="/02-system-architecture/component-interaction" element={<Layout><Page02SystemArchitectureComponentInteraction /></Layout>} />
        <Route path="/02-system-architecture/data-flow" element={<Layout><Page02SystemArchitectureDataFlow /></Layout>} />
        <Route path="/02-system-architecture/deployment-architecture" element={<Layout><Page02SystemArchitectureDeploymentArchitecture /></Layout>} />
        <Route path="/02-system-architecture/hardware-architecture" element={<Layout><Page02SystemArchitectureHardwareArchitecture /></Layout>} />
        <Route path="/02-system-architecture/software-architecture" element={<Layout><Page02SystemArchitectureSoftwareArchitecture /></Layout>} />
        <Route path="/02-system-architecture/system-overview" element={<Layout><Page02SystemArchitectureSystemOverview /></Layout>} />
        <Route path="/02-system-architecture/time-synchronization" element={<Layout><Page02SystemArchitectureTimeSynchronization /></Layout>} />
        <Route path="/03-hardware/adc-digitization" element={<Layout><Page03HardwareAdcDigitization /></Layout>} />
        <Route path="/03-hardware/analog-front-end" element={<Layout><Page03HardwareAnalogFrontEnd /></Layout>} />
        <Route path="/03-hardware/calibration" element={<Layout><Page03HardwareCalibration /></Layout>} />
        <Route path="/03-hardware/diaphragm-design" element={<Layout><Page03HardwareDiaphragmDesign /></Layout>} />
        <Route path="/03-hardware/differential-pressure-system" element={<Layout><Page03HardwareDifferentialPressureSystem /></Layout>} />
        <Route path="/03-hardware/environmental-enclosure" element={<Layout><Page03HardwareEnvironmentalEnclosure /></Layout>} />
        <Route path="/03-hardware/hardware-bom" element={<Layout><Page03HardwareHardwareBom /></Layout>} />
        <Route path="/03-hardware/hardware-overview" element={<Layout><Page03HardwareHardwareOverview /></Layout>} />
        <Route path="/03-hardware/power-system" element={<Layout><Page03HardwarePowerSystem /></Layout>} />
        <Route path="/03-hardware/pressure-sensing" element={<Layout><Page03HardwarePressureSensing /></Layout>} />
        <Route path="/03-hardware/reference-chamber" element={<Layout><Page03HardwareReferenceChamber /></Layout>} />
        <Route path="/03-hardware/temperature-sensing" element={<Layout><Page03HardwareTemperatureSensing /></Layout>} />
        <Route path="/03-hardware/wind-noise-reduction" element={<Layout><Page03HardwareWindNoiseReduction /></Layout>} />
        <Route path="/04-signal-processing/feature-extraction" element={<Layout><Page04SignalProcessingFeatureExtraction /></Layout>} />
        <Route path="/04-signal-processing/fft-analysis" element={<Layout><Page04SignalProcessingFftAnalysis /></Layout>} />
        <Route path="/04-signal-processing/filtering" element={<Layout><Page04SignalProcessingFiltering /></Layout>} />
        <Route path="/04-signal-processing/frequency-analysis" element={<Layout><Page04SignalProcessingFrequencyAnalysis /></Layout>} />
        <Route path="/04-signal-processing/noise-reduction" element={<Layout><Page04SignalProcessingNoiseReduction /></Layout>} />
        <Route path="/04-signal-processing/sampling" element={<Layout><Page04SignalProcessingSampling /></Layout>} />
        <Route path="/04-signal-processing/signal-processing-overview" element={<Layout><Page04SignalProcessingSignalProcessingOverview /></Layout>} />
        <Route path="/04-signal-processing/signal-quality-checks" element={<Layout><Page04SignalProcessingSignalQualityChecks /></Layout>} />
        <Route path="/05-ai-ml/ai-overview" element={<Layout><Page05AiMlAiOverview /></Layout>} />
        <Route path="/05-ai-ml/anomaly-detection" element={<Layout><Page05AiMlAnomalyDetection /></Layout>} />
        <Route path="/05-ai-ml/data-preprocessing" element={<Layout><Page05AiMlDataPreprocessing /></Layout>} />
        <Route path="/05-ai-ml/dataset-strategy" element={<Layout><Page05AiMlDatasetStrategy /></Layout>} />
        <Route path="/05-ai-ml/false-positive-handling" element={<Layout><Page05AiMlFalsePositiveHandling /></Layout>} />
        <Route path="/05-ai-ml/feature-engineering" element={<Layout><Page05AiMlFeatureEngineering /></Layout>} />
        <Route path="/05-ai-ml/future-event-classification" element={<Layout><Page05AiMlFutureEventClassification /></Layout>} />
        <Route path="/05-ai-ml/model-evaluation" element={<Layout><Page05AiMlModelEvaluation /></Layout>} />
        <Route path="/05-ai-ml/model-inference" element={<Layout><Page05AiMlModelInference /></Layout>} />
        <Route path="/05-ai-ml/model-selection" element={<Layout><Page05AiMlModelSelection /></Layout>} />
        <Route path="/05-ai-ml/model-training" element={<Layout><Page05AiMlModelTraining /></Layout>} />
        <Route path="/05-ai-ml/threshold-selection" element={<Layout><Page05AiMlThresholdSelection /></Layout>} />
        <Route path="/06-software/alert-system" element={<Layout><Page06SoftwareAlertSystem /></Layout>} />
        <Route path="/06-software/api-design" element={<Layout><Page06SoftwareApiDesign /></Layout>} />
        <Route path="/06-software/backend" element={<Layout><Page06SoftwareBackend /></Layout>} />
        <Route path="/06-software/dashboard" element={<Layout><Page06SoftwareDashboard /></Layout>} />
        <Route path="/06-software/data-ingestion" element={<Layout><Page06SoftwareDataIngestion /></Layout>} />
        <Route path="/06-software/database" element={<Layout><Page06SoftwareDatabase /></Layout>} />
        <Route path="/06-software/realtime-processing" element={<Layout><Page06SoftwareRealtimeProcessing /></Layout>} />
        <Route path="/06-software/software-overview" element={<Layout><Page06SoftwareSoftwareOverview /></Layout>} />
        <Route path="/07-data/anomaly-record-format" element={<Layout><Page07DataAnomalyRecordFormat /></Layout>} />
        <Route path="/07-data/data-model" element={<Layout><Page07DataDataModel /></Layout>} />
        <Route path="/07-data/data-retention" element={<Layout><Page07DataDataRetention /></Layout>} />
        <Route path="/07-data/feature-data-format" element={<Layout><Page07DataFeatureDataFormat /></Layout>} />
        <Route path="/07-data/processed-data-format" element={<Layout><Page07DataProcessedDataFormat /></Layout>} />
        <Route path="/07-data/raw-data-format" element={<Layout><Page07DataRawDataFormat /></Layout>} />
        <Route path="/08-testing/acceptance-criteria" element={<Layout><Page08TestingAcceptanceCriteria /></Layout>} />
        <Route path="/08-testing/ai-testing" element={<Layout><Page08TestingAiTesting /></Layout>} />
        <Route path="/08-testing/environmental-testing" element={<Layout><Page08TestingEnvironmentalTesting /></Layout>} />
        <Route path="/08-testing/hardware-testing" element={<Layout><Page08TestingHardwareTesting /></Layout>} />
        <Route path="/08-testing/integration-testing" element={<Layout><Page08TestingIntegrationTesting /></Layout>} />
        <Route path="/08-testing/performance-testing" element={<Layout><Page08TestingPerformanceTesting /></Layout>} />
        <Route path="/08-testing/sensor-testing" element={<Layout><Page08TestingSensorTesting /></Layout>} />
        <Route path="/08-testing/signal-testing" element={<Layout><Page08TestingSignalTesting /></Layout>} />
        <Route path="/08-testing/testing-strategy" element={<Layout><Page08TestingTestingStrategy /></Layout>} />
        <Route path="/09-calibration-validation/calibration-plan" element={<Layout><Page09CalibrationValidationCalibrationPlan /></Layout>} />
        <Route path="/09-calibration-validation/engineering-claims-evidence" element={<Layout><Page09CalibrationValidationEngineeringClaimsEvidence /></Layout>} />
        <Route path="/09-calibration-validation/experimental-results" element={<Layout><Page09CalibrationValidationExperimentalResults /></Layout>} />
        <Route path="/09-calibration-validation/frequency-response-test" element={<Layout><Page09CalibrationValidationFrequencyResponseTest /></Layout>} />
        <Route path="/09-calibration-validation/noise-floor-test" element={<Layout><Page09CalibrationValidationNoiseFloorTest /></Layout>} />
        <Route path="/09-calibration-validation/pressure-step-test" element={<Layout><Page09CalibrationValidationPressureStepTest /></Layout>} />
        <Route path="/09-calibration-validation/sensitivity-test" element={<Layout><Page09CalibrationValidationSensitivityTest /></Layout>} />
        <Route path="/09-calibration-validation/validation-methodology" element={<Layout><Page09CalibrationValidationValidationMethodology /></Layout>} />
        <Route path="/10-deployment/deployment-overview" element={<Layout><Page10DeploymentDeploymentOverview /></Layout>} />
        <Route path="/10-deployment/field-deployment" element={<Layout><Page10DeploymentFieldDeployment /></Layout>} />
        <Route path="/10-deployment/hardware-deployment" element={<Layout><Page10DeploymentHardwareDeployment /></Layout>} />
        <Route path="/10-deployment/maintenance" element={<Layout><Page10DeploymentMaintenance /></Layout>} />
        <Route path="/10-deployment/monitoring" element={<Layout><Page10DeploymentMonitoring /></Layout>} />
        <Route path="/10-deployment/software-deployment" element={<Layout><Page10DeploymentSoftwareDeployment /></Layout>} />
        <Route path="/10-deployment/time-synchronization" element={<Layout><Page10DeploymentTimeSynchronization /></Layout>} />
        <Route path="/11-security-reliability/data-integrity" element={<Layout><Page11SecurityReliabilityDataIntegrity /></Layout>} />
        <Route path="/11-security-reliability/fault-handling" element={<Layout><Page11SecurityReliabilityFaultHandling /></Layout>} />
        <Route path="/11-security-reliability/recovery" element={<Layout><Page11SecurityReliabilityRecovery /></Layout>} />
        <Route path="/11-security-reliability/reliability" element={<Layout><Page11SecurityReliabilityReliability /></Layout>} />
        <Route path="/11-security-reliability/security" element={<Layout><Page11SecurityReliabilitySecurity /></Layout>} />
        <Route path="/12-cost-and-feasibility/bill-of-materials" element={<Layout><Page12CostAndFeasibilityBillOfMaterials /></Layout>} />
        <Route path="/12-cost-and-feasibility/cost-optimization" element={<Layout><Page12CostAndFeasibilityCostOptimization /></Layout>} />
        <Route path="/12-cost-and-feasibility/operational-cost" element={<Layout><Page12CostAndFeasibilityOperationalCost /></Layout>} />
        <Route path="/12-cost-and-feasibility/prototype-cost" element={<Layout><Page12CostAndFeasibilityPrototypeCost /></Layout>} />
        <Route path="/12-cost-and-feasibility/scalability" element={<Layout><Page12CostAndFeasibilityScalability /></Layout>} />
        <Route path="/13-research/background" element={<Layout><Page13ResearchBackground /></Layout>} />
        <Route path="/13-research/existing-solutions" element={<Layout><Page13ResearchExistingSolutions /></Layout>} />
        <Route path="/13-research/glossary" element={<Layout><Page13ResearchGlossary /></Layout>} />
        <Route path="/13-research/proposed-vs-existing" element={<Layout><Page13ResearchProposedVsExisting /></Layout>} />
        <Route path="/13-research/references" element={<Layout><Page13ResearchReferences /></Layout>} />
        <Route path="/13-research/technical-assumptions" element={<Layout><Page13ResearchTechnicalAssumptions /></Layout>} />
        <Route path="/14-sensor_connection/sensor_connection" element={<Layout><Page14SensorConnectionSensorConnection /></Layout>} />
        <Route path="/16-roadmap/contribution-guide" element={<Layout><Page16RoadmapContributionGuide /></Layout>} />
        <Route path="/16-roadmap/future-scope" element={<Layout><Page16RoadmapFutureScope /></Layout>} />
        <Route path="/16-roadmap/phase-plan" element={<Layout><Page16RoadmapPhasePlan /></Layout>} />
        <Route path="/" element={<Navigate to="/01-overview/key-features" replace />} />
      </Routes>
    </Router>
    </>
  );
}
