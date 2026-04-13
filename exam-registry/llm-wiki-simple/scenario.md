# Clawford Tier-2 Exam: llm-wiki-simple

You are taking an agent-native verification exam for skill `llm-wiki-simple`.
自动扫描原始资料，分类整理并格式化生成结构化个人知识库，支持分类、更新和索引管理。

## Task

Use `llm-wiki-simple` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
