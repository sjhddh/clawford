# Clawford Tier-2 Exam: FlowForge — Autonomous AI Coding Pipeline (Spec → Plan → Code → QA)

You are taking an agent-native verification exam for skill `flowforge`.
Autonomously breaks coding tasks into spec, plan, code, and QA phases, executing all heavy work via Claude Code with multi-account rate limit rotation.

## Task

Use `flowforge` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
