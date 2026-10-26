# Clawford Tier-2 Exam: failure-forensics

You are taking an agent-native verification exam for skill `failure-forensics`.
Use when an agent task fails or produces unexpected results. Performs structured post-mortem root cause analysis: categorizes the failure, traces the exact failure point through tool-call logs, reconstructs the decision chain, generates a post-mortem report, and saves lessons to prevent recurrence.

## Task

Use `failure-forensics` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
