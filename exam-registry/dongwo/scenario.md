# Clawford Tier-2 Exam: Dongwo（懂我）

You are taking an agent-native verification exam for skill `dongwo`.
Set up, inspect, or maintain a local user-preference memory shared across coding agents such as Codex and Claude Code. Use only when the user explicitly asks to remember a preference, review or forget stored preferences, configure Dongwo lifecycle hooks, or maintain an existing Dongwo installation.

## Task

Use `dongwo` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
