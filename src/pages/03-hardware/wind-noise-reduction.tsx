import { Link } from 'react-router-dom';

export default function Page03HardwareWindNoiseReduction() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Hardware</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Wind-Noise Reduction</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Wind-Noise Reduction</h1>
    <h2 id="why-wind-noise-is-a-problem">Why Wind Noise Is a Problem</h2>
    <blockquote>
      <p><strong>Simple Explanation:</strong>
        Wind flowing over the sensor's pressure port creates chaotic, swirling pressure changes —
        like the buffeting sound you hear when you hold your hand out of a car window. These
        turbulent pressure fluctuations can be much larger than the infrasound signal we are trying
        to measure. Without noise reduction, the wind noise completely hides the infrasound.</p>
    </blockquote>
    <blockquote>
      <p><strong>Technical Explanation:</strong>
        Atmospheric turbulence creates spatially and temporally varying pressure fluctuations at the
        ground surface. The power spectral density of wind-generated pressure noise follows
        approximately a −5/3 power law and can exceed the amplitude of infrasound signals by orders
        of magnitude at frequencies below a few hertz. Since the target infrasound frequency range
        (0.01–20 Hz (TARGET - Pending experimental validation)) overlaps with the dominant frequency range of turbulent wind noise,
        frequency-domain filtering alone cannot separate wind noise from the signal of interest.</p>
    </blockquote>
    <h2 id="key-insight-spatial-coherence">Key Insight: Spatial Coherence</h2>
    <p>The critical difference between infrasound signals and wind noise is their <strong>spatial
        coherence</strong>:</p>
    <table>
      <thead>
        <tr>
          <th>Property</th>
          <th>Infrasound Signal</th>
          <th>Wind Noise</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Spatial coherence</strong></td>
          <td>Coherent over hundreds of metres (wavelength: 17 m at 20 Hz to 34,000 m at 0.01 Hz)
          </td>
          <td>Incoherent over distances &gt; few metres</td>
        </tr>
        <tr>
          <td><strong>Nature</strong></td>
          <td>Acoustic wave with consistent wavefront</td>
          <td>Turbulent pressure fluctuations, random in space</td>
        </tr>
        <tr>
          <td><strong>Behaviour across multiple points</strong></td>
          <td>Same signal at all nearby points (within the coherence length)</td>
          <td>Different at each point</td>
        </tr>
      </tbody>
    </table>
    <p>This difference is the basis for wind-noise reduction through <strong>spatial averaging</strong>.
    </p>
    <h2 id="how-a-spatial-averaging-manifold-works">How a Spatial-Averaging Manifold Works</h2>
    <h3 id="concept">Concept</h3>
    <p>Multiple air inlets are distributed over an area and connected through tubing to a common
      manifold (mixing volume). The pressure at the sensor port is the average of pressures at all
      inlets.</p>
    <pre><code className="language-mermaid">flowchart TD{"\n"}{"    "}subgraph INLETS["Distributed Air Inlets"]{"\n"}{"        "}I1["Inlet 1"] {"\n"}{"        "}I2["Inlet 2"]{"\n"}{"        "}I3["Inlet 3"]{"\n"}{"        "}I4["Inlet 4"]{"\n"}{"        "}I5["Inlet 5"]{"\n"}{"        "}I6["Inlet 6"]{"\n"}{"        "}I7["Inlet 7"]{"\n"}{"        "}I8["Inlet 8"]{"\n"}{"    "}end{"\n"}{"\n"}{"    "}I1 --&gt; |"Tube"| MAN["Central Manifold\n(Common Volume)"]{"\n"}{"    "}I2 --&gt; |"Tube"| MAN{"\n"}{"    "}I3 --&gt; |"Tube"| MAN{"\n"}{"    "}I4 --&gt; |"Tube"| MAN{"\n"}{"    "}I5 --&gt; |"Tube"| MAN{"\n"}{"    "}I6 --&gt; |"Tube"| MAN{"\n"}{"    "}I7 --&gt; |"Tube"| MAN{"\n"}{"    "}I8 --&gt; |"Tube"| MAN{"\n"}{"\n"}{"    "}MAN --&gt; SENSOR["Pressure Sensor\nPort"]{"\n"}</code></pre>
    <h3 id="why-this-works">Why This Works</h3>
    <ol>
      <li>
        <p><strong>Wind-induced pressure fluctuations can differ between inlets.</strong> Spatial
          averaging can reduce components that are sufficiently uncorrelated, but wind noise is
          not guaranteed to be independent between inlet locations.</p>
      </li>
      <li>
        <p><strong>A pressure wave may be coherent across a small manifold relative to its
            wavelength.</strong> Signal preservation depends on frequency, inlet positions,
          manifold geometry, and phase differences; it is not guaranteed for an arbitrary layout.</p>
      </li>
      <li>
        <p><strong>Idealized theory:</strong> Averaging N statistically independent, equal-variance
          noise contributions gives an RMS noise amplitude proportional to 1/√N (Theoretical ideal, pending experimental characterization). This is a
          theoretical limit under those assumptions, not a measured attenuation for the InfraSocket
          wind-noise reduction system (WNRS). Actual reduction must be measured.</p>
      </li>
    </ol>
    <p><strong>Status: PENDING VALIDATION.</strong> No experimental attenuation value for the current
      InfraSocket WNRS is established in this documentation.</p>
    <h3 id="practical-implementation">Practical Implementation</h3>
    <h4>Rosette Configuration</h4>
    <p>A common layout is a rosette (star) pattern where tubes radiate outward from a central point.
      Each tube has inlet ports at its end or along its length.</p>
    <pre><code>Top View of Rosette Manifold:{"\n"}{"\n"}{"        "}Inlet{"\n"}{"         "}|{"\n"}{"  "}Inlet--+--Inlet{"\n"}{"        "}/|\{"\n"}{"       "}/ | \{"\n"}{"  "}Inlet{"  "}|{"  "}Inlet{"\n"}{"         "}|{"\n"}{"        "}Inlet{"\n"}{"\n"}{"  "}All tubes connect to central manifold{"\n"}</code></pre>
    <h4>Radial Line Configuration</h4>
    <p>Tubes are arranged in straight lines radiating from the center, with multiple inlet ports along
      each tube.</p>
    <h4>Key Dimensions</h4>
    <table>
      <thead>
        <tr>
          <th>Parameter</th>
          <th>Effect</th>
          <th>Typical Range (Professional IMS-scale)</th>
          <th>Prototype Scale</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Wind-noise manifold diameter</td>
          <td>Larger = better low-frequency noise reduction</td>
          <td>18–70 m (per individual station manifold)</td>
          <td>1–5 m (initial engineering range)</td>
        </tr>
        <tr>
          <td>Number of inlets</td>
          <td>May improve averaging only when added inlet contributions provide sufficiently
            independent noise information</td>
          <td>96–144</td>
          <td>4–12 (initial engineering range)</td>
        </tr>
        <tr>
          <td>Tube diameter</td>
          <td>Affects acoustic response</td>
          <td>25–50 mm</td>
          <td>5–15 mm (initial engineering range)</td>
        </tr>
        <tr>
          <td>Tube length (total)</td>
          <td>Affects resonances</td>
          <td>Up to hundreds of metres</td>
          <td>1–5 m per arm (initial engineering range)</td>
        </tr>
      </tbody>
    </table>
    <blockquote>
      <p><strong>Important:</strong> The above prototype-scale values are initial engineering ranges —
        to be experimentally optimized. They are NOT final specifications.</p>
    </blockquote>
    <blockquote>
      <p><strong>Important:</strong> Professional IMS stations use manifolds/pipe arrays spanning 18
        to 70 metres with nearly 100 inlet ports. A prototype-scale manifold (1–5 metres) will
        provide some noise reduction but significantly less than a professional system. This is an
        expected limitation.</p>
    </blockquote>
    <h3 id="array-aperture-vs-wind-noise-manifold">Array Aperture vs. Wind-Noise Manifold</h3>
    <blockquote>
      <p><strong>Array aperture and individual wind-noise-reduction manifold/rosette dimensions are
          different parameters and must not be treated as interchangeable.</strong></p>
    </blockquote>
    <pre><code className="language-text">Wind-noise manifold / rosette (metres){"\n"}{"        "}↓{"\n"}Local sensor-level turbulence reduction{"\n"}(single station / single sensor){"\n"}{"\n"}Multiple sensor stations (kilometres apart){"\n"}{"        "}↓{"\n"}Array aperture{"\n"}{"        "}↓{"\n"}Spatial signal detection / direction estimation{"\n"}</code></pre>
    <ul>
      <li><strong>Wind-noise manifold:</strong> Reduces turbulent pressure fluctuations at a single
        sensor's location. Prototype scale: 1–5 m.</li>
      <li><strong>Array aperture:</strong> The physical separation between multiple independent sensor
        stations, used for cross-correlation and source direction estimation. Professional IMS
        arrays span 1–3 km between stations. This is a future multi-node capability, not an
        individual sensor feature.</li>
    </ul>
    <blockquote>
      <p>Professional IMS array apertures of 1–3 km refer to the spacing between multiple sensor
        stations, not the size of an individual wind-noise manifold. These must not be conflated
        with InfraSocket’s prototype manifold dimensions.</p>
    </blockquote>
    <h2 id="performance-characteristics">Performance Characteristics</h2>
    <h3 id="noise-reduction-effectiveness">Noise Reduction Effectiveness</h3>
    <p><strong>Theory:</strong> The acoustic wavelength is λ = c / f, where c is the speed of sound
      and f is frequency. Using c ≈ 343 m/s as an illustrative value gives wavelengths of about 17 m
      at 20 Hz, 343 m at 1 Hz, and 34 km at 0.01 Hz. These examples do not imply coherence across an
      arbitrary manifold; phase and spatial coherence depend on frequency and geometry.</p>
    <p>WNRS performance depends on inlet geometry and spacing, manifold geometry, tube length and
      diameter, pneumatic/acoustic impedance, pressure equalization, wind speed and direction,
      turbulence, spatial correlation, and frequency. The relationship between wavelength, manifold
      dimensions, and turbulence correlation must be considered together.</p>
    <p><strong>Experimental result:</strong> TBD — requires controlled comparison using the actual
      InfraSocket WNRS. No measured attenuation is reported here.</p>
    <p>The following are design considerations, not validated performance rules:</p>
    <ol>
      <li>Inlet count and spacing affect the number and correlation of contributing pressure fields.</li>
      <li>Manifold aperture relative to wavelength affects the phase consistency of the target signal.</li>
      <li>Wind speed, direction, turbulence, and installation environment affect wind-generated pressure.</li>
      <li>Tube dimensions and manifold impedance affect equalization, resonances, and frequency response.</li>
    </ol>
    <h3 id="corner-frequency">Corner Frequency</h3>
    <p>A single corner-frequency formula is not established for this manifold. Its frequency-dependent
      response and wind-noise reduction must be characterized experimentally for the actual inlet
      layout, tubing, manifold, and installation. Do not infer a cutoff from wind speed and aperture
      alone.</p>
    <h2 id="limitations">Limitations</h2>
    <ol>
      <li><strong>Prototype-scale manifolds provide limited noise reduction</strong> — especially at
        the lowest frequencies (&lt; 1 Hz) where large apertures are needed</li>
      <li><strong>Tube resonances</strong> — the tubing can introduce acoustic resonances if not
        properly dampened (capillary inserts or porous plugs help)</li>
      <li><strong>Tube response time</strong> — long or narrow tubes slow the pressure response,
        potentially attenuating higher frequencies</li>
      <li><strong>Maintenance</strong> — inlets must be protected from clogging by debris, insects, or
        water</li>
      <li><strong>Physical space</strong> — even a small manifold requires a few metres of outdoor
        space</li>
    </ol>
    <h2 id="prototype-construction-guidance">Prototype Construction Guidance</h2>
    <table>
      <thead>
        <tr>
          <th>Component</th>
          <th>Material</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Tubes</td>
          <td>Flexible or rigid tubing (silicone, PVC, copper)</td>
          <td>Diameter 5–15 mm</td>
        </tr>
        <tr>
          <td>Inlets</td>
          <td>Open tube ends, optionally with mesh filter</td>
          <td>Protected from rain and debris</td>
        </tr>
        <tr>
          <td>Central manifold</td>
          <td>T-connectors, cross connectors, or a small sealed chamber</td>
          <td>All tubes converge here</td>
        </tr>
        <tr>
          <td>Damping inserts</td>
          <td>Porous foam or capillary inserts</td>
          <td>Optional, to reduce resonances</td>
        </tr>
        <tr>
          <td>Mounting</td>
          <td>Ground-level, staked or weighted</td>
          <td>Consistent height across all inlets</td>
        </tr>
      </tbody>
    </table>
    <h2 id="comparison-with-and-without-wind-noise-reduction">Comparison: With and Without Wind-Noise
      Reduction</h2>
    <table>
      <thead>
        <tr>
          <th>Condition</th>
          <th>Without Manifold</th>
          <th>With Manifold</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Calm conditions</td>
          <td>Low wind noise</td>
          <td>Similar (little noise to reduce)</td>
        </tr>
        <tr>
          <td>Light wind (&lt; 3 m/s)</td>
          <td>Moderate wind noise</td>
          <td>Noticeable improvement</td>
        </tr>
        <tr>
          <td>Moderate wind (3–10 m/s)</td>
          <td>High wind noise, may obscure signal</td>
          <td>Improvement proportional to √n</td>
        </tr>
        <tr>
          <td>High wind (&gt; 10 m/s)</td>
          <td>Signal likely buried</td>
          <td>Some improvement, but may still be noisy</td>
        </tr>
      </tbody>
    </table>
    <blockquote>
      <p>The manifold does not eliminate wind noise — it reduces it. In strong wind, even with a
        manifold, infrasound signals may be difficult to detect. This is a fundamental physical
        limitation.</p>
    </blockquote>
    <hr />
    <p><em>See also: <Link to="/03-hardware/hardware-overview">Hardware Overview</Link> | <Link to="/03-hardware/pressure-sensing">Pressure Sensing</Link> | <Link to="/03-hardware/environmental-enclosure">Environmental Enclosure</Link></em></p>
  </article>
</div>

    </main>
  );
}