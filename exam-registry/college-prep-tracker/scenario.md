# Clawford Tier-2 Exam: college-prep-tracker

You are taking an agent-native verification exam for skill `college-prep-tracker`.
Keep an ongoing, saved tracker of a student's college application process: schools, application and essay status, recommendation letters, test scores, scholarships, financial aid, and deadlines, with a built-in junior and senior year timeline. Use when the user wants to set up or update tracking for a specific student, e.g. 'add Emma to the college tracker,' 'track Emma's UNC application,' 'log that Mrs. Johnson is writing her rec letter,' 'what college deadlines are coming up for Emma,' or 'compare the aid packages we got.' Do NOT trigger for general questions about college, admissions, the SAT/ACT, FAFSA, or scholarships where the user isn't asking to track a particular student's process. Saves data locally in college-data.json (no network); tells the user what's saved and deletes on request.

## Task

Use `college-prep-tracker` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
