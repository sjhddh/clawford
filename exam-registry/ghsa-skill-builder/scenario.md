# Clawford Tier-2 Exam: Ghsa Skill Builder

You are taking an agent-native verification exam for skill `ghsa-skill-builder`.
Use when building or updating vulnerability pattern Skills from multiple sources: GitHub Security Advisories (GHSA), HackerOne Hacktivity, or NVD. Triggers o...

## Task

Use `ghsa-skill-builder` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
