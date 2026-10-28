import { Link } from 'react-router-dom';

export default function Page06SoftwareDashboard() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Software</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Dashboard</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Dashboard</h1>
    <h3>Sensor Health Status</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="text-xs text-gray-500">Sensor Status</div>
        <div className="font-bold text-green-600">● Online</div>
      </div>
      <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="text-xs text-gray-500">Sampling Rate</div>
        <div className="font-bold">100 Hz (Target)</div>
      </div>
      <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="text-xs text-gray-500">Temperature</div>
        <div className="font-bold">24.5 °C</div>
      </div>
      <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="text-xs text-gray-500">Atmospheric Pressure</div>
        <div className="font-bold">1013.2 hPa</div>
      </div>
      <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="text-xs text-gray-500">Signal RMS</div>
        <div className="font-bold">TBD</div>
      </div>
      <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="text-xs text-gray-500">Noise Floor</div>
        <div className="font-bold text-yellow-600">Pending</div>
      </div>
      <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="text-xs text-gray-500">Clock Status</div>
        <div className="font-bold text-blue-600">Synchronized</div>
      </div>
      <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="text-xs text-gray-500">Wi-Fi Connected</div>
        <div className="font-bold text-green-600">Yes</div>
      </div>
    </div><h2 id="purpose">Purpose</h2>
    <p>The real-time web dashboard provides visual feedback on system status, sensor data, signal
      analysis, and anomaly detection results.</p>
    <h2 id="dashboard-layout">Dashboard Layout</h2>
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 shadow-sm p-6 my-8 font-sans max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-gray-700">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-satellite-dish text-sky-500 text-xl" />
          <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100 m-0 !border-none !pb-0" style={{margin: 0}}>InfraSocket DASHBOARD</h2>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-xs font-medium text-gray-600 dark:text-gray-400">
            <span className="w-2 h-2 rounded-full bg-amber-500" /> DEMO ONLY — NOT CONNECTED
          </span>
          <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs px-2 py-1 rounded font-medium border border-gray-200 dark:border-gray-600">DEMO NODE</span>
        </div>
      </div>
      {/* Status Bar */}
      <p className="py-3 text-xs text-amber-700 dark:text-amber-300">Conceptual dashboard mock-up. No live instrument is connected; charts, statuses, and values below are not measurements.</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-b border-gray-100 dark:border-gray-700">
        <div>
          <div className="text-[10px] uppercase text-gray-500 dark:text-gray-400 font-semibold mb-1 tracking-wider">AI STATUS — MOCK-UP</div>
          <div className="text-amber-600 dark:text-amber-300 text-sm font-bold flex items-center gap-1.5">
            <i className="fa-solid fa-circle-minus" /> NOT CONNECTED
          </div>
        </div>
        <div>
          <div className="text-[10px] uppercase text-gray-500 dark:text-gray-400 font-semibold mb-1 tracking-wider">TEMPERATURE</div>
          <div className="text-sm font-medium text-gray-800 dark:text-gray-200">TBD / DEMO</div>
        </div>
        <div>
          <div className="text-[10px] uppercase text-gray-500 dark:text-gray-400 font-semibold mb-1 tracking-wider">UPTIME</div>
          <div className="text-sm font-medium text-gray-800 dark:text-gray-200">TBD / DEMO</div>
        </div>
        <div>
          <div className="text-[10px] uppercase text-gray-500 dark:text-gray-400 font-semibold mb-1 tracking-wider">LAST SYNC</div>
          <div className="text-sm font-medium text-gray-800 dark:text-gray-200">TBD / DEMO</div>
        </div>
        <div><div className="text-[10px] uppercase text-gray-500 dark:text-gray-400 font-semibold mb-1 tracking-wider">SAMPLING RATE</div><div className="text-sm font-medium text-gray-800 dark:text-gray-200">~100 Hz (TARGET - Pending validation) TARGET</div></div>
        <div><div className="text-[10px] uppercase text-gray-500 dark:text-gray-400 font-semibold mb-1 tracking-wider">ATMOSPHERIC PRESSURE</div><div className="text-sm font-medium text-gray-800 dark:text-gray-200">TBD / DEMO</div></div>
        <div><div className="text-[10px] uppercase text-gray-500 dark:text-gray-400 font-semibold mb-1 tracking-wider">SIGNAL RMS</div><div className="text-sm font-medium text-gray-800 dark:text-gray-200">TBD / DEMO</div></div>
        <div><div className="text-[10px] uppercase text-gray-500 dark:text-gray-400 font-semibold mb-1 tracking-wider">NOISE FLOOR</div><div className="text-sm font-medium text-gray-800 dark:text-gray-200">TBD / DEMO</div></div>
        <div><div className="text-[10px] uppercase text-gray-500 dark:text-gray-400 font-semibold mb-1 tracking-wider">DATA QUALITY</div><div className="text-sm font-medium text-gray-800 dark:text-gray-200">TBD / DEMO</div></div>
        <div><div className="text-[10px] uppercase text-gray-500 dark:text-gray-400 font-semibold mb-1 tracking-wider">CLOCK STATUS</div><div className="text-sm font-medium text-gray-800 dark:text-gray-200">TBD / DEMO</div></div>
        <div><div className="text-[10px] uppercase text-gray-500 dark:text-gray-400 font-semibold mb-1 tracking-wider">STORAGE</div><div className="text-sm font-medium text-gray-800 dark:text-gray-200">TBD / DEMO</div></div>
        <div><div className="text-[10px] uppercase text-gray-500 dark:text-gray-400 font-semibold mb-1 tracking-wider">WI-FI</div><div className="text-sm font-medium text-gray-800 dark:text-gray-200">TBD / DEMO</div></div>
        <div><div className="text-[10px] uppercase text-gray-500 dark:text-gray-400 font-semibold mb-1 tracking-wider">LAST CALIBRATION</div><div className="text-sm font-medium text-gray-800 dark:text-gray-200">TBD / DEMO</div></div>
      </div>
      {/* Live Waveform */}
      <div className="mt-4 p-4 border border-gray-100 dark:border-gray-700 rounded-lg bg-gray-50/50 dark:bg-gray-800/50">
        <div className="text-[10px] uppercase text-gray-500 dark:text-gray-400 font-bold mb-4 tracking-wider">ILLUSTRATIVE PRESSURE WAVEFORM — NOT LIVE DATA</div>
        <div className="h-20 w-full overflow-hidden bg-white dark:bg-gray-900 rounded border border-gray-100 dark:border-gray-700">
          <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-full stroke-sky-500 fill-transparent" strokeWidth={2}>
            <path d="M0,50 Q25,30 50,50 T100,50 T150,50 T200,50 Q225,20 250,50 T300,50 Q315,10 330,50 T360,50 Q380,-20 400,50 T440,50 Q450,-50 460,50 T480,50 Q490,-80 500,50 T520,50 Q530,-90 540,50 T560,50 Q570,-90 580,50 T600,50 Q610,-90 620,50 T640,50 Q650,-90 660,50 T680,50 Q690,-90 700,50 T720,50 Q730,-90 740,50 T760,50 Q770,-90 780,50 T800,50 Q810,-90 820,50 T840,50 Q850,-90 860,50 T880,50 Q890,-90 900,50 T920,50 Q930,-90 940,50 T960,50 Q970,-90 980,50 T1000,50" />
          </svg>
        </div>
      </div>
      {/* Middle Section: Frequency & Spectrogram */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        {/* Frequency Spectrum */}
        <div className="p-4 border border-gray-100 dark:border-gray-700 rounded-lg bg-gray-50/50 dark:bg-gray-800/50 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <div className="text-[10px] uppercase text-gray-500 dark:text-gray-400 font-bold tracking-wider">ILLUSTRATIVE SPECTRUM — NO MEASUREMENTS</div>
            <div className="text-[9px] text-gray-400 uppercase">TARGET BAND: ~0.01–20 Hz (TARGET - Pending experimental validation)</div>
          </div>
          <div className="flex-1 w-full bg-white dark:bg-gray-900 rounded border border-gray-100 dark:border-gray-700 p-2 flex items-end justify-between gap-[2px]">
            <div className="w-full bg-blue-500 hover:bg-blue-400 transition-colors rounded-t-sm" style={{height: '10%'}} />
            <div className="w-full bg-blue-500 hover:bg-blue-400 transition-colors rounded-t-sm" style={{height: '30%'}} />
            <div className="w-full bg-blue-500 hover:bg-blue-400 transition-colors rounded-t-sm" style={{height: '60%'}} />
            <div className="w-full bg-blue-500 hover:bg-blue-400 transition-colors rounded-t-sm" style={{height: '80%'}} />
            <div className="w-full bg-blue-500 hover:bg-blue-400 transition-colors rounded-t-sm" style={{height: '40%'}} />
            <div className="w-full bg-blue-500 hover:bg-blue-400 transition-colors rounded-t-sm" style={{height: '20%'}} />
            <div className="w-full bg-blue-500 hover:bg-blue-400 transition-colors rounded-t-sm" style={{height: '10%'}} />
            <div className="w-full bg-blue-500 hover:bg-blue-400 transition-colors rounded-t-sm" style={{height: '5%'}} />
            <div className="w-full bg-blue-500 hover:bg-blue-400 transition-colors rounded-t-sm" style={{height: '15%'}} />
            <div className="w-full bg-blue-500 hover:bg-blue-400 transition-colors rounded-t-sm" style={{height: '12%'}} />
            <div className="w-full bg-blue-500 hover:bg-blue-400 transition-colors rounded-t-sm" style={{height: '8%'}} />
            <div className="w-full bg-blue-500 hover:bg-blue-400 transition-colors rounded-t-sm" style={{height: '5%'}} />
            <div className="w-full bg-blue-500 hover:bg-blue-400 transition-colors rounded-t-sm" style={{height: '4%'}} />
            <div className="w-full bg-blue-500 hover:bg-blue-400 transition-colors rounded-t-sm" style={{height: '3%'}} />
            <div className="w-full bg-blue-500 hover:bg-blue-400 transition-colors rounded-t-sm" style={{height: '2%'}} />
          </div>
        </div>
        {/* Spectrogram */}
        <div className="p-4 border border-gray-100 dark:border-gray-700 rounded-lg bg-gray-50/50 dark:bg-gray-800/50 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <div className="text-[10px] uppercase text-gray-500 dark:text-gray-400 font-bold tracking-wider">ILLUSTRATIVE SPECTROGRAM — NO MEASUREMENTS</div>
            <div className="text-[9px] text-gray-400 uppercase">TIME →</div>
          </div>
          <div className="flex-1 w-full bg-gray-50 dark:bg-gray-900 rounded border border-gray-100 dark:border-gray-700 relative overflow-hidden">
            <div className="absolute bottom-2 left-0 w-full h-4 bg-sky-400/80" />
            <div className="absolute bottom-0 left-12 w-8 h-20 bg-rose-600/90 mix-blend-multiply dark:mix-blend-screen" />
            <div className="absolute bottom-2 left-32 w-10 h-16 bg-amber-600/90 mix-blend-multiply dark:mix-blend-screen" />
          </div>
        </div>
      </div>
      {/* AI Anomaly Detection */}
      <div className="mt-4 p-4 border border-gray-100 dark:border-gray-700 rounded-lg bg-gray-50/50 dark:bg-gray-800/50">
        <div className="text-[10px] uppercase text-gray-500 dark:text-gray-400 font-bold mb-4 tracking-wider">AI ANOMALY PANEL — MOCK-UP, NO MODEL RUN</div>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-20 text-xs font-medium text-gray-600 dark:text-gray-400">Score</div>
          <div className="flex-1 h-2.5 bg-white dark:bg-gray-700 rounded-full relative border border-gray-200 dark:border-gray-600">
          </div>
          <div className="w-8 text-xs font-bold text-gray-800 dark:text-gray-200 text-right">TBD</div>
        </div>
        <div className="flex items-center gap-4 mb-5">
          <div className="w-20 text-xs font-medium text-gray-600 dark:text-gray-400">Threshold</div>
          <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700 relative">
          </div>
          <div className="w-8 text-xs text-gray-500 text-right">TBD</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-20 text-xs font-medium text-gray-600 dark:text-gray-400">Status</div>
          <div className="flex-1">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-100/80 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 text-[10px] font-bold border border-amber-200 dark:border-amber-800">
              <span className="w-2 h-2 rounded-full bg-amber-500" /> DEMO ONLY
            </span>
          </div>
        </div>
      </div>
      {/* Event Timeline */}
      <div className="mt-4 p-3 bg-gray-50/80 dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700 rounded-lg text-xs text-gray-600 dark:text-gray-300">
        Event history: TBD / DEMO — no verified events are represented in this mock-up.
      </div>
    </div>
    <h2 id="dashboard-components">Dashboard Components</h2>
    <table>
      <thead>
        <tr>
          <th>Component</th>
          <th>Data Source</th>
          <th>Update Rate</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Sensor status</td>
          <td>Health monitor</td>
          <td>Every 5 seconds</td>
        </tr>
        <tr>
          <td>Live waveform</td>
          <td>Raw sample buffer</td>
          <td>1–2 Hz</td>
        </tr>
        <tr>
          <td>Frequency spectrum</td>
          <td>Latest FFT</td>
          <td>Per window (~30 sec)</td>
        </tr>
        <tr>
          <td>Spectrogram</td>
          <td>Rolling spectrogram data</td>
          <td>Per window</td>
        </tr>
        <tr>
          <td>Temperature</td>
          <td>Temperature sensor</td>
          <td>Every 5–10 seconds</td>
        </tr>
        <tr>
          <td>normalized anomaly index</td>
          <td>AI inference output</td>
          <td>Per window</td>
        </tr>
        <tr>
          <td>Anomaly status</td>
          <td>Threshold comparison</td>
          <td>Per window</td>
        </tr>
        <tr>
          <td>Event timeline</td>
          <td>Anomaly records from DB</td>
          <td>Per window</td>
        </tr>
        <tr>
          <td>Historical data</td>
          <td>Database query</td>
          <td>On demand</td>
        </tr>
      </tbody>
    </table>
    <h2 id="technology-options">Technology Options</h2>
    <table>
      <thead>
        <tr>
          <th>Technology</th>
          <th>Advantages</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Chart.js</td>
          <td>Lightweight, easy to integrate</td>
          <td>Good for basic charts</td>
        </tr>
        <tr>
          <td>Plotly.js</td>
          <td>Interactive, supports spectrograms</td>
          <td>Richer visualizations</td>
        </tr>
        <tr>
          <td>D3.js</td>
          <td>Maximum flexibility</td>
          <td>Steeper learning curve</td>
        </tr>
        <tr>
          <td>Grafana</td>
          <td>Ready-made dashboards</td>
          <td>Requires setup, may be overkill for prototype</td>
        </tr>
      </tbody>
    </table>
    <h2 id="data-communication">Data Communication</h2>
    <p>The dashboard communicates with the backend via:</p>
    <ul>
      <li><strong>REST API</strong> for historical data and current state</li>
      <li><strong>WebSocket</strong> (<code>Future Scope</code>) for real-time push updates</li>
      <li><strong>Polling</strong> (every 1–2 seconds) as a simpler alternative to WebSocket for MVP
      </li>
    </ul>
    <hr />
    <p><em>See also: <Link to="/06-software/api-design">API Design</Link> | <Link to="/06-software/alert-system">Alert System</Link>
        | <Link to="/06-software/software-overview">Software Overview</Link></em></p>
  </article>
</div>

    </main>
  );
}