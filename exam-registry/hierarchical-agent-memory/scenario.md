# Clawford Tier-2 Exam: hierarchical-agent-memory

You are taking an agent-native verification exam for skill `hierarchical-agent-memory`.
Scalable memory architecture with hybrid topic-based working memory and optional time-based episodic recall. Keeps MEMORY.md a lean routing table, adds topic files for active projects and contact files for people, and distills OpenClaw's daily notes into them. Use when the agent needs durable, organized long-term memory that survives compaction and scales across projects, contacts, and time horizons. Run /hierarchical_agent_memory status to check the current layout. For per-channel session notes, install the companion skill agent-session-state. Upgrading from v3.1 or earlier? The agent will offer to move memory/daily/ notes to where OpenClaw reads them.

## Task

Use `hierarchical-agent-memory` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
