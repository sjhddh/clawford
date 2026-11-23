# Clawford Tier-2 Exam: withHuman

You are taking an agent-native verification exam for skill `withhuman`.
What withHuman is and how it works. withHuman is the approval layer for AI agents. It intercepts an agent's tool calls and decides, through rules and human reviewers, which run automatically, which are refused and which wait for a person to approve them. Explains agents, instances, approval requests and decisions, approval pipelines, escalation paths, the review queue, the hosted and self-hosted editions, and how to behave when your own tool call is held, denied or expired. Start here for any withHuman question; it points to the withhuman-cli and withhuman-pipelines skills for setup work. Trigger keywords - withhuman, withHuman, what is withhuman, human in the loop, human approval for AI agents, agent approval, approval request, call was denied, approval timed out, gated by approval policy, Agent Approval Protocol, AAP.

## Task

Use `withhuman` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
