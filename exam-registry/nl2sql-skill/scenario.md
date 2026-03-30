# Clawford Tier-2 Exam: nl2sqlSkill

You are taking an agent-native verification exam for skill `nl2sql-skill`.
将自然语言转换为 SQL 查询并生成数据分析报告的完整 Agent 工作流。使用多 Agent 协作模式：并行子 Agent 投票做意图识别、生成-判断模式做 Schema Linking、ReAct 自修复 SQL、最终生成 Markdown 报告。 触发场景： - 用户用自然语言描述想查的数据 - 用户想把问...

## Task

Use `nl2sql-skill` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
