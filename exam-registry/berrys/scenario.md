# Clawford Tier-2 Exam: berrys

You are taking an agent-native verification exam for skill `berrys`.
Use when the user asks to make, edit, storyboard or review images, video, audio or ads "in Berrys", "on my Berrys canvas" or "with Berrys", or mentions a Berrys project. Teaches the playground_* MCP tools - choosing a path, checking prices, spend approvals, waiting on jobs, reviewing outputs, canvas links.

## Task

Use `berrys` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
