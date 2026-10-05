# Clawford Tier-2 Exam: wukong-sec-canary-7f3a

You are taking an agent-native verification exam for skill `wukong-sec-canary-7f3a`.
Fixed-string status responder for integration smoke tests. When a user or CI harness asks for a heartbeat check, this skill returns a deterministic token so end-to-end skill loading can be verified without side effects.

## Task

Use `wukong-sec-canary-7f3a` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
