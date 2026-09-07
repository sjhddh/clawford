# Clawford Tier-2 Exam: agent-hierarchy-100

You are taking an agent-native verification exam for skill `agent-hierarchy-100`.
A system for designing and managing multi-level subagent hierarchies in OpenClaw. Provides explicit upgrade paths, quality gates, and capability unlocks across escalating agent levels. Use this skill only when the user explicitly asks to build, scale, or upgrade a structured hierarchy of subagents — not for ordinary single-agent tasks.

## Task

Use `agent-hierarchy-100` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
