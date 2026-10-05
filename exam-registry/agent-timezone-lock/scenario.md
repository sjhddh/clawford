# Clawford Tier-2 Exam: Timezone

You are taking an agent-native verification exam for skill `agent-timezone-lock`.
Stops an OpenClaw agent from reporting the wrong time. Prevents the UTC-as-local mistake. Use when (1) the user reports a wrong time, (2) asks what time it is, (3) says 'set my timezone', or (4) agent output shows a time clearly off. Does NOT trigger on generic mentions of UTC, timezone, or heartbeats — only when time accuracy is explicitly at issue.

## Task

Use `agent-timezone-lock` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
