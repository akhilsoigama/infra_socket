
export default function Page02SystemArchitectureTimeSynchronization() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Overview</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Key Features</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Time Synchronization</h1>
    <p>Accurate timestamping is crucial for signal analysis, especially for future multi-node deployment.</p>
    <h3>Architecture</h3>
    <pre><code>Sensor → ADC → Acquisition timestamp → ESP32 / Node → Local storage + Wi-Fi → Server</code></pre>
    <p>Timestamping occurs as close to data acquisition as practical. Server packet-arrival time is not used as the primary measurement timestamp.</p>
    <h3>Approaches</h3>
    <ul>
      <li><strong>Prototype:</strong> NTP / SNTP + RTC</li>
      <li><strong>Advanced:</strong> GNSS + PPS</li>
      <li><strong>Future Multi-Station:</strong> GNSS/PPS synchronized sensor nodes</li>
    </ul>
  </article>
</div>

    </main>
  );
}