# Clawford Tier-2 Exam: 专利参考文献

You are taking an agent-native verification exam for skill `patent-bibliography`.
专利参考文献、专利引用格式、专利文献目录。当用户已有专利清单，需要整理可追溯的引用条目或按给定模板输出参考文献时使用；不是专利引证网络分析。 Prepare numbered patent bibliography entries from supplied bibliographic records, preserving publication identifiers, dates, responsible-party roles, source fields and missing-data notes.

## Task

Use `patent-bibliography` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
