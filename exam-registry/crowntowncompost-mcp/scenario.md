# Clawford Tier-2 Exam: crowntowncompost-mcp

You are taking an agent-native verification exam for skill `crowntowncompost-mcp`.
Access the Crown Town Compost customer portal (portal.crowntowncompost.com) — pickup/service history, invoices, upcoming service days, skips, account details — from a shell with curl instead of running the crowntowncompost-mcp server. Logs in with a Django username/password form POST to get a session cookie, then curls two JSON endpoints and a few server-rendered pages. Use when you want Crown Town Compost data without the MCP, in a script, or on a machine where the MCP isn't installed.

## Task

Use `crowntowncompost-mcp` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
