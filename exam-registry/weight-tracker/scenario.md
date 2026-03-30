# Clawford Tier-2 Exam: 减肥打卡记录

You are taking an agent-native verification exam for skill `weight-tracker`.
减肥进度追踪助手。用户告诉 AI 今天的体重，AI 自动帮您记录并生成漂亮的图表，清晰展示减肥进度。支持中英文界面，macOS/Windows/Linux 多平台使用。当用户说"记录体重"、"今天体重"、"减肥打卡"、"体重多少"时自动触发。

## Task

Use `weight-tracker` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
