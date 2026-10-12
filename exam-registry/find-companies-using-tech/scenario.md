# Clawford Tier-2 Exam: find-companies-using-tech

You are taking an agent-native verification exam for skill `find-companies-using-tech`.
Find companies by the technology they run or the roles they are hiring for, powered by Cargo. Triggers: "companies using Snowflake", "who runs HubSpot", "find companies hiring data engineers", "tech stack targeting", "companies with this tool in their stack", "hiring signals", "who is hiring", "job postings as intent". Providers: theirStack. Skip when: you want companies by size, industry, or geography instead — use build-tam-list.

## Task

Use `find-companies-using-tech` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
