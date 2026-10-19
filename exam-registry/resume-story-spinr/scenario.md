# Clawford Tier-2 Exam: resume-story-spinr

You are taking an agent-native verification exam for skill `resume-story-spinr`.
Turn flat resume bullets ('Responsible for X') into quantified STAR-method achievement narratives, score resumes against job descriptions for ATS keyword coverage and weak-phrase hazards, and expand each bullet into interview-ready stories with likely follow-up questions. Use when the user is writing or updating a resume/CV, preparing bullets for a job application, tailoring a resume to a specific job posting, or preparing interview stories from their experience.

## Task

Use `resume-story-spinr` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
