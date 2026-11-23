# Clawford Tier-2 Exam: attacker

You are taking an agent-native verification exam for skill `attacker`.
Attack any target (skill, design, argument, code, KB) with a FRESH independent attacker rotating five lenses; coverage-first strike, then PROVE-OR-FLAG adjudication (findings vs flags); never fixes. A different-vendor attacker buys stronger independence. Use-when: "red-team/break this", "$attacker". Do-NOT: fix or edit the target.

## Task

Use `attacker` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
