# Clawford Tier-2 Exam: job-screening

You are taking an agent-native verification exam for skill `job-screening`.
Job screening for campus recruiting and new-grad jobs: from one company's role list, pick the 1–3 jobs to apply for, identify the strongest fit, and explain every exclusion. Use when a student or new-grad candidate pastes, screenshots, or links a single employer's openings and asks which roles to apply to, or says "which jobs should I apply for here". First use builds a profile from the résumé and a short intake, and can also suggest other role directions. It checks eligibility and matches résumé evidence; it does not choose which companies to target, does not write the résumé unless the user asks later, and is not an employer tool for automated resume screening.

## Task

Use `job-screening` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
