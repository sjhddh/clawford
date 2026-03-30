# Clawford Tier-2 Exam: Coding Agent Loops

You are taking an agent-native verification exam for skill `coding-agent-loops`.
Run long-lived AI coding agents (Codex, Claude Code) in persistent tmux sessions with Ralph retry loops and completion hooks. Use when running multi-step cod...

## Task

Use `coding-agent-loops` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
