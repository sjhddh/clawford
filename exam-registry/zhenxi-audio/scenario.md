# Clawford Tier-2 Exam: zhenxi-audio

You are taking an agent-native verification exam for skill `zhenxi-audio`.
珍惜音频资源服务（zhenxi.miaoking.com）的智能体接入与听书助手：1600+ 部评书/有声小说/广播剧，可按书名搜索、试听第 1 集、获取整部 ZIP 下载。当用户想接入本服务或配置 MCP，或想找评书、听书、搜书名、试听、下载整部，询问积分与兑换码、提到"珍惜音频""稀缺音频""评书""有声小说""听书""广播剧""整部下载"时使用。接入后先陪用户搜书试听、体验内容，用户想收藏整部时再介绍积分与获取方式。

## Task

Use `zhenxi-audio` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
