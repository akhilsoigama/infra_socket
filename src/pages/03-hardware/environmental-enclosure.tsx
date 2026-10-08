import { Link } from 'react-router-dom';

export default function Page03HardwareEnvironmentalEnclosure() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Hardware</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Environmental Enclosure</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Environmental Enclosure</h1>
    <h2 id="purpose">Purpose</h2>
    <p>The environmental enclosure protects the electronic components from weather, dust, insects, and
      temperature extremes while allowing the pressure sensor's atmospheric port to remain exposed to
      the ambient atmosphere.</p>
    <h2 id="requirements">Requirements</h2>
    <table>
      <thead>
        <tr>
          <th>Requirement</th>
          <th>Rationale</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Weather resistance</td>
          <td>Must survive rain, humidity, UV exposure</td>
        </tr>
        <tr>
          <td>Thermal insulation</td>
          <td>Reduces temperature swings that cause measurement drift</td>
        </tr>
        <tr>
          <td>Dust and insect protection</td>
          <td>Prevents contamination of sensor ports and electronics</td>
        </tr>
        <tr>
          <td>Sensor port access</td>
          <td>Pressure port(s) must remain connected to the atmosphere</td>
        </tr>
        <tr>
          <td>Calibration access</td>
          <td>Must be openable for calibration and maintenance</td>
        </tr>
        <tr>
          <td>Cable entry</td>
          <td>Sealed entries for power and data cables</td>
        </tr>
        <tr>
          <td>Mounting</td>
          <td>Secure mounting to ground or platform</td>
        </tr>
      </tbody>
    </table>
    <h2 id="design-considerations">Design Considerations</h2>
    <h3 id="ventilation-vs-sealing">Ventilation vs. Sealing</h3>
    <p>The enclosure must be sealed enough to protect electronics but NOT hermetically sealed — the
      sensor needs atmospheric access. The wind-noise manifold tubes pass through the enclosure to
      reach the sensor's pressure port.</p>
    <h3 id="thermal-design">Thermal Design</h3>
    <ul>
      <li>Insulation (foam, double-wall construction) reduces temperature swings</li>
      <li>Light-coloured exterior reduces solar heating</li>
      <li>Avoid placing heat-generating components (voltage regulators, computing boards) in direct
        thermal contact with the sensor</li>
    </ul>
    <h3 id="materials">Materials</h3>
    <table>
      <thead>
        <tr>
          <th>Material</th>
          <th>Advantages</th>
          <th>Disadvantages</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>ABS/Polycarbonate plastic</td>
          <td>Lightweight, weather-resistant, insulating</td>
          <td>May degrade under prolonged UV</td>
        </tr>
        <tr>
          <td>Fibreglass</td>
          <td>Very weather-resistant, good insulator</td>
          <td>Heavier, more expensive</td>
        </tr>
        <tr>
          <td>Aluminium</td>
          <td>Durable, RF shielding</td>
          <td>Thermally conductive (poor insulator)</td>
        </tr>
        <tr>
          <td>IP-rated project box</td>
          <td>Pre-made, rated for weather protection</td>
          <td>May need modification for ports</td>
        </tr>
      </tbody>
    </table>
    <p><strong>Prototype recommendation:</strong> An IP65 or IP66 rated plastic project box (ABS or
      polycarbonate) provides adequate protection and is readily available. Drill and seal holes for
      manifold tubes, cables, and the capillary vent.</p>
    <h2 id="prototype-enclosure-layout">Prototype Enclosure Layout</h2>
    <pre><code>┌──────────────────────────────────┐{"\n"}│{"         "}Environmental{"            "}│{"\n"}│{"           "}Enclosure{"              "}│{"\n"}│{"                                  "}│{"\n"}│{"  "}┌─────────┐{"   "}┌──────────┐{"     "}│{"\n"}│{"  "}│ Pressure │{"   "}│{"  "}ADC /{"   "}│{"     "}│{"\n"}│{"  "}│{"  "}Sensor{"  "}│{"   "}│{"   "}MCU{"    "}│{"     "}│{"\n"}│{"  "}└────┬─────┘{"   "}└────┬─────┘{"     "}│{"\n"}│{"       "}│{"              "}│{"           "}│{"\n"}│{"  "}┌────┴─────┐{"   "}┌────┴─────┐{"    "}│{"\n"}│{"  "}│ Reference│{"   "}│{"  "}Power{"   "}│{"    "}│{"\n"}│{"  "}│ Chamber{"  "}│{"   "}│{"  "}Supply{"  "}│{"    "}│{"\n"}│{"  "}└──────────┘{"   "}└──────────┘{"    "}│{"\n"}│{"                                  "}│{"\n"}│{"  "}Temp Sensor [·]{"                 "}│{"\n"}│{"                                  "}│{"\n"}├──┬────────────────────────┬──────┤{"\n"}│{"  "}│ Manifold tubes in{"      "}│ Cable│{"\n"}│{"  "}│ (sealed pass-through){"  "}│ entry│{"\n"}└──┴────────────────────────┴──────┘{"\n"}</code></pre>
    <hr />
    <p><em>See also: <Link to="/03-hardware/hardware-overview">Hardware Overview</Link> | <Link to="/03-hardware/power-system">Power System</Link></em></p>
  </article>
</div>

    </main>
  );
}