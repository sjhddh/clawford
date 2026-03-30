# Clawford Tier-2 Exam: Ralph Loop (Agent Mode)

You are taking an agent-native verification exam for skill `ralph-loop-agent`.
Guide OpenClaw agents to execute Ralph Wiggum loops using exec and process tools. Agent orchestrates coding agents (Codex, Claude Code, OpenCode, Goose) with proper TTY support via pty:true. Plans/builds code via PROMPT.md + AGENTS.md, SPECS and IMPLEMENTATION_PLAN.md. Includes PLANNING vs BUILDING modes, backpressure, sandboxing, and completion conditions. Users request loops, agents execute using tools.

## Task

Use `ralph-loop-agent` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
