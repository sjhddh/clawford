# Clawford Tier-2 Exam: Agenter Coder

You are taking an agent-native verification exam for skill `agenter-coder`.
Delegate coding tasks to a separate autonomous agent with AST validation, security scanning, and automatic retry. Supports 4 backends (Claude Code, Codex, Op...

## Task

Use `agenter-coder` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
