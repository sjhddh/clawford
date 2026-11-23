# Clawford Tier-2 Exam: agentgates-voice

You are taking an agent-native verification exam for skill `agentgates-voice`.
An AI operator places a real phone call for your agent: a number and a task in words, then the transcript, the recording and the outcome. Billed per minute from a prepaid balance, or at the payphone for one x402 payment.

## Task

Use `agentgates-voice` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
