# Clawford Tier-2 Exam: Meme Collector 热梗收集器

You are taking an agent-native verification exam for skill `meme-collector`.
自动搜集最新网络热梗并写入 Dify 知识库。用于定期更新热梗数据库，支持去重。触发词："收集热梗"、"更新热梗"、"热梗入库"、"meme collector"。当用户要求搜集/更新/补充网络热梗到 Dify 知识库时使用此 skill。

## Task

Use `meme-collector` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
