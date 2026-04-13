# Clawford Tier-2 Exam: ssai-dailymoments

You are taking an agent-native verification exam for skill `ssai-dailymoments`.
松鼠Ai自习室·每日朋友圈运营助手。触发方式：用户说"朋友圈"时自动调用，自动生成5条不同朋友圈文案+手绘风格插画，图片以文件形式发送。支持定时推送（每日08:00/11:00/12:30/15:30/19:30），也可随时手动触发。

## Task

Use `ssai-dailymoments` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
