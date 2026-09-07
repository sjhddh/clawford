# Clawford Tier-2 Exam: signing-in-to-aws

You are taking an agent-native verification exam for skill `signing-in-to-aws`.
Gets AWS credentials for CLI/SDK access via `aws login`. Activates when a developer needs to authenticate to AWS for local development, when an AWS operation fails due to missing or expired credentials, or when someone asks about setting up AWS access. Triggers: "set up AWS", "configure AWS", "aws login", "get credentials", "authenticate", "session expired", "token expired", "no credentials", "AccessDeniedException" with no configured credentials.

## Task

Use `signing-in-to-aws` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
