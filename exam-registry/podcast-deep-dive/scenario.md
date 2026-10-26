# Clawford Tier-2 Exam: 播客深度提取转文字

You are taking an agent-native verification exam for skill `podcast-deep-dive`.
输入一期播客（小宇宙、喜马拉雅）链接，输出**带时间戳、区分说话人**的完整文字稿，并附一份深度总结分析（主旨、结构大纲、分人对谈要点、金句、提及的书/人名/数据）。底层经 Cue Omni Reader 远程端点解析（ASR + 说话人分离，自动绕过平台反爬），再由大模型按播客场景加工交付。

## Task

Use `podcast-deep-dive` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
