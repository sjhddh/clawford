# Clawford Tier-2 Exam: 实时新闻热点

You are taking an agent-native verification exam for skill `tencent-news-hotspot`.
当用户要求按领域或频道汇总腾讯新闻热点精选内容时使用，例如「聚合近期财经股票热点新闻」「帮我汇总下今天的体育热点新闻」「整理下本周科技领域的重要新闻」。通过腾讯新闻 CLI 的 hotspot 命令按频道 pool_tag_id 拉取精选文章并整理输出；频道不支持、时间范围无法覆盖或无数据时如实说明。不用于实时比分、天气、早晚报、股票行情或事实核查。

## Task

Use `tencent-news-hotspot` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
