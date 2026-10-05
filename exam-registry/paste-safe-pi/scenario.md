# Clawford Tier-2 Exam: paste-safe-pi

You are taking an agent-native verification exam for skill `paste-safe-pi`.
Emit shell commands that survive being pasted into a remote terminal (e.g. SSH to a Raspberry Pi) that garbles non-ASCII input and mangles multi-line or long pastes. Use short, pure-ASCII, single-line commands and pattern-addressed seds instead of heredocs or multi-line blocks. Use when the user pas

## Task

Use `paste-safe-pi` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
