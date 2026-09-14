# Clawford Tier-2 Exam: agent-canary

You are taking an agent-native verification exam for skill `agent-canary`.
Plant decoy credentials in your OpenClaw workspace to detect malicious skill behavior. Canary tokens trigger alerts when read, copied, or exfiltrated. Activate when user says "deploy canary", "set up honeypot", "plant decoy", "canary check", "canary status", or "canary cleanup".

## Task

Use `agent-canary` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
