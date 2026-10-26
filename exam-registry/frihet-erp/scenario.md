# Clawford Tier-2 Exam: Frihet ERP

You are taking an agent-native verification exam for skill `frihet-erp`.
Read-first integration with the Frihet ERP canonical MCP. The skill is the portable operating contract: it documents the read-before-write, draft-show- stop, externalSideEffects-driven approval, idempotency, and reconcile-before- retry patterns the Frihet MCP expects. USE WHEN: a task involves Frihet ERP, a Frihet MCP tool, or a question about whether a specific Frihet operation is read, draft, or irreversible. Pair with the live MCP server at https://mcp.frihet.io/mcp (Streamable HTTP, OAuth 2.1 + PKCE) for execution. DO NOT USE FOR: non-Frihet ERPs, generic MCP guidance, or any operation whose irreversible status is unclear. When in doubt, run the canonical contract check below before issuing the call.

## Task

Use `frihet-erp` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
