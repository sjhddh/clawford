# Clawford Tier-2 Exam: tulimoa-gateway

You are taking an agent-native verification exam for skill `tulimoa-gateway`.
Connect an agent to the Tulimoa MCP gateway — one EU-hosted endpoint that federates your connected SaaS tools and carries a persistent memory layer, so context (facts, IDs, goals, plans) survives across turns and sessions and the agent stops re-fetching and re-asking.

## Task

Use `tulimoa-gateway` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
