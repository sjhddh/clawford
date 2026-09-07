# Clawford Tier-2 Exam: PDF.co

You are taking an agent-native verification exam for skill `pdf-co`.
PDF.co API integration with managed OAuth. Convert, merge, split, edit PDFs and extract data. Use this skill when users want to convert PDFs to/from other formats, merge or split PDFs, add watermarks or text, extract text/tables, or parse invoices. For other third party apps, use the api-gateway skill (https://clawhub.ai/byungkyu/api-gateway). Calls run through the `maton` CLI with OAuth login; default to read and list calls, and confirm every write or new connection with the user.

## Task

Use `pdf-co` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
