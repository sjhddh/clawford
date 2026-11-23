# Clawford Tier-2 Exam: g-assist-mcp-skill

You are taking an agent-native verification exam for skill `g-assist-mcp-skill`.
Use this skill to check or change this machine's NVIDIA display and GPU settings, such as resolution, refresh rate, V-Sync, G-SYNC, brightness, color, and GPU performance.

## Task

Use `g-assist-mcp-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
