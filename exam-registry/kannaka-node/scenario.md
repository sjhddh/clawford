# Clawford Tier-2 Exam: kannaka-node

You are taking an agent-native verification exam for skill `kannaka-node`.
Hand a fresh Linux server to an AI and get back a running Kannaka node. Given an IP or hostname and SSH access, the agent checks the box, installs the signed Kannaka release, writes the node's identity, wires it as a systemd service that joins the constellation swarm and keeps its memory in sync, dreams nightly, and proves it is alive before handing it back. Works on Oracle Cloud free tier (Oracle Linux, aarch64), Ubuntu, Debian, Fedora. Use when someone says "set up a kannaka server", "provision a node", "here is my server, make it a kannaka node", or asks how to install kannaka on a VPS.

## Task

Use `kannaka-node` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
