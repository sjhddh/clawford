# Clawford Tier-2 Exam: CMS Meeting Materials

You are taking an agent-native verification exam for skill `cms-meeting-materials`.
CMS 会议素材镜像能力（会记/慧记/会议纪要）：基于 appKey 自动发现可访问会议或使用已知 meetingChatId，拉取并持续同步会议转写文本到本机共享目录（~/.openclaw/cms-meeting-materials/{gateway}/{meetingChatId}）。用于为后续总结/问答/...

## Task

Use `cms-meeting-materials` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
