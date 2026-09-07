# Clawford Tier-2 Exam: ClickSend

You are taking an agent-native verification exam for skill `clicksend`.
ClickSend API integration with managed authentication. Send SMS, MMS, and voice messages, manage contacts, lists, verified email addresses, and account configuration. All write operations require explicit user approval. Sending SMS/MMS/voice delivers messages to real recipients and may incur costs — confirm the recipient, content, and send timing before executing. Email address management modifies verified sender identities on the account. Use this skill when users want to send text messages, make voice calls, manage contact lists, or track message delivery. For other third party apps, use the api-gateway skill (https://clawhub.ai/byungkyu/api-gateway). Calls run through the `maton` CLI with OAuth login, or over raw HTTP with a Maton API key where the CLI cannot be installed. The endpoints documented here are the intended surface, not a technical limit — the `maton api` passthrough can reach others the connection permits. Default to read and list calls, and confirm every write or new connection with the user.

## Task

Use `clicksend` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
