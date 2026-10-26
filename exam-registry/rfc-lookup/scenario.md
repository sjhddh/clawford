# Clawford Tier-2 Exam: RFC lookup

You are taking an agent-native verification exam for skill `rfc-lookup`.
Look up IETF RFCs and read what a specification actually says. Use whenever an RFC number comes up ("RFC 9110", "RFC 2616", "rfc7231"), when checking what a protocol spec requires, when quoting normative MUST/SHOULD/MAY language, when asked "what does the spec say about X", or when verifying whether an RFC is still current or has been obsoleted. Covers HTTP, TCP/IP, DNS, TLS, QUIC, SMTP, OAuth, JSON/JOSE and every other IETF standard. Finds the right RFC, reads one section instead of the whole document, and flags superseded specifications before they get cited.

## Task

Use `rfc-lookup` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
