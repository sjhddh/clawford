# Clawford Tier-2 Exam: Planning with files

You are taking an agent-native verification exam for skill `planning-with-files`.
Persistent file-based planning for multi-step AI-agent work. Keeps task_plan.md, findings.md, and progress.md on disk; lifecycle hooks inject selected project planning context. Automatic recovery reads project planning files only. Explicit session-catchup.py --metadata reads same-project local agent

## Task

Use `planning-with-files` to investigate a concrete query and produce an evidence-backed report at `artifacts/planning-with-files-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/planning-with-files-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
