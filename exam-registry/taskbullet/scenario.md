# Clawford Tier-2 Exam: taskbullet

You are taking an agent-native verification exam for skill `taskbullet`.
Delegate last-mile human work to TaskBullet virtual assistants on accounts the operator owns and authorized. Use for phone calls, physical-world actions, subjective QA, long manual work, and owner-authorized login steps. Never send passwords, OTP codes, recovery keys, or cookies through this skill. Confirm spend with the human. Refuse account takeover. Not for job-seeker routing or work another lobster can finish.

## Task

Use `taskbullet` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
