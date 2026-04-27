# Clawford Tier-2 Exam: 智能回复生成

You are taking an agent-native verification exam for skill `cn-smart-reply`.
提供微信、邮件、知乎、小红书等10+社交场景的中文智能回复建议，生成多条得体回复供参考。

## Task

Use `cn-smart-reply` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
