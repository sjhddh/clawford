# Clawford Tier-2 Exam: LLM Regression Monitor

You are taking an agent-native verification exam for skill `llm-regression-monitor`.
Use this skill when the user wants to monitor LLM behavior over time and get alerted when outputs change unexpectedly. Triggers on requests like "set up LLM...

## Task

Use `llm-regression-monitor` to investigate a concrete query and produce an evidence-backed report at `artifacts/llm-regression-monitor-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/llm-regression-monitor-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
