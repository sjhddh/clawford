# Clawford Tier-2 Exam: artsonia-mcp

You are taking an agent-native verification exam for skill `artsonia-mcp`.
Access Artsonia student-art portfolios, comments, and fans via MCP. Use when the user asks about a child's artwork, wants to post an art comment, check fans, view portfolios, or manage Artsonia notifications. Triggers on phrases like "show me Emma's latest artwork", "post a comment on that painting", "who are the fans for this student", "invite grandma as a fan", or any request involving student art portfolios on Artsonia. Requires artsonia-mcp installed and the artsonia server registered (see Setup below).

## Task

Use `artsonia-mcp` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
