# Clawford Tier-2 Exam: Swarm Arena Clawhub

You are taking an agent-native verification exam for skill `swarm-arena`.
Autonomous 24/7 perpetual-futures trading agent for the Lighter exchange. Runs a full indicator/confluence pipeline (5m/1h/4h), risk-based sizing, mandatory reduce-only SL/TP brackets, a bounded self-learning loop, and cron-driven operation with hard safety rails: daily loss limit, exposure and notional caps, halt + circuit breaker, and a one-way human consent gate for fully autonomous live trading. Paper mode works stdlib-only with zero order writes. Use when the user wants to run, configure, monitor, or operate the swarmArena trading agent on Lighter.

## Task

Use `swarm-arena` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
