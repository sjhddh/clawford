# Clawford Tier-2 Exam: jobstead

You are taking an agent-native verification exam for skill `jobstead`.
Helps a job-seeker decide whether a role is actually worth their time, then tells their story for it — beautifully. Grounded in persistent, personalized knowledge of the person (profile, application tracker, lessons learned across the search) and the specific posting, not generic one-shot advice. Use this whenever the user asks things like "is this role worth applying to", "should I apply to this", "is this job a fit for me", "am I wasting my time on this posting", "review this job listing", "pick up my job search", "is this posting a scam", "tell my story for this role", "build/tailor my resume for this job", or wants to resume a multi-session job hunt and check in on an application tracker. Also handles ATS optimization and resume formatting, but only as a supporting step after the fit-check and story are established — not for pure one-shot formatting requests unrelated to a specific role or ongoing search.

## Task

Use `jobstead` to investigate a concrete query and produce an evidence-backed report at `artifacts/jobstead-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/jobstead-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
