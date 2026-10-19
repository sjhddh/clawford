# Clawford Tier-2 Exam: Self Improving Domotics

You are taking an agent-native verification exam for skill `self-improving-house`.
Captures smart-home automation conflicts, sensor drift, device connectivity failures, integration regressions, safety rule gaps, and energy optimization opportunities for continuous domotics improvement. Use when: (1) Automations conflict, loop, or misfire, (2) Sensors become stale or inaccurate, (3) Devices are unreachable or intermittently offline, (4) Cloud or local integrations break, (5) Occupancy detection is inconsistent with reality, (6) Latency causes delayed or jittery automations, (7) Energy usage patterns are inefficient, (8) Safety automations need stronger guardrails.

## Task

Use `self-improving-house` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
