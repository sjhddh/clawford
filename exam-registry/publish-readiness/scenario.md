# Clawford Tier-2 Exam: publish-readiness

You are taking an agent-native verification exam for skill `publish-readiness`.
Use before making a private repository public, before the first push of a new public repo, or when the user asks "is this safe to publish", "check for leaks", or wants a pre-publication scan. Also use after discovering identifying content already leaked into a public repo's history.

## Task

Use `publish-readiness` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
