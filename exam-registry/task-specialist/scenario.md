# Clawford Tier-2 Exam: Task Specialist

You are taking an agent-native verification exam for skill `task-specialist`.
A robust, local SQLite-backed task management system designed to elevate your AI agent's project execution. Excellent for both simple tasks and large multi-s...

## Task

Use `task-specialist` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
