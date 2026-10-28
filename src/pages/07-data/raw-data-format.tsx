import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, FolderArchive, CheckCircle2, Sparkles } from 'lucide-react';

export default function Page07DataRawDataFormat() {
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadDataset = () => {
    setDownloading(true);

    // Trigger download of the JSON sample file
    const jsonLink = document.createElement('a');
    jsonLink.href = '/datasets/infrasocket_raw_dataset/raw_samples_50hz.json';
    jsonLink.download = 'raw_samples_50hz.json';
    document.body.appendChild(jsonLink);
    jsonLink.click();
    document.body.removeChild(jsonLink);

    // Trigger download of the CSV sample file
    setTimeout(() => {
      const csvLink = document.createElement('a');
      csvLink.href = '/datasets/infrasocket_raw_dataset/raw_samples_50hz.csv';
      csvLink.download = 'raw_samples_50hz.csv';
      document.body.appendChild(csvLink);
      csvLink.click();
      document.body.removeChild(csvLink);
    }, 250);

    // Trigger download of metadata.json
    setTimeout(() => {
      const metaLink = document.createElement('a');
      metaLink.href = '/datasets/infrasocket_raw_dataset/metadata.json';
      metaLink.download = 'metadata.json';
      document.body.appendChild(metaLink);
      metaLink.click();
      document.body.removeChild(metaLink);
    }, 500);

    setTimeout(() => {
      setDownloading(false);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 4000);
    }, 900);
  };

  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
        <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
          <a href="#" className="hover:underline">Home</a> /
          <a href="#" className="hover:underline">Data</a> /
          <span className="font-medium text-gray-900 dark:text-gray-200">Raw Data Format</span>
        </nav>
        <article className="markdown-body max-w-3xl">
          <h1>Raw Data Format</h1>
          <h2 id="description">Description</h2>
          <p>Raw data consists of individual ADC samples with timestamps, directly as read from the hardware.
          </p>
          <h2 id="record-format">Record Format</h2>
          <pre><code className="language-json">{"{"}{"\n"}{"  "}"timestamp": "2025-03-15T10:30:00.020Z",{"\n"}{"  "}"sensor_id": "SENSOR-001",{"\n"}{"  "}"adc_value": 32847,{"\n"}{"  "}"pressure_pa": null,{"\n"}{"  "}"temperature_raw": 2456,{"\n"}{"  "}"temperature_c": 22.5,{"\n"}{"  "}"quality_status": "OK"{"\n"}{"}"}{"\n"}</code></pre>
          <table>
            <thead>
              <tr>
                <th>Field</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>timestamp</td>
                <td>ISO 8601 (ms precision)</td>
                <td>Sample acquisition time</td>
              </tr>
              <tr>
                <td>sensor_id</td>
                <td>String</td>
                <td>Sensor identifier</td>
              </tr>
              <tr>
                <td>adc_value</td>
                <td>Integer</td>
                <td>Raw ADC reading</td>
              </tr>
              <tr>
                <td>pressure_pa</td>
                <td>Float or null</td>
                <td>Calibrated pressure (null if uncalibrated)</td>
              </tr>
              <tr>
                <td>temperature_raw</td>
                <td>Integer</td>
                <td>Raw temperature ADC reading</td>
              </tr>
              <tr>
                <td>temperature_c</td>
                <td>Float</td>
                <td>Calibrated temperature in °C</td>
              </tr>
              <tr>
                <td>quality_status</td>
                <td>String</td>
                <td>OK, SATURATED, GAP, ERROR</td>
              </tr>
            </tbody>
          </table>
          <h2 id="storage-volume">Storage Volume</h2>
          <p>At 50 Hz sampling: ~4.3 million samples/day, approximately 10–50 MB/day depending on format and
            compression.</p>

          {/* Modern Dataset Download Section */}
          <div className="not-prose my-8 p-6 rounded-2xl bg-gradient-to-br from-sky-50/80 via-white to-blue-50/50 dark:from-gray-800/80 dark:via-gray-900/90 dark:to-sky-950/40 border border-sky-100 dark:border-sky-800/60 shadow-lg shadow-sky-500/5 transition-all duration-300">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pb-5 border-b border-gray-200/80 dark:border-gray-800">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-sky-500/25 shrink-0">
                  <FolderArchive className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-base font-bold text-gray-900 dark:text-white">Sample Raw Dataset Bundle</h3>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-semibold rounded-full bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                      <Sparkles className="w-3 h-3 text-sky-500" /> 50 Hz Benchmark
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Complete folder package with calibrated samples (JSON), spreadsheet table (CSV), and acquisition metadata.
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={handleDownloadDataset}
                disabled={downloading}
                className={`group relative inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer shadow-md select-none shrink-0 ${downloadSuccess
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-500/25 scale-[1.02]'
                  : 'bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white shadow-sky-500/25 hover:shadow-lg hover:shadow-sky-500/35 hover:-translate-y-0.5 active:translate-y-0'
                  }`}
              >
                {downloadSuccess ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-100" />
                    <span>Dataset Downloaded!</span>
                  </>
                ) : downloading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Downloading files...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 duration-200" />
                    <span>Download Dataset Folder</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <hr />
          <p><em>See also: <Link to="/07-data/data-model">Data Model</Link> | <Link to="/07-data/processed-data-format">Processed Data Format</Link></em></p>
        </article>
      </div>

    </main>
  );
}