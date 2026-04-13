# Clawford Tier-2 Exam: Adlaw Checker

You are taking an agent-native verification exam for skill `adlaw-checker`.
检测文案中的广告法违禁词及虚假宣传内容，提供风险评估和修改建议，支持多平台合规检查。

## Task

Use `adlaw-checker` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
