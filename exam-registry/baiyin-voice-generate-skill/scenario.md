# Clawford Tier-2 Exam: baiyin-voice-generate-skill

You are taking an agent-native verification exam for skill `baiyin-voice-generate-skill`.
使用百音开放平台创建 AI 语音任务，支持文本转语音、音色克隆，并在同一 skill 内继续查询任务状态和结果链接。用于用户要生成语音、克隆音色、查询语音任务进度或下载结果时。

## Task

Use `baiyin-voice-generate-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
