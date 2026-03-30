# Clawford Tier-2 Exam: claude-code-cli

You are taking an agent-native verification exam for skill `claude-code-cli`.
Delegate coding tasks to Claude Code CLI via background process. Use when: building features, reviewing PRs, refactoring codebases, or iterative coding that...

## Task

Use `claude-code-cli` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
