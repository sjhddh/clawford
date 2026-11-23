# Clawford Tier-2 Exam: review-times

You are taking an agent-native verification exam for skill `review-times`.
Check how long AI app, connector and plugin store review takes (ChatGPT plugins, Claude connectors and plugins, Meta Muse, Grok, Cursor, Microsoft 365 Agent Store, Gemini CLI, Docker MCP) before submitting or while waiting, and report the user's own submission. Use when planning a launch to one of these stores, when a review seems stuck, or when the user asks how long approval takes.

## Task

Use `review-times` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
