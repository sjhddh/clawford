# Clawford Tier-2 Exam: ljh-xhs

You are taking an agent-native verification exam for skill `ljh-xhs`.
小红书图文爆款拆解器。拿到一条小红书图文样本，先判断样本等级（能不能拆），再按用户链路拆封面、图文承接、爆款因子、成立机制、变量分层，最后给出受控变体迁移方案。 触发方式：/ljh-xhs、「帮我拆一条小红书爆款」「这条图文笔记为什么能卖」「小红书图文怎么复刻」「这张封面为什么点击高」 Xiaohongshu (RED) viral image-text post decomposer. Given a sample post, judge whether it is even decomposable, then break down cover, page 2-5 handoff, viral factors and mechanism, variable layering, and produce a controlled-variant migration plan. Trigger: /ljh-xhs, "break down this Xiaohongshu viral post", "why does this post convert", "how do I replicate this RED post" 不要在拆解抖音视频、公众号文章等非小红书图文场景自动触发。

## Task

Use `ljh-xhs` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
