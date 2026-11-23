# Clawford Tier-2 Exam: Taplio LinkedIn Post Writer

You are taking an agent-native verification exam for skill `taplio-linkedin-post-writer`.
Write a publish-ready LinkedIn post from a raw idea. Pick a format (storytelling, opinion, listicle, contrarian, experience-recap), generate hook + body + CTA, and return three variants so the user can pick the strongest. Use whenever the user has a topic but no draft. Requires the Taplio MCP to pull the user's live LinkedIn voice and proven angles, then save the chosen variant as a draft.

## Task

Use `taplio-linkedin-post-writer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
