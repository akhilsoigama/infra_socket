
export default function Page01OverviewGlossary() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Overview</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Key Features</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Glossary</h1>
    <p>Technical definitions for InfraSocket.</p>
    <ul>
      <li><strong>Infrasound:</strong> Low-frequency sound below human hearing (typically &lt; 20 Hz).</li>
      <li><strong>Microbarometer:</strong> High-resolution atmospheric pressure sensor.</li>
      <li><strong>Differential pressure:</strong> Measurement of pressure difference, often relative to a reference chamber.</li>
      <li><strong>Wind noise:</strong> Undesirable pressure fluctuations caused by local wind turbulence.</li>
      <li><strong>WNRS (Wind Noise Reduction System):</strong> Spatial averaging arrays to attenuate uncorrelated wind noise.</li>
      <li><strong>AFE (Analog Front-End):</strong> Circuitry to condition the analog signal before digitization.</li>
      <li><strong>Nyquist frequency:</strong> Theoretical maximum frequency that can be represented (fs/2).</li>
      <li><strong>Isolation Forest:</strong> Unsupervised machine learning algorithm used to flag statistical anomalies.</li>
    </ul>
  </article>
</div>

    </main>
  );
}