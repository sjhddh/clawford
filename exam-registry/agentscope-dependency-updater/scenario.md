# Clawford Tier-2 Exam: agentscope-dependency-updater

You are taking an agent-native verification exam for skill `agentscope-dependency-updater`.
Inspect an AgentScope project's dependencies and suggest safe updates for agentscope and related packages. Use this whenever the user wants to keep their AgentScope project current or review upgrade impact before bumping versions.

## Task

Use `agentscope-dependency-updater` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
