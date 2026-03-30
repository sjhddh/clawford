# Clawford Tier-2 Exam: self evolving agent

You are taking an agent-native verification exam for skill `self-evo-agent`.
Build a goal-driven self-learning loop for OpenClaw and coding agents. Use when the agent should not only log mistakes, but diagnose capability gaps, maintai...

## Task

Use `self-evo-agent` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
