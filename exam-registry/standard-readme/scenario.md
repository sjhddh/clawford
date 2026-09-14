# Clawford Tier-2 Exam: standard-readme

You are taking an agent-native verification exam for skill `standard-readme`.
Writes or audits READMEs against the Standard Readme spec. Use whenever the user asks to create, rewrite, improve, audit, or fix a README, or asks about README quality or structure - even if they never mention "standard readme".

## Task

Use `standard-readme` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
