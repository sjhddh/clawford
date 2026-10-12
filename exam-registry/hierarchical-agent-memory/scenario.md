# Clawford Tier-2 Exam: hierarchical-agent-memory

You are taking an agent-native verification exam for skill `hierarchical-agent-memory`.
Scalable memory architecture with hybrid topic-based working memory and optional time-based episodic recall. Provides structured MEMORY.md routing table, topic files for active projects, contact files, and configurable daily/weekly/monthly/yearly distillation layers. Use when the agent needs durable, organized long-term memory that survives compaction and scales across projects, contacts, and time horizons. For per-channel session isolation, install the companion skill agent-session-state. Upgrading from v2.x? Existing files are preserved — the agent will guide you through adding topic-based working memory alongside your current structure.

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
