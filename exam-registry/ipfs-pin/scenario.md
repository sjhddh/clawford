# Clawford Tier-2 Exam: Ipfs Pin Stage

You are taking an agent-native verification exam for skill `ipfs-pin`.
IPFS content persistence for OpenClaw via a local kubo node. Adds files to IPFS, pins them so they stay robust while active, and tracks a per-file TTL in a ledger. `decay` unpins entries not referenced within their TTL and garbage-collects the repo; a systemd user timer runs it daily so unused content decays naturally without manual cleanup. Reports only CIDs and status the ipfs CLI actually returned.

## Task

Use `ipfs-pin` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
