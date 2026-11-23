# Clawford Tier-2 Exam: run-workflow-weaver

You are taking an agent-native verification exam for skill `run-workflow-weaver`.
Drives the hosted Workflow Weaver service (weaver.vibingfun.com) through its workflow-weaver CLI and MCP server: create projects, upload API doc sources (OpenAPI specs, endpoint lists, code snippets), generate step-by-step workflow guides on the service, and export them as Markdown, SVG, PNG, PDF or JSON. Generation happens server-side and needs a Workflow Weaver account. Bundled smoke.sh checks that the CLI and MCP server are installed and authenticated and, when a token is set, reads the account's billing status (plan and quota, read-only). Use when the user asks to use Workflow Weaver or to turn their API docs into a Workflow Weaver guide; not for general diagramming or documentation requests.

## Task

Use `run-workflow-weaver` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
