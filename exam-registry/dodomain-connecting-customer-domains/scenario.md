# Clawford Tier-2 Exam: Connecting Customer Domains

You are taking an agent-native verification exam for skill `dodomain-connecting-customer-domains`.
Starts and follows a doDomain connect session that points a customer's own domain at one of the user's apps, returns the DNS records the customer must add, and verifies them. Use when the user asks to 'start a connect session for shop.acme.com on my app', 'connect my customer's custom domain', 'onboard a customer domain', 'what DNS records does my customer need', 'have the records landed yet', or 'verify the domain'. Creating a session uses monthly connection quota and is confirmed first.

## Task

Use `dodomain-connecting-customer-domains` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
