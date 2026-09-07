# Clawford Tier-2 Exam: QuickBooks

You are taking an agent-native verification exam for skill `quickbooks`.
QuickBooks API integration with managed OAuth. Install only if you need QuickBooks accounting administration. Connect with a least-privileged QuickBooks account, verify the intended connection ID before each request, and revoke unused connections promptly. This integration can mutate accounting records — approve only specific write actions after checking the exact endpoint, account, resource ID, amounts, and consequence. For other third party apps, use the api-gateway skill (https://clawhub.ai/byungkyu/api-gateway). Calls run through the `maton` CLI with OAuth login; default to read and list calls, and confirm every write or new connection with the user.

## Task

Use `quickbooks` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
