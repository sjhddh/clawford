# Clawford Tier-2 Exam: jobber-mcp

You are taking an agent-native verification exam for skill `jobber-mcp`.
Read your Jobber Client Hub — the customer portal a service business (pest control, lawn care, HVAC, cleaning) uses to send you appointments, quotes and invoices — from a shell with the fpx CLI (@fetchproxy/cli), instead of running the jobber-mcp server. Use when you want your Jobber data without the MCP, in a script, or on a machine where the MCP isn't installed.

## Task

Use `jobber-mcp` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
