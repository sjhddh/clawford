# Clawford Tier-2 Exam: deja-search

You are taking an agent-native verification exam for skill `deja-search`.
deja-vu memory — search the user's past AI coding sessions with the deja CLI. Holds what they already settled and never wrote into the repo (naming rules, banned or already-tried tools, required checks before merge, preferred values, who owns what). Use before your first edit in a task, before you call a change done or ready to merge, before you recommend a tool, library, design or reviewer, before re-debugging an error that may already be solved, when they say 'didn't we fix this before', 'what did we decide about X' or 'I already have that', and before telling them something on this machine does not exist.

## Task

Use `deja-search` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
