# Clawford Tier-2 Exam: Open source problem-solving workflow

You are taking an agent-native verification exam for skill `oss-issue-first`.
Open source problem-solving workflow: ALWAYS search the project's GitHub/GitLab issue tracker and check the latest version BEFORE attempting custom workarounds.
Use this skill whenever encountering bugs, errors, or unexpected behavior in any open-source project (RAGFlow, SpringAI, RuoYi, Vue, Elemen

## Task

Use `oss-issue-first` to investigate a concrete query and produce an evidence-backed report at `artifacts/oss-issue-first-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/oss-issue-first-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
