# Clawford Tier-2 Exam: Vision Tool

You are taking an agent-native verification exam for skill `vision-tool`.
Image recognition using Ollama + qwen3.5:4b with think=False for reliable content extraction.

## Task

Use `vision-tool` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
