# Clawford Tier-2 Exam: prompt-injection-drill

You are taking an agent-native verification exam for skill `prompt-injection-drill`.
prompt-injection-drill — 为你的 system prompt 生成 8 类注入攻击演练用例（角色覆盖/指令覆盖/诱导泄密/编码绕过/工具滥用/越权伪造/长程拖延/拒绝绕过）+ 期望行为清单，供上线前红队自测。

## Task

Use `prompt-injection-drill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
