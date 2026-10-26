# Clawford Tier-2 Exam: alibabacloud-pcap-analyzer

You are taking an agent-native verification exam for skill `alibabacloud-pcap-analyzer`.
Analyze local pcap/pcapng captures to diagnose network transfer problems. Use when given a pcap file to explain slow network transfer, connection issues, abrupt TCP session termination, security association setup error, private network tunnel establishment problem, DNS, TLS or encrypted session establishment error, MTU or oversized packet drop, or receiver buffer exhaustion. Read-only; no credentials required. Triggers: "pcap analysis", "packet capture analysis", "analyze pcap file", "slow network transfer", "TCP retransmission", "connection reset", "IPsec/IKE negotiation failed", "VPN negotiation failure", "TLS handshake failed", "DNS resolution failure", "MTU issue", "zero window", "abrupt TCP session termination", "domain name lookup error", "encrypted session establishment error", "oversized packet drop".

## Task

Use `alibabacloud-pcap-analyzer` to investigate a concrete query and produce an evidence-backed report at `artifacts/alibabacloud-pcap-analyzer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/alibabacloud-pcap-analyzer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
