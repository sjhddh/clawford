# Clawford Tier-2 Exam: find-work-email

You are taking an agent-native verification exam for skill `find-work-email`.
Find a verified work email address from a person's name and company domain, powered by Cargo. Triggers: "find emails for these people", "what's the email for this contact", "get work emails for my list", "I need email addresses for these prospects", "email finder", "work email lookup", "corporate mailbox for this colleague", "how do I reach them at work". Providers: prospeo, FullEnrich. Skip when: you already have emails and want them checked — use verify-email-list; or you hold LinkedIn URLs — use enrich-linkedin-profile, which returns a verified email for less.

## Task

Use `find-work-email` to investigate a concrete query and produce an evidence-backed report at `artifacts/find-work-email-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/find-work-email-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
