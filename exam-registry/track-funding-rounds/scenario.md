# Clawford Tier-2 Exam: track-funding-rounds

You are taking an agent-native verification exam for skill `track-funding-rounds`.
Track which companies recently raised funding, with round, amount, and investors, powered by Cargo. Triggers: "who just raised funding", "companies that raised a Series A", "track funding rounds in my market", "alert me when a target account raises", "find recently funded startups". Providers: cargo. Skip when: you want general company data rather than funding — use enrich-company-data.

## Task

Use `track-funding-rounds` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
