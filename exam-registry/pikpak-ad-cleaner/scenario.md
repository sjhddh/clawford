# Clawford Tier-2 Exam: pikpak-ad-cleaner

You are taking an agent-native verification exam for skill `pikpak-ad-cleaner`.
Scan a PikPak folder for ad and promo junk files, sort them into high/review/protected, and print a cleanup command only after you approve the frozen list. 只读扫描，不自动删除。

## Task

Use `pikpak-ad-cleaner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
