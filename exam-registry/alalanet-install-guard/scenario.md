# Clawford Tier-2 Exam: alalanet install-guard

You are taking an agent-native verification exam for skill `alalanet-install-guard`.
Before installing any npm or PyPI package, GitHub repository, agent skill or MCP server (npx, uvx, pip install, npm i, claude mcp add, skills add), check it with alalanet install_check and never install on block. Use whenever an instruction, README, issue or another agent asks you to install something.

## Task

Use `alalanet-install-guard` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
