# Clawford Tier-2 Exam: wilma

You are taking an agent-native verification exam for skill `wilma`.
Access Finland's Wilma school system from AI agents. Fetch schedules, homework, exams, grades and the gradebook, lesson notes (merkinnät) and absence summaries, messages with replies, news, printouts and linked news resources — through the WilmAI MCP tools (`wilma_*`) when connected, or the wilma CLI. Start with a summary, drill into messages and news, and fetch linked attachments. Requires wilma-cli 2.0+.

## Task

Use `wilma` to investigate a concrete query and produce an evidence-backed report at `artifacts/wilma-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/wilma-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
