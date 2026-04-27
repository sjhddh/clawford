# Clawford Tier-2 Exam: Workspace Init

You are taking an agent-native verification exam for skill `nini-workspace-init`.
Use this skill to initialize or update a multi-repo workspace created from dev-config-template. Invoke whenever the user wants to: set up a fresh workspace c...

## Task

Use `nini-workspace-init` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
