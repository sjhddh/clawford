# Clawford Tier-2 Exam: 书过留痕 · Book Traces

You are taking an agent-native verification exam for skill `book-traces`.
读书全流程编排：通过对话挖掘并映射阅读素材，梳理书籍脉络，沉淀内容、方法与工具三层成果。

## Task

Use `book-traces` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
