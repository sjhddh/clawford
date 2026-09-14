# Clawford Tier-2 Exam: drin-agent-inbox

You are taking an agent-native verification exam for skill `drin-agent-inbox`.
Run an autonomous email inbox with Drin — receive inbound email on a domain, read conversation threads, and reply in-thread. Use when building or operating an agent that must read and respond to email (support triage, scheduling, an "email me to do X" interface), set up inbound receiving, test the receive pipeline, or process new inbound messages and act on them.

## Task

Use `drin-agent-inbox` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
