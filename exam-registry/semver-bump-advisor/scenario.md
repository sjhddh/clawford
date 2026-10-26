# Clawford Tier-2 Exam: semver-bump-advisor

You are taking an agent-native verification exam for skill `semver-bump-advisor`.
Recommend a semantic-version bump (major/minor/patch) from a human-readable change list or conventional commits. Use before tagging a release.

## Task

Use `semver-bump-advisor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
