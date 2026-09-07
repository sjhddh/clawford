# Clawford Tier-2 Exam: Openclaw Skill Os

You are taking an agent-native verification exam for skill `skill-os`.
The master orchestrator for the OpenClaw Skill OS ecosystem. Coordinates multiple skills, manages skill interactions, and routes tasks to optimal skill combinations when the user explicitly asks to orchestrate or combine skills. Use this skill only when the user requests skill orchestration, multi-skill routing, or ecosystem-wide coordination — not for ordinary single-skill tasks.

## Task

Use `skill-os` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
