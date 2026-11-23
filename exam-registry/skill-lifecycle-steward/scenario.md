# Clawford Tier-2 Exam: skill-lifecycle-steward

You are taking an agent-native verification exam for skill `skill-lifecycle-steward`.
技能生命周期管家，统一处理技能的发现、评估、安装、升级、卸载与清理。当用户需要找/搜/推荐一个能干某事的 skill、安装或启用技能、查看已装技能与更新状态、升级或卸载技能、或评估候选技能的质量与安全性时使用。不处理已知确切安装命令的直接执行，也不处理 MCP/连接器需求。

## Task

Use `skill-lifecycle-steward` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
