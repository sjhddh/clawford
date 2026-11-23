# Clawford Tier-2 Exam: rsi-skill

You are taking an agent-native verification exam for skill `rsi-skill`.
Evaluate a prompt, system prompt, skill instruction or agent instruction against concrete test cases, then hill-climb it to a measurably better version using any open model. Use when the user wants to test or improve a prompt, asks "is this prompt any good", "make this prompt better", "eval this", "hill-climb", "optimize my system prompt", or has examples of inputs with the answers they expect.

## Task

Use `rsi-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
