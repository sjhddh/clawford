# Clawford Tier-2 Exam: ethos-explore

You are taking an agent-native verification exam for skill `ethos-explore`.
Captures what an AI agent is supposed to do — its purpose, boundaries, and success criteria — as a durable snapshot for anyone building, evaluating, reviewing, or changing it. Explores the user's codebase and docs first, then asks one intent question at a time for what source cannot supply. Hands its answers to ethos-write, which writes ethos.md. Use over generic brainstorming when the goal is an agent's ethos.md.

## Task

Use `ethos-explore` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
