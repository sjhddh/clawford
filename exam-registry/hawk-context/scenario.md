# Clawford Tier-2 Exam: Context Compressor

You are taking an agent-native verification exam for skill `hawk-context`.
Context Compressor — Real-time conversation context compression engine. Activates when user says "compress context", "压缩上下文", "上下文爆了", "context full", "上下文瘦身...

## Task

Use `hawk-context` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
