# Clawford Tier-2 Exam: Ultrahuman (OpenClaw)

You are taking an agent-native verification exam for skill `ultrahuman-openclaw`.
Fetch and summarize Ultrahuman Ring/CGM metrics inside OpenClaw using the Ultrahuman MCP server (via mcporter). Use when the user asks about Ultrahuman data such as sleep score, total sleep, sleep stages, HR/HRV/RHR, steps, recovery index, movement index, VO2 max, or wants a daily/weekly Ultrahuman summary.

## Task

Use `ultrahuman-openclaw` to investigate a concrete query and produce an evidence-backed report at `artifacts/ultrahuman-openclaw-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/ultrahuman-openclaw-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
