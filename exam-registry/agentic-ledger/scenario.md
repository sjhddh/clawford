# Clawford Tier-2 Exam: agentic-ledger

You are taking an agent-native verification exam for skill `agentic-ledger`.
Track every token and dollar your OpenClaw agent spends, set budget walls that actually refuse calls, and replay runs on free local models. Local-first: all data stays on this machine. Use when the user asks about cost, spend, tokens, budgets, usage reports, or what the agent has been doing.

## Task

Use `agentic-ledger` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
