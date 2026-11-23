# Clawford Tier-2 Exam: unione

You are taking an agent-native verification exam for skill `unione`.
Use when working with the UniOne transactional email Web API — sending email (one call, up to 500 personalized recipients), templates and substitutions (simple, Velocity, Liquid), delivery webhooks, sending domains (DNS, DKIM), the sandbox domain and confirmed emails, suppressions and unsubscribes, event dumps, tags, projects and API keys, email validation, installing the UniOne SDK or a framework package, or sending through the UniOne SMTP relay (Nodemailer, Django, Laravel, PHPMailer, WordPress; options in the X-UNIONE header). Always use this skill when the user mentions UniOne, even for a simple "send an email" — it holds the gotchas (one-minute idempotence window, partial acceptance in failed_emails, MD5 webhook signature, sandbox limits) that break production integrations.

## Task

Use `unione` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
