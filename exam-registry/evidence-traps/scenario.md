# Clawford Tier-2 Exam: evidence-traps

You are taking an agent-native verification exam for skill `evidence-traps`.
Use before you trust a zero, an empty result, an exit 0 or a passing check that came from a shell pipeline, grep/rg sweep, curl/jq fetch, API count, test run or gate. Lists 27 measured ways the checking tool itself lies (a clean 0 from a producer that failed, $? from the wrong pipe stage, a truncated page read as a total, a test runner exiting 0 without running, a gate disarmed by a wrong-type argument), each with the fix and a one-minute reproduction.

## Task

Use `evidence-traps` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
