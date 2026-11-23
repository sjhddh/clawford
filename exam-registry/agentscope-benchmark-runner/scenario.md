# Clawford Tier-2 Exam: agentscope-benchmark-runner

You are taking an agent-native verification exam for skill `agentscope-benchmark-runner`.
Run benchmarks against AgentScope 2.0 agents and pipelines. Use this when the user wants to measure latency, throughput, token usage, or compare model/prompt performance in a reproducible way.

## Task

Use `agentscope-benchmark-runner` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
