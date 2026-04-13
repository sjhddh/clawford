# Clawford Tier-2 Exam: Meeting Copilot

You are taking an agent-native verification exam for skill `meeting-copilot`.
会议运营 Copilot — 支持会前 briefing 生成、会中结构化纪要整理、会后待办追踪与 follow-up 草稿。面向需要系统性管理会议全生命周期的职场人士。提供 boss mode（向上汇报视角）和 executor mode（向下追踪视角）两种输出格式。⚠️ 不提供实时语音转录、日历集成或自动提醒。

## Task

Use `meeting-copilot` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
