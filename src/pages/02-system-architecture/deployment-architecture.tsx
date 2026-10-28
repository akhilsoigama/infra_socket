import { Link } from 'react-router-dom';

export default function Page02SystemArchitectureDeploymentArchitecture() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">System Architecture</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Deployment Architecture</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Deployment Architecture</h1>
    <h2 id="deployment-diagram">Deployment Diagram</h2>
    <pre><code className="language-mermaid">flowchart TD{"\n"}{"    "}subgraph FIELD["Field Deployment Site"]{"\n"}{"        "}subgraph ENCLOSURE["Environmental Enclosure"]{"\n"}{"            "}WNR["Wind-Noise\nManifold"] --&gt; SENSOR["Pressure Sensor\n+ Reference Chamber"]{"\n"}{"            "}SENSOR --&gt; AFE["Analog Front End"]{"\n"}{"            "}AFE --&gt; ADC["ADC"]{"\n"}{"            "}TEMP["Temperature\nSensor"]{"\n"}{"            "}ADC --&gt; MCU["Microcontroller\n/ DAQ Board"]{"\n"}{"            "}TEMP --&gt; MCU{"\n"}{"        "}end{"\n"}{"\n"}{"        "}MCU --&gt;|"USB / Serial /\nEthernet"| EDGE["Edge Computer\n(Raspberry Pi / SBC /\nLaptop)"]{"\n"}{"\n"}{"        "}subgraph EDGE_SW["Edge Software"]{"\n"}{"            "}EDGE --&gt; DAQ_SVC["DAQ Service"]{"\n"}{"            "}DAQ_SVC --&gt; SP_SVC["Signal Processing"]{"\n"}{"            "}SP_SVC --&gt; AI_SVC["AI Inference"]{"\n"}{"            "}DAQ_SVC --&gt; DB_LOCAL["Local Database"]{"\n"}{"            "}SP_SVC --&gt; DB_LOCAL{"\n"}{"            "}AI_SVC --&gt; DB_LOCAL{"\n"}{"            "}DB_LOCAL --&gt; API_SVC["REST API"]{"\n"}{"            "}API_SVC --&gt; DASH_SVC["Dashboard\n(Web Server)"]{"\n"}{"            "}AI_SVC --&gt; ALERT_SVC["Alert Service"]{"\n"}{"        "}end{"\n"}{"    "}end{"\n"}{"\n"}{"    "}subgraph USER["User Access"]{"\n"}{"        "}BROWSER["Web Browser\n(Any Device)"] --&gt;|"HTTP/HTTPS\n(LAN or Remote)"| DASH_SVC{"\n"}{"        "}ALERT_SVC --&gt;|"Email /\nWebhook"| NOTIFY["Notification\nRecipient"]{"\n"}{"    "}end{"\n"}{"\n"}{"    "}subgraph CLOUD["Cloud (Future Scope)"]{"\n"}{"        "}DB_LOCAL -.-&gt;|"Sync\n(Future)"| CLOUD_DB["Cloud\nDatabase"]{"\n"}{"        "}CLOUD_DB -.-&gt; CLOUD_DASH["Cloud\nDashboard"]{"\n"}{"    "}end{"\n"}{"\n"}{"    "}style CLOUD fill:#f5f5f5,stroke-dasharray: 5 5{"\n"}</code></pre>
    <h2 id="deployment-configurations">Deployment Configurations</h2>
    <h3 id="configuration-1-standalone-mvp-">Configuration 1: Standalone (MVP)</h3>
    <p>Everything runs on a single edge computer at the deployment site.</p>
    <table>
      <thead>
        <tr>
          <th>Component</th>
          <th>Runs On</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Sensor + ADC + DAQ board</td>
          <td>Connected to edge computer via USB/serial</td>
        </tr>
        <tr>
          <td>All software services</td>
          <td>Edge computer (Raspberry Pi, laptop, or SBC)</td>
        </tr>
        <tr>
          <td>Database</td>
          <td>Local on edge computer</td>
        </tr>
        <tr>
          <td>Dashboard</td>
          <td>Web server on edge computer, accessed via LAN</td>
        </tr>
        <tr>
          <td>Alerts</td>
          <td>Local notifications or email (if internet available)</td>
        </tr>
      </tbody>
    </table>
    <p><strong>Advantages:</strong> Simple, no internet required, low cost
      <strong>Limitations:</strong> Data only accessible on local network
    </p>
    <h3 id="configuration-2-remote-access-extended-">Configuration 2: Remote Access (Extended)</h3>
    <p>Same as standalone, but with remote access capability.</p>
    <table>
      <thead>
        <tr>
          <th>Added Component</th>
          <th>Purpose</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>VPN or reverse proxy</td>
          <td>Secure remote access to dashboard</td>
        </tr>
        <tr>
          <td>Cloud database sync</td>
          <td>Backup data to cloud storage</td>
        </tr>
        <tr>
          <td>Remote alerts</td>
          <td>Email or webhook notifications</td>
        </tr>
      </tbody>
    </table>
    <p><strong>Advantages:</strong> Remote monitoring, data backup
      <strong>Requirements:</strong> Internet connectivity
    </p>
    <h3 id="configuration-3-multi-sensor-network-future-scope-">Configuration 3: Multi-Sensor Network
      (<code>Future Scope</code>)</h3>
    <p>Multiple sensor stations report to a central server.</p>
    <pre><code className="language-mermaid">flowchart LR{"\n"}{"    "}S1["Sensor\nStation 1"] --&gt; CENTRAL["Central\nServer"]{"\n"}{"    "}S2["Sensor\nStation 2"] --&gt; CENTRAL{"\n"}{"    "}S3["Sensor\nStation 3"] --&gt; CENTRAL{"\n"}{"    "}CENTRAL --&gt; CDASH["Central\nDashboard"]{"\n"}{"    "}CENTRAL --&gt; ARRAY["Array\nProcessing"]{"\n"}</code></pre>
    <p><strong>Advantages:</strong> Source localization, array processing, network-level analysis
      <strong>Requirements:</strong> Multiple stations, network infrastructure, array processing
      software
    </p>
    <h2 id="hardware-requirements-for-edge-computer">Hardware Requirements for Edge Computer</h2>
    <p><code>Assumption</code>: These are estimated minimum requirements for the MVP deployment.</p>
    <table>
      <thead>
        <tr>
          <th>Resource</th>
          <th>Minimum</th>
          <th>Recommended</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>CPU</td>
          <td>Single-core, 1 GHz</td>
          <td>Quad-core, 1.5 GHz+</td>
        </tr>
        <tr>
          <td>RAM</td>
          <td>512 MB</td>
          <td>2 GB+</td>
        </tr>
        <tr>
          <td>Storage</td>
          <td>8 GB</td>
          <td>32 GB+ (for long-term recording)</td>
        </tr>
        <tr>
          <td>Connectivity</td>
          <td>USB (for DAQ)</td>
          <td>USB + Ethernet/Wi-Fi</td>
        </tr>
        <tr>
          <td>OS</td>
          <td>Linux-based</td>
          <td>Raspberry Pi OS, Ubuntu</td>
        </tr>
      </tbody>
    </table>
    <p>Suitable edge computers include:</p>
    <ul>
      <li>Raspberry Pi 4 or later</li>
      <li>Any Linux-capable single-board computer (SBC)</li>
      <li>Laptop (for development and testing)</li>
    </ul>
    <h2 id="network-architecture">Network Architecture</h2>
    <pre><code className="language-mermaid">flowchart LR{"\n"}{"    "}SENSOR["Sensor\nHardware"] --&gt;|"USB/Serial"| EDGE["Edge\nComputer"]{"\n"}{"    "}EDGE --&gt;|"LAN\n(HTTP)"| USER_LAN["LAN\nUsers"]{"\n"}{"    "}EDGE --&gt;|"Internet\n(HTTPS)"| USER_REMOTE["Remote\nUsers"]{"\n"}{"    "}EDGE --&gt;|"SMTP /\nWebhook"| NOTIFY["Alert\nRecipients"]{"\n"}</code></pre>
    <h2 id="physical-deployment-considerations">Physical Deployment Considerations</h2>
    <table>
      <thead>
        <tr>
          <th>Consideration</th>
          <th>Guidance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Location</strong></td>
          <td>Away from strong local noise sources (roads, machinery, HVAC).
            <code>Assumption</code>: some level of wind shelter
          </td>
        </tr>
        <tr>
          <td><strong>Elevation</strong></td>
          <td>Ground level or slightly elevated; avoid rooftops in windy areas</td>
        </tr>
        <tr>
          <td><strong>Wind exposure</strong></td>
          <td>Partial shelter improves manifold performance; full exposure degrades SNR</td>
        </tr>
        <tr>
          <td><strong>Power</strong></td>
          <td>Mains power or sufficiently large battery/solar system for extended operation</td>
        </tr>
        <tr>
          <td><strong>Weather protection</strong></td>
          <td>Enclosure must protect electronics; sensor ports must remain open to atmosphere</td>
        </tr>
        <tr>
          <td><strong>Security</strong></td>
          <td>Physical security against tampering or theft in outdoor deployments</td>
        </tr>
        <tr>
          <td><strong>Maintenance access</strong></td>
          <td>Easy access for calibration, component replacement, and data retrieval</td>
        </tr>
      </tbody>
    </table>
    <hr />
    <p><em>See also: <Link to="/02-system-architecture/architecture">Architecture</Link> | <Link to="/10-deployment/field-deployment">Field Deployment</Link> | <Link to="/10-deployment/hardware-deployment">Hardware Deployment</Link></em></p>
  </article>
</div>

    </main>
  );
}