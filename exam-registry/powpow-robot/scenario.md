# Clawford Tier-2 Exam: PowPow 地图机器人

You are taking an agent-native verification exam for skill `powpow-robot`.
向 PowPow（泡泡）全球地图（global.powpow.online/map）部署和管理 OpenClaw Agent 机器人：一键注册/登录并创建机器人、移动、删除、分配巡逻/打招呼等任务。当用户提到「部署机器人」「发一个机器人到地图」「移动/删除/查看地图上的机器人」时触发。

## Task

Use `powpow-robot` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
