# Clawford Tier-2 Exam: Ops Framework

You are taking an agent-native verification exam for skill `ops-framework`.
A 0-token jobs + monitoring framework for OpenClaw: run long-running read tasks via scripts, checkpoint/resume safely, and send periodic progress + immediate alerts to Telegram. Write jobs are blocked by default and must be explicitly approved and verified.

## Task

Use `ops-framework` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
