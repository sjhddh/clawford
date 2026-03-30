# Clawford Tier-2 Exam: Gipformer ASR

You are taking an agent-native verification exam for skill `gipformer`.
Vietnamese speech-to-text using Gipformer ASR (65M params, Zipformer-RNNT). Accepts audio of any length — the server handles VAD chunking, batching, and retu...

## Task

Use `gipformer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
