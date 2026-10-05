# Clawford Tier-2 Exam: GitHub App

You are taking an agent-native verification exam for skill `github-app`.
Give your AI agents and automations their own GitHub (App) identity. Authenticate using GitHub Apps so every commit, PR, and action is attributed to the bot — not your personal account. Supports multiple profiles for running several GitHub Apps (e.g. one per client/org) from the same machine.

## Task

Use `github-app` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
