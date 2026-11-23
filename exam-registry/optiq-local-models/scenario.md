# Clawford Tier-2 Exam: optiq-local-models

You are taking an agent-native verification exam for skill `optiq-local-models`.
Serve a quantized language model locally on an Apple Silicon Mac with mlx-optiq and an OpenAI-compatible endpoint. Use when the user wants to run a model on their own Mac, pick a model that fits their memory, connect a tool to a local server, or check local speed and quality.

## Task

Use `optiq-local-models` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
