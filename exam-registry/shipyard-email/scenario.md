# Clawford Tier-2 Exam: Shipyard email

You are taking an agent-native verification exam for skill `shipyard-email`.
Set up email on your own domain and send app emails: receive at any @yourdomain address in Gmail (ImprovMX catch-all), reply from it in Gmail (Send mail as through Resend SMTP), SPF, DKIM and DMARC so mail is not junked, DNS steps for Papaki, Cloudflare or any registrar, a deliverability test, and short owner emails such as "<App> is live" with the app as sender. Use for "email on my domain", "hello@ address", "ImprovMX", "forward to Gmail", "send mail as", "SPF", "DKIM", "DMARC", "emails go to spam", "Papaki DNS", "notify me when deployed", "is live email", or "/shipyard:email".

## Task

Use `shipyard-email` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
