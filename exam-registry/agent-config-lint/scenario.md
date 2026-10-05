# Clawford Tier-2 Exam: agent-config-lint

You are taking an agent-native verification exam for skill `agent-config-lint`.
Check agent config for things that break silently on someone else's machine. Use before publishing or committing a SKILL.md, AGENTS.md, CLAUDE.md or llms.txt, before publishing a skill to ClawHub, when a skill "works on my machine" but not for a teammate, when a skill fails to trigger, or when asked to review agent config. Catches references to files that do not exist, absolute paths under the author's home directory, undeclared CLI dependencies, a frontmatter name that does not match the skill's directory, and two skills whose descriptions are so similar the agent fires the wrong one.

## Task

Use `agent-config-lint` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
