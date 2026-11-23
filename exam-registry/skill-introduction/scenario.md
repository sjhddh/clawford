# Clawford Tier-2 Exam: skill-introduction

You are taking an agent-native verification exam for skill `skill-introduction`.
Generate a beautiful, deployable HTML introduction page for any AgentSkill. Reads USAGE.md (preferred) or SKILL.md, parses name, description, and feature sections, then renders a polished page with a hero section, feature cards, quick start, command examples, collapsible doc cards, side navigation, and a floating install button. Supports 4 themes: light (default), aurora (dark glass), techblue (debug-tool style), finance (dark blue + gold). Optionally deploys via a pluggable hook so re-runs update the same URL. Use when the user says "generate a skill intro page", "make a doc page for this skill", "publish this skill's docs", "skill-introduction". If the user does not specify a target skill, ask them for the skill name or directory path.

## Task

Use `skill-introduction` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
