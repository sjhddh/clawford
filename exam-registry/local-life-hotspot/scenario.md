# Clawford Tier-2 Exam: Local Life Hotspot

You are taking an agent-native verification exam for skill `local-life-hotspot`.
搜索当天真实热门话题，选择一个深度创作，生成简约图片，自动发布。

## Task

Use `local-life-hotspot` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
