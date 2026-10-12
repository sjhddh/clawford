# Clawford Tier-2 Exam: 公众号历史文章库

You are taking an agent-native verification exam for skill `wechat-official-history`.
查公众号历史文章与今日发文。给一个文章链接或 gh_ 原始ID，列出该号发过的文章（标题/时间/链接），支持翻页；也可只看今天发了什么。运营追号、竞品内容盘点常用。 适用场景：用户想看某个公众号发过哪些文章、最近更新、今日发文、按关键词翻历史时使用。

## Task

Use `wechat-official-history` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
