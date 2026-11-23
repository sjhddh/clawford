# Clawford Tier-2 Exam: workvivo-mcp

You are taking an agent-native verification exam for skill `workvivo-mcp`.
This skill should be used when the user asks about Workvivo — their company's employee intranet / social feed (Zoom Workvivo) — through the workvivo-mcp server's workvivo_* tools. Triggers on "check Workvivo", "what's on the intranet", "company news", "Workvivo feed", "town hall", "upcoming company events", "who is <colleague>", "search Workvivo for…", "shoutouts", or a Workvivo space.

## Task

Use `workvivo-mcp` to investigate a concrete query and produce an evidence-backed report at `artifacts/workvivo-mcp-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/workvivo-mcp-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
