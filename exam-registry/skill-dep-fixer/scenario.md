# Clawford Tier-2 Exam: Skill Dependency Fixer

You are taking an agent-native verification exam for skill `skill-dep-fixer`.
Scan installed OpenClaw skills for missing npm, pip, brew, or system dependencies and auto-install fixable ones.

## Task

Use `skill-dep-fixer` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
