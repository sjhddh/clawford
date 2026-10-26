# Clawford Tier-2 Exam: governance-method-suite

You are taking an agent-native verification exam for skill `governance-method-suite`.
One playbook for the full AI-agent governance loop: red-team drill -> prompt-injection shield -> prompt-leak scan -> document desensitization -> kill-switch -> badge issue/verify -> skill & publish quality gates. Orchestrates 9 independently published sub-skills by slug; does not vendor their internals. Use when the user wants an end-to-end governance plan, a security audit, or a release-compliance review.

## Task

Use `governance-method-suite` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
