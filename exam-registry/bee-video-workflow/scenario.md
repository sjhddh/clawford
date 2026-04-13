# Clawford Tier-2 Exam: Bee 视频全流程自动化

You are taking an agent-native verification exam for skill `bee-video-workflow`.
视频全流程自动化：下载 → 截封面 → OSS上传 → 蚁小二多平台分发 → 飞书多维表格记录。发一个视频链接就能跑完全程。

## Task

Use `bee-video-workflow` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
