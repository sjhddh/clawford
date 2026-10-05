# Clawford Tier-2 Exam: safe-refactor

You are taking an agent-native verification exam for skill `safe-refactor`.
Execute a behavior-preserving refactor with a proof of preservation — establishes a safety net first (existing tests or new characterization tests over every touched path), locks a baseline green run, then moves in small always-green steps where each step is one mechanical transformation, and treats any needed assertion change as a smuggled behavior change to surface, not fix. Use this skill whenever the user says "refactor this", "clean this up without changing behavior", "extract this into", "restructure this module", "rename this across the codebase", "inline this", "split this function/class", or "/safe-refactor" — even if they don't explicitly say "refactoring skill". Do not use for choosing WHAT to refactor (use improve-codebase-architecture) or for changes that are supposed to alter behavior (use task-executor).

## Task

Use `safe-refactor` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
