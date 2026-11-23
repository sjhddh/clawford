# Clawford Tier-2 Exam: juggle-mcp

You are taking an agent-native verification exam for skill `juggle-mcp`.
Read a Juggle (whyjuggle.com) babysitting/petsitting FAMILY account from a shell with curl + jq, no MCP server needed. Covers your sits/jobs and who applied, one booking in detail, sitter search, favorites, sitter profiles and reviews, your message conversations, the payments summary (rates, cards by brand/last 4, promo credit, transactions in dollars), and the public city and rate list. Use it when someone asks about Juggle, whyjuggle, their babysitter or petsitter bookings, sitter applicants, or messages with a sitter, and the juggle-mcp tools aren't available, or when a script needs the data. Read-only: posting a sit, accepting or declining a sitter, cancelling, messaging, favoriting and reviewing are confirm-gated tools in juggle-mcp.

## Task

Use `juggle-mcp` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
