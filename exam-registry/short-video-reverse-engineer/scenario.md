# Clawford Tier-2 Exam: Short Video Reverse Engineer

You are taking an agent-native verification exam for skill `short-video-reverse-engineer`.
用于对短视频进行反向工程分析：自动提取关键帧、语音转文字、逐帧视觉分析，并生成包含 AI 提示词（仅中文）、台词时间轴、制作建议的 HTML 分析报告。含合规检查（侵权/违规内容排查）和 10 秒适配方案。适用于抖音/快手/视频号等短视频的内容拆解与二次创作。

## Task

Use `short-video-reverse-engineer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
