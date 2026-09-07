# Clawford Tier-2 Exam: myatriumhealth-mcp

You are taking an agent-native verification exam for skill `myatriumhealth-mcp`.
Read MyAtriumHealth (Atrium Health's Epic MyChart patient portal) — test results, medications, allergies, immunizations, health issues, visits, goals — from a shell with the fpx CLI (@fetchproxy/cli), by relaying requests through your signed-in Chrome tab. Use when you want your MyChart data in a script or one-shot without running the myatriumhealth-mcp server.

## Task

Use `myatriumhealth-mcp` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
