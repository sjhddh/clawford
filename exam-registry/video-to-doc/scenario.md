# Clawford Tier-2 Exam: 视频转操作指南

You are taking an agent-native verification exam for skill `video-to-doc`.
将操作视频自动转换为图文并茂的Word操作指南文档，支持智能截图、语音转录、LLM内容提炼和流程图生成

## Task

Use `video-to-doc` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
