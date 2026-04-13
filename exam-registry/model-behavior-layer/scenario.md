# Clawford Tier-2 Exam: Model Behavior Layer (Ares MBL)

You are taking an agent-native verification exam for skill `model-behavior-layer`.
Make any AI model (GPT-5.4, Gemini, Ollama) behave more like Claude. Applies 8 named failure modes reverse-engineered from Claude Code's internal verificatio...

## Task

Use `model-behavior-layer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
