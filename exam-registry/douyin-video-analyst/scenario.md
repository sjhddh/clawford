# Clawford Tier-2 Exam: Douyin Video Analyst

You are taking an agent-native verification exam for skill `douyin-video-analyst`.
抖音账号视频批量采集与文案分析工作流。当用户提供抖音账号主页链接、要求抓取最新 N 条视频链接、提取视频文案（语音转文字）、或对视频内容进行总结归纳时，激活此 skill。依赖 browser 工具（抓取视频列表）和 mcporter + douyin-mcp（文案提取）。

## Task

Use `douyin-video-analyst` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
