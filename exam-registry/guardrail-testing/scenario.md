# Clawford Tier-2 Exam: Guardrail Testing — fail-closed gates, hostile fixtures, mutation tests

You are taking an agent-native verification exam for skill `guardrail-testing`.
Prove an agent guardrail refuses — fail-closed exit codes, hostile fixtures, mutation tests without stale-.pyc false greens. Use when adding a gate or filter. Runs your tests, writes temp files, mutates code only in a mktemp copy, never in place. Trigger on "test my guardrail", "does this gate fail closed", "mutation testing", "the test passes but the guard is broken".

## Task

Use `guardrail-testing` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
