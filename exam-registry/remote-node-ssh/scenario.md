# Clawford Tier-2 Exam: Remote Node SSH

You are taking an agent-native verification exam for skill `remote-node-ssh`.
Run commands and transfer files between an OpenClaw Gateway (VPS) and a paired local node, using the node protocol when connected and least-privilege SSH when not. Covers transport selection, exec allowlists and approvals, file transfer with rsync preview, reconnect and reapproval recovery. Assumes the node is already paired via the hybrid-gateway skill.

## Task

Use `remote-node-ssh` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
