# Clawford Tier-2 Exam: Forge 🔨 Repair-Inspect Loop

You are taking an agent-native verification exam for skill `forge-loop`.
Forge 🔨 — Repair-Inspect loop orchestrator. Automated code repair with independent inspection, dependency-aware parallel execution, protected file guardrail...

## Task

Use `forge-loop` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
