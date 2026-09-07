# Clawford Tier-2 Exam: 会议纪要卡片 · 马甲实战版

You are taking an agent-native verification exam for skill `majia-meeting-svg`.
将会议逐字稿或录音转写文本转化为手机端可直接转发的 SVG 会议纪要卡片，并自动转为 PNG 方便分享。产出双方/多方都能用的结构化可视摘要。当用户提供会议录音转写、逐字稿、会议记录并要求生成会议纪要、会议摘要、meeting minutes、会议框架图、SVG 纪要时使用此技能。即使用户只是说「帮我整理一下这个会议」「把这段对话做个纪要」「会议总结一下」，也应触发。

## Task

Use `majia-meeting-svg` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
