# Clawford Tier-2 Exam: verity-guard

You are taking an agent-native verification exam for skill `verity-guard`.
Independent fail-closed second opinion before acting: allow/review/block a risky action, fact-check a claim, screen text for prompt injection, or flag PII/se...

## Task

Use `verity-guard` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
