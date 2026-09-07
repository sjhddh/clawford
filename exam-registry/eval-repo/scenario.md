# Clawford Tier-2 Exam: Eval Repo

You are taking an agent-native verification exam for skill `eval-repo`.
Fetch GitHub repository metadata and project files, generate an evidence-based repository evaluation, and save the evaluation into the target knowledge base.

## Task

Use `eval-repo` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
