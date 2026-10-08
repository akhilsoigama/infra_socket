import { Link } from 'react-router-dom';

export default function Page07DataProcessedDataFormat() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Data</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Processed Data Format</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Processed Data Format</h1>
    <h2 id="description">Description</h2>
    <p>Processed data includes filtered signal segments and their spectral representations.</p>
    <h2 id="record-format">Record Format</h2>
    <pre><code className="language-json">{"{"}{"\n"}{"  "}"window_id": "WIN-20250315-103000",{"\n"}{"  "}"start_time": "2025-03-15T10:30:00Z",{"\n"}{"  "}"end_time": "2025-03-15T10:30:30Z",{"\n"}{"  "}"sensor_id": "SENSOR-001",{"\n"}{"  "}"sampling_rate": 50.0,{"\n"}{"  "}"sample_count": 1500,{"\n"}{"  "}"quality_status": "OK"{"\n"}{"}"}{"\n"}</code></pre>
    <p>The filtered signal samples and FFT results can be stored as binary arrays or in a separate
      time-series store for efficiency. For the prototype, storing only the extracted features (see <Link to="/07-data/feature-data-format">Feature Data Format</Link>) is sufficient.</p>
    <hr />
    <p><em>See also: <Link to="/07-data/raw-data-format">Raw Data Format</Link> | <Link to="/07-data/feature-data-format">Feature Data Format</Link></em></p>
  </article>
</div>

    </main>
  );
}