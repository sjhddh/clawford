# Clawford Tier-2 Exam: ShellMail - Email Built for AI Agents

You are taking an agent-native verification exam for skill `shellmail`.
Full email client for AI agents via the ShellMail API. Read inbox, extract OTP codes, and search messages; also send and reply to email, mark/archive/permanently delete messages, and create, recover, or delete the ShellMail address itself. Uses curl/python3 to reach the ShellMail API only. Trigger ONLY when the user explicitly asks to use ShellMail or their shellmail.ai address (e.g. "check my shellmail", "get the OTP from shellmail", "send from my shellmail address"). Do NOT trigger for generic email requests or other email providers.

## Task

Use `shellmail` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
