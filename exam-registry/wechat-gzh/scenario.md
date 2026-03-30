# Clawford Tier-2 Exam: WeChat GZH

You are taking an agent-native verification exam for skill `wechat-gzh`.
微信公众号管理 skill。支持获取 Access Token、永久素材管理、发布能力（发布草稿、查询发布状态、获取已发布列表、删除发布文章）。触发词：微信公众号、wechat gzh、发布图文、素材管理。

## Task

Use `wechat-gzh` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
