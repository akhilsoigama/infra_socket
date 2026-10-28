
export default function Page01OverviewProjectStatus() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Overview</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Key Features</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Project Status</h1>
    <p>Current development state of the InfraSocket project.</p>
    <table>
      <thead>
        <tr><th>Module</th><th>Status</th></tr>
      </thead>
      <tbody>
        <tr><td>Documentation</td><td><span className="text-green-600 font-bold">✓ Complete</span></td></tr>
        <tr><td>System Architecture</td><td><span className="text-green-600 font-bold">✓ Defined</span></td></tr>
        <tr><td>Hardware Design</td><td><span className="text-blue-600 font-bold">● Implemented</span></td></tr>
        <tr><td>Sensor Integration</td><td><span className="text-blue-600 font-bold">● Implemented</span></td></tr>
        <tr><td>AFE</td><td><span className="text-blue-600 font-bold">● Implemented</span></td></tr>
        <tr><td>ADC</td><td><span className="text-blue-600 font-bold">● Implemented</span></td></tr>
        <tr><td>Wind Noise Reduction</td><td><span className="text-blue-600 font-bold">● Prototype</span></td></tr>
        <tr><td>Calibration</td><td><span className="text-yellow-600 font-bold">! Pending</span></td></tr>
        <tr><td>Noise Floor</td><td><span className="text-yellow-600 font-bold">! Pending</span></td></tr>
        <tr><td>Frequency Response</td><td><span className="text-yellow-600 font-bold">! Pending</span></td></tr>
        <tr><td>DSP</td><td><span className="text-blue-600 font-bold">● Implemented</span></td></tr>
        <tr><td>Dashboard</td><td><span className="text-blue-600 font-bold">● Implemented</span></td></tr>
        <tr><td>AI/ML</td><td><span className="text-purple-600 font-bold">→ Future/Experimental</span></td></tr>
        <tr><td>Multi-node</td><td><span className="text-purple-600 font-bold">→ Future</span></td></tr>
      </tbody>
    </table>
  </article>
</div>

    </main>
  );
}