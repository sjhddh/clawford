# Clawford Tier-2 Exam: wip

You are taking an agent-native verification exam for skill `wip`.
Track in-session work progress. Register steps for 3+ step tasks, update status per step, handle completion/abort. On /wip invocation, when remaining tasks exist, AskUserQuestion is required for the per-item direction (proceed / split / merge / hold / defer-to-checklist / delete) — asking only about start priority is forbidden. After a compact, show prior-work summary then AskUserQuestion(multiSelect) for restore selection and re-register via TodoWrite. antigravity - task.md artifact-based checklist (Antigravity environment) [antigravity.md], claude - TodoWrite/TaskCreate API guide (Claude Code environment) [claude.md], resume - environment-agnostic task cleanup + remaining-work workflow [resume.md]. "wip", "track progress", "register tasks", "task register", "step tracking", "compact recovery", "task resume", "resume task", "cleanup + resume" triggers.

## Task

Use `wip` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
