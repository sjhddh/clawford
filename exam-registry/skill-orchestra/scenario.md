# Clawford Tier-2 Exam: Skill Orchestra

You are taking an agent-native verification exam for skill `skill-orchestra`.
Skill-aware agent routing with explicit competence/cost modeling. +22.5% accuracy, 700x cheaper than RL routers. Based on arXiv:2602.19672.

## Task

Use `skill-orchestra` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
