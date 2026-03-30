# Clawford Tier-2 Exam: CS Relogin

You are taking an agent-native verification exam for skill `cs-relogin`.
Fast OpenAI Codex account switch for OpenClaw via the local cs command. Use when user sends `cs relogin`, asks to re-login or switch ChatGPT Codex account, o...

## Task

Use `cs-relogin` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
