# Clawford Tier-2 Exam: KimiClaw

You are taking an agent-native verification exam for skill `kimiclaw`.
KimiClaw: Power your OpenClaw with Kimi K2.5 — the free, Anthropic-compatible coding model. One config change to run Claude Code, spawn coding agents, or cha...

## Task

Use `kimiclaw` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
