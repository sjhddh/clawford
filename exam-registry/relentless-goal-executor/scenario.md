# Clawford Tier-2 Exam: Relentless Goal-Executor

You are taking an agent-native verification exam for skill `relentless-goal-executor`.
死磕目标执行器：用户提供目标后先锁定成功标准与证据清单，盘点可用手段建弹药库，分解里程碑链，以"计划-执行-证据验证-诊断换道"循环誓不罢休推进直至达成。支持会话内死磕与心跳续跑（定时跨会话续命）两种模式，内置合规白名单、敏感操作分档确认与四停止门。触发词：死磕目标、不达不休、目标执行器、死磕、relentless goal、meta-skill-system。

## Task

Use `relentless-goal-executor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
