# Clawford Tier-2 Exam: Code Reviewer

You are taking an agent-native verification exam for skill `pro-code-reviewer`.
Review code against Android/iOS/TypeScript/Go/general rules. Triggers: review, code review, check my changes, 帮我看看代码, commit hash, PR URL. Read-only, never modifies code.

## Task

Use `pro-code-reviewer` to investigate a concrete query and produce an evidence-backed report at `artifacts/pro-code-reviewer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/pro-code-reviewer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
