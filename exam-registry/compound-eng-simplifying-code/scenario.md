# Clawford Tier-2 Exam: ia-simplifying-code

You are taking an agent-native verification exam for skill `compound-eng-simplifying-code`.
Simplifies, polishes, and declutters code without changing behavior. Use when asked to simplify, clean up, refactor, declutter, remove dead code or AI slop, or improve readability. For analysis-only reports without code changes, use code-simplicity-reviewer agent.

## Task

Use `compound-eng-simplifying-code` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
