# Clawford Tier-2 Exam: grill

You are taking an agent-native verification exam for skill `grill`.
Use when a technical writeup, blog post, war story, or "Show HN" is about to go to Hacker News, Lobsters, or any skeptical technical audience, or when the user says "grill this", "make it HN-ready", "harden this post", "is this ready to post", "will this survive the comments". Hardens facts, sourcing, voice, and comment-readiness. Not for identity/infra leak scrubbing (use plate) or repo publication (use publish-readiness).

## Task

Use `grill` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
