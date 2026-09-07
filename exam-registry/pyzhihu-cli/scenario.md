# Clawford Tier-2 Exam: Pyzhihu Cli

You are taking an agent-native verification exam for skill `pyzhihu-cli`.
知乎 CLI (pyzhihu-cli)：搜索、热榜、问题/回答/评论、推荐 Feed、用户资料、发想法/提问/文章、删自己的内容、点赞关注、收藏与通知。Agent 代执行 zhihu 命令，Cookie 仅存本地。

## Task

Use `pyzhihu-cli` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
