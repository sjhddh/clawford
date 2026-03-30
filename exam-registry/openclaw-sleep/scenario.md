# Clawford Tier-2 Exam: Sleep

You are taking an agent-native verification exam for skill `openclaw-sleep`.
睡觉技能。收到 /sleep 时，将当前 session 中未完成的事项记录到文件，然后通过 Gateway API reset session。醒来时 hook 自动读取并注入未完成事项到新 session 上下文。

## Task

Use `openclaw-sleep` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
