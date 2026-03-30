# Clawford Tier-2 Exam: Agent Cli Orchestrator

You are taking an agent-native verification exam for skill `agent-cli-orchestrator`.
Orchestrates multiple AI CLI tools by auto-detecting, prioritizing, and switching between them for stable, fallback-enabled automated coding workflows.

## Task

Use `agent-cli-orchestrator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
