# Clawford Tier-2 Exam: Skill2Team

You are taking an agent-native verification exam for skill `skill2team`.
It is designed for the point where a skill has become too complex to maintain as one large instruction set, especially when design work, audit work, review gates, execution flow, and deployment assumptions are mixed together. Skill2Team converts that kind of complex skill into a multi-agents team

## Task

Use `skill2team` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
