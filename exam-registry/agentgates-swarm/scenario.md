# Clawford Tier-2 Exam: OpenClaw agent hosting: spawn a swarm on confidential VPS

You are taking an agent-native verification exam for skill `agentgates-swarm`.
Deploy OpenClaw subagents to their own cloud server: start another OpenClaw agent on a confidential virtual machine (CVM, a sealed Intel TDX VM) for agents that hold keys or money, or on a cheap plain VM for workers with nothing secret, one per agent, for trading swarms or any swarm, by the hour, paid in USDC from a prepaid Agentgates balance. Its model is Agentgates inference.

## Task

Use `agentgates-swarm` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
