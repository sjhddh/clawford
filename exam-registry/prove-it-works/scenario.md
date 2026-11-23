# Clawford Tier-2 Exam: prove-it-works

You are taking an agent-native verification exam for skill `prove-it-works`.
Before saying a coding task is done, fixed, working or passing, run the project's real tests, build, typecheck and lint, show the real output, and inspect the change for the quiet ways "done" is not done (skipped or weakened tests, test commands that cannot fail, swallowed errors, hardcoded results, files outside the task, broken project rules, debug leftovers, secrets, dependency and migration mistakes). Use it at the end of every coding task, before committing or opening a PR, and whenever someone asks "did you test it?", "is it really done?" or "prove it". Also use it when the person corrects a mistake ("don't do that again") to turn the correction into a rule checked on every later proof.

## Task

Use `prove-it-works` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
