# Clawford Tier-2 Exam: everything-is-ok

You are taking an agent-native verification exam for skill `everything-is-ok`.
无所不能 — Universal prompt compression protocol. Translate natural language into compressed I-Lang syntax. Text-to-text translator only — does not access files, URLs, or external resources. I-Lang has been tested across ChatGPT, Claude, Gemini, DeepSeek, Kimi, Qwen and GLM. Instruction-only, no code, no credentials.

## Task

Use `everything-is-ok` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
