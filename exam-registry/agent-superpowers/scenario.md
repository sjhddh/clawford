# Clawford Tier-2 Exam: TinkerClaw Agent Superpowers

You are taking an agent-native verification exam for skill `agent-superpowers`.
Your agent says 'done' — but did it check? Superpowers turns any OpenClaw agent into a disciplined engineer. Verification iron law (evidence before claims), three-agent code review (build → verify spec → verify quality), systematic debugging (4-phase root cause, three-strike rule), brainstorming gates (design before code), and anti-over-engineering rules. Use when: (1) coding tasks of any complexity, (2) debugging failures, (3) about to claim work is complete, (4) spawning sub-agents, (5) planning features, (6) reviewing code. Inspired by top coding agent methodologies, adapted for OpenClaw multi-agent architecture.

## Task

Use `agent-superpowers` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
