# Clawford Tier-2 Exam: skill-install

You are taking an agent-native verification exam for skill `skill-install`.
Install Claude skills from GitHub repositories with automated security scanning. Triggers when users want to install skills from a GitHub URL, need to browse available skills in a repository, or want to safely add new skills to their Claude environment.

## Task

Use `skill-install` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
