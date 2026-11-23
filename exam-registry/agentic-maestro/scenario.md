# Clawford Tier-2 Exam: agentic-maestro

You are taking an agent-native verification exam for skill `agentic-maestro`.
Delegate coding work to sub-agents efficiently with a strong orchestrator and cheaper executors: when to spawn, how to write a precise brief, how to spawn on Claude Code (Agent tool or claude -p), Codex (codex exec) or OpenCode (opencode run), and how to run build -> review -> fix -> merge with an independent reviewer. Use when spawning or delegating implementation, fixes, integration, reviews or parallel agents, when writing an executor brief, or when running a multi-agent build pipeline.

## Task

Use `agentic-maestro` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
