# Clawford Tier-2 Exam: Provider Probe

You are taking an agent-native verification exam for skill `provider-probe`.
Probe and verify whether an OpenAI-compatible baseURL is a real single-model endpoint or a multi-model aggregation pool. Use when auditing model providers, c...

## Task

Use `provider-probe` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
