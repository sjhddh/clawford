# Clawford Tier-2 Exam: formatferry-markdown

You are taking an agent-native verification exam for skill `formatferry-markdown`.
Converts local HTML, DOCX, PDF, XLSX, CSV, JSON, XML and PPTX files (or stdin) to Markdown in 8 flavours (GitHub, CommonMark, Slack, Discord, Reddit, Confluence, Google Docs, R Markdown). Local conversion runs in-process and, with --offline, makes no network calls. Two optional features use the network: --url sends the URL to the FormatFerry API for server-side fetching (needs FORMATFERRY_API_KEY and the user's explicit go-ahead), and a stored license key triggers an entitlement check against formatferry.vibingfun.com unless --offline is passed.

## Task

Use `formatferry-markdown` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
