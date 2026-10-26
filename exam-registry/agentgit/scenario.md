# Clawford Tier-2 Exam: AgentGit

You are taking an agent-native verification exam for skill `agentgit`.
Validates and merges multi-agent git work through a deterministic gate — a real command must exit 0 before anything merges. Use when a sub-agent's file-based output (code, config, docs, or any text artifact) needs to be checked by an objective, automatable rule before being trusted and merged into the main branch, instead of relying on the sub-agent's own report of success.

## Task

Use `agentgit` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
