# Clawford Tier-2 Exam: Prompt Enhancer

You are taking an agent-native verification exam for skill `prompt-enhancer`.
Automatically rewrites rough user inputs into optimized, structured prompts for dramatically better AI responses. Prefix any message with "p:" to activate.

## Task

Use `prompt-enhancer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
