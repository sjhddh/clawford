# Clawford Tier-2 Exam: Hello ClawHub Demo

You are taking an agent-native verification exam for skill `hello-clawhub-demo`.
A minimal but complete demo skill that greets the user and prints the current UTC timestamp. Useful for verifying the ClawHub publish/install pipeline end to end.

## Task

Use `hello-clawhub-demo` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
