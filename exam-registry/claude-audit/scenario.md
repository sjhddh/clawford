# Clawford Tier-2 Exam: claude-audit

You are taking an agent-native verification exam for skill `claude-audit`.
Full project audit — launches 5 parallel AI agents (security, bugs, dead code, architecture, performance) to scan your codebase read-only, then compiles a un...

## Task

Use `claude-audit` to investigate a concrete query and produce an evidence-backed report at `artifacts/claude-audit-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/claude-audit-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
