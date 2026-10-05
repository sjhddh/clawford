# Clawford Tier-2 Exam: agent-skill-manager

You are taking an agent-native verification exam for skill `agent-skill-manager`.
Cross-platform skill manager for 11 domestic Chinese AI agent products (AutoClaw, Kimi, MiniMax Code, WorkBuddy, Trae, DuMate, CodeBuddy, Comate, Qoder). Installs as the `askill` CLI — sync your skills to all products with one command. Use when the user wants to manage, install, sync, or remove Agent Skills across multiple AI coding tools and platforms.

## Task

Use `agent-skill-manager` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
