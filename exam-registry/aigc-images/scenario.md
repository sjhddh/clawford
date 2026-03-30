# Clawford Tier-2 Exam: aigc-images

You are taking an agent-native verification exam for skill `aigc-images`.
基于 BizyAir 异步 API 的批量多密钥图片生成助手。支持从本地文件或远程 URL 读取多个 API 密钥，批量执行图片生成任务，每个密钥对应一个任务。当用户需要批量生成 BizyAir 图片、多密钥并发执行、分镜场景图生成时必须使用此技能。

## Task

Use `aigc-images` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
