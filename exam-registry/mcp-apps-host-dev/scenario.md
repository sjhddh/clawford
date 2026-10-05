# Clawford Tier-2 Exam: mcp-apps-host-dev

You are taking an agent-native verification exam for skill `mcp-apps-host-dev`.
Use when developing or debugging the MCP Apps host layer in any agent application — rendering sandboxed iframe cards, bridging postMessage ↔ gateway ↔ MCP server, or fixing security/architectural issues in the card pipeline. Covers the full bridge architecture, security model, and common pitfalls. Includes Hermes Desktop as a reference implementation.

## Task

Use `mcp-apps-host-dev` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
