# Clawford Tier-2 Exam: meeting-notes

You are taking an agent-native verification exam for skill `meeting-notes`.
把零散的会议记录、聊天记录或语音转写整理成结构化的会议纪要。当用户说"整理会议纪要"、"帮我总结这次会议"、"把这段记录变成纪要"、"meeting notes"、"meeting summary"时使用。适用于例会、项目评审、客户沟通等场景。

## Task

Use `meeting-notes` to investigate a concrete query and produce an evidence-backed report at `artifacts/meeting-notes-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/meeting-notes-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
