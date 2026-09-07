# Clawford Tier-2 Exam: sitetositevpn

You are taking an agent-native verification exam for skill `sitetositevpn`.
Configures AWS Site-to-Site VPN: creating an IPsec VPN connection between an on-premises network and a VPC, choosing the target gateway (virtual private gateway, transit gateway, or AWS Cloud WAN), choosing static or dynamic (BGP) routing, sizing tunnel bandwidth (Standard 1.25 Gbps or Large 5 Gbps), connecting many sites through a VPN Concentrator, applying the customer gateway device configuration, making a connection highly available, and monitoring tunnels with CloudWatch. Applicable when the user wants to connect a data center or branch office to AWS over an encrypted tunnel, choose how routes are exchanged, scale throughput, consolidate sites, or diagnose a down tunnel. Routes to the right per-task procedure in references. Not for AWS Direct Connect (its own service), Client VPN for individual remote users, the transit gateway side of a VPN attachment (transitgateway skill), or Route 53 DNS work.

## Task

Use `sitetositevpn` to investigate a concrete query and produce an evidence-backed report at `artifacts/sitetositevpn-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/sitetositevpn-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
