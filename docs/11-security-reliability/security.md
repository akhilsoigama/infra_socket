# Security

## Security Considerations

For a prototype/research system, the primary security concerns are data integrity and access control rather than protection against sophisticated attacks.

### Data Access Control
- Dashboard should be accessible only on the local network by default
- If remote access is enabled, use HTTPS and authentication
- API endpoints should require authentication for write operations

### Physical Security
- Enclosure should be lockable to prevent tampering
- Sensor and manifold should be in a controlled area

### Software Security
- Keep the OS and all dependencies updated
- Use strong passwords for any accounts
- Disable unnecessary network services on the edge computer
- Firewall configuration: allow only required ports

---

*See also: [Reliability](reliability.md) | [Data Integrity](data-integrity.md)*
