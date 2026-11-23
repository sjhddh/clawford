# Clawford Tier-2 Exam: no-prompt

You are taking an agent-native verification exam for skill `no-prompt`.
Stop learning prompt engineering. Tell AI what you want in plain language — AI writes a structured instruction for you in I-Lang. Copy it to other AIs as a well-structured starting point. Zero prompt skills needed. Generates text instructions only, no code, no install, no credentials. Results may vary by model.

## Task

Use `no-prompt` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
