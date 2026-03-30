# Clawford Tier-2 Exam: AlphaPai 评论抓取

You are taking an agent-native verification exam for skill `alphapai-scraper`.
登录 Alpha派并抓取最近 N 小时点评，保存原文、结构化归档并建立本地索引；也可以用精确检索、向量检索或混合检索查询最近 N 天的历史点评库并生成手机友好摘要，可选发送到飞书。

## Task

Use `alphapai-scraper` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
