# Clawford Tier-2 Exam: agent-delegability-assessment

You are taking an agent-native verification exam for skill `agent-delegability-assessment`.
Activate when: user says 'which work can we hand to an AI agent', 'how far can this process be automated', 'does the agent need human approval', 'how much permission should the agent get', asks 'can the agent just do this on its own?', or is preparing to let an agent take over a business process. Do NOT activate when: the question is only which AI tool to buy (use build-buy-partner-ai); the process is not yet defined and is done differently every time. More: deciqai.com/c/agent-delegability-assessment

## Task

Use `agent-delegability-assessment` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
