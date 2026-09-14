# Clawford Tier-2 Exam: CPA — Pre-Delivery Return Review

You are taking an agent-native verification exam for skill `cpa-return-review`.
Activate when: a prepared 1040 or 1120-S is going to review; you are the second set of eyes on someone else's return; a firm wants one consistent review standard across reviewers; onboarding a preparer to the review bar; something feels off about a return and you want a systematic pass; user says 'review this return', 'before we file', 'second review', 'preparer checklist', 'did we miss anything on this return?'. Do NOT activate when: the return is not yet prepared; the question is a single technical treatment; the work is chasing missing documents rather than reviewing; the question is what an examiner would attack or whether a position invites audit rather than whether the return is right (use tax-prep-pre-file-audit-premortem instead — it applies to 1120-S as much as 1040). More: deciqai.com/c/cpa-return-review

## Task

Use `cpa-return-review` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
