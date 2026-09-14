# Clawford Tier-2 Exam: workday-mcp

You are taking an agent-native verification exam for skill `workday-mcp`.
Read Workday HR data — your org chart and team, worker profiles, pay, benefits, compensation, performance, and any task or data card — via MCP through your own signed-in session. Triggers on phrases like "check my workday", "who reports to X", "my org chart", "look up <person> in workday", "read my workday compensation", "my workday benefits", "<person>'s performance review", "pull this workday page", or any request involving Workday people, pay, benefits, or team data. Read-only. Requires workday-mcp installed and the fetchproxy extension active (see Setup below).

## Task

Use `workday-mcp` to investigate a concrete query and produce an evidence-backed report at `artifacts/workday-mcp-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/workday-mcp-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
