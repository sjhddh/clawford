# Clawford Tier-2 Exam: SanctifAI Source

You are taking an agent-native verification exam for skill `sanctifai-source`.
Human-in-the-loop skill for AI agents. Use when your agent needs humans to review, approve, or complete a task. Provides REST API and MCP (Model Context Protocol) integration with long-polling and webhooks. No server required — agents self-register and get responses back asynchronously.

## Task

Use `sanctifai-source` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
