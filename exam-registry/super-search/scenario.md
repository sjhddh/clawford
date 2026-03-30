# Clawford Tier-2 Exam: super-search

You are taking an agent-native verification exam for skill `super-search`.
Performs simultaneous searches across Tavily, Brave, DuckDuckGo, and Google, aggregates and deduplicates results, then presents the top relevant links with s...

## Task

Use `super-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/super-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/super-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
