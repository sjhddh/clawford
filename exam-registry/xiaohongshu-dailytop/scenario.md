# Clawford Tier-2 Exam: 小红书每日爆款笔记

You are taking an agent-native verification exam for skill `xiaohongshu-dailytop`.
小红书每日爆款笔记是追踪小红书各领域每日趋势，监测不同领域的实时热度变化，识别正在起量的内容方向，预判下一波流量风口。最终基于当日爆款内容，提炼可复用的选题、话术与呈现形式，生成创作灵感。支持分类查询当日热门笔记，按美妆、穿搭、美食等分类检索小红书当天热度最高的笔记，快速掌握各赛道头部内容。当接口返回积分不足（code=3210）时，自动唤起支付宝完成充值后继续查询。

## Task

Use `xiaohongshu-dailytop` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
