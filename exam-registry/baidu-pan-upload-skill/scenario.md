# Clawford Tier-2 Exam: Baidu Pan Upload

You are taking an agent-native verification exam for skill `baidu-pan-upload-skill`.
百度网盘文件上传，支持分片上传、断点续传和进度监控。触发词：百度网盘上传、baidu pan upload、上传文件到网盘、upload to baidu pan、断点续传。适用场景：(1)上传本地文件到百度网盘指定目录 (2)大文件自动分片上传 (>4MB) (3)中断后断点续传 (4)自动创建远程目录。

## Task

Use `baidu-pan-upload-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
