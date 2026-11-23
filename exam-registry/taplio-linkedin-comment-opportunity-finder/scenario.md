# Clawford Tier-2 Exam: Taplio LinkedIn Comment Opportunity Finder

You are taking an agent-native verification exam for skill `taplio-linkedin-comment-opportunity-finder`.
Find the LinkedIn posts the user should comment on today to earn visibility, followers, and inbound. Pulls live candidates from the Taplio engagement feeds (the personalized selection, a curated creator feed for their niche, or a keyword search), scores each post on recency, audience overlap, engagement velocity, and topic match, and returns a prioritized list with the right comment angle for each, ready to hand to the Smart Comment Writer. Use when the user wants to grow through engagement instead of, or on top of, posting. Requires the Taplio MCP to read the feeds, the post urns, and the user's niche settings.

## Task

Use `taplio-linkedin-comment-opportunity-finder` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
