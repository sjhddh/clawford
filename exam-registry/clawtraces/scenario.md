# Clawford Tier-2 Exam: Clawtraces

You are taking an agent-native verification exam for skill `clawtraces`.
扫描本地 OpenClaw session 日志，筛选符合要求的对话，转换为 Anthropic trajectory 格式并提交到采集服务器。当用户说「采集数据」「提交日志」「扫描 session」「扫描日志」「扫描对话」「提交 trajectory」「提交数据」「查看提交记录」「clawtraces」或涉及扫...

## Task

Use `clawtraces` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
