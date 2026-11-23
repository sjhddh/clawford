# Clawford Tier-2 Exam: Typora 主题工程 · Lite（hekouwang）

You are taking an agent-native verification exam for skill `hekouwang-typora-theme-skill`.
当需要改 Typora 主题配色/字号/行高、用 tokens 生成 CSS、采样真实色值、排查主题不生效或发布主题库时使用

## Task

Use `hekouwang-typora-theme-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
