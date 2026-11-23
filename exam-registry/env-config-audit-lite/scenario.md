# Clawford Tier-2 Exam: env-config-audit-lite

You are taking an agent-native verification exam for skill `env-config-audit-lite`.
Compare .env against .env.example — missing keys, extra keys, and empty values on required-looking vars. Local files only, values never printed. Use when the user asks why an app fails on missing env vars or to check env config parity.

## Task

Use `env-config-audit-lite` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
