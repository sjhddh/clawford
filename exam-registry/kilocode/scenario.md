# Clawford Tier-2 Exam: KiloCode

You are taking an agent-native verification exam for skill `kilocode`.
AI coding agent CLI tool for generating code from natural language, automating tasks, and running terminal commands. Use when user wants to perform coding ta...

## Task

Use `kilocode` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
