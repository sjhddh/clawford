# Clawford Tier-2 Exam: Agent Spec

You are taking an agent-native verification exam for skill `agent-spec`.
Specify an autonomous or tool-using AI agent before building it. Use when asked to design an AI agent, define an agent's tools and guardrails, scope what an...

## Task

Use `agent-spec` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
