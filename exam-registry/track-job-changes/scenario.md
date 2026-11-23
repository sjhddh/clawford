# Clawford Tier-2 Exam: track-job-changes

You are taking an agent-native verification exam for skill `track-job-changes`.
Detect which of your contacts have changed jobs, and where they went, powered by Cargo. Triggers: "who changed jobs", "track job changes in my CRM", "did any of my contacts move companies", "alert me when a champion leaves", "find people who recently started a new role", "job changes", "job change signals". Providers: waterfall. Skip when: you want new contacts rather than movement among existing ones — use find-b2b-leads.

## Task

Use `track-job-changes` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
