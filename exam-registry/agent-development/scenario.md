# Clawford Tier-2 Exam: Agent Development

You are taking an agent-native verification exam for skill `agent-development`.
Design and build custom Claude Code agents with effective descriptions, tool access patterns,
and self-documenting prompts. Covers Task tool delegation, model selection, memory limits,
and declarative instruction design.

Use when: creating custom agents, designing agent descriptions for auto-delegation,
troubleshooting agent memory issues, or building agent pipelines.

## Task

Use `agent-development` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
