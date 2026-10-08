export default function Page14SensorConnectionSensorConnection() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
        <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
          <a href="#" className="hover:underline">Home</a> /
          <a href="#" className="hover:underline">Sensor Connection</a> /
          <span className="font-medium text-gray-900 dark:text-gray-200">Sensor Connection</span>
        </nav>
        <article className="markdown-body max-w-3xl" dangerouslySetInnerHTML={{ __html: `<h1>Sensor Connection Architecture</h1>
<h2>Storage Calculations</h2>
<p>Suppose one sensor records:</p>
<ul>
<li><strong>Sampling rate:</strong> 100 samples/second</li>
<li><strong>Data:</strong> 4 bytes/sample</li>
</ul>
<h3>32-bit Data (4 bytes/sample)</h3>
<p><strong>Raw Data Calculation:</strong></p>
<ul>
<li>100 samples/second × 4 bytes = 400 bytes/second</li>
</ul>
<p><strong>Approximate Storage Requirements:</strong></p>
<ul>
<li>34.6 MB/day</li>
<li>≈ 1.04 GB/month</li>
<li>≈ 12.6 GB/year</li>
</ul>
<p><em>Note: That&#39;s for one channel, before considering timestamps, headers, and metadata.</em></p>
<h3>16-bit Data (2 bytes/sample)</h3>
<p><strong>Raw Data Calculation:</strong></p>
<ul>
<li>100 samples/second × 2 bytes = 200 bytes/second</li>
</ul>
<p><strong>Approximate Storage Requirements:</strong></p>
<ul>
<li>≈ 17.3 MB/day</li>
<li>≈ 0.52 GB/month</li>
<li>≈ 6.3 GB/year</li>
</ul>
<p><strong>Conclusion:</strong> A 32 GB card is already quite useful for a prototype.</p>
<hr>
<h2>Benefits of Local Storage</h2>
<p>A better architecture leverages both local and remote storage:</p>
<pre><code class="language-mermaid">graph TD
    Sensor[Sensor] --&gt; ESP32[ESP32]
    ESP32 --&gt; SD[microSD&lt;br/&gt;Local backup]
    ESP32 --&gt; WiFi[Wi-Fi]
    WiFi --&gt; Server[Server]
    Server --&gt; DB[(Database)]
</code></pre>
<ul>
<li>The microSD acts as a local backup/buffer.</li>
<li>The server becomes the main long-term storage.</li>
</ul>
<h3>Standard Workflow</h3>
<ol>
<li><strong>ESP32</strong> records data from the sensor.</li>
<li>Data is saved to the <strong>microSD</strong> card.</li>
<li>Data is sent through <strong>Wi-Fi</strong>.</li>
<li><strong>Server</strong> receives the data.</li>
<li>Data is stored in the <strong>Database</strong>.</li>
</ol>
<h3>Store-and-Forward Approach (Wi-Fi Failure)</h3>
<p>If Wi-Fi fails:</p>
<ol>
<li>Wi-Fi connection is lost (❌).</li>
<li><strong>Sensor</strong> continues to send data to the <strong>ESP32</strong>.</li>
<li><strong>ESP32</strong> continues recording to the <strong>microSD</strong> card.</li>
</ol>
<p>When Wi-Fi comes back:</p>
<ol>
<li><strong>ESP32</strong> retrieves missing data from the <strong>microSD</strong> card.</li>
<li><strong>ESP32</strong> uploads the missing data to the <strong>Server</strong>.</li>
</ol>
<hr>
<h2>Wi-Fi Usage</h2>
<p>Wi-Fi is primarily used for communication, not storage. Your sensor node can send the following telemetry to your server:</p>
<ul>
<li>Pressure</li>
<li>Temperature</li>
<li>Timestamp</li>
<li>Node ID</li>
<li>Battery status</li>
<li>Signal quality</li>
</ul>
<p><strong>Communication Flow:</strong></p>
<pre><code class="language-mermaid">graph TD
    Node01[Node 01] --&gt; WiFi[Wi-Fi]
    WiFi --&gt; Router[Router]
    Router --&gt; Internet[Internet / LAN]
    Internet --&gt; Server[Server]
</code></pre>
<p>You can then see the data on your dashboard.</p>
<hr>
<h2>Server Uses</h2>
<p>The server is the central brain and storage system for all your sensor nodes.</p>
<pre><code class="language-mermaid">graph TD
    Node01[Node 01] --&gt; Server[Server]
    Node02[Node 02] --&gt; Server
    Node03[Node 03] --&gt; Server
    Node04[Node 04] --&gt; Server
</code></pre>
<p>The server can perform several critical functions:</p>
<ul>
<li><strong>Store:</strong> Historical sensor data.</li>
<li><strong>Process:</strong> Filtering, FFT (Fast Fourier Transform), Spectrogram, Feature extraction.</li>
<li><strong>Compare:</strong> Node 01 vs Node 02 vs Node 03.</li>
<li><strong>Detect Events:</strong> When multiple nodes detect the same event, it performs Event Correlation.</li>
<li><strong>Display (Web Dashboard):</strong> Live waveform, Frequency spectrum, Spectrogram, Sensor status, and Events.</li>
</ul>
<hr>
<h2>Infra Socket Node Architecture</h2>
<pre><code class="language-mermaid">graph TD
    subgraph &quot;INFRA SOCKET NODE&quot;
        Pressure[Pressure Sensor] --&gt; Noise[Wind Noise Reduction]
        Noise --&gt; AFE[Analog Front End]
        AFE --&gt; ADC[ADC]
        ADC --&gt; ESP32[ESP32]
        
        GPS[GPS/RTC time] --&gt; ESP32
        ESP32 --&gt; SD[microSD]
        ESP32 --&gt; WiFi[Wi-Fi]
    end
    
    WiFi --&gt; ServerMain[SERVER]
    
    ServerMain --&gt; DB[(Database)]
    ServerMain --&gt; Proc[Processing]
    ServerMain --&gt; API[API]
    
    DB --&gt; Dashboard[Dashboard]
    Proc --&gt; Dashboard
    API --&gt; Dashboard
</code></pre>
<hr>
<h2>Multiple Locations Architecture</h2>
<p>For multiple locations, the system architecture scales out:</p>
<pre><code class="language-mermaid">graph TD
    subgraph &quot;CENTRAL SYSTEM&quot;
        Server[SERVER]
        DB[(Database)]
        Proc[Processing]
        Server --- DB
        Server --- Proc
    end

    Server --&gt; Node01[Node 01]
    Server --&gt; Node02[Node 02]
    Server --&gt; Node03[Node 03]

    Node01 --- SD1[SD]
    SD1 --- Sens1[Sensor]

    Node02 --- SD2[SD]
    SD2 --- Sens2[Sensor]

    Node03 --- SD3[SD]
    SD3 --- Sens3[Sensor]
</code></pre>
<p>Each node can have its own 32 GB microSD, while the server can have much larger centralized storage.</p>
` }}>
        </article>
      </div>
    </main>
  );
}