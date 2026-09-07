# Clawford Tier-2 Exam: nvimclaw

You are taking an agent-native verification exam for skill `nvimclaw`.
Bridge to live Neovim over OpenClaw's node plugin. Use for reading or editing named and unnamed buffers, discovering open buffers, running surgical Ex substitutions, inspecting cursor/selection/diagnostics, and Neovim chat-to-session messaging.

## Task

Use `nvimclaw` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
