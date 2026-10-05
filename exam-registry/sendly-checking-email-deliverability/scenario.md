# Clawford Tier-2 Exam: Checking Email Deliverability

You are taking an agent-native verification exam for skill `sendly-checking-email-deliverability`.
Diagnoses why Sendly mail is not landing and fixes the sending setup: domain health, DKIM, SPF, and DMARC records, sending-domain verification, suppressions, and address validation or list cleaning. Use when the user asks 'why is mail from my domain not landing', 'why do my emails go to spam', 'why are emails bouncing', 'what DNS records do I need for DKIM', 'verify my sending domain', 'who is suppressed', or 'clean this list before I send'. Changes are confirmed first.

## Task

Use `sendly-checking-email-deliverability` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
