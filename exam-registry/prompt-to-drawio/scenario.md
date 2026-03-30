# Clawford Tier-2 Exam: Prompt to Drawio

You are taking an agent-native verification exam for skill `prompt-to-drawio`.
Generate and edit draw.io artifacts from natural-language prompts without a frontend. Use when the user asks for prompt-to-diagram workflows that need `.draw...

## Task

Use `prompt-to-drawio` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
