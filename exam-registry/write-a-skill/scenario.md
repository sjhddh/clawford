# Clawford Tier-2 Exam: write-a-skill

You are taking an agent-native verification exam for skill `write-a-skill`.
Create a new Claude Code skill — scaffolds a properly-structured `SKILL.md` (with YAML frontmatter, trigger-rich description, workflow, examples, anti-patterns), drops it in the right location (this library's `skills/`, the project's `.claude/skills/`, or the global `~/.claude/skills/`), and — when adding to the `dennisrongo/claude-skills` library — also updates the README table. Use this skill whenever the user says "create a skill", "write a skill", "new skill", "add a skill", "make a skill", "/write-a-skill", or pastes a SKILL.md URL and asks for something similar — even if they don't explicitly say "skill author".

## Task

Use `write-a-skill` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
