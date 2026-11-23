# Clawford Tier-2 Exam: reviews-to-github-issues

You are taking an agent-native verification exam for skill `reviews-to-github-issues`.
Turns recent negative App Store / Google Play reviews into deduplicated GitHub issues - one issue per problem topic, with linked and quoted reviews, new reviews added as comments to the existing issue instead of duplicates. Uses AppGoat review data and the gh CLI (or the GitHub MCP server).

## Task

Use `reviews-to-github-issues` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
