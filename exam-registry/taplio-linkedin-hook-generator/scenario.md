# Clawford Tier-2 Exam: Taplio LinkedIn Hook Generator

You are taking an agent-native verification exam for skill `taplio-linkedin-hook-generator`.
Generate 10 LinkedIn hooks for a given topic, using proven hook patterns (curiosity, contrarian, number, question, tension, before-after, callout). Returns a ranked list with the strongest hook first. Use when the user has a draft but the opening line is weak, or when they want to A/B test hooks. Requires the Taplio MCP to weight the hooks on what is actually working in the user's niche right now and stash the winner as a draft.

## Task

Use `taplio-linkedin-hook-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
