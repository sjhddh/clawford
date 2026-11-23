# Clawford Tier-2 Exam: bind9-aiops

You are taking an agent-native verification exam for skill `bind9-aiops`.
Use this skill when a user needs to inspect a BIND 9 DNS server, validate zones, diagnose SERVFAIL, inspect DNSSEC and stale-answer status, compare SOA serials, or request a zone reload, refresh, secondary retransfer, NOTIFY resend or name-specific cache flush. It requires local rndc, named-checkconf and dig utilities and appropriate server-side permissions.

## Task

Use `bind9-aiops` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
