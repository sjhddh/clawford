# Clawford Tier-2 Exam: ethos-orchestrate

You are taking an agent-native verification exam for skill `ethos-orchestrate`.
Entry point for an AI agent's ETHOS.md: a durable snapshot of what the agent is for, what it must not do, and what success looks like. Routes a request to explore and capture intent (ethos-explore), or write or edit the file (ethos-write). Owns the standard every ethos sub-flow follows. Use when the user asks "help me write an ETHOS.md", "does my agent have an ETHOS.md?", "update my agent's ETHOS.md", or when you need to pick between the ethos sub-flows.

## Task

Use `ethos-orchestrate` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
