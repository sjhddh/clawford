# Clawford Tier-2 Exam: ym-review-triage-reply

You are taking an agent-native verification exam for skill `ym-review-triage-reply`.
对差评做归因分类，给出是否需私下跟进的判定和可直接发送的回复草稿，回复不推诿、不过度承诺。当用户说「这个差评怎么回」「差评归因」「处理评价」时使用。 也适用于「客户投诉」「review reply」这类说法。

## Task

Use `ym-review-triage-reply` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
