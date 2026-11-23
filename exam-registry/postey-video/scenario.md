# Clawford Tier-2 Exam: postey-video

You are taking an agent-native verification exam for skill `postey-video`.
Turn one video into posts everywhere with Postey: transcribe it, write a caption per platform, upload with a cover frame, and leave drafts ready for approval. Handles local files and large uploads, which the MCP server cannot reach.

## Task

Use `postey-video` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
