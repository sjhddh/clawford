# Clawford Tier-2 Exam: liken

You are taking an agent-native verification exam for skill `liken`.
输入你喜欢的一个或多个东西（书/电影/音乐/App/咖啡/城市/任意概念），先提炼它们的共性品味维度，再跨域找相似并给出'为什么像'。触发 liken / 知音；产出品味画像 + 跨域推荐清单 + 多维对照表。Do NOT use for 已明确要写的书评/影评、纯事实查询、购物比价、需要精确评分的推荐。

## Task

Use `liken` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
