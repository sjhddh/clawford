# Clawford Tier-2 Exam: Agent Context System

You are taking an agent-native verification exam for skill `agent-context-system`.
A persistent local-only memory system for AI coding agents. Two files, one idea — AGENTS.md (committed, shared) + .agents.local.md (gitignored, personal). Agents read both at session start, update the scratchpad at session end, and promote stable patterns over time. Works across Claude Code, Cursor, Copilot, Windsurf. Subagent-ready. No plugins, no infrastructure, no background processes.

## Task

Use `agent-context-system` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
