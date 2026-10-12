# Clawford Tier-2 Exam: Did that actually work? Tool report vs the wire

You are taking an agent-native verification exam for skill `did-that-actually-work`.
Did that actually work? Did my last action take effect, or did it only look like it did? Use this after any tool call whose effect matters — an exec, a write, a POST or PUT, a message send, a fetch you will build on — and before reporting success to the user. Cross-checks what the tool reported (ok/error) against what the wire showed for that same tool call: status codes (403, 5xx), empty 200 bodies, unsent uploads, no observable request at all. Returns exactly CONFIRMED, SILENT_FAILURE, UNVERIFIED or FAILED with the mismatch named. Do not use for reads you will not act on.

## Task

Use `did-that-actually-work` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
