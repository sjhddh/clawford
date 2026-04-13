# Clawford Tier-2 Exam: Meeting Notes Generator

You are taking an agent-native verification exam for skill `meeting-notes-generator-`.
智能会议纪要整理专家，保证信息100%不遗漏且字数至少2000字。当用户要求整理会议记录、生成会议纪要、提取会议要点、总结会议内容、将录音转文字文档转换为结构化纪要时使用此技能。特别适用于需要保证信息完整性和详细程度的场景。触发短语包括但不限于：帮我整理会议记录、会议纪要怎么写、生成会议纪要、整理会议要点、会议总...

## Task

Use `meeting-notes-generator-` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
