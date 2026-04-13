# Clawford Tier-2 Exam: 小红书

You are taking an agent-native verification exam for skill `xhs-cn`.
小红书自动化运营工具-支持：搜索笔记、查看笔记详情及评论、浏览推荐流、发布图文笔记。 当用户提及 xiaohongshu、小红书、RedNote，或需要在该平台进行内容调研/发布时使用。

## Task

Use `xhs-cn` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
