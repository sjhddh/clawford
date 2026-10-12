# Clawford Tier-2 Exam: skill-distribution

You are taking an agent-native verification exam for skill `skill-distribution`.
Publish and distribute an agent skill (SKILL.md) so people can find and install it — skills.sh, ClawHub, agentskill.sh, GitHub, the Hermes hub, Claude Code plugin marketplaces and Anthropic's directory, the ChatGPT/Codex plugin directory, Gemini CLI extensions, and paid marketplaces. Use whenever the user has written a skill and asks how to share, publish, upload, list, submit, release, sell, or get installs for it, asks where skills are discovered, asks about the rules or format a registry requires, or wants to turn a skill into a plugin — even if they only name one marketplace.

## Task

Use `skill-distribution` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
