# Clawford Tier-2 Exam: 优先级教练 Priority Coach

You are taking an agent-native verification exam for skill `priority-coach`.
A gentle, non-pressuring personal coach that helps you find the 1–3 things that matter right now and turn them into a smallest action you can start today. 优先级教练——温和、克制、不压迫，帮你从混乱里收拢重点，找出此刻最该优先的 1–3 件事，并落到今天就能开始的最小动作。Not for 团队项目管理、待办工具双向同步、或替你做人生决策。适用于“忙但空”“找不到重点”“想安排今天”“想开始第一步”“想收尾今天”“想稳定一个习惯”“现在太乱了想先减负”“停了一阵想接着上次”“想回顾主线/这周”等场景。

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
