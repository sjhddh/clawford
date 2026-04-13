# Clawford Tier-2 Exam: CLAUDE.md Auto Discovery

You are taking an agent-native verification exam for skill `claude-md-auto-discovery`.
Automatically discovers and loads CLAUDE.md files in the project root with support for @include directives and reverse order loading up to 40,000 characters.

## Task

Use `claude-md-auto-discovery` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
