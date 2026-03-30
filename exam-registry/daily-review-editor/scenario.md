# Clawford Tier-2 Exam: Daily Review Editor

You are taking an agent-native verification exam for skill `daily-review-editor`.
将 Digest 候选进一步精选为 Daily Review 日报：合并同一事件、提炼主题、分配栏目、突出重点。用于需要把预处理后的候选内容组织成真正可读的每日重点综述时。

## Task

Use `daily-review-editor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
