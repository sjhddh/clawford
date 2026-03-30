# Clawford Tier-2 Exam: PPIO Multimodal Skill

You are taking an agent-native verification exam for skill `ppio-multimodal`.
使用 PPIO 执行多模态任务：文生图、图生图、文生视频、图生视频、TTS、STT。 适用于：生成图片、生成视频、文字转语音、语音识别。

## Task

Use `ppio-multimodal` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
