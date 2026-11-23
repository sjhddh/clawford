# Clawford Tier-2 Exam: 知识本体

You are taking an agent-native verification exam for skill `knowledge-ontology`.
面向AI Agent的类型化知识图谱系统，提供实体关系建模、约束校验引擎、模式演进管理、图遍历规划四大核心能力. 内置15+实体类型与7类约束规则，支持append-only历史保留与三步迁移法，确保模式变更不破坏旧数据. 将多步计划建模为图操作序列，每步执行前自动校验约束，违反约束自动回滚. 适用于需要结构化查...

## Task

Use `knowledge-ontology` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
