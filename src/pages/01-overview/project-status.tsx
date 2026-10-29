import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  Clock,
  Activity,
  Layers,
  ArrowRight,
  TrendingUp,
  SlidersHorizontal
} from 'lucide-react';

export default function Page01OverviewProjectStatus() {
  const subsystems = [
    { module: 'System Architecture & Requirements', status: 'Completed', type: 'complete', desc: 'Hardware zoning, mechanical pneumatic inset, and sub-audible 0.01–20 Hz signal path specifications.' },
    { module: 'Sensor & Mechanical Reference Design', status: 'Implemented', type: 'implemented', desc: 'Amphenol DLVR differential MEMS sensor, capillary equalization leak, and airtight volume specification.' },
    { module: 'Digitization & Data Acquisition (DAQ)', status: 'Implemented', type: 'implemented', desc: '16-bit+ ΔΣ conversion stage, SPI/I²C digital bus interface, and 100 Hz continuous acquisition loop.' },
    { module: 'Wind-Noise Reduction Manifold (WNRS)', status: 'Prototype Fabricated', type: 'prototype', desc: '4-port spatial averaging manifold prototype with porous foam damping ports.' },
    { module: 'Digital Signal Processing (DSP) Pipeline', status: 'Implemented', type: 'implemented', desc: '4th-order Butterworth bandpass filter (0.01–20 Hz), Welch PSD, and real-time STFT spectrogram.' },
    { module: 'Real-Time Desktop Dashboard Console', status: 'Implemented', type: 'implemented', desc: 'PyQtGraph desktop application with 60 FPS live waveform rendering, power spectrum, and alert panels.' },
    { module: 'Hardware Calibration & Validation', status: 'Active Testing', type: 'testing', desc: 'Laboratory acoustic chamber frequency response, electrical noise floor, and sensitivity characterization.' },
    { module: 'Thermal Drift Characterization', status: 'Active Testing', type: 'testing', desc: 'MCP9808 temperature logging and differential baseline drift compensation over 24-hour cycles.' },
    { module: 'Unsupervised Anomaly Detection (AI)', status: 'Experimental', type: 'future', desc: 'Isolation Forest feature extraction model for identifying anomalous microbarometric transients.' },
    { module: 'Multi-Sensor Array & Direction Finding', status: 'Roadmap', type: 'future', desc: 'Multi-station PMCC cross-correlation for acoustic wavefront bearing and velocity estimation.' }
  ];

  const getStatusBadge = (type: string, status: string) => {
    switch (type) {
      case 'complete':
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
      case 'prototype':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
            <Layers className="w-3.5 h-3.5" />
            {status}
          </span>
        );
      case 'testing':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
            <Clock className="w-3.5 h-3.5" />
            {status}
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            {status}
          </span>
        );
    }
  };

  return (
    <main className="flex-1 min-w-0 overflow-y-auto p-4 sm:p-6 md:p-10 relative">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/01-overview/key-features" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Overview</Link>
          <span>/</span>
          <span className="font-semibold text-gray-900 dark:text-gray-200">Project Status</span>
        </nav>

        {/* Hero Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
            <TrendingUp className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            Engineering Lifecycle &amp; Readiness
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            InfraSocket Project Status
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
            Current implementation state and validation readiness across all hardware, signal processing, software, and testing modules of the atmospheric infrasound prototype.
          </p>
        </div>

        {/* Status Table Card */}
        <div className="bg-white dark:bg-gray-800/80 rounded-2xl border border-gray-200 dark:border-gray-700/80 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
              Subsystem Readiness Ledger
            </h2>
            <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">10 Modules Tracked</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-900/60 border-b border-gray-200 dark:border-gray-700 text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  <th className="py-3.5 px-6">Subsystem Module</th>
                  <th className="py-3.5 px-6">Current Status</th>
                  <th className="py-3.5 px-6">Technical Scope / Milestone Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700/60">
                {subsystems.map((sub, i) => (
                  <tr key={i} className="hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                      {sub.module}
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      {getStatusBadge(sub.type, sub.status)}
                    </td>
                    <td className="py-4 px-6 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {sub.desc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Phase Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800/80 rounded-2xl p-6 border border-gray-200 dark:border-gray-700/80 shadow-sm space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
              Phase 01: Core MVP
            </div>
            <div className="text-2xl font-extrabold text-gray-900 dark:text-white">100% Designed</div>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Complete sensor schematics, digital bus connection, real-time Python DSP filters, and desktop telemetry app built and ready for test harness.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800/80 rounded-2xl p-6 border border-gray-200 dark:border-gray-700/80 shadow-sm space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Phase 02: Characterization
            </div>
            <div className="text-2xl font-extrabold text-gray-900 dark:text-white">In Progress</div>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Active laboratory execution of 4 characterization domains: frequency response, noise floor, pressure step response, and thermal baseline drift.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800/80 rounded-2xl p-6 border border-gray-200 dark:border-gray-700/80 shadow-sm space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Phase 03: Distributed Array
            </div>
            <div className="text-2xl font-extrabold text-gray-900 dark:text-white">Roadmap</div>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Tripartite sensor array field trial, GPS NTP time synchronization, and cross-correlation azimuth localization.
            </p>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-200 dark:border-gray-800">
          <Link
            to="/01-overview/engineering-claims"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm shadow-sm transition-colors"
          >
            Next: Engineering Claims &amp; Evidence
            <ArrowRight className="w-4 h-4" />
          </Link>
          <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
            <span>InfraSocket Documentation</span>
            <span>•</span>
            <Link to="/16-roadmap/phase-plan" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
              Phase Plan
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}