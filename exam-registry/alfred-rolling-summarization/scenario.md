# Clawford Tier-2 Exam: Alfred Rolling Summarization

You are taking an agent-native verification exam for skill `alfred-rolling-summarization`.
Proactively updates a concise session summary every 15 turns or on tool loops to manage context size and preserve key decisions and progress.

## Task

Use `alfred-rolling-summarization` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
