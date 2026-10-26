# Clawford Tier-2 Exam: OpenClaw NovelAI Free

You are taking an agent-native verification exam for skill `novelai-free`.
Zero-Anlas NovelAI workflows for OpenClaw: fiction writing, story planning, account checks, cost estimates, tag suggestions, same-session verification reuse, bounded transient retries, and strictly guarded single-image generation only when the current tool proves the estimate is 0 Anlas.

## Task

Use `novelai-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
