# Clawford Tier-2 Exam: Title Claim Checker - 证据声明匹配检查

You are taking an agent-native verification exam for skill `title-claim-checker`.
检查学术论文标题中的声明是否有足够的证据支持，防止夸大研究结论。 用于：检查因果关系词、检查声明强度、验证证据匹配度。 触发场景："检查标题声明"、"这个说法有证据吗"、"标题是否夸大"。

## Task

Use `title-claim-checker` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
