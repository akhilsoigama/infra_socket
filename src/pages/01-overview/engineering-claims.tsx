import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  CheckCircle2,
  Clock,
  Activity,
  ArrowRight,
  FileCheck,
  AlertCircle
} from 'lucide-react';

export default function Page01OverviewEngineeringClaims() {
  const claims = [
    {
      claim: '0.01 – 20 Hz Sub-Audible Bandwidth',
      metric: 'Flat amplitude response (±3 dB) across 0.01 to 20.0 Hz',
      evidenceReq: 'Low-frequency acoustic pressure sweep inside sealed test chamber',
      evidenceCurr: 'Analytical pneumatic capillary transfer function modeled; acoustic speaker test rig in progress',
      status: 'Validation In Progress',
      statusType: 'progress'
    },
    {
      claim: 'Sub-Pascal Sensitivity & Resolution',
      metric: 'Differential pressure resolution ≤ 0.1 Pa at 100 Hz sampling',
      evidenceReq: 'Precision micro-manometer comparison with calibrated syringe pressure step input',
      evidenceCurr: 'Amphenol DLVR-F50D digital MEMS resolution validated against manufacturer transfer function',
      status: 'Implemented / Bench Tested',
      statusType: 'implemented'
    },
    {
      claim: 'Acoustic Wind-Noise Suppression',
      metric: '≥ 10 dB attenuation of incoherent turbulence across 0.1 – 5 Hz',
      evidenceReq: 'Dual-sensor comparative trial (open port vs 4-inlet manifold) under continuous wind fan',
      evidenceCurr: '4-port prototype manifold fabricated; comparative differential wind trial scheduled',
      status: 'Validation In Progress',
      statusType: 'progress'
    },
    {
      claim: 'System Electrical Noise Floor',
      metric: 'RMS noise floor ≤ 0.05 Pa in an acoustically and pneumatically sealed chamber',
      evidenceReq: 'Continuous 1-hour quiet chamber PSD calculation in isolated thermal environment',
      evidenceCurr: 'Baseline ADC quantization noise analyzed; acoustic chamber baseline recording underway',
      status: 'Validation In Progress',
      statusType: 'progress'
    },
    {
      claim: 'Diurnal Thermal Drift Mitigation',
      metric: 'Thermal drift rate characterized and mitigated across 15°C to 45°C ambient range',
      evidenceReq: 'Chamber soak with MCP9808 temperature logging and differential baseline drift compensation',
      evidenceCurr: 'Thermal log integrated over 24-hr room ambient cycle; thermal polynomial correction active',
      status: 'Implemented / Bench Tested',
      statusType: 'implemented'
    },
    {
      claim: 'Real-Time Edge Telemetry & DSP',
      metric: 'Continuous 100 Hz acquisition, 4th-order IIR filtering, and 60 FPS PyQtGraph dashboard',
      evidenceReq: 'System latency and dropped-sample profiling under continuous 48-hour endurance test',
      evidenceCurr: 'Zero packet loss recorded across 24-hour continuous bench telemetry streaming',
      status: 'Verified',
      statusType: 'verified'
    },
    {
      claim: 'Unsupervised Anomaly Flagging',
      metric: 'Identification of acoustic transients exceeding 3-sigma background noise variance',
      evidenceReq: 'Bench testing with simulated microbarom pulses and door/window impulse events',
      evidenceCurr: 'Isolation Forest feature extraction model demonstrated on recorded pressure step benchmarks',
      status: 'Experimental Prototype',
      statusType: 'experimental'
    }
  ];

  const getStatusBadge = (type: string, status: string) => {
    switch (type) {
      case 'verified':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
            <CheckCircle2 className="w-3.5 h-3.5" />
            {status}
          </span>
        );
      case 'implemented':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-50 text-sky-700 dark:bg-sky-950/60 dark:text-sky-400 border border-sky-200 dark:border-sky-800">
            <Activity className="w-3.5 h-3.5" />
            {status}
          </span>
        );
      case 'progress':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
            <Clock className="w-3.5 h-3.5" />
            {status}
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 dark:bg-purple-950/60 dark:text-purple-400 border border-purple-200 dark:border-purple-800">
            <AlertCircle className="w-3.5 h-3.5" />
            {status}
          </span>
        );
    }
  };

  return (
    <main className="flex-1 min-w-0 overflow-y-auto p-4 sm:p-6 md:p-10 relative">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/01-overview/key-features" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Overview</Link>
          <span>/</span>
          <span className="font-semibold text-gray-900 dark:text-gray-200">Engineering Claims &amp; Evidence</span>
        </nav>

        {/* Hero Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            Scientific Rigor &amp; Verification Protocol
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Engineering Claims &amp; Evidence Matrix
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
            Infrasound instrument design requires disciplined separation between theoretical specifications and experimentally measured performance. This ledger tracks each engineering claim, testing protocol, and empirical evidence status.
          </p>
        </div>

        {/* Claims Table Card */}
        <div className="bg-white dark:bg-gray-800/80 rounded-2xl border border-gray-200 dark:border-gray-700/80 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-sky-600 dark:text-sky-400" />
              Verified Performance Ledger
            </h2>
            <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">7 Key Claims</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-900/60 border-b border-gray-200 dark:border-gray-700 text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  <th className="py-3.5 px-6">Specification Claim</th>
                  <th className="py-3.5 px-6">Quantitative Target</th>
                  <th className="py-3.5 px-6">Empirical Evidence Status</th>
                  <th className="py-3.5 px-6">Verification State</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700/60">
                {claims.map((c, i) => (
                  <tr key={i} className="hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                      {c.claim}
                    </td>
                    <td className="py-4 px-6 text-xs sm:text-sm font-mono text-sky-700 dark:text-sky-300">
                      {c.metric}
                    </td>
                    <td className="py-4 px-6 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed max-w-xs">
                      {c.evidenceCurr}
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      {getStatusBadge(c.statusType, c.status)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Verification Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800/80 rounded-2xl p-6 border border-gray-200 dark:border-gray-700/80 shadow-sm space-y-3">
            <h3 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Empirical Repeatability
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Every sensor transfer function and attenuation ratio is validated against secondary reference instruments under controlled chamber conditions prior to field qualification.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800/80 rounded-2xl p-6 border border-gray-200 dark:border-gray-700/80 shadow-sm space-y-3">
            <h3 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-sky-500" />
              Transparent Disclaimers
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Target specifications are explicitly noted as such until full experimental calibration scripts and dataset artifacts are verified and archived.
            </p>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-200 dark:border-gray-800">
          <Link
            to="/01-overview/glossary"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm shadow-sm transition-colors"
          >
            Next: Infrasound Glossary
            <ArrowRight className="w-4 h-4" />
          </Link>
          <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
            <span>InfraSocket Documentation</span>
            <span>•</span>
            <Link to="/09-calibration-validation/validation-methodology" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
              Validation Methodology
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}