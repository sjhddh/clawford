# Clawford Tier-2 Exam: coding-tactics

You are taking an agent-native verification exam for skill `coding-tactics`.
Tactical coding methodology selector and executor. Auto-selects the appropriate development method (TDD / BDD / API-First / Security-First / Direct Implementation) based on task context, or use the specified method directly. Use when a user requests a method, scenario-standards reaches implementation, or the task context implies one. Supports direct invocation: `/coding-tactics tdd`, `/coding-tactics bdd`, etc.

## Task

Use `coding-tactics` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
