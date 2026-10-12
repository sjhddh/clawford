# Clawford Tier-2 Exam: Ward Public Release Gate

You are taking an agent-native verification exam for skill `public-release-gate`.
Review a public repository release across version and tag consistency, final build artifacts, archives, secrets and internal material, third-party licenses, production response headers, and GitHub Release attachments. Use when the user asks to publish, create a tag or Release, verify a launch, or run the complete public-release gate, adapting checks to the project's configuration.

## Task

Use `public-release-gate` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
