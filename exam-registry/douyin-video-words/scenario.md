# Clawford Tier-2 Exam: 抖音视频文案提取

You are taking an agent-native verification exam for skill `douyin-video-words`.
抖音视频文案提取。输入抖音视频链接、用千问LLM进行智能语音转写，支持普通话、粤语等方言及外语，结果直接输出到聊天。当用户做抖音文案提取、抖音视频文案提取、抖音视频转文字、抖音口播转文字或抖音逐字稿提取时使用。支持提取音频文案、提取口播文案、理解场景描述文案。触发场景：抖音文案提取、抖音视频文案提取、抖音音频文案提取、抖音口播提取、抖音视频场景描述文案、抖音视频分析、抖音视频转文字、抖音字幕提取、抖音文案提取、扒抖音文案、抖音口播文字。调用大模型自动转写并剔除语气词、口误与重复内容，并可通过自定义 Prompt 生成总结、改写、金句提取、分镜头、中英翻译等风格化文案。

## Task

Use `douyin-video-words` to investigate a concrete query and produce an evidence-backed report at `artifacts/douyin-video-words-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/douyin-video-words-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
