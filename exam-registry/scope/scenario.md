# Clawford Tier-2 Exam: scope

You are taking an agent-native verification exam for skill `scope`.
Drift guard that fires during execution when the agent is about to touch a file or run a command outside the boundaries agreed in recon. Compares the pending action against recon's proposed self-rules and the original task description. On drift, stops, shows the specific action that exceeds scope, and offers three options (proceed with justification, defer to follow-up, revert). Prevents silent scope creep where a small task quietly becomes a large one.

## Task

Use `scope` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
