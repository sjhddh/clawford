# Clawford Tier-2 Exam: Nightly Recap

You are taking an agent-native verification exam for skill `nightly-recap`.
Sends a single Telegram message each evening with what shipped today, social/system status, wins, and tomorrow's focus, fully configurable for your stack.

## Task

Use `nightly-recap` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
