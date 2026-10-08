import { Link } from 'react-router-dom';

export default function Page12CostAndFeasibilityCostOptimization() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Cost &amp; Feasibility</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Cost Optimization</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Cost Optimization</h1>
    <h2 id="strategies">Strategies</h2>
    <ol>
      <li><strong>Use digital-output sensors:</strong> Eliminates the need for external amplifier and
        filter circuitry</li>
      <li><strong>Use on-chip ADC:</strong> Many microcontrollers include 12-bit ADCs; may be
        sufficient for initial testing</li>
      <li><strong>Use existing hardware:</strong> Team laptops instead of purchasing SBCs</li>
      <li><strong>Open-source software:</strong> Python + scikit-learn + Flask — all free</li>
      <li><strong>Minimal manifold:</strong> Start with 4 inlets instead of 8–12; expand if effective
      </li>
      <li><strong>Repurpose containers:</strong> Use available airtight containers for the reference
        chamber</li>
      <li><strong>Breadboard prototyping:</strong> Avoid PCB fabrication costs for initial prototype
      </li>
    </ol>
    <hr />
    <p><em>See also: <Link to="/12-cost-and-feasibility/prototype-cost">Prototype Cost</Link> | <Link to="/12-cost-and-feasibility/scalability">Scalability</Link></em></p>
  </article>
</div>

    </main>
  );
}