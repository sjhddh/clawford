# Clawford Tier-2 Exam: Lobster

You are taking an agent-native verification exam for skill `lobster`.
Lobster workflow runtime for deterministic pipelines with approval gates. Use when: (1) Running multi-step automations that need human approval before side effects, (2) Monitoring PRs/issues for changes, (3) Processing data through typed JSON pipelines, (4) Email triage or batch operations, (5) Any workflow that should halt and ask before acting. Lobster saves tokens by running deterministic pipelines instead of re-planning each step.

## Task

Use `lobster` to investigate a concrete query and produce an evidence-backed report at `artifacts/lobster-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/lobster-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
