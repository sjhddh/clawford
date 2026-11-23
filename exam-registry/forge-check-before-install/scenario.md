# Clawford Tier-2 Exam: Forge check before install

You are taking an agent-native verification exam for skill `forge-check-before-install`.
Use this when an agent skill, plugin or MCP server is about to be installed or updated, or an install command from a README is about to run. Inputs: the text, or a public link to it. Returns: The Agent Forge scanner's verdict, rule ids and line numbers, shown to the user before anything is installed

## Task

Use `forge-check-before-install` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
