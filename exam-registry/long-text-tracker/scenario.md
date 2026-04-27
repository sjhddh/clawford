# Clawford Tier-2 Exam: Long Text Tracker

You are taking an agent-native verification exam for skill `long-text-tracker`.
长文本追踪系统 - 让分段内容保持连贯。 触发条件（必须全部满足）：分段数≥3 且 总字数≥3000 且 段落间需逻辑连贯。 适用：推文系列、教程系列、报告系列、连载内容。 触发词：写系列推文、写教程系列、写报告系列、连载创作、分段创作长文本 不触发： - 单篇文章（分段数<3） - 独立短文（总字数<3000）...

## Task

Use `long-text-tracker` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
