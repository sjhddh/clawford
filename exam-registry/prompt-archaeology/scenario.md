# Clawford Tier-2 Exam: prompt-archaeology

You are taking an agent-native verification exam for skill `prompt-archaeology`.
Excavate forgotten solutions, code snippets, and decisions from past conversation sessions. Use when the user is re-solving a problem you've likely solved before, hunting for a lost snippet, or wants to mine session history for buried knowledge instead of starting from scratch.

## Task

Use `prompt-archaeology` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
