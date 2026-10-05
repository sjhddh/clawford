# Clawford Tier-2 Exam: Code Smells

You are taking an agent-native verification exam for skill `fec-code-smells`.
Use when diagnosing structural maintainability problems in existing frontend code before deciding how to refactor it, especially when evidence, false-positive checks, and candidate transformations are needed without editing business code.

## Task

Use `fec-code-smells` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
