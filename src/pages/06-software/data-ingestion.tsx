import { Link } from 'react-router-dom';

export default function Page06SoftwareDataIngestion() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Software</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Data Ingestion</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Data Ingestion</h1>
    <h2 id="overview">Overview</h2>
    <p>Data ingestion is the process of reading raw digital samples from the ADC/DAQ hardware and making
      them available to the software pipeline.</p>
    <h2 id="ingestion-flow">Ingestion Flow</h2>
    <pre><code className="language-mermaid">flowchart TD{"\n"}{"    "}HW["ADC / DAQ\nHardware"] --&gt;|"Serial / USB / SPI"| READER["Hardware Reader\n(Driver / Library)"]{"\n"}{"    "}READER --&gt;|"Raw sample +\nTimestamp"| BUFFER["Ring Buffer\n(In-Memory)"]{"\n"}{"    "}BUFFER --&gt; STORE["Store to\nDatabase"]{"\n"}{"    "}BUFFER --&gt; PROCESS["Pass to Signal\nProcessing"]{"\n"}</code></pre>
    <h2 id="ingestion-requirements">Ingestion Requirements</h2>
    <table>
      <thead>
        <tr>
          <th>Requirement</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Continuous reading</td>
          <td>Must read every sample without dropping</td>
        </tr>
        <tr>
          <td>Timestamping</td>
          <td>Each sample gets a precise timestamp</td>
        </tr>
        <tr>
          <td>Buffering</td>
          <td>In-memory buffer handles processing speed variations</td>
        </tr>
        <tr>
          <td>Error handling</td>
          <td>Communication errors are logged; recovery is automatic</td>
        </tr>
        <tr>
          <td>Data preservation</td>
          <td>Raw data is written to database before any processing</td>
        </tr>
      </tbody>
    </table>
    <h2 id="communication-protocols">Communication Protocols</h2>
    <table>
      <thead>
        <tr>
          <th>Protocol</th>
          <th>Usage</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Serial (UART)</td>
          <td>Microcontroller-based DAQ</td>
          <td>Common, simple, well-supported</td>
        </tr>
        <tr>
          <td>USB</td>
          <td>USB-connected DAQ boards</td>
          <td>Higher bandwidth, plug-and-play</td>
        </tr>
        <tr>
          <td>SPI / I²C</td>
          <td>Direct hardware interface</td>
          <td>When running on SBC with GPIO access</td>
        </tr>
        <tr>
          <td>TCP/IP</td>
          <td>Networked DAQ</td>
          <td>For remote sensor placement</td>
        </tr>
      </tbody>
    </table>
    <h2 id="data-format-ingested-">Data Format (Ingested)</h2>
    <p>Each ingested sample is a record containing:</p>
    <pre><code className="language-json">{"{"}{"\n"}{"  "}"timestamp": "2025-03-15T10:30:00.020Z",{"\n"}{"  "}"adc_value": 32847,{"\n"}{"  "}"channel": 0,{"\n"}{"  "}"temperature_raw": 2456{"\n"}{"}"}{"\n"}</code></pre>
    <hr />
    <p><em>See also: <Link to="/06-software/backend">Backend</Link> | <Link to="/07-data/raw-data-format">Raw Data
          Format</Link> | <Link to="/06-software/database">Database</Link></em></p>
  </article>
</div>

    </main>
  );
}