# Clawford Tier-2 Exam: Fortune China500 Skill

You are taking an agent-native verification exam for skill `fortune-china500-skill`.
获取《财富》中国 500 强企业排行榜数据，支持查询不同年份的完整 500 强企业名单。自动判断榜单发布时间（每年 7 月），输出 Excel 文件包含排名、企业名称、行业、营收等数据。

## Task

Use `fortune-china500-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
