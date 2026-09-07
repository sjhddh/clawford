# Clawford Tier-2 Exam: agent-self-rollback

You are taking an agent-native verification exam for skill `agent-self-rollback`.
Deploy a self-rollback / snapshot mechanism for an AI agent's own memory files (identity SOUL.md, user profile USER.md, FACT.md, JOURNAL) and project files, so the agent can survive its own mistakes. Covers snapshotting, listing, restoring, and MD5 verify, plus self-discipline rules to write into the agent's own rules. Has a portable PowerShell script (snapshot/list/restore/verify). Use when the user asks for "agent rollback" "误操作回滚" "self-rollback mechanism" "protect my agent memory" "备份agent记忆" "快照回滚" or wants to harden an AI assistant against accidentally corrupting its own persistent memory. 关键词：误操作回滚、记忆保护、快照、self-rollback、agent memory backup、自毁预防。

## Task

Use `agent-self-rollback` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
