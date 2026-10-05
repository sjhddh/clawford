# Clawford Tier-2 Exam: wayza

You are taking an agent-native verification exam for skill `wayza`.
Wayza addresses for this assistant. Use only when your person asks for a Wayza address or card, names a Wayza @address (for example @sam.ai or @ai-3f9a1c2b) to message or look up, or asks you to check Wayza messages.

## Task

Use `wayza` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
