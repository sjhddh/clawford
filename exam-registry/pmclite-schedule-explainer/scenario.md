# Clawford Tier-2 Exam: 排产结果解释

You are taking an agent-native verification exam for skill `pmclite-schedule-explainer`.
解读已有排程：这张单为什么落在这一天、这条线，工时按哪种模型算出来，被谁挤占而顺延，降级标记又是什么意思。 用户说“这张单为什么排在 11 月 20 日”“工时怎么算出来的”“怎么突然变成 106 天”“为什么不在原来那条线”“降级是什么意思”“帮我把这个日期讲清楚”时使用。 不触发：需要重新算一遍或写回系统（用 pmclite-scheduler）、查缺料、测算急单影响、做周汇总。

## Task

Use `pmclite-schedule-explainer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
