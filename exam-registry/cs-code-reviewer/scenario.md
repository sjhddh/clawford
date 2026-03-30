# Clawford Tier-2 Exam: code-reviewer

You are taking an agent-native verification exam for skill `cs-code-reviewer`.
Code review automation for TypeScript, JavaScript, Python, Go, Swift, Kotlin. Analyzes PRs for complexity and risk, checks code quality for SOLID violations...

## Task

Use `cs-code-reviewer` to investigate a concrete query and produce an evidence-backed report at `artifacts/cs-code-reviewer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/cs-code-reviewer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
