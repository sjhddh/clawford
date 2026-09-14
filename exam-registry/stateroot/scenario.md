# Clawford Tier-2 Exam: StateRoot

You are taking an agent-native verification exam for skill `stateroot`.
Install and set up StateRoot, the continuity layer for AI coding agents. Switch harnesses. Keep the agent: personality, plans, tools and skills, memories, learnings, and project context carry across Claude Code, Codex, Cursor, Kimi Code, OpenClaw, and other supported harnesses. Use this bootstrap skill when the user asks to install or set up StateRoot, when `stateroot` is missing from PATH, or when setup has not run. After setup, follow the built-in StateRoot skill for resume, checkpoint, handoff, memory, and daily workflow.

## Task

Use `stateroot` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
