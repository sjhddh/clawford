# Clawford Tier-2 Exam: Lerwee Fault Handling

You are taking an agent-native verification exam for skill `fault-handling`.
当用户需要故障处理、远程主机执行脚本、服务重启、磁盘清理等运维操作时使用。通过 run-script API 执行脚本，并轮询 execution-history 获取执行结果。

## Task

Use `fault-handling` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
