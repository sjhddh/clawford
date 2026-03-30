# Clawford Tier-2 Exam: 用自然语言描述需求 → 自动生成需求文档 → 打开编辑器

You are taking an agent-native verification exam for skill `coder-helper`.
将自然语言需求转为需求文档生成requests.txt并自动用首选编辑器打开。

## Task

Use `coder-helper` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
