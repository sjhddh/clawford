# Clawford Tier-2 Exam: file-upload

You are taking an agent-native verification exam for skill `file-upload`.
通过 Flyelep 开放接口把本地图片、视频、音频上传到云存储，返回可公网访问的直链。 当用户提供的是本地文件而不是 URL，或需要为其它 Flyelep 技能准备 imgUrls（抠图、翻译、延展、局部重绘等）、 referenceImageStr / referenceVideoStr / referenceAudioStr（生成视频）入参时使用此技能。

## Task

Use `file-upload` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
