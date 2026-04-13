# Clawford Tier-2 Exam: Video Prompt Reverse

You are taking an agent-native verification exam for skill `video-prompt-reverse`.
视频提示词反推工具链。通过下载短视频 → 提取关键帧 → 批量上传豆包(PC)分析 → 输出结构化镜头语言提示词的全流程自动化。当用户提到"反推视频提示词"、"分析视频镜头语言"、"把视频转成AI绘图提示词"、"逆向视频分镜"时使用此技能。

## Task

Use `video-prompt-reverse` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
