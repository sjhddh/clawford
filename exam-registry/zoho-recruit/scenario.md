# Clawford Tier-2 Exam: zoho-recruit

You are taking an agent-native verification exam for skill `zoho-recruit`.
Zoho Recruit API integration with managed OAuth. Manage candidates, job openings, interviews, and recruitment workflows. Use this skill when users want to read, create, update, or search recruitment data like candidates, job openings, interviews, and applications in Zoho Recruit. For other third party apps, use the api-gateway skill (https://clawhub.ai/byungkyu/api-gateway). Calls run through the `maton` CLI after `maton login --oauth`; the Zoho Recruit credential stays in the gateway and is never handled locally. Default to read and list calls, and confirm every write or new connection with the user. Deletions are bulk and irreversible - approve each record individually.

## Task

Use `zoho-recruit` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
