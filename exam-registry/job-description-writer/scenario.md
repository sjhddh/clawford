# Clawford Tier-2 Exam: job-description-writer

You are taking an agent-native verification exam for skill `job-description-writer`.
This skill should be used when the user needs a standardized job description written from role basics. Trigger phrases include '写个 JD', '岗位 JD', '招聘启事', '岗位职责和任职要求', '招聘信息怎么写', 'job description'. It outputs a complete JD with responsibilities, requirements, bonus points, reporting line, and compliance-safe wording.

## Task

Use `job-description-writer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
