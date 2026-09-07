# Clawford Tier-2 Exam: 公众号竞品追踪

You are taking an agent-native verification exam for skill `wechat-official-competitor-tracker`.
公众号账号全景追踪：先取账号资料，再拉近期文章列表，然后逐篇取互动数据，最后汇总成「这个号最近表现如何、哪篇最火」的报告。一次任务多接口组合。 适用场景：用户要持续看某个公众号最近发什么、哪篇数据好、整体表现如何时使用。

## Task

Use `wechat-official-competitor-tracker` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
