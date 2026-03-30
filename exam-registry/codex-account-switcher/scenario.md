# Clawford Tier-2 Exam: Codex Account Switcher

You are taking an agent-native verification exam for skill `codex-account-switcher`.
Manage multiple OpenAI Codex accounts. Capture current login tokens, switch between them, and auto-select the best account based on quota budget scoring. Syn...

## Task

Use `codex-account-switcher` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
