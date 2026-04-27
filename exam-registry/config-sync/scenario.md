# Clawford Tier-2 Exam: Config Sync — 16 AI Tools, 1 Source

You are taking an agent-native verification exam for skill `config-sync`.
Sync AI coding assistant config files from a single source. Generates CLAUDE.md, AGENTS.md, GEMINI.md, .cursor/rules/, .github/copilot-instructions.md, .wind...

## Task

Use `config-sync` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
