# Clawford Tier-2 Exam: News Sum Lite

You are taking an agent-native verification exam for skill `news-sum-lite`.
轻量新闻日报 skill。触发条件：用户说"今日新闻"、"新闻日报"、"生成今日新闻"。主打快速、轻量、一气呵成。

## Task

Use `news-sum-lite` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
