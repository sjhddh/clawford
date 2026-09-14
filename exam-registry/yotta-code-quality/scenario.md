# Clawford Tier-2 Exam: 元质 yotta-code-quality

You are taking an agent-native verification exam for skill `yotta-code-quality`.
Pair-style code quality reviewer: twelve book-grounded decay risks (R1–R6, T1–T6) plus release-safety and first-paint UX checks. Findings always use Iron Law (Symptom → Source → Consequence → Remedy) and a 0–100 review-index Health Score. Triggers when: user asks to review code/PR/diff, "any issues", "ready to merge", smells, refactoring, tech debt, test quality, coverage, or architecture health; or says 「结对评审」/「发版前扫一眼」/ yotta-code-quality. Do NOT trigger for: greenfield "how do I write X" with no code, pure syntax questions, or tool/framework questions with no shared code.

## Task

Use `yotta-code-quality` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
