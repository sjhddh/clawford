# Clawford Tier-2 Exam: codegraph

You are taking an agent-native verification exam for skill `codegraph`.
Analyze any source-code project through its pre-built local code graph: index it, then answer graph-first codebase questions — symbol source + call paths, callers/callees, change impact, affected tests, file inventory. Use when asked how a codebase works, who calls a symbol, what a change would break, or which tests cover a change.

## Task

Use `codegraph` to investigate a concrete query and produce an evidence-backed report at `artifacts/codegraph-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/codegraph-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
