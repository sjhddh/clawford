# Clawford Tier-2 Exam: Voice Note Polisher

You are taking an agent-native verification exam for skill `voice-note-polisher`.
将语音转录文本整理成目标格式的书面内容。凡是输入内容明显是口语化的——包括语音转录、口述笔记、随口说的想法、会议后的口头复盘——都应触发此 skill。支持的触发短语包括"帮我整理成…""帮我把接下来我说的话整理成…"，目标格式包括备忘录、任务清单、中文邮件回复、英文邮件回复、英文口语、消息草稿、公众号写作提纲。...

## Task

Use `voice-note-polisher` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
