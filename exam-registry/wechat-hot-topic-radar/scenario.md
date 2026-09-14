# Clawford Tier-2 Exam: 热点选题雷达

You are taking an agent-native verification exam for skill `wechat-hot-topic-radar`.
选题灵感雷达（部分免费）：全网热搜榜（微博/抖音/知乎/头条/百度）、低粉爆文榜单、搜一搜联想推荐词。帮运营快速找到今天能写、能拍的选题方向。 适用场景：用户想找热点选题、看各平台热搜、找低粉爆文参考、拓展关键词时使用。

## Task

Use `wechat-hot-topic-radar` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
