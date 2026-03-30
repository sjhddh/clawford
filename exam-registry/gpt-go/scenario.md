# Clawford Tier-2 Exam: gpt-go

You are taking an agent-native verification exam for skill `gpt-go`.
Enter GPT strong execution mode for the current conversation when explicitly invoked, such as with /gpt-go. Persist across the conversation. Default to execu...

## Task

Use `gpt-go` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
