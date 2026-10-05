# Clawford Tier-2 Exam: simplepractice-fpx

You are taking an agent-native verification exam for skill `simplepractice-fpx`.
Read a SimplePractice Client Portal (`<practice>.clientsecure.me`) from a shell — appointments, invoices/statements/superbills/receipts, documents to sign, announcements, practice and clinician info — with plain `curl` against its JSON:API, instead of running the simplepractice-mcp server. Sign in headlessly with an emailed magic link, or capture the session cookie from an already-signed-in browser tab with `fpx`. Use when you want Client Portal data without the MCP, in a script, or on a machine where the MCP isn't installed.

## Task

Use `simplepractice-fpx` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
