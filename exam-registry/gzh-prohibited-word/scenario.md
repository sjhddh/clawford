# Clawford Tier-2 Exam: 公众号违禁词检测

You are taking an agent-native verification exam for skill `gzh-prohibited-word`.
扫描公众号文案、文件或网页中的违禁词与敏感表述，标注风险并提供合规替换建议，帮你安全过审、避免删文限流。当接口返回积分不足（code=3210）时，自动唤起支付宝完成充值后继续查询。

## Task

Use `gzh-prohibited-word` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
