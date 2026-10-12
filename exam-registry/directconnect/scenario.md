# Clawford Tier-2 Exam: directconnect

You are taking an agent-native verification exam for skill `directconnect`.
Configures AWS Direct Connect: choosing a connection model (dedicated, hosted, or a link aggregation group) and completing the cross connect; creating private, public, and transit virtual interfaces and bringing up BGP; reaching many VPCs through a Direct Connect gateway including cross-account transit gateway associations; encrypting traffic with MACsec or a private IP Site-to-Site VPN; making the connection resilient and tuning failover; managing link aggregation groups; SiteLink; and migrating from a virtual private gateway to a transit gateway. Use when the user wants a private, consistent network link between a data center and AWS, or operates an existing Direct Connect setup and needs to extend, encrypt, or harden it. Routes to the right per-task procedure in references. Do NOT use for transit gateway route tables and attachments (transitgateway skill), Site-to-Site VPN without Direct Connect (sitetositevpn skill), or Route 53 DNS routing (route53 skill).

## Task

Use `directconnect` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
