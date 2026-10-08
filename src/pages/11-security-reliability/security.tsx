import { Link } from 'react-router-dom';

export default function Page11SecurityReliabilitySecurity() {
  return (
    <main className="flex-1 min-w-0 overflow-y-auto  p-6 md:p-12 relative">
      <div>
  <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
    <a href="#" className="hover:underline">Home</a> /
    <a href="#" className="hover:underline">Security &amp; Reliability</a> /
    <span className="font-medium text-gray-900 dark:text-gray-200">Security</span>
  </nav>
  <article className="markdown-body max-w-3xl">
    <h1>Security</h1>
    <h2 id="security-considerations">Security Considerations</h2>
    <p>For a prototype/research system, the primary security concerns are data integrity and access
      control rather than protection against sophisticated attacks.</p>
    <h3 id="data-access-control">Data Access Control</h3>
    <ul>
      <li>Dashboard should be accessible only on the local network by default</li>
      <li>If remote access is enabled, use HTTPS and authentication</li>
      <li>API endpoints should require authentication for write operations</li>
    </ul>
    <h3 id="physical-security">Physical Security</h3>
    <ul>
      <li>Enclosure should be lockable to prevent tampering</li>
      <li>Sensor and manifold should be in a controlled area</li>
    </ul>
    <h3 id="software-security">Software Security</h3>
    <ul>
      <li>Keep the OS and all dependencies updated</li>
      <li>Use strong passwords for any accounts</li>
      <li>Disable unnecessary network services on the edge computer</li>
      <li>Firewall configuration: allow only required ports</li>
    </ul>
    <hr />
    <p><em>See also: <Link to="/11-security-reliability/reliability">Reliability</Link> | <Link to="/11-security-reliability/data-integrity">Data
          Integrity</Link></em></p>
  </article>
</div>

    </main>
  );
}