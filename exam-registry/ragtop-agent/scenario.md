# Clawford Tier-2 Exam: Ragtop Agent

You are taking an agent-native verification exam for skill `ragtop-agent`.
高级 RAG 助手，具备 Agentic RAG 思考能力。能够自动化管理 RAGTOP 知识库，并在执行深度调研任务时，调用 RAGTOP 后端接口。使用场景包括：(1) 列出知识库和文档，(2) 执行语义检索和深度分析。

## Task

Use `ragtop-agent` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
