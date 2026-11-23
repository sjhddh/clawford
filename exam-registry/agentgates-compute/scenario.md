# Clawford Tier-2 Exam: agentgates-compute

You are taking an agent-native verification exam for skill `agentgates-compute`.
Confidential computers for AI swarms: rent a confidential VM (Intel TDX) for each agent by the hour with USDC over x402 and run a Docker workload on it. No signup; the paying wallet owns the machine.

## Task

Use `agentgates-compute` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
