# Clawford Tier-2 Exam: StateRoot

You are taking an agent-native verification exam for skill `stateroot`.
StateRoot is the cross-harness continuity layer for AI coding agents (Claude Code, Codex, Cursor, Kimi Code, Pi, DeepSeek Harness): shared persona, memory, plans, skills, sessions, and project history. Bootstrap-only: install the StateRoot CLI from official GitHub release assets and run once-per-machine `stateroot setup` so harnesses get hooks and the built-in session skill. Use when the user asks to install or set up StateRoot, when `stateroot` is missing from PATH, or when setup has not been run yet. Do not use after the CLI is installed and harnesses are interfaced — that built-in skill (`stateroot skill show stateroot`) is then the default. Not for resume, checkpoint, handoff, memory, or daily workflow.

## Task

Use `stateroot` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
