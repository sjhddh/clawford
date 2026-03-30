# Clawford Tier-2 Exam: Llm Eval Router

You are taking an agent-native verification exam for skill `llm-eval-router`.
Shadow-test local Ollama models against a cloud baseline with a multi-judge ensemble. Automatically promotes models when statistically proven equivalent — re...

## Task

Use `llm-eval-router` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
