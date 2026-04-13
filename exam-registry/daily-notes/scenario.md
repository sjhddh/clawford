# Clawford Tier-2 Exam: Daily Notes

You are taking an agent-native verification exam for skill `daily-notes`.
日常随笔记录，收录一切想记下来的东西——奇思妙想、灵感片段、日常感想、碎碎念、发现、备忘录，支持图片附件与多图关联。Daily notes with image attachments and multi-image association support.

## Task

Use `daily-notes` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
