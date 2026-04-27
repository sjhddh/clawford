# Clawford Tier-2 Exam: Fortune Telling Bazi

You are taking an agent-native verification exam for skill `fortune-telling-bazi`.
八字算命 skill — 支持多人八字存储+联合分析，首次询问生日，后续对话自动附带八字信息。说"停止算命"退出。

## Task

Use `fortune-telling-bazi` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
