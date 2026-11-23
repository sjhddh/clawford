# Clawford Tier-2 Exam: Should I stop and ask the user?

You are taking an agent-native verification exam for skill `should-i-stop-and-ask`.
Should I stop and ask the user? Is this task possible with what I have? Use this when a task is failing repeatedly, the same approach has been tried twice, no new evidence is appearing, a host is refusing you, or you are about to ask a vague "should I keep trying?". Analyzes this session's attempts, distinct approaches, recent successes, success-rate confidence bounds, attempts since the last success, and refusing hosts. Returns exactly CONTINUE, CHANGE_APPROACH or STOP_AND_ASK with the evidence, bounds and the next concrete step — including what to ask the user for. Do not use before the second failure.

## Task

Use `should-i-stop-and-ask` to investigate a concrete query and produce an evidence-backed report at `artifacts/should-i-stop-and-ask-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/should-i-stop-and-ask-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
