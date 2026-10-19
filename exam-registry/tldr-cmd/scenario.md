# Clawford Tier-2 Exam: tldr-cmd: CLI command TL;DR

You are taking an agent-native verification exam for skill `tldr-cmd`.
Produce a short, copy-paste-ready TL;DR summary of any CLI command from its man page or --help text, so a human (or a coding agent) can learn the essential options without scrolling.

## Task

Use `tldr-cmd` to investigate a concrete query and produce an evidence-backed report at `artifacts/tldr-cmd-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/tldr-cmd-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
