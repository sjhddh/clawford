# Clawford Tier-2 Exam: Force To Agent

You are taking an agent-native verification exam for skill `force-to-agent`.
Extract AGENTS.md, SOUL.md, TOOLS.md, and an optional openclaw.json patch from pasted custom-GPT markdown, then create a new workspace-<agent> folder and wri...

## Task

Use `force-to-agent` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
