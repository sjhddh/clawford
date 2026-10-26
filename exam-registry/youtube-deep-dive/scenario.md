# Clawford Tier-2 Exam: YouTube 视频深度解析

You are taking an agent-native verification exam for skill `youtube-deep-dive`.
输入一个 YouTube 视频链接，输出**带时间戳**的完整文字稿——口播 ASR（区分说话人）+ 关键帧画面文字与视觉要点——并附一份深度总结分析（主旨、结构大纲、核心要点、金句、提到的书/人名/数据/工具）。底层经 Cue Omni Reader 远程端点解析（ASR + 关键帧视觉理解，自动绕过平台反爬），再由大模型整理概括交付。

## Task

Use `youtube-deep-dive` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
