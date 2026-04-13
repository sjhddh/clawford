# Clawford Tier-2 Exam: Claude Usage Analyzer

You are taking an agent-native verification exam for skill `claude-usage-analyzer`.
Analyze Claude Code token usage. Shows where tokens went, which projects cost most, and how to reduce waste. Use when user asks about token usage, costs, or...

## Task

Use `claude-usage-analyzer` to investigate a concrete query and produce an evidence-backed report at `artifacts/claude-usage-analyzer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/claude-usage-analyzer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
