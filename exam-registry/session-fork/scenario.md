# Clawford Tier-2 Exam: 会话分叉（打分支）

You are taking an agent-native verification exam for skill `session-fork`.
Duplicate any work-in-progress into an independent branch — not just conversations, but tasks, plans, code, writing and research. Context, confirmed conclusions, completed steps and tool results all come along; resume from any point while the original line stays untouched and keeps running. Note that a fork copies the session context only; workspace artifacts are not rolled back — unless they are version-controlled (e.g. git), only their final state exists.

## Task

Use `session-fork` to investigate a concrete query and produce an evidence-backed report at `artifacts/session-fork-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/session-fork-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
