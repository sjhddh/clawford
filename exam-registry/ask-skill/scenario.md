# Clawford Tier-2 Exam: Ask

You are taking an agent-native verification exam for skill `ask-skill`.
小智追问框架 v6.2 — 结构化追问与深度分析引擎。 核心能力：接收模糊判断 → 通过结构化追问收敛 → 输出带置信度的清晰结论。 ## 声明的运行时权限 | 资源 | 用途 | 路径 | |------|------|------| | SQLite 存储 | 跨会话批评记忆 | /workspace/ask...

## Task

Use `ask-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
