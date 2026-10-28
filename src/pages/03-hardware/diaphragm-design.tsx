import { Link } from 'react-router-dom';

export default function Page03HardwareDiaphragmDesign() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Hardware</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Diaphragm Design</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Diaphragm Design</h1>
    <h2 id="purpose">Purpose</h2>
    <p>The diaphragm (also called membrane or sensing element) is the mechanical component within the
      pressure sensor that physically deflects in response to pressure differences. Its mechanical
      properties directly determine the sensor's sensitivity, frequency response, and noise
      characteristics.</p>
    <h2 id="working-principle">Working Principle</h2>
    <blockquote>
      <p><strong>Simple Explanation:</strong>
        Imagine stretching a thin sheet of cling wrap over the mouth of a jar. If you gently blow on
        it, the film bulges slightly. If you push harder, it bulges more. The diaphragm in a
        pressure sensor works the same way — atmospheric pressure pushes on one side, reference
        pressure pushes on the other, and the difference makes the diaphragm bend. By measuring how
        much it bends, we know the pressure difference.</p>
    </blockquote>
    <blockquote>
      <p><strong>Technical Explanation:</strong>
        The diaphragm is a thin, typically circular membrane clamped at its edges. When a
        differential pressure is applied across its faces, it deflects according to thin-plate
        theory. The centre deflection (w₀) for a circular diaphragm is approximately:</p>
      <p>w₀ ∝ ΔP × r⁴ / (E × t³)</p>
      <p>Where:</p>
      <ul>
        <li>ΔP = differential pressure</li>
        <li>r = diaphragm radius</li>
        <li>E = Young's modulus of the material</li>
        <li>t = diaphragm thickness</li>
      </ul>
      <p>Sensitivity increases with larger radius and thinner material, but at the cost of reduced
        maximum pressure range and increased fragility.</p>
    </blockquote>
    <h2 id="design-considerations">Design Considerations</h2>
    <h3 id="sensitivity-vs-range-trade-off">Sensitivity vs. Range Trade-off</h3>
    <table>
      <thead>
        <tr>
          <th>Parameter</th>
          <th>Larger/Thinner Diaphragm</th>
          <th>Smaller/Thicker Diaphragm</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Sensitivity</td>
          <td>Higher</td>
          <td>Lower</td>
        </tr>
        <tr>
          <td>Maximum pressure range</td>
          <td>Lower</td>
          <td>Higher</td>
        </tr>
        <tr>
          <td>Fragility</td>
          <td>More fragile</td>
          <td>More robust</td>
        </tr>
        <tr>
          <td>Resonant frequency</td>
          <td>Lower</td>
          <td>Higher</td>
        </tr>
      </tbody>
    </table>
    <p>For infrasound applications, <strong>higher sensitivity</strong> is preferred because the
      pressure signals are very small. However, the diaphragm must still withstand normal atmospheric
      pressure variations without damage.</p>
    <h3 id="resonant-frequency">Resonant Frequency</h3>
    <p>Every diaphragm has a natural resonant frequency. For accurate measurement, the operating
      frequency range must be well below the resonant frequency. Since infrasound frequencies go up to
      only 20 Hz, the diaphragm's resonant frequency can be relatively low compared to acoustic
      applications, but should still be comfortably above 20 Hz to avoid resonance effects within the
      measurement band.</p>
    <h3 id="material-properties">Material Properties</h3>
    <p>Common diaphragm materials in MEMS and industrial sensors:</p>
    <ul>
      <li><strong>Silicon</strong> — used in MEMS sensors; precise, repeatable, but brittle</li>
      <li><strong>Stainless steel</strong> — used in industrial transducers; robust,
        corrosion-resistant</li>
      <li><strong>Polymer films</strong> — used in some microbarometer designs; can be very thin and
        sensitive</li>
    </ul>
    <h3 id="temperature-effects">Temperature Effects</h3>
    <p>Diaphragm properties (Young's modulus, thermal expansion) change with temperature, which can
      cause:</p>
    <ul>
      <li><strong>Sensitivity drift</strong> — the same pressure produces slightly different
        deflection at different temperatures</li>
      <li><strong>Zero offset drift</strong> — the "zero" point shifts with temperature</li>
    </ul>
    <p>These effects are particularly important for infrasound because the signals are small and
      measurements may span hours or days during which temperature changes.</p>
    <h2 id="relevance-to-prototype">Relevance to Prototype</h2>
    <p>In the prototype, the diaphragm is part of the commercially selected pressure sensor — it is not
      custom-designed. However, understanding diaphragm physics helps in:</p>
    <ol>
      <li><strong>Selecting a sensor</strong> with appropriate sensitivity for infrasound</li>
      <li><strong>Understanding noise sources</strong> related to the mechanical sensing element</li>
      <li><strong>Interpreting temperature effects</strong> on measurements</li>
      <li><strong>Setting expectations</strong> for the achievable noise floor</li>
    </ol>
    <blockquote>
      <p><code>Assumption</code>: The prototype will use a commercially available sensor with a
        pre-designed diaphragm. Custom diaphragm design is not within the scope of the MVP.</p>
    </blockquote>
    <hr />
    <p><em>See also: <Link to="/03-hardware/pressure-sensing">Pressure Sensing</Link> | <Link to="/03-hardware/differential-pressure-system">Differential Pressure System</Link></em></p>
  </article>
</div>

    </main>
  );
}