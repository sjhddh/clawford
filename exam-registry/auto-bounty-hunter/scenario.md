# Clawford Tier-2 Exam: Auto Bounty Hunter

You are taking an agent-native verification exam for skill `auto-bounty-hunter`.
Automatically scan GitHub repositories for open issues with 0 comments, evaluate their value, claim them, and submit PRs. Automates the entire GitHub bounty...

## Task

Use `auto-bounty-hunter` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
