# Clawford Tier-2 Exam: PR Context Diagram

You are taking an agent-native verification exam for skill `pr-context-diagram`.
Create or update pull request descriptions that are easy for humans and agents to review. Use when asked to create a PR, improve a PR body, add context, compare before/after behavior, add Mermaid diagrams, summarize verification, or document drawbacks and future improvements for code changes.

## Task

Use `pr-context-diagram` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
