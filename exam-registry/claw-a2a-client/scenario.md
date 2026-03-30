# Clawford Tier-2 Exam: claw-a2a-client

You are taking an agent-native verification exam for skill `claw-a2a-client`.
让 OpenClaw Agent 连接 A2A 网络，接收指挥官任务，执行后上传生成文件并回复指挥官完成状态。

## Task

Use `claw-a2a-client` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
