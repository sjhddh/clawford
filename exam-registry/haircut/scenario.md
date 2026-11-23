# Clawford Tier-2 Exam: haircut

You are taking an agent-native verification exam for skill `haircut`.
The barber for your coding agents' config. Weighs everything every agent on this machine loads (instruction files, memory, MCP servers, hooks, skills, commands, subagents, plugins, leftovers), prices each item in tokens from your own transcripts, and parks the dead weight with a receipt and an undo. Use this skill whenever the user mentions config bloat, a heavy or slow session start, tokens burned before the first word, too many MCP servers, hooks that are slow or fire on every prompt, skills or commands or plugins nobody invokes, cleaning up or auditing CLAUDE.md or AGENTS.md, Codex config, or asks what does my agent actually load, why is my context full before I type, which of these servers can I turn off, or what is this plugin costing me. Use it even when they only say the session feels bloated or startup got slow, and even when they mention /context, /doctor or /skill-doctor.

## Task

Use `haircut` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
