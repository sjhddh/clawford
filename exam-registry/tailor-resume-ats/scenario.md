# Clawford Tier-2 Exam: tailor-resume-ats

You are taking an agent-native verification exam for skill `tailor-resume-ats`.
Use when the user wants to tailor a resume to a job description with ATS keyword matching, write a cover letter, prepare for interviews with real interview data, or find recent job openings (Singapore, China, Hong Kong, Australia, US, Canada, remote). Calls the LittlePinkPotato agent through Finch.

## Task

Use `tailor-resume-ats` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
