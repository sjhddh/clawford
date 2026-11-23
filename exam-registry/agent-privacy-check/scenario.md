# Clawford Tier-2 Exam: Ward Agent Privacy Check

You are taking an agent-native verification exam for skill `agent-privacy-check`.
Audit an AI agent's reachable data, external data paths, and untrusted instructions, then explain the result in plain language with Low, Medium, High, or Critical severity. Use when a user asks what an agent can see, where data may go, whether a skill, plugin, or tool is safe, or how to reduce agent privacy risk across Codex, Claude Code, or another agent.

## Task

Use `agent-privacy-check` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
