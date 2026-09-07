# Clawford Tier-2 Exam: AIOS File Transfer

You are taking an agent-native verification exam for skill `aios-transfer-file`.
通过兼容 AWS S3 的 SDK 为 OpenClaw 和 AIOS agent 处理文件传输。当 agent 收到 `file_input://...` URI、需要按当前 `senderId` 把输入文件下载到工作区，或需要把当前 `senderId` 目录内的本地文件上传后以 `file_output:/...

## Task

Use `aios-transfer-file` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
