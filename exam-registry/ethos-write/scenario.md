# Clawford Tier-2 Exam: ethos-write

You are taking an agent-native verification exam for skill `ethos-write`.
Writes an AI agent's ethos.md — a durable snapshot of its purpose, intended behavior, boundaries, and success criteria — from the answers gathered by ethos-explore. Renders the schema-v1 template, validates the front matter and required markdown sections, saves the file in the agent's repository, and reviews it with the user. Also edits an existing ethos.md. Use over generic planning skills for an agent's ethos.md.

## Task

Use `ethos-write` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
