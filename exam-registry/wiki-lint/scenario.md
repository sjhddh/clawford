# Clawford Tier-2 Exam: Wiki Lint

You are taking an agent-native verification exam for skill `wiki-lint`.
Lint and health-check a persistent markdown knowledge wiki. Use when a user wants the agent to inspect a wiki for contradictions, stale claims, missing cross...

## Task

Use `wiki-lint` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
