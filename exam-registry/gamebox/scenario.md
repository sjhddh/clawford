# Clawford Tier-2 Exam: Gamebox

You are taking an agent-native verification exam for skill `gamebox`.
多人游戏引擎框架 — 5 款游戏共用一套回合/状态/消息系统。 支持文字冒险、狼人杀、小说接龙、夺旗战、文明模拟。 LLM 负责叙事和动态内容生成，脚本负责状态管理和规则执行。 纯 Python 标准库，零外部依赖，跨 Windows/macOS/Linux。 通信基于共享目录，多 Agent 可同时参与。

## Task

Use `gamebox` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
