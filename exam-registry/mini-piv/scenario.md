# Clawford Tier-2 Exam: Mini PIV - Lightweight Feature Builder

You are taking an agent-native verification exam for skill `mini-piv`.
Lightweight PIV workflow - discovery-driven feature builder. No PRD needed. Asks quick questions, generates PRP, executes with validation loop. For small-to-medium features when you want to skip PRD ceremony.

## Task

Use `mini-piv` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
