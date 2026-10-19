# Clawford Tier-2 Exam: pikpak-magnet-pipeline

You are taking an agent-native verification exam for skill `pikpak-magnet-pipeline`.
PikPak 单资源持久分步管道：一次创建、按任务 ID 查询、单文件落盘收据、人工核验后仅打印清理建议。 适用于磁力/链接到本地及临时云副本。目录型 BT、无人值守删除和服务端 exactly-once 不在实现范围。 Use when downloading one magnet or link from PikPak to local disk in explicit steps, then deciding what to clean up in the cloud. One resource, one state file, one receipt; folder BT, unattended deletion and exactly-once are out of scope.

## Task

Use `pikpak-magnet-pipeline` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
