# Clawford Tier-2 Exam: design-brief

You are taking an agent-native verification exam for skill `design-brief`.
Turn a vague feature idea into an approved design brief — a file recording the intent, every decision made (with why and cost-if-wrong), scope boundaries, exact interfaces, and constraints — that task-executor, backlog-planner, and autopilot then consume as the spec. Produces decisions, not code; nothing is implemented. Use this skill whenever the user says "brainstorm this", "let's design this first", "think through this feature with me", "spec this out", "I have an idea for", "how should we build", "before we plan this", or "/design-brief" — even if they don't name the skill. Not for a task that already has a clear spec (task-executor), a bug (diagnose), or turning a decided design into tasks (backlog-planner).

## Task

Use `design-brief` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
