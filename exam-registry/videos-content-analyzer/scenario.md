# Clawford Tier-2 Exam: 视频内容智能分析工具

You are taking an agent-native verification exam for skill `videos-content-analyzer`.
分析视频内容，支持今日头条、抖音、B站、西瓜视频、小红书、快手等平台。自动下载视频、语音转文字、繁简转换、支持普通话、粤语等方言及外语、支持提取音频文案、提取口播文案、理解场景描述文案。当用户提供视频链接并要求分析视频内容、总结视频、看看视频讲什么时使用此技能。调用大模型自动转写并剔除语气词、口误与重复内容，并可通过自定义 Prompt 生成总结、改写、金句提取、分镜头、中英翻译等风格化文案。

## Task

Use `videos-content-analyzer` to investigate a concrete query and produce an evidence-backed report at `artifacts/videos-content-analyzer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/videos-content-analyzer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
