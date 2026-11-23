# Clawford Tier-2 Exam: Brief

You are taking an agent-native verification exam for skill `skillet-brief`.
Use when answering at a decision point - recommending an approach, reporting a verification result, finishing a task, proposing a fix, or assessing whether something is ready - so the judgment leads and the reader can evaluate it instead of only accepting it. Triggers on "brief mode", "bluf this", "give me the bottom line", "brief it", "stop burying the answer".

## Task

Use `skillet-brief` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
