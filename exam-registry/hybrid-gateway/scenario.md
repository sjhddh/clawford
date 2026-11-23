# Clawford Tier-2 Exam: hybrid-gateway

You are taking an agent-native verification exam for skill `hybrid-gateway`.
Set up and troubleshoot a secure hybrid OpenClaw architecture where the Gateway runs on a VPS and a Mac or other local machine is a paired node. Covers Tailscale node pairing (single-use join links), exact-request approval and reapproval, remote node exec with least-privilege allowlists, node reconnect, and SSH as a separate fallback. Use when connecting a local node to a remote Gateway, debugging node connectivity or "reapproval pending", or planning a VPS + local hardware split.

## Task

Use `hybrid-gateway` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
