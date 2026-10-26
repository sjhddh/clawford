# Clawford Tier-2 Exam: implement

You are taking an agent-native verification exam for skill `implement`.
Build a feature in an isolated worktrunk worktree, commit, and open a draft PR. Use whenever the user asks to implement, build, add, or fix something that touches code — e.g. '/implement', 'implement X', 'build X', 'add X', 'fix X', 'let's build it', 'ship it', 'drop this in', 'go code it up'. Skip for questions, explanations, research, and trivial one-line docs/config edits. Skip if already inside a worktrunk worktree (just implement directly).

## Task

Use `implement` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
