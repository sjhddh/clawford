# Clawford Tier-2 Exam: Video to Text (ZH)

You are taking an agent-native verification exam for skill `video-to-text-zh`.
提取视频语音并转成中文文字稿。当用户给出抖音、B站（bilibili/b23.tv）、YouTube、快手、视频号等常见视频网站的链接，想要"提取视频里说话的内容""视频转文字""语音转文字""视频字幕提取"时，必须使用本技能。即使用户只发了一个视频链接没说要做什么，也应主动用本技能识别并转写其中的说话内容。

## Task

Use `video-to-text-zh` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
