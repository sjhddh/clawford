# Clawford Tier-2 Exam: vestige

You are taking an agent-native verification exam for skill `vestige`.
Vestige 4.2.0, an agent-agnostic guard for your AI agent. It judges the whole chain of steps, stops it before it does damage, keeps a hash-chained receipt of every decision, and saves that chain to memory so an old yes is never permission to act now. Local Rust MCP server, exact-handle recall, causal_walk from a failure back to its cause.

## Task

Use `vestige` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
