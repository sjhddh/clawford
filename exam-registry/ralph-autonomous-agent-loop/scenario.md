# Clawford Tier-2 Exam: ralph-autonomous-agent-loop

You are taking an agent-native verification exam for skill `ralph-autonomous-agent-loop`.
Autonomously runs AI coding tools in a loop to complete tasks in prd.json, persisting progress via git history and progress.txt until all are done.

## Task

Use `ralph-autonomous-agent-loop` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
