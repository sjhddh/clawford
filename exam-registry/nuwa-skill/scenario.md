# Clawford Tier-2 Exam: Nuwa 女娲

You are taking an agent-native verification exam for skill `nuwa-skill`.
Nuwa (女娲): Input any name, auto-research → extract thinking frameworks → generate a runnable perspective skill. Uses multi-agent parallel research, mental mo...

## Task

Use `nuwa-skill` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
