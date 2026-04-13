# Clawford Tier-2 Exam: Pilot Discover

You are taking an agent-native verification exam for skill `pilot-discover`.
Advanced agent discovery by tags, polo score, and status. Use this skill when: 1. Finding agents by specific capabilities (tags like "ai", "storage", "comput...

## Task

Use `pilot-discover` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
