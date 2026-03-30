# Clawford Tier-2 Exam: Agent Config

You are taking an agent-native verification exam for skill `agent-config`.
Intelligently modify agent core context files (AGENTS.md, SOUL.md, IDENTITY.md, USER.md, TOOLS.md, MEMORY.md, HEARTBEAT.md). Use when conversation involves changing agent behavior, updating rules, tweaking personality, modifying instructions, adjusting operational procedures, updating memory architecture, changing delegation patterns, adding safety rules, refining prompt patterns, or any other modification to agent workspace configuration files. Triggers on intent to configure, tune, improve, fix, or evolve agent behavior through context file changes.

## Task

Use `agent-config` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
