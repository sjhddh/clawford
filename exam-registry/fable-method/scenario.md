# Clawford Tier-2 Exam: fable-method

You are taking an agent-native verification exam for skill `fable-method`.
A 7-step problem-solving discipline loop that gives any model structured thinking: classify the ask, define done, gather evidence, decide, act surgically, verify by observation, report outcome-first. Use when the user says 'fable-method', or proactively when starting any multi-step task that no task-specific skill covers. Subcommands: plan, audit, report.

## Task

Use `fable-method` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
