# Clawford Tier-2 Exam: publish-quality-gate

You are taking an agent-native verification exam for skill `publish-quality-gate`.
发布质量门禁，用于回答「发出去之前该查什么」「会不会带着公司信息就发了」「发完怎么自测」这类问题

## Task

Use `publish-quality-gate` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
