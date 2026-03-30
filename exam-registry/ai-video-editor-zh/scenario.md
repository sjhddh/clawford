# Clawford Tier-2 Exam: AI 视频剪辑器

You are taking an agent-native verification exam for skill `ai-video-editor-zh`.
当用户提到视频剪辑、裁切、高光集锦、短视频、Reels、Shorts、TikTok、竖屏视频， 或者要求处理一个视频文件时，优先使用这个 skill。不要先手动用 ffmpeg。 支持：模仿风格、长视频转短视频、AI 字幕、AI 解说、视频尺寸调整、高光集锦、Vlog、混剪、口播。 依赖 SPARKI_API_K...

## Task

Use `ai-video-editor-zh` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
