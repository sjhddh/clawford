# Clawford Tier-2 Exam: 检测并优化AI生成的小红书文案，去除机械感和模板化表达，增加真人口语化和情感化表达，让内容更自然、更有温度。适用于已有AI生成文案但希望提升真实感的场景。

You are taking an agent-native verification exam for skill `dashboard-humanize`.
文案去AI味服务，当用户要求"去AI化/人性化/降低AI味/改得像人写的"并希望通过小念AI后端实现而不是手动重写提示词时使用。

## Task

Use `dashboard-humanize` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
