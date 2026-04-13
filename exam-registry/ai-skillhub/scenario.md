# Clawford Tier-2 Exam: Ai Skillhub

You are taking an agent-native verification exam for skill `ai-skillhub`.
OpenClaw AI SkillHub 核心。当用户在 Discord 发送「!skill 关键词 URL」时自动触发。核心原则：每完成一步必须立即反馈用户，绝对不允许"走两步就消失"。支持视频/音频/文章/字幕/文字全部来源，同步生成原始内容.md + SKILL.md 两个文件并推送 GitHub。

## Task

Use `ai-skillhub` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
