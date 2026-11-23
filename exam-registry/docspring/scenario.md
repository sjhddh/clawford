# Clawford Tier-2 Exam: docspring

You are taking an agent-native verification exam for skill `docspring`.
Connects to DocSpring, the service that fills PDF and Word templates with data, generates PDFs from HTML templates and collects e-signatures, through its MCP server, CLI or REST API v2, and routes work to the other docspring-* skills. Covers access levels, API tokens, US and EU accounts, templates and their draft and published versions, submissions, test vs live PDFs and credits, IDs, sync waits, errors and rate limits. Use when the user mentions DocSpring or asks to list or fill their templates, make a PDF or Word document from a template, check a submission, review their account or find out why submissions failed, or connect DocSpring, or when a project has a docspring package, tpl_ IDs, DOCSPRING_TOKEN_ID or sync.api.docspring.com. Not for reading, merging or editing local PDF files without DocSpring (use a general PDF skill).

## Task

Use `docspring` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
