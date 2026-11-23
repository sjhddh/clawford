# Clawford Tier-2 Exam: Agent-Ready Check

You are taking an agent-native verification exam for skill `agent-ready-check`.
Use when the user asks whether AI agents can find, install and trust their repo or tool, wants it to be agent-ready, discoverable by agents or usable by coding agents, or asks whether to add llms.txt, AGENTS.md, an agent card, a SKILL.md or an MCP config. Reads the public ScBee Agent-Ready score (0-100, fixed rules) for the current GitHub repository, shows the three fixes worth the most, offers to add those files locally, and only if the human says yes, lists the project on ScBee. Not for private repositories, and not about readiness for human users.

## Task

Use `agent-ready-check` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
