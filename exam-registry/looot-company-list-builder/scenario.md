# Clawford Tier-2 Exam: looot-company-list-builder

You are taking an agent-native verification exam for skill `looot-company-list-builder`.
Build a company list. Use when the user says things like "find software companies in the US with 50 to 200 employees", "build a list of companies that use Stripe" or "give me 100 fintech companies in Germany". Runs through looot, billed per call.

## Task

Use `looot-company-list-builder` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
