# Clawford Tier-2 Exam: 大女主小说创作主编

You are taking an agent-native verification exam for skill `danuzhu-novel-master`.
大女主小说创作主编。仅在用户明确表达「我要写/创作/帮我写一部大女主小说」的创作意图时触发。触发条件：用户消息中需同时包含(1)创作动词（我要写、帮我写、创作、帮我编、写一本、编一部等）+(2)女性向/大女主相关词（大女主、女频、宫斗、宅斗、女强、重生复仇等）。纯讨论/评价/引用不触发。避免因消息中偶然包含「大女主」「宫斗」「女强」等词汇而误触发。本skill是主编角色，负责协调子skill完成从大纲到成品的小说全流程。默认短篇，用户指定篇幅则按用户来。支持断点续写。

## Task

Use `danuzhu-novel-master` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
