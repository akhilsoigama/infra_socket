
export default function Page01OverviewEngineeringClaims() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Overview</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Key Features</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Engineering Claims &amp; Evidence</h1>
    <p>This table tracks technical claims and their corresponding experimental evidence.</p>
    <table>
      <thead>
        <tr><th>Claim</th><th>Evidence Required</th><th>Current Evidence</th><th>Status</th></tr>
      </thead>
      <tbody>
        <tr><td>0.01–20 Hz response</td><td>Frequency sweep</td><td>TBD</td><td><span className="text-yellow-600 font-bold">Pending</span></td></tr>
        <tr><td>Sensor sensitivity</td><td>Pressure calibration</td><td>TBD</td><td><span className="text-yellow-600 font-bold">Pending</span></td></tr>
        <tr><td>Wind-noise reduction</td><td>Controlled comparison</td><td>TBD</td><td><span className="text-yellow-600 font-bold">Pending</span></td></tr>
        <tr><td>Noise floor</td><td>Quiet-environment test</td><td>TBD</td><td><span className="text-yellow-600 font-bold">Pending</span></td></tr>
        <tr><td>Temperature stability</td><td>Temperature test</td><td>TBD</td><td><span className="text-yellow-600 font-bold">Pending</span></td></tr>
        <tr><td>Real-time processing</td><td>Live test</td><td>Dashboard functional</td><td><span className="text-blue-600 font-bold">Implemented</span></td></tr>
        <tr><td>AI anomaly detection</td><td>Dataset/test</td><td>TBD</td><td><span className="text-purple-600 font-bold">Future</span></td></tr>
      </tbody>
    </table>
  </article>
</div>

    </main>
  );
}