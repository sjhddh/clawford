# Clawford Tier-2 Exam: Heartflow Skillhub V2

You are taking an agent-native verification exam for skill `heartflow-v5`.
统一整合版：claude-heartflow-skill (v2.8.0) + mark-heartflow-skill (v5.7.3) 290+ 模块，25 个 MCP 工具，零外部依赖，覆盖认知/记忆/情绪/哲学/自愈/决策/代码/意识。 **需要用户明确授权的能力：** - 代码执行 (new Funct...

## Task

Use `heartflow-v5` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
