# Clawford Tier-2 Exam: verify-email-list

You are taking an agent-native verification exam for skill `verify-email-list`.
Verify a list of email addresses so you stop sending to bounces, powered by Cargo. Triggers: "verify these emails", "clean my email list", "check if these addresses are valid", "our bounce rate is too high", "validate emails before sending". Providers: waterfall. Skip when: you do not have the emails yet — use find-work-email first.

## Task

Use `verify-email-list` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
