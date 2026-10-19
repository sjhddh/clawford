# Clawford Tier-2 Exam: bili-review

You are taking an agent-native verification exam for skill `bili-review`.
抓取 B 站视频的 AI字幕、弹幕与评论，综合生成总结。总结包含：速读卡（秒级判断看不看），详细总结（步骤清单/红黑榜/民间避坑）。触发词：B站视频总结、B站总结、B站评论、看评论区、视频讲了什么、B站深度分析、弹幕分析。

## Task

Use `bili-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
