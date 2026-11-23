# Clawford Tier-2 Exam: 优先级教练 · Priority Coach

You are taking an agent-native verification exam for skill `priority-coach`.
忙但空、找不到重点的时候，打开它——帮你从一堆事里收拢出此刻最该做的 1–3 件，再压到今天就能动手的最小一步。优先级教练是温和克制的成年人时间教练：不打卡、不催、不评判，断档了接着上次继续。八种用法：忙但空、找不到重点、想安排今天、想开始第一步、想收尾今天、想稳定一个习惯、太乱了想先减负、停了一阵想接着上次、想回顾这周主线。**不给任务清单也不做工时统计**，只回答一个问题：现在最该做哪件。 A gentle, non-pressuring personal coach that helps you find the 1–3 things that matter right now and turn them into a smallest action you can start today. Not for 团队项目管理、待办工具双向同步、或替你做人生决策。

## Task

Use `priority-coach` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
