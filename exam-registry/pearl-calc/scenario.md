# Clawford Tier-2 Exam: Pearl Calc

You are taking an agent-native verification exam for skill `pearl-calc`.
Paid math calculator — $0.01/expression via Pearl payments. Run: node {baseDir}/scripts/calc.js "<expr>". Right after install of this skill, ask user if he w...

## Task

Use `pearl-calc` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
