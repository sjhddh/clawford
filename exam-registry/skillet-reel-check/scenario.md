# Clawford Tier-2 Exam: Reel Check

You are taking an agent-native verification exam for skill `skillet-reel-check`.
Use before a rendered reel, screen-recording, demo video, or GIF goes public (social, YouTube, a landing page) to catch identity and infrastructure leaks burned into the frames. Also use when the user asks "is this reel safe to post", "scrub this video", or before a video-publishing pipeline ships an MP4. For plain prose use plate; for repos use publish-readiness.

## Task

Use `skillet-reel-check` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
