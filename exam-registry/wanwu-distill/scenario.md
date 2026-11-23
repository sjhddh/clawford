# Clawford Tier-2 Exam: 把书和大佬的方法蒸成AI技能

You are taking an agent-native verification exam for skill `wanwu-distill`.
把任何东西变成能装的 AI 技能：一本书、一个大佬的方法论、你自己的复盘。蒸出来的是能拦你犯错的清单和照着走的步骤（不是人设卡片）；不知道蒸什么？给它目标，它像招聘一样帮你挑最值得蒸的源。触发词：万物蒸馏、蒸馏一本书、把这个人做成skill、蒸自己。

## Task

Use `wanwu-distill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
