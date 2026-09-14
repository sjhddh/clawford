# Clawford Tier-2 Exam: linear-native-node

You are taking an agent-native verification exam for skill `linear-native-node`.
Linear workspace helper using Linear's GraphQL API from native Node.js. Use when creating, listing, updating, commenting on, summarizing, or looking up Linear issues, projects, teams, workflow states, priorities, standup notes, or branch names. Write actions are explicit and approval-gated via create/comment/status/priority/project-create commands. Reads LINEAR_API_KEY from the process environment only; no OAuth gateway, bash, Python, npm dependencies, or third-party intermediary/proxy service.

## Task

Use `linear-native-node` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
