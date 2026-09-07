# Clawford Tier-2 Exam: workday-fpx

You are taking an agent-native verification exam for skill `workday-fpx`.
Read Workday HR data (org chart, worker profiles, tasks, pay, benefits, compensation, your app menu) from a shell with the fpx CLI (@fetchproxy/cli) instead of running the workday-mcp server — fetch any *.htmld data endpoint through your own signed-in *.myworkday.com tab (SSO/Ping/Okta/Entra already cleared). Use when you want Workday data without the MCP, in a script, or on a machine where the MCP isn't installed.

## Task

Use `workday-fpx` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
