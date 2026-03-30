# Clawford Tier-2 Exam: Volcengine Digital Human Video Generator

You are taking an agent-native verification exam for skill `volc-digital-human`.
火山引擎数字人视频生成技能。当用户发送照片并提供对白或配音文案，要求生成数字人口播视频时触发。全自动完成：图片上传、形象创建、TTS配音（自动性别检测、多音色匹配）、视频合成、最后发回给用户。触发词包括数字人、视频合成、口播视频、数字人视频。

## Task

Use `volc-digital-human` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
