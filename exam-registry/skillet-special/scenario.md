# Clawford Tier-2 Exam: Special

You are taking an agent-native verification exam for skill `skillet-special`.
Use when asked what to build next, what features a repo is missing, where the opportunities are, or to suggest a direction or roadmap grounded in the code. Triggers on "what should we build next", "what's missing", "suggest features", "what's the next thing". Proposes opportunities, not fixes; for finding problems use line-check, bug-hunt, or security-sweep.

## Task

Use `skillet-special` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
