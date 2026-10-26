# Clawford Tier-2 Exam: Taplio LinkedIn Smart Comment Writer

You are taking an agent-native verification exam for skill `taplio-linkedin-smart-comment-writer`.
Write a LinkedIn comment that gets noticed by the post author and the audience, save it as a Taplio comment draft, and, only on the user's explicit go, schedule it to post under their name. Avoids the generic great-post trap : 3 options on one angle (add, disagree, story, framework, question), ranked by likelihood of being pinned or replied to, written after reading what the thread already says. Use after the user has a post in mind, a pick from the Comment Opportunity Finder, or a LinkedIn post url. Requires the Taplio MCP to read the post and its thread, save the draft, commit it, and confirm it went live.

## Task

Use `taplio-linkedin-smart-comment-writer` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
