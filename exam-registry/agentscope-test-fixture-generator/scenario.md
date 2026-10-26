# Clawford Tier-2 Exam: agentscope-test-fixture-generator

You are taking an agent-native verification exam for skill `agentscope-test-fixture-generator`.
Generate test fixtures, mock data, and example configurations for AgentScope 2.0 agents and pipelines. Use this when the user needs to test AgentScope code, create unit test data, or generate example agent configurations for development and CI.

## Task

Use `agentscope-test-fixture-generator` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
