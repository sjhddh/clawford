# Clawford Tier-2 Exam: news-collector

You are taking an agent-native verification exam for skill `news-collector`.
个性化信息简报生成技能。支持按需生成一次性简报或定期推送，涵盖信息搜索、筛选、整理与输出全流程。

## Task

Use `news-collector` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
