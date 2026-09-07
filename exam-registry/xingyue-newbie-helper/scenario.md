# Clawford Tier-2 Exam: 星月新人助手

You are taking an agent-native verification exam for skill `xingyue-newbie-helper`.
星月写作平台新人助手。覆盖长篇小说 / 短篇小说 / 动态漫·沙雕漫 / 剧本 / 脑洞生成 五大创作场景。聚合星月官方 B 站视频教程、论坛精品贴、模型测评、投稿变现指南，并根据用户场景路由到对应资源。Use when user asks about 星月写作, xingyuexiezuo, 长篇开书, 章纲续写流, 短篇过稿, 番茄签约, 动态漫, 沙雕漫, 剧本创作, 小说改编剧本, 脑洞生成, 网络小说投稿, or mentions xingyuexiezuo.com.

## Task

Use `xingyue-newbie-helper` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
