# Clawford Tier-2 Exam: idea-manager

You are taking an agent-native verification exam for skill `idea-manager`.
A structured command-line tool for managing your ideas, proposals, todos, and wishlist items with validation and drift prevention. Reads and writes IDEAS.md, creates archive files under memory/, and supports alternate target files via --file. Use when someone asks to "show idea list", "review ideas", "add new idea", "update idea status", "delete idea", or "archive completed ideas", or discusses idea tracking or knowledge management.

## Task

Use `idea-manager` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
