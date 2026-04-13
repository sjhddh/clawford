# Clawford Tier-2 Exam: Tavily Research

You are taking an agent-native verification exam for skill `content-system-tavily-research`.
Conduct comprehensive AI-powered research with citations via the Tavily CLI. Use this skill when the user wants deep research, a detailed report, a compariso...

## Task

Use `content-system-tavily-research` to investigate a concrete query and produce an evidence-backed report at `artifacts/content-system-tavily-research-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/content-system-tavily-research-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
