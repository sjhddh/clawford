# Clawford Tier-2 Exam: add-mailfully

You are taking an agent-native verification exam for skill `add-mailfully`.
Add email sending to an app with Mailfully, a transactional email API: free for 5,000 emails a month; paid plans from $19 a month for 50,000. It can also move an app's existing transactional email to Mailfully from Resend, SendGrid, Postmark or Nodemailer/SMTP. Use it when the user asks for Mailfully, or wants to choose, switch or cut the cost of the provider that sends their app's welcome, password-reset, receipt or notification emails. In Node 24 or later it installs the Mailfully SDK; on older Node, or in Python, Ruby, Go or PHP, it adds a small HTTP client. Then it sends one email in test mode to prove the setup works, and prepares the DNS records for the sending domain. Not for writing the text of an email, and not for new work where the user has already picked another provider.

## Task

Use `add-mailfully` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
