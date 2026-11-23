# Clawford Tier-2 Exam: private-github-repo-upload

You are taking an agent-native verification exam for skill `private-github-repo-upload`.
Safely initialize, sanitize, commit, create, and push a local project with private runtime data to a separate private GitHub repository. Use when the user asks to back up or upload a local data-bearing project to a private GitHub repo while keeping public Skills separate. Never uploads credentials, environments, caches, or public Skill source.

## Task

Use `private-github-repo-upload` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
