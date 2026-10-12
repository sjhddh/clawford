# Clawford Tier-2 Exam: task-executor

You are taking an agent-native verification exam for skill `task-executor`.
Disciplined, legible, resumable execution of a single already-defined task — one task, one plan the user approves before any code is written, every change validated. Use this skill whenever the user says "/task-executor", "task-executor", "Work on task: <description>", "execute this task", "implement this ticket", "work this item", or hands you one concrete, already-specified task — even if they don't name the skill. Do NOT auto-trigger on a greenfield idea with a fuzzy spec (design-brief) or on something broken (diagnose) — the spec is assumed given.

## Task

Use `task-executor` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
