# Clawford Tier-2 Exam: OpenClaw大众点评

You are taking an agent-native verification exam for skill `openclaw-dianping`.
查询大众点评餐厅信息。使用场景：(1) 用户要查询某家餐厅的评分、人均消费、地址 (2) 用户要搜索特定菜系或区域的餐厅推荐 (3) 用户要获取附近美食推荐。登录账号：一定S。重要：搜索时URL需包含城市ID（如hangzhou页面），账号定位北京时需使用URL参数方式绕过。

## Task

Use `openclaw-dianping` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
