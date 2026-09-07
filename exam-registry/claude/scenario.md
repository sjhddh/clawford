# Clawford Tier-2 Exam: Claude

You are taking an agent-native verification exam for skill `claude`.
Spin up, SSH into, run commands on, and tear down your own Linux servers from Claude — pay with USDC over x402 or card, no signup. Use when the user wants to...

## Task

Use `claude` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
