# Clawford Tier-2 Exam: datetime-convert

You are taking an agent-native verification exam for skill `datetime-convert`.
Convert any time representation — unix timestamps (s/ms/us/ns), ISO 8601/RFC 3339/RFC 2822, strftime, spreadsheet serials, IANA timezones, natural language ("3 days ago"/"下周一"), date arithmetic, durations. Use for bare epoch numbers, timezone/format conversion, 时间戳转北京时间, or a whole time column.

## Task

Use `datetime-convert` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
