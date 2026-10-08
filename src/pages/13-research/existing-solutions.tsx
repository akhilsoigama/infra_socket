import { Link } from 'react-router-dom';

export default function Page13ResearchExistingSolutions() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Research</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Existing Solutions</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Existing Solutions</h1>
    <h2 id="professional-systems">Professional Systems</h2>
    <h3 id="ctbto-ims-infrasound-stations">CTBTO IMS Infrasound Stations</h3>
    <ul>
      <li><strong>Description:</strong> Global network of 60 stations for nuclear test detection</li>
      <li><strong>Sensors:</strong> Research-grade microbarometers (e.g., CEA MB3, Chaparral Physics
        sensors)</li>
      <li><strong>Wind-noise reduction:</strong> Large pipe arrays (18–70 m diameter rosettes)</li>
      <li><strong>Array size:</strong> 1–3 km aperture, 4–8 sensors per station</li>
      <li><strong>Processing:</strong> PMCC algorithm, automated detection</li>
      <li><strong>Access:</strong> Restricted; scientific access via vDEC application</li>
    </ul>
    <blockquote>
      <p>Professional/reference systems may use large wind-noise-reduction manifolds and multi-element
        arrays. The values shown here are reference characteristics of existing systems and are NOT
        InfraSocket prototype specifications.</p>
    </blockquote>
    <h3 id="research-station-networks">Research Station Networks</h3>
    <ul>
      <li><strong>EarthScope/USArray Transportable Array:</strong> Deployed infrasound sensors
        alongside seismic instruments across the US</li>
      <li><strong>Individual research groups:</strong> Universities and national labs operate
        specialized infrasound stations</li>
    </ul>
    <h3 id="commercial-sensors">Commercial Sensors</h3>
    <ul>
      <li><strong>CEA/DASE MB3:</strong> Research-grade microbarometer</li>
      <li><strong>Chaparral Physics sensors:</strong> Used at many IMS stations</li>
      <li><strong>Setra, Honeywell, Validyne:</strong> Industrial differential pressure sensors
        adaptable for infrasound</li>
    </ul>
    <h2 id="low-cost-diy-efforts">Low-Cost / DIY Efforts</h2>
    <p>Several individuals and groups have explored low-cost infrasound sensing:</p>
    <ul>
      <li><strong>Instructables / maker community:</strong> DIY microbarometer projects using MEMS
        pressure sensors</li>
      <li><strong>University student projects:</strong> Various prototype systems for educational
        purposes</li>
      <li><strong>Open-source weather station networks:</strong> Some incorporate low-frequency
        pressure sensing</li>
    </ul>
    <h2 id="comparison-existing-vs-proposed">Comparison: Existing vs. Proposed</h2>
    <table>
      <thead>
        <tr>
          <th>System</th>
          <th>Deployment Characteristic</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>CTBTO IMS</td>
          <td>Infrastructure-scale monitoring, professional distributed network, large-scale
            multi-station architecture</td>
        </tr>
        <tr>
          <td>Research-grade systems</td>
          <td>Specialized scientific instrumentation</td>
        </tr>
        <tr>
          <td>Commercial sensors</td>
          <td>Commercially available professional hardware</td>
        </tr>
        <tr>
          <td>InfraSocket</td>
          <td>Low-cost prototype objective, portable/modular design objective, local/edge
            AI-assisted anomaly screening, experimental/regional monitoring focus</td>
        </tr>
      </tbody>
    </table>
    <blockquote>
      <p>Low-cost is a design objective, not yet a demonstrated final cost.</p>
    </blockquote>
    <blockquote>
      <p><strong>Important:</strong> The proposed prototype is not a replacement for professional
        systems. It is a simplified, accessible system for education, research exploration, and
        prototype demonstration. Performance claims require validation through calibration and
        testing. <code>To be validated</code>.</p>
    </blockquote>
    <hr />
    <p><em>See also: <Link to="/13-research/background">Background</Link> | <Link to="/13-research/proposed-vs-existing">Proposed
          vs Existing</Link></em></p>
  </article>
</div>

    </main>
  );
}