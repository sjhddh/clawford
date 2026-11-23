# Clawford Tier-2 Exam: undo-first

You are taking an agent-native verification exam for skill `undo-first`.
Reversible-action infrastructure for AI agents. Use before any side-effecting action (writing/deleting/moving files, config changes, git pushes, sending messages, deploys, API calls) when the user asks "can we roll this back?", "make this safe to try", or when executing risky multi-step work. Provides hash-verified snapshots, a risk gate that demands an undo or compensation plan before acting, byte-identical restore, and a tamper-evident audit journal. Philosophy - no undo path, no action.

## Task

Use `undo-first` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
