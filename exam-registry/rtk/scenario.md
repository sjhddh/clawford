# Clawford Tier-2 Exam: cli output compression for token savings with rtk

You are taking an agent-native verification exam for skill `rtk`.
RTK (Rust Token Kit) - CLI proxy that reduces LLM token consumption by 60-90% on common dev commands. Use rtk to wrap commands like git, ls, cat, grep, test...

## Task

Use `rtk` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
