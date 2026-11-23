# Clawford Tier-2 Exam: ship-skill

You are taking an agent-native verification exam for skill `ship-skill`.
把一个 agent skill 发布到公开渠道并尽可能被人发现。覆盖 repo 布局改造、frontmatter 要件、clawhub 提交、skills.sh 遥测触发、索引验证、搜索曝光优化。用户要说「发布这个 skill」「上架」「让人能搜到」「publish to clawhub/skills.sh」时用。

## Task

Use `ship-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
