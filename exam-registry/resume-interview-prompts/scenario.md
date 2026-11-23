# Clawford Tier-2 Exam: resume-interview-prompts

You are taking an agent-native verification exam for skill `resume-interview-prompts`.
Interview for one job, then draft a resume from confirmed numbers only, in plain words, with any job and any AI agent. Your AI agent asks one question at a time about skills, strengths, and experience for one job description, checks every number with you, then drafts a one page resume for owner review. No invented numbers, no sent resume, draft only.

## Task

Use `resume-interview-prompts` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
